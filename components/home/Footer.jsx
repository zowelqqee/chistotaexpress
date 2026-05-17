import Image from 'next/image'
import styles from './Footer.module.css'

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Тарифы', href: '#calculator' },
  { label: 'Процесс', href: '#process' },
  { label: 'Контакты', href: '#contacts' },
]

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoMark}>
              <Image
                src="/img/logo.png"
                alt=""
                width={44}
                height={44}
                className={styles.logoImage}
              />
            </span>
            <span className={styles.logoText}>
              <span className={styles.logoMain}>Чистота Экспресс</span>
              <span className={styles.logoSub}>Клининг Ставрополь</span>
            </span>
          </a>
          <p className={styles.brandDesc}>
            Профессиональный клининг в Ставрополе.<br />
            Квартиры, офисы, дома и уборка после ремонта.
          </p>
        </div>

        <div className={styles.nav}>
          <p className={styles.colTitle}>Навигация</p>
          <ul className={styles.navList}>
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className={styles.navLink}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="/ximchistka/" className={styles.navLinkHighlight}>
                Химчистка мебели →
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.contacts}>
          <p className={styles.colTitle}>Контакты</p>
          <ul className={styles.contactList}>
            <li>
              <a href="tel:+79187779772" className={styles.contactItem}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                +7 (918) 777-97-72
              </a>
            </li>
            <li>
              <a href="https://wa.me/79187779772" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.557 4.12 1.533 5.857L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 01-5.001-1.374l-.36-.213-3.735.975.998-3.64-.234-.374A9.78 9.78 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/>
                </svg>
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://t.me/Chistotaexpress" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 14.447l-2.94-.918c-.64-.203-.653-.64.136-.948l11.49-4.43c.535-.194 1.003.131.686 1.097z"/>
                </svg>
                Telegram @Chistotaexpress
              </a>
            </li>
            <li>
              <a href="https://instagram.com/chistotaexpress" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25zm8.875 1.125a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5"/>
                </svg>
                Instagram @Chistotaexpress
              </a>
            </li>
            <li>
              <div className={styles.contactItem}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Ставрополь, Ставропольский край
              </div>
            </li>
            <li className={styles.hours}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Ежедневно 9:00 – 21:00
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>© {new Date().getFullYear()} Чистота Экспресс. Ставрополь.</p>
        </div>
      </div>
    </footer>
  )
}
