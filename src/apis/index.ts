import API_URLS from "consts/api-url";
import axios from "./axios";


export const login = (params: any) => {
  return axios.post(API_URLS.LOGIN, params);
};
