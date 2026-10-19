const formatCLP = (value) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(value);

// Datos ficticios de la plantilla: reemplazar antes de publicar.
const COMPANY = {
  name: "Constructora Andina",
  shortName: "Andina",
  tagline: "Construimos tus sueños, edificamos el futuro",
  foundedYear: 2010,
  phone: "+56 9 1234 5678",
  phoneRaw: "+56912345678",
  email: "contacto@constructoraandina.cl",
  address: "Av. Providencia 1234, Providencia, Santiago, Chile",
  addressShort: "Av. Providencia 1234, Providencia, Santiago",
  hours: {
    weekdays: "Lunes a Viernes: 8:00 - 18:00",
    saturday: "Sábado: 9:00 - 13:00",
    sunday: "Domingo: Cerrado"
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/"
  }
};

const STATS = [
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 350, suffix: "+", label: "Proyectos entregados" },
  { value: 280, suffix: "+", label: "Clientes satisfechos" },
  { value: 65, suffix: "", label: "Profesionales" }
];

const SERVICES = [
  {
    id: "residencial",
    icon: "home",
    title: "Construcción Residencial",
    description: "Casas y departamentos diseñados a medida, con acabados de primera y eficiencia constructiva."
  },
  {
    id: "comercial",
    icon: "building",
    title: "Construcción Comercial",
    description: "Oficinas, locales y centros comerciales con diseño moderno y funcionalidad operativa."
  },
  {
    id: "remodelacion",
    icon: "wrench",
    title: "Remodelaciones",
    description: "Renovamos espacios existentes optimizando distribución, iluminación y acabados."
  },
  {
    id: "diseno",
    icon: "blueprint",
    title: "Diseño Arquitectónico",
    description: "Proyectos arquitectónicos completos: planos, modelado 3D y permisos municipales."
  },
  {
    id: "civil",
    icon: "crane",
    title: "Obra Civil",
    description: "Infraestructura urbana, pavimentación, muros de contención y obras de gran escala."
  },
  {
    id: "instalaciones",
    icon: "bolt",
    title: "Instalaciones",
    description: "Sistemas eléctricos, sanitarios, gas y domótica con certificación profesional."
  },
  {
    id: "gestion",
    icon: "clipboard",
    title: "Gestión de Proyectos",
    description: "Dirección, supervisión y control integral de obras con reportes de transparencia total."
  },
  {
    id: "consultoria",
    icon: "chat",
    title: "Consultoría",
    description: "Asesoramiento técnico, presupuestos, peritajes y estudios de factibilidad."
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Residencial Los Olivos",
    category: "residencial",
    location: "Santiago, Las Condes",
    year: 2024,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Torre Empresarial San Pablo",
    category: "comercial",
    location: "Santiago, Providencia",
    year: 2023,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Casa Moderna La Reina",
    category: "residencial",
    location: "Santiago, La Reina",
    year: 2024,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Planta Industrial San Bernardo",
    category: "industrial",
    location: "San Bernardo",
    year: 2023,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Remodelación Apartamento Ñuñoa",
    category: "remodelacion",
    location: "Santiago, Ñuñoa",
    year: 2024,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "Centro Comercial Plaza Norte",
    category: "comercial",
    location: "Santiago, Independencia",
    year: 2022,
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    title: "Bodega Industrial Quilicura",
    category: "industrial",
    location: "Santiago, Quilicura",
    year: 2023,
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    title: "Casa de Campo Colina",
    category: "residencial",
    location: "Colina",
    year: 2024,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 9,
    title: "Renovación Oficinas Vitacura",
    category: "remodelacion",
    location: "Santiago, Vitacura",
    year: 2024,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 10,
    title: "Edificio Multifamiliar Macul",
    category: "residencial",
    location: "Santiago, Macul",
    year: 2022,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 11,
    title: "Local Comercial San Miguel",
    category: "comercial",
    location: "Santiago, San Miguel",
    year: 2023,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 12,
    title: "Complejo Industrial Pudahuel",
    category: "industrial",
    location: "Pudahuel",
    year: 2024,
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80"
  }
];

