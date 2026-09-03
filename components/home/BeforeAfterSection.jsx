import styles from './BeforeAfterSection.module.css'

const details = [
  { src: '/img/divan.jpg', alt: 'Чистый диван после химчистки' },
  { src: '/img/stulia.jpg', alt: 'Чистый стул после химчистки' },
  { src: '/img/stuliia.jpg', alt: 'Мебель после профессиональной чистки' },
]

export default function BeforeAfterSection() {
  return (
    <section className={`section ${styles.section}`} id="gallery">
      <div className="container">
        <div className={styles.heading}>
          <div>
            <span className="section-label">Результат в деталях</span>
            <h2 className="section-title">Чистота, которую видно</h2>
          </div>
          <p className="section-sub">Показываем результат без фильтров: деликатно освежаем ткань, убираем загрязнения и возвращаем мебели аккуратный вид.</p>
        </div>

        <div className={styles.featured}>
          <div className={styles.compareImage}>
            <img src="/img/before-after-sofa.png" alt="Диван до и после профессиональной чистки" />
            <span className={`${styles.imageLabel} ${styles.before}`}>До</span>
            <span className={`${styles.imageLabel} ${styles.after}`}>После</span>
          </div>
          <div className={styles.featuredCopy}>
            <span className={styles.kicker}>Химчистка мягкой мебели</span>
            <h3>Бережно — к ткани, внимательно — к каждой детали</h3>
            <p>Подбираем средства под материал и степень загрязнения. Финальный результат проверяем вместе с вами.</p>
            <a href="/ximchistka/" className="btn btn-secondary">Подробнее об услуге</a>
          </div>
        </div>

        <div className={styles.details}>
          {details.map((item) => <img key={item.src} src={item.src} alt={item.alt} />)}
        </div>
      </div>
    </section>
  )
}
