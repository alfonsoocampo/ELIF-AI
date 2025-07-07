import axios from 'axios';

const API_URL = "http://localhost:5000"; // change once deployed

export const getTestEndpoint = async () => {
    return axios.get(`${API_URL}/`);
}

export const sendTopic = async (topic: string) => {
    try {
        const res = axios.post(`${API_URL}/topic`, { topic });
        return res;
    } catch (error) {
        console.error("Error sending topic:", error);
        throw error; // rethrow the error for further handling
    }
}

export const testAPI = async () => {
    return axios.get(`${API_URL}/test`);
}
