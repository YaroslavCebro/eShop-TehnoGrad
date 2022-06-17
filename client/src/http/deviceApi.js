import {$authHost, $host} from "./index";
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category);
    return data;
}
export const fetchCategory = async () => {
    const {data} = await $host.get('api/category');
    return data;
}
export const fetchOneCategory = async (id) => {
    const {data} = await $host.get('api/category');
    return data;
}
export const updateCategory = async (id) => {
    const {data} = await $authHost.update('api/category', id);
    return data;
}
export const deleteCategory = async (id) => {
    const {data} = await $authHost.delete('api/category', id);
    return data;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createCompany = async (name, country) => {
    const {data} = await $authHost.post('api/company', {name, country});
    return data;
}
export const fetchCompany = async () => {
    const {data} = await $host.get('api/company');
    return data;
}
export const updateCompany = async (company) => {
    const {data} = await $authHost.update('api/company', company);
    return data;
}
export const deleteCompany = async (company) => {
    const {data} = await $authHost.delete('api/company', company);
    return data;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createProd = async (company) => {
    const {data} = await $authHost.post('api/prod', company);
    return data;
}
export const fetchProd = async(categoryId, companyId, page, limit= 2) => {
    const {data} = await $host.get('api/prod', {params: {
        categoryId, companyId, page, limit
        }})
    return data;
}
export const fetchOneProd = async (id) => {
    const {data} = await $host.get('api/prod/' + id);
    return data;
}
export const fetchAllWithCatAndComp = async() =>{
    const {data} = await $authHost.get('api/prod/getall');
    return data;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createPhoto = async (name, productId) => {
    const {data} = await $authHost.post('api/photo', {name, productId});
    return data;
}
export const fetchPhoto = async () => {
    const {data} = await $host.get('api/photo');
    return data;
}
export const fetchOnePhoto = async (id) => {
    const {data} = await $host.get('api/photo/' + id);
    return data;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createIntend = async (userId, conditional) => {
    const {data} = await $host.post('api/intend', {userId, conditional});
    return data;
}
export const fetchIntend = async () => {
    const {data} = await $host.get('api/photo');
    return data;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createListIntend = async (count, productId, intendId) => {
    const {data} = await $host.post('api/listintend', {count, productId, intendId });
    return data;
}
export const fetchListIntend = async () => {
    const {data} = await $host.get('api/listintend');
    return data;
}