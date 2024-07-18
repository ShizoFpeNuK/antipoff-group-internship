# Решение задания для стажировки в Antipoff Group

Решение тестового задания на стажировку на позицию "Frontend-разработчик стажер на React" в компанию Antipoff Group.

Во время выполнения тестового задания были достигнуты следующие цели:
1. Регистрация и авторизация должны осуществляться через email/password. Проверять на валидность все входные данные и выводить ошибку при невалидных. Токен необходимо сохранять в памяти браузера и удалять после нажатия на кнопку “Выход”.
2. Страница всех пользователей. На этой странице отображаются все пользователи.
3. Страница пользователя отображает данные конкретного пользователя

Также были выполнены дополнительные задачи:
1. Для списка пользователей добавить пагинацию.
2. На странице пользователя добавить загрузку аватарки.
3. Добавить возможность ставить лайки пользователям, которые сохраняются  после перезагрузки страницы.

Были выбраны следующие технологии на основе предложенных в тестовом задании:
- React Router
- Axios
- Redux Toolkit
- SCSS/Sass

## Полезные ссылки
- Сайт: [Vercel](https://antipoff-group-internship.vercel.app/)
- Макет: [Figma](https://www.figma.com/file/Nw9TJYCeh8Tmi9cX3KxyqO/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5.-%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4?node-id=0%3A1)
- API: [Reqres](https://reqres.in/)


# Запуск
Перед запуском нужно добавить файл *.env* и добавить в него следующие переменные окружения:
```env
REACT_APP_SERVER_URL="https://reqres.in/api"
```

Следующим пунктом является выполнение команды в консоли для запуска режима "**development**" или "**production**":
- Режим "development"
```bash
npm run start
```
- Режим "production"
```bash
npm run build
```
*__Примечание__*: Для запуска в режиме "**production**" потребуется развернуть любой сервер. Например, *serve*, пакет которого присутствует в NPM.

После этого приложение запустится. Спасибо за внимание!