function ProcessStage({ step, name, description }) {
  return (
    <article className="process-card feature-card">
      <span className="step-label">Step {step}</span>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default ProcessStage
