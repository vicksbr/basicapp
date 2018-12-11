import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClients } from "../../actions/index";

class ClientList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchClients } = this.props;
    fetchClients();
  }

  render() {
    const { clients } = this.props;
    const clientsArr = Object.values(clients);

    return (
      <div>
        <p>Lista de clientes</p>
        <div>
          {clientsArr.map((client, index) => {
            return <p key={index}>{client.name}</p>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.clients
});

const mapDispatchToProps = {
  fetchClients
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientList);
