import {makeAutoObservable} from 'mobx';

export default class CartStore {
    constructor(){
        this._cartList = [];
        this._intend = [];
        makeAutoObservable(this)
    }
    setCartList(cartList){
        this._cartList = cartList;
    }
    setIntend(intend){
        this._intend = intend;
    }
    get cartList(){
        return this._cartList;
    }
    get intend(){
        return this._intend;
    }

}