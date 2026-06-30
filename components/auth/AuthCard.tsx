import { ReactNode } from "react";
import Card from "@/components/ui/Card";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({
  children,
}: AuthCardProps) {
  return (
    <Card className="p-8">
      {children}
    </Card>
  );
}