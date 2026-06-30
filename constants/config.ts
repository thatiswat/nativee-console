export const CONFIG = {
  APP_NAME: "Nativee Console",

  COMPANY_NAME: "Nativee",

  API_URL:
    process.env.NEXT_PUBLIC_API_URL ??
    "http://localhost:8000",

  APP_URL:
    process.env.NEXT_PUBLIC_APP_URL ??
    "http://localhost:3000",

  DEFAULT_PLAN: "Free",

  SUPPORT_EMAIL: "support@nativee.in",
} as const;