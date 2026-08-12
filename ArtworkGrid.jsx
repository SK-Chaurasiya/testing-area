import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { ARTWORKS } from '../config/siteData';

export default function ArtworkGrid() {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-3xl font-light text-slate-100 mb-2 text-center">Recent Frequencies</h2>
      <p className="text-slate-400 text-sm text-center mb-8 font-light">
        What your favorite sounds look like
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {ARTWORKS.map((art) => (
          <div
            key={art.id}
            className="group relative rounded-xl overflow-hidden backdrop-blur-sm bg-slate-900/40 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-300 hover:shadow-xl hover:shadow-magenta-500/10 hover:-translate-y-2"
          >
            {/* Artwork Placeholder with Gradient */}
            <div className={`w-full aspect-square bg-gradient-to-br ${art.color} flex items-center justify-center relative overflow-hidden`}>
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-950/80"></div>

              {/* Content */}
              <div className="text-center relative z-10">
                <div className={`text-4xl mb-2 ${art.accentColor}`}>♪</div>
                <p className="text-slate-300 text-sm font-light">{art.title}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-magenta-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Info Overlay */}
            <div className="p-4 bg-slate-900/60 backdrop-blur-sm border-t border-slate-700/40">
              <h3 className="font-light text-slate-100 text-sm mb-1">{art.title}</h3>
              <p className={`text-xs ${art.accentColor} italic font-light mb-3`}>{art.theme}</p>

              {/* Interaction Buttons */}
              <div className="flex gap-3 text-slate-400 text-xs">
                <button className="flex items-center gap-1 hover:text-magenta-400 transition-colors duration-200">
                  <Heart className="w-3 h-3" /> Like
                </button>
                <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors duration-200">
                  <MessageCircle className="w-3 h-3" /> Comment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
