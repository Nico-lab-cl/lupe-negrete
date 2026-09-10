// Página de gracias: a donde llega quien deja sus datos en cualquier
// formulario del sitio. El agradecimiento reutiliza el texto del diseño
// original y se amplía con los tres pasos siguientes.

export const THANKS_COPY = {
  es: {
    metaTitle: '¡Gracias por sumarte! · Lupe Negrete',
    metaDesc:
      'Tu registro con la campaña de Lupe Negrete para Comisionado del Precinto 4 quedó confirmado.',

    kicker: 'Registro confirmado',
    h1a: '¡Gracias',
    h1b: 'por sumarte!',
    lead: 'Tu registro quedó confirmado.',
    sub: 'Te avisaremos dónde votar, cuándo abren las urnas y qué pasa con las calles de tu colonia. Mientras tanto, hay tres cosas que puedes hacer hoy mismo.',

    stepsKicker: 'Qué sigue',
    stepsH: 'Tres cosas que ayudan de verdad',

    step1Label: 'Paso 01',
    step1H: 'Comparte con tres vecinos',
    step1P:
      'En una elección local, tres conversaciones valen más que mil anuncios. Comparte la campaña con tres personas de tu cuadra que sí van a votar.',
    step1Cta: 'Compartir por WhatsApp →',

    step2Label: 'Paso 02',
    step2H: 'Guarda las tres fechas',
    step2P:
      'Cierre de registro el 5 de octubre, votación temprana del 19 al 30 y elección el 3 de noviembre. Descárgalas a tu calendario y recibe un aviso el día antes de cada una.',
    step2Cta: 'Ver fechas y recordatorio →',

    step3Label: 'Paso 03',
    step3H: 'Conoce las propuestas',
    step3P:
      'Pavimentación equitativa, alumbrado y seguridad, y auditoría al presupuesto del condado. Estas son las tres acciones concretas desde el primer día.',
    step3Cta: 'Ver las propuestas →',

    // Texto que se comparte por WhatsApp. Termina con el enlace al sitio.
    shareText:
      'Te comparto la campaña de Guadalupe "Lupe" Negrete para Comisionado del Precinto 4 en el Condado de Maverick. Vale la pena conocer sus propuestas:',

    ctaKicker: '¿Quieres hacer más?',
    ctaH: 'Súmate como voluntario',
    ctaBody:
      'Si además de votar quieres caminar con el equipo, prestar tu cerca para una lona o apoyar en las mesas de votación temprana, escríbenos.',
    ctaContact: 'Quiero ser voluntario →',
    ctaHome: 'Volver al inicio'
  },

  en: {
    metaTitle: 'Thank you for stepping up! · Lupe Negrete',
    metaDesc:
      'Your sign-up with the Lupe Negrete campaign for Precinct 4 County Commissioner is confirmed.',

    kicker: 'Sign-up confirmed',
    h1a: 'Thank you',
    h1b: 'for stepping up!',
    lead: 'You’re signed up.',
    sub: 'We’ll let you know where to vote, when the polls open and what’s happening with the streets in your colonia. In the meantime, here are three things you can do today.',

    stepsKicker: 'What’s next',
    stepsH: 'Three things that really help',

    step1Label: 'Step 01',
    step1H: 'Share with three neighbors',
    step1P:
      'In a local election, three conversations are worth more than a thousand ads. Share the campaign with three people on your block who actually vote.',
    step1Cta: 'Share on WhatsApp →',

    step2Label: 'Step 02',
    step2H: 'Save the three dates',
    step2P:
      'Registration closes October 5, early voting runs October 19–30 and election day is November 3. Download them to your calendar and get an alert the day before each one.',
    step2Cta: 'See dates and reminder →',

    step3Label: 'Step 03',
    step3H: 'Read the issues',
    step3P:
      'Paving that’s fair, lighting and safety, and a line-by-line audit of the county budget. These are the three commitments from day one.',
    step3Cta: 'See the issues →',

    shareText:
      'Sharing the campaign of Guadalupe "Lupe" Negrete for Precinct 4 County Commissioner in Maverick County. His issues are worth a look:',

    ctaKicker: 'Want to do more?',
    ctaH: 'Join as a volunteer',
    ctaBody:
      'If beyond voting you want to canvass with the team, put a sign on your fence or help out at early voting locations, get in touch.',
    ctaContact: 'I want to volunteer →',
    ctaHome: 'Back to home'
  }
};

export type ThanksCopy = typeof THANKS_COPY.es;
