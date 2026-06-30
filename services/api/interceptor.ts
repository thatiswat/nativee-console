import { api } from "./client";

api.interceptors.request.use((config) => {
  // JWT later

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    console.error(error);

    return Promise.reject(error);
  }
);