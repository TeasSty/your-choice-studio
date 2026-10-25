/** Studio facts from VK community choice.photostudio (group 156671547). */

import { asset } from '../lib/assets'

export const studio = {
  brandRu: 'ТВОЙ ВЫБОР',
  brandEn: 'YOUR CHOICE',
  city: 'Нижний Новгород',
  address: {
    street: 'Интернациональная, 100 к. 2',
    full: 'Нижний Новгород, Интернациональная ул., 100, корп. 2',
    floorNote: '3 этаж — по описаниям залов №3 и №4 в VK Market',
    mapUrl: 'https://yandex.ru/maps/org/tvoy_vybor/59364452414/',
  },
  phone: {
    display: '+7 903 602-00-22',
    tel: '+79036020022',
  },
  social: {
    vk: {
      label: 'VK · choice.photostudio',
      url: 'https://vk.ru/choice.photostudio',
      handle: 'choice.photostudio',
      marketUrl: 'https://vk.ru/market-156671547',
    },
  },
  /**
   * Confirmed from VK community / market (Oct 2026 scrape).
   * Directory-only items marked separately.
   */
  facts: [
    { label: '3 зала + гримерка', source: 'confirmed' as const },
    {
      label: '~150 м²',
      source: 'directory' as const,
      note: 'из публичных справочников; в VK указаны площади отдельных залов',
    },
    { label: 'Естественный свет', source: 'confirmed' as const },
    { label: 'Свет входит в аренду', source: 'confirmed' as const },
    { label: 'Парковка', source: 'directory' as const, note: 'из публичных описаний студии' },
  ],
  bookingNote:
    'Бронирование: телефон или сообщение в VK (зал, дата и время). Актуальные цены и свободные слоты уточняйте перед съёмкой.',
  hoursNote:
    'Часы работы в сообществе VK явно не зафиксированы на момент сбора — уточняйте при записи.',
} as const

export type Hall = {
  id: string
  name: string
  priceLabel: string
  priceNote?: string
  description: string
  image: string
  imageAlt: string
  features: string[]
  status: 'confirmed' | 'verify-price'
  vkProductUrl: string
}

/**
 * Halls and prices from VK Market of choice.photostudio (confirmed listing prices).
 * Hall №3 / №4: 2 000 ₽/час; от 2 часов — 1 800 ₽/час (из текста карточек).
 */
