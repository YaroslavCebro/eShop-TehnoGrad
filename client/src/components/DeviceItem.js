import React, { useContext } from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import blue from "../assets/blue.jpg"
import {useHistory} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts"
import { Text, View } from 'react';


const DeviceItem =  ({device}) => {
    const history = useHistory();

    return(
        <Col md={3}>
            <Card style={{width: 185, cursor:"pointer", margin: "auto auto"}} border={'ligth'} className="mt-4 ">
                <Image width={185} height={185} src={process.env.REACT_APP_API_URL + device.img} style={{border:"1px solid #DFDFDF"}}/>
                <div className="d-flex justify-content-between align-items-center mt-1"  
                onClick={()=> history.push(PRODUCT_ROUTE + "/" + device.id)}>
                    <div style={{ width: 200,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"}}
                    >{device.name}</div>
                    <div>{device.price}</div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;