import axios from "axios";
import { setupClientInterceptors } from "./client/client-interceptors";

export const httpClient = setupClientInterceptors(axios.create({
    baseURL: 'https://localhost:8080',
    timeout: 1000,
}));

export const httpClientForServer = axios.create();