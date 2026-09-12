import styles from './BeforeAfterSection.module.css'

const details = [
  { src: '/img/divan.jpg', alt: 'Чистый диван после химчистки' },
  { src: '/img/stulia.jpg', alt: 'Чистый стул после химчистки' },
  { src: '/img/stuliia.jpg', alt: 'Мебель после профессиональной чистки' },
]

const beforeAfterCases = [
  {
    title: 'Химчистка матраса',
    before: '/img/до_1.jpg',
    after: '/img/после_1.jpg',
  },
  {
    title: 'Мытьё окон',
    before: '/img/до_2.jpg',
    after: '/img/после_2.jpg',
  },
  {
    title: 'Химчистка дивана',
    before: '/img/до-3.jpg',
    after: '/img/после-3.jpg',
  },
]

const videos = [
  { src: '/img/видеообщее.mp4', title: 'Мытьё квартиры после ремонта' },
  { src: '/img/диван.mp4', title: 'Химчистка дивана' },
  { src: '/img/ремонт.mp4', title: 'Уборка после ремонта' },
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

        <div className={styles.realWorks}>
          <div className={styles.subheading}>
            <span className="section-label">Наши работы</span>
            <h3>Реальные результаты до и после</h3>
          </div>
          <div className={styles.caseGrid}>
            {beforeAfterCases.map((item) => (
              <article className={styles.caseCard} key={item.title}>
                <div className={styles.caseImages}>
                  <figure>
                    <img src={item.before} alt={`${item.title}: до уборки`} loading="lazy" />
                    <figcaption>До</figcaption>
                  </figure>
                  <figure>
                    <img src={item.after} alt={`${item.title}: после уборки`} loading="lazy" />
                    <figcaption>После</figcaption>
                  </figure>
                </div>
                <h4>{item.title}</h4>
              </article>
            ))}
          </div>

          <div className={styles.videoHeading}>
            <h3>Процесс и результат в видео</h3>
            <p>Смотрите реальные кадры с наших объектов.</p>
          </div>
          <div className={styles.videoGrid}>
            {videos.map((item) => (
              <figure className={styles.videoCard} key={item.src}>
                <video controls playsInline preload="metadata" aria-label={item.title}>
                  <source src={item.src} type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
