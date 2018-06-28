
Версия "День Конституции"
РЕАЛИЗОВАННЫЙ ФУКНЦИОНАЛ:
- разбиение на компоненты с заполнением html/css, два уровня вложенности компонентов
- использование 5 сервисов для хранения контактов, категорий, юзеров (только логина), для фильтрации и аутентификации (примитивной)
- роутинг с тремя уровнями вложенности, кнопки навигации между дочерними компонентами
- auth guard для запрета доступа к одному из роутов; происходит переадресация на форму логина с запоминанием состояния через canActivate.
После успешного логина происходит переход на предыдущую запрошенную страницу;
- использование Ангуляровских форм для добавления-редактирования контактов
- есть механизм добавления категорий к контакту (через меню три точки)
- стартовый набор контактов хранится в константе, где каждый объект заполняется как экземпляр класса-интерфейса Contact
- затем эти контакты записываются в localStoragе и считываются оттуда. Новые контакты дописываются туда же.

НЕ РАБОТАЕТ:

* фильтрация по категориями (работает по буквам фамилии)
* изменение, удаление контактов
* подписка на изменения данных в сервисах или роутинга (частично реализовано через массив функций, которые вызываются в сервисе в момент обновления)

ВОПРОСЫ, СОМНИТЕЛЬНЫЕ МЕСТА:

1. localStorage. При загрузке app.component.ts я стягиваю стартовый набор контактов из константы (массива) и записываю их в локал-сторадж. Затем в сервисе
считываю их оттуда (с преобразованием строка-объект). При добавлении нового контакта я дописываю его в локал-сторадж (ключ - фамилия контакта).
2. не удалось вставить в хтмл-разметку константы с длинными значениями для стилей меню "три точки" (contacts.component.html)
3. не удается использовать в роутинге компонент404 через "**" из-за его конфликта с вложенным роутом


# AngullelContactbook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
