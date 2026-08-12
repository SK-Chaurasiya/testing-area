import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import FrequencyVisualizer from './FrequencyVisualizer';
import Hero from './Hero';
import ArtworkGrid from './ArtworkGrid';
import About from './About';
import SubscriptionCards from './SubscriptionCards';
import ProjectResonance from './ProjectResonance';
import SocialLinks from './SocialLinks';
import Footer from './Footer';

export default function TsumugiLinkhub() {
  const [showContent, setShowContent] = useState(false);

  // Auto-hide preloader after animation completes
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 overflow-hidden">
      {/* CINEMATIC TWILIGHT: Bioluminescent Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Magenta glow - top left */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-magenta-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(236, 72, 153, 0.2))',
            mixBlendMode: 'screen',
          }}
        ></div>

        {/* Cyan glow - top right */}
        <div
          className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl animate-pulse"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(6, 182, 212, 0.15))',
            mixBlendMode: 'screen',
            animationDelay: '1s',
          }}
        ></div>

        {/* Purple glow - bottom center */}
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.15))',
            mixBlendMode: 'screen',
            animationDelay: '2s',
          }}
        ></div>
      </div>

      {/* PRELOADER: High-Performance WebGL Frequency Visualizer */}
      {!showContent && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-sm z-50">
          <div className="w-full max-w-md px-6 mb-8">
            <FrequencyVisualizer
              color1="#ec4899"
              color2="#06b6d4"
              intensity={0.9}
              height={160}
              barCount={32}
            />
          </div>

          {/* Loading Text */}
          <div className="text-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 text-sm tracking-widest font-light">
              <span className="inline-block animate-pulse">awakening your frequencies</span>
            </p>
          </div>
        </div>
      )}

      {/* MAIN CONTENT: Dark Theme with Modular Components */}
      <div
        className={`relative z-10 transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <Hero />

        {/* Artwork Showcase */}
        <ArtworkGrid />

        {/* About Section */}
        <About />

        {/* Subscription Tiers */}
        <SubscriptionCards />

        {/* Project RESONANCE */}
        <ProjectResonance />

        {/* Social Links */}
        <SocialLinks />

        {/* Footer */}
        <Footer />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
