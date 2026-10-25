import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { studio } from '../data/studio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { asset } from '../lib/assets'

gsap.registerPlugin(ScrollTrigger)

type HeroProps = {
  onChooseHall: () => void
}

export function Hero({ onChooseHall }: HeroProps) {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    if (reduced) {
      gsap.set(root.querySelectorAll('[data-hero-anim]'), { clearProps: 'all' })
      return
    }

    const ctx = gsap.context(() => {
      const words = root.querySelectorAll<HTMLElement>('.hero__word')
      const rail = root.querySelectorAll('[data-hero-rail]')

      gsap.set(words, { yPercent: 110, opacity: 0 })
      gsap.set('.hero__media-img', { scale: 1.08 })
      gsap.set('.hero__locale, .hero__ru', { opacity: 0, y: 10 })
      gsap.set(rail, { opacity: 0, y: 24 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to('.hero__media-img', { scale: 1, duration: 1.6, ease: 'power2.out' }, 0)
        .to('.hero__locale', { opacity: 1, y: 0, duration: 0.55 }, 0.2)
        .to(words, { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.1 }, 0.28)
        .to('.hero__ru', { opacity: 1, y: 0, duration: 0.55 }, 0.85)
        .to(rail, { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 }, 0.9)

      gsap.to('.hero__media-img', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="top" className="hero" ref={rootRef} aria-label="Главный экран">
      <div className="hero__media" aria-hidden="false">
        <img
          className="hero__media-img"
          src={asset('images/halls/hall3.jpg')}
          alt="Зал №3 фотостудии YOUR CHOICE — бетонный интерьер с естественным светом"
          width={1920}
          height={2400}
          fetchPriority="high"
        />
        <div className="hero__veil" aria-hidden="true" />
      </div>

      <div className="hero__brand" data-hero-anim>
        <p className="hero__locale">Фотостудия · {studio.city}</p>
        <h1 className="hero__title" aria-label={`${studio.brandEn} — ${studio.brandRu}`}>
          <span className="hero__word">YOUR</span>
          <span className="hero__word">CHOICE</span>
        </h1>
        <p className="hero__ru">{studio.brandRu}</p>
      </div>

      <div className="hero__rail">
        <p className="hero__headline" data-hero-rail>
          Пространство для сильных кадров
        </p>
        <ul className="hero__facts" data-hero-rail>
          {studio.facts.map((f) => (
            <li key={f.label}>
              {f.label}
              {f.source === 'directory' ? (
                <span className="fact-hint" title={f.note}>
                  *
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="hero__cta" data-hero-rail>
          <button type="button" className="btn btn--light" onClick={onChooseHall}>
            Выбрать зал
            <span aria-hidden="true"> →</span>
          </button>
          <a className="text-link text-link--on-dark" href="#portfolio">
            Смотреть галерею
          </a>
        </div>
      </div>
    </section>
  )
}
