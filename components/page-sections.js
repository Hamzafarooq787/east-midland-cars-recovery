import { ContactActions } from './actions';

export function PageIntro({ label, title, children }) {
  return <section className="page-intro">
    <div className="wrap">
      <p className="eyebrow" data-hero-motion>{label}</p>
      <h1 data-hero-motion>{title}</h1>
      <p className="page-lead" data-hero-motion>{children}</p>
    </div>
  </section>;
}

export function Coverage() {
  return <section className="coverage" aria-labelledby="coverage-title" data-reveal>
    <div>
      <p className="eyebrow">East Midlands, UK</p>
      <h2 id="coverage-title">Where we work</h2>
      <p>We cover these cities and surrounding areas. Send your pickup postcode or a map pin so we can confirm availability.</p>
    </div>
    <ul className="coverage-cities"><li>Nottingham</li><li>Derby</li><li>Leicester</li></ul>
  </section>;
}

export function RecoveryCta({ title = 'Need help with your vehicle?' }) {
  return <section className="page-cta" data-reveal>
    <div><h2>{title}</h2><p>Call or message us with your pickup location and vehicle details, day or night.</p></div>
    <ContactActions/>
  </section>;
}
