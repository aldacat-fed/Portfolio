import Reveal from "./Reveal";

const skills = [
  "HTML",
  "CSS/SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Figma",
  "UX",
];

export default function About() {
  return (
    <section id="om-mig" className="section">
      <Reveal>
        <h2>
          <span>01</span> Om mig
        </h2>
        <div className="about-grid">
          <p>
            Jag studerar Frontend utveckling på Medieinstitutet. Jag trivs
            bäst där design och kod möts: att förvandla en skiss i Figma till
            ett gränssnitt som känns bra att använda på alla skärmar. Just nu
            fördjupar jag mig i JavaScript, TypeScript och React, men har bra kunskaper på HTML och CSS.
          </p>
          <ul className="chips">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
