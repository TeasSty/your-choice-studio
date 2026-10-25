import { capabilities } from '../data/studio'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Capabilities() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="capabilities" className="capabilities" ref={ref}>
      <div className="capabilities__head" data-reveal>
        <p className="section-kicker">Возможности</p>
        <h2 className="section-title">Оборудование и условия съёмки</h2>
        <p className="section-lead">
          Только то, что подтверждено в описаниях залов и публичных материалах студии.
          Полный актуальный список приборов уточняйте при бронировании.
        </p>
      </div>

      <div className="capabilities__layout">
        <div className="capabilities__media" data-reveal>
          <div className="media-zoom">
            <img
              src="/images/equipment/lights.jpg"
              alt="Зал №3 YOUR CHOICE — пространство со студийным светом (фото из VK)"
              loading="lazy"
              width={1800}
              height={1200}
              className="capabilities__img"
            />
          </div>
        </div>

        <div className="capabilities__copy">
          <ol className="capabilities__list">
            {capabilities.map((item, i) => (
              <li key={item.title} data-reveal>
                <span className="capabilities__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <a className="btn btn--ghost capabilities__cta" href="#booking" data-reveal>
            Уточнить детали
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
