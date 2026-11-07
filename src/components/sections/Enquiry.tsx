import { ArrowRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import Reveal from '@/components/ui/Reveal';
import { BUSINESS } from '@/data/site';
import {
  BUDGET_OPTIONS,
  buildWhatsAppEnquiryUrl,
  PROPERTY_TYPES,
  SERVICE_OPTIONS,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryValues,
} from '@/lib/enquiry';

const EMPTY_VALUES: EnquiryValues = {
  name: '',
  phone: '',
  email: '',
  propertyType: '',
  service: '',
  budget: '',
  details: '',
};

type EnquiryProps = {
  presetService: string;
};

type FieldProps = {
  id: keyof EnquiryValues;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
};

function Field({ id, label, error, className = '', children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-charcoal-800">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-error-600">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(error?: string) {
  return `field-input ${error ? 'border-error-500' : 'border-beige-300 hover:border-gold-500/70'}`;
}

export default function Enquiry({ presetService }: EnquiryProps) {
  const [values, setValues] = useState<EnquiryValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetService) setValues((previous) => ({ ...previous, service: presetService }));
  }, [presetService]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateEnquiry(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;
    window.open(buildWhatsAppEnquiryUrl(values), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const describedBy = (key: keyof EnquiryValues) => (errors[key] ? `${key}-error` : undefined);

  return (
    <section id="enquiry" className="scroll-mt-24 bg-beige-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-700">Project Enquiry</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.2] text-charcoal-900 sm:text-5xl">
            LET&apos;S CREATE YOUR DREAM SPACE.
          </h2>
          <p className="mt-6 text-base leading-[1.6] text-charcoal-600 sm:text-lg">
            Planning a new home interior or looking to transform your existing space? Tell us about your vision and
            connect with Arora Interiors.
          </p>

          <div className="mt-10 flex flex-col gap-4 border-t border-charcoal-900/10 pt-8 text-sm text-charcoal-700">
            <p>Prefer to talk directly?</p>
            <div className="flex flex-wrap gap-3">
              <a href={BUSINESS.phoneHref} className="btn btn-outline-dark px-5 py-2.5">
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark px-5 py-2.5"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="rounded-sm bg-ivory-50 p-6 shadow-xl shadow-charcoal-900/10 ring-1 ring-charcoal-900/5 sm:p-10">
            {submitted ? (
              <div role="status" className="flex flex-col items-start gap-5 py-6 animate-fade-in">
                <CheckCircle2 className="h-10 w-10 text-success-600" />
                <h3 className="font-serif text-3xl text-charcoal-900">Your enquiry is ready in WhatsApp.</h3>
                <p className="text-sm leading-[1.6] text-charcoal-600">
                  WhatsApp has opened with your details pre-filled. Review the message and send it to share your
                  enquiry with Arora Interiors.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setValues(EMPTY_VALUES);
                  }}
                  className="btn btn-outline-dark px-5 py-2.5"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Full Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={describedBy('name')}
                    className={inputClass(errors.name)}
                  />
                </Field>

                <Field id="phone" label="Phone Number" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    aria-invalid={!!errors.phone}
                    aria-describedby={describedBy('phone')}
                    className={inputClass(errors.phone)}
                  />
                </Field>

                <Field id="email" label="Email Address" error={errors.email} className="sm:col-span-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={describedBy('email')}
                    className={inputClass(errors.email)}
                  />
                </Field>

                <Field id="propertyType" label="Property Type" error={errors.propertyType}>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={values.propertyType}
                    onChange={handleChange}
                    aria-invalid={!!errors.propertyType}
                    aria-describedby={describedBy('propertyType')}
                    className={inputClass(errors.propertyType)}
                  >
                    <option value="" disabled>
                      Select property type
                    </option>
                    {PROPERTY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="service" label="Interested Service" error={errors.service}>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    aria-invalid={!!errors.service}
                    aria-describedby={describedBy('service')}
                    className={inputClass(errors.service)}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="budget" label="Approximate Project Budget" error={errors.budget} className="sm:col-span-2">
                  <select
                    id="budget"
                    name="budget"
                    value={values.budget}
                    onChange={handleChange}
                    aria-invalid={!!errors.budget}
                    aria-describedby={describedBy('budget')}
                    className={inputClass(errors.budget)}
                  >
                    <option value="" disabled>
                      Select an approximate range
                    </option>
                    {BUDGET_OPTIONS.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="details" label="Project Details" error={errors.details} className="sm:col-span-2">
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    value={values.details}
                    onChange={handleChange}
                    placeholder="Tell us about your space, your style and what you would like to achieve."
                    aria-invalid={!!errors.details}
                    aria-describedby={describedBy('details')}
                    className={`${inputClass(errors.details)} resize-y`}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn btn-dark w-full py-4 sm:w-auto">
                    DISCUSS YOUR PROJECT
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-4 text-xs leading-[1.6] text-charcoal-500">
                    Submitting opens WhatsApp with your details pre-filled. This is an enquiry only and does not confirm
                    an appointment or project booking.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
