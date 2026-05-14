"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import ChemistryContactButtons from "./ChemistryContactButtons";
import ChemistryFooter from "./ChemistryFooter";
import ChemistryHeader from "./ChemistryHeader";

const services = [
  {
    icon: "🛋️",
    title: "Чистка дивана",
    description: "Глубокая чистка с удалением пятен, запахов и пылевых клещей",
    price: "от 1500 ₽",
    note: "Цена за посадочное место",
  },
  {
    icon: "💺",
    title: "Чистка кресла",
    description: "Бережная обработка мягких кресел любой формы и размера",
    price: "от 800 ₽",
    note: "За одно кресло",
  },
  {
    icon: "🛏️",
    title: "Чистка матраса",
    description:
      "Гипоаллергенная чистка с дезинфекцией и удалением пылевых клещей",
    price: "от 1200 ₽",
    note: "За односпальный матрас",
  },
  {
    icon: "🎨",
    title: "Чистка ковров",
    description: "Восстановление цвета и структуры ковровых покрытий",
    price: "от 200 ₽/м²",
    note: "Минимальный заказ 1000 ₽",
  },
  {
    icon: "🚗",
    title: "Химчистка авто",
    description: "Салон вашего автомобиля как новый",
    price: "от 3000 ₽",
    note: "За полную химчистку салона",
  },
  {
    icon: "🏢",
    title: "Для офисов",
    description: "Комплексная чистка офисной мебели и ковровых покрытий",
    price: "Индивидуально",
    note: "Скидки для корпоративных клиентов",
  },
];

const benefits = [
  {
    icon: "🇩🇪",
    title: "Kärcher из Германии",
    description:
      "Профессиональное оборудование мирового уровня для эффективной чистки",
  },
  {
    icon: "🌿",
    title: "Эко-химия",
    description:
      "Безопасные средства без вредных веществ, подходят для аллергиков",
  },
  {
    icon: "💰",
    title: "Оплата по результату",
    description: "Сначала проверяете качество работы, потом оплачиваете",
  },
  {
    icon: "⚡",
    title: "Быстрая сушка",
    description:
      "Специальная технология позволяет использовать мебель через 2-4 часа",
  },
  {
    icon: "🎯",
    title: "Фиксированная цена",
    description: "Точный расчет стоимости в WhatsApp без скрытых доплат",
  },
  {
    icon: "⭐",
    title: "Опыт 5+ лет",
    description: "Более 2000 довольных клиентов в Ставрополе и крае",
  },
];

const steps = [
  { number: "1", title: "Заявка", description: "Свяжитесь с нами по телефону или WhatsApp" },
  { number: "2", title: "Расчет", description: "Получите точную стоимость в течение 5 минут" },
  { number: "3", title: "Приезд мастера", description: "Приедем в удобное для вас время" },
  { number: "4", title: "Чистка", description: "Профессиональная обработка 60-90 минут" },
  { number: "5", title: "Проверка", description: "Убедитесь в качестве результата" },
  { number: "6", title: "Оплата", description: "Оплачиваете только после одобрения" },
];

const testimonials = [
  {
    text: "Отличная работа! Диван был в ужасном состоянии после ремонта, думали придется выбрасывать. Ребята приехали, почистили - теперь как новый! Очень довольны результатом и ценой.",
    author: "Елена Иванова, Ставрополь",
  },
  {
    text: "Профессиональный подход! Чистили офисную мебель - 6 кресел и диван в переговорной. Работали быстро, аккуратно, без пыли. Оборудование действительно немецкое Kärcher. Рекомендую!",
    author: "Дмитрий Петров, руководитель компании",
  },
  {
    text: "У нас двое детей и кот, диван был в пятнах. Вызвали Чистоту Экспресс, мастер приехал точно вовремя, все объяснил, почистил. Средства безопасные, запаха нет. Через 3 часа уже сидели на диване. Супер!",
    author: "Анна Смирнова, мама двоих детей",
  },
];

const faqItems = [
  {
    question: "Как быстро сохнет мебель после чистки?",
    answer:
      "Благодаря профессиональному оборудованию Kärcher и специальной технологии чистки, мебель высыхает за 2-4 часа. В помещении не остается повышенной влажности, можно сразу проветрить.",
  },
  {
    question: "Безопасна ли химия для детей и животных?",
    answer:
      "Да, мы используем только сертифицированные эко-средства европейского производства. Они полностью безопасны для детей, животных и людей с аллергией. Не содержат хлора, фосфатов и агрессивных компонентов.",
  },
  {
    question: "Сколько времени занимает чистка дивана?",
    answer:
      "В среднем чистка 3-местного дивана занимает 60-90 минут. Время зависит от степени загрязнения, типа обивки и размера мебели. Точное время мастер назовет после осмотра.",
  },
  {
    question: "Какие пятна вы можете удалить?",
    answer:
      "Мы успешно удаляем большинство пятен: от еды и напитков, жира, крови, следов от домашних животных, чернил и маркеров. Для застарелых и сложных пятен используем специализированные пятновыводители.",
  },
  {
    question: "Как формируется цена?",
    answer:
      "Цена зависит от типа мебели, размера и степени загрязнения. Отправьте фото в WhatsApp, и мы рассчитаем точную стоимость. Никаких скрытых доплат - цена фиксированная и не меняется после выезда.",
  },
  {
    question: "Что входит в гарантию 24 часа?",
    answer:
      "Если в течение 24 часов вы заметите, что пятно вернулось или остались разводы - мы бесплатно приедем и повторно обработаем участок. Гарантия распространяется на все виды работ.",
  },
];

