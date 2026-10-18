import { createClient } from '@supabase/supabase-js'

// استبدل الكلام اللي بين علامات التنصيص بالبيانات بتاعتك
const supabaseUrl = 'https://gtknlwdruaylnxllgtck.supabase.co'
const supabaseAnonKey = 'sb_publishable_vSHPhPvbGjbH7tXnJ4t8_w_lbv-5_xo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)