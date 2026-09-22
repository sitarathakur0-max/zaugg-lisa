import { PracticeInfo, LegalServiceItem, FaqItem } from '../types';

export const PRACTICE_INFO: PracticeInfo = {
  name: 'Zaugg Lisa',
  title: 'Rechtsanwältin',
  category: 'Independent Legal Practice / Anwaltskanzlei',
  address: {
    street: 'Gartenhofstrasse 15',
    zipCity: '8004 Zürich',
    district: 'Kreis 4 (Wiedikon / Stauffacher)',
    canton: 'Zürich',
    country: 'Schweiz / Switzerland',
    full: 'Gartenhofstrasse 15, 8004 Zürich, Schweiz',
  },
  phone: '044 240 21 00',
  phoneRaw: 'tel:0442402100',
  email: 'kanzlei@zaugg-legal.ch',
  hours: {
    days: 'Montag – Freitag / Monday – Friday',
    time: '08:30 – 12:00 | 13:30 – 17:30',
    note: 'Besprechungen nach telefonischer Vereinbarung / Consultations by prior appointment',
  },
};

export const LEGAL_SERVICES: LegalServiceItem[] = [
  {
    id: 'civil-contract',
    title: 'Vertragsrecht & Zivilrechtliche Beratung',
    summary: 'Sorgfältige Prüfung, Gestaltung und Durchsetzung privatrechtlicher Vereinbarungen.',
    description: 'Verträge bilden das Fundament verlässlicher Rechtsbeziehungen. Eine vorausschauende rechtliche Prüfung schützt vor unvorhergesehenen Risiken, unklaren Auslegungskonflikten und langwierigen Streitigkeiten. Die Kanzlei unterstützt Privatpersonen und Unternehmer bei der Gestaltung, Analyse und Verhandlung von Verträgen.',
    typicalMatters: [
      'Ausarbeitung und Beurteilung massgeschneiderter Vereinbarungen',
      'Auflösung und Kündigung von Vertragsverhältnissen',
      'Durchsetzung von Leistungs- und Erfüllungsansprüchen',
      'Geltendmachung von Schadenersatz und Gewährleistungsrechten',
    ],
    approach: 'Fokus auf praxistaugliche Regelungen, klare Begriffsdefinitionen und Risikominimierung.',
  },
  {
    id: 'tenancy-property',
    title: 'Mietrecht & Nachbarrecht',
    summary: 'Unabhängige Interessenvertretung bei mietrechtlichen und nachbarlichen Fragestellungen.',
    description: 'Im Spannungsfeld zwischen Mietern, Vermietern und Nachbarn ist eine nüchterne, gesetzeskonforme Betrachtung entscheidend. Wir beraten bei Streitigkeiten rund um Wohn- und Geschäftsräume sowie bei nachbarrechtlichen Auseinandersetzungen im Raum Zürich.',
    typicalMatters: [
      'Anfechtung von Mietzinsanpassungen und Nebenkostenabrechnungen',
      'Kündigungen und Erstreckungsverfahren vor der Schlichtungsbehörde',
      'Mängel an Mietobjekten und Mietzinsreduktionen',
      'Nachbarrechtliche Konflikte (Immissionen, Grenzstreitigkeiten)',
    ],
    approach: 'Bevorzugung tragfähiger Schlichtungslösungen bei konsequenter Wahrung Ihrer verfahrensrechtlichen Fristen.',
  },
  {
    id: 'labor-employment',
    title: 'Arbeitsrechtliche Begleitung',
    summary: 'Beratung von Arbeitnehmenden und Arbeitgebenden in allen Phasen des Arbeitsverhältnisses.',
    description: 'Arbeitsrechtliche Streitigkeiten erfordern nicht nur juristische Präzision, sondern auch Fingerspitzengefühl für die Dynamik zwischen den Parteien. Wir unterstützen Sie von der Vertragsgestaltung bis hin zu Kündigungsstreitigkeiten und Freistellungsvereinbarungen.',
    typicalMatters: [
      'Prüfung von Arbeitsverträgen, Konkurrenzverboten und Bonusregelungen',
      'Vertretung bei Kündigungen, Freistellungen und missbräuchlichen Kündigungen',
      'Durchsetzung von Lohnforderungen und Überstundenentschädigungen',
      'Korrektur und Einforderung von Arbeitszeugnissen',
    ],
    approach: 'Lösungsorientierte Beratung mit dem Ziel, langwierige Gerichtsverfahren nach Möglichkeit durch faire Vergleiche abzuwenden.',
  },
  {
    id: 'family-estate',
    title: 'Eherecht, Familie & Nachlassplanung',
    summary: 'Diskrete juristische Vorsorge und rechtliche Klärung in persönlichen Lebensphasen.',
    description: 'Private Lebensentscheidungen bedürfen klarer rechtlicher Grundlagen. Wir unterstützen Sie bei der vorsorgenden Regelung vermögensrechtlicher Verhältnisse sowie bei Trennungen, Scheidungen und erbrechtlichen Fragestellungen.',
    typicalMatters: [
      'Ehe- und Erbverträge sowie letztwillige Verfügungen (Testamente)',
      'Vorsorgeaufträge und Patientenverfügungen',
      'Rechtliche Begleitung bei Trennungen und Scheidungskonventionen',
      'Klärung von Nachlassfragen und Erbauseinandersetzungen',
    ],
    approach: 'Höchste Diskretion, sachliche Deeskalation und transparente Strukturierung komplexer Vermögenswerte.',
  },
  {
    id: 'dispute-resolution',
    title: 'Konfliktverhandlung & Prozessführung',
    summary: 'Strategische Durchsetzung Ihrer Rechte vor Schlichtungsbehörden und Gerichten.',
    description: 'Nicht jeder Konflikt lässt sich aussergerichtlich beilegen. Ist ein gerichtlicher Schritt erforderlich, vertritt die Kanzlei Zaugg Lisa Ihre Rechte mit fundierter Argumentation, präziser Aktenführung und klarer Prozessstrategie vor Zürcher Gerichten und Behörden.',
    typicalMatters: [
      'Vertretung vor Friedensrichterämtern und bezirklichen Schlichtungsbehörden',
      'Prozessführung vor Zürcher Bezirksgerichten und Fachgerichten',
      'Führung verfahrensbegleitender Vergleichsverhandlungen',
      'Vollstreckung von Urteilen und Rechtsöffnung im Betreibungsverfahren',
    ],
    approach: 'Konsequente Kosten-Nutzen-Analyse vor jedem Verfahrensschritt. Sie behalten stets die volle Transparenz.',
  },
  {
    id: 'administrative-proceedings',
    title: 'Verwaltungsrecht & Behördenverfahren',
    summary: 'Wahrung Ihrer Parteirechte im Dialog und Verfahren mit kommunalen und kantonalen Behörden.',
    description: 'Entscheide und Verfügungen von Ämtern greifen oft tief in persönliche oder wirtschaftliche Freiheiten ein. Wir prüfen staatliche Entscheide auf ihre formelle und materielle Rechtmässigkeit und vertreten Sie in Einsprache- und Rekursverfahren.',
    typicalMatters: [
      'Prüfung von behördlichen Anordnungen und Verfügungen',
      'Fristgerechte Einreichung von Einsprachen und Rekursen',
      'Vertretung vor Verwaltungsbehörden des Kantons und der Stadt Zürich',
      'Einsichtnahme in Amtsakten und Durchsetzung des rechtlichen Gehörs',
    ],
    approach: 'Präzise formelle Fristenkontrolle und sachliche juristische Argumentation gegenüber Behörden.',
  },
];

