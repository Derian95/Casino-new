import axios from "axios";


export const corporateApi = axios.create({
    baseURL:'http://40.122.134.6:4002/web'  
    // baseURL:'http://192.168.1.32:9998/web'  
})


