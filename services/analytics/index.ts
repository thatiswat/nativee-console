import { api, API } from "@/services/api";

export async function getAnalytics() {
  const response = await api.get(
    API.ANALYTICS
  );

  return response.data;
}