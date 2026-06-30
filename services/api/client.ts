import axios from "axios";

import { CONFIG } from "@/constants";

export const api = axios.create({
  baseURL: CONFIG.API_URL,

  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
  },
});