import { Link } from "@tanstack/react-router";
import { Star, MapPin } from "lucide-react";
import type { Sede } from "@/data/sedes";

export function SedeCard({ sede }: { sede: Sede }) {
  return (
    <Link
      to="/sedes/$slug"
      params={{ slug: sede.slug }}
      className="group relative overflow-hidden bg-surface border border-border flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={sede.image}
          alt={sede.nombre}
          loading="lazy"
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute top-4 right-4 bg-brand text-background px-2 py-1 text-[10px] font-black flex items-center gap-1">
          <Star size={10} fill="currentColor" /> {sede.rating}
        </div>
      </div>
      <div className="p-6 flex flex-col gap-3">
        <span className="text-brand text-[10px] font-black uppercase tracking-[0.25em]">
          {sede.region}
        </span>
        <h3 className="font-display text-3xl uppercase leading-none">{sede.nombre}</h3>
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <MapPin size={12} className="mt-0.5 shrink-0" />
          <span>{sede.direccion}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          {sede.horario[0]?.label}: <span className="text-foreground">{sede.horario[0]?.value}</span>
        </div>
        <div className="mt-4 inline-flex items-center justify-center w-full py-3 bg-foreground/5 group-hover:bg-brand group-hover:text-background text-[10px] font-black uppercase tracking-[0.25em] transition-colors">
          Ver sede →
        </div>
      </div>
    </Link>
  );
}