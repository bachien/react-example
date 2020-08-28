import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ListCards from "./Cards/ListCards";
// import Dom from "./DomExample/Dom";
import ChildComponent from "./childComponent/ChildComponent";

function App() {
  return (
    <div className="App container">
      <ChildComponent></ChildComponent>
    </div>
  );
}

export default App;