const TEAM = [
  {
    name: "Carlos Mendoza",
    role: "Director General",
    bio: "Ingeniero Civil con más de 20 años de experiencia en proyectos de gran envergadura.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Ana Rodríguez",
    role: "Arquitecta Senior",
    bio: "Especialista en diseño residencial y comercial, con enfoque en sostenibilidad.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Luis Pérez",
    role: "Jefe de Obra",
    bio: "Maestro constructor con amplia experiencia en dirección y supervisión de obras.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "María Torres",
    role: "Gerente de Proyectos",
    bio: "MBA con certificación PMP, gestiona el portafolio de proyectos y atención al cliente.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
  }
];

const TESTIMONIALS = [
  {
    name: "Roberto Quispe",
    role: "Propietario - Casa Miraflores",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80",
    text: "Excelente trabajo. Cumplieron los plazos, el presupuesto y la calidad superó mis expectativas. Recomendados al 100%."
  },
  {
    name: "Patricia Vega",
    role: "CEO - Grupo Comercial Norte",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "Profesionales serios y comprometidos. Construyeron nuestras oficinas en tiempo récord sin sacrificar calidad."
  },
  {
    name: "José Ramírez",
    role: "Inversionista Inmobiliario",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "He trabajado con varias constructoras y Andina es, sin duda, la mejor. Su transparencia y seriedad son notables."
  }
];

const PRICING = [
  {
    id: "basico",
    price: 650000,
    title: "Plan Básico",
    description: "Ideal para proyectos pequeños y remodelaciones puntuales.",
    highlighted: false,
    items: [
      { included: true, text: "Diseño arquitectónico básico" },
      { included: true, text: "Presupuesto detallado" },
      { included: true, text: "Supervisión mensual" },
      { included: true, text: "Garantía de 1 año" },
      { included: false, text: "Modelado 3D" },
      { included: false, text: "Gestión de permisos" },
      { included: false, text: "Acabados premium" }
    ]
  },
  {
    id: "profesional",
    price: 950000,
    title: "Plan Profesional",
    description: "La opción más popular. Equilibrio perfecto entre calidad y precio.",
    highlighted: true,
    items: [
      { included: true, text: "Diseño arquitectónico completo" },
      { included: true, text: "Modelado 3D y renders" },
      { included: true, text: "Gestión de permisos" },
      { included: true, text: "Supervisión semanal" },
      { included: true, text: "Garantía de 3 años" },
      { included: true, text: "Acabados estándar" },
      { included: false, text: "Acabados premium" }
    ]
  },
  {
    id: "premium",
    price: 1350000,
    title: "Plan Premium",
    description: "Servicio VIP llave en mano con los mejores acabados del mercado.",
    highlighted: false,
    items: [
      { included: true, text: "Diseño arquitectónico premium" },
      { included: true, text: "Modelado 3D y realidad virtual" },
      { included: true, text: "Gestión integral de permisos" },
      { included: true, text: "Supervisión diaria" },
      { included: true, text: "Garantía de 5 años" },
      { included: true, text: "Acabados premium importados" },
      { included: true, text: "Asesoría post-entrega" }
    ]
  }
];

