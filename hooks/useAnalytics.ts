"use client";

import { useEffect, useState } from "react";

import { Analytics } from "@/types";
import { getAnalytics } from "@/services/analytics";

export function useAnalytics() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);

    try {
      const data = await getAnalytics();
      setAnalytics(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    analytics,
    loading,
    refresh,
  };
}