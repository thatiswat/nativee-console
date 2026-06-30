"use client";

import { useState } from "react";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface CreateAPIKeyModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

export default function CreateAPIKeyModal({
  open,
  onClose,
  onCreate,
}: CreateAPIKeyModalProps) {
  const [name, setName] = useState("");

  function handleCreate() {
    if (!name.trim()) return;

    onCreate(name);

    setName("");

    onClose();
  }

  return (
    <Modal
      open={open}
      title="Generate API Key"
      onClose={onClose}
    >
      <div className="space-y-6">
        <Input
          id="api-key-name"
          label="API Key Name"
          placeholder="Production Key"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button onClick={handleCreate}>
            Generate Key
          </Button>
        </div>
      </div>
    </Modal>
  );
}