export const SITE_TITLE = 'Terry Joel Casani Valencia';
export const SITE_DESCRIPTION = 'Laboratorista de Ingeniería en Telecomunicaciones';

export const SOCIAL_LINKS = {
  email: 'mailto:tcasaniv@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tcasaniv/',
  github: 'https://github.com/tcasaniv',
};

export const RESUME = {
  summary: "Bachiller en Ingeniería en Telecomunicaciones con experiencia en la organización, operación y mantenimiento de laboratorios de telecomunicaciones. Especializado en comunicaciones satelitales, manejo y configuración de equipos de laboratorio, y tecnologías de Radio Definida por Software (SDR). Competente en programación y automatización de procesos, con una formación continua en tecnologías emergentes.",
  experience: [
    {
      company: "Universidad Nacional de San Agustín de Arequipa",
      role: "Laboratorista en Ingeniería en Telecomunicaciones",
      period: "Feb 2024 - Actualidad",
      description: [
        "Gestión integral de laboratorios: mantenimiento, calibración y actualización de equipos técnicos.",
        "Asesoramiento técnico a docentes y estudiantes en el manejo de equipos como USRP, BladeRF, RTL-SDR y VNA.",
        "Desarrollo de simulaciones en MATLAB, GNU Radio y Python para aplicaciones educativas."
      ]
    },
    {
      company: "Instituto de Investigación Astronómico y Aeroespacial Pedro Paulet - UNSA",
      role: "Asistente de Investigación en Ingeniería en Telecomunicaciones",
      period: "Ene 2024 - Mar 2024",
      description: [
        "Investigación en comunicaciones satelitales y automatización de la recepción de imágenes con SATNOGS."
      ]
    },
    {
      company: "Instituto de Investigación Astronómico y Aeroespacial Pedro Paulet - UNSA",
      role: "Practicante Pre-Profesional de Ingeniería en Telecomunicaciones",
      period: "Jun 2023 - Dic 2023",
      description: [
        "Recepción y procesamiento de señales satelitales. Automatización de recepción de imágenes con SDR."
      ]
    },
    {
      company: "Grupo Informático Auditronic SRL",
      role: "Técnico de Mantenimiento y Soporte de Computadoras",
      period: "2018 - 2019",
      description: [
        "Ensamblaje, formateo, instalación de software y resolución de problemas técnicos."
      ]
    }
  ],
  education: [
    {
      institution: "Universidad Nacional de San Agustín de Arequipa",
      degree: "Estudiante de Maestría en Ciencias: Informática",
      period: "2025 - 2027"
    },
    {
      institution: "Universidad Nacional de San Agustín de Arequipa",
      degree: "Bachiller en Ingeniería En Telecomunicaciones",
      period: "2019 - 2024"
    },
    {
      institution: "Instituto Educación Superior Tecnológico Público 'Pedro P. Díaz'",
      degree: "Computación e Informática",
      period: "2018"
    }
  ],
  skills: [
    {
      category: "Comunicaciones Satelitales",
      items: "Operación y automatización de sistemas satelitales, procesamiento de señales."
    },
    {
      category: "Radio Definida por Software (SDR)",
      items: "Manejo de dispositivos (RTL-SDR, hackRF, bladeRF, USRP) y software (GNU Radio)."
    },
    {
      category: "Programación",
      items: "Python (Pandas, OpenCV, Flet), C, C++ (Arduino), HTML, CSS, Javascript, Node.js, Astro, Flet."
    },
    {
      category: "Sistemas Operativos",
      items: "Administración y uso eficiente de Linux, macOS y Windows."
    },
    {
      category: "Proyectos IoT",
      items: "Implementación con Arduino, sensores y actuadores."
    },
    {
      category: "Ofimática y Documentación",
      items: "MS Office, Google Workspace, LaTeX, Typst."
    }
  ],
  projects: [
    {
      title: "Tesis: Sistema de Transmisión de Imágenes APT con SDR (APT-Tx)",
      slug: "sistema-transmision-imagenes-apt-sdr",
      description: "Diseño e implementación de un software que simula pases de satélites meteorológicos NOAA. El sistema toma dos imágenes, las codifica al formato estándar APT (Automatic Picture Transmission), modula la señal de audio resultante en FM usando GNU Radio y la transmite a través de un dispositivo SDR (hackRF, bladeRF, USRP).",
      technologies: "Python, Flet, GNU Radio, SDR, Procesamiento de Señales",
      links: {
        github: "https://github.com/tcasaniv",
      },
      image: "",
      date: "2025"
    },
    {
      title: "Planificador y Gestor de Horarios Universitario",
      slug: "planificador-gestor-horarios-universitario",
      description: "Aplicación web para la gestión completa de horarios de una escuela profesional. Permite visualizar la planificación por ambientes (aulas, laboratorios), cursos, docentes y secciones, evitando conflictos y optimizando el uso de recursos.",
      technologies: "Astro.js, HTML, CSS, JS, JSON",
      links: {
         website: "#"
      },
      date: "2025"
    },
    {
      title: "Planificador de Planes de Estudio",
      slug: "planificador-planes-estudio",
      description: "Herramienta web para la visualización y gestión de planes de estudio universitarios. Genera la malla curricular en formato de diagrama de flujo, muestra las sumillas (resumen y temario) y detalla la información de cada asignatura, como créditos y pre-requisitos.",
      technologies: "Astro.js, HTML, CSS, JS, JSON",
      date: "2024"
    },
    {
      title: "Comparador de Imágenes (Diff-image)",
      slug: "comparador-imagenes-diff-image",
      description: "Software que compara dos imágenes para determinar su similitud estructural utilizando algoritmos como SSIM (Índice de Similitud Estructural) o MSE (Error Cuadrático Medio). Como resultado, genera una tercera imagen que resalta visualmente las diferencias encontradas.",
      technologies: "Python, OpenCV, Scikit-image, Flet",
      links: {
        github: "https://github.com/tcasaniv"
      },
      date: "2025"
    }
  ]
};