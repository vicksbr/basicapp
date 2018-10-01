import React, { Component } from "react";
import Clients from "./Clients";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>ola mundo react heheh</p>
        <Clients />
      </div>
    );
  }
}
