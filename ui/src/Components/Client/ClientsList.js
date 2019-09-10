import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchClients as fetchClientsAction } from "../../../actions/index";

class ClientList extends Component {
  static propTypes = {
    clients: PropTypes.object.isRequired,
    fetchClients: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchClients } = this.props;
    fetchClients();
  }

  render() {
    const { clients } = this.props;
    const clientsArr = Object.values(clients);

    return (
      <div style={{ marginTop: "10px" }}>
        <ul>
          {clientsArr.map((client, index) => (
            <li key={index}>{client.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.clients
});

const mapDispatchToProps = {
  fetchClients: fetchClientsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientList);
