import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import { Context } from '../../../index';
import { observer } from "mobx-react-lite";

const AddToCart = observer(({show, onHide, device}) => {
    const [value, setValue] = useState('')
    const {cart} = useContext(Context);
    const [cartList, setCartList] = useState();
    const [devices, setDevices] = useState();
    const addToCart = () => {
        let currItem = cart.cartList.find( item => item.id == device.id);
        console.log("=========");
        console.log(currItem);
        let data = cart.cartList;
            if(currItem){
                if(currItem.currCount <= currItem.count && (currItem.currCount + Math.abs(value)) <= currItem.count){
                    currItem.currCount += +Math.abs(value);
                    //data.splice(device.id,1,currItem);
                    console.log("addToCount")
                } else{
                    onHide()
                    return 0;
                }
               
            } else {
                if(device.count >= Math.abs(value)){
                    device.currCount = Math.abs(value);
                    data.push(device);
                    console.log("create")
                }
            }
            console.log(data);
            cart.setCartList(data);
            onHide();
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати до кошика
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введіть кількість продукту:"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button  variant="outline-danger" onClick={onHide}>Відміна</Button>
            <Button  active={value.trim().length && value !== '0' ? true : false} variant="outline-success" onClick={value.trim().length && value !== '0' ? addToCart : null}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default AddToCart;