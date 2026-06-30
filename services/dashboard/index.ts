import { api, API } from "@/services/api";

export async function getDashboard() {
  const response = await api.get(
    API.DASHBOARD
  );

  return response.data;
}