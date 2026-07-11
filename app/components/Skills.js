import Reveal from "./Reveal";

const COLUMNS = [
  {
    title: "ML & Modeling",
    tags: [
      "Classification",
      "Regression",
      "Clustering",
      "Random Forest",
      "XGBoost",
      "SVM",
      "Feature Engineering",
    ],
  },
  {
    title: "Languages & Tools",
    tags: ["Python", "scikit-learn", "pandas / NumPy", "TypeScript", "React / Next.js", "Git"],
  },
  {
    title: "Data Analysis / BI",
    tags: ["Power BI", "Excel", "EDA", "Streamlit"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Toolkit</div>
            <h2 className="section-title">Skills</h2>
          </div>
          <div className="section-note">
            Grounded in modeling, sharpened by tools people actually use to make decisions.
          </div>
        </div>

        <Reveal className="skills-grid">
          {COLUMNS.map((col) => (
            <div className="skill-col" key={col.title}>
              <div className="skill-col-title">{col.title}</div>
              <div className="skill-tags">
                {col.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
