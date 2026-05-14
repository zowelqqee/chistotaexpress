"use client"

import { useState, useMemo } from 'react'
import styles from './PricingCalculator.module.css'

const supportRooms = [3000, 4000, 5000, 6500, 8000]
const generalRooms = [6500, 8500, 10500, 12500, 14500]

function calcPrice({ type, format, value, dirty, weird, eco }) {
  let price = 0

  if (type === 'apartment') {
    if (format === 'support') {
      price = value <= 5 ? supportRooms[value - 1] : supportRooms[supportRooms.length - 1] + (value - 5) * 1500
    } else if (format === 'general') {
      price = value <= 5 ? generalRooms[value - 1] : generalRooms[generalRooms.length - 1] + (value - 5) * 2000
    } else if (format === 'post') {
      price = value * 2500
    } else if (format === 'all') {
      price = Math.max(12000, value * 5000)
    }
  } else {
    price = value * 120
  }

  if (dirty || weird) price *= 1.35
  if (eco) price += 1500

  return Math.round(price)
}

function formatPrice(n) {
  return '≈ ' + n.toLocaleString('ru-RU') + ' ₽'
}

const propertyTypes = [
  { id: 'apartment', label: 'Квартира' },
  { id: 'office', label: 'Офис' },
  { id: 'commercial', label: 'Коммерция' },
  { id: 'hotel', label: 'Отель' },
]

const formats = [
  { id: 'support', label: 'Поддерживающая', hint: 'Регулярная уборка' },
  { id: 'general', label: 'Генеральная', hint: 'Глубокая чистка' },
  { id: 'post', label: 'После ремонта', hint: 'Строительная пыль' },
  { id: 'all', label: 'Всё включено', hint: 'Максимальный объём' },
]

export default function PricingCalculator() {
  const [type, setType] = useState('apartment')
  const [format, setFormat] = useState('support')
  const [value, setValue] = useState(2)
  const [dirty, setDirty] = useState(false)
  const [weird, setWeird] = useState(false)
  const [eco, setEco] = useState(false)

  const isApartment = type === 'apartment'
  const maxValue = isApartment ? 10 : 250

  const price = useMemo(() =>
    calcPrice({ type, format, value, dirty, weird, eco }),
    [type, format, value, dirty, weird, eco]
  )

  return (
    <section className={`section ${styles.section}`} id="calculator">
      <div className="container">
        <span className="section-label">Калькулятор</span>
        <h2 className="section-title">Рассчитайте стоимость</h2>
        <p className="section-sub">Укажите параметры — получите ориентировочную цену сразу.</p>

        <div className={styles.wrapper}>
          <div className={styles.form}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Тип помещения</legend>
              <div className={styles.chips}>
                {propertyTypes.map(pt => (
                  <button
                    key={pt.id}
                    type="button"
                    className={`${styles.chip} ${type === pt.id ? styles.chipActive : ''}`}
                    onClick={() => { setType(pt.id); setValue(pt.id === 'apartment' ? 2 : 50) }}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>
            </fieldset>

            {isApartment && (
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Формат уборки</legend>
                <div className={styles.chips}>
                  {formats.map(f => (
                    <button
                      key={f.id}
                      type="button"
                      className={`${styles.chip} ${styles.chipWide} ${format === f.id ? styles.chipActive : ''}`}
                      onClick={() => setFormat(f.id)}
                    >
                      <span className={styles.chipLabel}>{f.label}</span>
                      <span className={styles.chipHint}>{f.hint}</span>
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                {isApartment ? `Количество комнат: ${value}` : `Площадь: ${value} м²`}
              </legend>
              <div className={styles.rangeWrap}>
                <span className={styles.rangeMin}>{isApartment ? '1' : '10'}</span>
                <input
                  type="range"
                  min={isApartment ? 1 : 10}
                  max={maxValue}
                  step={1}
                  value={value}
                  onChange={e => setValue(Number(e.target.value))}
                  className={styles.range}
                />
                <span className={styles.rangeMax}>{isApartment ? '10+' : '250 м²'}</span>
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Модификаторы</legend>
              <div className={styles.modifiers}>
                <label className={`${styles.mod} ${dirty ? styles.modActive : ''}`}>
                  <input type="checkbox" checked={dirty} onChange={e => setDirty(e.target.checked)} />
                  <span className={styles.modLabel}>
                    <span>Очень грязно</span>
                    <span className={styles.modTag}>+35%</span>
                  </span>
                </label>
                <label className={`${styles.mod} ${weird ? styles.modActive : ''}`}>
                  <input type="checkbox" checked={weird} onChange={e => setWeird(e.target.checked)} />
                  <span className={styles.modLabel}>
                    <span>Нестандарт</span>
                    <span className={styles.modTag}>+35%</span>
                  </span>
                </label>
                <label className={`${styles.mod} ${eco ? styles.modActive : ''}`}>
                  <input type="checkbox" checked={eco} onChange={e => setEco(e.target.checked)} />
                  <span className={styles.modLabel}>
                    <span>ЭКО-химия</span>
                    <span className={styles.modTag}>+1 500 ₽</span>
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className={styles.result}>
            <div className={styles.resultCard}>
              <p className={styles.resultLabel}>Стоимость уборки</p>
              <p className={styles.resultPrice}>{formatPrice(price)}</p>
              <p className={styles.resultNote}>Финальная цена уточняется при обращении. Выезд менеджера бесплатно.</p>
              <a
                href="https://wa.me/79187779772"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.resultBtn}`}
              >
                Оставить заявку
              </a>
              <a
                href="tel:+79187779772"
                className={`btn btn-secondary ${styles.resultBtn}`}
              >
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
