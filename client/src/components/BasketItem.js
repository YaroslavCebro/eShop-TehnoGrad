import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import { Context } from '../index';
import {ListGroup, Badge, } from "react-bootstrap/ListGroup";
import { Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import ChangeCurrCount from '../components/modals/productPage/ChangeCurrCount';

const BasketItem = observer(({cartItem}) =>{
    const {cart} = useContext(Context);
    const [cartList, setCartList] = useState();
    const [changeCurrCount, setChangeCurrCount] = useState(false);

    const removeFromCart = () =>{
        console.log("--------------------------");
        let currItem = cart.cartList.findIndex( item => item.id == cartItem.id);
        console.log(currItem)
        console.log(cart.cartList.find( (item, index) => ( item.id == cartItem.id)?index:false));
        cart.cartList.splice(currItem,1);
    }


    
    console.log(cartItem)
    const history = useHistory();
    return (
        <tr>
            <td>{cartItem.id}</td>
            <td>{cartItem.name}</td>
            <td>{cartItem.currCount}</td>
            <td>{cartItem.price}</td>
            <td><Button   variant="success" onClick={() => setChangeCurrCount(true)} > Редагування</Button></td>
            <td><Button  variant="danger"  onClick={removeFromCart} > Видалення</Button></td>
            <ChangeCurrCount cartItem={cartItem} show={changeCurrCount} onHide={() => setChangeCurrCount(false)}/>
        </tr>
    );
});

export default BasketItem;
