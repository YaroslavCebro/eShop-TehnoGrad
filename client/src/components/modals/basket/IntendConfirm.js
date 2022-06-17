import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Context } from "../../../index";
import { getUserInfo } from '../../../http/userApi';
import { createIntend } from '../../../http/deviceApi';
import { createListIntend } from '../../../http/deviceApi';

const IntendConfirm = ({ show, onHide }) => {

    const { user } = useContext(Context);
    const { admin } = useContext(Context);
    const { cart } = useContext(Context)

    const [cartList, setCartList] = useState();
    const [userInfo, setUserInfo] = useState();
    const [employees, setEmployees] = useState();

    const [name, setName] = useState('');
    const [intend, setIntend] = useState();
    const [lname, setLname] = useState('');

    console.log(user);
    console.log(localStorage);






    const createOrder = () => {
        let data = createIntend(14, "new")
        console.log("____________________")
        data.then((data) => {
            cart.setIntend(data)
            console.log(data)
        }).then(
            () => {
                console.log(cart.intend.id)
                cart.cartList.map(item => {
                    createListIntend(item.currCount, item.id, cart.intend.id);
                });
                cart.setIntend(null)
            }
        )
        // cart.setIntend(data)

        console.log("____________________")

    }
    const createListOrder = () => {

    }

    const confirmOrder = () => {
        console.log(user.userInfo)
        createOrder();
        createListOrder();

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
                    Замовлення
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Чи підтверджуєте ви замовлення?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Відміна</Button>
                <Button variant="outline-success" onClick={confirmOrder} >Замовити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default IntendConfirm;

