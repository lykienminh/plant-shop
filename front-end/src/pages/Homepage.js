import React, { useSate } from 'react';
import { 
  Container,
  Row,
  Col,
  Button,
  Image
} from 'react-bootstrap';
import Slider from '../components/Slider/Slider';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Homepage.css';

const Homepage = () => {


  return (
    <>
      <Slider/>
      <Container className="first-section">
        <Row className='section-header'>
          <Col>
            <h1 className='section-name'>Categories of The Month</h1>
            <div className='section-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </Col>
        </Row>
        <Row>
          <Col className='category'>
            <Image src={require('../images/potted-plant.png')} className='product-img'/>
            <h5 className='category-name'>Flower plants</h5>
            <Button className="btn-see-more" >See more</Button>
          </Col>
          <Col className='category'>
            <Image src={require('../images/hearts-plant.png')} className='product-img'/>
            <h5 className='category-name'>Trailing plants</h5>
            <Button className="btn-see-more" >See more</Button>
          </Col>
          <Col className='category'>
            <Image src={require('../images/cacti-plant.png')} className='product-img'/>
            <h5 className='category-name'>Succulents & Cacti</h5>
            <Button className="btn-see-more" >See more</Button>
          </Col>
        </Row>
      </Container>
      <Container className="second-section">
        <Row className='section-header'>
          <Col>
            <h1 className='section-name'>Best Sellers</h1>
            <div className='section-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </Col>
        </Row>
        <Row>
          <Col className='best-sellers'>
            <Image src={require('../images/potted-plant.png')}className='product-img'/>
            <h5 className='product-name'>Potted plant</h5>
          </Col>
          <Col className='best-sellers'>
            <Image src={require('../images/hearts-plant.png')} className='product-img'/>
            <h5 className='product-name'>Trailing heart plants</h5>
          </Col>
          <Col className='best-sellers'>
            <Image src={require('../images/cacti-plant.png')} className='product-img'/>
            <h5 className='product-name'>Cactus</h5>
          </Col>
          <Col className='best-sellers'>
            <Image src={require('../images/lava-couple-plant.png')} className='product-img'/>
            <h5 className='product-name'>Lava couple plant</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;