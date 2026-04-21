// Feature #15: Open Analytics tracking (Supabase-based)
import { useEffect } from 'react';
import { supabase } from '../config/supabase';

export function trackOpen(guestName) {
  try {
    supabase.from('analytics').insert({
      event: 'card_opened',
      guest_name: guestName || null,
      user_agent: navigator.userAgent,
      opened_at: new Date().toISOString(),
      referrer: document.referrer || null
    }).then(() => {});
  } catch (_) { /* silent */ }
}

export function trackSection(sectionName) {
  try {
    supabase.from('analytics').insert({
      event: 'section_viewed',
      section: sectionName,
      visited_at: new Date().toISOString()
    }).then(() => {});
  } catch (_) { /* silent */ }
}

// Hook: track which section is currently in view
export function useSectionTracker(sectionName) {
  useEffect(() => {
    const timer = setTimeout(() => trackSection(sectionName), 2000); // only track if stayed 2s
    return () => clearTimeout(timer);
  }, [sectionName]);
}
