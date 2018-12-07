import React, { Component } from "react";
import ClientsPuro from "./ClientsPuro";
import Botao from "./Botao";

class App extends Component {
  state = {
    nomeApp: "Minha Aplicacao"
  };

  handleNameChange = valor => {
    this.setState({ nomeApp: valor });
  };

  render() {
    const { nomeApp } = this.state;

    return (
      <div>
        <p>Esse é um grande exemplo da {nomeApp}</p>
        <ClientsPuro />
        <Botao handleNameChange={this.handleNameChange} />
      </div>
    );
  }
}

export default App;
