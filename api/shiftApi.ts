import axios from 'axios';

const shiftApi = axios.create({
    baseURL: process.env.SHIFT_API,
});

export default shiftApi;