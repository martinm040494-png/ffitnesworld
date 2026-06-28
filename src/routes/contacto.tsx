import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Instagram, Facebook, Music2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { SEDES, WHATSAPP_GENERAL } from "@/data/sedes";
import { toast } from "sonner";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — FFitness" },
      { name: "description", content: "Contáctanos por WhatsApp o completa el formulario. Estamos en Chillán, Los Ángeles y Temuco." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos."
        subtitle="Cuéntanos qué buscas y te asesoramos para encontrar el plan y la sede ideal para ti."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div>
            <h2 className="font-display text-4xl uppercase mb-6">Conecta con nosotros</h2>
            <p className="text-muted-foreground mb-8">
              La forma más rápida de respuesta es por WhatsApp. También puedes encontrarnos en nuestras redes sociales o
              completar el formulario.
            </p>

            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between w-full bg-whatsapp text-white p-6 mb-6 hover:opacity-90 transition-opacity"
            >
              <div>
                <div className="text-[10px] uppercase tracking-widest font-black opacity-80">WhatsApp directo</div>
                <div className="font-display text-3xl uppercase mt-1">Habla con FFitness</div>
              </div>
              <MessageCircle size={32} />
            </a>

            <div className="flex gap-3 mb-10">
              <a href="#" className="flex-1 border border-border bg-surface p-4 hover:border-brand transition-colors flex items-center gap-3">
                <Instagram size={18} className="text-brand" />
                <span className="text-xs uppercase tracking-widest font-bold">Instagram</span>
              </a>
              <a href="#" className="flex-1 border border-border bg-surface p-4 hover:border-brand transition-colors flex items-center gap-3">
                <Music2 size={18} className="text-brand" />
                <span className="text-xs uppercase tracking-widest font-bold">TikTok</span>
              </a>
              <a href="#" className="flex-1 border border-border bg-surface p-4 hover:border-brand transition-colors flex items-center gap-3">
                <Facebook size={18} className="text-brand" />
                <span className="text-xs uppercase tracking-widest font-bold">Facebook</span>
              </a>
            </div>

            <div className="space-y-3">
              {SEDES.map((s) => (
                <div key={s.slug} className="border-t border-border pt-3">
                  <div className="font-bold text-sm">{s.nombre}</div>
                  <div className="text-xs text-muted-foreground">{s.direccion}</div>
                  {s.whatsapp && <div className="text-xs text-brand mt-1">{s.whatsapp}</div>}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Mensaje enviado", { description: "Te contactaremos lo antes posible." });
              (e.target as HTMLFormElement).reset();
            }}
            className="bg-surface border border-border p-8 md:p-10 space-y-5"
          >
            <h3 className="font-display text-3xl uppercase mb-4">Envíanos un mensaje</h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nombre" name="nombre" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Teléfono" name="telefono" type="tel" />
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-muted-foreground">Sede</label>
                <select
                  name="sede"
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-brand focus:outline-none"
                  required
                >
                  <option value="">Selecciona una sede</option>
                  {SEDES.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.nombre}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-muted-foreground">Mensaje</label>
              <textarea
                name="mensaje"
                rows={5}
                required
                className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-brand focus:outline-none resize-none"
                placeholder="Cuéntanos qué buscas..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand text-background py-4 font-black uppercase text-xs tracking-widest hover:bg-foreground transition-colors"
            >
              {sent ? "Mensaje enviado ✓" : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-muted-foreground">
        {label}{required && " *"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-brand focus:outline-none"
      />
    </div>
  );
}