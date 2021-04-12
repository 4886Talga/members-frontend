import axios from 'axios';

export default axios.create({
    //baseURL: 'https://fellowship1337.herokuapp.com/api/v1',
    baseURL: 'https://api.1337co.de/v3',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "api-key 14:2021-04-12:alicia.sjoberg@tretton37.com c0bfcf23d85edc9001ce8a83d8b63b391d221389e44f072f0ea31e80c58f0bbe"
  }
});