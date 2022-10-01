import axios from "axios";

const instance = axios.create({
  // The API (cloud funcion) URL -- Pulling from local api to debug
  baseURL: "https://us-central1-challenge-f76c4.cloudfunctions.net/api",

  //local  'http://localhost:5001/challenge-f76c4/us-central1/api'
  //firebase  'https://us-central1-challenge-f76c4.cloudfunctions.net/api'
});

export default instance;
