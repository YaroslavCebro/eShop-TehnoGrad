import React, {useContext, useState} from 'react';
import {Col, Container, Form, Modal} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../../index"
import { adminRegistration } from '../../http/userApi';
import { ADMIN_ROUTE } from '../../utils/consts';



const AdminReg = ({show, onHide}) => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [post, setPost] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            data = await adminRegistration(lname, name, phone, post, password);
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return(

              <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Зареєструвати робітника
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введіть ваше прізвище"
                        value={lname}
                        onChange={e => setLname(e.target.value)}
                    />
                     <Form.Control 
                        className="mt-3"
                        placeholder="Введіть ваше ім'я"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введіть ваш номер телефону"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введіть вашу посаду"
                        value={post}
                        onChange={e => setPost(e.target.value)}
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введіть ваш пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Button
                            className="mt-3"
                            variant={"outline-success"}
                            onClick={click}
                        >Войти
                        </Button>
                    </Row>
                </Form>
                </Modal.Body>
            </Modal>
    );
};

export default AdminReg;