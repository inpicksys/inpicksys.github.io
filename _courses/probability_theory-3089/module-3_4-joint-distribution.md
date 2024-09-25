---
permalink: "/stepik-probability_theory-3089/module-3_4-joint-distribution"
layout: post
title: "3.4 Совместное распределение"
description: Теория Вероятностей
category: stepik-probability_theory-3089
importance: 1
giscus_comments: true
toc:
  sidebar: right
---

[3.4 Совместное распределение](https://stepik.org/lesson/48676/step/1?unit=26447)

### модуль 3.4 шаг 4

---

Совместная функция распределения $$F_{\xi,\eta}$$ задана формулой

$$
F_{\xi,\eta}(x,y)=\left\{
\begin{aligned}
& 0 \quad \quad \quad \quad \quad при \quad x\leq 0 \quad или y\leq 0, \\
& \sin{x}\sin{y} \quad \space \space при \quad 0 x < \frac{\pi}{2} \quad и \quad 0<y<\frac{\pi}{2}, \\
& \sin{x} \quad \quad \quad \quad при \space \space 0< x <\frac{\pi}{2} \quad и \quad y\geq\frac{\pi}{2}, \\
& \sin{y} \quad \quad \quad \quad при \space \space x \geq\frac{\pi}{2} \quad и \quad 0<y<\frac{\pi}{2}, \\
& 1 \quad \quad \quad \quad \quad \quad при \space \space x \geq\frac{\pi}{2} \quad и \quad y\geq\frac{\pi}{2}. \\
\end{aligned}
\right.

$$

Найдите вероятность $$P(\frac{\pi}{6}<\xi\leq\frac{\pi}{3}, 0\leq\eta<\frac{\pi}{4})$$. Ответ дайте в виде десятичной дроби, в случае необходимости округленной до трех знаков после запятой.

**Решение**

Так как вероятность того, что хотя бы одна из наших величин неположительна, равна нулю, то

$$\displaylines{
P(\frac{\pi}{6}<\xi\leq\frac{\pi}{3}, 0\leq\eta<\frac{\pi}{4})=P(\xi\leq\frac{\pi}{3},\eta<\frac{\pi}{4})-P(\xi\leq\frac{\pi}{6},\eta<\frac{\pi}{4})= \quad \quad \quad \quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\quad \\ \quad\quad\quad\quad = F_{\xi,\eta}(\frac{\pi}{3},\frac{\pi}{4})-F_{\xi,\eta}(\frac{\pi}{6},\frac{\pi}{4})=\sin{\frac{\pi}{3}}\sin{\frac{\pi}{4}}-\sin{\frac{\pi}{6}}\sin{\frac{\pi}{4}}=\frac{\sqrt{6}-\sqrt{2}}{4}}

$$

**Ответ:** 0.258


### модуль 3.4 шаг 5

---


Случайные величины $$\xi$$ и $$\eta$$ независимы и имеют одну и ту же функцию распределения

$$
F(x)=\left\{
\begin{aligned}
& 0 \quad \quad \quad при \quad x\leq 1, \\
& \frac{x-1}{2} \quad \space \space при \quad 1 < x < 3, \\
& 1  \quad \quad \quad при \space \space x \geq 3. \\
\end{aligned}
\right.

$$

Найдите вероятность $$P(1,3\leq\xi\leq 2,4)$$ и $$P(1,2\leq\xi\leq 2,6; 1,2\leq\eta<2,6)$$. В ответе укажите найденные вероятности в виде десятичных дробей, разделенных пробелом.

**Решение**

Первую вероятность вычислим так

$$
P(1,3\leq\xi<2,4)=F(2,4)-F(1,3)=\frac{2,4-1}{2}-\frac{1,3-1}{2}=0,7-0,15=0,55.

$$

А вторую так:

$$
\displaylines{
P(1,2\leq\xi<2,6;1,2\leq\eta < 2,6)= \\ =P(\xi<2,6;\eta<2,6)-P(\xi<1,2;\eta<2,6)-P(\xi<2,6;\eta<1,2)+P(\xi<1,2;\eta<1,2)= \\ = F(2,6)F(2,6)-F(1,2)F(2,6)-F(2,6)F(1,2)+F(1,2)F(1,2)= \\ = 0,8^2-2\cdot0,8\cdot0,1+0,1^2=0,49.}

$$

**Ответ:** 0.55 0.49


### модуль 3.4 шаг 6

---

Случайная величина $$\xi$$ принимает лишь значения **0** и **1** и делает это с равными вероятностями. Случайная величина $$\eta$$ не зависит от $$\xi$$ и имеет функцию распределения

$$
F_{\eta}(x)=\left\{
\begin{aligned}
& 0 \quad \quad \quad при \quad x\leq 0, \\
& x \quad \space \space при \quad 0 < x < 1, \\
& 1  \quad \quad \quad при \space \space x \geq 1. \\
\end{aligned}
\right.

$$

Найдите функцию распределения случайной величины $$\xi\eta$$. В ответе укажите функцию $$F_{\xi\eta}(x)$$.

**Решение**

По определению функции распределения $$F_{\xi\eta}=P(\xi\eta\leq x)$$. Найдем вероятность нужного события по формуле полной вероятности:

$$\displaylines{
F_{\xi\eta}(x)=P(\xi\eta\leq x)=P(\xi\eta\leq x \space | \space \xi=0)P(\xi=0)+P(\xi\eta\leq x \space | \space \xi=1)P(\xi=1) = \\ = P(0\leq x | \xi=0)P(\xi=0)+P(\eta \leq x | \xi=1)P(\xi=1)=\mathbf{1}_{[0,\infty)}(x)\cdot\frac{1}{2}+P(\eta\leq x)\cdot \frac{1}{2} = \\ = \mathbf{1}_{[0,\infty)}(x)\cdot\frac{1}{2}+F_{\eta}(x)\cdot\frac{1}{2}.}
$$

**Ответ:**

Piecewise( (0, (x <=0) ), (1/2+x/2, (x >0) & (x<=1) ), (1, x>1))



### модуль 3.4 шаг 7

---

Пусть $$\xi$$ и $$\eta$$ — независимые случайные величины с функциями распределения $$F(x)=F_{\xi}(x)$$ и $$G(x)=F_{\eta}(x)$$. Найдите функцию распределения следующих случайных величин:


- $$\zeta_1=\max{\{\xi, \eta\}}$$
- $$\zeta_2=\min{\{\xi, \eta\}}$$
- $$\zeta_3=\max{\{\xi, 2\eta\}}$$

В качестве ответа введите в систему выражение $$F_{\zeta_1}(x)*a+F_{\zeta_2}(x)*b+F_{\zeta_3}(x)*c$$.

**Решение**

По определению

$$\displaylines{
F_{\zeta_1}(x)=P(\zeta_1\leq x)=P(\max{\{\xi,\eta\}}\leq x)=P(\xi \leq x)P(\eta \leq x)=F(x)G(x).
}
$$

В предпоследнем равенстве мы воспользовались независимостью случайных величин $$\xi$$ и $$\eta$$.

Снова воспользуемся определением и независимостью случайных величин $$\xi$$ и $$\eta$$:

$$
\displaylines{
F_{\zeta_2}(x)=P(\zeta_2 \leq x)=P(\min{\{\xi, \eta\}}\leq x)=1-P(\min{\{\xi,\eta\}}>x)=1-P(\xi>x,\eta>x)= \\ =1-P(\xi>x)P(\eta>x)=1-(1-P(\xi \leq x))(1-P(\xi\leq x))(1-P(\eta \leq x )) = \\ = 1-(1-F_{\xi}(x))(1-F_{\eta}(x))=F(x)+G(x)-F(x)G(x).
}
$$

Аналогично

$$
\displaylines{
F_{\zeta_3}(x)=P(\zeta_3 \leq{x})=P(\max{\{\xi, 2\eta \}} \leq{x})=P(\xi \leq{x}, 2\eta\leq{x})= \\ = P(\xi\leq{x},\eta\leq{\frac{x}{2}})=P(\xi\leq{x})P(\eta\leq{\frac{x}{2}})=F_{\xi}(x)F_{\eta}(\frac{x}{2})=F(x)G(\frac{x}{2}).
}
$$

**Ответ:**

F(x)*G(x)*a + (F(x) + G(x) - F(x)*G(x)) * b + F(x)*G(x/2)*c


### модуль 3.4 шаг 8

---

Пусть $$\xi$$, $$\eta$$ и $$\zeta$$ — независимые случайные величины, $$\xi$$ и $$\eta$$ имеют функции распределения $$F(x)=F_{\xi}(x)$$ и $$G(x)=F_{\eta}(x)$$, а $$\zeta$$ принимает значения **1** и **0** с вероятностями $$p$$ и $$1-p$$ соответственно. Найдите функцию распределения следующей случайной величины $$\zeta\xi+(1-\zeta)\eta$$. В ответе укажите функцию $$F_{\zeta\xi+(1-\zeta)\eta}(x)$$.

**Решение**

По определению  $$F_{\zeta\xi+(1-\zeta)\eta}(x)=P(\zeta\xi+(1-\zeta)\eta \leq{x})$$. Для нахождения последней вероятности воспользуемся формулой полной вероятности:

$$\displaylines{P(\zeta\xi+(1-\zeta)\eta \leq{x})= \\ = P(\zeta\xi + (1-\zeta)\eta\leq{x}|\zeta=0)P(\zeta=0)+P(\zeta\xi+(1-\zeta)\eta\leq{x}|\zeta=1)P(\zeta=1)= \\ = P(\eta\leq{x}|\zeta=0)P(\zeta=0)+P(\xi\leq{x}|\zeta=1)P(\zeta=1) = \\ =P(\eta\leq{x})P(\zeta=0)+P(\xi\leq{x})P(\zeta=1)=F_{\eta}(x)(1-p)+F_{\xi}(x)p=pF(x)+(1-p)G(x)}$$

**Ответ:**

F(x)*p + G(x)*(1-p)
