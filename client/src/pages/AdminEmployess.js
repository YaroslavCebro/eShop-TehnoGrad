import React, {useContext, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { Container, Table, Button } from 'react-bootstrap';
import { getAllEmployees } from '../http/userApi';
import AdminReg from '../components/modals/AdminReg';

const AdminCategory = observer(() =>{

    const [employeeVisible, setEmployeeVisible] = useState(false);

    const [employees, setEmployees] = useState();
    const {admin} = useContext(Context);


    const [value, setValue] = useState();
    console.log(admin)
    useEffect( () => {
        getAllEmployees().then(data => admin.setEmployees(data))
    }, [])
    return (
        <>
        {admin.employees.length > 0 ?
             <Container  className="d-flex flex-column">
            <Table className="mt-5" striped bordered hover  style={{border: "2px solid black", fontSize: 20}}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Номер телефону</th>
                    <th>Посада</th>
                    </tr>
                </thead>
                <tbody>
                {admin.employees.map( employee => 
                   <tr key={employee.id} employee={employee}>
                       <td>{employee.id}</td>
                       <td>{employee.lname}</td>
                       <td>{employee.name}</td>
                       <td>{employee.phone}</td>
                       <td>{employee.post}</td>
                   </tr> 
                )}     
                </tbody>
            </Table>
            <Button
                variant="primary"
                className="mt-4 p-2" style={{ fontSize: 30, fontWeigth: 'extra bold' }}
                onClick={() => setEmployeeVisible(true)}
            >Зареєструвати персонал</Button>
            <AdminReg  show={employeeVisible} onHide={() => {setEmployeeVisible(false);}}/>
        </Container>
    :  <h1>Lоading...</h1>  }
    </>
    );
});

export default AdminCategory;