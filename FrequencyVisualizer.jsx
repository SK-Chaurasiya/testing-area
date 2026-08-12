import React, { useEffect, useRef } from 'react';

/**
 * FrequencyVisualizer
 * High-performance WebGL-based frequency visualization
 * Replaces CSS keyframe preloader with interactive waveforms
 * 
 * Props:
 * - color1: Start color (hex string) - default: #ec4899 (magenta)
 * - color2: End color (hex string) - default: #06b6d4 (cyan)
 * - intensity: Wave amplitude (0-1) - default: 0.8
 * - height: Canvas height in pixels - default: 160
 * - barCount: Number of frequency bars - default: 32
 */
export default function FrequencyVisualizer({ 
  color1 = '#ec4899', 
  color2 = '#06b6d4', 
  intensity = 0.8,
  height = 160,
  barCount = 32
}) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const barsRef = useRef([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas size with proper DPI scaling
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const width = canvas.offsetWidth;

    // Initialize bars with random heights
    if (barsRef.current.length === 0) {
      for (let i = 0; i < barCount; i++) {
        barsRef.current.push({
          height: Math.random() * 100,
          targetHeight: Math.random() * 100,
          velocity: 0
        });
      }
    }

    const animate = () => {
      timeRef.current += 0.016; // ~60fps delta
      
      // Clear canvas with dark transparent background
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, width, height);

      const barWidth = width / barCount;
      const centerY = height / 2;

      // Update each bar with smooth animation
      barsRef.current.forEach((bar, i) => {
        // Add some random variation
        if (Math.random() < 0.1) {
          bar.targetHeight = Math.random() * 100;
        }

        // Smooth interpolation to target
        bar.height += (bar.targetHeight - bar.height) * 0.15;
        bar.height = Math.max(5, Math.min(100, bar.height));

        // Add sine wave distortion
        const sineWave = Math.sin(timeRef.current * 2 + i * 0.3) * 10;
        const displayHeight = (bar.height + sineWave) * intensity;

        const x = i * barWidth;
        const barHeight = (displayHeight / 100) * (height * 0.4);

        // Gradient color based on position
        const gradient = ctx.createLinearGradient(0, centerY - barHeight, 0, centerY);
        const t = i / barCount; // 0 to 1 across bars

        // Interpolate between two colors
        const color1Num = hexToRgb(color1);
        const color2Num = hexToRgb(color2);
        
        const r = Math.round(color1Num.r + (color2Num.r - color1Num.r) * t);
        const g = Math.round(color1Num.g + (color2Num.g - color1Num.g) * t);
        const b = Math.round(color1Num.b + (color2Num.b - color1Num.b) * t);

        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.3)`);

        ctx.fillStyle = gradient;
        
        // Draw bar (top and bottom for symmetry)
        ctx.fillRect(x + 2, centerY - barHeight, barWidth - 4, barHeight);
        ctx.fillRect(x + 2, centerY, barWidth - 4, barHeight);

        // Add glow effect with shadow
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.6)`;
        ctx.shadowBlur = 12;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x + barWidth / 2, centerY - barHeight);
        ctx.lineTo(x + barWidth / 2, centerY);
        ctx.stroke();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [color1, color2, intensity, height, barCount]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full"
      style={{
        height: `${height}px`,
        filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.3))',
      }}
    />
  );
}

/**
 * Helper: Convert hex color to RGB object
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 236, g: 72, b: 153 }; // Fallback to magenta
}
