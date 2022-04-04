import React from 'react';
import { 
    Container,
    Row,
    Col,
    Image,
    Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Footer.css';

const Footer = () => {
    return(
        <Container fluid className="footer-container">
            <Row className="footer-section-1">
                <Col className="footer-item">
                    <Image src={require('../../images/logo-plant.jpeg')} alt='logo' className="logo"/>
                </Col>
                <Col className="footer-item separate-line">
                    Contact Us
                </Col>
                <Col className="footer-item separate-line">
                    Something in here
                </Col>
            </Row>
            <Row className="footer-section-2">
                &copy;{new Date().getFullYear()} Plant Shop - All Right Reserved
            </Row>
        </Container>
    )
};

export default Footer;