import styles from './CTASection.module.css'

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2 className={styles.title}>Готовы делегировать уборку?</h2>
          <p className={styles.sub}>
            Оставьте заявку — менеджер свяжется в течение 15 минут,
            подберёт подходящий формат и назначит удобное время.
          </p>
        </div>
        <div className={styles.actions}>
          <a
            href="https://t.me/nonstopclean"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.mainBtn}`}
          >
            Оставить заявку
          </a>
          <div className={styles.links}>
            <a
              href="https://wa.me/37444410861"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-outline-white ${styles.socialBtn}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.557 4.12 1.533 5.857L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 01-5.001-1.374l-.36-.213-3.735.975.998-3.64-.234-.374A9.78 9.78 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="https://t.me/nonstopclean"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-outline-white ${styles.socialBtn}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 14.447l-2.94-.918c-.64-.203-.653-.64.136-.948l11.49-4.43c.535-.194 1.003.131.686 1.097z"/>
              </svg>
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
