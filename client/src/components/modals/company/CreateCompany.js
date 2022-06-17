import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createCompany} from "../../../http/deviceApi";

const CreateCategory = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')

    const addCategory = () => {
        createCompany(name,country).then(data => {
            setName('')
            setCountry('')
            onHide()
        })
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
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введіть назву компанії"}
                    />
                    <Form.Control className='mt-3'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        placeholder={"Введіть країну компанії"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addCategory}>Створити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;