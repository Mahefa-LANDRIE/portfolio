import photo from "@/assets/mahefa.png";
import { ArrowRight, Download, Github, Linkedin, Facebook } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-gold/20 blur-[120px]" />
      <div className="absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-8">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full gold-border bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            Disponible pour collaboration
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Hi, I'm <br />
            <span className="text-gradient-gold">Mahefa.</span>
          </h1>

          <p className="mt-5 font-display text-xl text-foreground/90 md:text-2xl">
            IA Data Expert <span className="text-gold">&</span> Web Marketer
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Spécialiste de l'annotation de données visuelles pour l'IA et expert en
            acquisition digitale. J'allie rigueur analytique et performance marketing
            pour booster la croissance de vos projets technologiques.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/MahefaCV.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.82_0.14_86/0.5)]"
            >
              <Download className="h-4 w-4" />
              Voir mon CV
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full gold-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-gold/10"
            >
              Voir mes projets
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/mahefa-landrie", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/mahefa-landrie", label: "LinkedIn" },
              { Icon: Facebook, href: "#", label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full gold-border text-gold transition-all hover:bg-gold hover:text-primary-foreground hover:-translate-y-1"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md md:order-2">
          <div className="absolute inset-0 -z-10 animate-float">
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-gold/40 to-transparent blur-3xl" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] gold-border bg-surface">
            <img
              src={photo}
              alt="Mahefa Landrie — IA Data Expert"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3">
            <p className="text-2xl font-bold text-gold">4+</p>
            <p className="text-xs text-muted-foreground">Années d'expérience</p>
          </div>
          <div className="glass absolute -top-4 -right-4 rounded-2xl px-4 py-3">
            <p className="text-2xl font-bold text-gold">95%</p>
            <p className="text-xs text-muted-foreground">Data Labeling</p>
          </div>
        </div>
      </div>
    </section>
  );
}
