const stages = [
  {
    number: '01',
    title: 'Discover & Define',
    description:
      "We uncover your brand's purpose, audience, and objectives while defining a clear positioning, messaging, and visual direction that forms the foundation of your brand.",
  },
  {
    number: '02',
    title: 'Design & Develop',
    description:
      'We develop compelling campaigns, visual content, and creative assets that bring your brand to life and connect with your audience.',
  },
  {
    number: '03',
    title: 'Deliver & Deploy',
    description:
      'We deliver polished, campaign-ready creative assets optimized for television, digital, social media, and events; ready for your team or media partners to publish across your chosen channels.',
  },
]

function BrandFramework() {
  return (
    <section className="brand-framework" aria-label="Brand framework">
      <div className="brand-framework__header">
        <p className="eyebrow">OUR FRAMEWORK</p>
        <h2>Our Framework for Brand Clarity</h2>
        <p className="brand-framework__intro">
          A collaborative creative process that transforms ideas into unforgettable brand experiences
          and impactful campaigns.
        </p>
      </div>

      <div className="brand-framework__grid">
        {stages.map((stage) => (
          <article className="brand-framework__stage" key={stage.number}>
            <div className="brand-framework__index">{stage.number}</div>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BrandFramework
