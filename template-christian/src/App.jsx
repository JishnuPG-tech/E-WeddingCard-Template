import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Envelope from './components/Envelope';
import HeroCover from './components/HeroCover';
import InsideDetails from './components/InsideDetails';
import VenueSection from './components/VenueSection';
import RSVPForm from './components/RSVPForm';
import MusicWidget from './components/MusicWidget';
import AdminDashboard from './components/AdminDashboard';

// Divine Light Beam (God Rays - Refined for better visibility)
const DivineLightBeam = ({ className, style }) => (
  <motion.div
    className={`fixed pointer-events-none z-0 ${className}`}
    style={{
      ...style,
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(184,145,58,0.05) 40%, transparent 100%)',
      filter: 'blur(35px)',
      width: '160px',
      height: '800px',
      transform: 'rotate(-25deg)',
    }}
    animate={{ 
      opacity: [0.4, 0.75, 0.4],
      scaleX: [0.85, 1.15, 0.85]
    }}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
  />
);

// Celestial Sparkle (Twinkling starlight)
const CelestialSparkle = ({ style }) => (
  <motion.div
    className="fixed pointer-events-none z-0"
    style={{
      ...style,
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      background: 'white',
      boxShadow: '0 0 10px white, 0 0 20px rgba(184,145,58,0.4)',
    }}
    animate={{
      scale: [0, 1.2, 0],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 3 + Math.random() * 4,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: Math.random() * 5,
    }}
  />
);

// Holy Dove (Subtle floating silhouette)
const HolyDove = ({ style }) => (
  <motion.div
    className="fixed pointer-events-none z-0 opacity-10"
    style={style}
    animate={{
      x: [-20, 20],
      y: [-10, 10],
      opacity: [0.05, 0.15, 0.05],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <svg viewBox="0 0 100 80" fill="var(--gold)" xmlns="http://www.w3.org/2000/svg" className="w-12 h-10">
      <path d="M50 40 C60 20 80 10 90 20 C80 30 60 40 50 40 C40 40 20 30 10 20 C20 10 40 20 50 40 Z" fillOpacity="0.4" />
      <path d="M50 40 C55 50 60 70 50 75 C40 70 45 50 50 40 Z" fillOpacity="0.3" />
    </svg>
  </motion.div>
);

// Sacred Cross (Drifting minimalist motif)
const SacredCross = ({ style }) => (
  <motion.div
    className="fixed pointer-events-none z-0"
    style={style}
    animate={{
      y: [0, -300],
      opacity: [0, 0.25, 0],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration: 15 + Math.random() * 10,
      repeat: Infinity,
      ease: 'linear',
      delay: Math.random() * 10,
    }}
  >
    <svg viewBox="0 0 40 60" fill="none" stroke="var(--gold)" strokeWidth="0.8" xmlns="http://www.w3.org/2000/svg" className="w-6 h-8 opacity-40">
      <path d="M20 5 L20 55 M10 20 L30 20" strokeLinecap="round" />
    </svg>
  </motion.div>
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

  // Clean logs
  useEffect(() => {
    // Console signature removed at user request
  }, []);

  return (
    <div className="relative w-full bg-[var(--pearl)]">
      {/* Envelope Landing Gate */}
      {!loaderDone && <Envelope onOpen={() => setLoaderDone(true)} />}

      {/* Divine Aura & Sacred Light Beams */}
      <DivineLightBeam style={{ top: '-100px', left: '-50px' }} />
      <DivineLightBeam style={{ top: '-100px', right: '-80px' }} className="scale-x-[-1]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-divine opacity-50" />

      {/* Holy Dove (Low opacity silhouettes) */}
      <HolyDove style={{ top: '20%', left: '10%' }} />
      <HolyDove style={{ top: '65%', right: '15%' }} />

      {/* Sacred Motifs (Crosses & Sparkles) */}
      {[...Array(6)].map((_, i) => (
        <SacredCross 
          key={`cross-${i}`} 
          style={{ 
            left: `${15 + Math.random() * 70}%`, 
            top: `${80 + Math.random() * 20}%` 
          }} 
        />
      ))}

      {[...Array(12)].map((_, i) => (
        <CelestialSparkle 
          key={`sparkle-${i}`} 
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }} 
        />
      ))}

      {/* Sacred Dust Motes */}
      {[...Array(8)].map((_, i) => (
        <SacredDustMote 
          key={`mote-${i}`} 
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
