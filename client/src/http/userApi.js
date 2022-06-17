import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (lname, name, mail, password) => {
    const {data} = await $host.post('api/user/registration', {lname, name, mail, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const updateUserInfo = async (token, lname, name) => {
    const {data} = await $host.post('api/user/update', {token, lname, name})
    return data;
}
export const getById = async (id) => {
    const {data} = await $host.get('api/user/byid', {id} )
    return data;
}

export const login = async (mail, password) => {
    const {data} = await $host.post('api/user/login', {mail, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const adminLogin = async (lname, name, phone, password) => {
    const {data} = await $host.post('api/admin/login', {lname, name, phone, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const adminRegistration = async (lname, name, phone, post, password) => {
    const {data} = await $host.post('api/admin/registration', {lname, name, phone, post, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const adminCheck = async () => {
    const {data} = await $authHost.get('api/admin/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getAllEmployees = async () => {
    const {data} = await $host.get('api/admin/', )
    return data;
}
export const getAllUsers = async () => {
    const {data} = await $host.get('api/user/getall', )
    return data;
}
