import sedeChillan from "@/assets/sede-chillan.jpg";
import sedeRetroChillan from "@/assets/sede-retro-chillan.jpg";
import sedeLosAngeles from "@/assets/sede-los-angeles.jpg";
import sedeRetroTemuco from "@/assets/sede-retro-temuco.jpg";

export type Sede = {
  slug: string;
  nombre: string;
  shortName: string;
  ciudad: string;
  region: string;
  direccion: string;
  rating: number;
  reviews: number;
  horario: { label: string; value: string }[];
  whatsapp?: string;
  whatsappLink?: string;
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  image: string;
  tagline: string;
  servicios: { titulo: string; items: string[] }[];
  testimonios: { nombre: string; texto: string }[];
  staff: { nombre: string; rol: string; imagen: string }[];
};

export const SEDES: Sede[] = [
  {
    slug: "chillan",
    nombre: "FFitness Chillán",
    shortName: "Chillán",
    ciudad: "Chillán",
    region: "Región de Ñuble",
    direccion: "Constitución 1157, 3800794 Chillán",
    rating: 4.5,
    reviews: 111,
    horario: [
      { label: "Lun a Vie", value: "06:30 – 23:00" },
      { label: "Sábado", value: "09:00 – 19:00" },
      { label: "Domingo / Festivos", value: "Consultar" },
    ],
    whatsapp: "+56 9 6813 2366",
    whatsappLink: "https://wa.me/56968132366",
    instagram: "@ffitnesschillan",
    image: sedeChillan,
    tagline: "El lugar donde la disciplina se transforma en resultados.",
    servicios: [
      { titulo: "Musculación", items: ["Gran variedad de máquinas", "Equipamiento completo", "Zona de fuerza", "Pesas libres"] },
      { titulo: "Cardio", items: ["Máquinas cardiovasculares", "Entrenamiento funcional"] },
      { titulo: "Actividades", items: ["Clases", "Eventos", "Promociones del mes"] },
      { titulo: "Instalaciones", items: ["Gimnasio multinivel", "Zonas de entrenamiento", "Ambiente energético"] },
    ],
    testimonios: [
      { nombre: "Cliente Google", texto: "Lindo gym, buenas máquinas y un ambiente muy entretenido con estilo moderno." },
      { nombre: "Cliente Google", texto: "Gran variedad de equipamiento y espacio para entrenar fuerte." },
    ],
    staff: [
      { nombre: "Carlos Muñoz", rol: "Jefe de Local", imagen: "FOTO_JEFE_LOCAL_CHILLAN" },
      { nombre: "Valentina Soto", rol: "Nutricionista", imagen: "FOTO_NUTRICIONISTA_CHILLAN" },
      { nombre: "Matías Fernández", rol: "Staff", imagen: "FOTO_STAFF_1_CHILLAN" },
      { nombre: "Camila Rojas", rol: "Staff", imagen: "FOTO_STAFF_2_CHILLAN" },
      { nombre: "Diego Pérez", rol: "Staff", imagen: "FOTO_STAFF_3_CHILLAN" },
      { nombre: "Sofía Morales", rol: "Staff", imagen: "FOTO_STAFF_4_CHILLAN" },
    ],
  },
  {
    slug: "retro-chillan",
    nombre: "FFitness Retro Chillán",
    shortName: "Retro Chillán",
    ciudad: "Chillán",
    region: "Región de Ñuble",
    direccion: "Camino a Mariposas 4003, Chillán",
    rating: 4.4,
    reviews: 130,
    horario: [
      { label: "Lun a Vie", value: "06:30 – 22:30" },
      { label: "Sábado", value: "09:00 – 19:00" },
    ],
    whatsapp: "+56 9 7718 5557",
    whatsappLink: "https://wa.me/56977185557",
    instagram: "@ffitness_retro_chillan",
    facebook: "FFitness Retro | Chillán",
    image: sedeRetroChillan,
    tagline: "Old school energy. Equipamiento moderno. Comunidad real.",
    servicios: [
      { titulo: "Sala Musculación", items: ["Máquinas modernas", "Zona cardio", "Pesas libres"] },
      { titulo: "Clases Grupales", items: ["Spinning", "Funcional", "Clases especiales", "Horarios flexibles"] },
      { titulo: "Promociones", items: ["Planes FULL", "Campañas especiales", "Preventas"] },
    ],
    testimonios: [
      { nombre: "Cliente Google", texto: "Excelente ambiente, buenas máquinas y un lugar ideal para entrenar." },
      { nombre: "Cliente Google", texto: "Equipamiento completo y comunidad muy motivadora." },
    ],
    staff: [
      { nombre: "Roberto Sánchez", rol: "Jefe de Local", imagen: "FOTO_JEFE_LOCAL_RETRO_CHILLAN" },
      { nombre: "Andrea Torres", rol: "Nutricionista", imagen: "FOTO_NUTRICIONISTA_RETRO_CHILLAN" },
      { nombre: "Felipe Castro", rol: "Staff", imagen: "FOTO_STAFF_1_RETRO_CHILLAN" },
      { nombre: "Lucía García", rol: "Staff", imagen: "FOTO_STAFF_2_RETRO_CHILLAN" },
      { nombre: "Javier López", rol: "Staff", imagen: "FOTO_STAFF_3_RETRO_CHILLAN" },
      { nombre: "María González", rol: "Staff", imagen: "FOTO_STAFF_4_RETRO_CHILLAN" },
    ],
  },
  {
    slug: "los-angeles",
    nombre: "FFitness Los Ángeles",
    shortName: "Los Ángeles",
    ciudad: "Los Ángeles",
    region: "Región del Biobío",
    direccion: "Almagro 443, Los Ángeles",
    rating: 4.6,
    reviews: 29,
    horario: [
      { label: "Lun a Vie", value: "07:00 – 22:30" },
      { label: "Sábado", value: "09:00 – 18:00" },
    ],
    whatsapp: "+56 9 4495 9811",
    whatsappLink: "https://wa.me/56944959811",
    instagram: "@ffitness_losangeles",
    image: sedeLosAngeles,
    tagline: "Amplitud, atención personalizada y máquinas para entrenar fuerte.",
    servicios: [
      { titulo: "Instalaciones", items: ["Sala amplia", "Máquinas variadas", "Zona cardio", "Pesas"] },
      { titulo: "Experiencia", items: ["Ambiente limpio", "Staff cercano", "Atención personalizada", "Equipamiento colorido"] },
    ],
    testimonios: [
      { nombre: "Cliente Google", texto: "Un gimnasio amplio, limpio y con un equipo siempre dispuesto a ayudar." },
      { nombre: "Cliente Google", texto: "Excelente atención y muchas máquinas para entrenar." },
    ],
    staff: [
      { nombre: "Pedro Ramírez", rol: "Jefe de Local", imagen: "FOTO_JEFE_LOCAL_LOS_ANGELES" },
      { nombre: "Daniela Silva", rol: "Nutricionista", imagen: "FOTO_NUTRICIONISTA_LOS_ANGELES" },
      { nombre: "Nicolás Vargas", rol: "Staff", imagen: "FOTO_STAFF_1_LOS_ANGELES" },
      { nombre: "Isabella Mendoza", rol: "Staff", imagen: "FOTO_STAFF_2_LOS_ANGELES" },
      { nombre: "Tomás Herrera", rol: "Staff", imagen: "FOTO_STAFF_3_LOS_ANGELES" },
      { nombre: "Emilia Castro", rol: "Staff", imagen: "FOTO_STAFF_4_LOS_ANGELES" },
    ],
  },
  {
    slug: "retro-temuco",
    nombre: "FFitness Retro Temuco",
    shortName: "Retro Temuco",
    ciudad: "Temuco",
    region: "Región de La Araucanía",
    direccion: "Arturo Prat 728, Temuco",
    rating: 3.4,
    reviews: 36,
    horario: [
      { label: "Lun a Vie", value: "06:30 – 22:30" },
      { label: "Sábado", value: "09:00 – 18:00" },
    ],
    whatsapp: "+56 9 5830 9880",
    whatsappLink: "https://wa.me/56958309880",
    instagram: "@ffitness_retro_temuco",
    image: sedeRetroTemuco,
    tagline: "Música, ventilación y máquinas para entrenar sin límites.",
    servicios: [
      { titulo: "Equipamiento", items: ["Muchas máquinas", "Mancuernas", "Zona fuerza"] },
      { titulo: "Experiencia", items: ["Buena ventilación", "Música motivadora", "Agua purificada", "Profes atentos"] },
    ],
    testimonios: [
      { nombre: "Cliente Google", texto: "Gran cantidad de máquinas, mucho espacio y excelente atención." },
      { nombre: "Cliente Google", texto: "Equipamiento completo y un ambiente perfecto para entrenar." },
    ],
    staff: [
      { nombre: "Gonzalo Ortiz", rol: "Jefe de Local", imagen: "FOTO_JEFE_LOCAL_RETRO_TEMUCO" },
      { nombre: "Fernanda Reyes", rol: "Nutricionista", imagen: "FOTO_NUTRICIONISTA_RETRO_TEMUCO" },
      { nombre: "Benjamín Fuentes", rol: "Staff", imagen: "FOTO_STAFF_1_RETRO_TEMUCO" },
      { nombre: "Antonia Pavez", rol: "Staff", imagen: "FOTO_STAFF_2_RETRO_TEMUCO" },
      { nombre: "Sebastián Navarro", rol: "Staff", imagen: "FOTO_STAFF_3_RETRO_TEMUCO" },
      { nombre: "Valentina Ríos", rol: "Staff", imagen: "FOTO_STAFF_4_RETRO_TEMUCO" },
    ],
  },
];

export const WHATSAPP_GENERAL = "https://wa.me/56968132366";

export const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/sedes", label: "Sedes" },
  { to: "/planes", label: "Planes" },
  { to: "/testimonios", label: "Testimonios" },
  { to: "/blog", label: "Blog" },
] as const;