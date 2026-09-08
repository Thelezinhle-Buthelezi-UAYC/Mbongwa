import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { config } from '../constants/config'
import { fadeIn, staggerContainer, staggerItem } from '../constants/animations'

function Services() {
  return (
    <motion.div className="page-wrap" {...fadeIn}>
      <section className="section-intro">
        <p className="eyebrow">Our Services</p>
        <h1>Strategy, creativity, and execution for brands that want to grow</h1>
        <p className="lead">
          End-to-end creative services designed to help brands launch stronger,
          communicate clearly, and build lasting audience impact.
        </p>
      </section>

      <motion.section
        className="services-grid expanded-layout"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {config.services.map((service) => (
          <motion.article key={service.id} className="service-card feature-card" variants={staggerItem}>
            <span className="service-index">Service 0{service.id}</span>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </motion.article>
        ))}
      </motion.section>

      <section className="cta-banner smaller">
        <h2>Need a creative partner for your next campaign?</h2>
        <Link to="/contact" className="btn btn-primary btn-large">
          Book a Discovery Call
        </Link>
      </section>
    </motion.div>
  )
}

export default Services
