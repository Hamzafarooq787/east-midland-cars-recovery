import Link from 'next/link';
import Header, { Brand } from '../components/header';
import { FloatingActions } from '../components/actions';
import { business, nav, SITE_URL } from '../components/site';
import './globals.css';

const socialImage = new URL('/images/og-image.jpg', SITE_URL).href;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: '24/7 Car Recovery in the East Midlands', template: '%s | East Midland Cars Recovery' },
  description: '24/7 car recovery, breakdown assistance and towing in Nottingham, Derby, Leicester and surrounding areas.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: business.name,
    images: [{
      url: socialImage,
      width: 1200,
      height: 630,
      alt: '24/7 Car Recovery & Breakdown Across the East Midlands',
    }],
  },
  twitter: { card: 'summary_large_image', images: [socialImage] },
  robots: { index: false, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="en-GB"><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header/>
    <main id="main">{children}</main>
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <Brand/>
        <nav aria-label="Footer menu">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
        <div className="credit">Designed With <span aria-label="love">♥</span> by <a href="https://linkedo.co.uk/" target="_blank" rel="nofollow noopener noreferrer">Linkedo</a></div>
      </div>
    </footer>
    <FloatingActions/>
  </body></html>;
}
