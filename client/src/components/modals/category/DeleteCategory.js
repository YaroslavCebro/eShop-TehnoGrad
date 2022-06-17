import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {deleteCategory} from "../../../http/deviceApi";

const DeleteCategory = ({show, onHide, value}) => {

    const removeCategory = () => {
        console.log(value);
        deleteCategory({id: value}).then(onHide())
        console.log(value);
    }
    //then(fetchCategory().then(data => device.setCategorys(data))).
    console.log(value);
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
            <Modal.Body>Чи точно ви хочете видалити цю категорію?</Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Відміна</Button>
                <Button variant="outline-success" onClick={removeCategory}>Видалити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteCategory;