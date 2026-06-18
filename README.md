# Питч-генератор

## Демо-ссылка
https://pitch-spbtech.vercel.app

##  Как запустить локально
Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Blohhs/PitchSpbtech.git
```

Перейдите в папку проекта:
```bash
cd PitchSpbtech/client
```

Установите зависимости:
```bash
npm install
```

Запустите проект:
```bash
npm start
```


##  Как собрать build
Для создания оптимизированной статической версии приложения выполните:

```bash
cd client
npm run build
```
Собранные файлы будут находиться в папке client/build.

##  Как задеплоить
Проект развернут через платформу Vercel:
- Подключите репозиторий к Vercel.
- В разделе Root Directory выберите папку client.
- Vercel автоматически определит настройки сборки (npm run build).
- Нажмите кнопку Deploy.
