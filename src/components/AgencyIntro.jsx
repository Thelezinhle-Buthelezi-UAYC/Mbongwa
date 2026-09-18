const capabilities = [
  'Video Advert Curation for television and digital platforms',
  'Motion Graphics & Animated Content',
  'Product Launch Campaigns',
  'Brand Activations & Experiential Marketing',
  'Advertising Campaign Strategy & Creative Execution',
  'Public Relations Campaign Support',
  'Corporate & Event Productions',
  'Product Photography & Campaign Visuals',
  'Creative Direction & Brand Storytelling',
]

function AgencyIntro() {
  return (
    <section className="agency-intro" aria-label="Agency introduction and capabilities">
      <div className="agency-intro__content">
        <p className="agency-intro__statement">
          Mbongwa Creatives is a creative advertising agency specializing in commercial production,
          motion graphics, product launches, and integrated campaigns that help brands connect,
          stand out, and grow.
        </p>

        <ul className="agency-intro__list">
          {capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="agency-intro__period" aria-hidden="true">
        .
      </div>
    </section>
  )
}

export default AgencyIntro
