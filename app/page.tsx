import Image from 'next/image';
import ActionButton from '@/components/ActionButton';
import CalendarWrapper from '@/components/CalendarWrapper';
import WaveDivider from '@/components/WaveDivider';
import ScrollReveal from '@/components/ScrollReveal';
import { NEARBY_PLACES, mapsLinks } from '@/lib/constants';

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
              { icon: <IconBed />, label: '3 Dormitorios', desc: 'Hasta 6 personas' },
              { icon: <IconWifi />, label: 'WiFi', desc: 'Fibra óptica' },
              { icon: <IconSnowflake />, label: 'A/A', desc: 'Frío / Calor' },
              { icon: <IconCooking />, label: 'Cocina', desc: 'Totalmente equipada' },
              { icon: <IconWasher />, label: 'Lavandería', desc: 'Lavadora + detergente' },
              { icon: <IconTv />, label: 'Smart TV', desc: 'Streaming' },
              { icon: <IconSunset />, label: 'Balcón', desc: 'Vistas al mar' },
              { icon: <IconParking />, label: 'Parking', desc: 'Gratuito en la calle' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-5 text-center border border-midnight/5 hover:border-teal/20 hover:shadow-md hover:shadow-teal/5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 mx-auto mb-3 rounded-full bg-foam flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
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
              { icon: <IconBeach />, label: 'Playa Burriana', value: 'A 50 metros' },
              { icon: <IconStore />, label: 'Supermercado', value: 'A 3 min andando' },
              { icon: <IconFork />, label: 'Zona de tapas', value: 'A 2 min andando' },
              { icon: <IconCity />, label: 'Centro Burriana', value: 'A 5 min andando' },
              { icon: <IconLandmark />, label: 'Castellón', value: '10 min en coche' },
              { icon: <IconPlane />, label: 'Aeropuerto de Castellón', value: '15 min en coche' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white rounded-lg p-3 border border-midnight/5 hover:border-teal/20 transition-all duration-200 hover:shadow-sm"
              >
                <span className="w-9 h-9 flex-shrink-0 rounded-full bg-foam flex items-center justify-center text-teal">
                  {item.icon}
                </span>
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
          TURISMO — Qué hacer en Burriana y alrededores, de más cerca a más lejos
          ============================================================== */}
      <section id="que-hacer" className="py-20 px-4 bg-sand">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-display text-teal text-sm uppercase tracking-[0.25em] mb-3">
                Turismo en Burriana
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-midnight leading-tight">
                Qué hacer y qué visitar
              </h2>
              <div className="w-16 h-0.5 bg-sun mx-auto mt-4" />
              <p className="text-midnight/60 mt-4 max-w-2xl mx-auto leading-relaxed">
                Playas, museos, naturaleza y pueblos con encanto — ordenados de más cerca a
                más lejos del apartamento, con la distancia exacta y un enlace directo a
                Google Maps o Apple Maps para llegar sin complicaciones.
              </p>
            </div>
          </ScrollReveal>

          <ol className="relative border-l-2 border-teal/15 ml-3 md:ml-6 space-y-8">
            {NEARBY_PLACES.map((place) => {
              const links = mapsLinks(place.mapsQuery);
              return (
                <li key={place.name} className="relative pl-8 md:pl-10">
                  <ScrollReveal>
                    {/* Punto en la línea de tiempo */}
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal border-4 border-sand" />

                    <div className="bg-white rounded-xl p-5 border border-midnight/5 hover:border-teal/20 hover:shadow-md hover:shadow-teal/5 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                        <div>
                          <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-teal bg-foam rounded-full px-2.5 py-0.5 mb-1.5">
                            {place.category}
                          </span>
                          <h3 className="font-display font-semibold text-midnight text-lg leading-snug">
                            {place.name}
                          </h3>
                        </div>
                        <span className="font-display text-terracotta md:text-2xl text-xl font-semibold whitespace-nowrap">
                          {place.km === 0 ? 'En la playa' : `${place.km} km`}
                        </span>
                      </div>

                      <p className="text-sm text-midnight/60 leading-relaxed mb-3">
                        {place.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <a
                          href={links.google}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-teal border border-teal/30 rounded-full px-3 py-1.5 hover:bg-teal hover:text-white hover:border-teal transition-colors duration-200"
                        >
                          <IconPin />
                          Google Maps
                        </a>
                        <a
                          href={links.apple}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-midnight/70 border border-midnight/15 rounded-full px-3 py-1.5 hover:bg-midnight hover:text-white hover:border-midnight transition-colors duration-200"
                        >
                          <IconPin />
                          Apple Maps
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                </li>
              );
            })}
          </ol>
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

// ============================================================
// Iconos — set lineal (stroke) consistente con la identidad visual
// ============================================================

function IconBed() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path d="M3 18v2" />
      <path d="M21 18v2" />
      <path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M3 14h18" />
    </svg>
  );
}

function IconWifi() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconSnowflake() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20" />
      <path d="M5 6l14 12" />
      <path d="M19 6L5 18" />
      <path d="M8 4l4 3 4-3" />
      <path d="M8 20l4-3 4 3" />
    </svg>
  );
}

function IconCooking() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Z" />
      <path d="M2 11h20" />
      <path d="M8 11V7" />
      <path d="M16 11V7" />
      <path d="M12 11V5" />
    </svg>
  );
}

function IconWasher() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="13" r="4.5" />
      <path d="M12 13a4.5 4.5 0 0 0 3-4" />
      <circle cx="7" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTv() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="13" rx="2" />
      <path d="M9 21h6" />
      <path d="M12 18v3" />
    </svg>
  );
}

function IconSunset() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 18a5 5 0 0 0-10 0" />
      <path d="M12 9v5" />
      <path d="m8.5 6.5 1.5 1.5" />
      <path d="m15.5 6.5-1.5 1.5" />
      <path d="M2 18h20" />
      <path d="M4 22h16" />
    </svg>
  );
}

function IconParking() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9" />
    </svg>
  );
}

function IconBeach() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22c4-3 8-3 10-1 2-2 6-2 10 1" />
      <path d="M12 13V3" />
      <path d="M12 3c3 1 4 4 4 6-3 0-5-2-4-6Z" />
      <path d="M12 9c-3 1-4 3-4 5" />
    </svg>
  );
}

function IconStore() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3" />
      <path d="M3 9h18l-1 3H4Z" />
      <path d="M5 12v8h14v-8" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

function IconFork() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3v6a2 2 0 0 0 4 0V3" />
      <path d="M9 9v12" />
      <path d="M17 3c-1.5 1-2 3-2 5s.5 3 2 3 2-1 2-3-.5-4-2-5Z" />
      <path d="M17 11v10" />
    </svg>
  );
}

function IconCity() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V9l6-4v16" />
      <path d="M20 21V13l-6-4v12" />
      <path d="M4 21h16" />
      <path d="M8 9h.01M8 13h.01M8 17h.01" />
    </svg>
  );
}

function IconLandmark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V10M9 21V10M15 21V10M19 21V10" />
      <path d="M2 10 12 3l10 7" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPlane() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5c.8-.8.8-2.2 0-3-.8-.8-2.2-.8-3 0L13 8 4.8 6.2c-.4-.1-.8 0-1 .3l-.7.7c-.3.3-.2.7.1.9L9 12l-3 3H3l-1 1 3 1 1 3 1-1v-3l3-3 4.2 5.8c.2.3.6.4.9.1l.7-.7c.3-.2.4-.6.3-1Z" />
    </svg>
  );
}
