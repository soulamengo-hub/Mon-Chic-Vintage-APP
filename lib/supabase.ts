import { createClient } from '@supabase/supabase-js';

const realSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const realSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  realSupabaseUrl && realSupabaseAnonKey
);

const supabaseUrl =
  realSupabaseUrl || 'https://placeholder.supabase.co';

const supabaseAnonKey =
  realSupabaseAnonKey || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
