"use client"

import { useState, useMemo } from 'react'
import styles from './PricingCalculator.module.css'

function calcPrice({ format, value, dirty, eco }) {
  let price = format === 'regular' ? value * 200 : value * 500

  if (dirty) price *= 1.35
  if (eco) price += 1500

  return Math.round(price)
}

function formatPrice(n) {
  return '≈ ' + n.toLocaleString('ru-RU') + ' ₽'
}

const propertyTypes = [
  { id: 'regular', label: 'Обычная уборка', hint: '200 ₽ за м², всё включено' },
  { id: 'post', label: 'После ремонта', hint: '500 ₽ за м², всё включено' },
]

export default function PricingCalculator() {
  const [format, setFormat] = useState('regular')
  const [value, setValue] = useState(40)
  const [dirty, setDirty] = useState(false)
  const [eco, setEco] = useState(false)

  const minValue = 10
  const maxValue = 250

  const price = useMemo(() =>
    calcPrice({ format, value, dirty, eco }),
    [format, value, dirty, eco]
  )

  return (
    <section className={`section ${styles.section}`} id="calculator">
      <div className="container">
        <span className="section-label">Калькулятор</span>
        <h2 className="section-title">Рассчитайте стоимость</h2>
        <p className="section-sub">Обычная уборка — 200 ₽ за м², после ремонта — 500 ₽ за м². Всё включено.</p>

        <div className={styles.wrapper}>
          <div className={styles.form}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Формат уборки</legend>
              <div className={styles.chips}>
                {propertyTypes.map(pt => (
                  <button
                    key={pt.id}
                    type="button"
                    className={`${styles.chip} ${styles.chipWide} ${format === pt.id ? styles.chipActive : ''}`}
                    onClick={() => setFormat(pt.id)}
                  >
                    <span className={styles.chipLabel}>{pt.label}</span>
                    <span className={styles.chipHint}>{pt.hint}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>{`Площадь: ${value} м²`}</legend>
              <div className={styles.rangeWrap}>
                <span className={styles.rangeMin}>{minValue}</span>
                <input
                  type="range"
                  min={minValue}
                  max={maxValue}
                  step={1}
                  value={value}
                  onChange={e => setValue(Number(e.target.value))}
                  className={styles.range}
                />
                <span className={styles.rangeMax}>{maxValue} м²</span>
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
              <p className={styles.resultNote}>Всё включено. Отдельно считаются только ЭКО-химия и повышенная загрязнённость.</p>
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
