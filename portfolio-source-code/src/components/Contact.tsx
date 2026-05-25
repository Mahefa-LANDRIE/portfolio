import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com/mahefa-landrie", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/mahefa-landrie", label: "LinkedIn" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] gold-border bg-surface/60 p-10 md:p-16">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Travaillons ensemble
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Un projet en <br />
                <span className="text-gradient-gold">tête ?</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                IA Data Expert & Web Marketer — disponible pour des missions en
                annotation IA, contrôle qualité data, SEO/SEA et développement web.
              </p>

              <a
                href="/MahefaCV.pdf"
                target="_blank"
                rel="noreferrer"
                download="Mahefa-Landrie-CV.pdf"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.82_0.14_86/0.5)]"
              >
                <Download className="h-4 w-4" />
                Télécharger mon CV
              </a>

              <div className="mt-6 flex gap-3">
                {socials.map(({ Icon, href, label }) => (
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

            <div className="space-y-4">
              <a
                href="mailto:landriejames@gmail.com"
                className="flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-5 transition-all hover:bg-gold/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="font-medium">landriejames@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+261349174020"
                className="flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-5 transition-all hover:bg-gold/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Téléphone</p>
                  <p className="font-medium">+261 34 91 740 20</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/mahefa-landrie"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-5 transition-all hover:bg-gold/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Linkedin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">mahefa-landrie</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Adresse</p>
                  <p className="font-medium">Soavimasoandro, Antananarivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Mahefa Landrie — IA Data Expert & Web Marketer.</p>
          <p>
            Conçu avec <span className="text-gold">♦</span> rigueur & passion.
          </p>
        </footer>
      </div>
    </section>
  );
}
