export type PageId = 'home' | 'services' | 'about' | 'faq' | 'contact';

export type Language = 'de' | 'en';

export interface PracticeInfo {
  name: string;
  title: string;
  category: string;
  address: {
    street: string;
    zipCity: string;
    district: string;
    canton: string;
    country: string;
    full: string;
  };
  phone: string;
  phoneRaw: string;
  email: string;
  hours: {
    days: string;
    time: string;
    note: string;
  };
}

export interface LegalServiceItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  typicalMatters: string[];
  approach: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'mandate' | 'fees' | 'process' | 'general';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredContact: 'phone' | 'email';
  subject: string;
  urgency: 'standard' | 'urgent';
  message: string;
  conflictCheckAcknowledged: boolean;
}
