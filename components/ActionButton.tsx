'use client';

interface ActionButtonProps {
  variant: 'primary' | 'secondary' | 'whatsapp' | 'outline' | 'ghost';
  action: 'whatsapp' | 'scroll' | 'share' | 'calendar';
  target?: string;
  message?: string;
  children: React.ReactNode;
  className?: string;
}

const PHONE = process.env.NEXT_PUBLIC_WHATSAPP || '34622738667';

const variantStyles: Record<string, string> = {
  primary:
    'bg-teal text-white hover:bg-teal/90 shadow-md shadow-teal/20 hover:shadow-lg hover:shadow-teal/30',
  secondary:
    'bg-sand text-midnight hover:bg-limestone/80 border border-midnight/10',
  whatsapp:
    'bg-teal text-white hover:bg-teal/90 shadow-md shadow-teal/20',
  outline:
    'border-2 border-midnight/20 text-midnight hover:border-teal hover:text-teal hover:bg-foam/50',
  ghost:
    'text-midnight/60 hover:text-teal hover:bg-foam/30',
};

export default function ActionButton({
  variant, action, target, message, children, className = '',
}: ActionButtonProps) {
  const handleClick = () => {
    switch (action) {
      case 'whatsapp': {
        const text = message || '¡Hola! Me interesa el Apartamento Burriana Playa 🏖️';
        window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, '_blank');
        break;
      }
      case 'scroll':
        if (target) {
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'share':
        if (navigator.share) {
          navigator.share({
            title: 'Apartamento Burriana Playa',
            text: 'Mira este alquiler vacacional en Burriana 🏖️',
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert('¡Enlace copiado al portapapeles!');
        }
        break;
      case 'calendar':
        document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 
                  active:scale-95 cursor-pointer ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
