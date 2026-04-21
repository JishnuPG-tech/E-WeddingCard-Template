import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import {
  Users, CheckCircle, XCircle, Lock, Download,
  Link2, Copy, Check, Smartphone, UtensilsCrossed,
} from 'lucide-react';

// Feature #2: Admin password — change in .env as VITE_ADMIN_PASSWORD
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'Jishnu2005';

function exportCSV(rsvps) {
  const headers = ['Name', 'Attending', 'Guest Count', 'Meal Preference', 'Message', 'Submitted'];
  const rows = rsvps.map(r => [
    r.name || '',
    r.attending ? 'Yes' : 'No',
    r.guest_count || 1,
    r.meal_preference || '-',
    (r.message || '').replace(/,/g, ';'),
    new Date(r.created_at).toLocaleString('en-IN')
  ]);
  const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${weddingData.couple.groom}_${weddingData.couple.bride}_RSVP.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// Feature #4: WhatsApp link generator
function LinkGenerator() {
  const [name, setName] = useState('');
  const [generated, setGenerated] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (!name.trim()) return;
    const base = window.location.origin + window.location.pathname;
    // Use + instead of %20 for spaces in guest name
    const encoded = name.trim().split(' ').map(encodeURIComponent).join('+');
    const link = `${base}?guest=${encoded}`;
    setGenerated(link);
    setCopied(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendWhatsapp = () => {
    const text = `${weddingData.strings.whatsappShareText}\n\nOpen your personal invite: ${generated}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="mb-6 p-4 bg-white/60 rounded-xl border border-[rgba(107,142,107,0.2)]">
      <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-[#4A6A4A] mb-3 font-semibold flex items-center gap-1.5">
        <Link2 size={12} strokeWidth={1.5} />
        Invite Link Generator
      </p>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Guest name..."
          className="flex-1 px-3 py-2 text-sm rounded-lg border border-[rgba(107,142,107,0.25)] bg-white/70 text-[#2C2C2C] font-inter outline-none focus:border-[#6B8E6B]"
          onKeyDown={e => e.key === 'Enter' && generate()}
        />
        <button onClick={generate} className="btn-primary px-4 py-2 text-xs">
          Generate
        </button>
      </div>
      {generated && (
        <div className="p-3 bg-[#F8F7F4] rounded-lg border border-[rgba(107,142,107,0.15)]">
          <p className="font-inter text-[9px] text-[#7A7060] mb-2 break-all">{generated}</p>
          <div className="flex gap-2">
            <button
              onClick={copy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6B8E6B]/10 text-[#4A6A4A] text-[10px] font-inter border border-[#6B8E6B]/20 hover:bg-[#6B8E6B]/20 transition"
            >
              {copied ? <Check size={10} /> : <Copy size={10} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={sendWhatsapp}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#128C7E] text-[10px] font-inter border border-[#25D366]/20 hover:bg-[#25D366]/20 transition"
            >
              <Smartphone size={10} />
              Send WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [rsvps, setRsvps] = useState(null); // null = loading, [] = empty
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');

  const loading = authed && rsvps === null;

  const login = () => {
    if (pw === ADMIN_PASSWORD) setAuthed(true);
    else setError('Wrong password');
  };

  useEffect(() => {
    if (!authed) return;
    supabase.from('rsvps').select('*').order('created_at', { ascending: false })
      .then(({ data, error: e }) => {
        setRsvps(!e ? (data || []) : []);
      });
  }, [authed]);

  const list = rsvps || [];
  const filtered = filter === 'all' ? list
    : filter === 'yes' ? list.filter(r => r.attending)
    : list.filter(r => !r.attending);

  const yesCount = list.filter(r => r.attending).length;
  const noCount  = list.filter(r => !r.attending).length;
  const totalGuests = list.filter(r => r.attending).reduce((s, r) => s + (r.guest_count || 1), 0);

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F7F4] px-6">
        <div className="glass-card rounded-2xl p-8 w-full max-w-sm text-center">
          <Lock size={28} className="mx-auto mb-4 text-[#6B8E6B]" strokeWidth={1.2} />
          <h2 className="font-cormorant text-2xl font-semibold text-[#2C2C2C] mb-6">Admin Access</h2>
          <input
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
            placeholder="Enter password"
            className="w-full px-4 py-3 rounded-xl border border-[rgba(107,142,107,0.3)] bg-white/70 text-[#2C2C2C] font-inter text-sm outline-none mb-3"
          />
          {error && <p className="text-red-400 text-xs mb-3 font-inter">{error}</p>}
          <button onClick={login} className="btn-primary w-full">Enter Dashboard</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4] px-4 py-8">
      <div className="max-w-sm mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-cormorant italic text-3xl text-[#2C2C2C] text-center mb-2">Admin Dashboard</h1>
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-[#6B8E6B] text-center mb-6">
            {weddingData.couple.groom} &amp; {weddingData.couple.bride} · {weddingData.dates.headerDisplay}
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { icon: <Users size={18} strokeWidth={1.5} />,       label: 'Total RSVPs',  value: list.length, color: '#6B8E6B' },
              { icon: <CheckCircle size={18} strokeWidth={1.5} />, label: 'Attending',    value: yesCount,    color: '#4A6A4A' },
              { icon: <XCircle size={18} strokeWidth={1.5} />,     label: 'Not Coming',   value: noCount,     color: '#B8913A' },
            ].map((s, i) => (
              <div key={i} className="glass-card rounded-xl p-3 text-center">
                <div style={{ color: s.color }} className="flex justify-center mb-1">{s.icon}</div>
                <p className="font-cormorant text-2xl font-bold text-[#2C2C2C]">{s.value}</p>
                <p className="font-inter text-[8px] uppercase tracking-wider text-[#7A7060] opacity-80">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Feature #1: Total headcount */}
          <div className="glass-card rounded-xl p-4 mb-6 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <UtensilsCrossed size={13} className="text-[#6B8E6B]" strokeWidth={1.5} />
              <p className="font-inter text-[9px] uppercase tracking-[0.3em] text-[#6B8E6B]">Total Guests Attending</p>
            </div>
            <p className="font-cormorant italic text-4xl font-semibold text-[#2C2C2C]">{totalGuests}</p>
            <p className="font-inter text-[9px] text-[#7A7060] mt-1 opacity-70">Including +1s and families</p>
          </div>

          {/* Feature #4: Link generator */}
          <LinkGenerator />

          {/* Filter + CSV export */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {['all', 'yes', 'no'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-full text-[9px] font-inter uppercase tracking-wider transition ${
                    filter === f
                      ? 'bg-[#6B8E6B] text-white'
                      : 'bg-white/60 text-[#7A7060] border border-[rgba(107,142,107,0.2)]'
                  }`}
                >
                  {f === 'all' ? 'All' : f === 'yes' ? 'Attending' : 'Not Coming'}
                </button>
              ))}
            </div>
            <button
              onClick={() => exportCSV(list)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8913A]/10 text-[#B8913A] text-[9px] font-inter border border-[#B8913A]/20 hover:bg-[#B8913A]/20 transition font-semibold"
            >
              <Download size={11} /> CSV
            </button>
          </div>

          {/* RSVP table */}
          {loading ? (
            <div className="space-y-2">
              {[1,2,3].map(i => <div key={i} className="h-10 skeleton rounded-lg" />)}
            </div>
          ) : (
            <div className="glass-card rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[rgba(107,142,107,0.12)] bg-[#f4f7f4]">
                    {['Name', 'Attending', 'Guests', 'Meal', 'Message', 'Date'].map(h => (
                      <th key={h} className="px-3 py-2.5 font-inter text-[8px] uppercase tracking-[0.2em] text-[#6B8E6B] font-semibold whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r, i) => (
                    <motion.tr key={r.id || i}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                      className="border-b border-[rgba(107,142,107,0.08)] hover:bg-[#f9fbf9] transition-colors"
                    >
                      <td className="px-3 py-2.5 font-cormorant text-[13px] font-semibold text-[#2C2C2C] whitespace-nowrap">{r.name}</td>
                      <td className="px-3 py-2.5">
                        <span className={`inline-flex items-center gap-1 text-[8px] font-inter uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                          r.attending ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-500'
                        }`}>
                          {r.attending ? <><CheckCircle size={8}/> Yes</> : <><XCircle size={8}/> No</>}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 font-inter text-[11px] text-[#2C2C2C] text-center">{r.attending ? (r.guest_count || 1) : '-'}</td>
                      <td className="px-3 py-2.5 font-inter text-[10px] text-[#7A7060] whitespace-nowrap">{r.meal_preference || '-'}</td>
                      <td className="px-3 py-2.5 font-inter text-[10px] text-[#7A7060] max-w-[120px] truncate italic">{r.message || '-'}</td>
                      <td className="px-3 py-2.5 font-inter text-[9px] text-[#7A7060] opacity-60 whitespace-nowrap">{new Date(r.created_at).toLocaleDateString('en-IN')}</td>
                    </motion.tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr><td colSpan={6} className="text-center font-cormorant italic text-[#7A7060] opacity-70 py-8">No RSVPs yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
