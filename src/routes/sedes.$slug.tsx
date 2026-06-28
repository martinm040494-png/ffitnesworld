import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SEDES, type Sede } from "@/data/sedes";
import { Star, MapPin, Clock, Phone, MessageCircle, ArrowLeft, Instagram, Facebook, Music2 } from "lucide-react";

export const Route = createFileRoute("/sedes/$slug")({
  loader: ({ params }) => {
    const sede = SEDES.find((s) => s.slug === params.slug);
    if (!sede) throw notFound();
    return { sede };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.sede.nombre} — FFitness` },
          { name: "description", content: `${loaderData.sede.nombre}. ${loaderData.sede.tagline} Dirección: ${loaderData.sede.direccion}.` },
          { property: "og:title", content: loaderData.sede.nombre },
          { property: "og:description", content: loaderData.sede.tagline },
          { property: "og:image", content: loaderData.sede.image },
        ]
      : [],
  }),
  component: SedePage,
});

function SedePage() {
  const { sede } = Route.useLoaderData() as { sede: Sede };

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative -mt-20 h-[80vh] min-h-[600px] flex items-end overflow-hidden">
        <img
          src={sede.image}
          alt={sede.nombre}
          className="absolute inset-0 w-full h-full object-cover"
          width={800}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-16">
          <Link to="/sedes" className="inline-flex items-center gap-2 text-foreground/70 hover:text-brand text-xs uppercase tracking-widest font-bold mb-6">
            <ArrowLeft size={14} /> Todas las sedes
          </Link>
          <span className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">
            {sede.region}
          </span>
          <h1 className="font-display text-6xl md:text-9xl uppercase leading-[0.85] mt-3 mb-4">
            {sede.nombre}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl italic">
            "{sede.tagline}"
          </p>
          {sede.whatsappLink && (
            <a
              href={sede.whatsappLink}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 bg-brand text-background px-7 py-4 font-black uppercase text-xs tracking-tight hover:bg-foreground transition-colors"
            >
              <MessageCircle size={16} /> Contactar sede
            </a>
          )}
        </div>
      </section>

      {/* SCHEDULE + CONTACT */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">Horarios</span>
            <h2 className="font-display text-4xl md:text-5xl uppercase mt-3 mb-8">Cuándo entrenar</h2>
            <div className="border-t border-border">
              {sede.horario.map((h) => (
                <div key={h.label} className="flex justify-between py-4 border-b border-border">
                  <span className="font-bold uppercase text-xs tracking-widest">{h.label}</span>
                  <span className="text-muted-foreground">{h.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">Contacto</span>
            <h2 className="font-display text-4xl md:text-5xl uppercase mt-3 mb-8">Contacta con la sede</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 border border-border bg-surface">
                <MapPin size={18} className="text-brand" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Dirección</div>
                  <div className="text-sm font-medium">{sede.direccion}</div>
                </div>
              </div>
              {sede.whatsapp && (
                <a href={sede.whatsappLink} target="_blank" rel="noopener" className="flex items-center gap-3 p-4 border border-border bg-surface hover:border-brand transition-colors">
                  <MessageCircle size={18} className="text-whatsapp" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">WhatsApp</div>
                    <div className="text-sm font-medium">{sede.whatsapp}</div>
                  </div>
                </a>
              )}
              {sede.instagram && (
                <a href={`https://www.instagram.com/${sede.instagram.replace('@', '')}`} target="_blank" rel="noopener" className="flex items-center gap-3 p-4 border border-border bg-surface hover:border-brand transition-colors">
                  <Instagram size={18} className="text-brand" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Instagram</div>
                    <div className="text-sm font-medium">{sede.instagram}</div>
                  </div>
                </a>
              )}
              {sede.tiktok && (
                <a href="#" className="flex items-center gap-3 p-4 border border-border bg-surface hover:border-brand transition-colors">
                  <Music2 size={18} className="text-brand" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">TikTok</div>
                    <div className="text-sm font-medium">{sede.tiktok}</div>
                  </div>
                </a>
              )}
              {sede.facebook && (
                <a href="#" className="flex items-center gap-3 p-4 border border-border bg-surface hover:border-brand transition-colors">
                  <Facebook size={18} className="text-brand" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Facebook</div>
                    <div className="text-sm font-medium">{sede.facebook}</div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">Servicios</span>
          <h2 className="font-display text-5xl md:text-6xl uppercase mt-3 mb-12 leading-none">
            Lo que vas a encontrar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sede.servicios.map((s, i) => (
              <div key={s.titulo} className="bg-background border border-border p-6 flex flex-col">
                <span className="font-display text-7xl text-brand/40 leading-none">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl uppercase mt-4 mb-4">{s.titulo}</h3>
                <ul className="space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-brand mt-1">+</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">Testimonios</span>
          <h2 className="font-display text-5xl md:text-6xl uppercase mt-3 mb-12 leading-none">
            Lo que dicen de la sede
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {sede.testimonios.map((t, i) => (
              <div key={i} className="border border-border bg-surface p-8">
                <div className="flex gap-0.5 text-brand mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed italic mb-6">"{t.texto}"</p>
                <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  — {t.nombre}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAFF */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">Staff</span>
          <h2 className="font-display text-5xl md:text-6xl uppercase mt-3 mb-12 leading-none">
            Nuestro equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sede.staff.map((p, i) => (
              <div key={i} className="bg-background border border-border overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-widest text-brand font-bold mb-2">
                    {p.rol}
                  </div>
                  <h3 className="font-display text-xl uppercase">{p.nombre}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-background py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-none mb-6">
            Tu próximo entrenamiento comienza aquí.
          </h2>
          <a
            href={sede.whatsappLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-background text-brand px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-foreground transition-colors"
          >
            <MessageCircle size={16} /> Hablar con {sede.shortName}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}