---
permalink: "/stepik-probability_theory-3089/module-3_3_Random-variables"
layout: post
title: "3.2 Аксиоматическое определение вероятности"
description: Теория Вероятностей
category: stepik-probability_theory-3089
importance: 1
giscus_comments: true
toc:
  sidebar: right
---

[3.3 Случайные величины](https://stepik.org/lesson/48676/step/1?unit=26447)

### модуль 3.3 шаг 4

---

Случайная величина $$\xi$$ принимает значения 1, 2, 3, 4 и 5 с вероятностями 0,1,0,3, 0,2, 0,15 и 0,25 соответственно. Найдите ее функцию распределения $$F_{\xi}(x)$$.

Напомним, что кусочно заданные функции вводятся в систему следующим образом: если

$$

\left\{
\begin{aligned}
& x \space\space при \space\space x<1, \\
& 5 \space\space при \space\space x=1, \\
& x^2 \space\space при \space\space 1<x<2, \\
& 2x \space\space при \space\space x\geq2,
\end{aligned}
\right.

$$

то написать надо

Piecewise( (x, x < 1), (5, x==1), (x^2, (x > 1) & (x < 2)), (2*x, x >=2) )

**Решение**

Вероятность того, что $$xi<1$$, равна нулю. Вероятность того, что $$\xi\leq x$$ при $$1\leq x< 2$$ равна *0,1*, так как единственное подходящее значение $$\xi$$ — это *1*. Вероятность того, что $$\xi\leq x$$ при $$2\leq x<3$$ равна 0,1+0,3=0,4, так как подходящих значений для $$\xi$$ два —1 и 2. Продолжая рассуждения, дойдем до $$\xi\leq x$$, где $$x\geq 5$$. В этот промежуток попали все значения $$\xi$$, значит, вероятность равна *1*.

**Ответ**

Piecewise( (0, x < 1), (0.1, (x >= 1) & (x < 2)), (0.4, (x >= 2) & (x < 3)), (0.6, (x >= 3) & (x < 4)), (0.75, (x >= 4) & (x<5)), (1, (x >= 5)))


### модуль 3.3 шаг 5

---

Случайная величина $$\xi$$ имеет функцию распределения $$F_{\xi}$$, определенную равенством

$$
F_{\xi}(x)=\left\{
\begin{aligned}
& 4^x \space\space при \space\space x\leq1, \\
& 1 \space\space при \space\space x>0. \\
\end{aligned}
\right.
$$

Найдите вероятности $$P(\xi\leq -2)$$ и $$P(-1<\xi<0)$$. В ответе укажите найденные вероятности в виде десятичных дробей, разделенных пробелом.

**Решение**

По определению функции распределения:
$$P(\xi\leq-2)=F_{\xi}(-2)=4^{-2}=\frac{1}{16}$$ и $$P(-1<\xi<0)=\lim\limits_{x \to 0-}F_{\xi}(x)-F_{\xi}(-1)=\lim\limits_{x \to 0-}4^x-4^{-1}=\frac{3}{4}$$.

**Ответ:** 0.0625 0.75


### модуль 3.3 шаг 6

---

Функция распределения случайной величины $$\xi$$ имеет вид $$F_{\xi}=a+b \arctg{x}$$. Найдите параметры $$a$$ и $$b$$. В ответе укажите найденные значения в виде разделенных пробелом десятичных дробей (в случае необходимости округленных до трех знаков после запятой).

**Решение**

По свойствам функции распределения:

$$
1=\lim\limits_{x \to \infty}=\lim\limits_{x \to \infty}(a+b\arctg{x})=a+b\cdot\frac{\pi}{2};

$$

$$
0=\lim\limits_{x \to -\infty}=\lim\limits_{x \to -\infty}(a-b\cdot\frac{\pi}{2}).

$$

Решая систему из двух линейных уравнений с двумя неизвестными, получаем $$a=\frac{1}{2}$$ и $$b=\frac{1}{\pi}$$.

**Ответ**
0.5 0.3183098861

### модуль 3.3 шаг 7

---

Случайная величина $$\xi$$ имеет непрерывную функцию распределения $$F(x)$$. Найдите функцию распределения случайной величины $$\eta=3-2\xi$$. Ответ, конечно, будет зависеть от $$F$$, поэтому ее можно использовать при вводе ответа в систему.

**Решение**

Напишем определение $$F_{\eta}$$:

$$
F_{\eta}=P(\eta\leq x)=P(3-2\xi\leq x)=P(2\xi\geq 3-x)=P(\xi\geq\frac{3-x}{2})=1-P(\xi<\frac{3-x}{2})\overset{*}{=} \\ \overset{*}{=}1-P(\xi\le\frac{3-x}{2})=1-F(\frac{3-x}{2}).

$$

В равенстве, помеченном звездочкой, мы воспользовались непрерывностью функции $$F$$.

**Ответ**
1-F((3-x)/2)


### модуль 3.3 шаг 8

---

В квадрате $$[0,1]^2$$ наугад выбирается точка $$\omega=(\omega_{1},\omega_{2})$$. Случайная величина $$\xi$$ задается равенством $$\xi(\omega)=\omega_{1}+\omega_{2}$$. Найдите функцию распределения $$F_{\xi}(x)$$.

**Решение**

$$
F_{\xi}(x)=
\left\{
\begin{aligned}
& 0 \space  \space при  \space  \space x<0, \\
& \frac{x^2}{2}  \space  \space при 0\leq x \leq 1, \\
& 1-\frac{(2-x)^2}{2} при 1< x \leq 2, \\
& 1 при x>2. \\
\end{aligned}
\right.

$$

Построим квадрат $$[0,1]^2$$ в системе координат $$\omega_{1}O\omega_{2}$$. Так как его площадь равна 1, то вероятность $$P(\xi\leq k)$$ будет равна площади множества точек внутри этого квадрата, координаты которых удовлетворяют неравенству $$\omega_1+\omega_2 \leq k$$. Такое неравенство задает множество $$A$$ точек под прямой $$\omega_2=k-\omega_1$$.

При $$k<0$$ множество $$A$$ не пересекается с квадратом, так что

$$
F_{xi}=P(\xi\leq x) =0 \space \space при \space \space  x<0.

$$


При $$k\in[0;1]$$ множество $$A$$ пересекается с квадратом по равнобедренному прямоугольному треугольнику с катетом равным $$k$$, так что

$$
F_{\xi}=P(\xi \leq x)=\frac{x^2}{2} \space \space  при \space \space x\in[0,1].

$$

При $$k\in(1;2]$$ пересечение множества *A* с квадратом состоит из всех точек квадрата за исключением равнобедренного прямоугольного треугольника с катетом равным $$2−k$$, так что

$$
F_{\xi}=P(\xi\leq x)=1-\frac{(2-x)^2}{2} \space \space x\in(1,2].

$$

При $$k>2$$ пересечение множества $$A$$ с квадратом состоит из всех точек квадрата, так что

$$
F_{\xi}(x)=P(ξ\leq x)=1 \space \space при \space \space  x>2.

$$


**Ответ**

Piecewise( (0, x < 0), (x^2/2, (x >= 0) & (x < 1)), ((1-(2-x)^2/2), (x >= 1) & (x < 2)), (1, (x >= 2) ))



### модуль 3.3 шаг 9

---


На отрезке [0,1] можно выбрать такое семейство подмножеств $$\mathbb{F}$$, образующих *σ*-алгебру, что оно будет содержать все промежутки, а на нем корректно определить значение вероятности так, что вероятность промежутка будет его длиной.

Рассмотрим получившееся вероятностное пространство. На нем зададим случайную величину $$\xi$$, определенную по формуле

$$
\xi(\omega)=\left\{
\begin{aligned}
& 1 \space\space при \space \space \omega \in[0,\frac{1}{2}), \\
& 2\omega^2 \space \space при \space \space \omega [\frac{1}{2},1]. \\
\end{aligned}
\right.

$$

Найдите функцию распределения $$F_{\xi}(x)$$. Не забывайте, что во всех ответах с формулами десятичные дроби должны быть с точкой, а не с запятой.

**Решение**

$$
F_{\xi}(x)=
\left\{
\begin{aligned}
& 0 \space \space при \space \space x<\frac{1}{2}, \\
& \sqrt{\frac{x}{2}}-\frac{1}{2} \space \space при \space \space \frac{1}{2}\leq x < 1, \\
& sqrt{\frac{x}{2}} \space \space при \space \space 1\leq x \leq 2, \\
& 1 \space\space при \space\space x>2. \\
\end{aligned}
\right.

$$

![](https://ucarecdn.com/345e2263-7e04-489d-b715-b0f2aed71e96/)


Для наглядности изобразим график $$\xi(\omega)$$. Заметим, что $$\xi\geq\frac{1}{2}$$, поэтому $$F_{\xi}=P(\xi\leq x)=0 \space  при \space x<\frac{1}{2}.$$

При $$x\in[\frac{1}{2},1)$$ под прямой $$\xi=x$$ находится лишь кусок параболы. Точка пересечения прямой $$\xi=x$$ и параболы имеет координаты $$(\sqrt{\frac{x}{2}}, x)$$, то есть длина подходящего промежутка равна $$\sqrt{\frac{x}{2}}-\frac{1}{2}$$. Следовательно, $$F_\xi(x)=P(\xi\leq x)=\sqrt{\frac{x}{2}}-\frac{1}{2} \space при \space x\in[\frac{1}{2},1]$$. При $$x\in[1,2)$$ под прямой $$\xi=x$$ находятся отрезок и кусок параболы. Точка пересечения прямой $$\xi=x$$ и параболы имеет координаты $$(\sqrt{\frac{x}{2}},x)$$, то есть длина подходящего промежутка равна $$\sqrt{\frac{x}{2}}$$. Следовательно, $$F_{\xi}=P(\xi\leq x)=\sqrt{\frac{x}{2}} \space x\in[1,2)$$. Поскольку всегда выполнено неравенство $$\xi\leq2,F_{\xi}=P(\xi\leq x)=1 \space при \space x\geq2.$$

**Ответ**
Piecewise( (0, x < 1/2), (sqrt(x/2)-1/2, (x >= 1/2) & (x < 1)), (sqrt(x/2), (x >= 1) & (x < 2)), (1, (x >= 2) ))