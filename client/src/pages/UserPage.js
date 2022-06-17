import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Context } from '../index';
import { getById, updateUserInfo } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import UserUpdate from '../components/UserUpdate';



const UserPage = observer(() => {
    const history = useHistory();
    const { user } = useContext(Context);
    const [userInfo, setUserInfo] = useState();
    const [userUpdateVisible, setUserUpdateVisible] = useState(false);
    console.log(user)

    useEffect(() => {
        console.log("UserPage")
        console.log(user)
        let data = getById(user.userInfo.id)
        data.then((data) => {
            user.setUserInfo(data)
            console.log(data)
        })
    }, [])


    return (
        <>{user.userInfo.hasOwnProperty('name') ?
        <Container className="mt-5">
                <Form style={{ margin: "auto auto" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ім'я</Form.Label>
                        <Form.Control type="text" placeholder={user.userInfo.name == null ? "Не вказано": user.userInfo.name } disabled={true}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Прізвище</Form.Label>
                        <Form.Control type="text" placeholder={user.userInfo.lname == null ? "Не вказано": user.userInfo.lname } disabled={true}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Введіть пошту" value={user.userInfo.mail} disabled={true} />
                    </Form.Group>
                    <div className='d-flex flex-column'>
                       
                    </div>
                </Form>
        </Container>
         : <h1>Loading...</h1>
        }
    </>
    );
});

export default UserPage;

