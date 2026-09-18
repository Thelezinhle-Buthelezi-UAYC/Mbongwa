function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'text-center' : 'align-left'}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionHeading
