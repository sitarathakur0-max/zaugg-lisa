import React, { useState } from 'react';
import { Phone, MapPin, Clock, ArrowUpRight, Scale, Shield } from 'lucide-react';
import { PageId } from '../types';
import { PRACTICE_INFO } from '../data/practice';
import { LegalNoticeModal } from './LegalNoticeModal';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [modalType, setModalType] = useState<'impressum' | 'privacy' | null>(null);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#1C1B19] text-[#E5E0D8] border-t border-[#36332E]">
        {/* Top Editorial Rule & Identity Banner */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#36332E]">
            {/* Column 1: Practice Signature */}
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A8A298]">
                <Scale className="w-4 h-4 text-[#C26D74]" />
                <span>Rechtsanwaltskanzlei Zürich</span>
              </div>
              <h2 className="font-editorial text-3xl md:text-4xl text-[#FAF8F5] tracking-tight">
                {PRACTICE_INFO.name}
              </h2>
              <p className="text-sm text-[#B3ACA0] max-w-md leading-relaxed">
                Unabhängige Rechtsberatung und massgeschneiderte anwaltliche Interessenvertretung für Privatpersonen und Unternehmen in Zürich und der Schweiz.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2A2825] border border-[#3E3B36] text-xs text-[#DDD7CD]">
                  <Shield className="w-3.5 h-3.5 text-[#C26D74]" />
                  <span>Untersteht dem Schweizer Anwaltsgeheimnis (Art. 321 StGB)</span>
                </div>
              </div>
            </div>

            {/* Column 2: Direct Contact Particulars */}
            <div className="md:col-span-4 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.16em] text-[#918B82] font-semibold">
                Kanzleikontakt
              </h3>
              <ul className="space-y-3 text-sm text-[#D1CBC0]">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C26D74] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#FAF8F5] font-medium block">
                      {PRACTICE_INFO.address.street}
                    </span>
                    <span>{PRACTICE_INFO.address.zipCity}</span>
                    <span className="block text-xs text-[#8A847B]">
                      {PRACTICE_INFO.address.district}
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C26D74] shrink-0" />
                  <div>
                    <a
                      href={PRACTICE_INFO.phoneRaw}
                      className="text-[#FAF8F5] font-semibold hover:text-[#E89BA1] transition-colors text-base"
                    >
                      {PRACTICE_INFO.phone}
                    </a>
                    <span className="block text-[11px] text-[#8A847B]">
                      Montag bis Freitag
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C26D74] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#B3ACA0]">
                    <span>{PRACTICE_INFO.hours.time}</span>
                    <span className="block text-[#8A847B] mt-0.5">
                      {PRACTICE_INFO.hours.note}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation & Sections */}
            <div className="md:col-span-3 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.16em] text-[#918B82] font-semibold">
                Kanzleiseiten
              </h3>
              <nav className="flex flex-col space-y-2 text-sm" aria-label="Footer Navigation">
                <button
                  onClick={() => handleNav('home')}
                  className="text-left text-[#B3ACA0] hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Übersicht / Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleNav('services')}
                  className="text-left text-[#B3ACA0] hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Tätigkeitsbereiche</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleNav('about')}
                  className="text-left text-[#B3ACA0] hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Die Kanzlei</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleNav('faq')}
                  className="text-left text-[#B3ACA0] hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Fragen & Antworten</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-left text-[#B3ACA0] hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Kontakt & Anfahrt</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </nav>
            </div>
          </div>

          {/* Bottom Row: Legal Notes, Disclaimers & Copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A847B]">
            <div>
              <p>
                © {new Date().getFullYear()} Zaugg Lisa · Rechtsanwältin · Gartenhofstrasse 15, 8004 Zürich. Alle Rechte vorbehalten.
              </p>
              <p className="text-[11px] text-[#716D66] mt-0.5">
                Die Mitteilungen über diese Website begründen kein formelles Mandatsverhältnis.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => setModalType('impressum')}
                className="hover:text-[#FAF8F5] underline underline-offset-4 decoration-[#4A4742] transition-colors"
              >
                Impressum & Standesrecht
              </button>
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-[#FAF8F5] underline underline-offset-4 decoration-[#4A4742] transition-colors"
              >
                Datenschutz (DSG)
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalNoticeModal
        isOpen={modalType !== null}
        type={modalType || 'impressum'}
        onClose={() => setModalType(null)}
      />
    </>
  );
};
