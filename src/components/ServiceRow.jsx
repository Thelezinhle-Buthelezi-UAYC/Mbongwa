function ServiceRow({
  title,
  description,
  imageSrc,
  imageAlt,
  layout = 'image-left',
  backdropColor = '#faf8f5',
  cropClass = 'crop-soft',
  hasDivider = true,
}) {
  const isImageRight = layout === 'image-right'

  return (
    <div className="service-row-item">
      {hasDivider && <div className="service-divider" aria-hidden="true" />}

      <article className={`service-row ${isImageRight ? 'service-row--image-right' : ''}`}>
        <div
          className={`service-row__media service-row__media--${cropClass}`}
          style={{ background: backdropColor }}
        >
          <img src={imageSrc} alt={imageAlt} />
        </div>

        <div className="service-row__copy">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </article>
    </div>
  )
}

export default ServiceRow
