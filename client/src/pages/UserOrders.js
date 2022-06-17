import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Button, Card, Container, Form, Image, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Context } from '../index';
import { getById, updateUserInfo } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import UserUpdate from '../components/UserUpdate';
import { fetchListIntend } from '../http/deviceApi';
import { PRODUCT_ROUTE } from '../utils/consts';



const UserOrders = observer(() => {
    
    const history = useHistory();
    const { user } = useContext(Context);

    const [userOrders, setUserOrders] = useState();
    const [userUpdateVisible, setUserUpdateVisible] = useState(false);
    console.log(user)
    useLayoutEffect( () => {
        fetchListIntend().then(data => user.setUserOrders(data));
        console.log(user.userOrders)
    }, []);


    return (
        <>{user.userOrders.length > 0  ?
        <Container className="mt-5">
            {user.userOrders.map(cartitem =>
           <Card className="mt-5" style={{ width: 'rem'}} key={cartitem.id} cartItem={cartitem}>
                <Card.Body>
                    <Card.Title>Замовник: {user.userInfo.lname} {user.userInfo.name}</Card.Title>
                    <Card.Title>Менеджер: {cartitem.employee.lname} {cartitem.employee.name}</Card.Title>
                    {cartitem.listIntends.map(list =>
                <Card.Text  key={list.id} cartItem={list}>
                <Row className="mt-5">
                    <Col md={4}>
                            <Image 
                               width={300} height={300}
                                src={process.env.REACT_APP_API_URL + list.product.img}
                                alt="First slide"
                                />
                             </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{cartitem.listIntends[0].product.name}</h2>
                        </Row>
                        <Row style={{fontSize: 20, padding: 10}}>
                            <div>Назва: {list.product.name}</div>
                            <div>Кількість куплених: {list.count}</div>
                            <div>Гарантія: {list.product.warranty} місяців</div>
                            <Button className='mt-2' onClick={()=> history.push(PRODUCT_ROUTE + "/" + list.product.id)} variant="primary">Детальніше про девайс</Button>
                        </Row>
                        </Col>
                        </Row>
                        <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
                        
                </Card.Text>
                    )}
                    <Card.Title>Дата початку замовлення:{("" + (new Date(cartitem.startDate)).toISOString()).replace(/^([^T]+)T(.+)$/,'$1')}</Card.Title>
                    <Card.Title>Дата закінчення замовлення: {("" + (new Date(cartitem.endDate)).toISOString()).replace(/^([^T]+)T(.+)$/,'$1')}</Card.Title>
                </Card.Body>
            </Card>
        )}
        </Container>
         : <div className="mt-5" style={{
            display: "flex",
           alignItems: "center",
           justifyContent: "center"
           }}><h1>Історія замовлень пуста</h1></div>
        }
    </>
    );
});

export default UserOrders;

