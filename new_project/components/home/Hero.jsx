import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className="section-label">Профессиональный клининг в Ереване</span>
          <h1 className={styles.title}>
            Уборка, которой<br />
            <span className={styles.accent}>можно доверять</span>
          </h1>
          <p className={styles.sub}>
            Квартиры, офисы, коммерческие объекты. Работаем по чек-листу,
            проверяем каждую зону. Гарантируем результат.
          </p>
          <div className={styles.price}>
            <span className={styles.priceFrom}>от</span>
            <span className={styles.priceAmount}>10 000 ֏</span>
          </div>
          <div className={styles.actions}>
            <a href="https://t.me/nonstopclean" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Заказать уборку онлайн
            </a>
            <a href="#process" className="btn btn-secondary">
              Как мы работаем
            </a>
          </div>
          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <strong>500+</strong>
              <span>уборок</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.trustItem}>
              <strong>4.9</strong>
              <span>рейтинг</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.trustItem}>
              <strong>100%</strong>
              <span>гарантия</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardBadge}>Service Standard</span>
          </div>
          <ul className={styles.cardList}>
            {[
              'Подбор тарифа под ваш объект',
              'Команда по чек-листу из 120+ пунктов',
              'Финальный контроль каждой зоны',
              'Повторный выезд, если что-то не так',
              'Экологичная химия по запросу',
            ].map((item, i) => (
              <li key={i} className={styles.cardItem}>
                <span className={styles.cardCheck}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.cardFooter}>
            <a href="tel:+37493111772" className={`btn btn-primary ${styles.cardBtn}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +374 93 111 772
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
