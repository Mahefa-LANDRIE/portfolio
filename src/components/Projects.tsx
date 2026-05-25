import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import cendrillon from "@/assets/proj-cendrillon.jpg";
import student from "@/assets/proj-student.jpg";
import teacher from "@/assets/proj-teacher.jpg";

type Project = {
  img: string;
  title: string;
  tag: string;
  stack: string;
  desc: string;
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    img: cendrillon,
    title: "École Cendrillon",
    tag: "Site institutionnel",
    stack: "WordPress · SEO · UX",
    desc: "Site web complet pour une école : présentation, programmes pédagogiques et inscription en ligne.",
    live: "https://ecolecendrillon.page/",
  },
  {
    img: student,
    title: "Student Card Generator",
    tag: "Outil Web",
    stack: "JavaScript · Canvas · HTML/CSS",
    desc: "Générateur de cartes étudiant personnalisées avec export image, conçu pour automatiser la production.",
    live: "https://mahefa-landrie.github.io/student-card-project/",
    github: "https://github.com/mahefa-landrie/student-card-project",
  },
  {
    img: teacher,
    title: "Teacher Certification App",
    tag: "Application Web",
    stack: "JavaScript · Web App",
    desc: "Application de certification pour enseignants : génération, vérification et personnalisation des certificats.",
    live: "https://mahefa-landrie.github.io/teacher-certification-app/",
    github: "https://github.com/mahefa-landrie/teacher-certification-app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Mes projets
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Sélection de <span className="text-gradient-gold">réalisations</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Du site institutionnel WordPress aux applications web JavaScript —
            chaque projet est en ligne et consultable.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const primary = p.live ?? p.github ?? "#";
            return (
              <article
                key={p.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl gold-border bg-surface/40 transition-all duration-500 hover:-translate-y-2 hover:bg-surface hover:shadow-[0_30px_80px_-30px_oklch(0.82_0.14_86/0.4)] ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <a
                  href={primary}
                  target="_blank"
                  rel="noreferrer"
                  className={`relative block overflow-hidden ${i === 0 ? "aspect-[2/1]" : "aspect-[4/3]"}`}
                  aria-label={`Voir ${p.title}`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" />
                  <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-medium text-gold">
                    {p.tag}
                  </span>
                  {/* Animated overlay CTA */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground translate-y-4 transition-transform duration-500 group-hover:translate-y-0 shadow-[0_0_40px_oklch(0.82_0.14_86/0.6)]">
                      <ExternalLink className="h-4 w-4" />
                      Visiter le projet
                    </span>
                  </div>
                </a>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-gold">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-wider text-gold/80">
                        {p.stack}
                      </p>
                    </div>
                    <a
                      href={primary}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Ouvrir le projet"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gold-border text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground group-hover:rotate-45"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold transition-all hover:bg-gold hover:text-primary-foreground hover:-translate-y-0.5"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live demo
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full gold-border px-3 py-1.5 text-xs font-medium text-foreground/80 transition-all hover:bg-gold hover:text-primary-foreground hover:-translate-y-0.5"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
