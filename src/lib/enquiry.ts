import { BUSINESS, SERVICES } from '@/data/site';

export const PROPERTY_TYPES = ['Apartment', 'Independent House', 'Office', 'Commercial', 'Other'] as const;

export const SERVICE_OPTIONS = [...SERVICES.map((service) => service.title), 'Not sure yet'] as const;

export const BUDGET_OPTIONS = [
  'Under ₹5 Lakh',
  '₹5 Lakh to ₹15 Lakh',
  '₹15 Lakh to ₹30 Lakh',
  '₹30 Lakh and above',
  'Prefer to discuss',
] as const;

export type EnquiryValues = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  service: string;
  budget: string;
  details: string;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidIndianMobile(input: string) {
  const digits = input.replace(/\D/g, '');
  const local =
    digits.length === 12 && digits.startsWith('91')
      ? digits.slice(2)
      : digits.length === 11 && digits.startsWith('0')
        ? digits.slice(1)
        : digits;
  return /^[6-9]\d{9}$/.test(local);
}

export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!isValidIndianMobile(values.phone)) errors.phone = 'Enter a valid 10-digit mobile number.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!values.propertyType) errors.propertyType = 'Select a property type.';
  if (!values.service) errors.service = 'Select a service.';
  if (!values.budget) errors.budget = 'Select an approximate budget.';
  if (values.details.trim().length < 10) errors.details = 'Share a few details (at least 10 characters).';
  return errors;
}

export function buildWhatsAppEnquiryUrl(values: EnquiryValues) {
  const message = [
    'Hello Arora Interiors, I would like to discuss a project.',
    '',
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Email: ${values.email.trim()}`,
    `Property Type: ${values.propertyType}`,
    `Interested Service: ${values.service}`,
    `Approximate Budget: ${values.budget}`,
    '',
    `Project Details: ${values.details.trim()}`,
  ].join('\n');
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
