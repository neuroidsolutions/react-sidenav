import React, { Component } from "react";
import ReactSidebar from "react-sidenav";

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactSidebar navbarHeight={48} position="LEFT" />
      </div>
    );
  }
}
