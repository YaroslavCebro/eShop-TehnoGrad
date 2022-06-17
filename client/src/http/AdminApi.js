import {$authHost, $host} from "./index";
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const fetchEmployees = async () => {
    const {data} = await $host.get('api/admin');
    return data;
}