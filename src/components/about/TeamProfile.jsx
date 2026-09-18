function TeamProfile({ name, role, summary, quote }) {
  return (
    <article className="team-card">
      <span className="team-badge">{role}</span>
      <h3>{name}</h3>
      <p>{summary}</p>
      {quote && <p aria-label="Featured quote">“{quote}”</p>}
    </article>
  )
}

export default TeamProfile
