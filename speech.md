## Слайд 1
Сегодня мы поговорим про webpack.
Webpack является одним из самых мощных и гибких инструментов для сборки frontend.
Инструменты сборки стали неотъемлемой частью веб-разработки, в основном из-за возрастающей сложности JS-приложений, а также как способ избавления нас от выполнения рутинных задач.

## Слайд 2
##### Что такое webpack?
Изначально, вебпак позиционировался как бандлер для работы только с javascript'ом. Сейчас же Webpack - это система сборки с массой возможностей которая умеет работать с разными языками. самая главная его фича заключается в том, что он анализирует JS-код (а также CSS, json или другой, через лоадеры (загрузчики)).

Gulp/grunt - это общая система для организации задач, которая сама по себе сборку не поддерживает, но её можно на ней написать, с помощью плагинов. При этом анализа кода, скорее всего, не будет, а значит ряд продвинутых фич отпадут.

## Слайд 3
##### Gulp/grunt = это таск раннеры. 
С их помощью вы можете можете написать таски для работы с файлами, использовать препроцессоры, шаблонизаторы. Но по сути это *изолированное* преобразование файлов.

## Слайд 4
##### Webpack - НЕ таск раннер!
Официальное определение звучит так: ```webpack берет модули с зависимостями и генерирует статические ресурсы, которые представляют эти модули```.

Зависимостями могут быть любые файлы
ES2015, JSX, TypeScript, …
CSS, LESS, SASS, Stylus, …
PNG, JPEG, SVG, WOFF, …
Handlebars, Jade, …

 
### Слайд 5
##### Плюсы:
* Автоматически строит дерево зависимостей ресурсов
* Воспринимает как require()- так и import-синтаксисы модуля
* Позволяет осуществлять продвинутое разделение (оптимизацию) кода
* Hot Reload для более быстрой разработки с помощью React, Vue.js и подобных фреймворков

## Слайд 6
##### Минусы webpack'a:
* Не подойдет для новичков
* Работа с файлами CSS, картинками и другими не JS ресурсами по началу сбивает с толку
* Документация могла бы быть лучше

## Слайд 7
#### Загрузчик and Плагины
Вся мощь вебпака реализуется благодаря двум базовым сущностям загрузчики и плагины.


## Слайд 8
#### Загрузчики 
Загрузчик занимает преобразованием какого-то файла в js. Это может быть js какой-то который преобразуется в es5, или к примеру стили, они оборачиваются в строку и сохраняются в виде common js модуля  

## Слайд 9
#### Плагины
Плагины более сложная вещь плагин имеет доступ ко всем модулям до, после трансформации, могут модифицировать дерево, влиять на процесс создания выходных файлов
с помощью плагинов реалиизуется основная часть возможностей webpack


## Слайд 10
Первые шаги 

Устанавливаем webpack как зависимость для вашего проекта. Можно также установить глобально.
Описываем конфигурацию для нашего вебпака в <b><i>webpack.config.js</i></b> в корне нашего проекта.

## Слайд 11
entry указывает webpack’y, какой из JavaScript файлов является основным. Существует множество различных стратегий настройки входных точек, но в большинстве случаев достаточно одной записи. В output мы указываем имя нашего конечно файла и путь к нему. После запуска webpack мы получим весь наш JavaScript в файле bundle.js. Это единственный файл, который мы будем связывать в нашем HTML:

## Слайд 12

##### Конец, дополнение
Как и во многих других аспектах веб-разработки, здесь нет стандартного набора инструментов, который нужно использовать. Прямо сейчас разработчики могут выбирать между webpack, Gulp, Parcel, NPM scripts, Grunt и еще десятком других.
