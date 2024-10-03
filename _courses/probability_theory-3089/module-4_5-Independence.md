---
permalink: "/stepik-probability_theory-3089/module-4_5-Independence"
layout: post
title: "4.5 Независимость"
description: Теория Вероятностей
category: stepik-probability_theory-3089
importance: 1
giscus_comments: true
toc:
  sidebar: right
---

[4.5 Независимость](https://stepik.org/lesson/48685/step/1?unit=26457)

### модуль 4.5 шаг 3

---

Случайная величина имеет распределение Лапласа с показателем $$\lambda>0$$, если плотность ее распределения равна $$\frac{\lambda}{2}e^{-\lambda\lvert{t}\rvert}$$. Две независимые случайные величины $$\xi$$ и $$\eta$$ имеют распределение Лапласа: $$\xi$$ с показателем $$ a $$, $$\eta$$ с показателем $$b$$. Найдите плотность распределения случайного вектора $$(\xi, \eta)$$. В качестве ответа введите в систему плотность $$p_{(\xi,\eta)}$$. Обратите внимание на то, как нужно вводить в систему экспоненты и модули: **exp(t)** и **Abs(t)**.


**Решение**

Найдем функцию распределения случайного вектора $$(\xi,\eta)$$. Так как случайные величины $$\xi$$ и $$\eta$$ независимы,

$$
F_{(\xi,\eta)}(x,y)=\int\limits_{-\infty}^{x}\int\limits_{-\infty}^{y}\frac{a}{2}e^{-a|t|}\cdot\frac{b}{2}e^{-b|s|}dtds=\frac{ab}{4}\int\limits_{-\infty}^{x}\int\limits_{-\infty}^{y}e^{-a|t|}e^{-b|t|}dtds.

$$

Тогда

$$
p_{(\xi,\eta)}=\frac{\partial^2{F_{(\xi,\eta)}(x,y)}}{\partial{x}\partial{y}}=\frac{ab}{4}e^{-a|x|}e^{-b|y|}

$$

**Ответ**

(a/2)*exp(-a*Abs(x))*(b/2)*exp(-b*Abs(y))


### модуль 4.5 шаг 6

---

Стороны прямоугольника — наудачу взятые отрезки, длины которых не превосходят 2 и являются независимыми случайными величинами, равномерно распределенными на отрезке [0,2]. Найдите плотность распределения площади прямоугольника. В качестве ответа введите в систему найденную функцию плотности $$p(t)$$.

**Решение**

Так как случайные величины равномерно распределены на [0,2],

$$
p_{\eta}(t)=p_{\xi}(t)=\left\{
\begin{aligned}
& 0, \quad при \quad t< 0 \quad \quad или \quad \quad t>2, \\
& \frac{1}{2}, \quad при \quad 0 \leqslant t \leqslant 2. \\
\end{aligned}
\right.

$$

$$
P_{\xi\eta}(t)=\int\limits_{0}^{\infty}\frac{1}{s}p_{\xi}(s)p_{\eta}\left(\frac{t}{s}\right)ds=\int\limits_{0}^{\infty}\frac{1}{s}\cdot\frac{1}{2}\boldsymbol{1}_{[0,2]}\cdot\frac{1}{2}\boldsymbol{1}_{[0,2]}\left(\frac{t}{s}\right)ds=\frac{1}{4}\int\limits_{0}^{2}\frac{1}{s}\cdot\boldsymbol{1}_{[0,2]}\left(\frac{t}{s}\right)ds.

$$

Под интегралом находится ненулевая функция только при $$\frac{t}{s}\in[0,2]$$, то есть при $$s\in[\frac{t}{2},2]$$ и $$t\in[0,4]$$. Таким образом, при $$t\in[0,4]$$

$$
p_{\xi\eta}(t)=\frac{1}{4}\int\limits_{\frac{t}{2}}^{2}\frac{ds}{s}=\frac{1}{4}\left(\ln2-\ln\left(\frac{t}{2}\right)\right)

$$

На других промежутках $$p_{\xi\eta}$$ равна нулю.

**Ответ**

Piecewise( (0, (t <=0) | ( t>4)), (1/4*log(4/t), (t < 4) & (t > 0)))
