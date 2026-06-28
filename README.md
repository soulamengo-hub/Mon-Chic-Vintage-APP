# Mon Chic Vintage Paris

Saubere GitHub-Version.

Root darf nur diese Elemente enthalten:

- app/
- components/
- lib/
- supabase/
- .env.example
- .gitignore
- next-env.d.ts
- next.config.js
- package.json
- postcss.config.js
- README.md
- tailwind.config.ts
- tsconfig.json

Nicht im Root erlaubt:

- page.tsx
- layout.tsx
- Nav.tsx
- constants.ts
- sku.ts
- supabase.ts
- schema.sql

## Supabase

In Supabase SQL Editor ausführen:

supabase/schema.sql

## Vercel Environment Variables

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY
