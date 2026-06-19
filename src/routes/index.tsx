import { createFileRoute } from "@tanstack/react-router";
import BirthdayHero from "@/components/BirthdayHero";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <BirthdayHero />;
}
