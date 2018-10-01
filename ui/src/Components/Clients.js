import React, { Component } from "react";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: {}
    };
  }

  render() {
    return (
      <div>
        <p>ola component cliente</p>
      </div>
    );
  }
}

export default Clients;
