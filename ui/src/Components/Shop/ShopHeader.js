import React from "react"
import { Layout, Menu } from 'antd';

const headerStyle = {
    position: 'fixed',
    zIndex: 1,
    width: '100%'
}
const styleLogo = {
    width: "120px",
    height: "31px",
    background: "grey",
    margin: "16px 24px 16px 0",
    float: "right"
}

const menuProps = {
    style: {
        lineHeight: '64px',
    },
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['1']
}

const ShopHeader = ({ menuState, setMenu }) => {
    const { Header } = Layout;

    return (
        <Header style={headerStyle}>
            <div style={styleLogo} />
            <Menu {...menuProps} onClick={(e) => setMenu(e.key)} selectedKeys={[menuState]}>
                <Menu.Item key="1">items</Menu.Item>
                <Menu.Item key="2">cart</Menu.Item>
            </Menu>
        </Header>
    )
}

export default ShopHeader