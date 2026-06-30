"use client";

import { useEffect, useState } from "react";

import { Usage } from "@/types";
import { getUsage } from "@/services/usage";

export function useUsage() {
  const [usage, setUsage] = useState<Usage | null>(null);

  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);

    try {
      const data = await getUsage();
      setUsage(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    usage,
    loading,
    refresh,
  };
}