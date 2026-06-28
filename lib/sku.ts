const prefixes: Record<string, string> = {
  Kleid: 'KL',
  Bluse: 'BL',
  Hose: 'HO',
  Rock: 'RO',
  Jacke: 'JA',
  Mantel: 'MA',
  Tasche: 'TA',
  Schuhe: 'SH',
  Accessoire: 'AC'
};

export function createSku(category: string, seed?: number) {
  const prefix = prefixes[category] || 'AR';
  const number = seed ?? Math.floor(Date.now() / 1000) % 100000;
  return `MCP-${prefix}-${String(number).padStart(5, '0')}`;
}
