import Reveal from "./Reveal";

export default function ProjectCard({ featured, tag, title, description, chips, link, linkLabel, readoutTitle, metrics }) {
  return (
    <Reveal>
      <div className={`project ${featured ? "featured" : ""}`}>
        <div>
          <span className="project-tag">{tag}</span>
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{description}</p>
          <div className="project-meta">
            {chips.map((chip) => (
              <span className="chip" key={chip}>{chip}</span>
            ))}
          </div>
          <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
            {linkLabel} →
          </a>
        </div>

        <div className="readout">
          <div className="readout-title">{readoutTitle}</div>
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="metric-row">
                <span className="metric-label">{m.label}</span>
                <span className={`metric-value ${m.highlight ? "hi" : ""} ${m.small ? "small" : ""}`}>
                  {m.value}
                </span>
              </div>
              {m.bar !== undefined && (
                <div className="bar-track">
                  <div className="bar-fill" data-fill={m.bar}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
