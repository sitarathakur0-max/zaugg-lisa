import React from 'react';
import { X, ShieldCheck, FileText, Scale } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practice';

interface LegalNoticeModalProps {
  isOpen: boolean;
  type: 'impressum' | 'privacy';
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#181715]/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#DDD7CC] shadow-2xl max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E6E0D4] bg-[#F5EFE6]/50">
          <div className="flex items-center gap-2.5">
            {type === 'impressum' ? (
              <Scale className="w-5 h-5 text-[#78282D]" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-[#78282D]" />
            )}
            <h2 className="font-editorial text-2xl text-[#181715]">
              {type === 'impressum' ? 'Impressum & Rechtliche Angaben' : 'Datenschutzerklärung (DSG)'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#716D66] hover:text-[#181715] hover:bg-[#EAE4D8] transition-colors"
            aria-label="Schliessen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-[#383531] leading-relaxed">
          {type === 'impressum' ? (
            <>
              <div>
                <h3 className="font-semibold text-[#181715] text-base mb-1">
                  Kanzleiangaben gemäss Art. 3 UWG
                </h3>
                <p className="font-medium text-[#181715]">{PRACTICE_INFO.name}</p>
                <p>{PRACTICE_INFO.title}</p>
                <p>{PRACTICE_INFO.address.street}</p>
                <p>{PRACTICE_INFO.address.zipCity}, Schweiz</p>
                <p className="mt-2">Telefon: <a href={PRACTICE_INFO.phoneRaw} className="text-[#78282D] font-medium underline">{PRACTICE_INFO.phone}</a></p>
              </div>

              <div className="pt-4 border-t border-[#EBE5DA]">
                <h3 className="font-semibold text-[#181715] text-base mb-1">
                  Berufsbezeichnung & Berufsrecht
                </h3>
                <p>
                  Rechtsanwältin (verliehen in der Schweiz). Die Ausübung des Rechtsanwaltsberufs in der Schweiz unterliegt dem Bundesgesetz über die Freizügigkeit der Anwältinnen und Anwälte (BGFA) sowie den kantonalen Anwaltsgesetzen und den Standesregeln des Schweizerischen Anwaltsverbandes (SAV).
                </p>
                <p className="mt-2">
                  Eingetragen im Anwaltsregister des Kantons Zürich.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE5DA]">
                <h3 className="font-semibold text-[#181715] text-base mb-1">
                  Ausschluss der Mandatsbegründung
                </h3>
                <p>
                  Die Übermittlung von Mitteilungen oder Anfragen über diese Website begründet ausdrücklich kein Mandatsverhältnis. Ein Mandatsverhältnis kommt erst zustande, wenn dieses von der Kanzlei Zaugg Lisa schriftlich oder mündlich bestätigt und eine entsprechende Vollmacht ausgestellt wurde.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE5DA]">
                <h3 className="font-semibold text-[#181715] text-base mb-1">
                  Urheberrecht & Haftungsausschluss
                </h3>
                <p>
                  Die Inhalte dieser Website dienen ausschliesslich der allgemeinen Information und stellen keine Rechtsberatung dar. Jegliche Haftung für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte wird ausgeschlossen.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="font-semibold text-[#181715] text-base mb-1">
                  Datenschutzhinweise nach Schweizer Bundesgesetz über den Datenschutz (DSG)
                </h3>
                <p>
                  Der Schutz Ihrer Persönlichkeit und Ihrer Daten ist für die Kanzlei Zaugg Lisa von elementarer Bedeutung. Als Anwaltskanzlei unterstehen wir zudem dem strikten gesetzlichen Berufsgeheimnis nach Art. 321 StGB.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE5DA]">
                <h3 className="font-semibold text-[#181715] text-base mb-1">
                  Verantwortliche Stelle
                </h3>
                <p>
                  {PRACTICE_INFO.name}, {PRACTICE_INFO.title}<br />
                  {PRACTICE_INFO.address.street}, {PRACTICE_INFO.address.zipCity}<br />
                  Telefon: {PRACTICE_INFO.phone}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE5DA]">
                <h3 className="font-semibold text-[#181715] text-base mb-1">
                  Erhebung und Bearbeitung von Personendaten
                </h3>
                <p>
                  Wenn Sie mit uns über das Formular oder telefonisch in Kontakt treten, erfassen wir die von Ihnen freiwillig übermittelten Kontaktdaten (Name, Telefonnummer, E-Mail-Adresse, Sachverhaltsangaben) ausschliesslich zur Prüfung von Interessenkollisionen und zur Beantwortung Ihrer konkreten Terminanfrage.
                </p>
                <p className="mt-2">
                  Es erfolgt keine Weitergabe Ihrer Daten an unbefugte Dritte oder Werbenetzwerke.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE5DA]">
                <h3 className="font-semibold text-[#181715] text-base mb-1">
                  Kommunikation per E-Mail / Webformular
                </h3>
                <p>
                  Bitte beachten Sie, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann. Sofern Sie streng vertrauliche Informationen übermitteln möchten, empfiehlt sich die vorherige telefonische Absprache oder der persönliche Austausch vor Ort an der Gartenhofstrasse 15.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E6E0D4] bg-[#F5EFE6]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-wider font-semibold bg-[#181715] text-white hover:bg-[#3E3B37] transition-colors"
          >
            Schliessen
          </button>
        </div>
      </div>
    </div>
  );
};
