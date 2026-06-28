'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Nav } from '../../components/Nav';
import { isSupabaseConfigured, supabase } from '../../lib/supabase';
import type { Product } from '../../lib/types';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadProducts() {
    setLoading(true);
    setError('');

    if (!isSupabaseConfigured) {
      setError('Supabase ist nicht konfiguriert. Vercel Environment Variables prüfen.');
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });

    if (error) setError(error.message);
    else setProducts((data || []) as Product[]);

    setLoading(false);
  }

  useEffect(() => { loadProducts(); }, []);

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl p-4 space-y-5">
        <section className="card flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-monchic-green">Artikel</h1>
            <p className="text-stone-600">Gespeicherte Artikel aus Supabase.</p>
          </div>
          <Link className="btn" href="/products/new">Neuen Artikel erfassen</Link>
        </section>

        {error && <section className="card border-red-300 bg-red-50 text-red-800">Fehler: {error}</section>}

        <section className="card">
          {loading && <p>Lade Artikel...</p>}
          {!loading && !error && products.length === 0 && <p>Noch keine Artikel gespeichert.</p>}

          <div className="space-y-3">
            {products.map((p) => (
              <div key={p.id} className="border border-stone-200 rounded-xl p-3 flex flex-wrap justify-between gap-3">
                <div>
                  <div className="font-semibold">{p.brand || 'Vintage'} – {p.category || 'Artikel'}</div>
                  <div className="text-sm text-stone-600">SKU: {p.sku} · Größe: {p.size || '-'}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{p.sale_price ? `${p.sale_price} €` : '-'}</div>
                  <div className="text-sm text-stone-600">{p.status || 'Entwurf'}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
