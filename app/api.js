import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.wikiart.org/en/App/'
});

export default api;