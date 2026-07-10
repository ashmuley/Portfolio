import "./Skills.css";

const SkillCard = ({
  title,
  description,
  icon,
  color,
  technologies,
  index,
}) => {
  return (
    // <div
    //   className="skill-card"
    //   style={{
    //     "--accent": color,
    //     top: `${90 + index * 45}px`,
    //     zIndex: index + 1,
    //   }}
    // >
    <div
  className="skill-card"
  style={{
    "--accent": color,
    "--card-index": index,
    zIndex: index + 1,
  }}
>
      {/* Background Glow */}
      <div className="card-glow"></div>

      {/* Header */}
      <div className="card-header">

        <div className="card-icon">
          {icon}
        </div>

        <div className="card-title">

          <h2>{title}</h2>

          <p>{description}</p>

        </div>

      </div>

      {/* Tech Pills */}

      <div className="tech-container">

        {technologies.map((tech, i) => (

          <div className="tech-pill" key={i}>

            {tech.icon && (
              <span className="pill-icon">
                {tech.icon}
              </span>
            )}

            <span>{tech.name}</span>

          </div>

        ))}

      </div>

      {/* Bottom Accent */}

      <div className="card-accent"></div>

    </div>
  );
};

export default SkillCard;