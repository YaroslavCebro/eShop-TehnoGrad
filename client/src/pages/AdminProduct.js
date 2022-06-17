import { Container, Table } from "react-bootstrap";
import {Context} from "../index";
import AdminProductItem from "../components/forAdmin/AdminProductItem";
import React, {useLayoutEffect,  useState, useContext} from 'react';
import {useParams} from 'react-router-dom'
import {fetchAllWithCatAndComp} from "../http/deviceApi";
import { observer } from "mobx-react-lite";


const AdminProduct = observer(() =>  {

    const {device} = useContext(Context) 
    const [devices, setDevices] = useState(null);
    useLayoutEffect( () => {
        fetchAllWithCatAndComp().then(data => device.setDevices(data))
    }, []);


   function сatAndCompCheck(element, index, array) {
       return element.hasOwnProperty('company') && element.hasOwnProperty('category')
   }
   console.log(  device.devices)
    return(
        <>
            {  device.devices.every(сatAndCompCheck) && !device.devices.hasOwnProperty('photos') &&device.devices.length != 1 ? 
                <Container>
                    <div className="mt-5" style={{ fontSize: 15, color: "#787878"}}> *для детальної інформації та взаємодії натисніть на рядок</div>
                    <Table striped bordered hover  style={{border: "2px solid black", fontSize: 20}}>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Назва</th>
                            <th>Ціна</th>
                            <th>Вага</th>
                            <th>Кількість</th>
                            <th>Гарантія у міс.</th>
                            <th>Заголовок</th>
                            <th>Опис</th>
                            <th>Категорія</th>
                            <th>Компанія</th>
                            </tr>
                        </thead>
                        <tbody>
                            {device.devices.map(device => 
                                <AdminProductItem key={device.id} device={device}/>
                            )}
                        </tbody>
                    </Table>
                </Container>
            : <h1>Loading profile...</h1>}
        </>
    );
});

export default AdminProduct;

// id
// name
// price
// weight
// count
// warranty
// title
// description
// img