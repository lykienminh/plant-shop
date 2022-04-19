import React from 'react';
import { 
    Container,
    Row,
    Col,
    Image,
    Nav
} from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { 
    BsFillTelephoneFill,
    BsFillEnvelopeFill
} from 'react-icons/bs';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Footer.css';

const Footer = () => {
    return(
        <Container className='footer-container' fluid>
            <Row className='footer-section-1'>
                <Col className='footer-item'>
                    <Image src={require('../../images/logo-2.png')} alt='logo' className='footer-logo'/>
                    <div className='footer-text'>Et netus et malesuada fames ac turpis egestas integer. 
                    Id neque aliquam vestibulum morbi. Volutpat est velit egestas dui id ornare. 
                    Turpis massa</div>
                </Col>
                <Col className='footer-item separate-line'>
                    <div className='footer-header'>Thông tin</div>
                    <div className='footer-text'>
                        <Nav>
                            <Nav.Link href="/contact-us">
                                <div className='footer-link'>Thông tin liên hệ</div>
                            </Nav.Link>
                            <Nav.Link href="/">
                                <div className='footer-link'>Phương thức thanh toán</div>
                            </Nav.Link>
                            <Nav.Link href="/">
                                <div className='footer-link'>Phương thức vận chuyển</div>
                            </Nav.Link>
                            <Nav.Link href="/">
                                <div className='footer-link'>Chính sách bảo mật</div>
                            </Nav.Link>
                        </Nav> 
                    </div>
                </Col>
                <Col className='footer-item separate-line'>
                    <div className='footer-header'>Liên hệ</div>
                    <div className='footer-text'>
                        <Row className='footer-row'>
                            <Col sm={1}><FaMapMarkerAlt/></Col>
                            <Col>268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam</Col>
                        </Row>
                        <Row className='footer-row'>
                            <Col sm={1}><BsFillTelephoneFill/></Col>
                            <Col>(+84) 784 028 455</Col>
                            
                        </Row>
                        <Row className='footer-row'>
                            <Col sm={1}><BsFillEnvelopeFill/></Col>
                            <Col>info@gmail.com</Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className='footer-section-2'>
                &copy;{new Date().getFullYear()} Plant Shop - All Right Reserved
            </Row>
        </Container>
    )
};

export default Footer;