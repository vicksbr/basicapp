import React from 'react'
import { Layout } from "antd"
import { pushDataLayer } from "../utils"

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
};

const contentDivStyle = () => {
    return {
        textAlign: 'center',
        backgroundColor: getRandomColor(),
        padding: '24px',
        height: '700px'
    }
}
const contentStyle = { padding: '0 50px', marginTop: 64 }

const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const onClickCheckoutBtn = () => {
    console.log('tenta fazer a transação e out da erro ou dispara tela de compra efetuada')
    pushDataLayer({ event: 'CheckoutEvent', payload: mockitemsCarted })
}

const ShoppingCart = () => {

    const { Content } = Layout
    const listItems = mockitemsCarted.items.map((item, index) =>
        <h1 key={index}>{`sku: ${item.sku} qty: ${item.qty}`}</h1>
    )

    return (
        <Content style={contentStyle}>
            <div style={contentDivStyle()} >
                <h1>Visão Carrinho</h1>
                {listItems}
                <button onClick={onClickCheckoutBtn}>
                    checkout
          </button>
            </div>
        </Content>
    )
}

export default ShoppingCart