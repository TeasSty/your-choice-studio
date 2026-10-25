import { useCallback, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Space } from './components/Space'
import { Halls } from './components/Halls'
import { Portfolio } from './components/Portfolio'
import { Capabilities } from './components/Capabilities'
import { Booking } from './components/Booking'
import { Footer } from './components/Footer'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const [hallHint, setHallHint] = useState<string | undefined>()

  const goBook = useCallback((hallName?: string) => {
    if (hallName) setHallHint(hallName)
    scrollToId('booking')
  }, [])

  return (
    <>
      <Header onBook={() => goBook()} />
      <main>
        <Hero onChooseHall={() => scrollToId('halls')} />
        <Space />
        <Halls onBook={(name) => goBook(name)} />
        <Portfolio />
        <Capabilities />
        <Booking hallHint={hallHint} />
      </main>
      <Footer />
    </>
  )
}
