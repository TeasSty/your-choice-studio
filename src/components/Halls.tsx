import { halls, studio } from '../data/studio'
import { useScrollReveal } from '../hooks/useScrollReveal'

type HallsProps = {
  onBook: (hallName: string) => void
}

export function Halls({ onBook }: HallsProps) {
  const ref = useScrollReveal<HTMLElement>('[data-reveal]', { stagger: 0.1 })

  return (
    <section id="halls" className="halls" ref={ref}>
      <div className="halls__head" data-reveal>
        <p className="section-kicker">Залы</p>
        <h2 className="section-title">Три зала и гримерка</h2>
        <p className="section-lead">
          Цены и описания с карточек VK Market сообщества{' '}
          <a href={studio.social.vk.url} target="_blank" rel="noreferrer">
            choice.photostudio
          </a>
          . Перед съёмкой перепроверьте свободные слоты.
        </p>
      </div>

      <div className="halls__stack">
        {halls.map((hall, index) => {
          const isMakeup = hall.id === 'makeup'
          const flip = !isMakeup && index % 2 === 1

          return (
            <article
              key={hall.id}
              className={`hall-row${flip ? ' hall-row--flip' : ''}${isMakeup ? ' hall-row--makeup' : ''}`}
              data-reveal
            >
              <div className="hall-row__media media-zoom">
                <img
                  src={hall.image}
                  alt={hall.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className={`hall-row__img hall-row__img--${hall.id}`}
                />
              </div>

              <div className="hall-row__body">
                <div className="hall-row__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="hall-row__meta">
                  <h3>{hall.name}</h3>
                  <p className="hall-row__price">
                    {hall.priceLabel}
                    {hall.priceNote ? (
                      <span className="price-note"> · {hall.priceNote}</span>
                    ) : null}
                  </p>
                </div>
                <p className="hall-row__text">{hall.description}</p>
                <ul className="hall-row__tags">
                  {hall.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="hall-row__actions">
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => onBook(hall.name)}
                  >
                    Уточнить доступность
                    <span aria-hidden="true"> →</span>
                  </button>
                  <a
                    className="text-link"
                    href={hall.vkProductUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Карточка в VK
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <p className="halls__disclaimer" data-reveal>
        {studio.bookingNote}
      </p>
    </section>
  )
}
