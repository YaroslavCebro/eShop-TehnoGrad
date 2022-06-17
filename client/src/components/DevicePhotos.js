import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Carousel } from 'react-bootstrap';

const DevicePhotos = observer(() =>{
    const {photos} = useContext(Context);
    return (
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={process.env.REACT_APP_API_URL + photos.name}
                alt="First slide"
                />
            </Carousel.Item>
    );
}); 

export default DevicePhotos;
