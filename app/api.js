import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.wikiart.org/en/api/2/'
});

export default api;