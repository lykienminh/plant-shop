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

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image src={require('../../images/plant-slider-1.png')} alt='first-slide' className='banner'/>
                <Carousel.Caption className='carousel-caption'>
                    <h2 className='slide-heading'>Everyone enjoy gardening</h2>
                    <div className='slide-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
                    <Button className="btn-read-more" >Read more</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={require('../../images/plant-slider-1.png')} alt='second-slide' className='banner'/>
                <Carousel.Caption className='carousel-caption'>
                    <h2 className='slide-heading'>Everyone enjoy gardening</h2>
                    <div className='slide-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
                    <Button className="btn-read-more" >Read more</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={require('../../images/plant-slider-1.png')} alt='third-slide' className='banner'/>
                <Carousel.Caption className='carousel-caption'>
                    <h2 className='slide-heading'>Everyone enjoy gardening</h2>
                    <div className='slide-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
                    <Button className="btn-read-more" >Read more</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;