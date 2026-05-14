import styles from './ProcessSection.module.css'

const steps = [
  {
    num: '01',
    title: 'Заявка и подбор тарифа',
    desc: 'Оставляете заявку, менеджер связывается в течение 15 минут. Вместе подбираем формат уборки, площадь и дополнительные опции.',
  },
  {
    num: '02',
    title: 'Выезд команды по чек-листу',
    desc: 'В согласованное время приезжает команда. Работаем по чек-листу из 120+ пунктов — ничего не пропускаем.',
  },
  {
    num: '03',
    title: 'Финальный контроль и гарантия',
    desc: 'Перед сдачей проверяем каждую зону. Если что-то не устроило — повторный выезд бесплатно.',
  },
]

export default function ProcessSection() {
  return (
    <section className={`section ${styles.section}`} id="process">
      <div className="container">
        <span className="section-label">Как мы работаем</span>
        <h2 className="section-title">Три шага до идеальной чистоты</h2>
        <p className="section-sub">Прозрачный процесс без сюрпризов — от заявки до сдачи.</p>

        <div className={styles.grid}>
          {steps.map((s) => (
            <div key={s.num} className={styles.card}>
              <span className={styles.num}>{s.num}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
