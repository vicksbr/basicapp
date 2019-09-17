import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import ItemsComponent from "./Client/Carousel";
import ShopHeader from "./Client/ShopHeader";


const MainView = () => {
  const { Footer } = Layout;
  const [contentIdx, setcontentIdx] = useState(0)

  return (
    <Layout>
      <ShopHeader />
      <ItemsComponent contentIdx={contentIdx} setcontentIdx={setcontentIdx} />
      <Footer style={{ textAlign: 'center' }}>Project powered by React and Ant Design</Footer>
    </Layout >
  );
};

export default MainView;
