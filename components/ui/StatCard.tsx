import Card from "./Card";

interface StatCardProps {
  label: string;
  value: string;
}

export default function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <Card>
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-3xl font-bold text-gray-900">
        {value}
      </p>
    </Card>
  );
}