"use client";

import { useEffect, useState } from "react";

import { Dashboard } from "@/types";
import { getDashboard } from "@/services/dashboard";

export function useDashboard() {
  const [data, setData] = useState<Dashboard | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<unknown>(null);

  async function refresh() {
    try {
      setLoading(true);

      const dashboard = await getDashboard();

      setData(dashboard);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    data,
    loading,
    error,
    refresh,
  };
}