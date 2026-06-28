import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Nuestro equipo — FFitness" },
      { name: "description", content: "Conoce a los entrenadores y staff FFitness. Profesionales certificados para acompañarte." },
    ],
  }),
  component: Staff,
});

const STAFF = [
  { nombre: "Camila Rojas", especialidad: "Coach de Fuerza", sede: "Chillán", ig: "@camirojas.coach" },
  { nombre: "Matías Vergara", especialidad: "Funcional & HIIT", sede: "Retro Chillán", ig: "@matiasvergara" },
  { nombre: "Javiera Soto", especialidad: "Spinning Pro", sede: "Los Ángeles", ig: "@javisoto.fit" },
  { nombre: "Felipe Muñoz", especialidad: "Powerlifting", sede: "Retro Temuco", ig: "@felipemunoz.lift" },
  { nombre: "Daniela Castro", especialidad: "Nutrición Deportiva", sede: "Chillán", ig: "@danicastro.nutri" },
  { nombre: "Tomás Herrera", especialidad: "Movilidad & Cardio", sede: "Los Ángeles", ig: "@tomasherrera" },
];

const GRADIENTS = [
  "from-brand/40 to-surface",
  "from-red-500/30 to-surface",
  "from-blue-500/30 to-surface",
  "from-orange-500/30 to-surface",
  "from-green-500/30 to-surface",
  "from-purple-500/30 to-surface",
];

function Staff() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nuestro equipo"
        title="La gente que empuja contigo."
        subtitle="Coaches certificados, nutricionistas y staff dedicado a que cada visita a FFitness sea una mejor versión de la anterior."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STAFF.map((s, i) => (
            <div key={s.nombre} className="bg-surface border border-border overflow-hidden group">
              <div className={`aspect-[4/5] bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} flex items-end p-8 relative`}>
                <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest bg-background/70 backdrop-blur px-2 py-1">
                  {s.sede}
                </div>
                <div className="font-display text-[10rem] md:text-[12rem] leading-none text-brand/20 absolute -bottom-6 -right-2 select-none pointer-events-none">
                  {s.nombre.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <div className="p-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl uppercase">{s.nombre}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-brand font-bold mt-1">{s.especialidad}</p>
                </div>
                <a href="#" aria-label={`Instagram ${s.nombre}`} className="size-10 grid place-items-center border border-border hover:bg-brand hover:text-background transition-colors">
                  <Instagram size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}