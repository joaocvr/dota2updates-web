import axios from "axios";

const URL = "http://localhost:8080/v1/";

axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

export const GET = (context, params) => axios.get(URL + context, params);
