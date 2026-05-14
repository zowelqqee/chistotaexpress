import Link from "next/link";

export default function ChemistryFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Белый Кит</h3>
            <p>Профессиональная химчистка мебели в Ставрополе</p>
            <p style={{ marginTop: 16 }}>Работаем ежедневно с 8:00 до 22:00</p>
          </div>

          <div className="footer-section">
            <h3>Контакты</h3>
            <a href="tel:+79187779772">+7 918 777-97-72</a>
            <a href="https://wa.me/79187779772">WhatsApp</a>
            <p style={{ marginTop: 8 }}>г. Ставрополь, Ставропольский край</p>
          </div>

          <div className="footer-section">
            <h3>Услуги</h3>
            <a href="#services">Чистка диванов</a>
            <a href="#services">Чистка кресел</a>
            <a href="#services">Чистка матрасов</a>
            <a href="#services">Чистка ковров</a>
            <a href="#services">Химчистка авто</a>
          </div>

          <div className="footer-section">
            <h3>Информация</h3>
            <a href="#benefits">Преимущества</a>
            <a href="#process">Процесс работы</a>
            <a href="#faq">Частые вопросы</a>
            <a href="#services">Цены</a>
            <Link href="/">Главная клининга</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Белый Кит. Все права защищены. Профессиональная химчистка мебели
            в Ставрополе.
          </p>
          <Link className="oferlink" href="/ofer">
            Публичная оферта
          </Link>
        </div>
      </div>
    </footer>
  );
}
