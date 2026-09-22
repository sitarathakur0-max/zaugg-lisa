import React, { useState } from 'react';
import {
  Phone,
  ArrowUpRight,
  FileCheck,
  Scale,
  FolderOpen,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { PageId } from '../../types';
import { PRACTICE_INFO, LEGAL_SERVICES } from '../../data/practice';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>(LEGAL_SERVICES[0].id);

  const selectedService =
    LEGAL_SERVICES.find((s) => s.id === activeTab) || LEGAL_SERVICES[0];

  return (
    <div className="space-y-0">
      {/* Editorial Page Header */}
      <section className="bg-[#FAF8F5] border-b border-[#E6E0D4] py-12 md:py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
            <Scale className="w-4 h-4" />
            <span>Kanzleiprofil · Zaugg Lisa</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#181715] max-w-4xl tracking-tight leading-[1.14]">
            Tätigkeitsbereiche & Rechtsberatung
          </h1>
          <p className="text-base sm:text-lg text-[#4E4A44] max-w-3xl leading-relaxed">
            Als unabhängige Rechtsanwältin in Zürich biete ich eine sorgfältige und einzelfallbezogene juristische Beratung. Schwerpunkte bilden zivilrechtliche Fragestellungen, Vertragsgestaltungen, aussergerichtliche Verhandlungen sowie die Vertretung vor Behörden und Gerichten im Kanton Zürich.
          </p>
        </div>
      </section>

      {/* Main Service Navigation & Detailed Dossier */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#F7F4EE] border-b border-[#E6E0D4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Interactive Service Selector Menu */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-[0.16em] text-[#78736B] font-semibold block pb-2 border-b border-[#E6E0D4]">
                Bereiche auswählen
              </span>
              <div className="space-y-1.5" role="tablist">
                {LEGAL_SERVICES.map((service, idx) => {
                  const isSelected = activeTab === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveTab(service.id)}
                      role="tab"
                      aria-selected={isSelected}
                      className={`w-full text-left p-4 transition-all border flex items-center justify-between group ${
                        isSelected
                          ? 'bg-[#FAF8F5] border-[#78282D] shadow-xs text-[#181715]'
                          : 'bg-[#F2EDE4]/60 border-transparent hover:border-[#DDD7CC] text-[#4E4A44]'
                      }`}
                    >
                      <div className="pr-2">
                        <span className="font-mono text-[10px] text-[#78282D] block">
                          § 0{idx + 1}
                        </span>
                        <span className="font-editorial text-lg block leading-snug">
                          {service.title}
                        </span>
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? 'text-[#78282D]' : 'text-[#A8A298] group-hover:translate-x-0.5'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Side Note */}
              <div className="p-5 bg-[#FAF8F5] border border-[#E3DDD3] space-y-2 mt-6">
                <span className="text-xs font-semibold text-[#181715] flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#78282D]" />
                  Ihr Anliegen ist nicht aufgeführt?
                </span>
                <p className="text-xs text-[#524E47] leading-relaxed">
                  Viele Lebenssachverhalte berühren mehrere Rechtsgebiete. Kontaktieren Sie uns für eine kurze unverbindliche Klärung der Zuständigkeit.
                </p>
                <a
                  href={PRACTICE_INFO.phoneRaw}
                  className="text-xs font-semibold text-[#78282D] hover:underline inline-flex items-center gap-1 mt-1"
                >
                  <span>044 240 21 00 anrufen</span>
                </a>
              </div>
            </div>

            {/* Right Column: In-Depth Service Dossier */}
            <div className="lg:col-span-8 bg-[#FAF8F5] border border-[#DDD7CC] p-8 md:p-12 space-y-8 editorial-shadow">
              <div className="space-y-3 pb-6 border-b border-[#E6E0D4]">
                <div className="flex items-center justify-between text-xs text-[#78736B]">
                  <span className="font-mono uppercase tracking-wider">
                    Dossier: {selectedService.id}
                  </span>
                  <span className="text-[#78282D] font-semibold uppercase tracking-wider">
                    Kanzlei Zaugg Lisa · Zürich
                  </span>
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715]">
                  {selectedService.title}
                </h2>
                <p className="text-base text-[#524E47] italic font-serif">
                  {selectedService.summary}
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#383531] leading-relaxed">
                <h3 className="font-semibold text-xs uppercase tracking-wider text-[#181715]">
                  Gegenstand & rechtliche Tragweite
                </h3>
                <p>{selectedService.description}</p>
              </div>

              {/* Typical matters list */}
              <div className="space-y-4 pt-4 border-t border-[#EFEBE3]">
                <h3 className="font-semibold text-xs uppercase tracking-wider text-[#181715]">
                  Häufige Beratungs- und Mandatsinhalte
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.typicalMatters.map((matter, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F7F4EE] border border-[#E6E0D4] flex items-start gap-2.5 text-xs text-[#3E3B36]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#78282D] shrink-0 mt-0.5" />
                      <span>{matter}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach philosophy */}
              <div className="space-y-2 p-5 bg-[#FAF8F5] border-l-2 border-[#78282D] border-t border-r border-b border-[#E3DDD3]">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78282D] block">
                  Mandatsmethodik
                </span>
                <p className="text-xs text-[#47433E] leading-relaxed">
                  {selectedService.approach}
                </p>
              </div>

              {/* Action Box */}
              <div className="pt-6 border-t border-[#E6E0D4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#181715] block">
                    Klären Sie Ihren Fall vertraulich
                  </span>
                  <span className="text-xs text-[#716D66]">
                    Besprechung an der Gartenhofstrasse 15 oder telefonisch
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={PRACTICE_INFO.phoneRaw}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#78282D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#5E1E23] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>044 240 21 00</span>
                  </a>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#181715] text-xs uppercase tracking-wider font-semibold hover:bg-[#181715] hover:text-[#FAF8F5] transition-colors"
                  >
                    <span>Kontakt</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Preparation Guide */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#E6E0D4]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
              Mandatsvorbereitung
            </span>
            <h2 className="font-editorial text-3xl text-[#181715]">
              Empfohlene Vorbereitung für die Erstberatung
            </h2>
            <p className="text-sm text-[#524E47]">
              Eine sorgfältige Zusammenstellung Ihrer Dokumente spart Zeit und ermöglicht eine zügige juristische Ersteinschätzung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFFFF] border border-[#E3DDD3] p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-[#78282D]/10 text-[#78282D] flex items-center justify-center font-mono text-sm font-semibold">
                01
              </div>
              <h3 className="font-editorial text-xl text-[#181715]">
                Verträge & Korrespondenz
              </h3>
              <p className="text-xs text-[#524E47] leading-relaxed">
                Bringen Sie alle relevanten Schriftstücke mit: Arbeitsverträge, Mietverträge, Nachträge, Kündigungen, E-Mail-Verläufe sowie schriftliche Mahnungen.
              </p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E3DDD3] p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-[#78282D]/10 text-[#78282D] flex items-center justify-center font-mono text-sm font-semibold">
                02
              </div>
              <h3 className="font-editorial text-xl text-[#181715]">
                Behördliche Fristen
              </h3>
              <p className="text-xs text-[#524E47] leading-relaxed">
                Falls Sie Verfügungen, Gerichtsurteile oder Zahlungsbefehle erhalten haben, ist der Zustellungszeitpunkt (Poststempel / Abholschein) zwingend zu notieren, da gesetzliche Rechtsmittelfristen streng laufen.
              </p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E3DDD3] p-6 space-y-3">
              <div className="w-8 h-8 rounded-none bg-[#78282D]/10 text-[#78282D] flex items-center justify-center font-mono text-sm font-semibold">
                03
              </div>
              <h3 className="font-editorial text-xl text-[#181715]">
                Chronologie der Ereignisse
              </h3>
              <p className="text-xs text-[#524E47] leading-relaxed">
                Eine kurze stichwortartige Aufstellung mit Datumsangaben (Wer hat wann was gesagt oder veranlasst?) hilft, die wesentlichen Tatsachen sofort zu erfassen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action footer */}
      <section className="py-16 px-6 lg:px-12 bg-[#F7F4EE]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715]">
            Rechtliche Beratung anfordern
          </h2>
          <p className="text-sm text-[#47433E] max-w-xl mx-auto">
            Rufen Sie uns unverbindlich an oder senden Sie eine Mitteilung über das Kontaktformular, um die Verfügbarkeit und nächste Schritte abzustimmen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={PRACTICE_INFO.phoneRaw}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#78282D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#5E1E23] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>044 240 21 00</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#181715] text-xs uppercase tracking-wider font-semibold hover:bg-[#181715] hover:text-[#FAF8F5] transition-colors"
            >
              <span>Kontaktformular</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
