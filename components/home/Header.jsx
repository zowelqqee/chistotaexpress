"use client"

import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Тарифы', href: '#calculator' },
  { label: 'Процесс', href: '#process' },
  { label: 'Контакты', href: '#contacts' },
]

const langs = ['RU', 'EN']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('RU')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>ЧЭ</span>
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
          <a href="/ximchistka/" className={styles.navLinkAccent} onClick={() => setMenuOpen(false)}>
            Химчистка мебели
          </a>
        </nav>

        <div className={styles.right}>
          <div className={styles.langSwitcher}>
            {langs.map(l => (
              <button
                key={l}
                className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
                onClick={() => setLang(l)}
              >
                {l}
              </button>
            ))}
          </div>

          <a href="tel:+79187779772" className={`btn btn-primary ${styles.callBtn}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Позвонить
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
