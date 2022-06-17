import React, {useLayoutEffect, useState, useContext, useEffect} from 'react';
import {Button, Card, Carousel, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneProd} from "../http/deviceApi";
import {Context} from "../index";
import { observer } from "mobx-react-lite";
import AddToCart from '../components/modals/productPage/AddToCart';

const ProductPage = observer(() => {

    const {device} = useContext(Context);
    const [devices, setDevices] = useState();
    const {cart} = useContext(Context);
    const [cartList, setCartList] = useState();
    const [addToCart, setAddToCart] = useState(false);
    const {id} = useParams();
    useLayoutEffect(() => {
        fetchOneProd(id).then(data => device.setDevices(data));
    }, []);

    


    console.log(device.devices);
    console.log(device.devices.hasOwnProperty('photos'));
    return (
        <>
        {  device.devices.hasOwnProperty('photos') ? 
            <Container className="mt-3">
                <Row >
                    <Carousel  md={4} style={{width: 300, height: 300, fontSize: 32, border: '2px solid #DFDFDF'}} >
                        {device.devices.photos.map((photo, index) => 
                            <Carousel.Item key={photo.name} photo={index}>
                                <img
                                className="d-block w-100"
                                src={process.env.REACT_APP_API_URL + photo.name}
                                alt="First slide"
                                />
                            
                            </Carousel.Item>
                        )}
                    </Carousel>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{device.devices.name}</h2>
                        </Row>
                        <Row style={{padding: 10}}>
                            <h1>Опис:</h1>
                            <div>{device.devices.title}</div>
                            <div>{device.devices.description}</div>
                            
                            <h2 className="mt-2">У наявності: {device.devices.count}</h2>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{width: 300, height: 300, fontSize: 32, border: '2px solid #DFDFDF'}}
                        >
                            <h3>Від: {device.devices.price} грн.</h3>
                            <Button onClick={() => setAddToCart(true)} variant={"outline-dark"}>Додати до кошика</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h1>Характеристики</h1>
                        <Row style={{background:'lightgray', padding: 10}}>
                            "Вага": {device.devices.weight} кг.
                        </Row>
                        <Row style={{background:'transparent', padding: 10}}>
                            "Гарантія": {device.devices.warranty} міс.
                        </Row>
                </Row>
                <AddToCart device={device.devices} show={addToCart} onHide={() => setAddToCart(false)}/>
            </Container>
            :
              <h1>Lоading...</h1>  }
        </>
    );
});

export default ProductPage;


