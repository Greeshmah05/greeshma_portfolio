import './App.css'

const skills = [
  'Python',
  'Machine Learning',
  'Deep Learning',
  'NLP',
  'Flask',
  'React',
  'PostgreSQL',
  'MySQL',
]

const highlights = [
  { value: '9.72', label: 'Current CGPA' },
  { value: '3', label: 'Featured projects' },
  { value: '1', label: 'Research internship' },
]

const timeline = [
  {
    title: 'Research Intern',
    meta: 'Manipal Institute of Technology, Manipal · Jun 2025 - Jul 2025',
    points: [
      'Built a deep learning model for skin lesion classification using the HAM10000 dataset.',
      'Applied preprocessing, augmentation, Focal Loss, and model evaluation with accuracy, F1-score, confusion matrix, and Grad-CAM.',
    ],
  },
]

const projects = [
  {
    title: 'Intelligent Resume Classification Using AI and NLP for Academic Recruitment',
    tech: 'Python, Flask, scikit-learn, PostgreSQL, React',
    meta: 'NMAM Institute of Technology, Nitte · May 2026',
    points: [
      'Developed an NLP-based system to extract and structure information from PDF resumes for automated screening.',
      'Implemented rule-based eligibility filtering, TF-IDF similarity, and weighted ranking to assess candidate relevance.',
      'Reduced manual effort and improved shortlisting accuracy through structured automation.',
    ],
  },
  {
    title: 'Hostel Management System',
    tech: 'PHP, MySQL, Bootstrap 5',
    meta: 'NMAM Institute of Technology, Nitte · Nov 2025',
    points: [
      'Built a role-based web system for attendance, visitor and leave requests, room allocation, complaints, and mess billing.',
      'Designed the MySQL database with triggers to automate attendance and mess balance updates.',
      'Implemented secure authentication using password hashing, sessions, and prepared statements.',
    ],
  },
  {
    title: 'Employee Turnover and Wellness Prediction',
    tech: 'Machine Learning, Python',
    meta: 'NMAM Institute of Technology, Nitte · Apr 2025',
    points: [
      'Applied Random Forest, Logistic Regression, Gradient Boosting, KNN, and SVM for predictive analysis.',
      'Conducted comparative analysis to improve prediction accuracy and produce actionable insights.',
    ],
  },
]

const achievements = [
  'Winner - Pitchathon 2025, organised by E Cell Nitte in association with IIC-NMAMIT',
  'First Runner-Up - Pitch Storm 2025, NITTE Intra-University Idea Challenge',
]

function App() {
  return (
    <main className="portfolio-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">AI and Data Science Student</p>
          <h1>Greeshma H Bhandary</h1>
          <p className="lead">
            I build practical AI, ML, and full-stack solutions that turn data into decisions and
            ideas into polished products.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="mailto:greeshmahbhandary2005@gmail.com">
              Contact Me
            </a>
            <a
              className="secondary-action"
              href="https://www.linkedin.com/in/greeshma-h-bhandary"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
            <a
              className="secondary-action"
              href="https://github.com/Greeshmah05"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>

          <div className="highlights">
            {highlights.map((item) => (
              <article key={item.label} className="highlight-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <div className="panel-card profile-card">
            <p className="panel-label">Profile</p>
            <h2>Building reliable systems with thoughtful design</h2>
            <p>
              Based in Mangalore, Karnataka. Interested in machine learning, intelligent search,
              and product-focused web development.
            </p>
          </div>

          <div className="panel-card contact-card">
            <p className="panel-label">Contact</p>
            <a href="mailto:greeshmahbhandary2005@gmail.com">greeshmahbhandary2005@gmail.com</a>
            <a href="tel:+919481508834">+91 9481508834</a>
            <span>Mangalore, Karnataka</span>
            <a
              href="https://github.com/Greeshmah05"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </aside>
      </section>

      <section className="content-grid">
        <article className="content-card wide-card">
          <div className="section-heading">
            <p className="eyebrow">Objective</p>
            <h2>Focused on internships and real-world impact</h2>
          </div>
          <p>
            Aspiring Artificial Intelligence and Data Science student seeking internship
            opportunities to apply academic knowledge and contribute to impactful projects. I
            enjoy solving problems across the stack, from model training and evaluation to clear
            interfaces and reliable backend logic.
          </p>
        </article>

        <article className="content-card">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools and strengths</h2>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
          <p className="subtext">Soft skills: Team Management, Communication, Volunteering</p>
        </article>

        <article className="content-card wide-card">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Academic background</h2>
          </div>
          <div className="education-list">
            <div>
              <strong>B.Tech - Artificial Intelligence & Data Science</strong>
              <span>NMAM Institute of Technology, Nitte · 2023 - 2027</span>
            </div>
            <div>
              <strong>Pre-University</strong>
              <span>Dr. NSAM PU College, Nanthoor, Mangalore · 2021 - 2023</span>
            </div>
            <div>
              <strong>High School</strong>
              <span>Vidyarathna English Medium School, Deralakatte · 2018 - 2021</span>
            </div>
          </div>
        </article>

        <article className="content-card wide-card">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Research internship</h2>
          </div>
          <div className="timeline">
            {timeline.map((entry) => (
              <div key={entry.title} className="timeline-item">
                <div className="timeline-marker" />
                <div>
                  <h3>{entry.title}</h3>
                  <p className="meta">{entry.meta}</p>
                  <ul>
                    {entry.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="content-card projects-card">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>
          <div className="project-stack">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <p className="project-tech">{project.tech}</p>
                <h3>{project.title}</h3>
                <p className="meta">{project.meta}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>

        <article className="content-card">
          <div className="section-heading">
            <p className="eyebrow">Achievements</p>
            <h2>Recognition</h2>
          </div>
          <ul className="achievement-list">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="footer-banner">
        <p>
          Open to internship opportunities, collaborative projects, and roles where AI and
          product thinking meet.
        </p>
      </section>
    </main>
  )
}

export default App
