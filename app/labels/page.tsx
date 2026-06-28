import { Nav } from '../../components/Nav';

export default function LabelsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl p-4 space-y-5">
        <section className="card">
          <h1 className="text-3xl font-semibold text-monchic-green">Etiketten</h1>
          <p className="text-stone-600">Druckvorlage 50 × 40 mm.</p>
        </section>
        <section className="bg-white p-4 rounded-2xl border overflow-auto">
          <div className="grid grid-cols-4 gap-0 w-[200mm]">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="w-[50mm] h-[40mm] border border-stone-400 p-2 text-xs flex flex-col justify-between">
                <div className="text-center font-semibold text-monchic-green">MON CHIC</div>
                <div><div className="font-bold">ESCADA</div><div>Gr. 40</div><div className="font-bold mt-1">59 €</div></div>
                <div className="text-[9px] text-right">MCP-RO-{String(i + 1).padStart(5, '0')}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
