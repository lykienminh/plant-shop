import * as React from 'react'
import '../styles/ProductDetail.css';
import listItems from '../components/listItems/listItems';
import { useParams } from 'react-router-dom';
import { Button, Container, Image } from 'react-bootstrap';
import useLocalStorage from "react-use-localstorage";

const ProductDetail = () => {
    let { id } = useParams();
    let itemDetail = listItems[id];
    // const [products, setProducts] = React.useState(CLONE_PRODUCTS);
    // localStorage.removeItem("prods");
    function addToCart(index) {
        itemDetail.quantity++;
        let temp = localStorage.getItem("prods");
        if (!temp) {
            localStorage.setItem("prods", JSON.stringify(listItems));
        }
        else {
            let a = eval(temp)
            var found = false;
            for (var i = 0; i < listItems.length; i++) {
                if ( a[i].id === index) {
                    a[i].quantity = a[i].quantity + 1;
                    break;
                }
            }
            localStorage.setItem("prods", JSON.stringify(a));
        }
        

    }
    return (
        <Container>
            <div className='row' style={{ padding: '50px 0px 50px 0px' }}>
                <div className='col' id='container'>
                    <Image src={itemDetail.image}></Image>
                </div>
                <div className='col'>
                    <h1 className='item-name'>{itemDetail.name}</h1>
                    <p style={{ padding: '25px 0px 0px 0px' }}>{itemDetail.description}</p>
                    <div style={{ height: '40px' }}></div>
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
                            <input type='text' class="form-control-plaintext" value={itemDetail.xuatxu} />
                        </div>
                    </div>
                    {/* <div class="form-group row">
                        <label class="col-sm-2 col-form-label item-attribute-label">Số lượng: </label>
                        <div class="col-sm-10">
                            <input type='text' class="form-control-plaintext" value={itemDetail.type} />
                        </div>
                    </div> */}
                    <div style={{ height: '40px' }}></div>
                    <Button variant='success' onClick={() => addToCart(itemDetail.id)}>Thêm vào giỏ hàng</Button>
                </div>
            </div>
        </Container>
    );
}

export default ProductDetail