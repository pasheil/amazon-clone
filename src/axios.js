import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-f76c4/us-central1/api'  // The API (cloud funcion) URL
});

export default instance;