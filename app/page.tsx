import Link from 'next/link';
import { Nav } from '../components/Nav';

export default function Dashboard() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl p-4 space-y-6">
        <section className="card">
          <h1 className="text-3xl font-semibold text-monchic-green">Dashboard</h1>
          <p className="text-stone-600 mt-2">Mon Chic Vintage Paris – Arbeitsversion mit Supabase-Speicherung.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <Link className="card hover:border-monchic-gold" href="/products/new">
            <h2 className="text-xl font-semibold">Neuen Artikel erfassen</h2>
            <p className="text-stone-600">Produktdaten eingeben und speichern.</p>
          </Link>
          <Link className="card hover:border-monchic-gold" href="/products">
            <h2 className="text-xl font-semibold">Artikel anzeigen</h2>
            <p className="text-stone-600">Gespeicherte Artikel ansehen.</p>
          </Link>
          <Link className="card hover:border-monchic-gold" href="/labels">
            <h2 className="text-xl font-semibold">Etiketten</h2>
            <p className="text-stone-600">Druckvorlage 50 × 40 mm.</p>
          </Link>
        </section>
      </main>
    </>
  );
}
