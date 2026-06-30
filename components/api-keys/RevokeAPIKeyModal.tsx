"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

interface RevokeAPIKeyModalProps {
  open: boolean;
  apiKeyName: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function RevokeAPIKeyModal({
  open,
  apiKeyName,
  onClose,
  onConfirm,
}: RevokeAPIKeyModalProps) {
  return (
    <Modal
      open={open}
      title="Revoke API Key"
      onClose={onClose}
    >
      <div className="space-y-6">
        <p className="text-sm text-gray-600">
          Are you sure you want to revoke{" "}
          <span className="font-medium text-gray-900">
            {apiKeyName}
          </span>
          ?
        </p>

        <p className="text-sm text-red-600">
          This action cannot be undone. Applications using this key
          will immediately lose access to the Nativee API.
        </p>

        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={onConfirm}
          >
            Revoke Key
          </Button>
        </div>
      </div>
    </Modal>
  );
}