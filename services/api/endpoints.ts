export const API = {
  AUTH: {
    LOGIN: "/v1/auth/login",
    REGISTER: "/v1/auth/register",
    LOGOUT: "/v1/auth/logout",
    REFRESH: "/v1/auth/refresh",
    ME: "/v1/me",
  },

  DASHBOARD: "/v1/dashboard",

  PROJECTS: "/v1/projects",

  API_KEYS: "/v1/api-keys",

  USAGE: "/v1/usage",

  ANALYTICS: "/v1/analytics",
} as const;