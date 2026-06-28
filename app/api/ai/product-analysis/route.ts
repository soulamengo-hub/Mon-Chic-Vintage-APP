import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    status: 'pending',
    message: 'KI-Bildanalyse folgt nach OpenAI API-Key Integration.'
  });
}
