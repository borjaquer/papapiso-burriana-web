'use client';

interface WaveDividerProps {
  variant?: 'teal' | 'cream' | 'navy';
  className?: string;
}

/**
 * Horizon Wave — Elemento signature del diseño.
 * Separador SVG que evoca las olas del Mediterráneo al atardecer.
 * Se coloca entre secciones para mantener el flujo visual.
 */
export default function WaveDivider({ variant = 'cream', className = '' }: WaveDividerProps) {
  const colors: Record<string, { top: string; bottom: string }> = {
    teal: { top: '#0D3B4F', bottom: '#FBF8F3' },
    cream: { top: '#FBF8F3', bottom: '#FBF8F3' },
    navy: { top: '#264653', bottom: '#264653' },
  };

  const { top, bottom } = colors[variant];

  return (
    <div className={`relative h-16 md:h-24 -mb-1 ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ola superior — cresta más pronunciada */}
        <path
          d="M0 40C240 100 480 0 720 50C960 100 1200 10 1440 40V120H0V40Z"
          fill={top}
          opacity="0.6"
        />
        {/* Ola inferior — suave y extendida */}
        <path
          d="M0 60C180 20 360 80 540 50C720 20 900 90 1080 60C1260 30 1350 70 1440 50V120H0V60Z"
          fill={bottom}
          opacity="0.9"
        />
      </svg>
    </div>
  );
}
