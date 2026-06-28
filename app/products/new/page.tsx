'use client';

import { useMemo, useState } from 'react';
import { Nav } from '../../../components/Nav';
import { countries, salesChannels, designerLevels, authenticityStatuses, rarityLevels, productStatuses, conditions } from '../../../lib/constants';
import { createSku } from '../../../lib/sku';
import { isSupabaseConfigured, supabase } from '../../../lib/supabase';

export default function NewProductPage() {
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('Rock');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [condition, setCondition] = useState('Sehr gut');
  const [designerLevel, setDesignerLevel] = useState('Contemporary');
  const [authenticity, setAuthenticity] = useState('Nicht geprüft');
  const [rarity, setRarity] = useState('Normal');
  const [vintagePeriod, setVintagePeriod] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [status, setStatus] = useState('Entwurf');
  const [country, setCountry] = useState('Deutschland');
  const [channel, setChannel] = useState('Instagram');
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sku = useMemo(() => createSku(category, Date.now() % 100000), [category]);

  async function saveProduct() {
    setSaving(true);
    setMessage('');
    setErrorMessage('');

    if (!isSupabaseConfigured) {
      setErrorMessage('Supabase ist nicht konfiguriert. Bitte Vercel Environment Variables setzen.');
      setSaving(false);
      return;
    }

    const payload = {
      sku,
      brand: brand || null,
      category: category || null,
      size: size || null,
      color: color || null,
      material: material || null,
      condition: condition || null,
      status: status || 'Entwurf',
      purchase_price: purchasePrice ? Number(purchasePrice) : null,
      sale_price: salePrice ? Number(salePrice) : null,
      target_country: country || null,
      sales_channel: channel || null,
      designer_level: designerLevel || null,
      authenticity_status: authenticity || null,
      rarity_level: rarity || null,
      vintage_period: vintagePeriod || null,
      notes: notes || null
    };

    const { error } = await supabase.from('products').insert(payload);

    if (error) setErrorMessage(error.message);
    else {
      setMessage(`Artikel gespeichert: ${sku}`);
      setBrand('');
      setSize('');
      setColor('');
      setMaterial('');
      setPurchasePrice('');
      setSalePrice('');
      setVintagePeriod('');
      setNotes('');
    }

    setSaving(false);
  }

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl p-4 space-y-5">
        <section className="card">
          <h1 className="text-3xl font-semibold text-monchic-green">Neuer Artikel</h1>
          <p className="text-stone-600">Speichert echte Artikeldaten in Supabase.</p>
        </section>

        {message && <section className="card border-green-300 bg-green-50 text-green-800">{message}</section>}
        {errorMessage && <section className="card border-red-300 bg-red-50 text-red-800">Fehler: {errorMessage}</section>}

        <form className="grid lg:grid-cols-2 gap-5" onSubmit={(e) => { e.preventDefault(); saveProduct(); }}>
          <section className="card space-y-3">
            <h2 className="text-xl font-semibold">Produktdaten</h2>
            <label className="label">SKU</label><input className="input" value={sku} readOnly />
            <label className="label">Marke</label><input className="input" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="z. B. René Lezard" />
            <label className="label">Kategorie</label><input className="input" value={category} onChange={(e) => setCategory(e.target.value)} />
            <label className="label">Größe</label><input className="input" value={size} onChange={(e) => setSize(e.target.value)} />
            <label className="label">Farbe</label><input className="input" value={color} onChange={(e) => setColor(e.target.value)} />
            <label className="label">Material</label><input className="input" value={material} onChange={(e) => setMaterial(e.target.value)} />
            <label className="label">Zustand</label>
            <select className="input" value={condition} onChange={(e) => setCondition(e.target.value)}>
              {conditions.map((item) => <option key={item}>{item}</option>)}
            </select>
          </section>

          <section className="card space-y-3">
            <h2 className="text-xl font-semibold">Luxus & Vintage</h2>
            <label className="label">Designer-Level</label>
            <select className="input" value={designerLevel} onChange={(e) => setDesignerLevel(e.target.value)}>
              {designerLevels.map((item) => <option key={item}>{item}</option>)}
            </select>
            <label className="label">Echtheitsstatus</label>
            <select className="input" value={authenticity} onChange={(e) => setAuthenticity(e.target.value)}>
              {authenticityStatuses.map((item) => <option key={item}>{item}</option>)}
            </select>
            <label className="label">Seltenheitsgrad</label>
            <select className="input" value={rarity} onChange={(e) => setRarity(e.target.value)}>
              {rarityLevels.map((item) => <option key={item}>{item}</option>)}
            </select>
            <label className="label">Vintage-Periode</label><input className="input" value={vintagePeriod} onChange={(e) => setVintagePeriod(e.target.value)} />
          </section>

          <section className="card space-y-3">
            <h2 className="text-xl font-semibold">Preis & Kanal</h2>
            <label className="label">Einkaufspreis</label><input className="input" type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} />
            <label className="label">Verkaufspreis</label><input className="input" type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
            <label className="label">Status</label>
            <select className="input" value={status} onChange={(e) => setStatus(e.target.value)}>
              {productStatuses.map((item) => <option key={item}>{item}</option>)}
            </select>
            <label className="label">Zielland</label>
            <select className="input" value={country} onChange={(e) => setCountry(e.target.value)}>
              {countries.map((item) => <option key={item}>{item}</option>)}
            </select>
            <label className="label">Hauptkanal</label>
            <select className="input" value={channel} onChange={(e) => setChannel(e.target.value)}>
              {salesChannels.map((item) => <option key={item}>{item}</option>)}
            </select>
          </section>

          <section className="card space-y-3">
            <h2 className="text-xl font-semibold">Notizen</h2>
            <textarea className="input min-h-40" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Besonderheiten, Zustand, Einkauf..." />
            <button type="submit" disabled={saving} className="btn">{saving ? 'Speichere...' : 'Artikel speichern'}</button>
          </section>
        </form>
      </main>
    </>
  );
}
