import { api, API } from "@/services/api";

export async function getAPIKeys() {
  const response = await api.get(
    API.API_KEYS
  );

  return response.data;
}

export async function createAPIKey(
  projectId: string,
  name: string
) {
  const response = await api.post(
    API.API_KEYS,
    {
      projectId,
      name,
    }
  );

  return response.data;
}

export async function revokeAPIKey(
  id: string
) {
  await api.delete(
    `${API.API_KEYS}/${id}`
  );
}