"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Процесс", href: "#process" },
  { label: "Вопросы", href: "#faq" },
];

export default function ChemistryHeader({ compact = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={compact ? "headerCompact" : undefined}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link className="logoLink" href="/ximchistka">
              <span className="logoMark">
                <Image
                  src="/img/logo.png"
                  alt=""
                  width={42}
                  height={42}
                  className="logoImage"
                  priority
                />
              </span>
              <span className="logoText">Чистота Экспресс</span>
            </Link>
          </div>

          {!compact && (
            <>
              <button
                type="button"
                className={`menu-toggle ${menuOpen ? "open" : ""}`}
                aria-label="Открыть меню"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
              >
                <span className="burger-line" />
                <span className="burger-line" />
                <span className="burger-line" />
              </button>

              <nav className={menuOpen ? "active" : undefined}>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                ))}
                <Link
                  href="/"
                  onClick={closeMenu}
                  style={{ color: "#00a8e8", fontWeight: 600 }}
                >
                  ← Клининг
                </Link>
              </nav>

              <div data-formid="form_2RH0nkSiCGV-LnQK3ghdT1leBvS09AoO">
                <button type="button" className="btn btn-primary">
                  Заказать звонок
                </button>
              </div>
            </>
          )}

          <a href="tel:+79187779772" className="phone">
            +7 (918) 777-97-72
          </a>
        </div>
      </div>
    </header>
  );
}
