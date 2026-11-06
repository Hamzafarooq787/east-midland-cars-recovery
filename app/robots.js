import { business } from '../components/site';

export default function robots() {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${business.url}/sitemap.xml` };
}
