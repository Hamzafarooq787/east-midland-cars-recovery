'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-hero-motion]', { y: 14, duration: 0.65, stagger: 0.08, ease: 'power2.out', clearProps: 'transform' });
      for (const section of gsap.utils.toArray('[data-reveal]')) {
        if (section.getBoundingClientRect().top < window.innerHeight) continue;
        gsap.from(section, {
          y: 18, opacity: 0.65, duration: 0.55, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 92%', once: true },
        });
      }
    });
    return () => motion.revert();
  }, []);
  return null;
}
