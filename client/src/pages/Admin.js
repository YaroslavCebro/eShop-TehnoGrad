import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import { ADMIN_CATEGORY, ADMIN_COMPANY, ADMIN_EMPLOYEE, ADMIN_PRODUCT, ADMIN_USER } from '../utils/consts';
import {useHistory} from "react-router-dom";


const Admin = () => {
    const history = useHistory();

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2" style={{ fontSize: 30, fontWeigth: 'extra bold' }}
                onClick={() => history.push(ADMIN_PRODUCT)}
               // onClick={() => setTypeVisible(true)}
            >
                Продукти
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2" style={{ fontSize: 30, fontWeigth: 'extra bold' }}
                onClick={() => history.push(ADMIN_CATEGORY)}
               // onClick={() => setBrandVisible(true)}
            >
                Категорії
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2" style={{ fontSize: 30, fontWeigth: 'extra bold' }}
              //  onClick={() => setDeviceVisible(true)}
              onClick={() => history.push(ADMIN_COMPANY)}
            >
                Компанії
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2" style={{ fontSize: 30, fontWeigth: 'extra bold' }}
                onClick={() => history.push(ADMIN_EMPLOYEE)}
              //  onClick={() => setDeviceVisible(true)}
            >
                Працівники
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2" style={{ fontSize: 30, fontWeigth: 'extra bold' }}
                onClick={() => history.push(ADMIN_USER)}
              //  onClick={() => setDeviceVisible(true)}
            >
                Користувачі
            </Button>
        </Container>
    );
};

export default Admin;


//<Button className="ms-4" variant={"outline-light"} onClick={() => history.push(BASKET_ROUTE)} >Кошик</Button>