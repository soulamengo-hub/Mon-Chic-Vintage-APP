'use client';

import { useState } from 'react';
import { Nav } from '../../components/Nav';
import { salesChannels } from '../../lib/constants';

export default function ContentStudioPage() {
  const [channel, setChannel] = useState('Instagram');
  const [text, setText] = useState('');

  function createDraft() {
    setText(`Mon Chic Vintage Paris – ${channel}\n\nElegantes Vintage-Einzelstück mit französischem Flair.`);
  }

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl p-4 space-y-5">
        <section className="card">
          <h1 className="text-3xl font-semibold text-monchic-green">Content Marketing Studio</h1>
          <p className="text-stone-600">Content-Entwürfe für Social Media.</p>
        </section>
        <section className="card space-y-3">
          <label className="label">Kanal</label>
          <select className="input" value={channel} onChange={(e) => setChannel(e.target.value)}>
            {salesChannels.filter((item) => item !== 'Eigener Shop').map((item) => <option key={item}>{item}</option>)}
          </select>
          <button type="button" className="btn" onClick={createDraft}>Content-Entwurf erzeugen</button>
          <textarea className="input min-h-40" value={text} onChange={(e) => setText(e.target.value)} />
        </section>
      </main>
    </>
  );
}
