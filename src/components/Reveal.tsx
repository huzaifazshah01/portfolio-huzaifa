'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children?: ReactNode;
};

export default function Reveal({ children }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
        } else {
          el.classList.remove('reveal-visible');
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      <div className="reveal-inner">
        {children}
      </div>
    </div>
  );
}
