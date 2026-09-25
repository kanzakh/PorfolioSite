"use client";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={darkMode ? "dark-mode" : ""}>

      {/* NAVBAR */}
      <nav className="navbar">

        <h2 className="logo">
          KANZA<span>.</span>
        </h2>

        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>My Work</a>
          <a href="#contact" className="nav-button mobile-only" onClick={() => setMenuOpen(false)}>
            Contact ↗
          </a>
        </div>

        <div className="nav-actions">

          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <a href="#contact" className="nav-button desktop-only">
            Contact ↗
          </a>

          <button
            className={menuOpen ? "hamburger open" : "hamburger"}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>


      {/* HERO */}
      <section id="home" className="hero">

        <img
  src="/profile.jpg"
  alt="Kanza"
  className="profile"
 />

        <p className="hello">
          Hi! I'm KANZA 👋
        </p>

        <h1>
          Front End Developer
          <br />
          Based in Pakistan.
        </h1>

        <p className="hero-text">
          I create clean, modern and responsive websites with a focus
          on simple design, good user experience and modern web
          technologies.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="primary-button">
            Contact Me →
          </a>

          <a href="#work" className="secondary-button">
            My Work ↓
          </a>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section about-section">

        <p className="section-label">
          Introduction
        </p>

        <h2>
          About Me
        </h2>

        <div className="about-content">

          <div className="about-photo">
           <img
  src="/profile.jpg"
  alt="Kk"
  className="profile-photo"
/>
          </div>

          <div className="about-text">

            <p>
              I'm a front end developer based in Pakistan, passionate
              about creating clean, responsive and user-friendly
              websites.
            </p>

            <p>
              I enjoy turning ideas into interactive web experiences
              and continuously improving my skills by building real
              projects. I work with HTML, CSS, JavaScript, React and
              Next.js.
            </p>

            <p>
              My goal is to create websites that look good, work
              smoothly and provide a simple experience for users.
            </p>

          </div>

        </div>


        {/* ABOUT INFO */}
        <div className="info-grid">

          <div className="info-card">

            <p className="info-number">
              01
            </p>

            <h3>
              Languages
            </h3>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>

          </div>


          <div className="info-card">

            <p className="info-number">
              02
            </p>

            <h3>
              Education
            </h3>

            <p className="education">
              Computer Science
            </p>

          </div>


          <div className="info-card">

            <p className="info-number">
              03
            </p>

            <h3>
              Projects
            </h3>

            <ul>
              <li>EduSite</li>
              <li>Space Exploration Site</li>
              <li>Tic Tac Toe</li>
              <li>Article Hub</li>
            </ul>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section">

        <p className="section-label">
          What I Use
        </p>

        <h2>
          My Skills
        </h2>

        <p className="section-text">
          Technologies and tools I use while learning and building
          front end projects.
        </p>

        <div className="skills">

          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Next.js</div>
          <div>Git & GitHub</div>

        </div>

      </section>


      {/* MY WORK */}
      <section id="work" className="section work-section">

        <p className="section-label">
          Portfolio
        </p>

        <h2>
          My Latest Work
        </h2>

        <p className="section-text">
          Here are some of the projects I have built while developing
          my front end skills.
        </p>


        <div className="projects">


          {/* EDUSITE */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">
                01
              </span>

              <span className="project-type">
                Website
              </span>
            </div>

            <h3>
              EduSite
            </h3>

            <p>
              A multi-page educational website featuring Home, About,
              Courses, Blog and Contact pages.
            </p>

            <span className="technology">
              HTML · CSS
            </span>

            <a
              href="https://kanzakh.github.io/EduSite-Cap1/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project ↗
            </a>

          </div>


          {/* SPACE */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">
                02
              </span>

              <span className="project-type">
                Website
              </span>
            </div>

            <h3>
              Space Exploration Site
            </h3>

            <p>
              A multi-page space exploration website featuring
              destinations, crew and technology sections.
            </p>

            <span className="technology">
              HTML · CSS
            </span>

            <a
              href="https://kanzakh.github.io/Space-Exploration-Site/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project ↗
            </a>

          </div>


          {/* TIC TAC TOE */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">
                03
              </span>

              <span className="project-type">
                Game
              </span>
            </div>

            <h3>
              Tic Tac Toe
            </h3>

            <p>
              A browser-based Tic Tac Toe game created to practice
              JavaScript logic and interactive web development.
            </p>

            <span className="technology">
              HTML · CSS · JavaScript
            </span>

            <a
              href="https://kanzakh.github.io/tic-tac-toe/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project ↗
            </a>

          </div>


          {/* ARTICLE HUB */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">
                04
              </span>

              <span className="project-type">
                React
              </span>
            </div>

            <h3>
              Article Hub
            </h3>

            <p>
              A modern article website created with React while
              practicing component-based front end development.
            </p>

            <span className="technology">
              React
            </span>

            <a
              href="https://article-hub-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project ↗
            </a>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <p className="section-label">
          Get In Touch
        </p>

        <h2>
          I'd Love To Hear From You.
        </h2>

        <p className="contact-intro">
          Have a project, question or idea? Send me a message.
        </p>


        <form
  className="contact-form"
  action="https://api.web3forms.com/submit"
  method="POST"
>
  <input
  type="hidden"
  name="access_key"
  value="6e315fe5-b00e-4b4f-ae51-5e6917be21c2"
/>

          <div className="form-row">

            <div className="form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
  id="name"
  type="text"
  name="name"
  placeholder="Enter your name"
  required
/>

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email Address
                
              </label>

              <input
  id="email"
  type="email"
  name="email"
  placeholder="Enter your email"
  required
/>

            </div>

          </div>


          <div className="form-group">

            <label htmlFor="subject">
              Subject
            </label>

            <input
              id="subject"
              type="text"
              placeholder="What is this about?"
            />

          </div>


          <div className="form-group">

            <label htmlFor="message">
              Your Message
            </label>

            <textarea
              id="message"
              rows="6"
              placeholder="Write your message here..."
            ></textarea>

          </div>


          <button
            type="submit"
            className="submit-button"
          >
            Send Message →
          </button>

        </form>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-content">

          <div>

            <h3>
              KANZA.
            </h3>

            <p>
              Front End Developer
            </p>

          </div>


          <div className="footer-contact">

            <p>
              kanza@web.pk
            </p>

            <div className="socials">

              <a
                href="https://github.com/kanzakh"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 KANZA. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}