export const PRACTICE_PILLARS = [
  {
    title: 'Unabhängigkeit & Direktheit',
    subtitle: 'Persönliche Mandatsführung',
    text: 'Als unabhängige Kanzlei ohne starren Grosskanzlei-Überbau werden Sie stets von Rechtsanwältin Lisa Zaugg persönlich beraten. Ihr Anliegen wird nicht an wechselnde Sachbearbeitende delegiert.',
  },
  {
    title: 'Schweizer Anwaltsgeheimnis',
    subtitle: 'Absolute Vertraulichkeit (Art. 321 StGB)',
    text: 'Sämtliche Informationen und Dokumente, die Sie der Kanzlei anvertrauen, unterliegen dem strengen gesetzlichen Berufsgeheimnis. Diskretion ist das unverrückbare Fundament jeder Zusammenarbeit.',
  },
  {
    title: 'Kostentransparenz',
    subtitle: 'Klare Abrechnungsgrundsätze',
    text: 'Rechtssicherheit beginnt bei den Anwaltskosten. Vor Beginn der Mandatsarbeit werden Vergütungsmodelle, Stundensätze und anfallende Barauslagen detailliert und nachvollziehbar dargelegt.',
  },
  {
    title: 'Standort Zürich',
    subtitle: 'Gartenhofstrasse 15, 8004 Zürich',
    text: 'Zentral gelegen im Zürcher Kreis 4, in bequemer Gehdistanz zum Bahnhof Wiedikon und zum Stauffacher. Gut erreichbar mit öffentlichen Verkehrsmitteln und für persönliche Besprechungen eingerichtet.',
  },
];

