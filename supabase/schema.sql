create extension if not exists "uuid-ossp";

create table if not exists products (
  id uuid primary key default uuid_generate_v4(),
  sku text unique not null,
  brand text,
  category text,
  size text,
  color text,
  material text,
  condition text,
  status text default 'Entwurf',
  purchase_price numeric(10,2),
  sale_price numeric(10,2),
  target_country text,
  sales_channel text,
  designer_level text,
  authenticity_status text,
  rarity_level text,
  vintage_period text,
  notes text,
  created_at timestamptz default now()
);

alter table products enable row level security;

drop policy if exists "products_select_public" on products;
create policy "products_select_public" on products for select using (true);

drop policy if exists "products_insert_public" on products;
create policy "products_insert_public" on products for insert with check (true);

drop policy if exists "products_update_public" on products;
create policy "products_update_public" on products for update using (true) with check (true);

grant usage on schema public to anon;
grant select, insert, update on table products to anon;
