import Link from 'next/link';
import { services } from '../../components/site';

export const metadata = {
  title: 'Recovery Services',
  description: 'Car, breakdown, vehicle and accident recovery, plus car towing in the East Midlands.',
  alternates: { canonical: '/services' },
};

export default function Services() {
  return <div className="wrap subpage">
    <p className="eyebrow">East Midlands vehicle recovery</p><h1>Recovery services</h1>
    <ul className="service-list">{services.map(({ slug, name, text }) => <li id={slug} key={slug}><h2>{name}</h2><p>{text}</p></li>)}</ul>
    <Link href="/contact" className="button">Request a quote</Link>
  </div>;
}
