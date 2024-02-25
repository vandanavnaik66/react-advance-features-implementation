import React, { useEffect, useState } from "react";
import "./App.css";
import { SingleJob } from "./Components/SingleJob";

const api_endpoints = "https://hacker-news.firebaseio.com/v0";
const items_per_page = 6;

export const App = () => {
  const [jobIds, setJobIds] = useState(null);
  const [JobArr, setJobArr] = useState([]);
  const [curPage, setCurPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const fetchAPI = async (page) => {
    setCurPage(page);
    setIsFetching(true);

    let idObj = jobIds;
    //let idObj;     don't use like this because    /*********very imp point  ************/
    //  only once we will fetching 1st  api when 1st time jobIds are null, if you keep idObj without assigning anything 1st time when we fetch the data it works, but next step when we are performing slice in next step when we again press the button it tells idObj is undefined bcz that will be null , and that was updated inside block scope if you make state variable of jobIds is equal to idObj in next rendering it takes already fetched data so no need to fetch again and again too
    if (jobIds === null) {
      const idJson = await fetch(`${api_endpoints}/jobstories.json`);
      const Obj = await idJson.json();
      console.log(Obj);
      idObj = Obj;
      setJobIds(Obj);
    }

    const jobObjPerPage = idObj.slice(
      page * items_per_page,
      page * items_per_page + items_per_page
    );

    const singleJobObj = await Promise.all(
      jobObjPerPage.map((oneJobId) =>
        fetch(`${api_endpoints}/item/${oneJobId}.json`).then((res) =>
          res.json()
        )
      )
    );
    console.log(singleJobObj);
    setJobArr([...JobArr, ...singleJobObj]);

    setIsFetching(false);
  };

  useEffect(() => {
    if (curPage === 0) fetchAPI(curPage);
  }, []);

  return (
    <div className="main-container">
      <h3>Hacker News Job Board</h3>
      {jobIds === null || JobArr.length < 1 ? (
        <h3>Loading..</h3>
      ) : (
        <div className="single-job-main-container">
            {JobArr.map((oneJob) => (
              <SingleJob {...oneJob} />
            ))}
        </div>
      )}
      <div className={isFetching ? "btnFetching" : ""}>
      <button className={isFetching ? "btnFetch" : "btn"}
      disabled={isFetching}
      onClick={() => fetchAPI(curPage + 1)}>
        {isFetching ? "Loading..." : "Loaded"}
      
      </button>
      </div>
      
    </div>
  );
};
