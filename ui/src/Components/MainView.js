import React from "react";
import { Layout } from "antd";
import Clients from "./Client/Clients";

const styleSider = {
  background: "#ccc"
};

const styleMainView = {
  background: "#fff",
  padding: "0 24px 24px"
};

const MainView = () => {
  const { Header, Sider } = Layout;
  return (
    <Layout>
      <Header className="header" />
      <Layout>
        <Sider width={250} style={styleSider}>
          <Clients />
        </Sider>
        <Layout style={styleMainView}>
          <p>MainViewContent</p>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainView;
