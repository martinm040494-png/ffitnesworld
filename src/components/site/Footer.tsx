import { Link } from "@tanstack/react-router";
import { SEDES } from "@/data/sedes";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <span className="font-display text-4xl text-brand block mb-4">FFITNESS</span>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
            La cadena de gimnasios líder en el sur de Chile. Tecnología, comunidad y resultados reales para llevarte a tu mejor versión.
          </p>
        </div>

        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-foreground mb-5">Explorar</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/sedes" className="hover:text-brand">Sedes</Link></li>
            <li><Link to="/planes" className="hover:text-brand">Planes</Link></li>
            <li><Link to="/blog" className="hover:text-brand">Blog</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
          © {new Date().getFullYear()} FFitness Chile. Evoluciona tu fuerza.
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          Diseñado para el rendimiento
        </p>
      </div>
    </footer>
  );
}