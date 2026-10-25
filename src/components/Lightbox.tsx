import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'

type Item = { id: string; src: string; alt: string }

type LightboxProps = {
  items: Item[]
  index: number
  onClose: () => void
  onChange: (index: number) => void
}

export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const item = items[index]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % items.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [index, items.length, onChange, onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Просмотр изображения"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button type="button" className="lightbox__close" onClick={onClose}>
          Закрыть
        </button>
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation()
            onChange((index - 1 + items.length) % items.length)
          }}
        >
          ←
        </button>
        <motion.img
          key={item.id}
          src={item.src}
          alt={item.alt}
          className="lightbox__img"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
        />
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation()
            onChange((index + 1) % items.length)
          }}
        >
          →
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
