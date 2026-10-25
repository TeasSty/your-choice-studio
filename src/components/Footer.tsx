import { studio } from '../data/studio'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <strong>{studio.brandEn}</strong>
        <span>{studio.brandRu}</span>
      </div>
      <div className="site-footer__meta">
        <a href={`tel:${studio.phone.tel}`}>{studio.phone.display}</a>
        <span>{studio.address.street}</span>
        <a href={studio.social.vk.url} target="_blank" rel="noreferrer">
          VK
        </a>
      </div>
      <p className="site-footer__legal">
        Фотостудия в Нижнем Новгороде. Цены и доступность уточняйте при бронировании.
      </p>
    </footer>
  )
}
