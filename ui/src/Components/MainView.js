import React, { useState } from 'react';
import { Layout } from 'antd';
import ItemsComponent from "./Shop/Carousel";
import ShopHeader from "./Shop/ShopHeader";
import { pushDataLayer } from "./utils";


const mockitemsCarted = {

  _id: "cart_id_1",
  status: "active",
  items: [
    {
      sku: "sku200",
      qty: 2,
      item_details: "details_sku2"
    },
    {
      sku: "sku100",
      qty: 10,
      details: "details_sku1"
    }
  ]
}




const footerStyle = {
  textAlign: 'center'
}

const ShopFooter = () => {
  const { Footer } = Layout;

  return (
    <Footer style={footerStyle}>
      Project powered by React and Ant Design
    </Footer>
  )
}

const onClickCheckoutBtn = () => {
  console.log('tenta fazer a transação e out da erro ou dispara tela de compra efetuada')
  pushDataLayer({ event: 'CheckoutEvent', payload: mockitemsCarted })

}

const ShoppingCart = () => {

  const listItems = mockitemsCarted.items.map((item, index) =>
    <li key={index}>{`sku: ${item.sku} qty: ${item.qty}`}</li>
  )

  return (
    <Layout.Content style={{ height: "500px", marginTop: 64 }}>
      <div style={{ height: "100%" }} >
        <h1>Visão Carrinho</h1>
        <ul>{listItems}</ul>
        <button onClick={onClickCheckoutBtn}>
          checkout
        </button>
      </div>
    </Layout.Content>
  )
}

const MainView = () => {

  const [menuState, setMenu] = useState('1')

  return (
    <Layout>
      <ShopHeader menuState={menuState} setMenu={setMenu} />
      {menuState === '1' ?
        <ItemsComponent /> :
        <ShoppingCart />

      }
      <ShopFooter />
    </Layout >
  );
};

export default MainView;
