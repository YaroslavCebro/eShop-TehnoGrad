import React, { useContext, useState } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_LOGIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE, ADMIN_ROUTE, PROFILE_ROUTE, USER_OLD_ORDERS } from "../utils/consts";
import { Button, Form, FormControl, Offcanvas } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const { cart } = useContext(Context)

    const history = useHistory()


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logOut = () => {
        user.setUser(null);
        user.setIsAuth(false);
        user.setIsAdmin(false);
        cart.setCartList(null);
        user.setUserInfo(null);
        localStorage.clear();
        console.log(localStorage)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ fontWeight: 800, color: "#ffffff", fontSize: 20, }} to={SHOP_ROUTE}>ТехноГрад</NavLink>
                <Form className="d-flex">
                    <FormControl

                        type="search"
                        placeholder="Поиск"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant={"outline-light"} >Пошук</Button>
                </Form>
                {user.isAuth ?
                    <Nav className="ml-auto" >
                        <Button variant={"outline-light"} onClick={logOut}  >Вийти</Button>
                        {user.isAdmin ?
                            <Button className="ms-4" variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} >Адмін панель</Button>
                            :
                            <Button className="ms-4" variant={"outline-light"} onClick={handleShow}>Профіль</Button>
                        }
                    </Nav>
                    :
                    <Nav className="ml-auto" >
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Aвторизація</Button>
                        <Button className="ms-4" variant={"outline-light"} onClick={() => history.push(ADMIN_LOGIN_ROUTE)} >Для адміна</Button>
                    </Nav>
                }
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Вдалих покупок!</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="d-flex flex-column" >
                    <Button className="mt-4 p-2" style={{
                            fontSize: 20,
                            fontWeigth: 'extra bold'
                        }} variant={"primary"} onClick={() =>{handleClose();  history.push(PROFILE_ROUTE)}}>Профіль</Button>
                        <Button variant={"primary"} className="mt-4 p-2" style={{
                            fontSize: 20,
                            fontWeigth: 'extra bold'
                        }} onClick={() =>{handleClose(); history.push(BASKET_ROUTE)}}>Кошик</Button>
                        <Button className="mt-4 p-2" style={{
                            fontSize: 20,
                            fontWeigth: 'extra bold'
                        }} variant={"primary"} onClick={() =>{handleClose();  history.push(USER_OLD_ORDERS)}}>Історія замовлень</Button>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
});

export default NavBar;
// onClick={() => history.push(BASKET_ROUTE)}

