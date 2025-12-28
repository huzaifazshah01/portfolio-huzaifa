import Reveal from "./Reveal";

const services = [
  {
    title: 'AI & Machine Learning Solutions',
    desc: 'Design and develop intelligent systems that analyze data, make predictions, and automate decision-making using advanced ML algorithms.',
    icon: '/icons/ai.svg',
  },
  {
    title: 'Data Science & Predictive Analytics',
    desc: 'Transform raw data into actionable insights through statistical analysis, visualization, and predictive modeling.',
    icon: '/icons/data.svg',
  },
  {
    title: 'Full-Stack Web Development',
    desc: 'Build scalable, high-performance web applications using modern frontend and backend technologies with secure API integration.',
    icon: '/icons/web.svg',
  },
  {
    title: 'Data Analytics & Business Intelligence',
    desc: 'Analyze business data to uncover trends, optimize strategies, and support data-driven decision-making.',
    icon: '/icons/bi.svg',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '160px 0' }}>
      <Reveal>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '42px',
            fontWeight: 700,
            marginBottom: '80px',
          }}
        >
          Services
        </h2>

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '26px',
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="glass"
              style={{
                borderRadius: '24px',
                padding: '36px 28px',
                minHeight: '260px',
                textAlign: 'center',
              }}
            >
  
              <div
                className="glass"
                style={{
                  width: '65px',
                  height: '65px',
                  borderRadius: '18px',
                  margin: '0 auto 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background:
                    'linear-gradient(135deg, rgba(177,76,255,0.35), rgba(255,122,217,0.35))',
                }}
              >
                <img
                  src={s.icon}
                  alt={s.title}
                  style={{
                    width: '30px',
                    height: '30px',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 600 }}>
                {s.title}
              </h3>

              <p
                style={{
                  marginTop: '18px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
