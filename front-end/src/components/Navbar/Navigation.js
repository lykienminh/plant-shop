import React from 'react';
import { 
    Navbar,
    Nav, 
    Container, 
    Image, 
    Button 
} from 'react-bootstrap';
import { 
    BsFillCartFill, 
    BsFillTelephoneFill,
    BsClockFill,
    BsFillEnvelopeFill
} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Navigation.css';

const Navigation = () => {

  return (
    <>
        <Navbar bg="light" variant="light" className='navbar-top'>
            <Container>
                <Nav className='m-auto'>
                    <Nav.Link>
                        <BsFillTelephoneFill className='icon-nav'/>
                        <div className='nav-text'>(+84) 784 028 455</div>
                    </Nav.Link>
                    <Nav.Link>
                        <BsClockFill className='icon-nav'/>
                        <div className='nav-text'>T2-CN: 9:00-18:00</div>
                    </Nav.Link>
                    <Nav.Link>
                        <BsFillEnvelopeFill className='icon-nav'/>
                        <div className='nav-text'>info@gmail.com</div>
                    </Nav.Link>
                </Nav> 
            </Container>
        </Navbar>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={require('../../images/logo-1.png')} alt='logo' className="logo"/>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">Trang chủ</Nav.Link>
                    <Nav.Link href="/product">Sản phẩm</Nav.Link>
                    <Nav.Link href="/service">Dịch vụ</Nav.Link>
                    <Nav.Link href="/contact-us">Liên hệ</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/cart">
                        <BsFillCartFill className='icon-cart-fill'/>
                    </Nav.Link>
                    <Nav.Link href="/login">
                        <Button className="btn-login" variant="outline-success">Đăng nhập</Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  );
};

export default Navigation;