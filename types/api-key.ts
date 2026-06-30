export interface APIKey {
  id: string;

  name: string;

  key: string;

  projectId: string;

  createdAt: string;

  lastUsedAt?: string;

  active: boolean;
}

export interface CreateAPIKeyRequest {
  projectId: string;

  name: string;
}