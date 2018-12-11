import React, { Component } from "react";
import ClientsList from "./ClientsList";
import Botao from "./Botao";

class App extends Component {
  state = {
    nomeApp: "uma aplicação web"
  };

  handleNameChange = valor => {
    this.setState({ nomeApp: valor });
  };

  handleAddClient = valor => {
    this.setState({ name: valor });
  };

  render() {
    const { nomeApp } = this.state;

    return (
      <div>
        <p>Esse é um grande exemplo de {nomeApp}</p>
        <ClientsList />
        <Botao
          handleNameChange={this.handleNameChange}
          handleAddClient={this.handleAddClient}
        />
      </div>
    );
  }
}

export default App;
