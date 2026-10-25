import { useState } from 'react'
import { portfolioItems, studio } from '../data/studio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Lightbox } from './Lightbox'

export function Portfolio() {
  const ref = useScrollReveal<HTMLElement>()
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="portfolio__head" data-reveal>
        <div>
          <p className="section-kicker">Галерея</p>
          <h2 className="section-title">Интерьеры</h2>
        </div>
        <p className="section-lead portfolio__lead">
          Фото залов и гримерки из магазина сообщества{' '}
          <a href={studio.social.vk.url} target="_blank" rel="noreferrer">
            {studio.social.vk.handle}
          </a>
          . Это интерьеры студии, а не подборка клиентских съёмок.
        </p>
      </div>

      <div className="portfolio__mosaic">
        {portfolioItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`portfolio__item portfolio__item--${item.span} portfolio__item--${item.id}`}
            data-reveal
            onClick={() => setActive(index)}
            aria-label={`Открыть изображение: ${item.alt}`}
          >
            <span className="media-zoom">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={1000}
                height={1200}
                className={`portfolio__img portfolio__img--${item.id}`}
              />
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <Lightbox
          items={portfolioItems}
          index={active}
          onClose={() => setActive(null)}
          onChange={setActive}
        />
      )}
    </section>
  )
}
