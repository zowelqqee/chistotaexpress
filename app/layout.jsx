import "./globals.css";

export const metadata = {
  title: {
    default: "Чистота Экспресс",
    template: "%s | Чистота Экспресс",
  },
  description:
    "Чистота Экспресс — сайт клининга и химчистки в Ставрополе с маршрутами Next.js для главной страницы, химчистки и публичной оферты.",
  icons: {
    icon: "/img/logo.png",
    shortcut: "/img/logo.png",
    apple: "/img/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
