import type { Metadata } from "next";
import PlaceholderPage from "../components/placeholder-page";

export const metadata: Metadata = {
  title: "Workenvo | Sentiment",
};

export default function SentimentPage() {
  return (
    <PlaceholderPage
      tag="Pulse Intelligence"
      title="Sentiment"
      icon="heart"
      description="Track real-time employee sentiment across teams, surfacing emotional trends and wellbeing signals before they become retention risks."
      cta="Configure"
    />
  );
}
