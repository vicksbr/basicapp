import React from "react"
import { Layout } from "antd"

const footerStyle = {
    textAlign: 'center'
}

const Footer = () => {
    const { Footer } = Layout;

    return (
        <Footer style={footerStyle}>
            AFF Project powered by React and Ant Design
      </Footer>
    )
}

export default Footer
