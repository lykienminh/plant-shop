import React, { useState, useEffect } from "react";
import axios from "axios";
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
    let product = localStorage.getItem('prods');

    const CLONE_PRODUCTS = JSON.parse(JSON.stringify(eval(product)));
    const [products, setProducts] = React.useState(CLONE_PRODUCTS);
    const sortListItems = listItems.sort((a, b) => b.score - a.score);

    const uniqueCategories = sortListItems.filter(
        (value, index, self) => self.findIndex(item => item.type === value.type) === index
    );

    useEffect(() => {
        var path_1 = window.location.href.split("?")[1];
        if (path_1) {
            var path_2 = path_1.split("&")[7]
            console.log(path_2)
            if (path_2) {
                if (path_2 === "resultCode=0") {
                    for (var i = 0; i < products.length; i++) {
                        if (products[i]['quantity'] > 0) {
                            var data = new FormData();
                            data.append("client_name", localStorage.getItem('name'));
                            data.append("product_name", products[i]['name']);
                            data.append("product_quantity", products[i]['quantity']);
                            data.append("product_price", products[i]['price']);
                            data.append("product_weight", 0);
                            axios({
                                method: "post",
                                url: "/delivery/create",
                                data: data,
                                headers: { "Content-Type": "multipart/form-data" },
                            })
                                .then(function (response) {
                                    localStorage.setItem('orderCode', JSON.stringify(response.data.data.data.order_code));
                                    console.log(response)
                                })
                                .catch(function (response) {
                                    console.log(response);
                                });
                        }
                    }
                    localStorage.setItem('prods', JSON.stringify(listItems));
                    window.location.href = './success';
                }
            }
        }

    }, [])

    return (
        <>
            <Slider />
            <div className="home-section">
                <div className='section-header'>
                    <h1 className='section-name'>Danh mục đặc biệt tháng 5</h1>
                </div>
                <div className='section-content'>
                    {uniqueCategories.slice(0, 3).map(item => (
                        <div className='content-wrapper'>
                            <div className='category-img-container'><Image src={item.image} className='category-img' /></div>
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
                    {sortListItems.slice(0, 4).map(item => (
                        <div className='content-wrapper'>
                            <div className='img-wrapper'>
                                <Image src={item.image} className='product-img' />
                                <div className='img-overlay'>
                                    <a href={`/product/${item.id - 1}`} >
                                        <FiShoppingCart className='icon-cart' />
                                    </a>
                                </div>
                            </div>
                            <div className='product-type'>{item.type}</div>
                            <div className='product-name'><a href={`/product/${item.id - 1}`}>{item.name}</a></div>
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
                                <Image src={item.image} className='service-img' />
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