import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { SedeCard } from "@/components/site/SedeCard";
import { SEDES } from "@/data/sedes";
import { MapPin } from "lucide-react";
import mapaSedes from "@/assets/mapa_chile_etiquetas_limpio_2.png";

export const Route = createFileRoute("/sedes")({
  head: () => ({
    meta: [
      { title: "Sedes FFitness — Chillán, Los Ángeles y Temuco" },
      { name: "description", content: "Conoce las 4 sedes FFitness en Chile. Encuentra tu gimnasio más cercano." },
      { property: "og:title", content: "Sedes FFitness en Chile" },
      { property: "og:description", content: "4 sedes con equipamiento premium en el sur de Chile." },
    ],
  }),
  component: SedesLayout,
});

function SedesLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/sedes/$slug");
  if (isChild) return <Outlet />;
  return <SedesIndex />;
}

function SedesIndex() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nuestras sedes"
        title="4 sedes. Una sola comunidad."
        subtitle="Encuentra el gimnasio FFitness más cercano y comienza tu transformación con equipamiento premium y staff dedicado."
      />

      {/* MAP SECTION (visual placeholder of Chile) */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="font-display text-5xl uppercase mb-6">Presencia nacional</h2>
            <p className="text-muted-foreground mb-8 text-base">
              Desde Chillán hasta Temuco, FFitness está donde estás tú. Cada sede mantiene el mismo
              estándar de calidad, equipamiento y experiencia FFitness.
            </p>
            <ul className="space-y-4">
              {SEDES.map((s) => (
                <li key={s.slug} className="flex items-start gap-4 text-base">
                  <MapPin size={18} className="text-brand mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-lg">{s.nombre}</div>
                    <div className="text-muted-foreground text-sm">{s.direccion}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface aspect-[4/3] relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/50 pointer-events-none" />
            <img
              src={mapaSedes}
              alt="Mapa de sedes FFitness en Chile"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEDES.map((s) => (
              <SedeCard key={s.slug} sede={s} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}