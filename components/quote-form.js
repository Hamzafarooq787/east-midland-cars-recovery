'use client';

import { Icon } from './icons';
import { business, services } from './site';

export default function QuoteForm() {
  function openQuote(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hi, I would like a recovery quote.',
      `Name: ${data.get('name').trim()}`,
      `Service: ${data.get('service')}`,
      `Pickup location: ${data.get('location').trim()}`,
      `Vehicle and destination: ${data.get('details').trim()}`,
    ].join('\n');
    window.location.assign(`${business.whatsapp}?text=${encodeURIComponent(message)}`);
  }
  return <form className="quote-form" onSubmit={openQuote}>
    <h3>Request a quote</h3>
    <div className="field-pair">
      <label>Your name<input name="name" autoComplete="name" required maxLength={80}/></label>
      <label>Service<select name="service" required defaultValue=""><option value="" disabled>Choose a service</option>{services.map(({ name }) => <option key={name}>{name}</option>)}</select></label>
    </div>
    <label>Pickup location<input name="location" placeholder="Postcode, road or town" required maxLength={140}/></label>
    <label>Vehicle and destination<textarea name="details" rows={3} placeholder="Vehicle make and model, and where it needs to go" required maxLength={500}/></label>
    <button className="button whatsapp" type="submit"><Icon name="whatsapp" size={20}/> Get a quote on WhatsApp</button>
    <p className="form-note">You can review your message in WhatsApp before sending it.</p>
  </form>;
}
