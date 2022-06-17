import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {updateUserInfo} from "../http/userApi";
import { Context } from '../index';

const UserUpdate = ({show, onHide}) => {

    const { user } = useContext(Context);
    const [value, setValue] = useState('')
    const [name, setName] = useState("")
    const [lname, setLname] = useState("")
    const changeUserInfo = () => {
        updateUserInfo(user.userInfo.id, lname, name).then( data => user.setUserInfo(data))
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Створити категорію
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style={{ margin: "auto auto" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ім'я</Form.Label>
                        <Form.Control type="text" placeholder={user.userInfo.name}
                           value={name}
                            onChange={e => setName(e.target.value)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Прізвище</Form.Label>
                        <Form.Control type="text" placeholder={user.userInfo.lname}
                            value={lname}
                            onChange={e => setLname(e.target.value)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={changeUserInfo}>Підтвердити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserUpdate;
