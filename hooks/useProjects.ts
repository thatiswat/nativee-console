"use client";

import { useEffect, useState } from "react";

import { Project } from "@/types";

import {
  createProject,
  deleteProject,
  getProjects,
} from "@/services/projects";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);

    try {
      const data = await getProjects();
      setProjects(data);
    } finally {
      setLoading(false);
    }
  }

  async function create(name: string) {
    await createProject({ name });
    refresh();
  }

  async function remove(id: string) {
    await deleteProject(id);
    refresh();
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    projects,
    loading,
    refresh,
    create,
    remove,
  };
}