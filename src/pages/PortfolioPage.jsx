import { portfolioItems } from '../data/portfolioData'
import PortfolioMasonry from '../components/portfolio/PortfolioMasonry'

function PortfolioPage() {
  return (
    <div className="page-wrap portfolio-page">
      <section className="page-intro portfolio-page__header">
        <p className="eyebrow">Portfolio</p>
        <h1>Portfolio</h1>
        <p className="lead-copy narrow-copy">
          Every project tells a story. Explore our portfolio and discover how we transform bold
          ideas into impactful brands, compelling campaigns, and unforgettable creative
          experiences. Your next success story could start here.
        </p>
      </section>

      <div className="instagram-alert">
        New work and updates will be shared on Instagram, follow to witness the magic.{' '}
        <a href="https://www.instagram.com/mbongwacreatives/" target="_blank" rel="noreferrer">@mbongwacreatives</a>
      </div>

      <section className="portfolio-work-heading" aria-labelledby="portfolio-work-title">
        <p className="eyebrow">Selected projects</p>
        <h2 id="portfolio-work-title">The Work</h2>
      </section>

      <PortfolioMasonry items={portfolioItems} />

      <div className="instagram-alert closing-alert">
        New work and updates will be shared on Instagram, follow to witness the magic.{' '}
        <a href="https://www.instagram.com/mbongwacreatives/" target="_blank" rel="noreferrer">@mbongwacreatives</a>
      </div>
    </div>
  )
}

export default PortfolioPage
