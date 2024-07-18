import { getCookie } from "utils/helpers/cookies";
import { NAME_COOKIES } from "utils/helpers/name-cookies";
import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = "https://reqres.in/api";

const axiosConfig: AxiosRequestConfig = {
	baseURL: BASE_URL,
};

const serverAPI = axios.create(axiosConfig);

serverAPI.interceptors.request.use(
	async (config) => {
		config.headers.Authorization = `Bearer ${getCookie(NAME_COOKIES.TOKEN)}`;

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default serverAPI;
