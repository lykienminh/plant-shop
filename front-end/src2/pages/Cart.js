import React, { useState, Image, Button, Component } from 'react';
import '../styles/Cart.css';
import { DataContext } from '../components/listItems/listItems'
import { BsTrash } from "react-icons/bs";
import listItems from "../components/listItems/listItems"
import useLocalStorage from "react-use-localstorage";

const Cart = () => {
    let product = localStorage.getItem('prods');

    const CLONE_PRODUCTS = JSON.parse(JSON.stringify(eval(product)));
    const [products, setProducts] = React.useState(CLONE_PRODUCTS);
    
    function subtotalOrder() {
        var total = 0;
        {
            products.map((product, index) => {
                total += product.quantity * product.price
            })
        }
        return total;
    };

    function updateProducts(index, num) {
        const cloneProducts = [...products];
        if (num === 0) {
            if (cloneProducts[index].quantity == 1) {
                handleClick(index);
                return;
            }
            else {
                cloneProducts[index].quantity--
            }
        }
        else {
            cloneProducts[index].quantity++
        }
        setProducts(cloneProducts);
        localStorage.setItem('prods', JSON.stringify(cloneProducts));
    };

    function handleClick(index) {
        if (window.confirm("Bạn có thực sự muốn xóa sản phẩm này?")) {
            removeProduct(index);
        }
    }

    function removeProduct(index) {
        const cloneProducts = [...products]
        cloneProducts[index].quantity = 0
        setProducts(cloneProducts);
        localStorage.setItem('prods', JSON.stringify(cloneProducts));
    }

    if (products.length === 0 || parseInt(subtotalOrder()) === 0) {
        return (
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '90vh'
                }}
            >
                <h1 className='title'>Giỏ hàng của bạn đang trống!</h1>
            </div>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                minHeight: '90vh'
            }}
            className='cart-body'
        >
            <h1 className='title'>Giỏ hàng</h1>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row',
                    justifyContent: 'center'
                }}
            >
                <div className='products'>
                    {products.map((product, index) => {
                        if (product.quantity != 0)
                            return (
                                <div className='product'>
                                    <img src={product.image} alt={product.name} className="product-img" />
                                    <div className='product-detail' style={{ width: '20vw' }}>
                                        <h4>{product.name}</h4>
                                        <p>{product.description}</p>
                                        <p>Giá: {product.price}đ</p>

                                    </div>
                                    <div className='quantity-btn'>
                                        <button onClick={() => updateProducts(index, 0)}>-</button>
                                        <span className='quantity'>{product.quantity}</span>
                                        <button onClick={() => updateProducts(index, 1)}>+</button>
                                    </div>
                                    <div className="remove-product">
                                        <button className='remove-btn' onClick={() => handleClick(index)}>
                                            <BsTrash size={20} />
                                        </button>
                                    </div>
                                </div>

                            );
                    })}
                </div>
                <div className='payment'>
                    <card className='payment-card'>
                        <h3
                            style={{
                                fontWeight: 'bolder',
                                textAlign: 'center',
                                paddingBottom: '20px',
                            }}
                        >TỔNG TIỀN</h3>
                        <div
                            style={{
                                display: 'flex',
                                flexFlow: 'row',
                            }}
                        >
                            <div style={{ textAlign: 'left', width: '40%' }}>
                                <p>Tiền:</p>
                                <p>Thuế (VAT):</p>
                                <p className='total-price'>Tổng tiền:</p>
                            </div>
                            <div style={{ textAlign: 'right', width: '60%' }}>
                                <p>{parseInt(subtotalOrder())}đ</p>
                                <p>{parseInt(subtotalOrder() / 10)}đ</p>
                                <p className='total-price'>{parseInt(subtotalOrder() * 1.1)}đ</p>
                            </div>
                        </div>
                        <a href="./payment">
                            <button className='payment-btn'>Thanh toán</button>
                        </a>
                    </card>
                </div>
            </div>

        </div>
    );
};
export default Cart;

