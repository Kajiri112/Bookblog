import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./containers/About/about";
import Post from "./containers/Post/post";
import Buecher from "./containers/Buecher/buecher";
import Manga from "./containers/Manga/manga";

function App() {

  return (
    <Router>
      <div className="App">
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/buecher" component={Buecher} />
        <Route path="/manga" component={Manga} />
        <Route path="/post/:slug" component={Post} />

      </div>
    </Router>
  );
}

export default App;
