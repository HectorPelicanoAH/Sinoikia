import { imageUrl, images, type ImageId } from '../content/images'

type Props = {
  id: ImageId
  priority?: boolean
  className?: string
  caption?: string
}

export function ConceptImage({ id, priority = false, className = '', caption }: Props) {
  const image = images[id]
  return (
    <figure className={`concept-image ${className}`}>
      <picture>
        {id === 'hero' && (
          <>
            <source media="(max-width: 700px)" type="image/avif" srcSet={`${import.meta.env.BASE_URL}images/hero-mobile.avif`} />
            <source media="(max-width: 700px)" type="image/webp" srcSet={`${import.meta.env.BASE_URL}images/hero-mobile.webp`} />
          </>
        )}
        <source type="image/avif" srcSet={imageUrl(id, 'avif')} />
        <source type="image/webp" srcSet={imageUrl(id, 'webp')} />
        <img
          src={imageUrl(id, 'jpg')}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          style={{ objectPosition: image.position }}
        />
      </picture>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
