import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import AsideComponent from "./components/Aside";
import ContentComponent from "./components/Content";
import RelatedComponent from "./components/Related";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <main className="main">
          <AsideComponent />
          <ContentComponent />
        </main>

        <RelatedComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
