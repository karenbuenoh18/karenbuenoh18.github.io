import type { WorkProject } from './types';

/**
 * Categorised as freelance because it was delivered for a community
 * client rather than self-initiated. Move `category` to 'personal' if
 * you would rather frame it as a side product.
 */
export const footballCommunity: WorkProject = {
  slug: 'amateur-football-platform',
  category: 'freelance',
  featured: true,
  order: 1,
  period: '2024',
  published: true,
  status: 'shipped',

  tech: ['Flutter', 'Riverpod', 'Firebase', 'Firestore', 'Cloud Functions', 'Geohash', 'FCM'],

  flow: [
    'Flutter · Riverpod',
    'Firebase Auth · role claims',
    'Firestore · geohash',
    'Cloud Functions',
    'FCM',
  ],

  metrics: [
    {
      value: '24',
      label: {
        en: 'Granular permissions across 3 roles',
        es: 'Permisos granulares sobre 3 roles',
      },
    },
    {
      value: '3',
      label: {
        en: 'User roles: player, coach, owner',
        es: 'Roles de usuario: jugador, entrenador, dueño',
      },
    },
    {
      value: '5/10/20 km',
      label: {
        en: 'Geohash discovery radii',
        es: 'Radios de descubrimiento por geohash',
      },
    },
    {
      value: '2',
      label: {
        en: 'App stores published: iOS and Android',
        es: 'Tiendas publicadas: iOS y Android',
      },
    },
  ],

  title: {
    en: 'Amateur Football Community Platform',
    es: 'Plataforma para comunidad de fútbol amateur',
  },

  domain: {
    en: 'Mobile app · Cloud',
    es: 'App móvil · Cloud',
  },

  tagline: {
    en: 'An amateur football community in one app: players find nearby teams and matches, while coaches and owners run their squads.',
    es: 'Una comunidad de fútbol amateur en una sola app: los jugadores encuentran equipos y partidos cerca, mientras entrenadores y dueños administran sus plantillas.',
  },

  role: {
    en: 'Full-stack development and technical lead: architecture, data model, the multi-role permission system and publishing to both app stores.',
    es: 'Desarrollo full-stack y liderazgo técnico: arquitectura, modelo de datos, el sistema de permisos multi-rol y la publicación en ambas tiendas.',
  },

  context: {
    en: 'An amateur football community with three distinct profiles — player, coach, owner — that needed a single platform to discover matches, assemble teams and handle the day-to-day admin.',
    es: 'Una comunidad de fútbol amateur con tres perfiles distintos — jugador, entrenador, dueño — que necesitaba una sola plataforma para descubrir partidos, armar equipos y llevar la administración del día a día.',
  },

  problem: {
    en: 'Build a multi-role system with granular permissions, geolocation-based discovery and reliable request-and-invite flows, while keeping a denormalised database consistent and the experience stable on both iOS and Android.',
    es: 'Construir un sistema multi-rol con permisos granulares, descubrimiento por geolocalización y flujos fiables de solicitud e invitación, manteniendo consistente una base denormalizada y la experiencia estable en iOS y Android.',
  },

  solution: {
    en: 'Anything sensitive — role assignment, squad counters — was delegated to Cloud Functions as the single source of truth, so the client app can never be the thing that corrupts a count. Firestore stays denormalised and fast, serving proximity queries by geohash across 5, 10 and 20 km radii plus keyword search. Permissions are resolved through navigation guards and custom auth claims rather than scattered checks in the UI.',
    es: 'Todo lo sensible — asignación de roles, contadores de plantilla — se delegó a Cloud Functions como única fuente de verdad, para que la app cliente nunca pueda ser lo que corrompe un conteo. Firestore se queda denormalizado y rápido, sirviendo consultas por cercanía con geohash en radios de 5, 10 y 20 km más búsqueda por keywords. Los permisos se resuelven con guards de navegación y custom claims en lugar de comprobaciones dispersas en la UI.',
  },

  architecture: {
    en: 'A Flutter client with Riverpod state, organised as Clean Architecture per feature. Firebase Auth carries role claims; Firestore holds a denormalised model indexed by geohash for proximity search; Cloud Functions own every state transition that must not be trusted to the client; FCM delivers invites and match notifications.',
    es: 'Un cliente Flutter con estado en Riverpod, organizado como Clean Architecture por feature. Firebase Auth carga los claims de rol; Firestore guarda un modelo denormalizado indexado por geohash para búsqueda por cercanía; Cloud Functions son dueñas de cada transición de estado que no se le puede confiar al cliente; FCM entrega invitaciones y notificaciones de partido.',
  },

  decisions: {
    en: [
      'Clean Architecture per feature (domain, data, presentation) to isolate domains and leave room for the team to grow.',
      'Denormalised Firestore with geohash instead of a relational backend, prioritising fast reads and proximity queries over normalised purity.',
      'Granular permissions — 24 permissions across 3 roles — centralised behind navigation guards and custom claims from day one.',
      'Cloud Functions as the source of truth for role activation and counters, closing the door on client-side race conditions.',
    ],
    es: [
      'Clean Architecture por feature (domain, data, presentation) para aislar dominios y dejar espacio a que el equipo crezca.',
      'Firestore denormalizado con geohash en lugar de un backend relacional, priorizando lecturas rápidas y consultas por cercanía sobre la pureza normalizada.',
      'Permisos granulares — 24 permisos sobre 3 roles — centralizados detrás de guards de navegación y custom claims desde el día uno.',
      'Cloud Functions como fuente de verdad para la activación de roles y los contadores, cerrando la puerta a race conditions del lado del cliente.',
    ],
  },

  challenges: {
    en: [
      'Race conditions when activating roles, and cold-start crashes on iOS that meant debugging the native lifecycle rather than the Dart code.',
      'Handling system permission prompts without degrading the onboarding experience.',
      'Auditing half-finished features — UI present, backend absent — to prioritise the technical debt honestly before handover.',
    ],
    es: [
      'Race conditions al activar roles y crashes en arranque en frío de iOS que implicaron depurar el ciclo de vida nativo en lugar del código Dart.',
      'Manejar los diálogos de permisos del sistema sin degradar la experiencia de onboarding.',
      'Auditar features a medias — UI presente, backend ausente — para priorizar la deuda técnica con honestidad antes de la entrega.',
    ],
  },

  learnings: {
    en: [
      'Denormalisation buys read speed and charges you in consistency: the Cloud Functions become the source of truth whether you planned for that or not.',
      'A multi-role permission model has to be centralised from day one. Retrofitting it means touching every screen.',
      'A technical audit before handover separates what looks finished from what actually works.',
    ],
    es: [
      'La denormalización compra velocidad de lectura y te cobra en consistencia: las Cloud Functions se vuelven la fuente de verdad, lo hayas planeado o no.',
      'Un modelo de permisos multi-rol tiene que centralizarse desde el día uno. Meterlo después significa tocar todas las pantallas.',
      'Una auditoría técnica antes de la entrega separa lo que se ve terminado de lo que de verdad funciona.',
    ],
  },

  impact: {
    en: [
      'Published on both the iOS and Android stores from a single Flutter codebase.',
      'Three roles and 24 permissions served by one centralised authorisation model.',
      'Proximity discovery working across 5, 10 and 20 km radii without a relational backend.',
      'Cold-start crashes on iOS resolved at the native lifecycle level.',
    ],
    es: [
      'Publicada en las tiendas de iOS y Android desde un solo código Flutter.',
      'Tres roles y 24 permisos atendidos por un único modelo de autorización centralizado.',
      'Descubrimiento por cercanía funcionando en radios de 5, 10 y 20 km sin backend relacional.',
      'Crashes de arranque en frío en iOS resueltos a nivel del ciclo de vida nativo.',
    ],
  },
};
