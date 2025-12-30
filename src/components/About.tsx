import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="aboutme"
      style={{
        padding: '160px 0',
        transitionDelay: '0.15s',
      }}
    >
      <Reveal>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '80px',
            alignItems: 'center',
          }}
        >
  
          <div>
            <span
              style={{
                letterSpacing: '2px',
                opacity: 0.7,
                fontSize: '14px',
              }}
            >
              ABOUT ME
            </span>

            <h2
              style={{
                fontSize: '42px',
                fontWeight: 700,
                marginTop: '18px',
              }}
            >
              Passionate about building
              <br />
              impactful digital products
            </h2>

            <p
              style={{
                marginTop: '26px',
                maxWidth: '460px',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
              }}
            >
              I’m a full stack developer focused on crafting clean, scalable, and
              visually rich applications. I enjoy working at the intersection of
              design and engineering, turning complex problems into intuitive
              solutions.
            </p>
          </div>

          <div
            className="glass"
            style={{
              borderRadius: 'var(--radius-xl)',
              padding: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              { label: 'Work Experience', value: '0 Years' },
              { label: 'Projects', value: '7' },
              { label: 'Tech Stack', value: 'Full Stack' },
              { label: 'Focus', value: 'AI & Web Development' },
            ].map((item) => (
              <div key={item.label}>
                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--purple-1)',
                  }}
                >
                  {item.value}
                </h3>
                <p
                  style={{
                    marginTop: '6px',
                    opacity: 0.75,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
