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

  filterClientByName = (clientsToFilter, name) => {
    return clientsToFilter.filter(c => c.name.includes(name))
  }

  render() {
    const { clients, inputSearch } = this.props;
    const clientsArr = Object.values(clients);
    const clientsFiltered = this.filterClientByName(clientsArr, inputSearch)

    console.log(inputSearch)

    return (
      <div style={{ marginTop: "10px" }}>
        <ul>
          {clientsFiltered.map(client => (
            <li key={client.name}>{client.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.clients,
  inputSearch: state.clientSearch.input
});

const mapDispatchToProps = {
  fetchClients: fetchClientsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientList);
