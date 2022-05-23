import React from 'react';
import '../styles/Service.css';
import listServices from '../components/listServices/listServices';
import { Card, Container } from 'react-bootstrap';

const Service = () => {
  const cardItems = [];
	
	listServices.forEach(element => {
		cardItems.push( 
			<Card>
				<Card.Img variant='top' src={element.image} alt=''></Card.Img>
				<Card.Body>
					<Card.Title><b><a href>{element.name}</a></b></Card.Title>
					<Card.Text>
						<span>{element.description}</span>
					</Card.Text>
					{/* <Button variant='success'>Xem chi tiết</Button> */}
				</Card.Body>
			</Card>
		);
	});

  return (
    <div className='service'>
      <div className='head text-center'>
          <div className='container'>
            <h1 className='title'>Dịch vụ{' '}</h1>
            <a href="/" title="Back to the frontpage">Trang chủ</a>
            <span aria-hidden="true">/</span>
            <span>Dịch vụ</span>
          </div>
      </div>
      <div className='body'>
        <Container className='wrapper'>
					{cardItems}
				</Container>
      </div>
    </div>
  );
};

export default Service;
