# Tsumugi Linkhub - Modular Architecture Developer Guide

**For developers extending, maintaining, or modifying the codebase.**

---

## 🏗️ Architecture Overview

### Component Hierarchy
```
TsumugiLinkhub (Orchestrator)
├── Navigation
├── FrequencyVisualizer
├── Hero
├── ArtworkGrid
├── About
├── SubscriptionCards
├── ProjectResonance
├── SocialLinks
└── Footer
```

### Data Flow
```
siteData.js (Single Source of Truth)
    ↓
Components (Map & Display)
    ↓
UI (Dark Cinematic Theme)
```

---

## 📂 File Organization

### Data Layer
**File:** `src/config/siteData.js`

Contains all content, prices, links, etc. Components should **never hardcode** data.

```javascript
// ✅ Good - Import and use
import { SUBSCRIPTION_TIERS, ARTWORKS } from '../config/siteData'

{SUBSCRIPTION_TIERS.map(tier => <Card key={tier.id} {...tier} />)}

// ❌ Bad - Hardcoding
<Card price="$5/month" />
```

### Component Layer
**Directory:** `src/components/`

Each component is **focused**, **reusable**, and **under 150 lines**.

```
TsumugiLinkhub.jsx    ← Layout orchestrator
Navigation.jsx        ← Header bar
Hero.jsx             ← Character intro + CTA
ArtworkGrid.jsx      ← Gallery showcase
About.jsx            ← Bio section
SubscriptionCards.jsx ← Pricing tiers
ProjectResonance.jsx ← Project info
SocialLinks.jsx      ← Contact links
Footer.jsx           ← Closing message
FrequencyVisualizer.jsx ← Canvas animation
```

### Styling
**File:** `src/index.css`

Global styles using Tailwind with dark theme. Component-specific styles use Tailwind classes inline.

```css
/* Global components */
@layer components {
  .card-glass-dark {
    @apply bg-slate-900/40 backdrop-blur-md border border-slate-700/40;
  }
}
```

---

## 🔄 How to Update Content

### Scenario 1: Change a Subscription Price

**File to edit:** `src/config/siteData.js`

```javascript
export const SUBSCRIPTION_TIERS = [
  {
    id: 'resonator',
    price: '$5',     // ← Change this
    priceValue: '/month'
  }
]
```

**That's it.** `SubscriptionCards.jsx` automatically displays the new price.

### Scenario 2: Add a New Artwork

**File to edit:** `src/config/siteData.js`

```javascript
export const ARTWORKS = [
  // ... existing artworks
  {
    id: 'new-artwork',
    title: 'New Piece',
    theme: 'Your description',
    color: 'from-blue-500/20 to-purple-500/20',
    accentColor: 'text-blue-400'
  }
]
```

**Result:** `ArtworkGrid.jsx` automatically renders the new card.

### Scenario 3: Update Discord Link

**File to edit:** `src/config/siteData.js`

```javascript
export const SOCIAL_LINKS = [
  {
    id: 'discord',
    href: 'https://discord.gg/NEW_INVITE_CODE'  // ← Update this
  }
]
```

**Result:** Both `Hero.jsx` and `SocialLinks.jsx` use the new link.

---

## 🎨 How to Add a New Component

### Step 1: Create Component File

**File:** `src/components/NewSection.jsx`

```javascript
import React from 'react';

export default function NewSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-16 animate-fade-in"
         style={{ animationDelay: '0.7s' }}>
      
      <h2 className="text-2xl font-light text-slate-100 mb-6">
        My New Section
      </h2>

      {/* Your content here */}
      <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/40 rounded-xl p-8">
        <p className="text-slate-300 font-light">
          Hello from new component!
        </p>
      </div>

    </div>
  );
}
```

### Step 2: Import into TsumugiLinkhub

**File:** `src/components/TsumugiLinkhub.jsx`

