import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Payment.css';
// import Modal from "react-modal";
import { BsTrash } from "react-icons/bs";
import listItems from "../components/listItems/listItems";
const Payment = () => {
    let product = localStorage.getItem('prods');
    const [name, setName] = useState("")

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

    useEffect(() => {
        localStorage.setItem('paymethod', 'Thanh toán trực tiếp');
    }, [])

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
        if (window.confirm("Bạn có thực sự muốn xóa sản phẩm này?")) {
            removeProduct(index);
        }
    }

    function removeProduct(index) {
        const filteredProduct = products.filter((product, i) => {
            return i != index;
        });
        setProducts(filteredProduct);
    }

    function handlePayment() {
        localStorage.setItem('price', parseInt(subtotalOrder() * 1.1));
        localStorage.setItem('name', name);
        if (localStorage.getItem('paymethod') == "momo") {
            var price = 0;
            var info = "";
            for (var i = 0; i < products.length; i++) {
                if (products[i]['quantity'] > 0) {
                    price += product[i].quantity * product[i].price
                    info = info + "\n" + products[i]['name']
                }

            }
            var data = new FormData();
            console.log(parseInt(subtotalOrder() * 1.1))
            data.append("amount", parseInt(subtotalOrder() * 1.1));
            data.append("info", info);
            data.append("redirect_url", `${process.env.REACT_APP_WEB_URL}`);
        
            console.log("==============CALL API================")
            console.log("url", `${process.env.REACT_APP_API_URL}/momo/test`)
            console.log("data", data)
            console.log("==============API END================")

            axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}/momo/test`,
                data: data,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (response) {
                    console.log(response)
                    window.location.href = response.data.data.payUrl;
                })
                .catch(function (response) {
                    console.log(response);
                });
        }
        else {
                for (var i = 0; i < products.length; i++){
                    console.log(products[i]['quantity'])
                    if (products[i]['quantity'] > 0){
                        var data = new FormData();
                        data.append("client_name", name);
                        data.append("product_name", products[i]['name']);
                        data.append("product_quantity", products[i]['quantity']);
                        data.append("product_price", products[i]['price'] );
                        data.append("product_weight", 0);
                        
                        console.log("==============CALL API================")
                        console.log("url", `${process.env.REACT_APP_API_URL}/delivery/create`)
                        console.log("data", data)
                        console.log("==============API END================")

                        axios({
                            method: "post",
                            url: `${process.env.REACT_APP_API_URL}/delivery/create`,
                            data: data,
                            headers: { "Content-Type": "multipart/form-data" },
                        })
                            .then(function (response) {
                                localStorage.setItem('orderCode', JSON.stringify(response.data.data.data.order_code));
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

function handlePM(s) {
    localStorage.setItem('paymethod', s);
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
        className="payment-body"
    >
        <form
            style={{
                display: 'flex',
                flexFlow: 'row',
            }}
        >

            <div style={{ width: '55vw', marginBottom: '50px' }}>
                <h4>1. Danh sách sản phẩm</h4>
                <div className='products'>
                    {products.map((product, index) => {
                        if (product.quantity != 0)
                            return (
                                <div className='product'>
                                    <img src={product.image} alt={product.name} className="product-img" />
                                    <div className='product-detail'>
                                        <h5>{product.name}</h5>
                                        <p>Giá: {product.price}đ</p>
                                        <p>Số lượng: {product.quantity}</p>
                                    </div>
                                </div>

                            );
                    })}
                </div>

                <h4>2. Thông tin giao hàng</h4>
                <div
                    style={{
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}
                >
                    <label className="label">Họ và tên người nhận</label>
                    <input
                        placeholder="Họ và tên"
                        type="text"
                        name="fullname"
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <label className="label">SĐT người nhận</label>
                    <input
                        placeholder="Số điện thoại"
                        type="number"
                        name="phone"
                        required
                    />
                    <label className="label">Tỉnh/Thành phố</label>
                    <input
                        placeholder="Tỉnh/Thành phố"
                        type="text"
                        name="pvct"
                        required
                    />
                    <label className="label">Quận/Huyện</label>
                    <input
                        placeholder="Quận/Huyện"
                        type="text"
                        name="district"
                        required
                    />
                    <label className="label">Phường/Xã</label>
                    <input
                        placeholder="Phường/Xã"
                        type="text"
                        name="ward"
                        required
                    />
                    <label className="label">Địa chỉ</label>
                    <input
                        placeholder="Địa chỉ"
                        type="text"
                        name="street"
                        required
                    />
                </div>
                <h4>3. Phương thức giao hàng</h4>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row',
                        alignItems: 'center'
                    }}
                >
                    <input type="radio" value="ghn" id="ghn" name="delivery-method" defaultChecked />
                    <img src={require('../images/ghn.png')} alt="ghn" className="method-img" />
                    <label for="ghn" className="opt">Giao hàng nhanh</label>
                </div>
                <h4>4. Phương thức thanh toán</h4>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row',
                        alignItems: 'center'
                    }}
                >
                    <input type="radio" value="cash" id="cash" name="payment-method" defaultChecked onChange={() => handlePM('Thanh toán trực tiếp')} />
                    <img src={require('../images/cash.jpg')} alt="cash" className="method-img" />
                    <label for="cash" className="opt" >Thanh toán khi nhận hàng</label>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row',
                        alignItems: 'center'
                    }}
                >
                    <input type="radio" value="momo" id="momo" name="payment-method" required onChange={() => handlePM('momo')} />
                    <img src={require('../images/momo.png')} alt="momo" className="method-img" />
                    <label for="momo" className="opt" >Thanh toán bằng ví MoMo</label>
                </div>
            </div>
            <card className="payment-card">
                <div
                    style={{
                        textAlign: 'right',
                        marginTop: '20px'
                    }}
                >
                    <h5>TỔNG TIỀN: <span style={{ color: '#3d8e60', fontWeight: 'bold' }}>{parseInt(subtotalOrder() * 1.1)}đ</span>
                    </h5>
                </div>
                <a>
                    <button className='payment-btn' type="button" onClick={() => handlePayment()}>Thanh toán</button>
                </a>

                <a > {/* href="./success" */}
                    <button className='payment-btn' id='real-btn' type="button" hidden onClick={() => handlePayment()}>Thanh toán</button>
                </a>
            </card>
        </form>
    </div>
);
};
export default Payment;

