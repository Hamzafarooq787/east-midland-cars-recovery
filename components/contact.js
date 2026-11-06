import { ContactActions } from './actions';
import { Icon } from './icons';
import QuoteForm from './quote-form';
import { business } from './site';

export default function Contact() {
  return <div className="contact-grid">
    <div className="contact-info">
      <p className="eyebrow">Here day and night</p>
      <h2>Get in touch</h2>
      <p>Need recovery or towing? Tell us where you are, what you’re driving and where you need the vehicle to go.</p>
      <a className="contact-email" href={`mailto:${business.email}`}><Icon name="mail" size={19}/><span>{business.email}</span></a>
      <ContactActions/>
    </div>
    <QuoteForm/>
  </div>;
}
