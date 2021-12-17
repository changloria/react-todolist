import axios from "axios";

const api = axios.create({
    // baseURL: 'https://61b9880b38f69a0017ce609d.mockapi.io/' 
    baseURL: 'http://localhost:8080/'
});

export default api;