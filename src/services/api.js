import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-marco.herokuapp.com'
});

export default api;