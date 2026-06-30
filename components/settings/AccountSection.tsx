import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { CONFIG } from "@/constants";

export default function AccountSection() {
  return (
    <Card>
      <h2 className="text-lg font-semibold">
        Account
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Current Plan
          </span>

          <Badge>
            {CONFIG.DEFAULT_PLAN}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Member Since
          </span>

          <span>—</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Account Status
          </span>

          <Badge variant="success">
            Active
          </Badge>
        </div>
      </div>
    </Card>
  );
}