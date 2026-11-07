import { Navigation, Phone, MapPin, MessageCircle } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { BUSINESS } from '@/data/site';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-stretch gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="flex flex-col">
          <SectionHeading
            eyebrow="Contact"
            title="Find Arora Interiors."
            description="Reach out by phone or WhatsApp, or visit us at our Pandav Nagar location in New Delhi."
          />

          <ul className="mt-12 flex flex-col gap-6 border-t border-charcoal-900/10 pt-10">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-500">Address</p>
                <p className="mt-2 text-base leading-[1.6] text-charcoal-900">{BUSINESS.address}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-500">Phone</p>
                <a href={BUSINESS.phoneHref} className="mt-2 inline-block text-base text-charcoal-900 transition-colors hover:text-gold-700">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={BUSINESS.phoneHref} className="btn btn-dark">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={BUSINESS.profileUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
          <p className="mt-6 text-sm text-charcoal-600">
            Find us on{' '}
            <a
              href={BUSINESS.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-charcoal-900 underline decoration-gold-500 underline-offset-4 transition-colors hover:text-gold-700"
            >
              Google Business Profile
            </a>
          </p>
        </Reveal>

        <Reveal delay={150} className="min-h-[420px]">
          <div className="h-full min-h-[420px] overflow-hidden rounded-sm shadow-xl shadow-charcoal-900/10 ring-1 ring-charcoal-900/5">
            <iframe
              title="Map showing Arora Interiors at Shop Plot 63, Patparganj Rd, Pandav Nagar, New Delhi"
              src={BUSINESS.mapEmbedUrl}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
