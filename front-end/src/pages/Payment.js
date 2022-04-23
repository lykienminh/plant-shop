import React, { useState, Image, Button } from 'react';
import '../styles/Payment.css';
import Modal from "react-modal";
import { BsTrash } from "react-icons/bs";
import listItems from "../components/listItems/listItems";
const Payment = () => {
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

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'left',
                minHeight: '90vh',
                marginTop: '30px',
                marginLeft: '10vw',
                marginRight: '10vw'
            }}
        >
            <form
                style={{
                    display: 'flex',
                    flexFlow: 'row',
                }}
            >
                
                <div style={{width: '55vw', marginBottom: '50px'}}>
                    <h4>1. Products list</h4>
                    <div className='products'>
                        {products.map((product, index) => {
                            if (product.quantity != 0)
                                return (
                                    <div className='product'>
                                        <img src={product.image} alt={product.name} className="product-img" />
                                        <div className='product-detail'>
                                            <h5>{product.name}</h5>
                                            <p>Price: {product.price}đ</p>
                                            <p>Quantity: {product.quantity}</p>
                                        </div>
                                    </div>

                                );
                        })}
                    </div>

                    <h4>2. Shipment details</h4>
                    <div
                        style={{
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}
                    >
                        <label className="label">Receiver's Fullname</label>
                        <input
                            placeholder="Receiver's Fullname"
                            type="text"
                            name="fullname"
                            required
                        />
                        <label className="label">Receiver's Phone</label>
                        <input
                            placeholder="Receiver's Phone"
                            type="number"
                            name="phone"
                            required
                        />
                        <label className="label">Province/City</label>
                        <input
                            placeholder="Province/City"
                            type="text"
                            name="pvct"
                            required
                        />
                        <label className="label">District</label>
                        <input
                            placeholder="District"
                            type="text"
                            name="district"
                            required
                        />
                        <label className="label">Ward</label>
                        <input
                            placeholder="Ward"
                            type="text"
                            name="ward"
                            required
                        />
                        <label className="label">Street Address</label>
                        <input
                            placeholder="Street Address"
                            type="text"
                            name="street"
                            required
                        />
                    </div>
                    <h4>3. Delivery method</h4>
                    <div
                        style={{
                            display: 'flex',
                            flexFlow: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <input type="radio" value="ghn" id="ghn" name="delivery-method" required />
                        <img src={require('../images/ghn.png')} alt="ghn" className="method-img" />
                        <label for="ghn" className="opt">Giao hàng nhanh</label>
                    </div>
                    <h4>4. Payment method</h4>
                    <div
                        style={{
                            display: 'flex',
                            flexFlow: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <input type="radio" value="cash" id="cash" name="payment-method" required />
                        <img src={require('../images/cash.jpg')} alt="cash" className="method-img" />
                        <label for="cash" className="opt">Payment by cash</label>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexFlow: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <input type="radio" value="momo" id="momo" name="payment-method" required />
                        <img src={require('../images/momo.png')} alt="momo" className="method-img" />
                        <label for="momo" className="opt">Payment via momo</label>
                    </div>
                </div>
                <card className="payment-card">
                    <div
                        style={{
                            textAlign: 'right',
                            marginTop: '20px'
                        }}
                    >
                        <h5>TOTAL PRICE: <span style={{ color: '#3d8e60', fontWeight: 'bold' }}>{parseInt(subtotalOrder() * 1.1)}đ</span>
                        </h5>
                    </div>
                    <a href="./success">
                        <button className='payment-btn' type="button">Pay</button>
                    </a>
                </card>
            </form>
        </div>
    );
};
export default Payment;

