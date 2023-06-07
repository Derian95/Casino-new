import axios from "axios";


export const corporateApi = axios.create({
    baseURL:'http://192.168.1.32:9998/web'  
})


