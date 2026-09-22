import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Scale,
  Train,
  Car,
  Compass,
  Building,
  ShieldCheck,
} from 'lucide-react';
import { ContactFormData } from '../../types';
import { PRACTICE_INFO } from '../../data/practice';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    subject: 'Allgemeine Zivilrechtsfrage',
    urgency: 'standard',
    message: '',
    conflictCheckAcknowledged: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState<string>('');
  const [mapMode, setMapMode] = useState<'interactive' | 'directions'>('directions');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Bitte geben Sie Ihren vollständigen Namen an.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
    }

    if (formData.preferredContact === 'phone') {
      if (!formData.phone.trim() || formData.phone.trim().length < 7) {
        newErrors.phone = 'Für telefonische Rückrufe ist eine gültige Telefonnummer erforderlich.';
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Bitte schildern Sie Ihr Anliegen in mindestens 15 Zeichen.';
    }

    if (!formData.conflictCheckAcknowledged) {
      newErrors.conflictCheckAcknowledged =
        'Bitte bestätigen Sie den Hinweis zur Interessenprüfung und Mandatsbegründung.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Generate reference number
      const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
      const randomPart = Math.floor(1000 + Math.random() * 9000);
      const ref = `ZL-ZH-${dateStr}-${randomPart}`;
      setInquiryRef(ref);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-[#FAF8F5] border-b border-[#E6E0D4] py-12 md:py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
            <MapPin className="w-4 h-4" />
            <span>Kanzleisitz Zürich · Gartenhofstrasse 15</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#181715] max-w-4xl tracking-tight leading-[1.14]">
            Kontakt & Besprechungstermine
          </h1>
          <p className="text-base sm:text-lg text-[#4E4A44] max-w-3xl leading-relaxed">
            Für eine vertrauliche Erstbesprechung oder zur Prüfung einer Mandatsübernahme stehen wir Ihnen telefonisch oder über das nachfolgende Anfrageformular gerne zur Verfügung.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Contact Info */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#F7F4EE] border-b border-[#E6E0D4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact & Office Particulars */}
            <div className="lg:col-span-5 space-y-8">
              {/* Primary Call Card */}
              <div className="bg-[#FAF8F5] border border-[#DDD7CC] p-8 space-y-6 editorial-shadow">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#78282D] font-semibold block">
                  Direkter Telefondienst
                </span>
                <div className="space-y-2">
                  <h2 className="font-editorial text-2xl md:text-3xl text-[#181715]">
                    Telefonische Kontaktaufnahme
                  </h2>
                  <p className="text-xs text-[#524E47] leading-relaxed">
                    Für dringliche Fristsachen oder direkte Terminvereinbarungen empfehlen wir den telefonischen Erstkontakt:
                  </p>
                </div>

                <div className="p-4 bg-[#F2EDE4]/60 border border-[#E3DDD3]">
                  <a
                    href={PRACTICE_INFO.phoneRaw}
                    className="flex items-center gap-3 group focus:outline-none"
                    aria-label="Kanzlei anrufen: 044 240 21 00"
                  >
                    <div className="p-3 bg-[#78282D] text-white shrink-0 group-hover:bg-[#5E1E23] transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#78736B] block">
                        Kanzlei Telefonnummer
                      </span>
                      <span className="font-editorial text-2xl font-bold text-[#181715] group-hover:text-[#78282D] transition-colors">
                        {PRACTICE_INFO.phone}
                      </span>
                    </div>
                  </a>
                </div>

                <div className="space-y-3 pt-2 text-xs text-[#524E47]">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#78282D] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-[#181715] block">Kanzleizeiten:</span>
                      <span>Montag – Freitag: 08:30 – 12:00 | 13:30 – 17:30</span>
                      <span className="block text-[#8A847B] mt-0.5">
                        Besprechungen ausschliesslich nach Voranmeldung
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Building className="w-4 h-4 text-[#78282D] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-[#181715] block">Kanzleiadresse:</span>
                      <span>Gartenhofstrasse 15, 8004 Zürich</span>
                      <span className="block text-[#8A847B]">Kreis 4 / Aussersihl</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conflict & Secrecy Note */}
              <div className="p-6 bg-[#FAF8F5] border border-[#DDD7CC] space-y-3">
                <span className="text-xs font-semibold text-[#181715] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#78282D]" />
                  <span>Berufsgeheimnis & Formeller Hinweis</span>
                </span>
                <p className="text-xs text-[#524E47] leading-relaxed">
                  Die Übermittlung von Mitteilungen via E-Mail oder Kontaktformular begründet noch kein Mandatsverhältnis. Vor jeder Annahme eines Mandats wird geprüft, ob eine Vertretung mit Blick auf bestehende Mandate zulässig ist (Ausschluss von Interessenkollisionen).
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form or Success State */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF8F5] border border-[#DDD7CC] p-8 md:p-12 space-y-8 editorial-shadow">
                {isSubmitted ? (
                  <div className="space-y-6 text-center py-8 animate-in fade-in duration-300">
                    <div className="w-14 h-14 bg-[#78282D]/10 text-[#78282D] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
                        Anfrage übermittelt
                      </span>
                      <h2 className="font-editorial text-3xl text-[#181715]">
                        Vielen Dank für Ihre Nachricht
                      </h2>
                    </div>

                    <div className="max-w-md mx-auto p-4 bg-[#F7F4EE] border border-[#E3DDD3] text-left text-xs space-y-2 text-[#4E4A44]">
                      <div className="flex justify-between border-b border-[#E8E2D6] pb-1.5">
                        <span className="text-[#8A847B]">Referenznummer:</span>
                        <span className="font-mono font-semibold text-[#181715]">{inquiryRef}</span>
                      </div>
                      <div className="flex justify-between border-b border-[#E8E2D6] pb-1.5">
                        <span className="text-[#8A847B]">Name:</span>
                        <span className="font-medium text-[#181715]">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8A847B]">Rückmeldung:</span>
                        <span>Innert 1–2 Arbeitstagen via {formData.preferredContact === 'phone' ? 'Telefon' : 'E-Mail'}</span>
                      </div>
                    </div>

                    <p className="text-sm text-[#4E4A44] max-w-lg mx-auto leading-relaxed">
                      Ihre Angaben werden unter Berücksichtigung des anwaltlichen Berufsgeheimnisses vertraulich behandelt. Wir prüfen nun, ob keine Interessenkollision vorliegt, und melden uns zeitnah bei Ihnen.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={PRACTICE_INFO.phoneRaw}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#78282D] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#5E1E23] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Bei Dringlichkeit: 044 240 21 00</span>
                      </a>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            email: '',
                            phone: '',
                            preferredContact: 'phone',
                            subject: 'Allgemeine Zivilrechtsfrage',
                            urgency: 'standard',
                            message: '',
                            conflictCheckAcknowledged: false,
                          });
                        }}
                        className="px-5 py-2.5 border border-[#181715] text-xs uppercase tracking-wider font-semibold hover:bg-[#181715] hover:text-white transition-colors"
                      >
                        Neue Nachricht erfassen
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="space-y-2 pb-4 border-b border-[#E6E0D4]">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
                        Formularanfrage
                      </span>
                      <h2 className="font-editorial text-3xl text-[#181715]">
                        Terminanfrage & Sachverhalt
                      </h2>
                      <p className="text-xs text-[#69645E]">
                        Sämtliche Eingaben werden vertraulich behandelt. Mit Stern (*) gekennzeichnete Felder sind Pflichtfelder.
                      </p>
                    </div>

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="fullName"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#181715]"
                      >
                        Vollständiger Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Vorname Nachname / Firmenbezeichnung"
                        className={`w-full bg-[#FAF8F5] border p-3 text-sm text-[#181715] focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-[#B3261E] bg-[#FFF8F7]'
                            : 'border-[#DDD7CC] focus:border-[#78282D]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-[#B3261E] flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="block text-xs uppercase tracking-wider font-semibold text-[#181715]"
                        >
                          E-Mail-Adresse *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ihre.adresse@beispiel.ch"
                          className={`w-full bg-[#FAF8F5] border p-3 text-sm text-[#181715] focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-[#B3261E] bg-[#FFF8F7]'
                              : 'border-[#DDD7CC] focus:border-[#78282D]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-[#B3261E] flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="block text-xs uppercase tracking-wider font-semibold text-[#181715]"
                        >
                          Telefonnummer {formData.preferredContact === 'phone' ? '*' : '(optional)'}
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="079 000 00 00 oder 044..."
                          className={`w-full bg-[#FAF8F5] border p-3 text-sm text-[#181715] focus:outline-none transition-colors ${
                            errors.phone
                              ? 'border-[#B3261E] bg-[#FFF8F7]'
                              : 'border-[#DDD7CC] focus:border-[#78282D]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-[#B3261E] flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Preferred contact & Matter Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="preferredContact"
                          className="block text-xs uppercase tracking-wider font-semibold text-[#181715]"
                        >
                          Bevorzugter Kontaktweg
                        </label>
                        <select
                          id="preferredContact"
                          value={formData.preferredContact}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              preferredContact: e.target.value as 'phone' | 'email',
                            })
                          }
                          className="w-full bg-[#FAF8F5] border border-[#DDD7CC] p-3 text-sm text-[#181715] focus:outline-none focus:border-[#78282D]"
                        >
                          <option value="phone">Telefonischer Rückruf</option>
                          <option value="email">Schriftliche Mitteilung per E-Mail</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="subject"
                          className="block text-xs uppercase tracking-wider font-semibold text-[#181715]"
                        >
                          Rechtsbereich / Thema
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-[#FAF8F5] border border-[#DDD7CC] p-3 text-sm text-[#181715] focus:outline-none focus:border-[#78282D]"
                        >
                          <option value="Vertragsrecht & Zivilrecht">Vertragsrecht & Zivilrecht</option>
                          <option value="Mietrecht & Nachbarrecht">Mietrecht & Nachbarrecht</option>
                          <option value="Arbeitsrecht">Arbeitsrecht</option>
                          <option value="Familien- & Erbrecht">Familien- & Erbrecht</option>
                          <option value="Streitigkeit & Schlichtung">Streitigkeit & Schlichtung</option>
                          <option value="Verwaltungsrecht & Behörden">Verwaltungsrecht & Behörden</option>
                          <option value="Anderes rechtliches Anliegen">Anderes rechtliches Anliegen</option>
                        </select>
                      </div>
                    </div>

                    {/* Urgency indicator */}
                    <div className="p-3.5 bg-[#F7F4EE] border border-[#E6E0D4] space-y-2">
                      <span className="block text-xs uppercase tracking-wider font-semibold text-[#181715]">
                        Dringlichkeit & Fristen
                      </span>
                      <div className="flex flex-wrap gap-4 text-xs">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            checked={formData.urgency === 'standard'}
                            onChange={() => setFormData({ ...formData, urgency: 'standard' })}
                            className="accent-[#78282D]"
                          />
                          <span>Reguläre Anfrage (keine laufende Gerichtsfrist)</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            checked={formData.urgency === 'urgent'}
                            onChange={() => setFormData({ ...formData, urgency: 'urgent' })}
                            className="accent-[#78282D]"
                          />
                          <span className="text-[#78282D] font-medium">
                            Dringend / Gesetzliche Rechtsmittelfrist läuft
                          </span>
                        </label>
                      </div>
                      {formData.urgency === 'urgent' && (
                        <p className="text-[11px] text-[#78282D] bg-[#78282D]/10 p-2 border border-[#78282D]/20 leading-relaxed">
                          Achtung: Bei akuten gesetzlichen Fristen (z.B. 10- oder 30-tägige Rechtsmittelfristen) rufen Sie bitte direkt unter 044 240 21 00 an, da der elektronische Eingang fristwahrend nicht garantiert werden kann.
                        </p>
                      )}
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#181715]"
                      >
                        Kurzbeschreibung des Sachverhalts *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Bitte fassen Sie den Sachverhalt in Stichworten zusammen (z.B. betroffene Verträge, Streitwert oder Gegenpartei zur Interessenprüfung)..."
                        className={`w-full bg-[#FAF8F5] border p-3 text-sm text-[#181715] focus:outline-none transition-colors ${
                          errors.message
                            ? 'border-[#B3261E] bg-[#FFF8F7]'
                            : 'border-[#DDD7CC] focus:border-[#78282D]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-[#B3261E] flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Conflict check & disclaimer checkbox */}
                    <div className="space-y-1 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          id="conflictCheck"
                          type="checkbox"
                          checked={formData.conflictCheckAcknowledged}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              conflictCheckAcknowledged: e.target.checked,
                            })
                          }
                          className="mt-1 accent-[#78282D] shrink-0"
                        />
                        <span className="text-xs text-[#4E4A44] leading-relaxed">
                          Ich nehme zur Kenntnis, dass das Absenden dieses Formulars noch kein Mandatsverhältnis begründet. Ein Mandatsvertrag kommt erst nach Prüfung allfälliger Interessenkollisionen und ausdrücklicher Bestätigung durch die Kanzlei zustande.*
                        </span>
                      </label>
                      {errors.conflictCheckAcknowledged && (
                        <p className="text-xs text-[#B3261E] flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.conflictCheckAcknowledged}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 border-t border-[#E6E0D4]">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-4 bg-[#78282D] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#5E1E23] transition-colors shadow-xs"
                      >
                        <Send className="w-4 h-4" />
                        <span>Anfrage vertraulich übermitteln</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location, Transit Directions & Interactive Map */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#E6E0D4]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E6E0D4]">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#78282D] font-semibold">
                Anreise & Orientierung
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715]">
                Standort Gartenhofstrasse 15, 8004 Zürich
              </h2>
              <p className="text-sm text-[#5C5750]">
                Zentral im Quartier Wiedikon / Kreis 4 gelegen, verkehrstechnisch optimal erschlossen.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMapMode('directions')}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-colors ${
                  mapMode === 'directions'
                    ? 'bg-[#181715] text-white border-[#181715]'
                    : 'bg-[#FAF8F5] text-[#4E4A44] border-[#DDD7CC] hover:border-[#181715]'
                }`}
              >
                Anfahrtswege
              </button>
              <button
                onClick={() => setMapMode('interactive')}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-colors ${
                  mapMode === 'interactive'
                    ? 'bg-[#181715] text-white border-[#181715]'
                    : 'bg-[#FAF8F5] text-[#4E4A44] border-[#DDD7CC] hover:border-[#181715]'
                }`}
              >
                Stadtplanansicht
              </button>
            </div>
          </div>

          {mapMode === 'interactive' ? (
            <div className="bg-[#FAF8F5] border border-[#DDD7CC] overflow-hidden editorial-shadow">
              <div className="p-3 bg-[#F5EFE6] border-b border-[#E6E0D4] flex items-center justify-between text-xs text-[#6E6961]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#78282D]" />
                  Gartenhofstrasse 15, 8004 Zürich (Schweiz)
                </span>
                <a
                  href="https://www.openstreetmap.org/search?query=Gartenhofstrasse%2015%2C%208004%20Z%C3%BCrich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#78282D] hover:underline font-medium"
                >
                  Auf externem Kartenportal öffnen
                </a>
              </div>
              <div className="relative w-full h-[420px] bg-[#EAE4D8]">
                <iframe
                  title="Kanzleistandort Gartenhofstrasse 15, 8004 Zürich"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=8.5200%2C47.3680%2C8.5360%2C47.3750&amp;layer=mapnik&amp;marker=47.3718%2C8.5284"
                  className="w-full h-full border-0 filter contrast-[1.05] grayscale-[0.1]"
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Public transit */}
              <div className="bg-[#FFFFFF] border border-[#E3DDD3] p-8 space-y-4">
                <div className="w-10 h-10 bg-[#78282D]/10 text-[#78282D] flex items-center justify-center">
                  <Train className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-2xl text-[#181715]">
                  Öffentlicher Verkehr (VBZ / SBB)
                </h3>
                <ul className="space-y-3 text-xs text-[#524E47] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[#181715]">•</span>
                    <span>
                      <strong>Bahnhof Zürich Wiedikon:</strong> S-Bahn Linien S2, S8, S24 (ca. 4 Minuten Fussweg zur Gartenhofstrasse).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[#181715]">•</span>
                    <span>
                      <strong>Haltestelle Stauffacher:</strong> Tramlinien 2, 3, 8, 9, 14 (ca. 5 Minuten Fussweg).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[#181715]">•</span>
                    <span>
                      <strong>Ab Zürich Hauptbahnhof:</strong> ca. 7 Minuten Fahrzeit mit Tram 3 oder 14.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Private car */}
              <div className="bg-[#FFFFFF] border border-[#E3DDD3] p-8 space-y-4">
                <div className="w-10 h-10 bg-[#78282D]/10 text-[#78282D] flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-2xl text-[#181715]">
                  Anreise mit dem Auto & Parken
                </h3>
                <ul className="space-y-3 text-xs text-[#524E47] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[#181715]">•</span>
                    <span>
                      <strong>Blaue Zone:</strong> Vereinzelte Parkmöglichkeiten in der Gartenhofstrasse und den angrenzenden Quartierstrassen.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[#181715]">•</span>
                    <span>
                      <strong>Parkhaus Stauffacher Tor:</strong> Wenige Gehminuten entfernt an der Birmensdorferstrasse.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-[#181715]">•</span>
                    <span>
                      <strong>Parkhaus Gessnerallee:</strong> Rund 10 Gehminuten von der Kanzlei entfernt.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Consultation protocol */}
              <div className="bg-[#FFFFFF] border border-[#E3DDD3] p-8 space-y-4">
                <div className="w-10 h-10 bg-[#78282D]/10 text-[#78282D] flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-2xl text-[#181715]">
                  Empfang & Besprechung
                </h3>
                <p className="text-xs text-[#524E47] leading-relaxed">
                  Um für Ihre vertrauliche Besprechung die nötige Zeit und Ruhe zu garantieren, finden Treffen an der Gartenhofstrasse 15 ausschliesslich nach vorangegangener Terminvereinbarung statt.
                </p>
                <div className="pt-2">
                  <a
                    href={PRACTICE_INFO.phoneRaw}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#78282D] hover:underline"
                  >
                    <span>Termin telefonisch anfragen: 044 240 21 00</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
