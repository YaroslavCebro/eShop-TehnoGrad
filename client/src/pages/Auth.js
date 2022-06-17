import React, {useContext, useState} from 'react';
import {Col, Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [mail, setMail] = useState('')
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(mail, password);
            } else {
                data = await registration(lname, name, mail, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            user.setIsAdmin(false)
            user.setUserInfo(data)
            console.log(localStorage)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return(
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54, overflowY: "hidden"}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className="m-auto">{isLogin ? "Авторизація": "Реєстрація" }</h2>
                {!isLogin ? 
                <Form className="d-flex flex-column">
                   
                     <Form.Control 
                     className="mt-3"
                     placeholder="Введіть ваше ім'я"
                     value={name}
                     onChange={e => setName(e.target.value)}
                 />
                 <Form.Control 
                     className="mt-3"
                     placeholder="Введіть ваше прізвище"
                     value={lname}
                     onChange={e => setLname(e.target.value)}
                 />
               
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш mail"
                        value={mail}
                        onChange={e => setMail(e.target.value)}
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <div>
                                Є аккаунт? <NavLink to={LOGIN_ROUTE}>Вхід</NavLink>
                            </div>
                        <Button
                            className="mt-3"
                            variant={"outline-success"}
                            onClick={click}
                        >
                            "Зареєструватися"
                        </Button>
                    </Row>
                  <Col></Col>
                </Form>
                  :
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш mail"
                        value={mail}
                        onChange={e => setMail(e.target.value)}
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <div>
                                Немає аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зареєструйся!</NavLink>
                            </div>
                        <Button
                            className="mt-3"
                            variant={"outline-success"}
                            onClick={click}
                        >
                            "Вхід"
                        </Button>
                    </Row>
                  <Col></Col>
                </Form>
                }
            </Card>
        </Container>
    );
});

export default Auth;