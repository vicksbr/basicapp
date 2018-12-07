import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  divFlex: {
    display: "flex",
    flexDirection: "column"
  },
  divAddClient: {
    marginBottom: "10px"
  }
});

class Botao extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    inputValue: ""
  };

  handleInput = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { classes, handleNameChange } = this.props;
    const { inputValue } = this.state;

    return (
      <div>
        <div className={classes.divFlex}>
          <div className={classes.divAddClient}>
            <button type="button">Add cliente</button>
            <input type="text" name="AddClient" />
          </div>
          <div>
            <button onClick={() => handleNameChange(inputValue)} type="button">
              Muda o nome do App
            </button>
            <input
              type="text"
              name="MudaName"
              value={inputValue}
              onChange={this.handleInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Botao);
