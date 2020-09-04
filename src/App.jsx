import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ListCards from "./Cards/ListCards";
import ChildComponent from "./childComponent/ChildComponent";
import Admin from "./containers/Admin";
import LandingPage from "./containers/LandingPage";
import Main from "./containers/Main";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import TodoList from "./containers/TodoList";

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
          <Route exact path="/list" component={TodoList}></Route>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
