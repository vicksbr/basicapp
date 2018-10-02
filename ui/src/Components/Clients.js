import React, { Component } from "react";
import { TextBox } from 'devextreme-react';

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
	<TextBox />
        <p>ola component cliente</p>
   	</div>
    );
  }
}

export default Clients;
