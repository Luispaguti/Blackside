
import { meri, alex, Icncommunity,CommunityImg1, question, CommunityImg2,CommunityImg3,CommunityImg4, people02,box,calendar, press, strong, wood1, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, users , price , woman  } from "../assets";

export const navLinks = [

  {
    id: "Instalaciones",
    title: "Instalaciones",
  },
  {
    id: "entreno",
    title: "Entreno",
  },
  {
    id: "equipo",
    title: "Equipo",
  },
  {
    id: "Comunidad",
    title: "Comunidad",
  },
  {
    id: "Suscripciones",
    title: "Suscripciones",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "La actividad física es una necesidad básica en mi vida. Rendir en mis entrenamientos y en mi trabajo aumenta mi seguridad y confianza.",
    name: "Alejandro Práxedes",
    title: "Founder & Coach",
    img: alex,
  },
  {
    id: "feedback-2",
    content:
      "Mi objetivo es mantenerme en forma y saludable para disfrutar el máximo tiempo posible con mi familia. ¿Cual es tu objetivo?",
    name: "Maria Gavilán",
    title: "Coach",
    img: meri,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Joaquin Doctor",
    title: "Founder Karasu BJJ",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Usarios",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "burpees",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Calorías",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const about = {
  icon: users,
  title: 'Our misson',
  subtitle1:
    'We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.',
  subtitle2:
    'The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.',
  link: 'Join Now',
};

export const work = {
  // icon: calendar,
  title: 'Training programs',
  programs: [
    {
      image: box,
      name: 'Resistance',
    },
    {
      image: press,
      name: 'Boxing',
    },
    {
      image: strong,
      name: 'Body Pump',
    },
    {
      image: wood1,
      name: 'Yoga',
    },
    {
      image: wood1,
      name: 'Full Body',
    },
    {
      image: wood1,
      name: 'Fitness',
    },
    {
      image: wood1,
      name: 'Battle Rope',
    },
  ],
};

export const pricing = {
  icon: price,
  title: 'Pricing plan',
  plans: [
    {
      name: 'Functional',
      price: '60',
      dolar: '$',
      mes:'/mes',
      number:'De lunes a viernes: ',
      list: [
        { name: 'Clases de entrenamiento funcional, ' },
      ],
      delay: 1300,
    },
    {
      name: 'Basic',
      price: '70',
      dolar: '$',
      mes:'/mes',
      number:'9 clases al mes a elegir entre: ',
      list: [
        { name: 'Fuerza y acondicionamiento anaeróbico, ' },
        { name: 'Halterofilia,' },
        { name: 'Tecnificación de halterofilia,' },
        { name: 'Tecnificación de gimnásticos,' },
        { name: 'Acondicionamiento aeróbico, ' },
        { name: 'Acondicionamiento de fuerza,' }
      ],
      price: '70',
      delay: 600,
    },
    {
      name: 'Medio',
      price: '80',
      dolar: '$',
      mes:'/mes',
      number:'14 clases al mes a elegir entre: ',
      list: [
        { name: 'Fuerza y acondicionamiento anaeróbico, ' },
        { name: 'Halterofilia,' },
        { name: 'Tecnificación de halterofilia,' },
        { name: 'Tecnificación de gimnásticos,' },
        { name: 'Acondicionamiento aeróbico, ' },
        { name: 'Acondicionamiento de fuerza,' }
      ],
      delay: 800,
    },
    
   
    
  ],
  plans2: [
    {
      name: 'Avanzado',
      price: '85',
      dolar: '$',
      mes:'/mes',
      number:'26 clases al mes a elegir entre: ',
      list: [
        { name: 'Fuerza y acondicionamiento anaeróbico, ' },
        { name: 'Halterofilia,' },
        { name: 'Tecnificación de halterofilia,' },
        { name: 'Tecnificación de gimnásticos,' },
        { name: 'Acondicionamiento aeróbico, ' },
        { name: 'Acondicionamiento de fuerza,' }
      ],
      pay:'Formas de pago: 85 € mes / 240 € trimestre / 460 € semestre .',
      delay: 1000,
    },
    {
      name: 'ExtraAvanzado',
      price: '95',
      dolar: '$',
      mes:'/mes',
      number:'48 clases al mes a elegir entre: ',
      list: [
        { name: 'Fuerza y acondicionamiento anaeróbico, ' },
        { name: 'Halterofilia,' },
        { name: 'Tecnificación de halterofilia,' },
        { name: 'Tecnificación de gimnásticos,' },
        { name: 'Acondicionamiento aeróbico, ' },
        { name: 'Acondicionamiento de fuerza,' }
      ],
      pay:'Formas de pago: 95 € mes / 270 € trimestre / 540 € semestre .',
      delay: 1200,
    },
    {
      price: 'Otros',
      list: [
        { name: 'Matricula 50 €' },
        { name: 'Cuota mantenimiento 40 € / mes' },
        { name: 'Clase extra (alumno) 10 €/sesión' },
        { name: 'Semana suelta 25 € / semana' },
        { name: 'Dropin 15 €/sesión' },
        { name: 'Cuota mantenimiento 40 € / mes' },
        { name: 'Semana suelta 25 € / semana' },
        { name: 'Bono 10 (anual) 100 € / bono' },
        { name: 'Dropin 15 €/sesión' },
      ],
      pay:'*Bonificaciones en matrícula al venir dos o más personas, descuentos a colectivos y a matrimonios.',
      delay: 1200,
    },
  ],
  plans3: [
    {
      type: 'Bonificación',
      name: 'FFCCSE, FAS, SAS y BOMBEROS',
      number:'Para aquellos a los que se les debería exigir estar en buena forma física como consecuencia de la profesión que realizan, hemos definido la siguiente propuesta de bonificación:',
      list: [
        { name: 'Bonificación del 75% en la primera matrícula ' },
        { name: 'Bonificación del 5% en tu suscripción mensual ' },
        { name: 'Bonificación extra del 5% si traes a un compañero (cuántos más traigas mayor bonificación).' },
      ],
      pay:'*No acumulable a otras promociones (pagos trimestrales/semestrales/promociones puntuales). En la segunda matrícula paga el 100%.',
      pay2:'*Solo domiciliado',
      delay: 1000,
    },
    {
      type: 'Bonificación',
      name: 'SUSCRIPCION PARA FAMILIAS',
      number:'Una suscripción única, compartida para toda la familia, donde tendréis acceso a un total de usos que distribuiréis como mejor os convenga. No podréis asistir al centro de manera simultánea, pero eso no supone ningún problema puesto que alguien debe quedarse con los peques. Las opciones que tendréis disponibles son las siguientes:',
      list: [
        { name: 'Bonificación del 50% en la matrícula.' },
        { name: 'Suscripción BSFB: 20 usos compartidos por 130€ al mes.' },
        { name: 'BSFM: 28 usos compartidos por 150€ al mes.' },
        { name: 'BSFA: 38 usos compartidos por 160€ al mes.' },
      ],
      pay:'De este modo, además del ahorro, podréis compartir los usos para que el mes que uno no pueda o quiera venir tanto pueda aprovecharlo el otro.',
      pay2:'*Solo domiciliado',
      delay: 1000,
    },
    {
      name: 'ESTUDIANTES',
      type: 'Bonificación',
      number: 'Si eres estudiante de la UCO tendrás:',
      list: [
        { name: 'una bonificación del 100% de la matrícula' },
        { name: 'y 2 cuotas de mantenimiento gratuitas para tus periodos de exámenes.' },
      
      ],
      delay: 1200,
    },
  ],
};
  

export const community = {
  icon: Icncommunity,
  title: 'Comunidad',
  testimonials: [
    {
      image: CommunityImg2,
      name: 'Mark A.',
      message:
        '“Great location, great price and great, helpful people. What to want more?”',
    },
    {
      image: CommunityImg1,
      name: 'Lauren K.',
      message:
        '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    },
    {
      image: CommunityImg3,
      name: 'Jhon D.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
    {
      image: CommunityImg4,
      name: 'Anne R.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
  ],
};
 
export const faq = {
  icon: question,
  title: 'FAQ',
  accordions: [
    {
      question: '¿Puedo probar antes?',
      answer:
        'Si no eres alumno y no nos conoces, tienes la posibilidad de realizar una prueba gratuita antes de apuntarte. Para realizar una segunda prueba, debes de abonar la clase por adelantado (15€) la cual te será descontada del importe que abones en la inmediata suscripción de alta, así como de tus créditos de clases de ese mes en curso.'
    },
    {
      question: '¿Tengo la edad adecuada?',
      answer:
        'No es necesario edad mínima y tampoco hay un límite máximo. Adaptaremos el entrenamiento a tu necesidad para que le saques el máximo partido. Si eres menor,necesitaremos hablar con tus representantes legales y tener la respectiva autorización firmada.',
    },
    {
      question: '¿Tengo que estar en forma para unirme a BlackSide?',
      answer:
        'No, nuestro sistema de entrenamiento es la herramienta más eficaz para estar enforma. Cuéntanos tus objetivos y te ayudamos a conseguirlos.',
    },
    {
      question: '¿Cuando se activa mi suscripción?',
      answer:
        'En el caso de las suscripciones mensuales se activan de día 1 a día 30-31. No se activan suscripciones de día 15 a 15 de mes siguiente. En caso de empezar a mitad de mes,puedes contratar una semana hasta completar el mes.',
    },
    {
      question: '¿Cuando pago mi suscripción?',
      answer:
        'La última semana del mes en curso, antes del inicio del nuevo mes. Pero tranquilo,nosotros te avisamos por la aplicación para que no se te olvide.',
    },
    {
      question: '¿Puedo empezar a mitad de mes?',
      answer:
        'Puedes completar el mes contratando semanas y activar una suscripción mensual cuando empiece el nuevo mes.',
    },
    {
      question: '¿Como me doy de baja?',
      answer:
        'Si realizas el pago en el centro avísanos con 2 semanas de antelación para darte de baja. Si, además realizas el pago por la APP, debes cancelar la tarjeta de tu perfil para que no te realicen el cargo en tu tarjeta. Si la baja no es definitiva, activa tu cuota de mantenimiento para no perder tus beneficios como alumnos (matrícula, bonificaciones, etc.).',
    },
    {
      question: '¿Como ahorro en mi suscripción?',
      answer:
        'Infórmate de los descuentos contratando trimestres, semestres, bonificaciones en matrícula cuando vienes acompañado, bonificaciones a FCSE, FAS, SAS, BOMBEROS y estudiantes UCO.',
    },
    {
      question: '¿Disponeis de agua?',
      answer:
        'Tenemos una pequeña tienda donde podrás comprar desde agua hasta bebidas energéticas y con carbohidratos para tu entrenamiento, así como suplementación y ropa.',
    },
    {
      question: '¿Puedo ducharme allí?',
      answer:
        'Si, tenemos duchas y agua caliente para que puedas asearte después de tus entrenamientos.',
    },
    {
      question: '¿Dónde puedo dejar mis cosas?',
      answer:
        'Disponemos de taquillas para que guardes tus cosas durante tu sesión de entrenamiento.',
    },
  ],
};

export const join = {
  image: woman,
  title: 'Quieres pasarlo bien & ponerte en forma?',
  subtitle:
    ' En BLACKSIDE,  TE AYUDAMOS A  MEJORAR DENTRO  DEL GIMNASIO PARA QUE PUEDAS VIVIR  PLENAMENTE FUERA DE EL ',
  btnText: 'Unete',
};
