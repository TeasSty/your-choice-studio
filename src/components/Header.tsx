import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { navLinks, studio } from '../data/studio'

type HeaderProps = {
  onBook: () => void
}

export function Header({ onBook }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)

    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
      window.clearTimeout(t)
    }
  }, [open])

  const closeMenu = () => {
    setOpen(false)
    window.requestAnimationFrame(() => toggleRef.current?.focus())
  }

  const onNavLinkClick = () => {
    setOpen(false)
  }

  const tone = scrolled || open ? 'is-solid' : 'is-over-hero'

  return (
    <header
      className={`site-header ${tone}${scrolled ? ' is-scrolled' : ''}${open ? ' is-menu-open' : ''}`}
    >
      <div className="site-header__inner">
        <a href="#top" className="site-logo" aria-label={`${studio.brandRu} — наверх`}>
          <span className="site-logo__mark">{studio.brandRu}</span>
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="header-phone" href={`tel:${studio.phone.tel}`}>
            {studio.phone.display}
          </a>
          <button type="button" className="btn btn--nav" onClick={onBook}>
            Забронировать
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">{open ? 'Закрыть меню' : 'Открыть меню'}</span>
            <span className={`menu-toggle__bars${open ? ' is-open' : ''}`} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                id={menuId}
                className="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Меню"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mobile-menu__bar">
                  <a
                    href="#top"
                    className="site-logo"
                    aria-label={`${studio.brandRu} — наверх`}
                    onClick={closeMenu}
                  >
                    <span className="site-logo__mark">{studio.brandRu}</span>
                  </a>
                  <button
                    ref={closeBtnRef}
                    type="button"
                    className="mobile-menu__close"
                    onClick={closeMenu}
                  >
                    Закрыть
                  </button>
                </div>

                <nav className="mobile-menu__nav" aria-label="Мобильная навигация">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={onNavLinkClick}>
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mobile-menu__footer">
                  <a
                    className="btn btn--solid mobile-menu__book"
                    href="#booking"
                    onClick={onNavLinkClick}
                  >
                    Забронировать
                  </a>
                  <a
                    className="mobile-menu__phone"
                    href={`tel:${studio.phone.tel}`}
                    onClick={closeMenu}
                  >
                    {studio.phone.display}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  )
}
