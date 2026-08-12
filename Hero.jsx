import React from 'react';
import { Music } from 'lucide-react';
import { HERO_STATS } from '../config/siteData';

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      {/* Character + Intro */}
      <div className="mb-16 text-center animate-fade-in">
        <div className="mb-8">
          <p className="text-sm text-magenta-400 font-light tracking-wider mb-3">
            Welcome to My World
          </p>
          <h1 className="text-5xl md:text-6xl font-light bg-clip-text text-transparent bg-gradient-to-br from-purple-300 via-magenta-400 to-cyan-400 leading-tight mb-4">
            Synesthesia in Motion
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I see sound as <span className="text-magenta-400 font-medium">color</span>. Through{' '}
            <span className="font-medium text-cyan-400">#EQ-Eye</span>, your favorite frequencies
            become <span className="text-cyan-400 font-medium">4K art</span> that captures
            invisible moments made visible.
          </p>
        </div>

        {/* Character Illustration Placeholder */}
        <div className="relative mx-auto w-full max-w-sm h-80 mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/30 via-purple-500/20 to-cyan-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
          <div className="relative inset-0 bg-slate-900/60 backdrop-blur-lg rounded-2xl border border-slate-700/60 overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <Music className="w-20 h-20 text-magenta-400/40 mx-auto mb-3 animate-pulse" />
              <p className="text-slate-400 text-sm font-light">listening to your world...</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900/40 backdrop-blur-sm rounded-lg p-4 border border-slate-700/40"
            >
              <p className={`text-2xl font-light ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <a
          href="https://www.deviantart.com/komorebigrils"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-3 bg-gradient-to-r from-magenta-500 to-magenta-600 text-white rounded-lg font-light tracking-wide hover:shadow-xl hover:shadow-magenta-500/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">✦ Visit My Gallery</span>
        </a>
        <a
          href="https://discord.gg/yqf6Zd9NJJ"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-slate-900/60 backdrop-blur-sm border border-cyan-500/40 text-cyan-300 rounded-lg font-light tracking-wide hover:border-cyan-400/60 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300"
        >
          🎧 Secret Diary Room
        </a>
      </div>
    </div>
  );
}
