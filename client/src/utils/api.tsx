import axios from "axios";
import { baseURL } from "./constants";

axios.defaults.baseURL = baseURL;

export default axios;
