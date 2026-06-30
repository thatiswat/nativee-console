import { api, API } from "@/services/api";

export async function getCurrentUser() {
  const response = await api.get(
    API.AUTH.ME
  );

  return response.data;
}