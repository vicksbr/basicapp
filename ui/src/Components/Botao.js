import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addClient } from "../../actions/index";

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
    const { classes, handleNameChange, addClient } = this.props;
    const { inputValue } = this.state;

    return (
      <div>
        <div className={classes.divFlex}>
          <div className={classes.divAddClient}>
            <button type="button" onClick={() => addClient(inputValue)} >Add cliente</button>
            <input type="text" name="AddClient" value={inputValue} onChange={this.handleInput} />
          </div>          
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addClient
};

const BotaoConnected = connect(
  null,
  mapDispatchToProps
)(Botao);


export default withStyles(styles)(BotaoConnected);
