import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SingleItem } from "./components/SingleItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} exact></Route>
          <Route path="/singleItem/:id" element={<SingleItem />}></Route>
        </Routes>
      </BrowserRouter>
    </Context>
  </React.StrictMode>
);
