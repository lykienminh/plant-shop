import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Cart.css';
// import Modal from "react-modal";
import { BsCheck2Circle } from "react-icons/bs";
import listItems from "../components/listItems/listItems";

const Success = () => {
    let product = localStorage.getItem('prods');
    let p = localStorage.getItem('price');
    let pm = localStorage.getItem('paymethod');
    
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '90vh',
                minWidth: '70vw'
            }}
        >
            <h1 className='title'>Thanh toán thành công!</h1>
            <BsCheck2Circle style={{ color: '#3d8e60' }} size={50} />
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row',
                    width: '40%', 
                    marginTop: '10vh'
                }}
            >
                <div style={{ textAlign: 'left', width: '50%' }}>
                    <p>Phương thức thanh toán:</p>
                    <p>Tổng thanh toán:</p>
                    <p>Mã giao dịch:</p>
                </div>
                <div style={{ textAlign: 'right', width: '50%' }}>
                    <p>{pm}</p>
                    <p>{p}đ</p>
                    <p>{localStorage.getItem('orderCode')}</p>
                </div>
            </div>

        </div>
    );
};
export default Success;

