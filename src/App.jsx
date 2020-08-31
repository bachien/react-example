import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ListCards from "./Cards/ListCards";
// import Dom from "./DomExample/Dom";
import ChildComponent from "./childComponent/ChildComponent";
import Admin from "./Container/Admin";
import LandingPage from "./Container/LandingPage";
import Main from "./Container/Main";
import Header from "./Container/Header";
import Footer from "./Container/Footer";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <Header></Header>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/landing-page" component={LandingPage}></Route>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
