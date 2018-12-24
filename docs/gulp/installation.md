---
title: Установка
---

# Установка

## Node.js

Для работы [Gulp](https://gulpjs.com/) необходимо установить [Node.js](https://nodejs.org/en/), устанавливаем стабильную **LTS** версию.
После установки можно проверить установлен ли **Node.js** вписав в командную консоль.

```shell
# Проверка версии node
node -v
```

## Пакетные менеджеры

`npm` - пакетный менеджер идет в комплекте с **Node.js**.

```shell
# Проверка версии npm
npm -v
```

`yarn` - пакетный менеджер от **Facebook**, его можно [установить](https://yarnpkg.com/lang/en/) отдельно.

```shell
# Проверка версии yarn
yarn -v
```

## Установка зависимостей проекта

Для начала надо установить все зависимости для сборки проекта, зависимости описаны в файле **package.json**.

```shell
npm install  
# или
yarn install
```