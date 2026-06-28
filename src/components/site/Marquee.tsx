export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="bg-brand text-background overflow-hidden border-y border-background/10 py-4">
      <div className="flex whitespace-nowrap animate-marquee font-display text-3xl uppercase">
        {doubled.map((t, i) => (
          <span key={i} className="px-6 inline-flex items-center gap-6">
            {t}
            <span className="text-background/40">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}