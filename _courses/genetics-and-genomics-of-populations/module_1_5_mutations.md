---
permalink: "/stepik-course-genetics-and-population/module_1_5_mutations"
layout: post
title: "1.5 Мутационный процесс"
description: Генетика и геномика популяций
category: stepik-course-genetics-and-population
importance: 1
giscus_comments: true
toc:
  sidebar: right
---

[1.5 Мутационный процесс](https://stepik.org/lesson/88183/step/1?unit=64523)

### модуль 1.5 шаг 4

---

Отметьте верные утверждения о мутациях и мутационной теории.

* [ ] Мутации являются неустойчивыми изменениями, склонными к быстрому исчезновению
* [ ] С точки зрения молекулярной биологии мутация — это изменение последовательности белка
* [X] Согласно теории де Фриза, мутации являются качественными, скачкообразными изменениями
* [X] Самым простым и распространенным видом мутаций является замена единичного нуклеотида (SNP)
* [ ] Мутационная теория де Фриза предполагает. что мутации могут быть только вредными


### модуль 1.5 шаг 6

---

Расставьте в правильном порядке события, приводящие к появлению мутации.

* Воздействие внешнего или внутреннего фактора на структуру молекулы ДНК
* Первичное повреждение
* Неэффективное исправление повреждения в процессе репарации
* Закрепленное изменение в последовательности ДНК


### модуль 1.5 шаг 8

---

Допустим, ученые проанализировали скорость мутационного процесса у животного (исследуя количество мутаций в половых клетках). Возникновение мутаций отслеживали в некотором локусе X длиной 1000 п.н.. В исследовании были получены следующие данные:

* число проанализированных половых клеток - 4,274,121;
* обнаруженное число мутаций - 210;

Рассчитайте частоту мутирования локуса X (в числе мутаций на 1 нуклеотид на одно поколение)

**Решение**:

210/4,274,121=0,00005 - это частота мутирования данного локуса. но нас просят подсчитать не частоту мутирования локуса вообще, а частоту мутирования в пересчете на 1 нуклеотид. т.е. на 1 из 1000. иными словами, делим результат еще на 1000. получаем приблизительно 5*10^-8

**Ответ**: 4.9132909433308041583286949527166e-8


### модуль 1.5 шаг 10

---

Рассмотрим некоторый локус с двумя аллелями, $$А$$ и $$а$$, имеющими частоты $$p$$ и $$q$$. Начальные частоты $$𝑝_0=0.6$$ и $$𝑞_0=0.4$$. Если идет необратимый мутационный процесс 𝑎→𝐴 с частотой $$\mu=10^{−3}$$, то какова будет частота аллели $$А$$ в поколении 𝑡=100?

Ответом является десятичная дробь, округленная до сотых долей.

Решение:

```R
p0 <- 0.6
q0 <- 0.4

mu <- 10^-3
t <- 100

qt <- (1-mu)^t*q0
1-qt

```

**Ответ**: 0.64

### модуль 1.5 шаг 13

---

Допустим, в некотором локусе идет обратимый мутационный процесс: $$A \rightarrow a$$ с частотой $$\mu = 10^{-3}$$ и  $$a\rightarrow A$$ с частотой $$\nu = 10^{-4}$$. Какова будет итоговая равновесная частота аллели а?

**Решение**:

=(1/1000)/(1/1000+1/10000)

**Ответ**: 0.91
