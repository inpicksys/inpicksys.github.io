---
permalink: "/stepik-course-genetics-and-population/module_2_4-gene-flow"
layout: post
title: "2.4 Поток генов"
description: Генетика и геномика популяций
category: stepik-course-genetics-and-population
importance: 1
giscus_comments: true
toc:
  sidebar: right
---

[2.4 Поток генов](https://stepik.org/lesson/88185/step/1?unit=64525)

### модуль 2.4 шаг 5

---

Выберите верные утверждения о влиянии потока генов на частоты аллелей в популяции:

**Решение**

- [ ] Поток генов не влияет на частоты аллелей в популяции
- [X] Если между популяциями **A** и **B** идет взаимный поток генов с равными скоростями, то частоты аллелей $$p_A$$ и $$p_B$$ в перспективе большого числа поколений будут равны
- [X] При однонаправленном потоке генов из популяции **A** в популяцию **B** частота аллели $$p_A$$ не будет изменяться
- [ ] При однонаправленном потоке генов из популяции **A** в популяцию **B** частота аллели $$p_A$$ будет стремиться к $$p_B$$


### модуль 2.4 шаг 6

---

В островную популяцию **A** с частотами аллелей $$p_{A0} = 0.4$$, $$q_{A0} = 0.6$$ происходит приток аллелей за счет миграции особей из континентальной популяции **B** с частотами $$p_B = 0.8$$, $$q_B = 0.2$$. Интенсивность потока генов $$m = 0.01$$.

Рассчитайте, насколько сильно изменится частота аллели $$p_A$$ через 20 поколений.

Ответом является значение $$\Delta p = p_{A20} - p_{A0}$$, округленное до сотых долей.

**Решение**

Используем формулу из лекции:

$$P_t = \left(1-m\right)^t\cdot\left(p_0-p_m\right)+p_m$$

$$m=0.01$$

$$p_0=p_{A0}=0.4$$

$$p_m=p_B=0.8$$

$$t=20$$

$$P_{A20}=(1-0.01)^20\cdot(0.4-0.8)+0.8=0.473$$

И соответственно: $$\Delta p=p_{A20}-p_{A0}=0.473-0.4=0.07$$

**Ответ**: 0.07


### модуль 2.4 шаг 8

---

В некотором исследовании проанализировали частоты аллелей в трех субпопуляциях животных равного размера. Были получены следующие данные:

* субпопуляция 1 (S1): p = 0.3, q = 0.7
* субпопуляция 2 (S2): p = 0.5, q = 0.5
* субпопуляция 3 (S3): p = 0.7, q = 0.3

Для какой пары значение $$F_{ST}$$ максимально? Приведите в ответе через запятую обозначения популяций и значение $$F_{ST}$$, округленное до сотых.

Например: S1,S2,35.27

**Решение**

Расчитываем попарно

1. S1:S2
   $$\displaylines{p_{t12}=\frac{p_1+p_2}{2}=\frac{0.3+0.5}{2}=0.4 \\ q_{t12}=\frac{q_1+q2}{2}=\frac{0.7+0.5}{2}=0.6 \\ H_{t12}=2p_{t12}q_{t12}=2\cdot0.4\cdot0.6=0.48}$$
   $$H_1=2p_1q_1=2\cdot0.3\cdot0.7=0.42$$
   $$H_2=2p_2q_2=2\cdot0.5\cdot0.5=0.5$$
   $$H_{w12}=\frac{H_1+H_2}{2}=0.46$$

$$F_{st12}=\frac{\left(H_{t12}-H_{w12}\right)}{H_{t12}}=\frac{0.48-0.46}{0.48}\approx0.042$$

2. S1:S3
   $$\displaylines{p_{t13}=\frac{p_1+p_3}{2}=\frac{0.3+0.7}{2}=0.5\\ q_{t13}=\frac{q_1+q3}{2}=\frac{0.7+0.3}{2}=0.5 \\ H_{t13}=2p_{t13}q_{t13}=2\cdot0.5\cdot0.5=0.5}$$

   $$H_1=2p_1q_1=2\cdot0.3\cdot0.7=0.42$$

   $$H_3=2p_3q_3=2\cdot0.7\cdot0.3=0.42$$

   $$H_{w13}=\frac{H_1+H_3}{2}=0.42$$

   $$F_{st13}=\frac{\left(H_{t13}-H_{w13}\right)}{H_{t13}}=\frac{0.5-0.42}{0.5}=0.016$$
3. S2:S3

   Симметрия - S1:S2

   $$F_{st23}=0.042$$

```R
   fst <- function(p1, q1, p2, q2) {
      pt <- ((p1 + p2) / 2)
      qt <- ((q1 + q2) / 2)
      hw <- ((2 * p1 * q1) + (2 * p2 * q2)) / 2
      ht <- 2 * pt * qt
      (ht - hw) / ht
    }
```

**Ответ**:  S1,S3,0.16


### модуль 2.4 шаг 10

---

Рассчитайте ожидаемое равновесное значение $$F_{ST}$$ для популяции размера $$N = 1000$$, если между субпопуляциями происходит поток генов интенсивностью $$m = 0.01$$.

Округлите ответ до тысячных.

**Решение**:

$$F_{ST_t}=F_{ST_{t-1}}=\hat{F_{ST}}=\frac{1}{1+4N_m}=\frac{1}{1+4\cdot10}\approx0.024$$

**Ответ**: 0.024


### модуль 2.4 шаг 11

---

При каком соотношении размера популяции N и скорости потока генов **m** равновесное значение $$F_{ST}$$ будет меньше или равно 0.1?

**Ответ**:

$$N≥2.25×\frac{1}{m}$$


### модуль 2.4 шаг 13

---

Каким словом можно обозначить событие, когда чужеродная аллель вносится в популяцию и закрепляется в ней через несколько поколений?

**Ответ**:  *интрогрессия*
