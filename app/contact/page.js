import Contact from '../../components/contact';

export const metadata = {
  title: 'Contact Us',
  description: 'Call or request a WhatsApp quote for vehicle recovery in the East Midlands.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <div className="wrap subpage"><h1>Contact us</h1><Contact/></div>;
}
