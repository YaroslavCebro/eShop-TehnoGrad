import React, { useContext, useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoryBar from "../components/CategoryBar";
import CompanyBar from "../components/CompanyBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchCategory, fetchCompany, fetchProd } from "../http/deviceApi";
import Pages from "../components/Pages";
import { getAllEmployees, getById } from "../http/userApi";


const Shop = observer(() =>  {
    const {device} = useContext(Context);
    const {admin} = useContext(Context);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedCompany, setSelectedCompany] = useState();
    


    useEffect(() => {
        fetchCategory().then(data => device.setCategorys(data))
        getAllEmployees().then(data => admin.setEmployees(data) )
        fetchCompany().then(data => device.setCompanys(data))
        fetchProd(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProd(device.selectedCategory.id, device.selectedCompany.id, device.page, 1).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedCategory, device.selectedCompany,])
    return(
        <>     {  !device.devices.hasOwnProperty('photos') ? 
            <Container>
                <Row className="mt-4">
                    <Col md={3}>
                        <CategoryBar/>
                    </Col>
                    <Col md={9}>
                        <CompanyBar/>
                        <DeviceList/>
                        <Pages/>
                    </Col>
                </Row>
            </Container>
            :  <h1>Lоading...</h1>  }
        </>
    );
});

export default Shop;