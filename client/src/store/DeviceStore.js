import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor(){
        this._categorys = [];
            this._companys = []; 
            this._devices = [];
            this._characterics = [];
            this._selectedCategory = {}
            this._selectedCompany = {}
            this._page = 1
            this._totalCount = 0
            this._limit = 1
            makeAutoObservable(this)
    }

    setCategorys(categorys){
        this._categorys = categorys;
    }
    setCompanys(companys){
        this._companys = companys;
    }
    setDevices(devices){
        this._devices = devices;
    }
    setCharacterics(characterics){
        this._characterics = characterics;
    }
    
    setSelectedCategory(category){
        this._selectedCategory = category;
    }

    setSelectedCompany(company){
        this._selectedCompany = company;
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get categorys(){
        return this._categorys;
    }

    get companys(){
        return this._companys;
    }
    get devices(){
        return this._devices;
    }
    get selectedCategory(){
        return this._selectedCategory;
    }
    get selectedCompany(){
        return this._selectedCompany;
    }
    get selectedCharacterics(){
        return this._characterics;
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}