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
<<<<<<< HEAD
      <div>
	<p>OLA VICKS</p>
      </div>
=======
     	<div>
	<TextBox />
        <p>ola component cliente</p>
   	</div>
>>>>>>> 60fa609fbdc95d2fa8fea0f29dbd4d11897e517a
    );
  }
}

export default Clients;
