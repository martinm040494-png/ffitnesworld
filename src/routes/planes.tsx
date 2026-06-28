import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { WHATSAPP_GENERAL } from "@/data/sedes";

export const Route = createFileRoute("/planes")({
  head: () => ({
    meta: [
      { title: "Planes FFitness — Mensual, Trimestral, Semestral y Anual" },
      { name: "description", content: "Conoce los planes FFitness. Flexibilidad y los mejores precios para entrenar en todas nuestras sedes." },
    ],
  }),
  component: Planes,
});

const PLANES = [
  {
    nombre: "Mensual",
    tag: "Flexibilidad",
    descripcion: "El mejor punto de entrada para conocer FFitness.",
    beneficios: ["Acceso a sede seleccionada", "Todas las máquinas", "Evaluación inicial", "Comunidad FFitness"],
    featured: false,
  },
  {
    nombre: "Trimestral",
    tag: "3 Meses",
    descripcion: "Compromiso corto con ahorro real frente al mensual.",
    beneficios: ["Todo lo del plan mensual", "Ahorro vs mensual", "Plan de entrenamiento", "Sin matrícula"],
    featured: false,
  },
  {
    nombre: "Semestral",
    tag: "Más popular",
    descripcion: "El equilibrio perfecto entre compromiso y resultados.",
    beneficios: ["Acceso multi-sede", "Clases grupales", "1 sesión con coach", "Pase de invitado / mes"],
    featured: true,
  },
  {
    nombre: "Anual",
    tag: "Pro",
    descripcion: "Para quienes ya tomaron la decisión. Máximo ahorro.",
    beneficios: ["Todo lo del semestral", "Precio más bajo del año", "Congelamiento 30 días", "Acceso VIP a eventos"],
    featured: false,
  },
];

function Planes() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Planes FFitness"
        title="Elige tu potencial."
        subtitle="Mensual, trimestral, semestral o anual. Encuentra el plan que se adapta a tu ritmo de vida y a tus metas."
      />
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANES.map((p) => (
            <div
              key={p.nombre}
              className={`p-8 border flex flex-col ${
                p.featured
                  ? "bg-brand text-background border-brand shadow-2xl shadow-brand/10 lg:-translate-y-4"
                  : "bg-surface border-border"
              }`}
            >
              <div className={`text-[10px] font-black uppercase tracking-widest mb-4 ${p.featured ? "bg-background text-brand w-fit px-2 py-1" : "text-brand"}`}>
                {p.tag}
              </div>
              <div className="font-display text-6xl uppercase leading-none mb-3">{p.nombre}</div>
              <p className={`text-sm mb-8 ${p.featured ? "text-background/80" : "text-muted-foreground"}`}>
                {p.descripcion}
              </p>
              <ul className="space-y-3 mb-10 flex-grow">
                {p.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check size={14} className="mt-1 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener"
                className={`w-full py-4 text-center font-black uppercase text-[10px] tracking-widest transition-colors ${
                  p.featured
                    ? "bg-background text-brand hover:bg-foreground hover:text-background"
                    : "border border-foreground/20 hover:bg-brand hover:text-background hover:border-brand"
                }`}
              >
                Solicitar info
              </a>
            </div>
          ))}
        </div>
        <p className="max-w-7xl mx-auto px-6 mt-12 text-center text-xs uppercase tracking-widest text-muted-foreground">
          * Los planes y promociones pueden variar según cada sede.
        </p>
      </section>

      <section className="bg-brand text-background py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 leading-none">
            ¿Dudas con tu plan? Te asesoramos.
          </h2>
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-background text-brand px-8 py-4 font-black uppercase text-xs tracking-widest"
          >
            <MessageCircle size={16} /> Solicitar información
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}