import { SITE_URL, services } from '../components/site';

export default function sitemap() {
  return ['', '/services', '/about', '/contact', ...services.map(({ slug }) => `/services/${slug}`)]
    .map((path) => ({ url: new URL(path || '/', SITE_URL).href }));
}
