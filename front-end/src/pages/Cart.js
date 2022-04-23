import React, { useState, Image, Button } from 'react';
import '../styles/Cart.css';
import Modal from "react-modal";
import { BsTrash } from "react-icons/bs";
import listItems from "../components/listItems/listItems"

const Cart = () => {

    const CLONE_PRODUCTS = JSON.parse(JSON.stringify(listItems));
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
    };

    function handleClick(index) {
        if (window.confirm("Do you want to remove this product?")) {
            removeProduct(index);
        }
    }

    function removeProduct(index) {
        const filteredProduct = products.filter((product, i) => {
            return i != index;
        });
        setProducts(filteredProduct);
    }

    if (products.length === 0) {
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
                <h1 className='title'>Your bag is empty!</h1>
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
        >
            <h1 className='title'>Your bag</h1>
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
                                        <p>Price: {product.price}đ</p>

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
                        >TOTAL ORDER</h3>
                        <div
                            style={{
                                display: 'flex',
                                flexFlow: 'row',
                            }}
                        >
                            <div style={{ textAlign: 'left', width: '40%' }}>
                                <p>Price:</p>
                                <p>Tax (VAT):</p>
                                <p className='total-price'>Total Price:</p>
                            </div>
                            <div style={{ textAlign: 'right', width: '60%' }}>
                                <p>{parseInt(subtotalOrder())}đ</p>
                                <p>{parseInt(subtotalOrder() / 10)}đ</p>
                                <p className='total-price'>{parseInt(subtotalOrder() * 1.1)}đ</p>
                            </div>
                        </div>
                        <a href="./payment">
                            <button className='payment-btn'>Proceed to payment</button>
                        </a>
                    </card>
                </div>
            </div>

        </div>
    );
};
export default Cart;

