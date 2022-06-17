import React, {useContext, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Table, Button } from 'react-bootstrap';
import CreateCompany from "../components/modals/company/CreateCompany";
import {fetchCompany } from "../http/deviceApi";

const AdminCompany = observer(() =>{

    const [companyVisible, setCompanyVisible] = useState(false);
    const {device} = useContext(Context);


    const [value, setValue] = useState();

    useEffect( () => {
        fetchCompany().then(data => device.setCompanys(data));
    }, [])
    return (
             <Container  className="d-flex flex-column">
            <Table className="mt-5" striped bordered hover  style={{border: "2px solid black", fontSize: 20}}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Назва</th>
                    <th>Країна</th>
                    </tr>
                </thead>
                <tbody>
                {device.companys.map( company => 
                   <tr key={company.id} company={company}>
                       <td>{company.id}</td>
                       <td>{company.name}</td>
                       <td>{company.country}</td>
                   </tr> 
                )}     
                </tbody>
            </Table>
            <Button
                variant="primary"
                className="mt-4 p-2" style={{ fontSize: 30, fontWeigth: 'extra bold' }}
                onClick={() => setCompanyVisible(true)}
            > Створити компанію</Button>
            <CreateCompany show={companyVisible} onHide={() => setCompanyVisible(false)}/>
        </Container>
    );
});

export default AdminCompany;
