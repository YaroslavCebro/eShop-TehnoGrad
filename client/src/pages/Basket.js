import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Card, Container, Table } from "react-bootstrap";
import {Context} from "../index";
import BasketItem from "../components/BasketItem"
import { Button } from 'react-bootstrap';
import IntendConfirm from "../components/modals/basket/IntendConfirm";
import { fetchEmployees } from "../http/AdminApi";

const Basket = observer(() =>  {

    const {cart} = useContext(Context)


   const [cartList, setCartList] = useState();
    const [intendConfirm, setIntendConfirm] = useState(false);


   let totalPrice = cart.cartList.reduce((sum, el) => {
    return sum += el.price * el.currCount;
    }, 0)
   console.log(cart.cartList);
    
    const removeAllFromCart = () =>{    
        cart.cartList.length = 0;

    }

   
    return(
            <> 
                { cart.cartList.length > 0 ?
                    <Container className="mt-5" >
                            <Table striped bordered style={{border: "2px solid black", fontSize: 20}}>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Назва</th>
                                        <th>Кількість</th>
                                        <th>Ціна за од.</th>
                                        <th>Редагування</th>
                                        <th>Видалення</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.cartList.map(cartItem =>
                                        <BasketItem key={cartItem.id} cartItem={cartItem} />
                                    )}
                                <tr  className="pt-5"> 
                                    <td colSpan={3}><div>Сума:</div>
                                    </td>
                                    <td>{totalPrice}.00</td>
                                    <td><Button  variant="danger"  onClick={removeAllFromCart} > Видалити все</Button></td>
                                    <td ><Button variant="primary" onClick={() => setIntendConfirm(true)}>Оформити замовлення</Button></td>
                                </tr>
                                </tbody>
                            </Table> 
                            <IntendConfirm  show={intendConfirm} onHide={() => {setIntendConfirm(false);}}/>
                    </Container>
                :
                <div className="mt-5" style={{
                    display: "flex",
                   alignItems: "center",
                   justifyContent: "center"
                   }}><h1 >Кошик пустий🙃</h1></div>
                  }
            </>
    );
});




export default Basket;