export default function ChemistryLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTestimonial((value) => (value + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="chemPage">
      <Script
        src="https://cdn.qform.io/forms.js"
        strategy="afterInteractive"
      />

      <ChemistryHeader />

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div>
                <h1>Профессиональная химчистка мебели в Ставрополе</h1>
                <p>
                  Немецкое оборудование Kärcher и эко-химия для безопасной чистки
                  вашего дома
                </p>
                <div className="hero-features">
                  <div className="hero-feature">Оплата только после проверки результата</div>
                  <div className="hero-feature">Безопасно для детей и животных</div>
                  <div className="hero-feature">Быстрая сушка за 2-4 часа</div>
                  <div className="hero-feature">Гарантия 24 часа на результат</div>
                  <ChemistryContactButtons />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2 className="section-title">Наши услуги и цены</h2>
            <p className="section-subtitle">Фиксированная стоимость без скрытых доплат</p>
            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-price">{service.price}</div>
                  <div className="service-note">{service.note}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="before-after">
          <div className="container">
            <h2 className="section-title">Результаты нашей работы</h2>
            <p className="section-subtitle">До и после профессиональной чистки</p>
            <div className="ba-grid">
              {[
                { src: "/img/divan.jpg", alt: "Результат химчистки дивана" },
                { src: "/img/stulia.jpg", alt: "Результат химчистки стула" },
                { src: "/img/stuliia.jpg", alt: "Результат чистки мягкой мебели" },
              ].map((image) => (
                <div key={image.src} className="ba-item">
                  <div className="ba-image">
                    <img className="ba-width" src={image.src} alt={image.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="benefits">
          <div className="container">
            <h2 className="section-title">Почему выбирают нас</h2>
            <p className="section-subtitle">
              Профессионализм и надежность в каждой детали
            </p>
            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="benefit-item">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="process">
          <div className="container">
            <h2 className="section-title">Как мы работаем</h2>
            <p className="section-subtitle">Простой процесс от заявки до результата</p>
            <div className="process-steps">
              {steps.map((step) => (
                <div key={step.number} className="process-step">
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="whatsapp-banner">
          <div className="container">
            <h2>Получите бесплатную консультацию</h2>
            <p>Напишите нам в WhatsApp и узнайте точную стоимость за 1 минуту</p>
            <div className="contact-cta-row">
              <ChemistryContactButtons />
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <h2 className="section-title">Отзывы наших клиентов</h2>
            <p className="section-subtitle">Более 500 пятизвездочных отзывов</p>
            <div className="testimonials-carousel">
              {testimonials.map((item, index) => (
                <div
                  key={item.author}
                  className={`testimonial-item ${
                    index === currentTestimonial ? "active" : ""
                  }`}
                >
                  <p className="testimonial-text">"{item.text}"</p>
                  <div className="testimonial-author">— {item.author}</div>
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {testimonials.map((item, index) => (
                <button
                  key={item.author}
                  type="button"
                  className={`dot ${index === currentTestimonial ? "active" : ""}`}
                  aria-label={`Показать отзыв ${index + 1}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <h2 className="section-title">Частые вопросы</h2>
            <p className="section-subtitle">
              Ответы на популярные вопросы о наших услугах
            </p>
            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={item.question} className={`faq-item ${isOpen ? "active" : ""}`}>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      {item.question}
                      <span className="faq-icon">▼</span>
                    </button>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="guarantee">
          <div className="container">
            <div className="guarantee-content">
              <h2>Наша гарантия качества</h2>
              <div className="guarantee-box">
                <h3>24 часа на проверку</h3>
                <p>
                  Если результат вас не устроит - вернем деньги или бесплатно
                  повторим чистку
                </p>
              </div>
              <p style={{ fontSize: 18, marginTop: 24 }}>
                Мы уверены в качестве нашей работы и берем на себя все риски. Ваша
                удовлетворенность - наш приоритет!
              </p>
            </div>
          </div>
        </section>
      </main>

      <ChemistryFooter />
    </div>
  );
}
