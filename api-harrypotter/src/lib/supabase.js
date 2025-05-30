import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yheihnpmdaevitypnahy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZWlobnBtZGFldml0eXBuYWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2Mzk0NzcsImV4cCI6MjA2NDIxNTQ3N30.h6_85_v8CEgwnjG6byFJXJcx3s0W5RMC-4Oe1e2ztY8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
