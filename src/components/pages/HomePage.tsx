import React, { useState } from 'react';
import {
  Phone,
  ArrowUpRight,
  Shield,
  FileCheck,
  Scale,
  Compass,
  MapPin,
  ChevronDown,
  CheckCircle2,
  Building,
  UserCheck,
} from 'lucide-react';
import { PageId } from '../../types';
import {
  PRACTICE_INFO,
  LEGAL_SERVICES,
  PRACTICE_PILLARS,
  ENGAGEMENT_STEPS,
  FAQS,
} from '../../data/practice';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="space-y-0">
      {/* 1. Split Editorial Hero Composition */}
      <section className="border-b border-[#E6E0D4] bg-[#FAF8F5] pt-10 pb-16 md:pt-16 md:pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Docket Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-[#78736B] pb-8 border-b border-[#EBE5DA]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#78282D]"></span>
              <span className="font-medium text-[#181715]">Anwaltskanzlei Zaugg Lisa</span>
              <span className="text-[#DDD7CC]">/</span>
              <span>Gartenhofstrasse 15 · 8004 Zürich</span>
            </div>
            <div className="text-[11px] text-[#8C877E] font-mono">
              KAN-ZH-8004 · RECHTSANWÄLTIN
            </div>
          </div>

          {/* Main Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
            {/* Left Col: Main Typography Statement */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#78282D] bg-[#78282D]/8 border border-[#78282D]/20">
                  Unabhängige Mandatsführung in Zürich
                </span>
                <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#181715] leading-[1.12] tracking-tight">
                  Rechtliche Klarheit durch persönliche und unabhängige anwaltliche Vertretung.
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#47433E] font-normal leading-relaxed max-w-2xl">
                Als selbständige Rechtsanwältin mit Kanzlei an der Gartenhofstrasse 15 in Zürich berate und vertrete ich Privatpersonen und Unternehmen in zivilrechtlichen, vertraglichen und behördlichen Fragestellungen. Engagiert, diskret und stets ohne Umwege.
              </p>

              {/* Call-to-actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={PRACTICE_INFO.phoneRaw}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#78282D] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#5E1E23] transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#F2EDE4]" />
                  <span>Telefon: 044 240 21 00</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#181715] text-[#181715] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#181715] hover:text-[#FAF8F5] transition-colors"
                >
                  <span>Erstkontakt vereinbaren</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#EBE5DA] text-xs text-[#5E5952]">
                <div className="space-y-1">
                  <span className="font-medium text-[#181715] block">Direkter Kontakt</span>
                  <span className="text-[#78736B]">Keine Delegation an Dritte</span>
                </div>
                <div className="space-y-1">
                  <span className="font-medium text-[#181715] block">Art. 321 StGB</span>
                  <span className="text-[#78736B]">Strenges Berufsgeheimnis</span>
                </div>
                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <span className="font-medium text-[#181715] block">Standort Zürich 4</span>
                  <span className="text-[#78736B]">Nahe Stauffacher & Wiedikon</span>
                </div>
              </div>
            </div>

            {/* Right Col: Monograph Panel / Archival Stance */}
            <div className="lg:col-span-5">
              <div className="bg-[#FFFFFF] border border-[#E3DDD3] p-8 md:p-10 space-y-8 editorial-shadow relative">
                {/* Visual Corner Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                  <div className="absolute transform rotate-45 bg-[#78282D] text-white text-[9px] font-mono py-0.5 right-[-35px] top-[15px] w-[120px] text-center">
                    ZÜRICH
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#78282D] font-semibold block">
                    Kanzleigrundsatz
                  </span>
                  <h2 className="font-editorial text-2xl text-[#181715]">
                    Der Wert echter Unabhängigkeit
                  </h2>
                </div>

                <p className="text-sm text-[#4E4A44] leading-relaxed">
                  Rechtliche Konflikte verlangen nach sachlicher Distanz und handwerklicher Präzision. Als unabhängige Anwältin bin ich ausschliesslich den berechtigten Interessen meiner Mandantschaft verpflichtet – unbeeinflusst von institutionellen Vorgaben oder Verflechtungen.
                </p>

                <div className="border-t border-b border-[#EFEBE3] py-5 space-y-3 text-xs text-[#3E3B36]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#78282D] shrink-0 mt-0.5" />
                    <span>Prüfung der Sach- und Rechtslage mit ungeschminkter Risikoeinschätzung.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#78282D] shrink-0 mt-0.5" />
                    <span>Lösungsorientierte aussergerichtliche Verhandlung vor langwierigen Prozessen.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#78282D] shrink-0 mt-0.5" />
                    <span>Konsequente Vertretung vor Zürcher Friedensrichtern, Schlichtungsbehörden und Gerichten.</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-[#716D66]">
                  <div>
                    <span className="font-semibold text-[#181715] block">Kanzleisitz:</span>
                    <span>Gartenhofstrasse 15, 8004 Zürich</span>
                  </div>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-[#78282D] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>Zur Kanzlei</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction to the Independent Practice */}
      <section className="py-16 md:py-24 px-6 lg:px-12 border-b border-[#E6E0D4] bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
                Profil & Ethos
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715] leading-tight">
                Engagiertes Handwerk statt anonymer Sachbearbeitung.
              </h2>
              <div className="w-12 h-[2px] bg-[#78282D] mt-4" />
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#423E39] leading-relaxed">
              <div className="space-y-4">
                <p>
                  Rechtliche Auseinandersetzungen greifen oft tief in persönliche Lebensbereiche oder unternehmerische Planungen ein. In solchen Momenten ist ein vertrauensvoller, direkter Ansprechpartner entscheidend. Bei der Kanzlei Zaugg Lisa stehen Sie im unmittelbaren Dialog mit Ihrer Anwältin.
                </p>
                <p>
                  Wir analysieren Ihre Ausgangslage mit analytischer Sorgfalt, prüfen vorhandene Urkunden und Verträge und entwerfen eine auf Ihr konkretes Ziel zugeschnittene Handlungsstrategie.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Dabei steht die Vermeidung unnötiger Eskalationen und Verfahrenskosten an erster Stelle. Wo eine einvernehmliche, aussergerichtliche Einigung machbar und vorteilhaft ist, streben wir diese zielgerichtet an. Wo Ihre Rechte jedoch streitig durchgesetzt werden müssen, geschieht dies mit Beharrlichkeit und juristischer Schärfe.
                </p>
                <div className="p-4 bg-[#FAF8F5] border border-[#E3DDD3] space-y-1">
                  <span className="font-semibold text-[#181715] block text-xs uppercase tracking-wider">
                    Kanzleiadresse Zürich
                  </span>
                  <p className="text-xs text-[#635E56]">
                    Gartenhofstrasse 15, 8004 Zürich · Termine ausschliesslich nach vorheriger Absprache.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Areas of Legal Assistance (Asymmetric Editorial Grid) */}
      <section className="py-16 md:py-24 px-6 lg:px-12 border-b border-[#E6E0D4] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6E0D4]">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
                Tätigkeitsschwerpunkte
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715]">
                Bereiche der rechtlichen Unterstützung
              </h2>
              <p className="text-sm text-[#5C5750]">
                Fundierte Beratung, Verhandlungsführung und gerichtliche Vertretung in den Kernbereichen des schweizerischen Zivil- und Verfahrensrechts.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#78282D] hover:text-[#5E1E23] transition-colors"
            >
              <span>Alle Tätigkeitsbereiche im Detail</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Editorial Service Grid - 6 columns structured cleanly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E3DDD3] border border-[#E3DDD3]">
            {LEGAL_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bg-[#FAF8F5] p-8 space-y-6 flex flex-col justify-between hover:bg-[#FFFFFF] transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#8A847B]">
                    <span className="font-mono text-[11px]">0{index + 1}</span>
                    <span className="uppercase tracking-wider text-[10px] text-[#78282D] font-semibold">
                      Zivilrecht
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-[#181715] group-hover:text-[#78282D] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#4E4A44] leading-relaxed">
                    {service.summary}
                  </p>

                  <ul className="space-y-2 pt-2 text-xs text-[#615C54]">
                    {service.typicalMatters.slice(0, 3).map((matter, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#78282D] font-bold">—</span>
                        <span>{matter}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#EFEBE3] flex items-center justify-between">
                  <span className="text-xs text-[#8A847B] font-medium">
                    Kanzlei Zaugg Lisa
                  </span>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#181715] group-hover:text-[#78282D] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Mehr erfahren</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Clients Seek Independent Counsel */}
      <section className="py-16 md:py-24 px-6 lg:px-12 border-b border-[#E6E0D4] bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
              Kanzleistruktur
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715]">
              Warum Ratsuchende die unabhängige Kanzlei wählen
            </h2>
            <p className="text-sm text-[#524E48] leading-relaxed">
              In einer Zeit zunehmender Kanzleifusionen und anonymer Grossstrukturen bietet die unabhängige Einzelpraxis wesentliche Vorzüge für Mandantinnen und Mandanten, die Wert auf persönliche Verantwortlichkeit legen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRACTICE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-[#E3DDD3] p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#78282D] font-semibold">
                    § 0{idx + 1}
                  </span>
                  <h3 className="font-editorial text-xl text-[#181715]">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#8A847B] font-medium">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-[#4E4A44] leading-relaxed pt-2">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation & Engagement Process */}
      <section className="py-16 md:py-24 px-6 lg:px-12 border-b border-[#E6E0D4] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6E0D4]">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
                Vorgehensweise
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715]">
                Ein transparenter und strukturierter Ablauf
              </h2>
              <p className="text-sm text-[#5C5750]">
                Von der ersten Kontaktaufnahme bis zum Abschluss des Mandats wissen Sie stets, wo Sie stehen und welche Massnahmen als Nächstes erfolgen.
              </p>
            </div>
            <a
              href={PRACTICE_INFO.phoneRaw}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#78282D] border border-[#78282D] px-4 py-2 hover:bg-[#78282D] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direkt anrufen: 044 240 21 00</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_STEPS.map((step) => (
              <div
                key={step.step}
                className="border-t-2 border-[#78282D] bg-[#FAF8F5] pt-6 pb-6 px-2 space-y-4"
              >
                <div className="font-mono text-2xl font-light text-[#78282D]">
                  {step.step}
                </div>
                <h3 className="font-editorial text-xl text-[#181715]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#4A4640] leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-2 text-[11px] text-[#78736B] font-medium border-t border-[#EFEBE3]">
                  {step.timing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Practical Mandate Information */}
      <section className="py-16 md:py-20 px-6 lg:px-12 border-b border-[#E6E0D4] bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FAF8F5] border border-[#DDD7CC] p-8 md:p-12 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
                Praxisinformationen
              </span>
              <h2 className="font-editorial text-2xl md:text-3xl text-[#181715]">
                Wichtige Grundsätze der Zusammenarbeit
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[#EBE5DA] text-sm text-[#4E4A44]">
              <div className="space-y-3">
                <h3 className="font-semibold text-[#181715] flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#78282D]" />
                  <span>Honorar & Abrechnung</span>
                </h3>
                <p className="text-xs leading-relaxed text-[#59544D]">
                  Die Entschädigung richtet sich nach dem tatsächlichen Zeitaufwand zu einem vorab schriftlich vereinbarten Stundensatz. Bei Mandatsübernahme wird in der Regel ein angemessener Kostenvorschuss vereinbart. Sie erhalten regelmässig transparente Zwischenabrechnungen.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-[#181715] flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#78282D]" />
                  <span>Berufsgeheimnis (Art. 321 StGB)</span>
                </h3>
                <p className="text-xs leading-relaxed text-[#59544D]">
                  Das anwaltliche Berufsgeheimnis schützt das Vertrauensverhältnis uneingeschränkt. Sämtliche Unterlagen, Notizen und Mitteilungen werden streng vertraulich aufbewahrt. Auch gegenüber Gerichten und Behörden gilt dieses Zeugnisverweigerungsrecht.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-[#181715] flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#78282D]" />
                  <span>Kanzleisitz & Besprechungen</span>
                </h3>
                <p className="text-xs leading-relaxed text-[#59544D]">
                  Die Kanzleiräumlichkeiten befinden sich an der Gartenhofstrasse 15 in 8004 Zürich. Besprechungen vor Ort finden ausschliesslich nach vorheriger Vereinbarung statt, um eine ungestörte Vorbereitung Ihres Dossiers zu gewährleisten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions Preview */}
      <section className="py-16 md:py-24 px-6 lg:px-12 border-b border-[#E6E0D4] bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
              Orientierung
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715]">
              Häufige Fragen zur Mandatierung
            </h2>
            <p className="text-sm text-[#5C5750]">
              Antworten auf wesentliche Fragen vor der ersten Kontaktaufnahme.
            </p>
          </div>

          <div className="divide-y divide-[#E6E0D4] border-t border-b border-[#E6E0D4]">
            {FAQS.slice(0, 5).map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div key={faq.id} className="py-5">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-start justify-between gap-4 text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-editorial text-lg md:text-xl text-[#181715] group-hover:text-[#78282D] transition-colors">
                      {faq.question}
                    </span>
                    <span className="p-1 text-[#8A847B] group-hover:text-[#181715] shrink-0">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-180 text-[#78282D]' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-sm text-[#47433E] leading-relaxed animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#78282D] hover:underline"
            >
              <span>Alle Fragen & Antworten einsehen</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Strong Closing Contact Section */}
      <section className="py-20 md:py-28 px-6 lg:px-12 bg-[#1C1B19] text-[#FAF8F5]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.24em] text-[#C26D74] font-semibold">
              Kanzlei Zaugg Lisa · Zürich
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#FAF8F5] leading-tight">
              Klären Sie Ihre Rechtslage im persönlichen Gespräch.
            </h2>
          </div>

          <p className="text-base text-[#D1CBC0] max-w-2xl mx-auto leading-relaxed">
            Rechtzeitige rechtliche Begleitung verhindert oft kostenintensive Streitigkeiten. Kontaktieren Sie die Kanzlei telefonisch oder hinterlassen Sie eine strukturierte Nachricht für eine Terminabsprache an der Gartenhofstrasse 15.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PRACTICE_INFO.phoneRaw}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#78282D] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#8F343A] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Telefon: 044 240 21 00</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[#524E47] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:border-[#FAF8F5] transition-colors"
            >
              <span>Kontaktformular öffnen</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-8 text-xs text-[#8A847B] flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C26D74]" />
              Gartenhofstrasse 15, 8004 Zürich
            </span>
            <span className="text-[#423F39]">·</span>
            <span>Montag bis Freitag</span>
            <span className="text-[#423F39]">·</span>
            <span>Besprechungen nach Vereinbarung</span>
          </div>
        </div>
      </section>
    </div>
  );
};
