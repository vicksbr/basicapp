import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Carousel } from 'antd';
import Slider from "react-slick";

const styleSider = {
  background: "#ccc",
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
};

const styleMainView = {
  background: "#fff",
  padding: "0 24px 24px"
};

const styleLogo = {
  width: "120px",
  height: "31px",
  background: "grey",
  margin: "16px 24px 16px 0",
  float: "right"
}

const StyleSlider = {
  textAlign: 'center',
  height: '160px',
  lineHeight: '160px',
  background: '#364d79',
  overflow: 'hidden',
}

const StyleH3 = {
  border: '3px solid cyan',
  height: '100%',
  padding: '0 0 0 0',
  margin: '0 0 0 0'
}

const carrouselSettings = {
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  infinite: true,
}

const itemsCarousel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const MainView = () => {
  const { Header, Sider, Content, Footer } = Layout;



  const [contentIdx, setcontentIdx] = useState(0)

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div style={styleLogo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">items</Menu.Item>
          <Menu.Item key="2">cart</Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '0 50px', marginTop: 64 }}>

        <div style={{ textAlign: 'center', backgroundColor: getRandomColor(), padding: '24px', height: '500px' }}>
          <h1>Conteudo {contentIdx}</h1>
        </div>

        <div style={{ backgroundColor: 'DarkSlateBlue', height: '200px', widht: '100%', padding: '24px' }}>
          <Carousel style={StyleSlider} {...carrouselSettings}>
            {itemsCarousel.map((el, idx) => <div color='cyan' key={idx}><h3 style={StyleH3} onClick={() => setcontentIdx(idx)}>{el}</h3></div>)}
          </Carousel>
        </div>
      </Content>



      <Footer style={{ textAlign: 'center' }}>Project powered by React and Ant Design</Footer>
    </Layout>
  );
};

export default MainView;
