import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahefa Landrie — IA Data Expert & Web Marketer" },
      {
        name: "description",
        content:
          "Portfolio de Mahefa Landrie, spécialiste de l'annotation de données pour l'IA, du contrôle qualité data et du marketing digital (SEO/SEA).",
      },
      { property: "og:title", content: "Mahefa Landrie — IA Data Expert & Web Marketer" },
      {
        property: "og:description",
        content: "Data Labeling, Computer Vision QA & Web Marketing.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
