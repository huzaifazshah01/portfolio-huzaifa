'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About Me', id: 'aboutme' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'My Works', id: 'projects' },
  ];

  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s!));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar-desktop fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="glass"
          style={{
            borderRadius: 'var(--radius-pill)',
            padding: '14px 36px',
            display: 'flex',
            gap: '28px',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              style={{
                opacity: active === item.id ? 1 : 0.6,
                fontWeight: active === item.id ? 600 : 400,
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}
          <button
        onClick={() => scrollTo('contact')}
        style={{
          marginLeft: '18px',
          padding: '10px 26px',
          borderRadius: 'var(--radius-pill)',
          background:
            'linear-gradient(135deg, var(--purple-1), var(--purple-2))',
          color: '#fff',
          fontWeight: 500,
        }}
      >
        Contact Us
      </button>

        </div>
      </nav>

          <button
          className="navbar-mobile-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? '✕' : '☰'}
        </button>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="glass mobile-menu-inner">


         {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="glass mobile-nav-item"
                style={{
                  borderRadius: '999px',
                  padding: '14px 20px',
                  textAlign: 'left',
                  fontSize: '18px',
                  fontWeight: active === item.id ? 600 : 400,
                  color: '#fff',
                  background:
                    active === item.id
                      ? 'linear-gradient(135deg, var(--purple-1), var(--purple-2))'
                      : undefined,
                }}
              >
                {item.label}
              </button>
            ))}
            <button
            onClick={() => scrollTo('contact')}
            style={{
              marginTop: '12px',
              padding: '14px',
              borderRadius: '999px',
              background:
                'linear-gradient(135deg, var(--purple-1), var(--purple-2))',
              color: '#fff',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
