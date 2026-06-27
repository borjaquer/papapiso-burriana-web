'use client';

interface ActionButtonProps {
  variant: 'primary' | 'secondary' | 'whatsapp' | 'outline';
  action: 'whatsapp' | 'scroll' | 'share' | 'calendar';
  target?: string;
  message?: string;
  children: React.ReactNode;
  className?: string;
}

const PHONE = process.env.NEXT_PUBLIC_WHATSAPP || '346XXXXXXXX';

export default function ActionButton({
  variant, action, target, message, children, className = '',
}: ActionButtonProps) {
  const handleClick = () => {
    switch (action) {
      case 'whatsapp': {
        const text = message || '¡Hola! Me interesa el Papa Piso Playa Burriana 🏖️';
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
            title: 'Papa Piso Playa Burriana',
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

  const variantStyles: Record<string, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    whatsapp: 'bg-green-500 hover:bg-green-600 text-white shadow-md',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 
                  active:scale-95 cursor-pointer ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
