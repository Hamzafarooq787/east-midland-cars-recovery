'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { Icon } from './icons';
import { business, nav } from './site';

export function Brand({ preload = false }) {
  return <Link className="brand" href="/">
    <Image
      src="/images/logo.webp"
      alt="East Midland Cars Recovery and Breakdown 24/7"
      width={900}
      height={255}
      sizes={preload ? '(max-width: 760px) 128px, 156px' : '156px'}
      preload={preload}
    />
  </Link>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const pathname = usePathname();
  return <header className="site-header" onKeyDown={(event) => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      button.current?.focus();
    }
  }}>
    <div className="wrap header-inner">
      <Brand preload/>
      <button ref={button} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(!open)}>
        <Icon name={open ? 'close' : 'menu'}/><span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>
      <nav id="primary-menu" className={open ? 'primary-nav is-open' : 'primary-nav'} aria-label="Main menu">
        {nav.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <a className="button header-call" href={business.tel}><Icon name="phone" size={18}/> Call {business.phone}</a>
    </div>
  </header>;
}
