import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { SEDES } from "@/data/sedes";

export const Route = createFileRoute("/testimonios")({
  head: () => ({
    meta: [
      { title: "Testimonios — FFitness" },
      { name: "description", content: "Comentarios reales de la comunidad FFitness. Equipamiento, ambiente, staff y resultados." },
    ],
  }),
  component: Testimonios,
});

function Testimonios() {
  const todos = SEDES.flatMap((s) => s.testimonios.map((t) => ({ ...t, sede: s.shortName, ciudad: s.ciudad })));

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Testimonios"
        title="La comunidad habla."
        subtitle="Comentarios reales sobre el equipamiento, el ambiente y la energía de cada sede FFitness."
      />
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {todos.map((t, i) => (
            <div key={i} className="bg-surface border border-border p-8 flex flex-col">
              <Quote size={28} className="text-brand mb-6" />
              <p className="text-base leading-relaxed mb-6 flex-grow italic">"{t.texto}"</p>
              <div className="flex gap-0.5 text-brand mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} fill="currentColor" />
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <div className="font-bold text-sm">{t.nombre}</div>
                  <div className="text-xs text-muted-foreground">{t.ciudad}</div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-brand font-bold">
                  {t.sede}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}