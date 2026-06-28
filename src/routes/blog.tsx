import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog FFitness — Consejos y novedades" },
      { name: "description", content: "Tips de entrenamiento, nutrición, eventos y novedades de la comunidad FFitness." },
    ],
  }),
  component: Blog,
});

const POSTS = [
  { cat: "Entrenamiento", titulo: "5 ejercicios clave para construir fuerza real", lectura: "5 min", fecha: "27 Jun 2026" },
  { cat: "Promociones", titulo: "Preventa anual: ahorra hasta un 30% en tu plan", lectura: "2 min", fecha: "20 Jun 2026" },
  { cat: "Eventos", titulo: "Open day FFitness Retro Chillán — Sábado 12 de Julio", lectura: "3 min", fecha: "15 Jun 2026" },
  { cat: "Historias", titulo: "Cómo Camila bajó 14 kilos entrenando en FFitness", lectura: "6 min", fecha: "10 Jun 2026" },
  { cat: "Nutrición", titulo: "Qué comer antes y después de entrenar", lectura: "4 min", fecha: "01 Jun 2026" },
  { cat: "Comunidad", titulo: "Nuevos coaches se suman al equipo FFitness", lectura: "2 min", fecha: "20 May 2026" },
];

function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog · Novedades"
        title="Últimas novedades."
        subtitle="Consejos de entrenamiento, nutrición, eventos exclusivos y novedades de la comunidad FFitness."
      />
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {POSTS.map((p, i) => (
            <article key={i} className="group bg-surface border border-border overflow-hidden flex flex-col hover:border-brand transition-colors">
              <div className={`aspect-video bg-gradient-to-br ${i % 3 === 0 ? "from-brand/30 to-surface" : i % 3 === 1 ? "from-red-500/20 to-surface" : "from-blue-500/20 to-surface"} relative`}>
                <span className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand">
                  {p.cat}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-grow">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-3">
                  <span>{p.fecha}</span>
                  <span className="size-1 bg-muted-foreground rounded-full" />
                  <span>{p.lectura}</span>
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight group-hover:text-brand transition-colors">
                  {p.titulo}
                </h3>
                <a href="#" className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand">
                  Leer más <ArrowRight size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}