import axios from 'axios';

export default axios.create({
    baseURL: 'https://fellowship1337.herokuapp.com/api/v1',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Origin": "*"
  }
});