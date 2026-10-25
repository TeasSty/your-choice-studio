import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

type RevealOptions = {
  y?: number
  duration?: number
  stagger?: number
  start?: string
}

export function useScrollReveal<T extends HTMLElement>(
  selector = '[data-reveal]',
  options: RevealOptions = {},
) {
  const rootRef = useRef<T>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const nodes = root.querySelectorAll<HTMLElement>(selector)
    if (!nodes.length) return

    if (reduced) {
      gsap.set(nodes, { clearProps: 'all', opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        nodes,
        { opacity: 0, y: options.y ?? 40 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 1,
          ease: 'power3.out',
          stagger: options.stagger ?? 0.12,
          scrollTrigger: {
            trigger: root,
            start: options.start ?? 'top 78%',
            once: true,
          },
        },
      )
    }, root)

    return () => ctx.revert()
  }, [reduced, selector, options.y, options.duration, options.stagger, options.start])

  return rootRef
}
