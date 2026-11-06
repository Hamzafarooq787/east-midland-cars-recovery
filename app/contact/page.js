import Contact from '../../components/contact';
import Motion from '../../components/motion';
import { Coverage, PageIntro, RecoveryCta } from '../../components/page-sections';

export const metadata = {
  title: 'Contact Us',
  description: 'Call or request a WhatsApp quote for vehicle recovery in the East Midlands.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <>
    <Motion/>
    <PageIntro label="24/7 enquiries" title="Contact us">
      Call, send a WhatsApp message or use the form to request a recovery quote.
    </PageIntro>
    <div className="wrap section page-stack">
      <section aria-label="Contact details and quotation form" data-reveal><Contact showAddress/></section>
      <Coverage/>
      <RecoveryCta title="Ready to arrange recovery?"/>
    </div>
  </>;
}
