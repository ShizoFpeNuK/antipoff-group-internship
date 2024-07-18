# Решение задания для стажировки в Antipoff Group

Решение тестового задания на стажировку на позицию "Frontend-разработчик стажер на React" в компанию Antipoff Group.

Во время выполнения тестового задания были достигнуты следующие цели:
1. Регистрация и авторизация должны осуществляться через email/password. Проверять на валидность все входные данные и выводить ошибку при невалидных. Токен необходимо сохранять в памяти браузера и удалять после нажатия на кнопку “Выход”.
2. Страница всех пользователей. На этой странице отображаются все пользователи.
3. По клику на каждую карточку открывается страница с детальной информацией о пользователе. Страница пользователя отображает данные конкретного пользователя.
4. Сайт должен быть адаптивным.
5. Список пользователей доступен только для зарегистрированных пользователей.

Также были выполнены дополнительные задачи:
1. Для списка пользователей добавить пагинацию.
2. На странице пользователя добавить загрузку аватарки.
3. Добавить возможность ставить лайки пользователям, которые сохраняются  после перезагрузки страницы.

Были выбраны следующие технологии на основе предложенных в тестовом задании:
- React
- React Router
- Axios
- Redux Toolkit
- SCSS/Sass
- TS

## Полезные ссылки
- Сайт: [Vercel](https://antipoff-group-internship.vercel.app/)
- Макет: [Figma](https://www.figma.com/file/Nw9TJYCeh8Tmi9cX3KxyqO/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5.-%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4?node-id=0%3A1)
- Задание: [GoogleDocs](https://docs.google.com/document/d/1Zv2tPpmfqaDfx9-E2Z3M8CVuAaWajOkEPQ_o2oz4ATQ/edit?b24form_user=2.9178-1721997892-a2fd4299263e3047fe6e860abce9db13f509c416a09ebdce607fb22f0f96f44e&pli=1)
- API: [Reqres](https://reqres.in/)

## Пояснения к решению тестового задания
1. Авторизация и регистрация может удачно выполниться только при использовании следующих электронных почт:
    - george.bluth@reqres.in
    - janet.weaver@reqres.in
    - emma.wong@reqres.in
    - eve.holt@reqres.in
    - charles.morris@reqres.in
    - tracey.ramos@reqres.in
    - michael.lawson@reqres.in
    - lindsay.ferguson@reqres.in
    - tobias.funke@reqres.in
    - byron.fields@reqres.in
    - george.edwards@reqres.in
    - rachel.howell@reqres.in

    Это обуславливается настройками API Reqres. Если вводить любые другие почты, то будет ошибка 400.

2. Токен хранится в куках. Однако Reqres никак не проверяет токен и присылает его в теле ответа.
3. В тестовом задании в пункте 3 сказано, что страница пользователя отображает данные конкретного пользователя. Поскольку формулировка неточная и в макете присутствует только один дизайн страницы отображения данных пользователя, то было решено, что имеется ввиду отображение данных пользователя, по которому кликнули.
4. В задании "со звёздочкой" в пункте 2 опять же неточная формулировка. Исходя из логики, было решено, что данная функция будет реализована только на странице пользователя, залогинившегося в систему. У остальных пользователей поменять аватарку нельзя.
5. Для выполнения пункта 2 задания "со звёздочкой" было решено при помощи *email* искать залогинившегося пользователя для добавления функции обновления аватарки. Обусловлено это тем, что API при регистрации возвращает идентификатор id, но не при авторизации. Также API хоть и даёт обновить данные пользователя, но не обновляет их из-за своей реализации.
6. Для выполнения пункта 3 задания "со звёздочкой" было решено удалять список лайкнутых пользователей при разлогировании. Обсуловлено это тем, что можно залогиниться под другим пользователем, но список будет принадлежать прошлому пользователю. Reqres же не предоставляет API для хранения этого списка на сервере, поэтому он хранится в LocalStorage.
7. Была реализована сессионная авторизация, то есть пока пользователь не выйдет из аккаунта, он всегда будет авторизован.

## Запуск
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
