import { studio } from '../data/studio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { asset } from '../lib/assets'

export function Space() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="space" className="space" ref={ref}>
      <div className="space__frame">
        <div className="space__intro" data-reveal>
          <p className="section-kicker">Пространство</p>
          <h2 className="section-title">Свет, высота и спокойный ритм интерьера</h2>
          <p className="section-lead">
            Студия на Интернациональной, 100 к.&nbsp;2 — залы на 3 этаже с потолками 4,5&nbsp;м,
            большими окнами и разным характером света.
          </p>
        </div>

        <figure className="space__hero-shot" data-reveal>
          <div className="media-zoom">
            <img
              src={asset('images/space/wide.jpg')}
              alt="Зал №3 YOUR CHOICE — бетонно-серый минимализм и естественный свет"
              loading="lazy"
              width={2000}
              height={1200}
              className="space__hero-img"
            />
          </div>
          <figcaption>Зал №3 — масштаб, циклорама и дневной свет</figcaption>
        </figure>

        <div className="space__aside">
          <figure className="space__portrait" data-reveal>
            <div className="media-zoom">
              <img
                src={asset('images/space/detail.jpg')}
                alt="Зал Mini YOUR CHOICE — камерный интерьер с диваном"
                loading="lazy"
                width={1200}
                height={1500}
                className="space__portrait-img"
              />
            </div>
            <figcaption>Зал Mini — камерный формат и утреннее солнце</figcaption>
          </figure>

          <div className="space__note" data-reveal>
            <p>
              По карточкам VK: зал №3 — 63&nbsp;м², зал №4 — 64&nbsp;м², потолки 4,5&nbsp;м.
              Общая площадь студии в справочниках — около 150&nbsp;м²
              <span className="fact-hint" title="из публичных справочников">
                *
              </span>
              . Парковка и детали площадки лучше уточнить при бронировании.
            </p>
            <p className="space__hours">{studio.hoursNote}</p>
            <a className="text-link" href="#halls">
              Смотреть залы
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
