import { api, API } from "@/services/api";

import {
  Project,
  CreateProjectRequest,
} from "@/types";

export async function getProjects(): Promise<Project[]> {
  const response =
    await api.get<Project[]>(
      API.PROJECTS
    );

  return response.data;
}

export async function createProject(
  data: CreateProjectRequest
): Promise<Project> {
  const response =
    await api.post<Project>(
      API.PROJECTS,
      data
    );

  return response.data;
}

export async function deleteProject(
  id: string
) {
  await api.delete(
    `${API.PROJECTS}/${id}`
  );
}