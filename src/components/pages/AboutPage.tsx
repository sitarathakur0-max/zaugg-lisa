import React from 'react';
import {
  Phone,
  ArrowUpRight,
  Shield,
  Scale,
  MapPin,
  Clock,
  Compass,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { PageId } from '../../types';
import { PRACTICE_INFO, PRACTICE_PILLARS } from '../../data/practice';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* Editorial Header */}
      <section className="bg-[#FAF8F5] border-b border-[#E6E0D4] py-12 md:py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
            <Scale className="w-4 h-4" />
            <span>Kanzleiprofil & Mandatsverständnis</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#181715] max-w-4xl tracking-tight leading-[1.14]">
            Über die unabhängige Rechtspraxis Zaugg Lisa
          </h1>
          <p className="text-base sm:text-lg text-[#4E4A44] max-w-3xl leading-relaxed">
            Als selbständige Anwältin führe ich meine Kanzlei nach den Grundsätzen persönlicher Verantwortlichkeit, sachlicher Nüchternheit und ungeteilter Vertraulichkeit.
          </p>
        </div>
      </section>

      {/* Main Philosophy Narrative */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#F7F4EE] border-b border-[#E6E0D4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Monograph Extract */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FFFFFF] border border-[#DDD7CC] p-8 space-y-6 editorial-shadow">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#78282D] font-semibold block">
                  Standort & Registrierung
                </span>
                <div className="space-y-2 text-sm text-[#383531]">
                  <p className="font-editorial text-2xl text-[#181715]">
                    Zaugg Lisa
                  </p>
                  <p className="text-[#69645E]">Rechtsanwältin</p>
                  <p className="font-mono text-xs text-[#8A847B]">
                    Gartenhofstrasse 15 · 8004 Zürich
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFEBE3] space-y-3 text-xs text-[#524E47]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#78282D] shrink-0" />
                    <span>Eingetragen im Anwaltsregister des Kantons Zürich</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#78282D] shrink-0" />
                    <span>Berufsrechtliche Freizügigkeit nach Art. 3 ff. BGFA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#78282D] shrink-0" />
                    <span>Strikte Wahrung des Berufsgeheimnisses (Art. 321 StGB)</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EFEBE3]">
                  <a
                    href={PRACTICE_INFO.phoneRaw}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#78282D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#5E1E23] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>044 240 21 00</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Body Text */}
            <div className="lg:col-span-7 space-y-6 text-sm text-[#3E3B36] leading-relaxed">
              <h2 className="font-editorial text-3xl text-[#181715] leading-snug">
                Persönlicher Dialog und massgeschneiderte Vertretung.
              </h2>
              <p>
                In vielen Rechtsfragen entscheiden nicht Standardformulare, sondern das genaue Verständnis der individuellen Situation. Die Kanzlei Zaugg Lisa wurde mit dem Anspruch gegründet, Mandantinnen und Mandanten eine direkte, unverfälschte und hochqualifizierte anwaltliche Begleitung zu bieten.
              </p>
              <p>
                Bei uns sind Sie keine Aktennummer in einem vielköpfigen Kanzleiapparat. Von der einleitenden Sachverhaltsaufnahme über die Erarbeitung massgeschneiderter Vertragstexte bis hin zur Verhandlungs- und Prozessführung liegt Ihr Dossier in einer Hand. Dies garantiert kurze Abstimmungswege, höchste Diskretion und eine konsequente Vertretung Ihrer Rechte.
              </p>
              <div className="p-6 bg-[#FAF8F5] border border-[#E3DDD3] space-y-3 mt-4">
                <h3 className="font-semibold text-xs uppercase tracking-wider text-[#181715]">
                  Ethische Verpflichtung & Vertraulichkeit
                </h3>
                <p className="text-xs text-[#524E47] leading-relaxed">
                  Die anwaltliche Unabhängigkeit ist kein Selbstzweck, sondern die wesentliche Voraussetzung dafür, die Interessen der Mandantschaft ohne jeden Zielkonflikt zu wahren. Die Kanzlei handelt frei von fremden Weisungen und setzt sich mit Entschlossenheit für tragfähige, wirtschaftlich vernünftige und juristisch fundierte Lösungen ein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Breakdown */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#E6E0D4]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
              Kanzleigrundsätze
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715]">
              Die Säulen unserer Mandatsführung
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-[#E3DDD3] bg-[#FFFFFF] space-y-4">
              <span className="font-mono text-xs text-[#78282D] font-semibold">01 / UNABHÄNGIGKEIT</span>
              <h3 className="font-editorial text-2xl text-[#181715]">
                Freie und unvoreingenommene Analyse
              </h3>
              <p className="text-sm text-[#524E47] leading-relaxed">
                Wir sagen Ihnen offen, wo die Stärken und wo die Schwachstellen Ihres Falls liegen. Eine realistische Chancen- und Risikoabwägung ist die einzig verlässliche Grundlage für fundierte Entscheidungen – sei es beim Abschluss eines Vertrags oder beim Gang vor Gericht.
              </p>
            </div>

            <div className="p-8 border border-[#E3DDD3] bg-[#FFFFFF] space-y-4">
              <span className="font-mono text-xs text-[#78282D] font-semibold">02 / KOSTENBEWUSSTSEIN</span>
              <h3 className="font-editorial text-2xl text-[#181715]">
                Wirtschaftliche Verhältnismässigkeit
              </h3>
              <p className="text-sm text-[#524E47] leading-relaxed">
                Juristisches Rechtbehalten darf nicht zu unverhältnismässigen finanziellen Lasten führen. Wir prüfen vor jedem Verfahrensschritt das Kosten-Nutzen-Verhältnis und ziehen konstruktive Verhandlungslösungen vor, wenn diese dem Klienten Zeit und Kosten ersparen.
              </p>
            </div>

            <div className="p-8 border border-[#E3DDD3] bg-[#FFFFFF] space-y-4">
              <span className="font-mono text-xs text-[#78282D] font-semibold">03 / DISKRETION</span>
              <h3 className="font-editorial text-2xl text-[#181715]">
                Schutz Ihrer Privatsphäre
              </h3>
              <p className="text-sm text-[#524E47] leading-relaxed">
                Das Berufsgeheimnis gemäss Art. 321 StGB schützt das Mandatsverhältnis lückenlos. Ihre Informationen und sensiblen Dokumente bleiben unter absolutem Schutz vor Dritten.
              </p>
            </div>

            <div className="p-8 border border-[#E3DDD3] bg-[#FFFFFF] space-y-4">
              <span className="font-mono text-xs text-[#78282D] font-semibold">04 / ZENTRALE LAGE</span>
              <h3 className="font-editorial text-2xl text-[#181715]">
                Standort Zürich Gartenhofstrasse
              </h3>
              <p className="text-sm text-[#524E47] leading-relaxed">
                Die Kanzlei ist im lebendigen Quartier Zürich-Wiedikon / Stauffacher beheimatet. Mit Tram und S-Bahn rasch erreichbar, bietet sie den idealen Rahmen für diskrete persönliche Besprechungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Action Section */}
      <section className="py-16 px-6 lg:px-12 bg-[#F7F4EE]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715]">
            Persönlichen Termin vereinbaren
          </h2>
          <p className="text-sm text-[#4E4A44] max-w-xl mx-auto leading-relaxed">
            Möchten Sie Ihr rechtliches Anliegen in einem vertraulichen Rahmen besprechen? Kontaktieren Sie die Kanzlei Zaugg Lisa in Zürich telefonisch oder über das Anfrageformular.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={PRACTICE_INFO.phoneRaw}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#78282D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#5E1E23] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>044 240 21 00</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#181715] text-xs uppercase tracking-wider font-semibold hover:bg-[#181715] hover:text-[#FAF8F5] transition-colors"
            >
              <span>Kontakt & Anfahrt</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
