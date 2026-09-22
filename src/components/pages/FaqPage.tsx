import React, { useState, useMemo } from 'react';
import {
  Search,
  ChevronDown,
  Phone,
  ArrowUpRight,
  HelpCircle,
  FileQuestion,
  Scale,
} from 'lucide-react';
import { PageId, FaqItem } from '../../types';
import { PRACTICE_INFO, FAQS } from '../../data/practice';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>([FAQS[0].id]);

  const categories = [
    { id: 'all', label: 'Alle Themen' },
    { id: 'mandate', label: 'Mandat & Erstkontakt' },
    { id: 'fees', label: 'Honorar & Kosten' },
    { id: 'process', label: 'Unterlagen & Ablauf' },
    { id: 'general', label: 'Sprachen & Organisation' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCat =
        selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[#FAF8F5] border-b border-[#E6E0D4] py-12 md:py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Praxis & Verfahrensfragen</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#181715] max-w-4xl tracking-tight leading-[1.14]">
            Häufige Fragen & Antworten
          </h1>
          <p className="text-base sm:text-lg text-[#4E4A44] max-w-3xl leading-relaxed">
            Transparenz über Arbeitsweise, Honorare und den Ablauf einer Mandatierung an der Gartenhofstrasse 15 in Zürich.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#F7F4EE] border-b border-[#E6E0D4]">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Controls: Search and Filters */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-[#8A847B] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Frage durchsuchen (z.B. Honorar, Ersttermin, Vollmacht, Rechtsschutz)..."
                className="w-full bg-[#FAF8F5] border border-[#DDD7CC] pl-11 pr-4 py-3 text-sm text-[#181715] placeholder:text-[#8A847B] focus:outline-none focus:border-[#78282D] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#78282D] hover:underline"
                >
                  Zurücksetzen
                </button>
              )}
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 text-xs uppercase tracking-wider transition-colors border ${
                      isActive
                        ? 'bg-[#78282D] text-[#FAF8F5] border-[#78282D] font-semibold'
                        : 'bg-[#FAF8F5] text-[#4E4A44] border-[#DDD7CC] hover:border-[#181715]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accordion list */}
          <div className="bg-[#FAF8F5] border border-[#DDD7CC] divide-y divide-[#E6E0D4] editorial-shadow">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center space-y-3">
                <FileQuestion className="w-8 h-8 text-[#A8A298] mx-auto" />
                <p className="font-editorial text-xl text-[#181715]">
                  Keine passenden Fragen gefunden
                </p>
                <p className="text-xs text-[#69645E]">
                  Haben Sie eine spezifische Frage? Rufen Sie die Kanzlei direkt an unter{' '}
                  <a href={PRACTICE_INFO.phoneRaw} className="text-[#78282D] font-semibold underline">
                    044 240 21 00
                  </a>
                  .
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div key={faq.id} className="p-6 md:p-8">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-start justify-between gap-4 text-left group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-editorial text-xl sm:text-2xl text-[#181715] group-hover:text-[#78282D] transition-colors leading-snug">
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
                      <div className="pt-4 pr-6 text-sm text-[#45413C] leading-relaxed animate-in fade-in duration-150">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Side Banner note */}
          <div className="p-6 bg-[#FAF8F5] border border-[#DDD7CC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-semibold text-xs uppercase tracking-wider text-[#181715] block">
                Offene Frage zu Ihrem Einzelfall?
              </span>
              <span className="text-xs text-[#6E6961]">
                Wir stehen Ihnen telefonisch während den Kanzleizeiten zur Verfügung.
              </span>
            </div>
            <a
              href={PRACTICE_INFO.phoneRaw}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#78282D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#5E1E23] transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>044 240 21 00</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to action footer */}
      <section className="py-16 px-6 lg:px-12 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-editorial text-3xl text-[#181715]">
            Bereit für ein Erstgespräch?
          </h2>
          <p className="text-sm text-[#4E4A44]">
            Vereinbaren Sie Ihren Termin an der Gartenhofstrasse 15 in 8004 Zürich.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#181715] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#36332E] transition-colors"
            >
              <span>Zur Kontakt- & Terminanfrage</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
