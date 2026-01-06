'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        <div>
          <span style={{ letterSpacing: '2px', opacity: 0.7 }}>
            MY PORTFOLIO
          </span>

          <h1 style={{ fontSize: '52px', fontWeight: 700, marginTop: '18px' }}>
            Hi, I’m <span style={{ color: 'var(--purple-1)' }}>Huzaifa Shah</span>
          </h1>

          <h2
            style={{
              fontSize: '38px',
              fontWeight: 700,
              color: 'var(--purple-2)',
              marginTop: '6px',
            }}
          >
            Full Stack Developer
          </h2>

          <p
            style={{
              marginTop: '22px',
              maxWidth: '480px',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
            }}
          >
            I design and build visually rich, scalable web applications with a
            strong focus on performance and user experience.
          </p>

          <div style={{ marginTop: '34px', display: 'flex', gap: '18px' }}>
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="glass"
              style={{
                padding: '14px 30px',
                borderRadius: '999px',
                color: '#fff',
                fontWeight: 500,
                background:
                  'linear-gradient(135deg, rgba(177,76,255,0.35), rgba(255,122,217,0.35))',
                border: '1px solid rgba(255,255,255,0.25)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 12px 30px rgba(177,76,255,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              My Projects
            </button>

            <a
              href="./Huzaifa Zahid Shah Resume.pdf"
              download
              style={{
                padding: '12px 26px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Download CV
            </a>
          </div>
 
          <div style={{ marginTop: '26px', display: 'flex', gap: '16px' }}>
            <a
              href="tel:+91 7738527112"
              target="_blank"
              aria-label="Phone Number"
            >
              <img src="./phone.png" width={30} />
            </a>
            <a
              href="https://github.com/huzaifazshah01"
              target="_blank"
              aria-label="GitHub"
            >
              <img src="./github.png" width={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/huzaifa-zahid-shah-0a05a02a7/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <img src="./linkedin.png" width={30} />
            </a>
            <a
              href="https://instagram.com/huzzzzthere"
              target="_blank"
              aria-label="Instagram"
            >
              <img src="./instagram.png" width={30} />
            </a>
            <a
              href="mailto:huzaifazahid54@outlook.com"
              target="_blank"
              aria-label="Email"
            >
              <img src="./outlook.png" width={35} />
            </a>
          </div>
        </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
           style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            overflow: 'hidden',

            border: '4px solid transparent',
            background:
              'linear-gradient(#0000, #0000), linear-gradient(135deg, var(--purple-1), var(--purple-2))',
            backgroundClip: 'padding-box, border-box',
          }}
        >
          <img
            src="/myphoto.jpeg"
            alt="Huzaifa Zahid Shah"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      </div>
    </section>
  );
}
