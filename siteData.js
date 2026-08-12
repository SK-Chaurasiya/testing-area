/**
 * Tsumugi's Linkhub - Site Configuration
 * Centralized data management for easy updates
 * Change prices, tiers, artwork here without touching UI components
 */

export const SUBSCRIPTION_TIERS = [
  {
    id: 'observer',
    icon: '👁️',
    name: 'Observer',
    description: 'Access Secret Diary, see intimate moments watermark-free',
    price: 'Monthly',
    priceValue: '$1-2',
    features: [
      'Secret Diary access',
      'Unguarded intimate moments',
      'Watermark-free',
      'Discord community'
    ],
    color: 'from-purple-500/10 to-blue-500/10',
    borderColor: 'border-purple-300/40',
    buttonText: 'Subscribe',
    href: '#subscribe-observer'
  },
  {
    id: 'resonator',
    icon: '💎',
    name: 'Resonator',
    description: '4K High-Res Archives + access all cinematic series',
    price: '$5',
    priceValue: '/month',
    features: [
      'Uncompressed 4K High-Res Archives',
      'All cinematic series access',
      'Weekly exclusive content',
      'VIP Discord channel'
    ],
    color: 'from-magenta-500/20 to-cyan-500/20',
    borderColor: 'border-magenta-400/60',
    buttonText: 'Subscribe',
    highlighted: true,
    href: '#subscribe-resonator'
  },
  {
    id: 'conductor',
    icon: '🎼',
    name: 'Conductor',
    description: 'Custom Frequency Requests + all archives + 1:1 access',
    price: '$15',
    priceValue: '/month',
    features: [
      'Custom Frequency Requests',
      'All 4K archives',
      '1:1 Tsumugi sessions',
      'Personal project prioritization',
      'Exclusive behind-the-scenes'
    ],
    color: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-300/40',
    buttonText: 'Inquire',
    href: '#inquire-conductor'
  }
];

export const ARTWORKS = [
  {
    id: 'neon-night',
    title: 'Neon Night',
    theme: 'Deep into the glow',
    color: 'from-magenta-500/20 to-cyan-500/20',
    accentColor: 'text-magenta-400'
  },
  {
    id: 'freezing-signal',
    title: 'Freezing Signal',
    theme: 'Winter frequencies',
    color: 'from-blue-500/20 to-cyan-500/20',
    accentColor: 'text-cyan-400'
  },
  {
    id: 'soft-collapse',
    title: 'Soft Collapse',
    theme: 'Gentle release',
    color: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'text-purple-400'
  }
];

export const SOCIAL_LINKS = [
  {
    id: 'deviantart',
    icon: '🎨',
    name: 'DeviantArt Gallery',
    description: 'KomorebiGirls • 325 Deviations',
    href: 'https://www.deviantart.com/komorebigrils',
    accentColor: 'from-magenta-500/20 to-pink-500/20',
    borderColor: 'border-magenta-300/60'
  },
  {
    id: 'discord',
    icon: '💬',
    name: 'Secret Diary Room',
    description: 'Discord • Exclusive frequencies',
    href: 'https://discord.gg/yqf6Zd9NJJ',
    accentColor: 'from-cyan-500/20 to-purple-500/20',
    borderColor: 'border-cyan-300/60'
  }
];

export const HERO_STATS = [
  { label: 'Deviations', value: '325', color: 'text-magenta-400' },
  { label: 'Profile Views', value: '2.2K', color: 'text-cyan-400' },
  { label: 'Favorites', value: '4.4K', color: 'text-purple-400' }
];

export const SPECIALIZATIONS = [
  '✦ Luminous Bloom & Atmospheric Lighting',
  '✦ Digital Synesthesia Visualization',
  '✦ Cinematic Anime Aesthetics',
  '✦ Daily snapshots & Weekly cinematic series'
];

export const SITE_META = {
  title: 'Tsumugi | EQ-Eye | Synesthesia Visualization Artist',
  description: 'I see sound as color. Custom 4K frequency visualizations & anime art from Japan.',
  keywords: 'synesthesia, anime, art, frequency visualization, digital art, Japan',
  author: 'Tsumugi (KomorebiGirls)'
};
