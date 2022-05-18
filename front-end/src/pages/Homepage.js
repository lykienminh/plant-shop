import React from 'react';
import { 
  Button,
  Image
} from 'react-bootstrap';
import { 
  FiShoppingCart
} from 'react-icons/fi';

import Slider from '../components/Slider/Slider';
import listItems from '../components/listItems/listItems';
import listServices from '../components/listServices/listServices';

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
      <div className="home-section">
        <div className='section-header'>
          <h1 className='section-name'>Danh mục đặc biệt tháng 5</h1>
        </div>
        <div className='section-content'>
        {uniqueCategories.slice(0,3).map(item => (
          <div className='content-wrapper'>
            <div className='category-img-container'><Image src={item.image} className='category-img'/></div>
            <h5 className='category-name'>{item.type}</h5>
            <Button className="btn-see-more" >Xem thêm</Button>
          </div>
        ))}
        </div>
      </div>
      <div className='home-section-break'>
        <Image src={require('../images/plant-banner.jpg')} className='break-img' />
        <div className='break-desc'>
          <div className='break-text'>Chăm sóc cây là một nghệ thuật</div>
        </div>
      </div>
      <div className="home-section">
        <div className='section-header'>
          <h1 className='section-name'>Sản phẩm bán chạy nhất</h1>
          {/* <div className='section-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div> */}
        </div>
        <div className='section-content'>
        {sortListItems.slice(0,4).map(item => (
          <div className='content-wrapper'> 
            <div className='img-wrapper'>
              <Image src={item.image} className='product-img'/>
              <div className='img-overlay'>
                <a href={`/product/${item.id-1}`} >
                  <FiShoppingCart className='icon-cart'/>
                </a>
              </div>
            </div>
            <div className='product-type'>{item.type}</div>
            <div className='product-name'><a href={`/product/${item.id-1}`}>{item.name}</a></div>
            <div className='product-price'>{item.price} VNĐ</div>
          </div>
        ))}
        </div>
      </div>
      <div className="home-section">
        <div className='section-header'>
          <h1 className='section-name'>Dịch vụ</h1>
          {/* <div className='section-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div> */}
        </div>
        <div className='section-content'>
        {listServices.map(item => (
          <div className='content-wrapper'>
            <div className='service-img-container'>
              <Image src={item.image} className='service-img'/>
            </div>
            <h5 className='service-name'>{item.name}</h5>
            <div className='service-text'>{item.description}</div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;