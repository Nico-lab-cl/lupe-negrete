export interface ElectionDate {
  date: string; // YYYY-MM-DD
  labelEs: string;
  labelEn: string;
  descEs: string;
  descEn: string;
}

export const ELECTION_CONFIG = {
  registrationDeadline: '2026-10-05',
  earlyVotingStart: '2026-10-19',
  earlyVotingEnd: '2026-10-30',
  electionDay: '2026-11-03',
  pollsCloseHour: '7:00 PM',
  precinct: 'Precinct 4 / Precinto 4',
  county: 'Maverick County / Condado de Maverick',
  keyDates: [
    {
      step: 1,
      dateFormatted: '5 OCT',
      dateFullEs: '5 de octubre de 2026',
      dateFullEn: 'October 5, 2026',
      titleEs: 'Cierre del Registro de Votantes',
      titleEn: 'Voter Registration Deadline',
      descEs: 'Último día para inscribirte y ser elegible para votar.',
      descEn: 'Last day to register to be eligible to vote.'
    },
    {
      step: 2,
      dateFormatted: '19–30 OCT',
      dateFullEs: '19 al 30 de octubre de 2026',
      dateFullEn: 'October 19–30, 2026',
      titleEs: 'Votación Temprana (Early Voting)',
      titleEn: 'Early Voting Period',
      descEs: 'Período principal de movilización con horarios flexibles.',
      descEn: 'Main mobilization window with flexible polling hours.'
    },
    {
      step: 3,
      dateFormatted: '3 NOV',
      dateFullEs: '3 de noviembre de 2026',
      dateFullEn: 'November 3, 2026',
      titleEs: 'Día de la Elección General',
      titleEn: 'General Election Day',
      descEs: 'Urnas abiertas de 7:00 AM a 7:00 PM.',
      descEn: 'Polls open from 7:00 AM to 7:00 PM.'
    }
  ]
};

export interface UrgencyState {
  show: boolean;
  messageEs: string;
  messageEn: string;
  linkEs: string;
  linkEn: string;
  highlight: boolean;
}

export function getUrgencyState(currentDate: Date = new Date()): UrgencyState {
  const currentIso = currentDate.toISOString().split('T')[0];

  if (currentIso <= ELECTION_CONFIG.registrationDeadline) {
    return {
      show: true,
      messageEs: 'Últimos días para inscribirte: el registro cierra el 5 de octubre',
      messageEn: 'Last days to register: voter registration closes October 5',
      linkEs: '/es/como-votar/',
      linkEn: '/en/how-to-vote/',
      highlight: true
    };
  } else if (currentIso < ELECTION_CONFIG.earlyVotingStart) {
    return {
      show: true,
      messageEs: 'La votación temprana empieza el 19 de octubre',
      messageEn: 'Early voting starts October 19',
      linkEs: '/es/como-votar/',
      linkEn: '/en/how-to-vote/',
      highlight: false
    };
  } else if (currentIso <= ELECTION_CONFIG.earlyVotingEnd) {
    return {
      show: true,
      messageEs: 'Votación temprana abierta ahora — hasta el 30 de octubre',
      messageEn: 'Early voting is open now — through October 30',
      linkEs: '/es/como-votar/',
      linkEn: '/en/how-to-vote/',
      highlight: true
    };
  } else if (currentIso < ELECTION_CONFIG.electionDay) {
    return {
      show: true,
      messageEs: 'El martes 3 de noviembre se vota en el Precinto 4',
      messageEn: 'Election day is Tuesday, November 3',
      linkEs: '/es/como-votar/',
      linkEn: '/en/how-to-vote/',
      highlight: true
    };
  } else if (currentIso === ELECTION_CONFIG.electionDay) {
    return {
      show: true,
      messageEs: '¡Hoy se vota! Las urnas cierran a las 7:00 PM',
      messageEn: 'Today is election day! Polls close at 7:00 PM',
      linkEs: '/es/como-votar/',
      linkEn: '/en/how-to-vote/',
      highlight: true
    };
  } else {
    return {
      show: false,
      messageEs: '',
      messageEn: '',
      linkEs: '',
      linkEn: '',
      highlight: false
    };
  }
}
