import React from 'react';
import '../styles/Product.css';
import listItems from '../components/listItems/listItems';
import { Card, Button, Container, Form } from 'react-bootstrap';

const Product = () => {
	let cardItems = [];
	
	listItems.forEach(element => {
		cardItems.push( 
			<Card>
				<Card.Img variant='top' src={element.image} alt=''></Card.Img>
				<Card.Body>
					<Card.Title><b><a href={`/product/${element.id-1}`} >{element.name}</a></b></Card.Title>
					<Card.Text>
						<span style={{ color:'red' }}>{element.price + ' VND'}</span>
					</Card.Text>
					<Button variant='success'>Xem chi tiết</Button>
				</Card.Body>
			</Card>
		);
	}); 

	return (
		<Container>
			<div className='row' style={{ padding:'50px 0px 50px 0px' }}>
				<div className='col-3'>
					<div className='filter-section'>
						<h3 className='sidebar_title'>
							Giá
						</h3>
						<hr className='filter-divider'/>
						<Form>
							<Form.Group>
								<Form.Label>Từ (VND)</Form.Label>
								<Form.Control
									type="number"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Đến (VND)</Form.Label>
								<Form.Control
									type="number"
								/>
							</Form.Group>
						</Form>
					</div>
					<div className='filter-section'>
						<h3 className='sidebar_title'>
							Loại cây
						</h3>
						<hr className='filter-divider'/>
						<Form.Group>
							<Form.Check style={{ padding:'0px 0px 0px 25px' }}>
								<Form.Check.Input type='checkbox' isValid />
								<Form.Check.Label style={{ color:'black' }}>Cây để trong nhà</Form.Check.Label>
							</Form.Check>
							<Form.Check style={{ padding:'25px 0px 0px 25px' }}	>
								<Form.Check.Input type='checkbox' isValid />
								<Form.Check.Label style={{ color:'black' }}>Cây để ngoài vườn</Form.Check.Label>
							</Form.Check>
						</Form.Group>
					</div>
					<div className='filter-section'>
						<Button className='filter-button' variant='success'>Lọc</Button>{'    '}
						<Button className='filter-button' variant='success'>Xóa</Button>
					</div>
				</div>
				<div className='col'>
					<Container className='wrapper'>
						{cardItems}
					</Container>
				</div>
			</div>
		</Container>
	);
};

export default Product;