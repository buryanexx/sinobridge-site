# 中俄桥 SinoBridge — B2B сайт

Лендинг для привлечения китайских фабрик: вывод на маркетплейсы Wildberries и Ozon (Россия).
Двуязычный интерфейс: 中文 / English.

## Стек

- React 19 + TypeScript + Vite 7
- Tailwind CSS 3 + shadcn/ui
- Все тексты сайта — в одном файле `src/i18n.tsx`

## Локальный запуск

```bash
npm install
npm run dev        # http://localhost:7100
npm run build      # продакшн-сборка в dist/
```

## Публикация

Пуш в `main` запускает GitHub Actions: сборка + деплой на GitHub Pages.
Сайт: https://buryanexx.github.io/sinobridge-site/

## Что заменить перед запуском (src/i18n.tsx)

1. Название «中俄桥 SinoBridge» — заглушка
2. Кейсы и цифры — демо-данные
3. Email / телефон / QR WeChat — заглушки
4. Форма заявки — фронтенд-only, нужен бэкенд (WeCom / почта / CRM)
5. ICP-номер в подвале — плейсхолдер (для хостинга в материковом Китае нужен ICP-备案)