export const halls: Hall[] = [
  {
    id: 'mini',
    name: 'Зал Mini',
    priceLabel: '1 600 ₽/час',
    priceNote: 'цена из VK Market',
    description:
      'Небольшой, но функциональный зал с раскладным диваном, который трансформируется в постель. Солнечный свет в первой половине дня.',
    image: asset('images/halls/mini.jpg'),
    imageAlt: 'Зал Mini — интерьер фотостудии YOUR CHOICE, фото из VK Market',
    features: ['Раскладной диван', 'Утренний свет', 'Камерный формат'],
    status: 'confirmed',
    vkProductUrl: 'https://vk.ru/market/product/zal-mini-156671547-12427215',
  },
  {
    id: 'hall-3',
    name: 'Зал №3',
    priceLabel: '2 000 ₽/час',
    priceNote: 'от 2 часов — 1 800 ₽/час (VK Market)',
    description:
      'Минималистичный зал преимущественно бетонно-серого цвета, стильное наполнение, много естественного света. Большие окна на юго-запад, высота потолков 4,5 м, площадь 63 м². С 15:00 — выразительные световые рисунки. Есть циклорама. В аренду входят два любых источника света; дополнительные — 200 ₽/час. Цветные бумажные фоны — по согласованию при бронировании.',
    image: asset('images/halls/hall3.jpg'),
    imageAlt: 'Зал №3 — интерьер фотостудии YOUR CHOICE, фото из VK Market',
    features: ['63 м²', 'Циклорама', 'Потолки 4,5 м', '2 источника света в цене'],
    status: 'confirmed',
    vkProductUrl: 'https://vk.ru/market/product/arenda-zala-3-156671547-7940794',
  },
  {
    id: 'hall-4',
    name: 'Зал №4',
    priceLabel: '2 000 ₽/час',
    priceNote: 'от 2 часов — 1 800 ₽/час (VK Market)',
    description:
      'Просторный интерьерный зал с винтажным акцентом: бежево-молочная гамма и одна тёмная стена. Площадь 64 м², потолки 4,5 м, окна на юг и юго-запад. В аренду входят два любых источника света; доп. источники — 200 ₽/час. Есть видеопроектор; цветные фоны и модификаторы — по описанию в VK.',
    image: asset('images/halls/hall4.jpg'),
    imageAlt: 'Зал №4 — интерьер фотостудии YOUR CHOICE, фото из VK Market',
    features: ['64 м²', 'Винтажный акцент', 'Видеопроектор', '2 источника света в цене'],
    status: 'confirmed',
    vkProductUrl: 'https://vk.ru/market/product/arenda-zala-4-156671547-7626330',
  },
  {
    id: 'makeup',
    name: 'Гримерка',
    priceLabel: '300 ₽/час',
    priceNote:
      '30 мин до съёмки бесплатно при аренде зала (нужно указать при бронировании); час гримерки к залу — доплата 150 ₽',
    description:
      'Гримерка на два рабочих места, оснащена для визажиста и мастера по причёскам. Можно арендовать отдельно как рабочее место — 300 ₽/час.',
    image: asset('images/halls/makeup.jpg'),
    imageAlt: 'Гримерка студии YOUR CHOICE — фото из VK Market',
    features: ['2 рабочих места', 'К залу — 30 мин бесплатно', 'Отдельная аренда'],
    status: 'confirmed',
    vkProductUrl: 'https://vk.ru/market/product/arenda-grimerki-156671547-1694011',
  },
]

export const capabilities = [
  {
    title: 'Естественный свет',
    text: 'Большие окна, юг / юго-запад. В зале №3 после 15:00 — сильный световой рисунок от солнца.',
  },
  {
    title: 'Свет и модификаторы',
    text: 'Импульсный и постоянный свет (Godox, Falcon Eyes, Visico), софты, октобоксы, стрип, портретная тарелка, GOBO (40+ масок), флаги, журавль. В цене аренды зала — два любых источника; доп. — 200 ₽/час.',
  },
  {
    title: 'Циклорама и фоны',
    text: 'Циклорама в зале №3. Бумажные фотофоны многих цветов — по согласованию при бронировании. Тканевые / сатиновые фоны — по описанию залов в VK.',
  },
  {
    title: 'Комфорт на площадке',
    text: 'Гримерка, вертикальный отпариватель, кофемашина. Свыше 7 человек — доплата 100 ₽ с человека. Дым-машина — 500 ₽/час дополнительно.',
  },
]

/** Интерьеры студии с карточек VK Market — не клиентские съёмки. */
export const portfolioItems = [
  {
    id: 'p1',
    src: asset('images/portfolio/p1.jpg'),
    alt: 'Зал №4 — интерьер студии YOUR CHOICE (VK Market)',
    span: 'tall' as const,
  },
  {
    id: 'p2',
    src: asset('images/portfolio/p2.jpg'),
    alt: 'Зал №3 — интерьер студии YOUR CHOICE (VK Market)',
    span: 'wide' as const,
  },
  {
    id: 'p3',
    src: asset('images/portfolio/p3.jpg'),
    alt: 'Зал Mini — интерьер студии YOUR CHOICE (VK Market)',
    span: 'square' as const,
  },
  {
    id: 'p4',
    src: asset('images/portfolio/p4.jpg'),
    alt: 'Гримерка студии YOUR CHOICE (VK Market)',
    span: 'tall' as const,
  },
]

export const navLinks = [
  { href: '#space', label: 'Пространство' },
  { href: '#halls', label: 'Залы' },
  { href: '#portfolio', label: 'Галерея' },
  { href: '#capabilities', label: 'Возможности' },
  { href: '#booking', label: 'Контакты' },
] as const
