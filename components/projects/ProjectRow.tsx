import Badge from "@/components/ui/Badge";

export default function ProjectRow() {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        Personal Project
      </td>

      <td className="px-6 py-4">
        <Badge>
          Free
        </Badge>
      </td>

      <td className="px-6 py-4">
        2
      </td>

      <td className="px-6 py-4">
        12,480
      </td>

      <td className="px-6 py-4">
        Today
      </td>

      <td className="px-6 py-4 text-right">
        •••
      </td>
    </tr>
  );
}