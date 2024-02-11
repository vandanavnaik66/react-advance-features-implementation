import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Pill } from "./components/Pill";

function App() {
  const [searchInput, SetsearchInput] = useState(""); // for store the searched input
  const [suggestions, setSuggestion] = useState([]); //for storing the fetched API, display those as suggestions
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectionOptionsSet, setselectionOptionsSet] = useState(new Set());
  const [suggestionUpDown, setSuggestionUpDown] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    const fetchUser = () => {
      setSuggestionUpDown(0);

      if (searchInput.trim() === "") {
        setSuggestion([]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${searchInput}`)
        .then((res) => res.json())
        .then((data) => setSuggestion(data))
        .catch((err) => console.log(err));
    };

    fetchUser();
  }, [searchInput]);

  const handleSelectOption = (user) => {
    setSelectedOptions([...selectedOptions, user]);
    setselectionOptionsSet(new Set([...selectionOptionsSet, user.email]));
    SetsearchInput("");
    setSuggestion([]);
    inputRef.current?.focus();
  };

  const handleRemove = (selectedUser) => {
    const remainedSelection = selectedOptions.filter(
      (user) => user.id !== selectedUser.id
    );
    setSelectedOptions(remainedSelection);
    //  now update the set of selectionOptionSet => you need to create a copy of set of selectionOptionsSet again => remove the id from  that copy and update using set function of setSelectionOptionsSet
    const setUpdation = new Set(selectionOptionsSet);
    setUpdation.delete(selectedUser.id);
    setselectionOptionsSet(setUpdation);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedOptions.length > 0
    ) {
      // selectionOptions.pop(); =====> this method also works
      setSuggestion([]);
      const lastIndex = selectedOptions[selectedOptions.length - 1];
      handleRemove(lastIndex);
    } else if (e.key === "ArrowDown" && suggestions.length > 0) {
      e.preventDefault();
      setSuggestionUpDown((preIndex) =>
        preIndex < suggestions.length - 1 ? preIndex + 1 : preIndex
      );
    } else if (e.key === "ArrowUp" && suggestions.length > 0) {
      e.preventDefault();
      setSuggestionUpDown((preIndex) =>
        preIndex > 0 ? preIndex - 1 : preIndex
      );
    } else if (
      e.key === "Enter" &&
      suggestionUpDown >= 0 &&
      suggestionUpDown < suggestions.length
    ) {
      handleSelectOption(suggestions[suggestionUpDown]);
    }
  };

  console.log(suggestions);
  return (
    <div className="user-input-container">
      <div className="user-search-input">
        {/* pills */}
        {/* searched suggestion */}

        {selectedOptions.map((selected, index) => {
          return <Pill selected={selected} onClick={handleRemove} />;
        })}
        <div>
          <input
            ref={inputRef}
            value={searchInput}
            onChange={(e) => SetsearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for a User..."
          />
          {/* suggestion list */}
          <ul className="suggestion-list">
            {suggestions?.users?.map((user, index) => {
              return !selectionOptionsSet.has(user.email) ? (
                <li
                  key={user.email}
                  onClick={() => handleSelectOption(user)}
                  className={index === suggestionUpDown ? "active" : ""}
                >
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              ) : (
                <></>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
