---
permalink: "/stepik-course-genetics-and-population/module_2_5-analysis-of-genetic-mixing"
layout: post
title: "2.5 Анализ генетического смешения"
description: Генетика и геномика популяций
category: stepik-course-genetics-and-population
importance: 1
giscus_comments: true
toc:
  sidebar: right
---

[2.5 Анализ генетического смешения](https://stepik.org/lesson/295219/step/1?unit=276890)

### модуль 2.5 шаг 4

---

Если популяция *A* появилась как результат смешения *B* и *C* с коэффициентами смешения (admixture proportion) ;$\alpha  = 0.2;$ и ;$\beta = 0.8$$, а частота аллели *X* в этих популяциях была равна $$p_B=0.9$$ , $$p_C=0.3$$, то чему равна ожидаемая частота аллели *X* в популяции *A*?

**Ответ:** 0.42


### модуль 2.5 шаг 6

---

Соотнесите различные $$f_x$$ статистики с их смысловым значением.Выберите верные утверждения о вероятности коалесценции одной пары аллелей.

1. $$f_2(A,B)$$ - Анализ генетического расстояния между **A** и **B**
2. $$f_3(A;B,C)$$ - Проверка гипотез об эволюционном положении **A** относительно **B** и **C**
3. $$f_4(A,B,C,D)$$ - Анализ взаимосвязей в эволюции четырех популяций


### модуль 2.5 шаг 8

---

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/genetics-step_2_5-8.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
{% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

**Ответ:** -0.063


### модуль 2.5 шаг 9

---

Есть ли в предыдущем задании свидетельства того, что популяция **C** произошла от генетического смешения **A** и **B**?

При ответе на вопрос руководствуйтесь точечной оценкой $$f_3$$, не учитывая стандартное отклонение.


**Ответ**: да


### модуль 2.5 шаг 11

---

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/genetics-step_2_5_11.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
{% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}


### модуль 2.5 шаг 12

---

**Задание для получения сертификата с отличием**

В некотором исследовании проанализировали генотипы четырех индивидов, принадлежащих к разным популяциям (**A**,**O**,**D**,**N**). Аутгруппой является популяция **N**. Образец Ind1 соответствует популяция **A**, Ind2 - O, Ind3 - D, Ind4 - N.

Результаты генотипирования представлены в файле [data_for_dtrio.vcf](https://drive.google.com/open?id=1s_NJpopkBSUPjoF0s9MwtG17QCeW6ArP).

Используя инструмент Dsuite (доступен по [ссылке](https://github.com/millanek/Dsuite)), рассчитайте **D**(**A**,**O**,**D**,**N**). Чему равно это значение? Какая популяция (**A** или **O**) содержит избыток производных аллелей, общих с популяцией **D**? Является ли результат значимым, исходя из результатов анализа Dsuite?

Приведите в ответе значение **D**-статистики, округленное до тысячных долей, название популяции, которая содержит избыток общих производных аллелей с **D**, и ответ на вопрос о значимости результата.

**Пример ответа:** 0.121,A,нет

**Ответ**:
0.002,O,нет


### модуль 2.5 шаг 14

---

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/genetics-step_2_5_14.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
{% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

**Ответ:** 0.23


### модуль 2.5 шаг 15

---

Рассмотрите предложенный результат работы ADMIXTURE. Отметьте верные утверждения:

![](https://ucarecdn.com/f994c7f1-c626-4398-a356-eb728a2419ee/)

* [ ] Наибольший вклад в формирование сегодняшней популяции Ближнего Востока внесла предковая африканская популяция
* [X] Африканская популяция формирует отдельный генетический кластер, слабо похожий на остальные
* [X] Сегодняшняя популяция Африки произошла от одной предковой популяции
* [X] Предковая популяция сегодняшних обитателей Южной Азии также внесла вклад в развитие сегодняшнего населения Кавказа
* [ ] Современное население Кавказа формирует отдельный кластер, который не имеет общего происхождения с европейцами
