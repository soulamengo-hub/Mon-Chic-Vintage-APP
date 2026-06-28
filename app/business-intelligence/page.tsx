import { Nav } from '../../components/Nav';

export default function BIPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl p-4 space-y-5">
        <section className="card">
          <h1 className="text-3xl font-semibold text-monchic-green">Business Intelligence</h1>
          <p className="text-stone-600">Interne Daten. Kunden sehen diese Werte nie.</p>
        </section>
      </main>
    </>
  );
}
