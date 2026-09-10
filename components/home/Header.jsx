"use client"

import Image from 'next/image'
import { useState } from 'react'
import styles from './Header.module.css'

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Тарифы', href: '#calculator' },
  { label: 'Процесс', href: '#process' },
  { label: 'Контакты', href: '#contacts' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>
            <Image
              src="/img/logo-turquoise.png"
              alt=""
              width={44}
              height={44}
              className={styles.logoImage}
              priority
            />
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>Чистота Экспресс</span>
            <span className={styles.logoSub}>Клининг Ставрополь</span>
          </span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="/ximchistka/" className={styles.serviceCta}>
          <span className={styles.serviceCtaIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 11.5c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3V16a2 2 0 0 1-2 2h-1v-2.5a1.5 1.5 0 0 0-3 0V18h-4v-2.5a1.5 1.5 0 0 0-3 0V18H6a2 2 0 0 1-2-2z" />
              <path d="M7 8.5V7a5 5 0 0 1 10 0v1.5" />
            </svg>
          </span>
          <span className={styles.serviceCtaCopy}>
            <span className={styles.serviceCtaTitle}>Химчистка мебели</span>
            <span className={styles.serviceCtaNote}>Диваны, кресла, матрасы</span>
          </span>
          <span className={styles.serviceCtaArrow}>→</span>
        </a>

        <div className={styles.right}>
          <a href="tel:+79187779772" className={`btn btn-primary ${styles.callBtn}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span className={styles.phoneNumber}>+7 (918) 777-97-72</span>
          </a>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            aria-label="Меню"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
