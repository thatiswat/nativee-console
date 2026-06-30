export const PLANS = [
  "Free",
  "Starter",
  "Growth",
  "Enterprise",
] as const;

export type Plan =
  (typeof PLANS)[number];