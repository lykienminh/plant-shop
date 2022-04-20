import React from 'react';
import { 
  Container,
  Row,
  Col,
  Button,
  Image
} from 'react-bootstrap';
import Slider from '../components/Slider/Slider';
import listItems from '../components/listItems/listItems';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Homepage.css';

const Homepage = () => {
  const sortListItems = listItems.sort((a,b) => b.score - a.score);

  const uniqueCategories = sortListItems.filter(
    (value, index, self) => self.findIndex(item => item.type === value.type) === index
  );
   
  return (
    <>
      <Slider/>
      <Container className="home-section">
        <Row className='section-header'>
          <Col>
            <h1 className='section-name'>Danh mục đặc biệt tháng 4</h1>
            <div className='section-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </Col>
        </Row>
        <Row>
        {uniqueCategories.slice(0,3).map(item => (
          <Col className='category'>
            <Image src={item.image} className='category-img'/>
            <h5 className='category-name'>{item.type}</h5>
            <Button className="btn-see-more" >Xem thêm</Button>
          </Col>
        ))}
        </Row>
      </Container>
      <Container className="home-section">
        <Row className='section-header'>
          <Col>
            <h1 className='section-name'>Sản phẩm bán chạy nhất</h1>
            <div className='section-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </Col>
        </Row>
        <Row>
        {sortListItems.slice(0,4).map(item => (
          <Col className='best-sellers'>
            <Image src={item.image} className='product-img'/>
            <div className='product-type'>{item.type}</div>
            <div className='product-name'>{item.name}</div>
            <div className='product-price'>{item.price} VNĐ</div>
          </Col>
        ))}
        </Row>
      </Container>
    </>
  );
};

export default Homepage;