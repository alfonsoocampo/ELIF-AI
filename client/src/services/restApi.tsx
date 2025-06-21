import axios from 'axios';

const API_URL = "http://localhost:5000"; // change once deployed

export const getTestEndpoint = async () => {
    return axios.get(`${API_URL}/`);
}
