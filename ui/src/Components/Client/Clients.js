import React from "react";
import ClientsList from "./ClientsList";
import ClientSearch from "./ClientSearch";
import AddNewClientButton from "./AddNewClientButton";

const div = {
  display: "flex",
  flexDirection: "column"
};

const divTools = {
  display: "flex"
};

const Clients = () => (
  <div style={div}>
    <div style={divTools}>
      <ClientSearch />
      <AddNewClientButton />
    </div>
    <div>
      <ClientsList />
    </div>
  </div>
);

export default Clients;
