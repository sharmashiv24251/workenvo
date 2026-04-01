import type { Metadata } from "next";
import SurveyBuilderShell from "../components/survey-builder-shell";

export const metadata: Metadata = {
  title: "Workenvo | Survey Builder",
};

export default function SurveyBuilderPage() {
  return <SurveyBuilderShell />;
}
