import axios from 'axios';

const defaultOptions = {
  baseURL: 'https://pokeapi.co/api/v2'
};

let http = axios.create(defaultOptions);

export default http;
