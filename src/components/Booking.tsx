import { useState } from 'react'
import { studio } from '../data/studio'
import { asset } from '../lib/assets'
import { useScrollReveal } from '../hooks/useScrollReveal'

type BookingProps = {
  hallHint?: string
}

export function Booking({ hallHint }: BookingProps) {
  const ref = useScrollReveal<HTMLElement>()
  const [copied, setCopied] = useState(false)

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(studio.phone.display)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="booking" className="booking" ref={ref}>
      <div className="booking__cta" data-reveal>
        <p className="section-kicker">Бронирование</p>
        <h2 className="section-title">Забронируйте студию</h2>
        <p className="section-lead">
          Напишите или позвоните — подскажем свободные слоты
          {hallHint ? ` для «${hallHint}»` : ''} и актуальные условия аренды.
        </p>

        <div className="booking__actions">
          <a className="btn btn--solid" href={`tel:${studio.phone.tel}`}>
            Позвонить
          </a>
          <a
            className="btn btn--ghost"
            href={studio.social.vk.url}
            target="_blank"
            rel="noreferrer"
          >
            Написать в VK
          </a>
        </div>

        <p className="booking__note">{studio.bookingNote}</p>
      </div>

      <figure className="booking__media" data-reveal>
        <div className="media-zoom">
          <img
            src={asset('images/halls/hall4.jpg')}
            alt="Зал №4 YOUR CHOICE — интерьер с естественным светом (фото из VK)"
            loading="lazy"
            width={1200}
            height={1600}
            className="booking__img"
          />
        </div>
      </figure>

      <aside className="booking__contacts" data-reveal aria-label="Контакты">
        <div className="contact-row">
          <span className="contact-label">Телефон</span>
          <div className="contact-value-row">
            <a href={`tel:${studio.phone.tel}`}>{studio.phone.display}</a>
            <button type="button" className="copy-btn" onClick={copyPhone}>
              {copied ? 'Скопировано' : 'Копировать'}
            </button>
          </div>
        </div>

        <div className="contact-row">
          <span className="contact-label">Адрес</span>
          <a href={studio.address.mapUrl} target="_blank" rel="noreferrer">
            {studio.address.full}
          </a>
          <span className="contact-sub">{studio.address.floorNote}</span>
        </div>

        <div className="contact-row">
          <span className="contact-label">Сообщество</span>
          <a href={studio.social.vk.url} target="_blank" rel="noreferrer">
            {studio.social.vk.label}
          </a>
        </div>

        <div className="contact-row">
          <span className="contact-label">Карта</span>
          <a href={studio.address.mapUrl} target="_blank" rel="noreferrer">
            Открыть в Яндекс Картах
          </a>
        </div>
      </aside>
    </section>
  )
}
