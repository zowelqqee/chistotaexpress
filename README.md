# Project Map

С этого момента рабочая версия проекта — это [new_project](/Users/arseniyabramidze/clean_olga/new_project), собранный на Next.js + React.

## Как теперь запускать

- `npm run dev` в корне запускает Next-проект из `new_project`.
- `npm run build` в корне собирает Next-проект из `new_project`.
- `npm run start` в корне запускает production-режим Next-проекта.

## Где лежит основная логика

- Главная страница клининга: [new_project/app/page.jsx](/Users/arseniyabramidze/clean_olga/new_project/app/page.jsx)
- Страница химчистки: [new_project/app/ximchistka/page.jsx](/Users/arseniyabramidze/clean_olga/new_project/app/ximchistka/page.jsx)
- Оферта: [new_project/app/ofer/page.jsx](/Users/arseniyabramidze/clean_olga/new_project/app/ofer/page.jsx)
- Общий layout и метаданные: [new_project/app/layout.jsx](/Users/arseniyabramidze/clean_olga/new_project/app/layout.jsx)
- Глобальные стили и scoped-стили под маршруты: [new_project/app/globals.css](/Users/arseniyabramidze/clean_olga/new_project/app/globals.css), [new_project/app/chemistry.css](/Users/arseniyabramidze/clean_olga/new_project/app/chemistry.css), [new_project/app/offer.css](/Users/arseniyabramidze/clean_olga/new_project/app/offer.css)

## Что осталось как архив

- [cleaning](/Users/arseniyabramidze/clean_olga/cleaning) — старая React/Vite-версия клининга.
- [index.html](/Users/arseniyabramidze/clean_olga/index.html), [ofer.html](/Users/arseniyabramidze/clean_olga/ofer.html), [public/ximchistka/index.html](/Users/arseniyabramidze/clean_olga/public/ximchistka/index.html), [assets](/Users/arseniyabramidze/clean_olga/assets), [dist](/Users/arseniyabramidze/clean_olga/dist) — статический слой, который можно потом удалить после окончательного перехода на Next.
- `npm run legacy:dev` и `npm run legacy:build` оставлены только как временный доступ к старому Vite-слою.

## Что уже приведено в порядок

- В `new_project` установлен отдельный набор зависимостей Next.js, React и React DOM.
- Добавлен [new_project/next.config.mjs](/Users/arseniyabramidze/clean_olga/new_project/next.config.mjs) с legacy-редиректами и `turbopack.root`, чтобы dev/build не путались из-за нескольких lockfile.
- Главная страница клининга перенесена из старого React/Vite-слоя в App Router с сохранением компонентов и CSS modules.
- Статические страницы химчистки и оферты перенесены в маршруты `/ximchistka` и `/ofer`.
