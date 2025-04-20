---
permalink: "/weighted-random-selection-algorithm-ru/"
layout: post
title: "Алгоритм взвешенного случайного выбора"
category: stepik
description: Вероятность и Программирование
img: assets/img/random-weighted_logo.png
importance: 1
giscus_comments: true
toc:
  sidebar: right
---

## Мотивация

На одном из собеседований мне дали задание 

You'll have to program a raffle game.

Game rules:
- a cashier has an unlimited number of tickets;
- a participant has to buy 1 or more tickets to take part in the game;
- when the cashier sells a ticket, he keeps record of the number of tickets each participant has;
- at the end, the cashier prepares a report in the following format:
    - participant #1: 8 tickets
    - participant #2: 15 tickets
    - participant #3: 1 ticket
    - etc


Your endpoint should accept the cashier's report and pick a winner. Each ticket has equal chances to be drawn, hence the chance to become a winner is proportional to the number of tickets. 
The report is passed to your controller in a JSON format:
```json5
[
    {
        "id": {uniqueParticipantIdentifier},   	// an integer value
        "tickets": {numberOfTickets}		// an integer value
    },
    {
        "id": {uniqueParticipantIdentifier},
        "tickets": {numberOfTickets}
    },
	...
]
```

Your endpoint should return a response in the following format:

```json5
{
    "winnerId": {uniqueParticipantIdentifier}
}
```

Create an ASP.NET Core project with a Web API controller that can select a winner.

Я пытался как-то разобраться как генерировать (выбирать) из взвешенного массива индекс этого элемента, то есть номер победителя в лотерее. Так или иначе, собеседование я провалил, задачу не решил. Что подвигло меня на исследование вопроса, не смотря на хамское поведение интервьювера.

## Приложения

Эта задача является хорошо известной как "алгоритм взвешенного выбора"

Этот алгоритм часто используется для в вычислениях так и в обработке и генерации данных. Некоторые области использования этого алгоритма:

- **Имитационное моделирование** - методы имитационного моделирования [ссылка Лоу "Имитационное моделирование"]
- **Методы Монте-Карло**, <примеры>
- **Компьютерное моделирование**: экономических, физических, социальных систем, к примеру, <примеры>
- **Рандомизированный выбор**: выбор элемента с различной вероятностью, например, выбор объявления для показа в онлайн-рекламе, где объявления с разным рейтингом кликов имеют разный вес.
- **Разработка игр**: в играх вы можете применять этот алгоритм для создания случайных событий или назначения вероятностей различным результатам, например, выпадению персонажей/предметов или поведению врагов.

- **Балансировка нагрузки**: при распределении запросов по нескольким серверам в сценарии балансировки нагрузки вы можете использовать взвешенный случайный выбор, чтобы распределять больше или меньше запросов по разным серверам в зависимости от их емкости или производительности.

- **Системы рекомендаций**: взвешенные случайные алгоритмы используются в системах рекомендаций для расстановки приоритетов и представления контента на основе предпочтений пользователя и релевантности контента.
Чем выше оценка релевантности варианта, тем чаще он будет отображаться пользователю.

- **Эволюционные алгоритмы**
- 
## Концепция

Чтобы понять алгоритм случайного взвешенного распределения, представим его как пространство, где каждая область представляет вес элемента. Это пространство аналогично линии, а длина каждого сегмента на этой линии соответствует весу элемента. Если бросить камень в это пространство, вероятность того, что камень попадет в определенную область, прямо пропорциональна весу этого сегмента, независимо от порядка областей.
