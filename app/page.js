import Image from 'next/image';
import Link from 'next/link';
import { ContactActions } from '../components/actions';
import Contact from '../components/contact';
import { Icon } from '../components/icons';
import Motion from '../components/motion';
import { services } from '../components/site';

export const metadata = {
  alternates: { canonical: '/' },
};

const faqs = [
  ['Are you available 24/7?', 'Yes. You can get in touch for car recovery, breakdown recovery and towing at any time, including weekends.'],
  ['Which areas do you cover?', 'We cover Nottingham, Derby, Leicester and surrounding areas across the East Midlands. Send us your location so we can confirm coverage.'],
  ['Can you recover my vehicle after an accident?', 'Yes. Share your location, the condition of your vehicle and where it needs to go so we can discuss collection.'],
  ['What details should I have ready?', 'Have your pickup location, vehicle make and model, a brief description of what happened and your preferred destination ready.'],
];

export default function Home() {
  return <>
    <Motion/>
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-content">
          <p className="eyebrow hero-label" data-hero-motion><Icon name="clock" size={16}/> 24/7 recovery across the East Midlands</p>
          <h1 data-hero-motion>Broken Down?<br/>We Can Help.</h1>
          <p className="hero-lead" data-hero-motion>Car recovery, breakdown assistance and towing across Nottingham, Derby, Leicester and nearby areas.</p>
          <div data-hero-motion><ContactActions/></div>
        </div>
        <div className="hero-media">
          <Image src="/images/hero.webp" alt="Recovery technician in orange high-vis beside a flatbed truck" fill sizes="(max-width: 760px) 100vw, 55vw" preload/>
        </div>
      </div>
    </section>

    <section className="wrap section" aria-labelledby="services-heading" data-reveal>
      <div className="section-heading">
        <div><p className="eyebrow">What we do</p><h2 id="services-heading">Our services</h2><p>Roadside recovery and vehicle transport across the East Midlands.</p></div>
        <Link href="/services" className="text-link">All services <Icon name="arrow" size={18}/></Link>
      </div>
      <ul className="service-grid">{services.map(({ name, slug, text }) => <li key={slug}>
        <Link href={`/services/${slug}`} className="service-card">
          <Image src={`/images/${slug}.webp`} alt="" width={508} height={508} sizes="(max-width: 480px) 46vw, (max-width: 1000px) 32vw, 20vw"/>
          <div className="service-copy"><h3>{name}</h3><p>{text}</p><Icon name="arrow" size={18}/></div>
        </Link>
      </li>)}</ul>
    </section>

    <section className="wrap about-grid" data-reveal aria-label="About our recovery service">
      <div>
        <p className="eyebrow">About us</p><h2>Local recovery, day or night</h2>
        <p>East Midland Cars Recovery and Breakdown 24/7 helps drivers when a breakdown, accident or other problem means their vehicle needs to be moved.</p>
        <Link href="/about" className="text-link">More about us <Icon name="arrow" size={18}/></Link>
      </div>
      <div className="why">
        <h2>Why choose us?</h2>
        <ul><li>Recovery enquiries around the clock</li><li>Coverage across three East Midlands cities and nearby areas</li><li>Discuss pickup and drop-off before booking</li></ul>
      </div>
    </section>

    <div className="wrap">
      <ul className="trust" aria-label="Service commitments" data-reveal>
        {[['clock', '24/7 availability', 'Day or night'], ['pin', 'Local coverage', 'Across the East Midlands'], ['whatsapp', 'Call or WhatsApp', 'Choose how to get in touch']].map(([icon, label, detail]) => <li key={label}><Icon name={icon} size={30}/><div><strong>{label}</strong><span>{detail}</span></div></li>)}
      </ul>
    </div>

    <section className="wrap section" aria-labelledby="area-heading" data-reveal>
      <div className="coverage">
        <div><p className="eyebrow">East Midlands, UK</p><h2 id="area-heading">Where we work</h2>
          <p>We cover Nottingham, Derby, Leicester and surrounding areas. Share your pickup location to check availability.</p>
          <Link href="/contact" className="text-link">Check your location <Icon name="arrow" size={18}/></Link>
        </div>
        <iframe
          className="area-map"
          src="https://www.google.com/maps?q=East+Midlands,+UK&output=embed"
          title="Google Maps showing our East Midlands recovery service area"
          loading="lazy"
        />
      </div>
    </section>

    <section className="wrap faq" aria-labelledby="faq-heading" data-reveal>
      <div><p className="eyebrow">Common questions</p><h2 id="faq-heading">FAQs</h2></div>
      <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true"/></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="wrap section" data-reveal aria-label="Contact and quotes"><Contact/></section>
  </>;
}
