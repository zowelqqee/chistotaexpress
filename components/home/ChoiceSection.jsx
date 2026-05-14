import styles from './ChoiceSection.module.css'

const points = [
  {
    title: 'Заранее понятен формат и итог',
    desc: 'Вы знаете цену и объём работ до приезда команды — никаких сюрпризов.',
  },
  {
    title: 'Команда работает по чек-листу',
    desc: '120+ пунктов, которые проверяются в каждой зоне без исключений.',
  },
  {
    title: 'Зоны проверяются до сдачи',
    desc: 'Перед уходом супервайзер контролирует каждую зону по списку.',
  },
  {
    title: 'Если что-то не так — повторный выезд бесплатно',
    desc: 'Гарантия качества без оговорок. Просто сообщите — мы приедем.',
  },
]

export default function ChoiceSection() {
  return (
    <section className="section" id="choice">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="section-label">Почему Чистота Экспресс</span>
            <h2 className="section-title">Когда уборка перестаёт<br />быть заботой</h2>
            <p className="section-sub">
              Вы не думаете о том, что убрали или не убрали —<br />
              мы берём ответственность за результат.
            </p>
            <a
              href="https://wa.me/79187779772"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary ${styles.cta}`}
            >
              Попробовать
            </a>
          </div>
          <div className={styles.right}>
            {points.map((p, i) => (
              <div key={i} className={styles.point}>
                <div className={styles.pointNum}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className={styles.pointTitle}>{p.title}</h3>
                  <p className={styles.pointDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
