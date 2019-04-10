import { Input } from "antd";
import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import { setSearchClientInput as setSearchClientInputAction } from "../../../actions/clientSearchAction";

const ClientSearch = ({ input, setSearchClientInput }) => (
  <div style={{ height: "35px" }}>
    <Input.Search
      placeholder="input search text"
      value={input}
      onChange={e => setSearchClientInput(e.target.value)}
    />
  </div>
);

ClientSearch.propTypes = {
  setSearchClientInput: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  input: state.clientSearch.input
});

const mapDispatchToProps = {
  setSearchClientInput: setSearchClientInputAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientSearch);
