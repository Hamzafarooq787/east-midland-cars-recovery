import { Icon } from './icons';
import { business } from './site';

export function ContactActions() {
  return <div className="actions">
    <a className="button" href={business.tel}><Icon name="phone" size={20}/> Call {business.phone}</a>
    <a className="button whatsapp" href={business.whatsapp}><Icon name="whatsapp" size={20}/> WhatsApp Us</a>
  </div>;
}

export function FloatingActions() {
  return <div className="floating-actions" aria-label="Quick contact">
    <a className="button" href={business.tel} aria-label="Call East Midland Cars Recovery"><Icon name="phone"/></a>
    <a className="button whatsapp" href={business.whatsapp} aria-label="Open WhatsApp"><Icon name="whatsapp"/></a>
  </div>;
}
