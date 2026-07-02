// ============================================================
// 🏖️ Apartamento Burriana Playa — Constantes Globales
// ============================================================

/** NAP — Name, Address, Phone (consistente para SEO Local) */
export const NAP = {
  name: 'Apartamento Burriana Playa',
  nameShort: 'Apartamento Burriana Playa',
  address: {
    street: 'Av. Mediterrània 20',
    city: 'Burriana',
    province: 'Castellón',
    zip: '12530',
    country: 'ES',
    full: 'Av. Mediterrània 20, 12530 Burriana, Castellón',
  },
  phone: '+34 622 738 667',
  email: 'borjaquer12@gmail.com',
  web: 'https://apartamentos-burriana.onrender.com',
} as const;

/** WhatsApp */
export const WHATSAPP = {
  /** Número en formato internacional SIN el '+' (ej: 346XXXXXXXX) */
  number: process.env.NEXT_PUBLIC_WHATSAPP || '34622738667',
  /** Mensaje por defecto */
  defaultMessage: '¡Hola! 🏖️ Me interesa alquilar el Apartamento Burriana Playa',
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
  title: 'Apartamento Burriana Playa — Reserva Directa',
  description:
    'Alquiler vacacional en primera línea de Playa Burriana. 3 dormitorios, 6 plazas, WiFi, aire acondicionado. Cerca de playas, Museo de la Naranja, El Clot y Arenal Sound. Reserva directa sin comisiones. ☀️',
  url: 'https://apartamentos-burriana.onrender.com',
  locale: 'es_ES',
  siteName: 'Apartamento Burriana Playa',
  images: ['/images/hero-salon.webp'],
  type: 'website' as const,
};

/**
 * Lugares y actividades de interés turístico cerca del apartamento,
 * ordenados de más cerca a más lejos (campo `km`).
 * `mapsQuery` se usa para generar enlaces a Google Maps y Apple Maps.
 */
export const NEARBY_PLACES = [
  {
    km: 0,
    name: 'Playa del Arenal de Burriana',
    category: 'Playa',
    description:
      'Más de 1 km de arena fina y aguas tranquilas con bandera azul, a 50 metros del apartamento. Vela, surf, kitesurf y paseos en kayak.',
    mapsQuery: 'Playa del Arenal, Burriana',
  },
  {
    km: 0,
    name: 'Alquiler de motos de agua, kayak y paddle surf',
    category: 'Actividad acuática',
    description:
      'Jet Ski Sail, en la misma Playa del Arenal: motos de agua, paddle surf individual y en grupo, kayak, banana boat y wakeboard.',
    mapsQuery: 'Jet Ski Sail, Burriana',
  },
  {
    km: 0,
    name: 'Festival Arenal Sound',
    category: 'Evento (verano)',
    description:
      'Uno de los grandes festivales de música de España, cada agosto en la misma playa de Burriana. Reserva con antelación en fechas de festival.',
    mapsQuery: 'Playa del Arenal, Burriana',
  },
  {
    km: 1.5,
    name: 'Museo de la Naranja',
    category: 'Cultura',
    description:
      'Único museo de Europa dedicado a la citricultura, en un edificio modernista. Repasa la historia del comercio de la naranja en la Plana Baixa.',
    mapsQuery: 'Museo de la Naranja, Burriana',
  },
  {
    km: 2,
    name: 'El Clot de la Mare de Déu',
    category: 'Naturaleza',
    description:
      'Paraje natural municipal con rutas a pie, remo fluvial y actividades deportivas en un entorno de gran valor ecológico.',
    mapsQuery: 'El Clot de la Mare de Déu, Burriana',
  },
  {
    km: 1,
    name: 'Basílica de El Salvador',
    category: 'Cultura',
    description:
      'Basílica menor del siglo XIII en el centro histórico de Burriana, a pocos minutos del apartamento.',
    mapsQuery: 'Basílica de El Salvador, Burriana',
  },
  {
    km: 6,
    name: 'Vila-real',
    category: 'Pueblo',
    description: 'Ciudad cercana con animada vida comercial y gastronómica, sede del Villarreal CF.',
    mapsQuery: 'Vila-real, Castellón',
  },
  {
    km: 7,
    name: 'Nules',
    category: 'Pueblo',
    description: 'Localidad vecina con playa propia y casco histórico tranquilo.',
    mapsQuery: 'Nules, Castellón',
  },
  {
    km: 7,
    name: 'Almassora',
    category: 'Pueblo',
    description: 'Municipio costero entre Burriana y Castellón, con su propio litoral.',
    mapsQuery: 'Almassora, Castellón',
  },
  {
    km: 12,
    name: 'El Grao de Castellón (puerto)',
    category: 'Puerto',
    description: 'Puerto deportivo y pesquero de Castellón, con paseo marítimo y restaurantes de pescado fresco.',
    mapsQuery: 'El Grao, Castellón de la Plana',
  },
  {
    km: 13,
    name: 'Castellón de la Plana',
    category: 'Ciudad',
    description: 'Capital de la provincia: casco histórico, Planetario, mercado central y amplia oferta comercial.',
    mapsQuery: 'Castellón de la Plana',
  },
  {
    km: 22,
    name: 'Benicàssim',
    category: 'Pueblo costero',
    description: 'Villas modernistas de principios del siglo XX en la Ruta de las Villas, playas y montaña del Desierto de las Palmas.',
    mapsQuery: 'Benicàssim, Castellón',
  },
  {
    km: 43,
    name: 'Oropesa del Mar',
    category: 'Pueblo costero',
    description: 'Calas y playas de aguas cristalinas, castillo medieval y un animado paseo marítimo.',
    mapsQuery: 'Oropesa del Mar, Castellón',
  },
  {
    km: 53,
    name: 'Valencia',
    category: 'Ciudad',
    description: 'Ciudad de las Artes y las Ciencias, casco histórico y playas urbanas — ideal para una excursión de un día.',
    mapsQuery: 'Valencia, España',
  },
  {
    km: 75,
    name: 'Peñíscola',
    category: 'Pueblo costero',
    description: 'Casco antiguo amurallado sobre una península rocosa, con el Castillo del Papa Luna asomado al Mediterráneo.',
    mapsQuery: 'Peñíscola, Castellón',
  },
] as const;

/** Genera enlaces a apps de mapas a partir de una consulta de texto */
export function mapsLinks(query: string) {
  const encoded = encodeURIComponent(query);
  return {
    google: `https://www.google.com/maps/search/?api=1&query=${encoded}`,
    apple: `https://maps.apple.com/?q=${encoded}`,
  };
}

/** Schema.org ItemList de los lugares turísticos cercanos (para rich results) */
export const SCHEMA_NEARBY_PLACES = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Qué hacer cerca de Apartamento Burriana Playa',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: NEARBY_PLACES.map((place, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': place.category === 'Playa' ? 'Beach' : 'TouristAttraction',
      name: place.name,
      description: place.description,
    },
  })),
} as const;

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
    latitude: 39.8278478,
    longitude: -0.1104436,
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
