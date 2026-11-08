# east-midland-cars-recovery
East Midland Cars Recovery &amp; Breakdown 24/7 - car recovery, breakdown, accident recovery and towing website (Next.js)

## Run locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
npm run build
```

The Local Assist homepage uses temporary contact details in `components/site.js`.
The site currently emits a noindex directive while those details are temporary.
The canonical origin is set by `SITE_URL` in `components/site.js`. Before launch,
update the contact details and review the indexing directive in `app/layout.js`.
