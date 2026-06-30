import { User } from "@/types/user";
import { api, API } from "@/services/api";

export async function me(): Promise<User> {
  const response = await api.get<User>(
    API.AUTH.ME
  );

  return response.data;
}