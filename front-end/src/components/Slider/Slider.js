import React, { useState } from 'react';
import {
    Carousel,
    Image,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Slider.css';

const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image src={require('../../images/plant-slider-1.png')} alt='first-slide' className='banner' />
                <Carousel.Caption className='carousel-caption'>
                    <h2 className='slide-heading'>Siêu sale 30.4 - 1.5</h2>
                    <div className='slide-text'>Giảm giá <span style={{ fontSize: '26px', fontWeight: '500', color: 'red' }}>10% </span>
                        tất cả các loại cây cảnh khi mua sắm trực tiếp tại cửa hàng từ ngày 28.4 đến ngày 2.5</div>
                    <a href="./product">
                        <Button className="btn-buy" >Mua ngay</Button>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={require('../../images/plant-slider-1.png')} alt='second-slide' className='banner' />
                <Carousel.Caption className='carousel-caption'>
                    <h2 className='slide-heading'>Siêu sale 30.4 - 1.5</h2>
                    <div className='slide-text'>Giảm giá <span style={{ fontSize: '26px', fontWeight: '500', color: 'red' }}>10% </span>
                        tất cả các loại cây cảnh khi mua sắm trực tiếp tại cửa hàng từ ngày 28.4 đến ngày 2.5</div>
                    <a href="./product">
                        <Button className="btn-buy" >Mua ngay</Button>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={require('../../images/plant-slider-1.png')} alt='third-slide' className='banner' />
                <Carousel.Caption className='carousel-caption'>
                    <h2 className='slide-heading'>Siêu sale 30.4 - 1.5</h2>
                    <div className='slide-text'>Giảm giá <span style={{ fontSize: '26px', fontWeight: '500', color: 'red' }}>10% </span>
                        tất cả các loại cây cảnh khi mua sắm trực tiếp tại cửa hàng từ ngày 28.4 đến ngày 2.5</div>
                    <a href="./product">
                        <Button className="btn-buy" >Mua ngay</Button>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;