import Motion from '../../components/motion';
import { Coverage, PageIntro, RecoveryCta } from '../../components/page-sections';
import { business, services } from '../../components/site';

export const metadata = {
  title: 'About Us',
  description: 'Meet East Midland Cars Recovery and Breakdown 24/7, serving Nottingham, Derby and Leicester.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return <>
    <Motion/>
    <PageIntro label="About us" title="Local recovery, day or night">
      Car recovery, breakdown support and towing across Nottingham, Derby, Leicester and nearby areas.
    </PageIntro>
    <div className="wrap section page-stack">
      <section className="about-grid page-story" aria-label="Our story and why choose us" data-reveal>
        <div>
          <h2>Our story</h2>
          <p>{business.name} serves drivers who need help getting a vehicle off the roadside or moved to another address.</p>
          <p>A breakdown can leave you unsure what to do next. We keep the process simple. Tell us where you are, what happened and where the vehicle needs to go, and we’ll explain the next steps.</p>
        </div>
        <div className="why">
          <h2>Why choose us?</h2>
          <ul>
            <li>Call or message us any time of day.</li>
            <li>Speak to a local recovery service that covers the East Midlands.</li>
            <li>Agree pickup and drop-off details before booking.</li>
          </ul>
        </div>
      </section>
      <dl className="trust about-stats" aria-label="Service at a glance" data-reveal>
        <div><dt>Availability</dt><dd>24/7</dd></div>
        <div><dt>Core cities</dt><dd>3</dd></div>
        <div><dt>Recovery and towing services</dt><dd>{services.length}</dd></div>
      </dl>
      <Coverage/>
      <section className="page-panel" data-reveal>
        <h2>Our 24/7 promise</h2>
        <p>You can contact us for recovery day or night, including weekends. Share your location and vehicle details so we can confirm availability for your pickup.</p>
      </section>
      <RecoveryCta/>
    </div>
  </>;
}
