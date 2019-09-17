import { Carousel, Content, Layout } from 'antd';
import React from 'react';

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

const contentDivStyle = {
    textAlign: 'center',
    backgroundColor: getRandomColor(),
    padding: '24px',
    height: '500px'
}

const itemsList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


const ItemsComponent = ({ contentIdx, setcontentIdx }) => {
    const { Content } = Layout

    return (
        <Content style={contentStyle}>
            <div style={contentDivStyle}>
                <h1>Conteudo {contentIdx}</h1>
            </div>

            <div style={divStyle}>
                <Carousel style={StyleSlider} {...carrouselSettings}>
                    {
                        itemsList.map((el, idx) =>
                            <div color='cyan' key={idx}>
                                <h3 style={StyleH3} onClick={() => setcontentIdx(idx)}>{el}</h3>
                            </div>
                        )
                    }
                </Carousel>
            </div>
        </Content>
    )
}




export default ItemsComponent


