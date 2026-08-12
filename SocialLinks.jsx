import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../config/siteData';

export default function SocialLinks() {
  return (
    <div
      className="max-w-6xl mx-auto px-6 mb-16 animate-fade-in"
      style={{ animationDelay: '0.6s' }}
    >
      <h2 className="text-2xl font-light text-slate-100 mb-8 text-center">Find Me</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-slate-900/40 backdrop-blur-sm border rounded-xl p-6 ${link.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            style={{
              boxShadow: `0 0 20px rgba(0, 0, 0, 0), inset 0 0 1px rgba(255, 255, 255, 0.1)`,
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl">{link.icon}</div>
              {link.id === 'deviantart' ? (
                <Star className="w-4 h-4 text-slate-500 group-hover:text-magenta-400 transition-colors" />
              ) : (
                <MessageCircle className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              )}
            </div>

            <h3 className="font-light text-slate-100 mb-1">{link.name}</h3>
            <p className="text-xs text-slate-400 font-light">{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