export const ENGAGEMENT_STEPS = [
  {
    step: '01',
    title: 'Erstkontakt & Interessenprüfung',
    description: 'Sie kontaktieren die Kanzlei telefonisch oder per Anfrageformular. In einem kurzen Vorgespräch wird vorab geprüft, ob eine Interessenkollision vorliegt und ob Ihr Anliegen in den Wirkungskreis der Kanzlei fällt.',
    timing: 'In der Regel Rückmeldung innert 1–2 Arbeitstagen',
  },
  {
    step: '02',
    title: 'Erstberatung & Auslegeordnung',
    description: 'In einem persönlichen oder telefonischen Erstgespräch werden die massgebenden Tatsachen strukturiert erfasst. Sie erhalten eine erste realistische Einschätzung der Rechtslage, möglicher Risiken und Handlungsoptionen.',
    timing: 'Termin nach individueller Vereinbarung',
  },
  {
    step: '03',
    title: 'Mandatsvereinbarung & Kostenrahmen',
    description: 'Entscheiden Sie sich für die Mandatierung, wird der genaue Umfang der Vollmacht sowie die Honorarvereinbarung schriftlich festgehalten. Sie behalten jederzeit die Kontrolle über die anfallenden Schritte.',
    timing: 'Vollmacht & schriftliche Auftragsbestätigung',
  },
  {
    step: '04',
    title: 'Zielgerichtete Interessenvertretung',
    description: 'Durchführung der vereinbarten Schritte: Verhandlungen mit der Gegenpartei, Ausarbeitung von Verträgen oder Prozessführung vor Zürcher Schlichtungsbehörden und Gerichten.',
    timing: 'Laufende Information über jeden Zwischenschritt',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'mandate',
    question: 'Wie läuft die erste Kontaktaufnahme ab?',
    answer: 'Sie können die Kanzlei telefonisch unter 044 240 21 00 erreichen oder das Kontaktformular ausfüllen. Wir klären in einem kurzen Schritt, ob keine Interessenkollision vorliegt, und vereinbaren bei Eignung einen Termin für eine strukturierte Erstbesprechung an der Gartenhofstrasse 15 in Zürich.',
  },
  {
    id: 'faq-2',
    category: 'process',
    question: 'Was sollte ich zum ersten Besprechungstermin mitbringen?',
    answer: 'Bringen Sie bitte alle wesentlichen Dokumente in chronologischer Reihenfolge mit (z.B. Verträge, Kündigungsschreiben, Rechnungen, behördliche Verfügungen oder bisherige Korrespondenz). Eine kurze stichwortartige Zusammenfassung der Ereignisse erleichtert die zügige juristische Einordnung.',
  },
  {
    id: 'faq-3',
    category: 'fees',
    question: 'Wie setzen sich die Anwaltskosten zusammen?',
    answer: 'Die Abrechnung erfolgt in der Regel nach dem tatsächlichen Zeitaufwand auf Basis eines vorab vereinbarten Stundensatzes. Zu Beginn des Mandats wird üblicherweise ein angemessener Kostenvorschuss vereinbart. Sie erhalten periodisch detaillierte Leistungsabrechnungen.',
  },
  {
    id: 'faq-4',
    category: 'mandate',
    question: 'Besteht schon beim Absenden einer Nachricht ein Mandatsverhältnis?',
    answer: 'Nein. Eine einseitige Kontaktaufnahme per E-Mail oder Kontaktformular begründet noch kein Mandatsverhältnis. Ein rechtlich bindender Auftrag entsteht erst nach ausdrücklicher Annahme durch die Kanzlei und Unterzeichnung der Vollmacht bzw. Honorarvereinbarung.',
  },
  {
    id: 'faq-5',
    category: 'fees',
    question: 'Übernimmt meine Rechtsschutzversicherung die Kosten?',
    answer: 'Falls Sie über eine Rechtsschutzversicherung verfügen, empfiehlt es sich, vorab eine Kostengutsprache einzuholen. In vielen Fällen gewähren Versicherungen freie Anwaltswahl. Wir unterstützen Sie gerne bei der Klärung der Deckung.',
  },
  {
    id: 'faq-6',
    category: 'general',
    question: 'In welchen Sprachen kann die Beratung erfolgen?',
    answer: 'Die rechtliche Beratung und Mandatsführung erfolgt primär auf Deutsch. Besprechungen und Korrespondenz können nach vorheriger Absprache auch auf Englisch geführt werden.',
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'Sind auch telefonische oder digitale Beratungen möglich?',
    answer: 'Ja. Während für eine vertiefte Erstprüfung oft ein persönliches Treffen in den Kanzleiräumen an der Gartenhofstrasse 15 vorteilhaft ist, können Zwischenschritte, Vorbesprechungen oder Folgekonsultationen unkompliziert per Telefon oder Videokonferenz stattfinden.',
  },
];
