import React, { Component } from "react";
import Clients from "./Clients";
import Scripts from "./Scripts";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Clients />
        <Scripts />
      </div>
    );
  }
}
