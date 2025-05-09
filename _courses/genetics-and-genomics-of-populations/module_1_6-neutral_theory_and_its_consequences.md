---
permalink: "/stepik-course-genetics-and-population/module_1_6-neutral_theory_and_its_consequences"
layout: post
title: "1.6 Нейтральная теория и ее следствия"
description: Генетика и геномика популяций
category: stepik-course-genetics-and-population
importance: 1
giscus_comments: true
toc:
  sidebar: right
---

[1.6 Нейтральная теория и ее следствия](https://stepik.org/lesson/295218/step/1?unit=276889s)

### модуль 1.6 шаг 4

---
Заполните пропуски.

Исходя из классической генетики и теории эволюции, большая часть мутаций считалась **вредными**. В то же время, в 1968 году была предложена новая теория, получившая название **нейтрализма**, согласно которой большая часть мутаций имеет **нейтральный** ффект. Эта теория согласуется с современными данными о разнообразии генома человека, в котором как минимум **300,000,000** позиций являются вариабельными.

### модуль 1.6 шаг 6

---

Выберите верные утверждения о соотношении частоты мутирования и скорости накопления замен.

- [ ] При наличии отбора скорость накопления замен будет равна скорости мутирования
- [X] При нейтральной эволюции скорость накопления замен будет равна скорости мутирования
- [X] При наличии отбора скорость накопления замен будет значительно ниже скорости мутирования
- [ ] При нейтральной эволюции скорость накопления замен будет сильно ниже скорости мутирования


### модуль 1.6 шаг 7

---

Чему равна вероятность фиксации аллели с частотой p = 0.4?

**Решение и ответ**: 0.4


### модуль 1.6 шаг 9

---


Сопоставьте различные популяции с их ожидаемой гетерозиготностью в модели бесконечного числа аллелей.

- Популяция с $$4N << \frac{1}{\mu}$$ -  Гетерозиготность популяции низкая
- Популяция с $$4N = \frac{1}{\mu}$$ - Гетерозиготность равна 1/2
- Популяция с $$4N > \frac{1}{\mu}$$ - Гетерозиготность популяции высокая




### модуль 1.6 шаг 12

---


Допустим, Вы проанализировали 4 последовательности определенного локуса в популяции. Результаты анализа представлены на рисунке:

![image](https://ucarecdn.com/72735e3e-6f8e-46ad-802f-7da4898b4b30/)

Каждая мутация на рисунке обозначена цветным символом. Рассчитайте разницу между показателем Таджимы и показателем Уотерсона ($$\theta_T - \theta_W$$).

Ответом является число, округленное до десятых долей.

**Решение**:
=(0+5+5+5+5+0)/(4*3/2)-5/(1+1/2+1/3)=20/6-30/11


**Ответ**: 0.6


### модуль 1.6 шаг 13

---


Задание для получения сертификата с отличием

Полученное значение D-статистики является частным от деления ($$\theta_T - \theta_W$$) на ожидаемое стандартное отклонение этого значения. В связи с этим, для оценки значимости можно использовать правило, аналогичное правилу двух $$\sigma$$ для нормального распределения, то есть принимать как значимое отклонение от нейтральной эволюции такое значение D, которое по модулю превышает 2. Именно такой грубой логикой мы рекомендуем руководствоваться при решении данного задания.

В некотором исследовании были проанализированы последовательности ДНК большого количества образцов. В файле sequences.fasta представлены результаты множественного выравнивания этих последовательностей.

Рассчитайте число сегрегирующих сайтов и значение D-статистики Таджимы (округлите значение до десятых). Есть ли свидетельства отклонения от нейтральной эволюции?

Для расчётов Вы можете использовать любой удобный инструмент. Мы советуем использовать пакет popGenome для R (описание пакета доступно по ссылке) или графический интерфейс MEGAX (ознакомиться с программой можно по ссылке)

Введите в поле ответа полученные значения и ответ на вопрос о нейтральности ("есть ли отклонения от нейтральности?") в формате "да/нет". Разделяйте значения запятой без пробелов.

Пример записи: 34,0.8,да

**Решение**

```python

def Tajimas_D(T,S,N):
    a1 = sum(1/i for i in range(1,N))
    a2 = sum(1/i/i for i in range(1,N))
    b1 = (N+1)/3/(N-1)
    b2 = 2*(N*N+N+3)/9/N/(N-1)
    c1 = b1 - 1/a1
    c2 = b2 - (N+2)/N/a1 + a2/a1/a1
    e1 = c1/a1
    e2 = c2/(a1*a1+a2)

    return (T - S/a1) / (e1*S + e2*S*(S-1))**0.5

with open("sequences.fasta") as f:
    data = ["".join(x.strip().split()[1:]) for x in f.read().split('>')[1:]]

    N = len(data)
    K = len(data[0])
    S = sum(any(data[i][j] != data[0][j] for i in range(N)) for j in range(K))
    dts = sum(sum(x1 != x2 for x1,x2 in zip(s1,s2)) for s1 in data for s2 in data)/2

    W = S / sum(1/i for i in range(1,N))
    T = dts / (N*(N-1)/2)
    D = Tajimas_D(T,S,N)

    print(S, D)
```
**Ответ**: 694,-1.9,нет



