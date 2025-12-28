'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import ExpandableText from './ExpandableText';


const projects = [
  {
    title: 'AI Driven Unified Smart Investment Guidance Platform',
    image: '/projects/project1.png',
    desc: 'Developed an intelligent investment advisory platform that analyzes user profiles, financial goals, and market data to deliver personalized investment recommendations across multiple asset classes. The system leverages AI models for risk assessment, portfolio optimization, and data-driven decision support.',
    codeLink: 'https://github.com/DETROIT-221204/DhanGyan',
  },
  {
    title: 'Disaster Management System Using Random Forest and Logistic Regression',
    image: '/projects/project2.png',
    desc: 'Built a system using ML algorithms such as Random Forest and Logistic Regression that predicts natural disasters up to 30 days in advance with severity and probability visualization on a geo-map.',
    codeLink: 'https://github.com/huzaifazshah01/Disaster-aggregation-system',
  },
  {
    title: 'Hotel Booking Cancellation System',
    image: '/projects/project3.png',
    desc: 'Developed an Excel-based hotel booking cancellation system to efficiently track reservations, cancellations, and customer details. The system utilizes structured spreadsheets, formulas, and data validation to analyze cancellation trends, calculate refund eligibility, and maintain accurate booking records. It enables easy data management, reporting, and decision-making without the need for complex software systems.',
    codeLink: 'https://github.com/huzaifazshah01/Hotel-booking-cancellation-system',
  },
  {
    title: 'Comprehensive Color Recognition System',
    image: '/projects/project4.png',
    desc: 'Developed a comprehensive color recognition system capable of accurately identifying and classifying colors from digital images using image processing and machine learning techniques. The system analyzes pixel-level data, extracts dominant color features, and maps them to predefined color categories, enabling applications in design analysis, object detection, and visual automation.',
    codeLink: 'https://github.com/huzaifazshah01/Comprehensive_Color_Recognition_System',
  },
  {
    title: 'Credit Card Fraud Detection System',
    image: '/projects/project5.png',
    desc: 'Developed a machine learning–based fraud detection system to identify suspicious credit card transactions in real time. The model analyzes transaction patterns, spending behavior, and anomaly indicators to accurately distinguish between legitimate and fraudulent activities. Emphasis was placed on minimizing false positives while ensuring high detection accuracy using data preprocessing, feature engineering, and supervised learning algorithms.',
    codeLink: 'https://github.com/huzaifazshah01/Credit_Card_Fraud_Detection',
  },
  {
    title: 'Employee Directory Search System',
    image: '/projects/project6.png',
    desc: 'The Employee Directory Search System is a full-stack web application that allows users to search and view employee details based on name or department through a clean and responsive interface. The frontend is built using React with Vite to provide a smooth user experience, while the backend is developed with Python and FastAPI to handle API requests, business logic, and database interactions. Employee data is stored in a relational database hosted on Render, with SQLAlchemy used for data modeling and querying. The application follows a client–server architecture, where the frontend communicates with the backend via RESTful APIs. For deployment, the backend and database are hosted on Render, and the frontend is deployed on Vercel, allowing independent scaling and modern deployment workflows.',
    codeLink: 'https://huzaifa-zahid-shah-assignment.vercel.app/',
  },
  {
    title: 'Website for Marketing Agency',
    image: '/projects/project7.png',
    desc: 'Designed and developed a professional website for Ayyah, a creative marketing agency, with a strong focus on modern branding, intuitive UI/UX, and seamless user experience. The platform was crafted to reflect the agency’s identity through visually compelling layouts, clear content hierarchy, and responsive design. Emphasis was placed on client engagement by integrating strategic call-to-actions, service showcases, and performance-oriented design elements to effectively communicate the agency’s value proposition and drive conversions.',
    codeLink: 'https://ayyah-ahs.netlify.app/',
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const visibleProjects = projects.slice(index, index + 3);

  return (
    <section id="projects" style={{ padding: '160px 0' }}>
      <Reveal>
        {/* SECTION HEADER */}
        <h2
          style={{
            textAlign: 'center',
            fontSize: '42px',
            fontWeight: 700,
            marginBottom: '18px',
          }}
        >
          My Projects
        </h2>

        <p
          style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            marginBottom: '90px',
          }}
        >
          Discover the projects that showcase my passion for design and innovation
        </p>

        {/* PROJECT CARDS — SAME AS OLD DESIGN */}
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
        >
          {visibleProjects.map((project) => (
  <div
    key={project.title}
    className="glass"
    style={{
      borderRadius: '26px',
      overflow: 'hidden',
      position: 'relative', // 🔴 IMPORTANT
    }}
  >
    {/* IMAGE / PREVIEW */}
   <div
  style={{
    height: '220px',
    overflow: 'hidden',
  }}
>
  <img
    src={project.image}
    alt={project.title}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
</div>


    {/* CONTENT */}
    <div style={{ padding: '26px' }}>
      <h3 style={{ fontSize: '22px', fontWeight: 600 }}>
        {project.title}
      </h3>
      <ExpandableText text={project.desc} />
    </div>

    {/* CODE LINK ICON */}
    <a
      href={project.codeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="glass"
      style={{
        position: 'absolute',
        bottom: '18px',
        right: '18px',
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
      }}
    >
      <img src="./code.svg" width={20} height={20} alt="View Code" />
    </a>
  </div>
))}
          <button
            onClick={() => setIndex(Math.max(index - 1, 0))}
            className="glass"
            style={{
              padding: '10px 18px',
              borderRadius: '999px',
              opacity: index === 0 ? 0.4 : 1,
            }}
            disabled={index === 0}
          >
            ◀
          </button>

          <button
            onClick={() =>
              setIndex(Math.min(index + 1, projects.length - 3))
            }
            className="glass"
            style={{
              padding: '10px 18px',
              borderRadius: '999px',
              opacity: index >= projects.length - 3 ? 0.4 : 1,
            }}
            disabled={index >= projects.length - 3}
          >
            ▶
          </button>

          <button
            style={{
              marginLeft: '12px',
              padding: '10px 28px',
              borderRadius: '999px',
              background:
                'linear-gradient(135deg, var(--purple-1), var(--purple-2))',
              color: '#fff',
              fontWeight: 500,
            }}
          >
            See All
          </button>
        </div>
      </Reveal>
    </section>
  );
}
