import Reveal from "./Reveal";
export default function Contact() {
  return (
    <section id="contact" style={{ padding: '160px 0' }}>
      <Reveal>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        <div>
          <h2 style={{ fontSize: '42px', fontWeight: 700 }}>
            Let’s Create Something Amazing Together
          </h2>
        </div>

        <form
          className="glass"
          style={{
            borderRadius: '28px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <input
            className="glass"
            placeholder="Name"
            style={{
              padding: '14px 18px',
              borderRadius: '14px',
              color: '#fff',
            }}
          />

          <input
            className="glass"
            placeholder="Email"
            style={{
              padding: '14px 18px',
              borderRadius: '14px',
              color: '#fff',
            }}
          />

          <textarea
            className="glass"
            placeholder="Message"
            rows={4}
            style={{
              padding: '14px 18px',
              borderRadius: '14px',
              color: '#fff',
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: '10px',
              padding: '14px',
              borderRadius: '999px',
              background:
                'linear-gradient(135deg, var(--purple-1), var(--purple-2))',
            }}
          >
            Send Message
          </button>
        </form>
      </div>
      </Reveal>
    </section>
  );
}
