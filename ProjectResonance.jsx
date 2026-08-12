import React from 'react';

export default function ProjectResonance() {
  return (
    <div
      className="max-w-6xl mx-auto px-6 mb-12 animate-fade-in"
      style={{ animationDelay: '0.5s' }}
    >
      <div className="bg-gradient-to-r from-purple-500/10 via-magenta-500/10 to-cyan-500/10 rounded-2xl p-8 border border-slate-700/40">
        <h2 className="text-2xl font-light text-slate-100 mb-4">✨ Project RESONANCE</h2>

        <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
          What does your favorite sound look like? Through RESONANCE, tell me your favorite
          music, memory, or frequency—and I'll visualize it into a beautiful custom 4K cinematic
          illustration just for you. From upbeat pop songs to the rustle of turning pages, if it
          resonates with you, it becomes art.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-magenta-400 font-light mb-3">How It Works</p>
            <ul className="space-y-2 text-sm text-slate-400 font-light">
              <li>✦ Share your favorite sound or memory</li>
              <li>✦ I translate it through my synesthesia</li>
              <li>✦ Receive custom 4K visualization</li>
              <li>✦ Forever in your collection 💜</li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-cyan-400 font-light mb-3">A Note</p>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              I'm still figuring things out, but my heart is fully in this. My synesthesia is
              real—I genuinely see sounds as colors. Each visualization is a direct translation of
              how I perceive your frequency through my eyes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
