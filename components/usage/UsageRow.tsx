import Badge from "@/components/ui/Badge";

export default function UsageRow() {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        /v1/conversation
      </td>

      <td className="px-6 py-4">
        —
      </td>

      <td className="px-6 py-4">
        —
      </td>

      <td className="px-6 py-4">
        <Badge>
          Pending
        </Badge>
      </td>
    </tr>
  );
}