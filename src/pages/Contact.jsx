import { config } from '../constants/config'

function Contact() {
  return (
    <div className="page-wrap contact-page">
      <section className="section-intro">
        <p className="eyebrow">Contact</p>
        <h1>Let’s build something memorable</h1>
      </section>

      <section className="contact-layout">
        <div className="contact-card">
          <h3>Get in touch</h3>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${config.contact.phone.replace(/\s+/g, '')}`}>{config.contact.phone}</a>
            </li>
          </ul>
        </div>

        <div className="contact-card form-card">
          <h3>Send a quick message</h3>
          <form className="contact-form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Your email" />
            </label>
            <label>
              Message
              <textarea placeholder="Tell us about your project" rows="5" />
            </label>
            <button type="button" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
