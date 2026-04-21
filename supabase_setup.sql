-- ============================================================
-- E-Wedding Card Template - Supabase Setup
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. RSVP Table
-- Stores guest RSVP responses
create table if not exists public.rsvps (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null,
  attending     boolean not null default true,
  guest_count   int not null default 1 check (guest_count between 1 and 8),
  meal_preference text,
  message       text
);

-- Enable Row Level Security
alter table public.rsvps enable row level security;

-- Allow anyone (public) to INSERT (submit RSVP)
create policy "Anyone can submit RSVP"
  on public.rsvps for insert
  to anon
  with check (true);

-- Allow anyone to SELECT (for live guest count display)
create policy "Anyone can read RSVPs"
  on public.rsvps for select
  to anon
  using (true);


-- 2. Analytics Table
-- Stores card open & section view events
create table if not exists public.analytics (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  event       text not null,          -- 'card_opened' | 'section_viewed'
  guest_name  text,
  user_agent  text,
  opened_at   timestamptz,
  referrer    text,
  section     text,
  visited_at  timestamptz
);

-- Enable Row Level Security
alter table public.analytics enable row level security;

-- Allow anyone (public) to INSERT analytics events
create policy "Anyone can insert analytics"
  on public.analytics for insert
  to anon
  with check (true);

-- Only service_role can read analytics (admin only)
create policy "Service role can read analytics"
  on public.analytics for select
  to service_role
  using (true);
