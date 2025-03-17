
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";

const api = axios.create({
    baseURL : "https://67b704cd2bddacfb270d4c40.mockapi.io",
    headers: {
        "Content-Type": "application/json",
    },
})

export const postApi = async(values)=>{

    const payload = {
        uuid : uuidv4(),
        createdAt : new Date().toISOString(),
        ...values,
    }
    try {
        const response = await api.post("/users",payload)
        return response;
    } catch (error) {
        console.log(error)
    }
}