const COURSES = [
  {
    id: 1,
    title: "Albañilería y Construcción Básica",
    description: "Aprende las técnicas fundamentales de construcción, mezclas, muros y acabados.",
    instructor: "Ing. Roberto Salazar",
    duration: "20 horas",
    price: 85000,
    days: ["Lunes", "Miércoles"],
    hours: "18:00 - 21:00",
    level: "Principiante",
    category: "construcción"
  },
  {
    id: 2,
    title: "Diseño de Interiores Residencial",
    description: "Convierte espacios en ambientes funcionales y estéticamente atractivos.",
    instructor: "Arq. Laura Castillo",
    duration: "16 horas",
    price: 105000,
    days: ["Martes", "Jueves"],
    hours: "19:00 - 21:30",
    level: "Intermedio",
    category: "diseño"
  },
  {
    id: 3,
    title: "Seguridad y Salud en Obra",
    description: "Normativas, equipos de protección y prevención de riesgos laborales.",
    instructor: "Ing. Miguel Huamán",
    duration: "12 horas",
    price: 70000,
    days: ["Sábado"],
    hours: "09:00 - 13:00",
    level: "Todos",
    category: "seguridad"
  },
  {
    id: 4,
    title: "Presupuestos y Costos de Obra",
    description: "Aprende a elaborar presupuestos profesionales con software especializado.",
    instructor: "Econ. Fernando Ríos",
    duration: "24 horas",
    price: 120000,
    days: ["Viernes", "Sábado"],
    hours: "18:00 - 22:00",
    level: "Intermedio",
    category: "gestión"
  },
  {
    id: 5,
    title: "Auto-construcción de Viviendas",
    description: "Guía práctica para construir tu propia casa paso a paso con supervisión profesional.",
    instructor: "Ing. Carlos Mendoza",
    duration: "30 horas",
    price: 140000,
    days: ["Domingo"],
    hours: "09:00 - 14:00",
    level: "Principiante",
    category: "construcción"
  },
  {
    id: 6,
    title: "Acabados y Detalles Finales",
    description: "Técnicas profesionales de pintura, pisos, enchapes y detalles decorativos.",
    instructor: "Maestro Pedro Gómez",
    duration: "18 horas",
    price: 95000,
    days: ["Miércoles", "Viernes"],
    hours: "19:00 - 22:00",
    level: "Intermedio",
    category: "construcción"
  }
];

const FAQ = [
  {
    q: "¿Cuánto cuesta el metro cuadrado construido?",
    a: "El costo varía según el tipo de proyecto, acabados y ubicación. Como referencia para esta plantilla, los planes parten desde $650.000 CLP por m². El valor final depende de la evaluación del proyecto. Te enviamos un presupuesto personalizado sin compromiso."
  },
  {
    q: "¿Cuánto tiempo toma construir una casa?",
    a: "Una vivienda unifamiliar de 150m² toma entre 4 y 6 meses. Edificios comerciales entre 8 y 18 meses, dependiendo de la complejidad y tamaño del proyecto."
  },
  {
    q: "¿Trabajan fuera de Santiago?",
    a: "Sí, tenemos experiencia en proyectos a nivel nacional. Los costos de logística y supervisión se cotizan por separado según la ubicación."
  },
  {
    q: "¿Ofrecen financiamiento?",
    a: "Trabajamos con bancos aliados que ofrecen tasas preferenciales para nuestros clientes. Te asesoramos en la gestión del crédito hipotecario o constructor."
  },
  {
    q: "¿Qué garantía ofrecen?",
    a: "Nuestros planes incluyen garantía de 1 a 5 años según el paquete contratado. Cubrimos defectos de construcción y estructurales bajo condiciones normales de uso."
  },
  {
    q: "¿Puedo visitar la obra durante la construcción?",
    a: "Por supuesto. Organizamos visitas guiadas semanales para que veas el avance de tu proyecto y resuelvas cualquier duda con el jefe de obra."
  }
];

const TIMELINE = [
  { year: 2010, title: "Fundación", text: "Nace Constructora Andina con un equipo de 5 profesionales en Santiago." },
  { year: 2014, title: "Primeros 50 proyectos", text: "Crecimiento sostenido en el sector residencial de la Región Metropolitana." },
  { year: 2017, title: "Expansión comercial", text: "Incorporamos el área de construcción comercial e industrial." },
  { year: 2020, title: "Certificación ISO", text: "Obtenemos certificación ISO 9001 en gestión de calidad." },
  { year: 2023, title: "300+ proyectos", text: "Superamos los 300 proyectos entregados en todo el país." },
  { year: 2026, title: "Innovación digital", text: "Implementamos modelado BIM y realidad virtual en todos los proyectos." }
];

window.APP_DATA = { formatCLP, COMPANY, STATS, SERVICES, PROJECTS, TEAM, TESTIMONIALS, PRICING, COURSES, FAQ, TIMELINE };