import Link from 'next/link';

export function Nav() {
  const links = [
    ['Dashboard', '/'],
    ['Artikel', '/products'],
    ['Neuer Artikel', '/products/new'],
    ['Etiketten', '/labels'],
    ['Business', '/business-intelligence'],
    ['Content Studio', '/content-studio']
  ];

  return (
    <nav className="bg-monchic-green text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-wrap gap-3 items-center justify-between">
        <div>
          <div className="text-xl font-semibold tracking-wide">Mon Chic Vintage Paris</div>
          <div className="text-xs opacity-80">Luxury Vintage Management Suite</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="px-3 py-2 rounded-xl hover:bg-white/10 text-sm">{label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
