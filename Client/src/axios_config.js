import axios from 'axios';

const apiClient = axios.create({
    baseURL: "https://localhost:7282",
});

export default apiClient;