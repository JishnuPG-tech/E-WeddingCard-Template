import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Confetti from 'react-confetti';
import { supabase } from '../config/supabase';
import { weddingData } from '../config/weddingData';

async function submitRSVP({ name, attending, peopleCount }) {
  if (supabase) {
    const { error } = await supabase.from('rsvps').insert([
      {
        name,
        attending,
        people_count: attending ? peopleCount : 0,
      },
    ]);
    if (error) throw error;
  } else {
    await new Promise((res) => setTimeout(res, 800));
  }
}

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(null);
  const [peopleCount, setPeopleCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = name.trim();
    
    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }

    if (trimmedName.length < 3) {
      setError('Please enter your full name.');
      return;
    }

    if (attending === null) {
      setError('Please select whether you will attend.');
      return;
    }

    setError('');
    setLoading(true);
    try {
      await submitRSVP({ name: trimmedName, attending, peopleCount });
      setSubmitted(true);
      if (attending) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 6000);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const successTitle = attending
    ? "We can't wait to see you!"
    : "We'll miss you!";

  return (
    <section className="scroll-section flex items-center justify-center bg-transparent px-6 py-12 relative overflow-hidden">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            colors={['#B8913A', '#D4AF37', '#7A8C99', '#FCFBF9', '#E7D9C1']}
            numberOfPieces={180}
            recycle={false}
            gravity={0.25}
          />
        </div>
      )}

      <div className="w-full max-w-sm mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p className="font-inter text-[10px] uppercase tracking-[0.4em] text-[var(--gold)] mb-3 opacity-80">
            Kindly Reply
          </p>
          <h2 className="font-playfair italic text-3xl font-medium text-[var(--text-dark)] drop-shadow-sm">RSVP</h2>
          <p className="font-cormorant italic text-base text-[var(--text-muted)] mt-2">
            Please respond by the {weddingData.dates.rsvpDeadlineSummary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="glass-card floral-border rounded-[28px] px-7 py-8 relative"
        >
          <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-[var(--gold)] border-opacity-20 rounded-tl-[20px]" />
          <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-[var(--gold)] border-opacity-20 rounded-tr-[20px]" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-[var(--gold)] border-opacity-20 rounded-bl-[20px]" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-[var(--gold)] border-opacity-20 rounded-br-[20px]" />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-5">{attending ? '✨' : '✉️'}</div>
                <h3 className="font-playfair italic font-medium text-2xl text-[var(--text-dark)] mb-3">
                  {successTitle}
                </h3>
                <p className="font-inter text-[13px] text-[var(--text-muted)] leading-relaxed">
                  {attending
                    ? `Thank you, ${name}! Your attendance is confirmed. We look forward to celebrating with you.`
                    : 'We understand and appreciate you letting us know. You will be missed.'}
                </p>
                <div className="mt-8 pt-5 border-t border-[var(--gold)]/10">
                  <p className="font-cormorant italic text-[15px] text-[var(--gold)] font-medium">
                    With Grace, {weddingData.couple.groom} {weddingData.couple.ampersand} {weddingData.couple.bride}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <label className="font-inter text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] block mb-2.5 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (error.includes('name')) setError('');
                    }}
                    className="wedding-input"
                    maxLength={50}
                  />
                </div>

                <div>
                  <label className="font-inter text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] block mb-2.5 ml-1">
                    Will you attend?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: true, label: 'Accepts', icon: <Check size={24} strokeWidth={1.5} /> },
                      { value: false, label: 'Declines', icon: <X size={24} strokeWidth={1.5} /> },
                    ].map((opt) => {
                      const isSelected = attending === opt.value;
                      const activeColor = opt.value ? 'var(--gold)' : '#A67C2E';
                      
                      return (
                        <button
                          key={String(opt.value)}
                          type="button"
                          onClick={() => setAttending(opt.value)}
                          className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl border transition-all duration-300 relative overflow-hidden"
                          style={{
                            background: isSelected ? activeColor : 'white',
                            borderColor: isSelected ? activeColor : 'var(--gold-pale)',
                            color: isSelected ? 'white' : 'var(--text-muted)',
                            transform: isSelected ? 'scale(0.98)' : 'scale(1)',
                            boxShadow: isSelected ? `0 4px 15px rgba(0,0,0,0.1)` : 'none'
                          }}
                        >
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                            style={{ 
                              background: isSelected ? 'rgba(255,255,255,0.2)' : 'transparent',
                              color: isSelected ? 'white' : 'var(--gold)',
                              border: isSelected ? 'none' : '1px solid var(--gold-pale)'
                            }}
                          >
                            {opt.icon}
                          </div>
                          <span className={`font-inter text-[10px] uppercase tracking-widest ${isSelected ? 'font-medium' : 'font-normal'}`}>
                            {opt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence>
                  {attending === true && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <label className="font-inter text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] block mb-3 ml-1">
                        Number of Guests
                      </label>
                      <div className="flex items-center gap-5 ml-1">
                        <button
                          type="button"
                          onClick={() => setPeopleCount((c) => Math.max(1, c - 1))}
                          className="w-10 h-10 rounded-full border border-[var(--gold-pale)] bg-white text-[var(--gold)] text-xl font-light flex items-center justify-center hover:bg-[var(--pearl-dark)] transition-colors"
                        >
                          -
                        </button>
                        <span className="font-playfair italic text-3xl text-[var(--text-dark)] min-w-[2rem] text-center">
                          {peopleCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => setPeopleCount((c) => Math.min(5, c + 1))}
                          className="w-10 h-10 rounded-full border border-[var(--gold-pale)] bg-white text-[var(--gold)] text-xl font-light flex items-center justify-center hover:bg-[var(--pearl-dark)] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {error && (
                  <p className="font-inter text-xs text-red-500 text-center font-medium bg-red-50 py-2 rounded-lg">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full mt-2"
                  style={{ opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? 'Sending...' : 'Confirm RSVP'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer (Hindu Parity) */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={inView ? { opacity: 1 } : {}}
           transition={{ delay: 0.5, duration: 0.6 }}
           className="mt-10 flex flex-col items-center justify-center w-full"
        >
          <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-30 mb-5" />
          <p className="font-cormorant italic text-[15px] text-[var(--text-muted)] mb-4 text-center">
            With Love, Gabriel & Evangeline
          </p>
          <a 
            href="mailto:jishnupg2005@gmail.com"
            className="group flex flex-col items-center gap-1.5 px-6 py-4 rounded-2xl border border-transparent hover:border-[var(--gold)]/10 hover:bg-white/40 transition-all duration-500"
            style={{ textDecoration: 'none' }}
          >
            <p className="font-inter text-[9.5px] uppercase tracking-[0.3em] text-[var(--text-muted)] opacity-70">
              Crafted by <span className="font-semibold text-[var(--gold)] tracking-[0.1em] group-hover:text-[#9A7A30] transition-colors">Jishnu P G</span>
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
