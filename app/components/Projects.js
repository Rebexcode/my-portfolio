import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    featured: true,
    tag: "Flagship — Clinical ML",
    title: "Heart Attack Prediction for Hypertensive Patients",
    description:
      "A 1,190-patient cardiac dataset, filtered to isolate hypertensive patients, a subgroup at meaningfully higher cardiac risk. Engineered interaction features (age × max heart rate, BP × cholesterol), corrected class imbalance with SMOTE, and benchmarked three models to find the strongest predictor of risk in this specific population.",
    chips: ["Python", "scikit-learn", "XGBoost", "SMOTE", "Random Forest"],
    link: "https://github.com/Rebexcode/Heart-Attack-Prediction-for-Hypertensive-Patients",
    linkLabel: "View on GitHub",
    readoutTitle: "Best Model — Random Forest",
    metrics: [
      { label: "Accuracy", value: "90.4%", highlight: true, bar: 90.4 },
      { label: "F1-Score", value: "92.2%", bar: 92.2 },
      { label: "AUC-ROC", value: "92.9%", bar: 92.9 },
      { label: "Top predictor", value: "ST slope", small: true },
    ],
  },
  {
    featured: false,
    tag: "Deployment",
    title: "Heart Attack Prediction — Streamlit App",
    description:
      "An interactive deployment of the clinical prediction model, letting a user input patient parameters and get a real-time risk read; turning a notebook model into something a non-technical user can actually act on.",
    chips: ["Streamlit", "Python", "Model Deployment"],
    link: "https://rebexcode-heart-attack-streamlit-app-3tb9is.streamlit.app/",
    linkLabel: "View live prediction app",
    readoutTitle: "What it demonstrates",
    metrics: [
      { label: "Input → Output", value: "Live risk score", small: true },
      { label: "Audience", value: "Non-technical users", small: true },
      { label: "Skill shown", value: "Model → product", small: true },
    ],
  },
  {
    featured: false,
    tag: "Fundamentals",
    title: "Regression Techniques — A Comparative Study",
    description:
      "A deliberate pass through the regression family: Linear, Multiple Linear, Polynomial, Logistic, Decision Tree, Random Forest, and Support Vector Regression — each implemented from the ground up to build intuition for when and why each one breaks down.",
    chips: ["Linear", "Polynomial", "Logistic", "Decision Tree", "SVR"],
    link: "https://github.com/Rebexcode?tab=repositories&q=regression%22",
    linkLabel: "View repositories",
    readoutTitle: "Methods covered",
    metrics: [
      { label: "Linear family", value: "3 variants", small: true },
      { label: "Tree-based", value: "2 variants", small: true },
      { label: "Kernel-based", value: "SVR", small: true },
    ],
  },
];

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Selected Work</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="section-note">
            Three projects spanning clinical prediction, deployment, and regression
            fundamentals.
          </div>
        </div>

        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
