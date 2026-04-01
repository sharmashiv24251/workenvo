import type { Metadata } from "next";
import PlaceholderPage from "../components/placeholder-page";

export const metadata: Metadata = {
  title: "Workenvo | Reports",
};

export default function ReportsPage() {
  return (
    <PlaceholderPage
      tag="Insights Export"
      title="Reports"
      icon="assessment"
      description="Generate, schedule, and share comprehensive reports across culture, performance, sustainability, and employee health — formatted for leadership and board review."
      cta="View"
    />
  );
}
