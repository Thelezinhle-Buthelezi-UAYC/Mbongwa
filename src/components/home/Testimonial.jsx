function Testimonial({ quote, name, company }) {
  return (
    <article className="testimonial-card">
      <span className="quote-mark" aria-hidden="true">“</span>
      <p>{quote}</p>
      <div className="testimonial-meta">
        <strong>{name}</strong>
        <span>{company}</span>
      </div>
    </article>
  )
}

export default Testimonial
