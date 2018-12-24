import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "antd";
import {
  addClient as addClientAction,
  clearDB as clearDBAction
} from "../../../actions/index";

const styles = () => ({
  divFlex: {
    display: "flex",
    flexDirection: "column"
  },
  divAddClient: {
    marginBottom: "10px"
  }
});

class AddNewClientButton extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    addClient: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired
  };

  render() {
    const { classes, addClient, input } = this.props;
    return (
      <div>
        <div className={classes.divFlex}>
          <div>
            <Button
              type="primary"
              value="small"
              block
              onClick={() => addClient(input)}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  input: state.clientSearch.input
});

const mapDispatchToProps = {
  addClient: addClientAction,
  clearDB: clearDBAction
};

const AddNewClientButtonConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewClientButton);

export default withStyles(styles)(AddNewClientButtonConnected);
