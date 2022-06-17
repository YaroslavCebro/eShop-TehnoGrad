import React, {useContext, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Table, Button } from 'react-bootstrap';
import CreateCategory from "../components/modals/category/CreateCategory";
import DeleteCategory from "../components/modals/category/DeleteCategory";
import { fetchCategory, fetchCompany, fetchProd } from "../http/deviceApi";

const AdminCategory = observer(() =>{

    const [categoryVisible, setCategoryVisible] = useState(false);
    const [deleteCategory, setDeleteCategory] = useState(false);
    const {device} = useContext(Context);


    const [value, setValue] = useState();

    useEffect( () => {
        fetchCategory().then(data => device.setCategorys(data));
        fetchCompany().then(data => device.setCompanys(data));
        fetchProd().then(data => device.setDevices(data.rows));
    }, [])
    return (
             <Container  className="d-flex flex-column">
            <Table className="mt-5" striped bordered hover  style={{border: "2px solid black", fontSize: 20}}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Назва</th>
                    <th>Редагування</th>
                    <th>Видалення</th>
                    </tr>
                </thead>
                <tbody>
                {device.categorys.map( category => 
                   <tr key={category.id} category={category}>
                       <td>{category.id}</td>
                       <td>{category.name}</td>
                       <td><Button  variant="success"> Редагування</Button></td>
                       <td><Button  onClick={() => {setValue(category.id); setDeleteCategory(true);} }  variant="danger"> Видалення</Button></td> 
                   </tr> 
                )}     
                </tbody>
            </Table>
            <Button
                variant="primary"
                className="mt-4 p-2" style={{ fontSize: 30, fontWeigth: 'extra bold' }}
                onClick={() => setCategoryVisible(true)}
            > Створити категорію</Button>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
            <DeleteCategory value={value}  show={deleteCategory} onHide={() => {setDeleteCategory(false);}}/>
        </Container>
    );
});

export default AdminCategory;