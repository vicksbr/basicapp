import React, { Component } from "react";

class App extends Component {
  state = {
    nomeApp: "uma aplicação web react"
  };

  render() {
    const { nomeApp } = this.state;

    return (
      <div>
        <p>Esse é um grande exemplo de {nomeApp}</p>
      </div>
    );
  }
}

export default App;