```javascript
import NewSection from './NewSection';

export default function TsumugiLinkhub() {
  return (
    // ... existing components ...
    <ProjectResonance />
    <NewSection />           {/* ← Add here */}
    <SocialLinks />
    <Footer />
  );
}
```

### Step 3: Adjust Animation Delay (Optional)

Keep animation delays staggered (0s, 0.1s, 0.2s, 0.3s, etc.) for a cascading reveal effect.

---

## 🚀 Advanced Customization

### Using Component Props

Components can accept props for flexibility:

```javascript
// Enhanced FrequencyVisualizer usage
<FrequencyVisualizer
  color1="#ec4899"
  color2="#06b6d4"
  intensity={0.9}
  height={160}
  barCount={32}
/>
```

### Conditional Rendering

```javascript
// Only show tier if Tsumugi is accepting new clients
{SUBSCRIPTION_TIERS
  .filter(tier => tier.availableNow)
  .map(tier => <TierCard key={tier.id} {...tier} />)}
```

### Dynamic Data from API

```javascript
// Replace hardcoded siteData with API call
const [tiers, setTiers] = useState([]);

useEffect(() => {
  fetch('/api/subscription-tiers')
    .then(res => res.json())
    .then(data => setTiers(data));
}, []);

return tiers.map(tier => <TierCard key={tier.id} {...tier} />);
```

---

## 🎨 Dark Theme Customization

### Color Palette

All colors in `tailwind.config.js`:

```javascript
colors: {
  magenta: { /* 50-900 */ },  // Warm frequencies
  cyan: { /* 50-900 */ },      // Cool frequencies
  'theme-base': 'rgb(...)',    // Dark background
  'theme-elevated': 'rgb(...)', // Card bg
}
```

### Changing Accent Colors

To change from magenta/cyan to different colors:

1. Update `tailwind.config.js` color definitions
2. Update `siteData.js` color references
3. Update `src/index.css` glow effects

Example: Switch to pink/blue
```javascript
// In tailwind.config.js
'pink': { 500: '#ec407a' },
'blue': { 500: '#2196f3' }

// In siteData.js
accentColor: 'text-pink-400'

// In index.css
.glow-pink { @apply shadow-[0_0_20px_rgba(236,64,122,0.3)]; }
```

### Glass Morphism Intensity

Adjust backdrop blur in components:

```javascript
// More blur (frosted glass effect)
className="backdrop-blur-lg"    // From backdrop-blur-md

// Less blur (more see-through)
className="backdrop-blur-sm"    // From backdrop-blur-md
```

---

## 🧪 Testing Components

### Unit Testing (Jest/Vitest)

```javascript
// __tests__/SubscriptionCards.test.jsx
import { render, screen } from '@testing-library/react';
import SubscriptionCards from '../SubscriptionCards';

test('renders Resonator tier price correctly', () => {
  render(<SubscriptionCards />);
  expect(screen.getByText('$5')).toBeInTheDocument();
});
```

### Visual Testing

Test in browser at different breakpoints:
```bash
npm run dev
# Resize browser to 320px, 768px, 1024px, 1920px
# Verify layouts are responsive
```

### Performance Testing

Use React DevTools Profiler:
1. Open DevTools → Profiler tab
2. Record interaction
3. Check for unnecessary re-renders
4. Look for render times >5ms

---

## 🐛 Common Issues & Solutions

### Issue: Prices not updating

**Cause:** Hardcoded in JSX instead of importing from `siteData.js`

**Solution:**
```javascript
// ❌ Don't do this
<p>$5/month</p>

// ✅ Do this
import { SUBSCRIPTION_TIERS } from '../config/siteData'
{SUBSCRIPTION_TIERS[1].price}
```

### Issue: Component not rendering

**Cause:** Not imported in `TsumugiLinkhub.jsx`

**Solution:**
```javascript
import NewComponent from './NewComponent';  // ← Add import
// Then use: <NewComponent />
```

