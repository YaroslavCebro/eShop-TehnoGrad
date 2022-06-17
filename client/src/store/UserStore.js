import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor(){
        this._isAuth = false;
        this._isAdmin = false;
        this._user = [];
        this._userInfo = [];
        this._userOrders = [];
        makeAutoObservable(this);
    }

    setIsAuth(bool){
        this._isAuth = bool;
    }
    setIsAdmin(bool){
        this._isAdmin = bool;
    }
    setUser(user){
        this._user = user;
    }
    setUserInfo(userInfo){
        this._userInfo = userInfo;
    }
    setUserOrders(orders){
        this._userOrders = orders;
    }

    
    get isAuth(){
        return this._isAuth;
    }
    get isAdmin(){
        return this._isAdmin;
    }

    get user(){
        return this._user;
    }
    get userInfo(){
        return this._userInfo;
    }
    get userOrders(){
        return this._userOrders;
    }
    
}