import { api, API } from "@/services/api";

export async function getUsage() {
  const response = await api.get(
    API.USAGE
  );

  return response.data;
}