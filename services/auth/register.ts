import { api, API } from "@/services/api";

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export async function register(
  data: RegisterRequest
): Promise<void> {
  await api.post(
    API.AUTH.REGISTER,
    data
  );
}