import Image from 'next/image';
import ActionButton from '@/components/ActionButton';
import CalendarWrapper from '@/components/CalendarWrapper';
import WaveDivider from '@/components/WaveDivider';
import ScrollReveal from '@/components/ScrollReveal';

// ============================================================
// Imágenes para la galería
// ============================================================
const galleryImages = [
  { src: '/images/foto1.webp', alt: 'Salón-comedor del Apartamento Burriana Playa' },
  { src: '/images/foto2.webp', alt: 'Cocina equipada' },
  { src: '/images/foto3.webp', alt: 'Habitación principal' },
  { src: '/images/foto4.webp', alt: 'Habitación secundaria' },
  { src: '/images/foto5.webp', alt: 'Baño completo' },
  { src: '/images/foto6.webp', alt: 'Terraza con vistas' },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ==============================================================
          HERO — La tesis: primera línea de playa, sin intermediarios
          ============================================================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-salon.webp"
            alt="Apartamento Burriana Playa — salón con vistas al Mediterráneo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-midnight/80 via-midnight/50 to-navy/60" />
        </div>

        {/* Partículas decorativas (sutiles) */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sun/30 rounded-full animate-pulse-soft" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-sun/20 rounded-full animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-sun/20 rounded-full animate-pulse-soft" style={{ animationDelay: '0.8s' }} />
        </div>

        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-display text-sun/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
              Alquiler vacacional · Burriana
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-4 leading-[1.05] tracking-tight drop-shadow-lg">
              Playa
              <br />
              <span className="font-light italic text-sun/70">Burriana</span>
            </h1>
            <p className="text-lg md:text-xl mb-2 text-limestone/80 font-light max-w-xl mx-auto">
              La casa a 50 pasos del Mediterráneo
            </p>
            <p className="text-base mb-10 text-limestone/50 font-light tracking-wide">
              Av. Mediterrània 20 · 3 dormitorios · 6 plazas · WiFi · A/A
            </p>
          </ScrollReveal>

          <div className="flex flex-wrap gap-3 justify-center">
            <ActionButton variant="primary" action="whatsapp" message="Hola, me interesa este apartamento en primera línea de Playa Burriana. ¿Podéis darme información?">
              Reservar ahora
            </ActionButton>
            <ActionButton variant="outline" action="calendar" className="!border-white/30 !text-white hover:!border-sun hover:!text-sun hover:!bg-white/10">
              Ver disponibilidad
            </ActionButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <WaveDivider variant="cream" />

      {/* ==============================================================
          ABOUT — El apartamento en cifras y sensaciones
          ============================================================== */}
      <section className="py-20 px-4 bg-limestone">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-display text-teal text-sm uppercase tracking-[0.25em] mb-3">
                El apartamento
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-midnight leading-tight">
                Tu casa en la playa
              </h2>
              <div className="w-16 h-0.5 bg-sun mx-auto mt-4" />
              <p className="text-midnight/60 mt-4 max-w-xl mx-auto leading-relaxed">
                Recién reformado, en primera línea de la Playa Burriana, con todo lo necesario
                para que solo tengas que preocuparte de disfrutar.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: '🛏️', label: '3 Dormitorios', desc: 'Hasta 6 personas' },
              { icon: '📶', label: 'WiFi', desc: 'Fibra óptica' },
              { icon: '❄️', label: 'A/A', desc: 'Frío / Calor' },
              { icon: '🍳', label: 'Cocina', desc: 'Totalmente equipada' },
              { icon: '🧺', label: 'Lavandería', desc: 'Lavadora + detergente' },
              { icon: '📺', label: 'Smart TV', desc: 'Streaming' },
              { icon: '🌅', label: 'Balcón', desc: 'Vistas al mar' },
              { icon: '🅿️', label: 'Parking', desc: 'Gratuito en la calle' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-4 text-center border border-midnight/5 hover:border-teal/20 hover:shadow-md hover:shadow-teal/5 transition-all duration-300 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-display font-semibold text-midnight text-sm">{item.label}</h3>
                <p className="text-xs text-midnight/50 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider variant="cream" />

      {/* ==============================================================
          CALENDARIO — Disponibilidad en tiempo real
          ============================================================== */}
      <section className="py-20 px-4 bg-limestone">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="font-display text-teal text-sm uppercase tracking-[0.25em] mb-3">
                Reserva directa
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-midnight leading-tight">
                ¿Cuándo vienes?
              </h2>
              <div className="w-12 h-0.5 bg-sun mx-auto mt-3" />
            </div>
          </ScrollReveal>
          <CalendarWrapper />
        </div>
      </section>

      <WaveDivider variant="cream" />

      {/* ==============================================================
          GALERÍA — Que las fotos hablen
          ============================================================== */}
      <section id="galeria" className="py-20 px-4 bg-limestone">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-display text-teal text-sm uppercase tracking-[0.25em] mb-3">
                Galería
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-midnight leading-tight">
                Así es el apartamento
              </h2>
              <div className="w-12 h-0.5 bg-sun mx-auto mt-3" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider variant="cream" />

      {/* ==============================================================
          PRECIOS — Tarifas orientativas
          ============================================================== */}
      <section id="precios" className="py-20 px-4 bg-limestone">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-display text-teal text-sm uppercase tracking-[0.25em] mb-3">
                Tarifas
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-midnight leading-tight">
                Precios por temporada
              </h2>
              <div className="w-12 h-0.5 bg-sun mx-auto mt-3" />
              <p className="text-midnight/50 mt-4 text-sm">
                Precios orientativos. Consulta disponibilidad para fechas concretas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { title: 'Temporada Baja', price: '80€', period: '/noche', sub: 'Octubre – Abril', accent: false },
              { title: 'Temporada Media', price: '110€', period: '/noche', sub: 'Mayo – Junio / Septiembre', accent: false },
              { title: 'Temporada Alta', price: '150€', period: '/noche', sub: 'Julio – Agosto', accent: true },
            ].map((tier) => (
              <div
                key={tier.title}
                className={`relative rounded-xl p-6 md:p-8 text-center border transition-all duration-300
                  ${tier.accent
                    ? 'bg-midnight text-white border-midnight shadow-lg shadow-midnight/20 scale-105 md:scale-110'
                    : 'bg-white text-midnight border-midnight/5 hover:border-teal/20 hover:shadow-md'
                  }`}
              >
                {tier.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sun text-midnight text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Mejor precio
                  </div>
                )}
                <h3 className={`font-display font-semibold text-sm uppercase tracking-[0.15em] mb-4 ${tier.accent ? 'text-limestone/60' : 'text-midnight/50'}`}>
                  {tier.title}
                </h3>
                <div className="flex items-baseline justify-center gap-0.5 mb-1">
                  <span className={`font-display text-4xl font-bold ${tier.accent ? 'text-sun' : 'text-teal'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ${tier.accent ? 'text-limestone/60' : 'text-midnight/40'}`}>
                    {tier.period}
                  </span>
                </div>
                <p className={`text-xs mt-2 ${tier.accent ? 'text-limestone/50' : 'text-midnight/40'}`}>
                  {tier.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-3 flex-wrap">
            <ActionButton variant="primary" action="whatsapp" message="Quiero información sobre precios y disponibilidad">
              Consultar disponibilidad
            </ActionButton>
            <ActionButton variant="ghost" action="calendar">
              Ver calendario →
            </ActionButton>
          </div>
        </div>
      </section>

      <WaveDivider variant="cream" />

      {/* ==============================================================
          UBICACIÓN — Todo lo que tienes a un paseo
          ============================================================== */}
      <section id="ubicacion" className="py-20 px-4 bg-limestone">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-display text-teal text-sm uppercase tracking-[0.25em] mb-3">
                Ubicación
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-midnight leading-tight">
                En el centro de todo
              </h2>
              <div className="w-12 h-0.5 bg-sun mx-auto mt-3" />
              <p className="text-midnight/50 mt-4 text-sm">
                Av. Mediterrània 20 — a 5 minutos del centro de Burriana
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              { icon: '🏖️', label: 'Playa Burriana', value: 'A 50 metros' },
              { icon: '🏪', label: 'Supermercado', value: 'A 3 min andando' },
              { icon: '🍽️', label: 'Zona de tapas', value: 'A 2 min andando' },
              { icon: '🏙️', label: 'Centro Burriana', value: 'A 5 min andando' },
              { icon: '🏰', label: 'Castellón', value: '10 min en coche' },
              { icon: '✈️', label: 'Aeropuerto de Castellón', value: '15 min en coche' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white rounded-lg p-3 border border-midnight/5 hover:border-teal/20 transition-all duration-200 hover:shadow-sm"
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-medium text-midnight text-sm">{item.label}</p>
                  <p className="text-xs text-midnight/50">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider variant="cream" />

      {/* ==============================================================
          RESEÑAS — La voz de los huéspedes
          ============================================================== */}
      <section id="resenas" className="py-20 px-4 bg-limestone">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-display text-teal text-sm uppercase tracking-[0.25em] mb-3">
                Reseñas
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-midnight leading-tight">
                Lo que dicen nuestros huéspedes
              </h2>
              <div className="w-12 h-0.5 bg-sun mx-auto mt-3" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  name: 'María G.',
                  text: 'Apartamento precioso, muy bien ubicado. La playa a un paso. Volveremos sin duda.',
                  stars: 5,
                },
                {
                  name: 'Carlos M.',
                  text: 'Todo perfecto. El anfitrión muy atento, el piso impecable y la ubicación inmejorable.',
                  stars: 5,
                },
                {
                  name: 'Laura F.',
                  text: 'Genial para familias. Los niños disfrutaron muchísimo de la playa. Muy recomendable.',
                  stars: 5,
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="bg-white rounded-xl p-6 border border-midnight/5 hover:border-sun/20 transition-all duration-300"
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-sun" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-midnight/70 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="font-display font-semibold text-midnight text-sm">— {review.name}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="flex justify-center mt-10">
            <ActionButton variant="primary" action="whatsapp" message="Hola, he visto las reseñas y me interesa el piso">
              Quiero reservar
            </ActionButton>
          </div>
        </div>
      </section>

      <WaveDivider variant="cream" />

      {/* ==============================================================
          CTA FINAL — La conversión
          ============================================================== */}
      <section className="py-24 px-4 bg-gradient-to-br from-midnight via-midnight to-navy text-white text-center relative overflow-hidden">
        {/* Elemento decorativo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sun/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="max-w-2xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="font-display text-sun/60 text-sm uppercase tracking-[0.25em] mb-4">
              Reserva directa
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-4">
              ¿Listo para tus vacaciones?
            </h2>
            <p className="text-limestone/60 text-lg mb-10 max-w-md mx-auto">
              Reserva directamente y ahorra hasta un 15% frente a Booking o Airbnb. Sin comisiones, sin intermediarios.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ActionButton variant="primary" action="whatsapp" message="Quiero reservar el Apartamento Burriana Playa" className="!bg-sun !text-midnight hover:!bg-sun/90 !shadow-lg !shadow-sun/20">
                Reservar ahora
              </ActionButton>
              <ActionButton variant="outline" action="share" className="!border-white/30 !text-white hover:!border-sun hover:!text-sun">
                Compartir
              </ActionButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveDivider variant="navy" />

      {/* ==============================================================
          FOOTER
          ============================================================== */}
      <footer className="bg-navy text-white/70 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-display text-2xl font-semibold text-white mb-2">
            Apartamento Burriana Playa
          </h3>
          <p className="text-white/40 text-sm mb-6">
            Av. Mediterrània 20, 12530 Burriana, Castellón
          </p>
          <div className="flex justify-center gap-3 mb-8">
            <ActionButton variant="ghost" action="whatsapp" className="!text-white/60 hover:!text-sun">
              WhatsApp
            </ActionButton>
            <ActionButton variant="ghost" action="share" className="!text-white/60 hover:!text-sun">
              Compartir
            </ActionButton>
            <ActionButton variant="ghost" action="scroll" target="precios" className="!text-white/60 hover:!text-sun">
              Precios
            </ActionButton>
          </div>
          <div className="border-t border-white/10 pt-6 text-sm text-white/30 space-y-1">
            <p>© {new Date().getFullYear()} Apartamento Burriana Playa. Todos los derechos reservados.</p>
            <p>Alquiler vacacional registrado en la Comunidad Valenciana</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
