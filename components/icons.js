const paths = {
  phone: <path d="M8 3H5a2 2 0 0 0-2 2 16 16 0 0 0 16 16 2 2 0 0 0 2-2v-3l-5-2-2 2a12 12 0 0 1-6-6l2-2-2-5Z"/>,
  whatsapp: <><path d="M5 18 3 22l5-1.5A9 9 0 1 0 5 18Z"/><path d="M9 8c-2 2 3 7 5 7l2-2-2-1-1 1a5 5 0 0 1-3-3l1-1-1-2Z"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></>,
  arrow: <path d="M3 12h17m-6-6 6 6-6 6"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  close: <path d="m5 5 14 14M19 5 5 19"/>,
  truck: <><path d="M2 16v-5h8l3 5h9v3h-2M9 19h7M4 19H2m8-8V7h3l4 8 3-4v-2m-7-2 7 2"/><circle cx="6.5" cy="19" r="2.5"/><circle cx="18" cy="19" r="2.5"/></>,
};

export function Icon({ name, size = 22 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
