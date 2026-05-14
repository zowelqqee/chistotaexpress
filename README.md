# Project Map

С этого момента рабочая версия проекта — это [new_project](/Users/arseniyabramidze/clean_olga/new_project), собранный на Next.js + React + TypeScript.

## Как теперь запускать

- `npm run dev` в корне запускает Next-проект из `new_project`.
- `npm run build` в корне собирает Next-проект из `new_project`.
- `npm run start` в корне запускает production-режим Next-проекта.

## Где лежит основная логика

- Главная страница клининга: [new_project/app/page.tsx](/Users/arseniyabramidze/clean_olga/new_project/app/page.tsx)
- Страница химчистки: [new_project/app/ximchistka/page.tsx](/Users/arseniyabramidze/clean_olga/new_project/app/ximchistka/page.tsx)
- Оферта: [new_project/app/ofer/page.tsx](/Users/arseniyabramidze/clean_olga/new_project/app/ofer/page.tsx)
- API заявки в Telegram: [new_project/app/api/lead/route.ts](/Users/arseniyabramidze/clean_olga/new_project/app/api/lead/route.ts)
- Новая светлая палитра клининга: [new_project/app/cleaning-scope.css](/Users/arseniyabramidze/clean_olga/new_project/app/cleaning-scope.css)

## Что осталось как архив

- [cleaning](/Users/arseniyabramidze/clean_olga/cleaning) — старая React/Vite-версия клининга.
- [index.html](/Users/arseniyabramidze/clean_olga/index.html), [ximchistka](/Users/arseniyabramidze/clean_olga/ximchistka), [assets](/Users/arseniyabramidze/clean_olga/assets), [dist](/Users/arseniyabramidze/clean_olga/dist) — статический слой, который можно потом удалить после окончательного перехода на Next.
- `npm run legacy:dev` и `npm run legacy:build` оставлены только как временный доступ к старому Vite-слою.

## Что уже приведено в порядок

- В `new_project` зафиксированы версии `next`, `react`, `react-dom`, `typescript` и типов, без `latest`.
- Добавлен [new_project/next.config.ts](/Users/arseniyabramidze/clean_olga/new_project/next.config.ts), чтобы dev-режим не путался из-за нескольких lockfile.
- Цветовая схема клининга переведена на более мягкую светлую палитру.
