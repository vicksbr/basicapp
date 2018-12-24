import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "antd";
import { clearDB as clearDBAction } from "../../../actions/index";

const ClearDBButton = props => (
  <div>
    <Button
      type="primary"
      style={{ marginTop: "10px" }}
      block
      onClick={() => props.clearDB()}
    >
      ClearDB
    </Button>
  </div>
);

ClearDBButton.propTypes = {
  clearDB: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  clearDB: clearDBAction
};

export default connect(
  null,
  mapDispatchToProps
)(ClearDBButton);
