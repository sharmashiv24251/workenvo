import type { Metadata } from "next";
import SignalsSetupShell from "../components/signals-setup-shell";

export const metadata: Metadata = {
  title: "Workenvo | Signals Setup",
};

export default function SignalsSetupPage() {
  return <SignalsSetupShell />;
}
