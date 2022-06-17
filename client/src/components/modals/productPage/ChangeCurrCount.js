import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import { Context } from '../../../index';

const ChangeCurrCount = ({show, onHide, cartItem}) => {
    const [value, setValue] = useState('')
    const {cart} = useContext(Context);
    const [cartList, setCartList] = useState();
    const [devices, setDevices] = useState();
    console.log(cartItem);
  
    const changeCurrCount = () => {

        if(Math.abs(value) < cartItem.count){
            cartItem.currCount = Math.abs(value);
        }
        
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
                <Button variant="outline-danger" onClick={onHide}>Відміна</Button>
                <Button variant="outline-success" active={value.trim().length && value !== '0' ? true : false} onClick={value.trim().length && value !== '0' ? changeCurrCount : null}>Змінити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ChangeCurrCount;