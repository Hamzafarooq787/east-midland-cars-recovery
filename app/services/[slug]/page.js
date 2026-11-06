import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ContactActions } from '../../../components/actions';
import Motion from '../../../components/motion';
import { RecoveryCta } from '../../../components/page-sections';
import { services } from '../../../components/site';
import { details } from '../details';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return {
    title: `${service.name} in the East Midlands`,
    description: details[slug].description,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const { imageAlt, description, benefits, questions } = details[slug];

  return <>
    <Motion/>
    <section className="hero">
      <div className="wrap hero-grid detail-hero">
        <div className="hero-content">
          <Link href="/services" className="text-link" data-hero-motion>← All services</Link>
          <p className="eyebrow" data-hero-motion>24/7 East Midlands recovery</p>
          <h1 data-hero-motion>{service.name}</h1>
          <p className="hero-lead" data-hero-motion>{description}</p>
          <div data-hero-motion><ContactActions/></div>
        </div>
        <div className="hero-media">
          <Image src={`/images/${slug}.webp`} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 55vw" preload/>
        </div>
      </div>
    </section>
    <div className="wrap section page-stack">
      <section className="page-panel" data-reveal>
        <h2>What you can expect</h2>
        <ul className="benefit-list">{benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
      </section>
      <section className="faq" aria-label={`${service.name} FAQs`} data-reveal>
        <div><p className="eyebrow">Common questions</p><h2>FAQs</h2></div>
        <div>{questions.map(([question, answer]) => <details key={question}>
          <summary>{question}<span aria-hidden="true"/></summary><p>{answer}</p>
        </details>)}</div>
      </section>
      <RecoveryCta title={`Need ${service.name.toLowerCase()}?`}/>
    </div>
  </>;
}
