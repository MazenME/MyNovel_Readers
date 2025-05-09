import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvgvtedsilxooqadnnbp.supabase.co'; // from your Supabase dashboard
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Z3Z0ZWRzaWx4b29xYWRubmJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTQ4NzEsImV4cCI6MjA2MjAzMDg3MX0.ei4KJnMbuGH8B9bxIeG3ZWIrO38IcAXm_kCH5GtUi3I'; // from Supabase > Project Settings > API

export const supabase = createClient(supabaseUrl, supabaseKey);
