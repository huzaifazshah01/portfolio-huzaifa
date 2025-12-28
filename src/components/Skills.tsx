import Reveal from "./Reveal";

export default function Skills() {
  const skills = [
    {
      title: 'Frontend',
      icon: '/icons/frontend.gif',
      items: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Backend',
      icon: '/icons/backend.gif',
      items: ['FastAPI', 'Python', 'REST APIs', 'Node.js'],
    },
    {
      title: 'Database',
      icon: '/icons/data.gif',
      items: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Tools',
      icon: '/icons/tools.gif',
      items: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman'],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: '160px 0',
      }}
    >
      <Reveal>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          {/* SECTION HEADER */}
          <div style={{ textAlign: 'center', marginBottom: '90px' }}>
            <h2
              style={{
                fontSize: '42px',
                fontWeight: 700,
              }}
            >
              Skills
            </h2>
          </div>

          {/* SKILLS GRID */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '32px',
            }}
          >
            {skills.map((group) => (
              <div
                key={group.title}
                className="glass"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  padding: '36px 32px',
                  textAlign: 'center',
                }}
              >
                {/* ICON */}
                <div
                  className="glass"
                  style={{
                    width: '65px',
                    height: '65px',
                    borderRadius: '18px',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      'linear-gradient(135deg, rgba(177,76,255,0.35), rgba(255,122,217,0.35))',
                  }}
                >
                  <img
                    src={group.icon}
                    alt={group.title}
                    style={{
                      width: '45px',
                      height: '45px',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* TITLE */}
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    marginBottom: '24px',
                    color: 'var(--purple-1)',
                  }}
                >
                  {group.title}
                </h3>

                {/* SKILL LIST */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      style={{
                        opacity: 0.8,
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
