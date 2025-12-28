'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const testimonials = [
  {
    name: 'Huda Samer',
    role: 'CEO',
    text:
      'Huzaifa did an amazing job designing a user-friendly and intuitive experience. His attention to detail made a huge difference.',
  },
  {
    name: 'Ahmed Ali',
    role: 'Product Manager',
    text:
      'Great communication, excellent execution, and a strong design sense. Highly recommended.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section id="testimonials" style={{ padding: '160px 0' }}>
      <Reveal>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '42px',
          fontWeight: 700,
          marginBottom: '80px',
        }}
      >
        Testimonials
      </h2>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div
          className="glass"
          style={{
            borderRadius: '28px',
            padding: '48px',
            minHeight: '220px',
          }}
        >
          <p style={{ fontSize: '18px', lineHeight: 1.7 }}>
            “{testimonials[index].text}”
          </p>

          <div style={{ marginTop: '28px' }}>
            <strong>{testimonials[index].name}</strong>
            <div style={{ opacity: 0.7 }}>{testimonials[index].role}</div>
          </div>
        </div>

        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
