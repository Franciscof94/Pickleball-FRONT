import axios from 'axios';

const mailApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_EMAIL_URL,
});

export default mailApi;