import { Carousel, Layout } from 'antd';
import React, { useState } from 'react';
import { pushDataLayer } from "../utils";

const carrouselSettings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
}

const divStyle = {
    backgroundColor: 'DarkSlateBlue',
    height: '200px',
    widht: '100%',
    padding: '24px'
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

const contentStyle = { padding: '0 50px', marginTop: 64 }

const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const contentDivStyle = () => {
    return {
        textAlign: 'center',
        backgroundColor: getRandomColor(),
        padding: '24px',
        height: '500px'
    }
}

const itemsList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const ItemsComponent = () => {
    const { Content } = Layout
    const [contentIdx, setcontentIdx] = useState(0)

    const handeClick = (idx) => {
        setcontentIdx(idx)
        pushDataLayer({
            event: 'viewProduct',
            sku: idx
        })
    }

    return (
        <Content style={contentStyle}>
            <div style={contentDivStyle()}>
                <h1>Conteudo {contentIdx}</h1>
                <input />
                <button>
                    Adicionar ao carrinho
                </button>
            </div>

            <div style={divStyle}>
                <Carousel style={StyleSlider} {...carrouselSettings}>
                    {
                        itemsList.map((el, idx) =>
                            <div color='cyan' key={idx}>
                                <h3 style={StyleH3} onClick={() => handeClick(idx)}>
                                    {el}
                                </h3>
                            </div>
                        )
                    }
                </Carousel>
            </div>
        </Content>
    )
}




export default ItemsComponent


