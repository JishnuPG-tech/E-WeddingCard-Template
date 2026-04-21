// Feature #16: Dress Code Section + Feature #17: Gifts/Registry
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { weddingData } from '../config/weddingData';

const { dressCode, gifts } = weddingData;

// ─── Dress Code ───────────────────────────────────────────────────────────────
function DressCodeCard({ inView }) {
  if (!dressCode?.enabled) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="glass-card rounded-2xl px-6 py-6 mb-4 text-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8913A]/40 to-transparent" />
      <p className="font-inter text-[9px] uppercase tracking-[0.4em] text-[#B8913A] mb-2 opacity-80">
        👗 {dressCode.label}
      </p>
      <p className="font-cormorant italic text-xl font-semibold text-[#2C2C2C] mb-2">
        {dressCode.theme}
      </p>
      <p className="font-inter text-xs text-[#7A7060] leading-relaxed opacity-80 max-w-[250px] mx-auto">
        {dressCode.note}
      </p>
    </motion.div>
  );
}

// ─── Gifts / Registry ─────────────────────────────────────────────────────────
function GiftsCard({ inView }) {
  if (!gifts?.enabled) return null;

  const copyUPI = () => {
    navigator.clipboard.writeText(gifts.upi).catch(() => {});
    if (navigator.vibrate) navigator.vibrate(40); // Feature #8: Haptic
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-card rounded-2xl px-6 py-6 text-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8913A]/40 to-transparent" />
      <p className="font-inter text-[9px] uppercase tracking-[0.4em] text-[#B8913A] mb-2 opacity-80">
        🎁 Blessings & Gifts
      </p>
      <p className="font-cormorant italic text-sm text-[#7A7060] mb-4 leading-relaxed max-w-[240px] mx-auto">
        {gifts.message}
      </p>

      {/* UPI copy button */}
      <button
        onClick={copyUPI}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#B8913A]/30 bg-[#FAF8F2] text-[11px] font-inter tracking-wider text-[#B8913A] hover:bg-[#F2EBD9] transition-colors active:scale-95"
        style={{ fontWeight: 600 }}
      >
        <span>📋</span>
        <span>{gifts.upi}</span>
      </button>
      <p className="font-inter text-[9px] text-[#7A7060] mt-3 opacity-60">{gifts.bankNote}</p>
    </motion.div>
  );
}

// ─── Combined Section ─────────────────────────────────────────────────────────
export default function ExtrasSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="scroll-section flex items-center justify-center bg-transparent px-5 py-10">
      <div className="w-full max-w-sm mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-inter text-[10px] uppercase tracking-[0.4em] text-[#B8913A] mb-2 opacity-80">
            Good to Know
          </p>
          <h2 className="font-cormorant italic text-3xl font-medium text-[#2C2C2C]">Details</h2>
          <div className="flex items-center gap-3 justify-center mt-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#B8913A]/40" />
            <span className="text-[#B8913A] text-xs opacity-60">✦</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#B8913A]/40" />
          </div>
        </motion.div>
        <DressCodeCard inView={inView} />
        <GiftsCard inView={inView} />
      </div>
    </section>
  );
}
