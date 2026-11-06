import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '../../components/icons';
import Motion from '../../components/motion';
import { PageIntro, RecoveryCta } from '../../components/page-sections';
import { services } from '../../components/site';
import { details } from './details';

export const metadata = {
  title: 'Recovery Services',
  description: 'Car, breakdown, vehicle and accident recovery, plus car towing in the East Midlands.',
  alternates: { canonical: '/services' },
};

export default function Services() {
  return <>
    <Motion/>
    <PageIntro label="24/7 East Midlands recovery" title="Recovery services">
      From an unexpected breakdown to a planned tow, find the right service for your vehicle.
    </PageIntro>
    <div className="wrap section page-stack">
      <section aria-labelledby="service-list-heading" data-reveal>
        <h2 id="service-list-heading" className="section-title">How we can help</h2>
        <ul className="service-grid full-service-grid">
          {services.map(({ slug, name, text }) => <li id={slug} key={slug}>
            <Link href={`/services/${slug}`} className="service-card">
              <Image src={`/images/${slug}.webp`} alt={details[slug].imageAlt} width={508} height={508} sizes="(max-width: 540px) 100vw, (max-width: 900px) 48vw, 33vw"/>
              <div className="service-copy">
                <h3>{name}</h3><p>{text}</p><span className="service-more">View service <Icon name="arrow" size={18}/></span>
              </div>
            </Link>
          </li>)}
        </ul>
      </section>
      <RecoveryCta/>
    </div>
  </>;
}
