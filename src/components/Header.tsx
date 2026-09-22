import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, Scale } from 'lucide-react';
import { PageId } from '../types';
import { PRACTICE_INFO } from '../data/practice';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; sub: string }[] = [
    { id: 'home', label: 'Übersicht', sub: 'Kanzleiprofil' },
    { id: 'services', label: 'Tätigkeitsbereiche', sub: 'Rechtsberatung' },
    { id: 'about', label: 'Über die Praxis', sub: 'Unabhängigkeit' },
    { id: 'faq', label: 'FAQ', sub: 'Praxis & Honorar' },
    { id: 'contact', label: 'Kontakt & Standort', sub: 'Gartenhofstrasse 15' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E6E0D4] transition-colors">
      {/* Top Editorial Sub-bar */}
      <div className="border-b border-[#EFEBE3] hidden md:block text-[11px] uppercase tracking-[0.14em] text-[#6E6961] py-1.5 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#78282D]"></span>
              Unabhängige Rechtsanwältin · Zürich
            </span>
            <span className="text-[#CCC6BA]">|</span>
            <span>Gartenhofstrasse 15, 8004 Zürich</span>
          </div>
          <div className="flex items-center space-x-6 text-[#4A4742]">
            <span>Mo–Fr 08:30–12:00 & 13:30–17:30</span>
            <span className="text-[#CCC6BA]">|</span>
            <a
              href={PRACTICE_INFO.phoneRaw}
              className="font-medium text-[#78282D] hover:underline inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              044 240 21 00
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 md:py-4 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group focus:outline-none focus:ring-2 focus:ring-[#78282D]/20 rounded-sm p-0.5"
          aria-label="Zaugg Lisa Rechtsanwältin Homepage"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-editorial text-2xl md:text-3xl font-normal tracking-tight text-[#181715] group-hover:text-[#78282D] transition-colors">
              {PRACTICE_INFO.name}
            </span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#716D66] font-medium mt-0.5">
            Rechtsanwältin · Zürich
          </p>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Hauptnavigation">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 text-sm transition-all relative ${
                  isActive
                    ? 'text-[#181715] font-semibold'
                    : 'text-[#5C5750] hover:text-[#181715] font-normal'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-[#78282D]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={PRACTICE_INFO.phoneRaw}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-wider font-medium text-[#181715] border border-[#DDD7CC] hover:border-[#181715] rounded-none transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#78282D]" />
            <span>044 240 21 00</span>
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-1 px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-[#78282D] text-[#FAF8F5] hover:bg-[#5E1E23] transition-colors shadow-xs"
          >
            <span>Anfrage stellen</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PRACTICE_INFO.phoneRaw}
            aria-label="Telefonnummer anrufen: 044 240 21 00"
            className="p-2 text-[#78282D] border border-[#DDD7CC] hover:bg-[#F2EDE4]"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#181715] hover:bg-[#F2EDE4] border border-[#DDD7CC] focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Navigation öffnen"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E6E0D4] bg-[#FAF8F5] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-3 border-b border-[#EFEBE3] flex items-center justify-between ${
                    isActive
                      ? 'text-[#78282D] font-semibold bg-[#F5EFE6]/50'
                      : 'text-[#181715] hover:text-[#78282D]'
                  }`}
                >
                  <div>
                    <span className="block text-base">{item.label}</span>
                    <span className="block text-xs text-[#7D7871]">{item.sub}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A8A298]" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 space-y-3">
            <a
              href={PRACTICE_INFO.phoneRaw}
              className="w-full flex items-center justify-center gap-2 py-3 border border-[#78282D] text-[#78282D] text-sm uppercase tracking-wider font-semibold hover:bg-[#78282D]/5"
            >
              <Phone className="w-4 h-4" />
              <span>Direktanruf: 044 240 21 00</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#78282D] text-white text-sm uppercase tracking-wider font-semibold hover:bg-[#5E1E23]"
            >
              <span>Terminanfrage senden</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 text-xs text-[#716D66] text-center">
            <p>Gartenhofstrasse 15, 8004 Zürich</p>
            <p className="mt-0.5">Termine nach Vereinbarung</p>
          </div>
        </div>
      )}
    </header>
  );
};
