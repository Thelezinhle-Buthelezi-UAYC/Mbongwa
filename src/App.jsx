import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SiteHeader from './components/layout/SiteHeader'
import SiteFooter from './components/layout/SiteFooter'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <Router>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="page-shell" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Navigate to="/site" replace />} />
          <Route path="/site" element={<HomePage />} />
          <Route path="/site/about" element={<AboutPage />} />
          <Route path="/site/portfolio" element={<PortfolioPage />} />
          <Route path="/site/blank-1" element={<PortfolioPage />} />
          <Route path="/site/contact" element={<ContactPage />} />

          <Route path="/gallery" element={<Navigate to="/site/portfolio" replace />} />
          <Route path="/about" element={<Navigate to="/site/about" replace />} />
          <Route path="/contact" element={<Navigate to="/site/contact" replace />} />
          <Route path="/services" element={<Navigate to="/site" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </Router>
  )
}

export default App
