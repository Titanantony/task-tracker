import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const axiosInstance = axios.create({ baseUrl: BASE_URL });
