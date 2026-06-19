import { createFileRoute } from "@tanstack/react-router";
import BirthdayHero from "@/components/BirthdayHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Audrey 💖" },
      { name: "description", content: "Sebuah kejutan kecil yang manis untuk hari spesialmu." },
      { property: "og:title", content: "Happy Birthday, Audrey 💖" },
      { property: "og:description", content: "Buka kadonya dan lihat kejutannya!" },
    ],
  }),
  component: Index,
});

function Index() {
  return <BirthdayHero />;
}
