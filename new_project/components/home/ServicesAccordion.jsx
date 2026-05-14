"use client"

import { useState } from 'react'
import styles from './ServicesAccordion.module.css'

const groups = [
  {
    id: 'residential',
    label: 'Квартиры и дома',
    services: [
      {
        name: 'Поддерживающая уборка',
        price: 'от 10 000 ֏',
        details: [
          'Уборка всех комнат, кухни и санузлов',
          'Пылесос, влажная уборка полов',
          'Протирка поверхностей и мебели',
          'Вынос мусора',
        ],
      },
      {
        name: 'Генеральная уборка',
        price: 'от 25 000 ֏',
        details: [
          'Полная уборка по чек-листу из 120+ пунктов',
          'Глубокая чистка кухни и сантехники',
          'Мытьё окон и зеркал',
          'Чистка труднодоступных мест',
        ],
      },
      {
        name: 'Уборка после ремонта',
        price: 'от 1 000 ֏ за м²',
        details: [
          'Удаление строительной пыли и загрязнений',
          'Очистка поверхностей от краски и штукатурки',
          'Мытьё окон, дверей и плинтусов',
          'Полная чистка сантехники',
        ],
      },
      {
        name: 'Уборка "всё включено"',
        price: 'от 60 000 ֏',
        details: [
          'Весь объём генеральной уборки',
          'Химчистка мягкой мебели включена',
          'Чистка духовки, холодильника, всей техники',
          'Глубокая чистка санузлов с дезинфекцией',
        ],
      },
    ],
  },
  {
    id: 'commercial',
    label: 'Офисы и коммерция',
    services: [
      {
        name: 'Офисы и коммерческие объекты',
        price: 'от 510 ֏ за м²',
        details: [
          'Уборка рабочих зон и переговорных',
          'Чистка сантехники, кухонь, зон отдыха',
          'Вынос мусора и замена пакетов',
          'Работаем по согласованному расписанию',
        ],
      },
    ],
  },
  {
    id: 'extra',
    label: 'Допы и спец-услуги',
    services: [
      {
        name: 'Доп-услуги и спец-работы',
        price: 'по запросу',
        details: [
          'Химчистка ковров и мягкой мебели',
          'Мытьё окон снаружи (до 3 этажа)',
          'Уборка балконов и лоджий',
          'ЭКО-химия и гипоаллергенные средства',
        ],
      },
    ],
  },
]

function ServiceItem({ service }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button type="button" className={styles.trigger} onClick={() => setOpen(v => !v)}>
        <span className={styles.triggerLeft}>
          <span className={styles.serviceName}>{service.name}</span>
          <span className={styles.servicePrice}>{service.price}</span>
        </span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </button>
      <div className={styles.body}>
        <ul className={styles.details}>
          {service.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
        <a href="#calculator" className={styles.calcLink}>Рассчитать стоимость →</a>
      </div>
    </div>
  )
}

export default function ServicesAccordion() {
  const [activeGroup, setActiveGroup] = useState('residential')

  return (
    <section className="section" id="services">
      <div className="container">
        <span className="section-label">Услуги</span>
        <h2 className="section-title">Что мы убираем</h2>
        <p className="section-sub">Прозрачные тарифы, фиксированная цена до начала работ.</p>

        <div className={styles.tabs}>
          {groups.map(g => (
            <button
              key={g.id}
              type="button"
              className={`${styles.tab} ${activeGroup === g.id ? styles.tabActive : ''}`}
              onClick={() => setActiveGroup(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className={styles.accordion}>
          {groups
            .filter(g => g.id === activeGroup)
            .flatMap(g => g.services)
            .map((s, i) => (
              <ServiceItem key={i} service={s} />
            ))}
        </div>
      </div>
    </section>
  )
}
