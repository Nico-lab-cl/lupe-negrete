// Texto de la página de contacto y voluntariado. Se conserva el contenido que
// ya tenía la página; el aviso TCPA de SMS va literal porque es texto legal.

export const CONTACT_COPY = {
  es: {
    metaTitle: 'Contacto y Voluntariado · Lupe Negrete',
    metaDesc:
      'Ponte en contacto con la campaña de Lupe Negrete para Comisionado del Precinto 4 en Maverick County. Súmate como voluntario o comunícate por WhatsApp.',

    kicker: 'Participación ciudadana',
    h1a: 'Súmate al equipo',
    h1b: 'del Precinto 4',
    heroSub:
      'Esta campaña se gana caminando calle por calle y platicando vecino a vecino. Tu apoyo en tu colonia es fundamental para lograr el cambio.',

    formKicker: 'Voluntariado',
    formH: 'Dinos cómo quieres ayudar',
    formSub:
      'Deja tus datos y el equipo de campaña te contacta para coordinar contigo. No hace falta experiencia previa: hace falta ganas y conocer tu colonia.',

    fName: 'Nombre y apellido *',
    fEmail: 'Correo electrónico *',
    fPhone: 'Número de teléfono',
    fPhoneOpt: '(avisos por WhatsApp y SMS)',
    fZip: 'Código postal',
    fHelp: '¿En qué te gustaría ayudar?',
    phName: 'Ej. Juan Rodríguez',
    phEmail: 'ejemplo@correo.com',

    help1: 'Apoyo general en mi colonia',
    help2: 'Prestar mi cerca/reja para una lona',
    help3: 'Caminar y tocar puertas con Lupe',
    help4: 'Apoyar en mesas de votación temprana',
    help5: 'Difundir información en redes sociales',

    submit: 'Quiero ser voluntario →',
    // Texto legal TCPA: reproducir sin cambios.
    tcpa1:
      'Al ingresar tu teléfono, aceptas recibir mensajes de texto (SMS) informativos de la campaña de Guadalupe Lupe Negrete. Frecuencia de mensajes variable. Pueden aplicar tarifas de mensajes y datos. Responde',
    tcpaStop: 'STOP',
    tcpa2: 'para cancelar o',
    tcpaHelp: 'HELP',
    tcpa3: 'para ayuda. Consulta nuestra',
    privacy: 'Política de Privacidad',

    thanksH: '¡Gracias por sumarte!',
    thanksBody:
      'El equipo de campaña te contactará para coordinar. Mientras tanto, lo más valioso que puedes hacer es hablar con tres vecinos del Precinto 4.',
    thanksCta: 'Volver al inicio',

    waKicker: 'Canal inmediato',
    waH: 'Escríbenos por WhatsApp',
    waBody:
      '¿Quieres platicar con el equipo de campaña o reportar una situación en tu cuadra? Nuestro canal de WhatsApp está abierto para responderte directamente.',
    waBtn: 'Abrir chat de voluntariado →',

    infoKicker: 'Datos oficiales',
    infoH: 'Información de la campaña',
    infoAddress: 'Dirección postal',
    infoEmail: 'Correo electrónico',
    infoPhone: 'Teléfono de campaña',
    infoCommittee: 'Comité legal',
    infoFacebook: 'Facebook oficial',

    ctaKicker: 'Antes de irte',
    ctaH: 'Conoce por qué se postula',
    ctaBody:
      'Si llegaste hasta aquí, vale la pena que conozcas su historia y las tres propuestas concretas que llevará a la Corte de Comisionados.',
    ctaBio: 'Su historia →',
    ctaIssues: 'Ver sus propuestas →',
    ctaVote: 'Guía de votación →'
  },

  en: {
    metaTitle: 'Contact & Volunteer · Lupe Negrete',
    metaDesc:
      'Get in touch with the Lupe Negrete campaign for County Commissioner, Precinct 4 in Maverick County. Join as a volunteer or reach out via WhatsApp.',

    kicker: 'Get involved',
    h1a: 'Join the',
    h1b: 'Precinct 4 team',
    heroSub:
      'This campaign is won on the ground, walking street by street and speaking with neighbors. Your support in your colonia is key to bringing real change.',

    formKicker: 'Volunteer',
    formH: 'Tell us how you want to help',
    formSub:
      "Leave your details and the campaign team will reach out to coordinate with you. No experience needed — just the will to help and knowing your own neighborhood.",

    fName: 'Full name *',
    fEmail: 'Email address *',
    fPhone: 'Phone number',
    fPhoneOpt: '(WhatsApp and SMS alerts)',
    fZip: 'ZIP code',
    fHelp: 'How would you like to help?',
    phName: 'e.g. Juan Rodríguez',
    phEmail: 'you@example.com',

    help1: 'General support in my neighborhood',
    help2: 'Place a campaign sign on my yard/fence',
    help3: 'Canvass and knock doors with Lupe',
    help4: 'Support at early voting locations',
    help5: 'Share info on social media',

    submit: 'Count me in →',
    // TCPA legal text: reproduce as-is.
    tcpa1:
      'By providing your phone number, you agree to receive campaign text messages (SMS) from the Guadalupe Lupe Negrete Campaign. Msg frequency varies. Msg & data rates may apply. Reply',
    tcpaStop: 'STOP',
    tcpa2: 'to cancel,',
    tcpaHelp: 'HELP',
    tcpa3: 'for help. See our',
    privacy: 'Privacy Policy',

    thanksH: 'Thank you for stepping up!',
    thanksBody:
      "The campaign team will be in touch to coordinate. In the meantime, the most valuable thing you can do is talk to three neighbors here in Precinct 4.",
    thanksCta: 'Back to home',

    waKicker: 'Immediate channel',
    waH: 'Message us on WhatsApp',
    waBody:
      'Want to talk with the campaign team or report something happening on your block? Our WhatsApp line is open and we answer directly.',
    waBtn: 'Open volunteer chat →',

    infoKicker: 'Official details',
    infoH: 'Campaign information',
    infoAddress: 'Mailing address',
    infoEmail: 'Email address',
    infoPhone: 'Campaign phone',
    infoCommittee: 'Legal committee',
    infoFacebook: 'Official Facebook',

    ctaKicker: 'Before you go',
    ctaH: 'See why he is running',
    ctaBody:
      'Since you made it this far, it is worth knowing his story and the three concrete commitments he will take to the Commissioners Court.',
    ctaBio: 'His story →',
    ctaIssues: 'See his issues →',
    ctaVote: 'Voting guide →'
  }
};

export type ContactCopy = typeof CONTACT_COPY.es;
