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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
