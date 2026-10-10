import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hem" className="hero">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Webbutvecklare &amp; designer
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hej, jag är <em>Alda</em>.<br />
        Jag bygger webben snygg och användbar.
      </motion.h1>
      <motion.div
        className="hero-actions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a className="btn" href="#projekt">
          Se mina projekt
        </a>
        <a className="btn ghost" href="#kontakt">
          Kontakta mig
        </a>
      </motion.div>
    </section>
  );
}