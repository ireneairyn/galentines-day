import axios from "axios";

const fakePlatziApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const getProducts = () => fakePlatziApi.get('/products');

export default fakePlatziApi;
