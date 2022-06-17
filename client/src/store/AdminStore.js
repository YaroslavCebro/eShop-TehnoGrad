import {makeAutoObservable} from 'mobx';

export default class AdminStore {
    constructor(){
        this._employees = [];
        this._users = [];
        makeAutoObservable(this);
    }

    setEmployees(data){
        this._employees = data;
    }
    
    get employees(){
        return this._employees;
    }
    setUsers(users){
        this._users = users;
    }
    
    get users(){
        return this._users;
    }
}