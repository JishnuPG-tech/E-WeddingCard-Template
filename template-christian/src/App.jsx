import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Envelope from './components/Envelope';
import HeroCover from './components/HeroCover';
import InsideDetails from './components/InsideDetails';
import VenueSection from './components/VenueSection';
import RSVPForm from './components/RSVPForm';
import MusicWidget from './components/MusicWidget';
import AdminDashboard from './components/AdminDashboard';

// Divine Light Beam (mimics cathedral lighting)
const DivineLightBeam = ({ className, style }) => (
  <motion.div
    className={`fixed pointer-events-none z-0 ${className}`}
    style={{
      ...style,
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(184,145,58,0.03) 50%, transparent 100%)',
      filter: 'blur(40px)',
      width: '120px',
      height: '600px',
      transform: 'rotate(-25deg)',
    }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      scaleX: [0.9, 1.1, 0.9]
    }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
  />
);

// Sacred Dust Motes (ethereal floating particles)
const SacredDustMote = ({ style }) => (
  <motion.div
    className="fixed pointer-events-none z-0 brightness-150"
    style={{
      ...style,
      width: '3px',
      height: '3px',
      borderRadius: '50%',
      backgroundColor: 'var(--gold)',
      boxShadow: '0 0 8px var(--gold)',
    }}
    animate={{
      y: [0, -400],
      x: [0, 20],
      opacity: [0, 0.8, 0],
    }}
    transition={{
      duration: 12 + Math.random() * 8,
      repeat: Infinity,
      ease: 'linear',
      delay: Math.random() * 10,
    }}
  />
);

// Olive Leaf (Thematic peaceful replacement for petals)
function OliveLeaf({ style, className }) {
  return (
    <div className={`fixed pointer-events-none z-0 ${className}`} style={style}>
      <svg viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <path
          d="M20 75 C20 75 2 50 2 30 C2 10 15 2 20 2 C25 2 38 10 38 30 C38 50 20 75 20 75Z"
          fill="var(--gold)"
          fillOpacity="0.08"
        />
        <path d="M20 75 L20 2" stroke="var(--gold)" strokeWidth="0.4" strokeOpacity="0.12"/>
      </svg>
    </div>
  );
}

export default function App() {
  // Simple manual routing for the admin dashboard
  if (window.location.pathname === '/admin') {
    return <AdminDashboard />;
  }

  const [loaderDone, setLoaderDone] = useState(false);

  // Parse ?guest=Name from URL
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get('guest') || '';

  // Developer Easter Egg Signature
  useEffect(() => {
    console.log(
      "%c✨ Premium E-Wedding Card Engine ✨\n\n%cArchitected & Developed by: Jishnu P G\n\uD83D\uDCE7 Email: jishnupg2005@gmail.com\n\uD83D\uDCBB GitHub: https://github.com/JishnuPG-tech\n\n%cPowered by React, Tailwind v4, and Framer Motion.",
      "color: #B8913A; font-size: 16px; font-weight: bold; font-family: serif;",
      "color: #5A6D7A; font-size: 12px; font-family: monospace; line-height: 1.6;",
      "color: #7E868C; font-size: 10px; font-style: italic;"
    );
  }, []);

  return (
    <div className="relative w-full bg-[var(--pearl)]">
      {/* Envelope Landing Gate */}
      {!loaderDone && <Envelope onOpen={() => setLoaderDone(true)} />}

      {/* Divine Aura & Sacred Light Beams */}
      <DivineLightBeam style={{ top: '-100px', left: '-50px' }} />
      <DivineLightBeam style={{ top: '-100px', right: '-80px' }} className="scale-x-[-1]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-divine opacity-40" />

      {/* Sacred Dust Motes */}
      {[...Array(10)].map((_, i) => (
        <SacredDustMote 
          key={i} 
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${70 + Math.random() * 30}%` 
          }} 
        />
      ))}

      {/* Subtle Olive Leaves (Thematic replacement - Hindu Base Parity in count) */}
      <OliveLeaf
        className="float-leaf"
        style={{ top: '8%', left: '-15px', width: 45, height: 90, opacity: 0.5 }}
      />
      <OliveLeaf
        className="float-leaf-delay"
        style={{ top: '12%', right: '-15px', width: 35, height: 75, opacity: 0.4, transform: 'scaleX(-1)' }}
      />
      <OliveLeaf
        className="float-leaf"
        style={{ top: '50%', left: '-12px', width: 30, height: 65, opacity: 0.3, transform: 'rotate(15deg)' }}
      />
      <OliveLeaf
        className="float-leaf-delay"
        style={{ top: '58%', right: '-12px', width: 30, height: 65, opacity: 0.3, transform: 'rotate(-15deg) scaleX(-1)' }}
      />

      {/* Scroll snap container with all sections */}
      <div className="scroll-container">
        <HeroCover guestName={guestName} />
        <InsideDetails guestName={guestName} />
        <VenueSection />
        <RSVPForm />
      </div>

      {/* Floating music widget */}
      {loaderDone && <MusicWidget />}
    </div>
  );
}
