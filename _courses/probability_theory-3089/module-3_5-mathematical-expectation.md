---
permalink: "/stepik-probability_theory-3089/module-3_5-mathematical-expectation"
layout: post
title: "3.5 Математическое ожидание"
description: Теория Вероятностей
category: stepik-probability_theory-3089
importance: 1
giscus_comments: true
toc:
  sidebar: right
---

[3.5 Математическое ожидание](https://stepik.org/lesson/48678/step/1?unit=26449)

### модуль 3.5 шаг 6

---

Для случайной величины $$\xi$$, имеющей функцию распределения

$$
F_{\xi}(x)=\left\{
\begin{aligned}
& 0, \quad \quad \quad \quad при \quad x< 0, \\
& 2x-x^2, \quad \space \space при \quad 0 \leq x < 1, \\
& 1, \quad  \quad \quad \quad \quad при \space \space x \geq 1. \\
\end{aligned}
\right.

$$

по схеме, описанной в предыдущей теореме, постройте последовательность случайных величин $$\xi_{n}$$ и вычислите их математическое ожидание $$\mathbb{E}\xi_n$$. В ответе укажите $$\mathbb{E}\xi_n$$.

**Решение**

По схеме $$\mathbb{E}\xi_n=\sum\limits_{k=0}^{4^n-1}{\frac{k}{2^n}P(A_k)}$$. Заметим, что все слагаемые при $$k \geqslant{0}$$ обнулятся, так как, исходя из функции распределения, вероятность того, что $$x \leqslant{1}$$ равна 0. Тогда
$$\displayline{
\mathbb{E}\xi_n=\sum\limits_{k=0}^{4^n-1}\frac{k}{2^n}P(A_k)=\frac{1}{2^n}\sum\limits_{k=0}^{2^n-1}{k\left(F_{\xi}\left(\frac{k+1}{2^n}-0\right)\right)}-F_{\xi}\left(\frac{k}{2^n}-0 \right) = \\
= \frac{1}{2^n}\sum\limits_{k=0}^{2^n-1}{k\left(2 \cdot \frac{k+1}{2^n}-\left(\frac{k+1}{2^n} \right)^2 -2\cdot{\frac{k}{2^n}}-\left(\frac{k}{2^n} \right)^2 \right)}= \frac{1}{2^n}\sum\limits{k=0}^{2^n-1}{\left(\frac{2k}{2^n} - \frac{2k^2+k}{2^{2n}}\right)} = \\ = \frac{1}{2^n}\left(\frac{2}{2^n}\cdot{\frac{2^n(2^n-1)}{2}}-\frac{2}{2^{2n}}\cdot{\frac{2^n(2^n-1)(2\cdot{2^n}-1)}{6}} - \frac{1}{2^{2n}}\cdot{\frac{2^n(2^n-1)}{2}} \right) = \\ = \frac{1}{3}-2^{-n+1}=\frac{2^{-2n-1}}{3}.}

$$

В предпоследнем равенстве использованы известные формулы суммирования первых $$m$$ натуральных чисел и квадратов первых $$m$$ натуральных чисел. В последнем равенстве раскрыты скобки и приведены подобные слагаемые.

**Ответ**

1/2**n * (Sum((k/2**n)**2 - 2 * k/2**n , (k, 1, 2**n-1)) + 2**n - 1)
