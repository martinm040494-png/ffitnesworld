import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, Users, Building2, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SedeCard } from "@/components/site/SedeCard";
import { Marquee } from "@/components/site/Marquee";
import { SEDES } from "@/data/sedes";
import heroImg from "@/assets/hero.jpg";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";
import training3 from "@/assets/training-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FFitness — Tu mejor versión empieza hoy. Vive la experiencia." },
      { name: "description", content: "Cadena de gimnasios FFitness con sedes en Chillán, Los Ángeles y Temuco. Comunidad fitness, planes flexibles y equipamiento premium." },
      { property: "og:title", content: "FFitness — Tu mejor versión empieza hoy" },
      { property: "og:description", content: "Más que un gimnasio, una comunidad preparada para llevarte a tu mejor versión." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 h-screen min-h-[720px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Atleta entrenando en FFitness"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-brand" />
              <span className="text-brand font-bold tracking-[0.3em] uppercase text-xs">
                FFITNESS · CHILE
              </span>
            </div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-9xl uppercase leading-[0.85] mb-8">
              Tu mejor versión<br />
              <span className="text-brand">empieza hoy.</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 mb-10 max-w-xl leading-relaxed">
              Más que un gimnasio, una comunidad preparada para ayudarte a alcanzar tu mejor versión.
              Equipamiento premium, sedes por el sur de Chile y la mejor comunidad fitness.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/sedes"
                className="inline-flex items-center gap-2 bg-brand text-background px-7 py-4 font-black uppercase text-xs tracking-tight hover:bg-foreground transition-colors"
              >
                Encuentra tu sede <ArrowRight size={16} />
              </Link>
              <Link
                to="/planes"
                className="inline-flex items-center bg-transparent border border-foreground/20 text-foreground px-8 py-4 font-black uppercase text-xs tracking-normal hover:bg-foreground hover:text-background transition-colors"
              >
                Ver planes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { icon: Building2, num: "04", label: "Sedes en Chile" },
            { icon: Users, num: "5K+", label: "Atletas activos" },
            { icon: Dumbbell, num: "200+", label: "Máquinas elite" },
            { icon: Zap, num: "24/7", label: "Comunidad FFitness" },
          ].map((s) => (
            <div key={s.label} className="px-4 py-10 md:py-12 first:pl-0 last:pr-0 flex flex-col">
              <s.icon size={20} className="text-brand mb-4" />
              <div className="font-display text-5xl md:text-6xl mb-1">{s.num}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={["Sin excusas", "Entrena fuerte", "FFitness", "Fuerza y disciplina", "Comunidad real"]} />

      {/* SEDES */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
            <div>
              <span className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">
                01 / Nuestras sedes
              </span>
              <h2 className="font-display text-5xl md:text-6xl uppercase mt-3">
                4 sedes. <span className="text-brand">1 sola comunidad.</span>
              </h2>
            </div>
            <Link
              to="/sedes"
              className="inline-flex items-center gap-2 text-brand font-bold uppercase text-xs tracking-widest border-b border-brand pb-1 self-start"
            >
              Ver todas <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEDES.map((s) => (
              <SedeCard key={s.slug} sede={s} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE / GALLERY */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">
              02 / La experiencia
            </span>
            <h2 className="font-display text-5xl md:text-6xl uppercase mt-3 mb-6 leading-none">
              Diseñado para transformar tu rendimiento.
            </h2>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Equipamiento de gimnasios de alto nivel internacional, ambientes diseñados para la
              concentración y una comunidad que empuja contigo. Cada sede es un espacio para
              que la disciplina se convierta en resultados.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                ["Musculación", "Zonas de fuerza con pesas libres y máquinas premium."],
                ["Cardio", "Áreas cardiovasculares completas con equipamiento moderno."],
                ["Funcional", "Espacios diseñados para entrenamiento de alto impacto."],
              ].map(([t, d]) => (
                <div key={t}>
                  <div className="text-brand text-[10px] font-black uppercase tracking-widest mb-2">{t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={training1} alt="Entrenamiento de fuerza" loading="lazy" className="aspect-[3/4] object-cover col-span-2 grayscale-[20%]" />
            <img src={training2} alt="Entrenamiento funcional" loading="lazy" className="aspect-square object-cover grayscale-[20%]" />
            <img src={training3} alt="Clase grupal" loading="lazy" className="aspect-square object-cover grayscale-[20%]" />
          </div>
        </div>
      </section>

      {/* PLANES TEASER */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">
            03 / Planes FFitness
          </span>
          <h2 className="font-display text-5xl md:text-7xl uppercase mt-3 mb-6 leading-none">
            Elige tu <span className="text-brand">potencial.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Mensual, trimestral, semestral o anual. Planes pensados para tu ritmo, con acceso a la
            mejor comunidad fitness del sur de Chile.
          </p>
          <Link
            to="/planes"
            className="inline-flex items-center gap-2 bg-brand text-background px-8 py-4 font-black uppercase text-xs tracking-tight hover:bg-foreground transition-colors"
          >
            Ver todos los planes <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-background py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
            ¿Listo para tu transformación?
          </h2>
          <div className="space-y-6">
            <p className="text-background/80 text-base font-medium max-w-md">
              Encuentra la sede más cercana y comienza tu entrenamiento hoy mismo.
            </p>
            <Link
              to="/sedes"
              className="inline-flex items-center gap-3 bg-background text-brand px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-foreground transition-colors"
            >
              Ver todas las sedes
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
