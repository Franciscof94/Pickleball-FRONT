import axios from 'axios';

const shiftApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_SHIFT_URL,
});

export default shiftApi;