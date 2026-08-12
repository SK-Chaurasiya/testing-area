import React from 'react';
import { SUBSCRIPTION_TIERS } from '../config/siteData';

export default function SubscriptionCards() {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-2xl font-light text-slate-100 mb-2 text-center">
        Support Project RESONANCE
      </h2>
      <p className="text-slate-400 text-sm text-center mb-8 font-light">
        Choose how close you want to get
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {SUBSCRIPTION_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`
              bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300
              ${tier.highlighted 
                ? 'border-magenta-400/60 ring-1 ring-magenta-300/30 md:scale-105 hover:shadow-lg hover:shadow-magenta-500/30' 
                : tier.borderColor + ' hover:border-slate-600/60'
              }
              hover:-translate-y-1
            `}
          >
            {/* Highlighted Badge */}
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-magenta-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-light">
                Most Popular
              </div>
            )}

            {/* Icon */}
            <div className="text-4xl mb-3">{tier.icon}</div>

            {/* Name & Description */}
            <h3 className="font-light text-slate-100 mb-2">{tier.name}</h3>
            <p className="text-xs text-slate-400 mb-4">{tier.description}</p>

            {/* Features List */}
            <div className="bg-slate-800/40 rounded-lg p-3 mb-4 border border-slate-700/30">
              <ul className="space-y-2 text-xs text-slate-300">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-magenta-400 mt-0.5">✦</span>
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mb-4">
              <p className={`text-lg font-light ${
                tier.id === 'observer' ? 'text-purple-400' :
                tier.id === 'resonator' ? 'text-magenta-400' :
                'text-cyan-400'
              }`}>
                {tier.price}
              </p>
              {tier.priceValue && (
                <p className="text-xs text-slate-500 font-light">{tier.priceValue}</p>
              )}
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-2 rounded text-sm font-light transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-to-r from-magenta-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-magenta-500/40'
                  : 'bg-slate-800/60 border border-slate-600/40 text-slate-300 hover:bg-slate-700/60 hover:border-slate-500/60'
              }`}
              onClick={() => {
                if (tier.href) window.location.href = tier.href;
              }}
            >
              {tier.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
