import Image from 'next/image';
import ActionButton from '@/components/ActionButton';
import CalendarWrapper from '@/components/CalendarWrapper';

// Imágenes para la galería
const galleryImages = [
  { src: '/images/foto1.jpg', alt: 'Salón-comedor del Papa Piso Playa Burriana' },
  { src: '/images/foto2.jpg', alt: 'Cocina equipada' },
  { src: '/images/foto3.jpg', alt: 'Habitación principal' },
  { src: '/images/foto4.jpg', alt: 'Habitación secundaria' },
  { src: '/images/foto5.jpg', alt: 'Baño completo' },
  { src: '/images/foto6.jpg', alt: 'Terraza con vistas' },
];

export default function Home() {
  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900/85 to-blue-600/85 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-salon.jpg"
            alt="Papa Piso Playa Burriana"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-600/60" />
        </div>

        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Papa Piso Playa Burriana 🏖️
          </h1>
          <p className="text-xl md:text-2xl mb-2 drop-shadow-md">
            Alquiler vacacional en primera línea de playa
          </p>
          <p className="text-lg mb-8 text-blue-100 drop-shadow-md">
            Av. Mediterrània 19 — 3 dormitorios · 6 plazas · WiFi · A/A
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <ActionButton variant="whatsapp" action="whatsapp" message="Quiero reservar el Papa Piso para [fechas]. ¿Disponible?">
              📩 Reservar ahora
            </ActionButton>
            <ActionButton variant="outline" action="calendar">
              📅 Ver disponibilidad
            </ActionButton>
            <ActionButton variant="primary" action="share">
              📤 Compartir
            </ActionButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ========== ABOUT / INTRO SECTION ========== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Tu Casa en la Playa Burriana
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Disfruta de unas vacaciones inolvidables en nuestro apartamento turístico 
            recién reformado en <strong>primera línea de playa</strong>. A solo 
            <strong> 50 metros de la Playa Burriana</strong>, con vistas espectaculares 
            y todo lo necesario para una estancia perfecta.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { icon: '🛏️', label: '3 Dormitorios', desc: 'Hasta 6 personas' },
              { icon: '📶', label: 'WiFi Gratuito', desc: 'Alta velocidad' },
              { icon: '❄️', label: 'A/A', desc: 'Frío/Calor' },
              { icon: '🍳', label: 'Cocina completa', desc: 'Totalmente equipada' },
              { icon: '🧺', label: 'Lavadora', desc: 'Detergente incluido' },
              { icon: '📺', label: 'TV Smart', desc: 'Streaming' },
              { icon: '🌅', label: 'Balcón', desc: 'Vistas al mar' },
              { icon: '🅿️', label: 'Parking gratuito', desc: 'En la calle' },
            ].map((item) => (
              <div key={item.label} className="bg-blue-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm">{item.label}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CALENDARIO SECTION ========== */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <CalendarWrapper />
        </div>
      </section>

      {/* ========== GALERÍA SECTION ========== */}
      <section id="galeria" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">📸 Galería</h2>
          <p className="text-center text-gray-500 mb-8">
            Así es el Papa Piso Playa Burriana
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <ActionButton variant="secondary" action="calendar">
              ← Ver disponibilidad
            </ActionButton>
          </div>
        </div>
      </section>

      {/* ========== PRECIOS SECTION ========== */}
      <section id="precios" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">💰 Precios</h2>
          <p className="text-gray-500 mb-8">
            Precios orientativos. Consulta disponibilidad para fechas concretas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: 'Temporada Baja', price: 'Desde 80€/noche', period: 'Octubre - Abril' },
              { title: 'Temporada Media', price: 'Desde 110€/noche', period: 'Mayo - Junio / Septiembre' },
              { title: 'Temporada Alta', price: 'Desde 150€/noche', period: 'Julio - Agosto' },
            ].map((tier) => (
              <div key={tier.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tier.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">{tier.price}</p>
                <p className="text-sm text-gray-500">{tier.period}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-3 flex-wrap">
            <ActionButton variant="whatsapp" action="whatsapp" message="Quiero información sobre precios y disponibilidad">
              💬 Consultar precios
            </ActionButton>
            <ActionButton variant="outline" action="calendar">
              📅 Ver calendario
            </ActionButton>
          </div>
        </div>
      </section>

      {/* ========== UBICACIÓN SECTION ========== */}
      <section id="ubicacion" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">📍 Ubicación</h2>
          <p className="text-gray-500 mb-8">
            En plena Playa Burriana, a 5 min del centro
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              { icon: '🏖️', label: 'Playa Burriana', value: 'A 50 metros' },
              { icon: '🏪', label: 'Supermercado', value: 'A 3 min andando' },
              { icon: '🍽️', label: 'Restaurantes', value: 'Zona de tapas a 2 min' },
              { icon: '🏙️', label: 'Centro Burriana', value: 'A 5 min andando' },
              { icon: '🏰', label: 'Castellón', value: '10 min en coche' },
              { icon: '✈️', label: 'Aeropuerto Castellón', value: '15 min en coche' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RESEÑAS SECTION ========== */}
      <section id="resenas" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">⭐ Reseñas</h2>
          <p className="text-gray-500 mb-8">
            Lo que dicen nuestros huéspedes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'María G.', text: 'Apartamento precioso, muy bien ubicado. La playa a un paso. Volveremos sin duda.', stars: 5 },
              { name: 'Carlos M.', text: 'Todo perfecto. El anfitrión muy atento, el piso impecable y la ubicación inmejorable.', stars: 5 },
              { name: 'Laura F.', text: 'Genial para familias. Los niños disfrutaron muchísimo de la playa. Muy recomendable.', stars: 5 },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-xl p-5 shadow-sm text-left">
                <div className="text-yellow-400 mb-2">
                  {'⭐'.repeat(review.stars)}
                </div>
                <p className="text-gray-600 text-sm mb-3 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-semibold text-gray-800 text-sm">— {review.name}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <ActionButton variant="whatsapp" action="whatsapp" message="Hola, he visto las reseñas y me interesa el piso">
              📩 Quiero reservar
            </ActionButton>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Listo para tus vacaciones?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Reserva directamente y ahorra hasta un 15% frente a Booking o Airbnb
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <ActionButton variant="whatsapp" action="whatsapp" message="Quiero reservar el Papa Piso Playa Burriana">
              📩 Reservar ahora
            </ActionButton>
            <ActionButton variant="outline" action="share" className="!border-white !text-white hover:!bg-white/10">
              📤 Compartir
            </ActionButton>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">Papa Piso Playa Burriana 🏖️</h3>
          <p className="text-gray-400 text-sm mb-4">
            Av. Mediterrània 19, 12530 Burriana, Castellón
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <ActionButton variant="whatsapp" action="whatsapp" className="text-sm">
              💬 WhatsApp
            </ActionButton>
            <ActionButton variant="primary" action="share" className="text-sm">
              📤 Compartir
            </ActionButton>
          </div>
          <div className="border-t border-gray-700 pt-6 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Papa Piso Playa Burriana. Todos los derechos reservados.</p>
            <p className="mt-1">
              Alquiler vacacional registrado en la Comunidad Valenciana — NRUA: [PENDIENTE]
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
