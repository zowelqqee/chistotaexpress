import "./globals.css";

export const metadata = {
  title: {
    default: "Чистота Экспресс",
    template: "%s | Чистота Экспресс",
  },
  description:
    "Чистота Экспресс — сайт клининга и химчистки в Ставрополе с маршрутами Next.js для главной страницы, химчистки и публичной оферты.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
