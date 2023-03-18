import axios from 'axios';

const shiftApi = axios.create({
    baseURL: process.env.API_URL,
});

export default shiftApi;