### Issue: Dark theme looks wrong

**Cause:** Using light theme colors instead of dark equivalents

**Solution:**
```javascript
// ❌ Don't use
className="bg-white text-black"

// ✅ Do use
className="bg-slate-900/40 text-slate-200"
```

### Issue: Animation stutters

**Cause:** Too many re-renders or heavy calculations

**Solution:**
- Use `useMemo()` for expensive calculations
- Extract animations to CSS (not JS)
- Profile with React DevTools

---

## 📊 Adding Analytics

### Google Analytics

```javascript
// In index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXX');
</script>
```

### Track Events

```javascript
// In Hero.jsx
const trackClick = (label) => {
  gtag('event', 'click', {
    'event_category': 'engagement',
    'event_label': label
  });
};

<a onClick={() => trackClick('discord')} href="...">
  Join Discord
</a>
```

---

## 🚀 Performance Best Practices

### 1. Lazy Load Images
```javascript
// Use loading="lazy"
<img src="..." loading="lazy" alt="..." />
```

### 2. Memoize Expensive Components
```javascript
import { memo } from 'react';

const ArtworkCard = memo(function ArtworkCard({ art }) {
  return <div>{art.title}</div>;
});

export default ArtworkCard;
```

### 3. Use useCallback for Event Handlers
```javascript
const handleSubscribe = useCallback((tierId) => {
  // Handle subscription
}, []);
```

### 4. Code Split Components
```javascript
import { lazy, Suspense } from 'react';

const ProjectResonance = lazy(() => import('./ProjectResonance'));

<Suspense fallback={<div>Loading...</div>}>
  <ProjectResonance />
</Suspense>
```

---

## 📦 Build & Deploy

### Local Development
```bash
npm install
npm run dev       # Starts at http://localhost:5173
```

### Production Build
```bash
npm run build
# Creates optimized dist/ folder
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel           # Guides through deployment
```

---

## 🎓 Learning Resources

### React Concepts
- [React Hooks](https://react.dev/reference/react)
- [Performance Optimization](https://react.dev/reference/react/memo)

### Tailwind CSS
- [Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Extend Configuration](https://tailwindcss.com/docs/configuration)

### Canvas API
- [MDN Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Smooth Animation Patterns](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

---

## ✅ Pre-Commit Checklist

Before committing code:

- [ ] No console.log() statements
- [ ] No hardcoded data (use siteData.js)
- [ ] Components under 150 lines
- [ ] Tailwind classes instead of custom CSS
- [ ] Dark theme colors used (slate-*, magenta-*, cyan-*)
- [ ] Single responsibility per component
- [ ] Props passed from parent, not hardcoded
- [ ] Tested in multiple breakpoints
- [ ] Animations respect prefers-reduced-motion
- [ ] No unused imports or variables

---

## 🎯 Summary

### Key Principles
1. **Single Source of Truth** - Use `siteData.js` for all content
2. **Modular Components** - Small, focused, reusable
3. **Dark Theme Consistency** - Use slate, magenta, cyan palette
4. **Performance First** - Optimize re-renders, lazy load content
5. **Accessibility** - Keep WCAG AA+ standards
6. **Maintainability** - Clear code, good naming, documentation

### Workflow for Changes
1. **Content Change?** → Edit `siteData.js`
2. **Visual Change?** → Edit component Tailwind classes
3. **New Feature?** → Create modular component in `src/components/`
4. **Styling?** → Use `@layer` directives in `src/index.css`

### Questions?
Refer to:
- **Architecture:** `ARCHITECTURE_CHANGES.md`
- **Component Code:** Check JSDoc comments in each component
- **Tailwind:** `tailwind.config.js`
- **Data:** `src/config/siteData.js`

---

**Happy coding!** ✨

The modular architecture is designed to be **easy to understand**, **simple to extend**, and **fast to deploy**. Enjoy building Tsumugi's linkhub!
