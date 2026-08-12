import React from 'react';
import { Music } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="backdrop-blur-md bg-slate-950/60 sticky top-0 z-40 border-b border-slate-700/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Music className="w-6 h-6 text-magenta-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-full animate-pulse"></div>
          </div>
          <span className="text-lg font-light bg-clip-text text-transparent bg-gradient-to-r from-magenta-400 to-cyan-400">
            Tsumugi
          </span>
        </div>
        <div className="text-xs text-slate-400/70 font-light tracking-wider">
          EQ-Eye Project
        </div>
      </div>
    </nav>
  );
}
