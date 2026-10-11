import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="kontakt" className="section">
      <Reveal>
        <h2>
          <span>03</span> Kontakt
        </h2>
        <div className="contact-grid">
          <div>
            <p className="lead">
              Har du ett projekt, en LIA-plats eller bara en fråga? Hör av dig!
            </p>
            <ul className="contact-list">
              <li>
                <a href="mailto:aldacatovic2607@gmail.com">aldacatovic2607@gmail.com</a>              </li>
              <li>
                <a
                  href="https://github.com/aldacat-fed"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alda-catovic-2324593a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
