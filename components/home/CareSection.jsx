import styles from './CareSection.module.css'

const benefits = [
  {
    icon: '✦',
    title: 'Свои средства и техника',
    text: 'Привозим всё необходимое — вам не нужно готовить инвентарь или покупать химию.',
  },
  {
    icon: '◌',
    title: 'Бережный подход',
    text: 'Подбираем средства под поверхности и по запросу используем ЭКО-химию.',
  },
  {
    icon: '↗',
    title: 'В удобный день',
    text: 'Согласуем время заранее и приезжаем в оговорённый интервал.',
  },
]

export default function CareSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className="section-label">О комфорте — до мелочей</span>
            <h2 className="section-title">Чистый дом без лишних хлопот</h2>
            <p className="section-sub">Берём на себя подготовку, процесс и контроль — чтобы вы просто вернулись в чистое пространство.</p>
            <div className={styles.note}>
              <span className={styles.noteDot} />
              Менеджер на связи до и после уборки
            </div>
          </div>

          <div className={styles.cards}>
            {benefits.map((benefit) => (
              <article className={styles.card} key={benefit.title}>
                <span className={styles.icon} aria-hidden="true">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
