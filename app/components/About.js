import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">About</div>
            <h2 className="section-title">
              Backend instincts,
              <br />
              ML focus.
            </h2>
          </div>
          <div className="section-note">
            A Computer Science background that shows up in how I structure a pipeline, not
            just how I tune a model.
          </div>
        </div>

        <Reveal className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m a <strong>Computer Science graduate</strong> working across the full
              ML lifecycle, from exploratory analysis and feature engineering to model
              evaluation and deployment. My core toolkit is{" "}
              <strong>classification, regression, and clustering</strong>, built in Python
              and scikit-learn.
            </p>
            <p>
              My strongest thread of work is <strong>healthcare ML</strong>: a 
              clinical predictive model benchmarking algorithms on cardiac datasets surfaced a
              real problem; models trained on Western populations don&apos;t generalize
              well to Nigerian patient data. That finding shapes most of what I build now.
            </p>
            <p>
              Alongside modeling, I work with <strong>Power BI and Excel</strong> for data
              analysis and reporting, giving me range across both the technical and
              business sides of a data problem.
            </p>
          </div>

          <div className="focus-list">
            <div className="focus-item">
              <div className="focus-label mono">MODEL</div>
              <div className="focus-text">
                Classification &amp; regression: <strong>Random Forest, XGBoost, SVM,</strong>{" "}
                linear/logistic/polynomial regression.
              </div>
            </div>
            <div className="focus-item">
              <div className="focus-label mono">DOMAIN</div>
              <div className="focus-text">
                Clinical risk prediction, with attention to{" "}
                <strong>generalization across populations.</strong>
              </div>
            </div>
            <div className="focus-item">
              <div className="focus-label mono">ANALYSIS</div>
              <div className="focus-text">
                EDA, dashboards, and reporting in <strong>Power BI and Excel.</strong>
              </div>
            </div>
            <div className="focus-item">
              <div className="focus-label mono">STACK</div>
              <div className="focus-text">
                Python, scikit-learn, pandas, XGBoost — with a full-stack background in{" "}
                <strong>TypeScript and React.</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
