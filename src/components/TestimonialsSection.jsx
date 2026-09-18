const testimonials = [
  {
    quote:
      "Mbongwa creatives brought City of Africa's vision to life with a video that was both visually stunning and deeply compelling. Their creativity, professionalism, and attention to detail exceeded our expectations a true testament to their craft",
    author: 'Jabu Selby',
    role: 'Founder of City of Africa',
  },
  {
    quote:
      "We’ve been working with Mbongwa Creatives for a while now. They take whatever we brief them on and turn it into designs that are clean, creative and perfectly on-brand. Very responsive, they meet deadlines and their attention to detail is incredible.",
    author: 'Fika Mchunu',
    role: 'CEO of Home & Tech Box',
  },
  {
    quote:
      'Teboho is a genuinely talented creative and strategist, with a sharp eye for how different parts of a campaign or brand come together to serve a bigger vision. He brings both insight and execution to the table, and takes feedback with real maturity and openness. Working with Teboho has been a pleasure, and I have no doubt he’ll bring the same energy and growth mindset to whatever he takes on next.',
    author: 'Zethe Zimela',
    role: 'Social Media Strategist, @iSupport Creative Business',
  },
]

function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-label="Testimonials">
      <div className="section-header testimonials-header">
        <h2>What My Clients Say</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-item" key={item.author}>
            <p className="testimonial-quote">“{item.quote}”</p>
            <div className="testimonial-meta">
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
