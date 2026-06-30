import Badge from "@/components/ui/Badge";

export default function APIKeyRow() {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        Production Key
      </td>

      <td className="px-6 py-4">
        Personal Project
      </td>

      <td className="px-6 py-4 font-mono text-sm">
        nt_live_************************
      </td>

      <td className="px-6 py-4">
        Today
      </td>

      <td className="px-6 py-4">
        <Badge variant="success">
          Active
        </Badge>
      </td>

      <td className="px-6 py-4 text-right">
        •••
      </td>
    </tr>
  );
}