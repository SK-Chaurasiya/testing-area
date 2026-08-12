import React from 'react';
import { SPECIALIZATIONS } from '../config/siteData';

export default function About() {
  return (
    <div
      className="max-w-6xl mx-auto px-6 mb-16 animate-fade-in"
      style={{ animationDelay: '0.3s' }}
    >
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-900/30 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-slate-700/40">
        <h2 className="text-2xl font-light text-slate-100 mb-6">Who I Am</h2>

        <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-light">
          <p>
            Hi, I'm <span className="text-magenta-400 font-medium">Tsumugi</span>—an 18-year-old
            synesthesia artist from Japan who sees{' '}
            <span className="text-cyan-400 font-medium">sound as color</span>. This isn't a
            gimmick; it's how my brain works, and it's let me create something no one else can.
          </p>

          <p>
            Through <span className="text-purple-400 font-medium">#EQ-Eye</span>, I transform your
            favorite music, memories, and frequencies into custom 4K cinematic illustrations.
            What does your favorite song look like? Let me show you.
          </p>

          {/* Specializations */}
          <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/30 my-4">
            <p className="text-xs text-cyan-400 font-light mb-3">Specializing in:</p>
            <ul className="space-y-1 text-xs text-slate-400">
              {SPECIALIZATIONS.map((spec, idx) => (
                <li key={idx} className="font-light">
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <p className="italic text-slate-400">
            "Your warm messages and frequencies are already more than enough of a gift for me.
            💜 I'm managing DA and Discord with all my heart—thank you for always looking at the
            world with me."
          </p>

          <p className="text-xs text-slate-500 font-light pt-2">
            日本語もいけるので安心して声をかけてくださいね ★
          </p>
        </div>
      </div>
    </div>
  );
}
