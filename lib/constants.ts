// ============================================================
// 🏖️ Papa Piso Playa Burriana — Constantes Globales
// ============================================================

/** NAP — Name, Address, Phone (consistente para SEO Local) */
export const NAP = {
  name: 'Papa Piso Playa Burriana',
  nameShort: 'Papa Piso',
  address: {
    street: 'Av. Mediterrània 19',
    city: 'Burriana',
    province: 'Castellón',
    zip: '12530',
    country: 'ES',
    full: 'Av. Mediterrània 19, 12530 Burriana, Castellón',
  },
  phone: '+34 6XX XXX XXX', // Reemplazar con nº real
  email: 'info@papapisoburriana.com',
  web: 'https://apartamentos-burriana.onrender.com',
} as const;

/** WhatsApp */
export const WHATSAPP = {
  /** Número en formato internacional SIN el '+' (ej: 346XXXXXXXX) */
  number: process.env.NEXT_PUBLIC_WHATSAPP || '346XXXXXXXX',
  /** Mensaje por defecto */
  defaultMessage: '¡Hola! 🏖️ Me interesa alquilar el Papa Piso Playa Burriana',
  /** URL base wa.me */
  get url() {
    return `https://wa.me/${this.number}`;
  },
  /** Generar URL con mensaje personalizado */
  messageUrl(msg: string): string {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(msg)}`;
  },
} as const;

/** Metadata para SEO */
export const SITE = {
  title: 'Apartamento Playa Burriana | Papa Piso — Reserva Directa',
  description:
    'Alquiler vacacional en primera línea de Playa Burriana. 3 dormitorios, 6 plazas, WiFi, aire acondicionado. Reserva directa sin comisiones. ☀️',
  url: 'https://apartamentos-burriana.onrender.com',
  locale: 'es_ES',
  siteName: 'Papa Piso Playa Burriana',
  images: ['/images/hero-salon.jpg'],
  type: 'website' as const,
};

/** Schema.org VacationRental (JSON-LD) */
export const SCHEMA_VACATION_RENTAL = {
  '@context': 'https://schema.org',
  '@type': 'VacationRental',
  name: NAP.name,
  description: SITE.description,
  image: SITE.images[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: NAP.address.street,
    addressLocality: NAP.address.city,
    addressRegion: NAP.address.province,
    postalCode: NAP.address.zip,
    addressCountry: NAP.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.8833, // Aprox Burriana
    longitude: -0.0833,
  },
  telephone: NAP.phone,
  email: NAP.email,
  url: SITE.url,
  numberOfBedrooms: 3,
  numberOfBathroomsTotal: 1,
  numberOfRooms: 4,
  occupancy: {
    '@type': 'QuantitativeValue',
    maxValue: 6,
    value: 6,
    unitText: 'personas',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'WiFi gratuito', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Aire acondicionado', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Cocina completa', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Lavadora', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'TV', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Balcón', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Vistas al mar', value: true },
  ],
  petAllowed: null, // Cambiar a true/false según política
  checkinTime: '16:00',
  checkoutTime: '11:00',
  priceRange: '€€',
  // AggregateRating se añadirá cuando haya reseñas
} as const;

/** Configuración del calendario de disponibilidad */
export const CALENDAR = {
  monthsShown: 2,
  minDate: new Date(),
  cacheRevalidate: 1800, // 30 min en segundos
} as const;

/** Rutas de navegación interna */
export const ROUTES = {
  home: '/',
  calendar: '#calendario',
  gallery: '#galeria',
  prices: '#precios',
  reviews: '#resenas',
} as const;
