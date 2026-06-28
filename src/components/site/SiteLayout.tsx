import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-brand" />
            <span className="text-brand font-bold tracking-[0.3em] uppercase text-[10px]">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}