import React, { useState, Image, Button } from 'react';
import '../styles/Cart.css';
// import Modal from "react-modal";
import { BsCheck2Circle } from "react-icons/bs";

const Success = () => {

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
                    <p>Số điện thoại:</p>
                    <p>Tổng thanh toán:</p>
                    <p>Mã giao dịch:</p>
                </div>
                <div style={{ textAlign: 'right', width: '50%' }}>
                    <p>momo</p>
                    <p>0123456789</p>
                    <p>300000đ</p>
                    <p>12tz425g2</p>
                </div>
            </div>

        </div>
    );
};
export default Success;
