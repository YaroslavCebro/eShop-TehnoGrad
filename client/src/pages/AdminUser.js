import React, {useContext, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { Container, Table, Button } from 'react-bootstrap';
import { getAllEmployees, getAllUsers } from '../http/userApi';
import AdminReg from '../components/modals/AdminReg';

const AdminCategory = observer(() =>{

    const [users, setUsers] = useState();
    const {admin} = useContext(Context);


    const [value, setValue] = useState();
    console.log(admin)
    useEffect( () => {
        getAllUsers().then(data => admin.setUsers(data))
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
                    <th>Пошта</th>
                    </tr>
                </thead>
                <tbody>
                {admin.users.map( user => 
                   <tr key={user.id} user={user}>
                       <td>{user.id}</td>
                       <td>{user.lname}</td>
                       <td>{user.name}</td>
                       <td>{user.mail}</td>
                   </tr> 
                )}     
                </tbody>
            </Table>
        </Container>
    :  <h1>Lоading...</h1>  }
    </>
    );
});

export default AdminCategory;