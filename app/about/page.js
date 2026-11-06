import Link from 'next/link';
import { business } from '../../components/site';

export const metadata = {
  title: 'About Us',
  description: 'Meet East Midland Cars Recovery and Breakdown 24/7, serving Nottingham, Derby and Leicester.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return <div className="wrap subpage">
    <p className="eyebrow">About us</p><h1>Local recovery, day or night</h1>
    <p>{business.name} helps drivers across Nottingham, Derby, Leicester and surrounding areas with recovery and towing.</p>
    <Link href="/services" className="button">See our services</Link>
  </div>;
}
