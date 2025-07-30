import axios from "axios"

export const axiosInstance = axios.create({
    baseURL :  "https://canteen-web-1-04ai.onrender.com" ,
    withCredentials : true
})
