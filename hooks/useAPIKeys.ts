"use client";

import { useEffect, useState } from "react";

import { APIKey } from "@/types";

import {
  createAPIKey,
  getAPIKeys,
  revokeAPIKey,
} from "@/services/api-keys";

export function useAPIKeys() {
  const [keys, setKeys] = useState<APIKey[]>([]);

  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);

    try {
      const data = await getAPIKeys();
      setKeys(data);
    } finally {
      setLoading(false);
    }
  }

  async function create(projectId: string, name: string) {
    await createAPIKey(projectId, name);
    refresh();
  }

  async function revoke(id: string) {
    await revokeAPIKey(id);
    refresh();
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    keys,
    loading,
    refresh,
    create,
    revoke,
  };
}