export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow hero-eyebrow">Machine Learning &amp; Data Science</div>
          <h1 className="name">
            Building pipelines
            <br /> that
            <em>generalize</em>.
          </h1>
          <div className="hero-role mono">ML Engineer — Data Scientist </div>
          <p className="hero-desc">
            I build machine learning models that hold up outside
            the training set; with a research focus on clinical AI and domain adaptation
            for underrepresented patient populations.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn primary">View Work</a>
            <a href="#contact" className="btn ghost">Get in Touch</a>
          </div>
        </div>

        <div className="pulse-panel">
          <svg className="pulse-line" viewBox="0 0 400 140" preserveAspectRatio="none">
            <path
              className="pulse-path"
              d="M0,70 L60,70 L80,70 L92,20 L104,120 L116,45 L128,70 L160,70 L180,70 L195,55 L210,85 L225,70 L400,70"
            />
          </svg>
          <div className="pulse-caption">
            MODEL AUC-ROC <span className="val">0.932</span>
          </div>
        </div>
      </div>
    </header>
  );
}
