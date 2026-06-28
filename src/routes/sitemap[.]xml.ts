import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SEDES } from "@/data/sedes";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/sedes", priority: "0.9" },
          { path: "/planes", priority: "0.9" },
          { path: "/clases", priority: "0.7" },
          { path: "/staff", priority: "0.6" },
          { path: "/testimonios", priority: "0.6" },
          { path: "/blog", priority: "0.6" },
          { path: "/contacto", priority: "0.8" },
          ...SEDES.map((s) => ({ path: `/sedes/${s.slug}`, priority: "0.8" })),
        ];
        const urls = entries.map(
          (e) =>
            `  <url><loc>${BASE_URL}${e.path}</loc><priority>${e.priority}</priority></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});