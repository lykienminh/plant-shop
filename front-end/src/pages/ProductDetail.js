import React from 'react';
import '../styles/ProductDetail.css';
import listItems from '../components/listItems/listItems';
import { useParams } from 'react-router-dom';
import { Button, Container, Image } from 'react-bootstrap';

const ProductDetail = () => {
    let { id } = useParams();
    let itemDetail = listItems[id];

    return (
        <Container>
            <div className='row' style={{ padding:'50px 0px 50px 0px' }}>
                <div className='col' id='container'>
                    <Image src={itemDetail.image}></Image>
                </div>
                <div className='col'>
                    <h1 className='item-name'>{itemDetail.name}</h1>
                    <p style={{ padding:'25px 0px 0px 0px' }}>{itemDetail.description}</p>
                    <div style={{ height:'40px' }}></div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label item-attribute-label">Giá: </label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" value={itemDetail.price} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label item-attribute-label">Loại cây: </label>
                        <div class="col-sm-10">
                            <input type='text' class="form-control-plaintext" value={itemDetail.type} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label item-attribute-label">Xuất xứ: </label>
                        <div class="col-sm-10">
                            <input type='text' class="form-control-plaintext" value={itemDetail.xuatXu} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label item-attribute-label">Số lượng: </label>
                        <div class="col-sm-10">
                            <input type='text' class="form-control-plaintext" value={itemDetail.type} />
                        </div>
                    </div>
                    <div style={{ height:'40px' }}></div>
                    <Button variant='success'>Thêm vào giỏ hàng</Button>
                </div>
            </div>
        </Container>
    );
}

export default ProductDetail