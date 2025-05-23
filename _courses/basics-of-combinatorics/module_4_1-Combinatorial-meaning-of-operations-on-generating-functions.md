---
permalink: "/stepik-basics-of-combinatorics/module_4_1-Combinatorial-meaning-of-operations-on-generating-functions"
layout: page
title: "4.1 Комбинаторный смысл операций над производящими функциями"
description: Основы перечислительной комбиаторики
category: stepik-basics-of-combinatorics
importance: 1
giscus_comments: true
toc:
  sidebar: right
---

[4.1 Комбинаторный смысл операций над производящими функциями](https://stepik.org/lesson/11000/step/1?unit=2349)

### модуль 4.1 шаг 3

---
<p style="text-align: justify">
Пусть $$ F_1(z)=2e^z $$ и $$ F_2(z)=2e^z $$ есть пара экспоненциальных производящих функций, описывающих множества $$ A $$ и $$ B $$. Предположим, что пересечение $$ A \cap B $$ этих множеств описывается экспоненциальной производящей функцией $$ e^z $$. Чему равна производящая функция, описывающая объединение этих двух множеств?
</p>
**Решение и ответ**

$$3e^z$$

<pre> 3e^z</pre>




### модуль 4.1 шаг 9

---

Используя комбинаторный смысл произведения трех экспоненциальных производящих функций определить количество способов размещения n**n** различимых гостей по трем различимым столам при условии, что за первым столом должен сидеть хотя бы один гость, за вторым столом должно сидеть только нечетное, а за третьим - четное число гостей.

**Решение**

[Николай Доронин](https://stepik.org/users/46024420)
<p style="text-align: justify">
Для каждого стола определяются экспоненциальные производящие функции: для первого стола с учетом условия, что должен сидеть хотя бы один человек $$F_1(z)=\frac{z^1}{1!}+\frac{z^2}{2!}+\frac{z^3}{3!}+...+\frac{z^n}{n!}+...=e^z-1$$, для второго стола с учетом условия, что за столом должно сидеть нечетное количество человек $$ F_2(z)=\frac{z^1}{1!}+\frac{z^3}{3!}+\frac{z^5}{5!}+...+\frac{z^{2n-1}}{(2n-1)!}+...=\sum_{n=0}^{\infty}\frac{z^{2n-1}}{(2n-1)!}=sh(z)=\frac{1}{2}\cdot (e^z-e^-z)$$, для третьего стола с учетом условия, что за столом должно сидеть четное количество человек $$ F_3(z)=1+\frac{z^2}{2!}+\frac{z^4}{4!}+...+\frac{z^{2n}}{(2n)!}+...=\sum_{n=0}^{\infty}\frac{z^{2n}}{(2n)!}=ch(z)=\frac{1}{2}(e^z+e^{-z}) $$

Перемножая получаем $$ {\displaylines} { H(z)=\frac{1}{4}\cdot \left ( e^{3z}-e^{2z}-e^{-z}+e^{-2z} \right) = \\ = \frac{1}{4} \left ( \sum_{n=0}^\infty3^n\frac{z^n}{n!}- \sum_{n=0}^\infty 2^n\frac{z^n}{n!} - \sum_{n=0}^\infty (-1)^n\frac{z^n}{n!} + \sum_{n=0}^\infty (-2)^n\frac{z^n}{n!} \right).} $$ Отсюда  коэффициент равен $$ \frac{1}{4} \cdot(3^n - 2^n-(-1)^n+(-2)^n)$$
</p>
**Ответ**

(3^n-2^n+(-2)^n-(-1)^n)/4


### модуль 4.1 шаг 12

---

Сколькими способами можно составить вес в 78 грамм, пользуясь восемью различимыми между собой (например, покрашенными в разные цвета) гирьками в 1, 1, 2, 5, 10, 10, 20 и 50 грамм?

Указание: решить задачу с помощью комбинаторного смысла произведения нескольких обыкновенных производящих функций, сведя ее к задаче о раскладке неразличимых предметов по различимым ящикам.

**Решение**

[Николай Доронин](https://stepik.org/users/46024420)

<p style="text-align: justify">
Для каждой гирьки(ящика) определяются такие обыкновенные производящие функции: для первой гирьки $$ f_1(z)=1+z$$, для второй гирьки $$ f_2(z)=1+z$$, для третьей гирьки $$ f_3(z)=1+z^2$$, для четвертой гирьки $$ f_4(z)=1+z^5$$, для пятой гирьки $$f_5(z)=1+z^{10}$$, для шестой гирьки $$f_6(z)=1+z^{10}$$, для седьмой гирьки $$f_7(z)=1+z^{20}$$, для восьмой гирьки $$f_8(z)=1+z^{50}$$.
</p>
<p style="text-align: justify">
Перемножая имеем произведение $$ h(z)=(1+z)(1+z)(1+z^2)(1+z^5)(1+z^{10})(1+z^{10})(1+z^{20})(1+z^{50})$$, откуда получаем, что коэффициент при $$z^{78}$$ равен 4.
</p>
**Ответ**
4

### модуль 4.1 шаг 13

---
<p style="text-align: justify">
Поступающий в университет должен сдать четыре различных экзамена. Сколько есть вариантов успешно сдать экзамены и поступить, если проходной балл равен семнадцати?
</p>
<p style="text-align: justify">
Указание: решить задачу с помощью комбинаторного смысла произведения обыкновенных производящих функций, переформулировав ее на языке раскладки $$n$$ неразличимых предметов по четырем различимым ящикам.
</p>
**Решение**

[Николай Доронин](https://stepik.org/users/46024420)

<p style="text-align: justify">
Для каждого предмета(ящика) определяются такие обыкновенные производящие функции(сдача предмета на 1 или на 2 невозможна, т.к это значит "не поступление"): для первого предмета $$f_1(z)=z^3+z^4+z^5$$, для второго предмета $$f_2(z)=z^3+z^4+z^5$$, для третьего предмета $$ f_3(z)=z^3+z^4+z^5$$, для четвертого предмета $$ f_4(z)=z^3+z^4+z^5$$.
</p>
<p style="text-align: justify">
Перемножая имеем $$ h(z)=(z^3+z^4+z^5)^4$$, откуда получаем, что сумма коэффициентов при $$ z^{17}$$, $$ z^{18}$$, $$z^{19}$$, $$z^{20}$$ равна 31.
</p>
**Ответ**

31

### модуль 4.1 шаг 15

---
<p style="text-align: justify">
Сосчитать количество чисел, состоящих из $$n$$ цифр, таких, что все цифры нечетные, а цифры 1 и 3 присутствуют в числе не менее одного раза.
</p>
<p style="text-align: justify">
Указание: воспользоваться комбинаторным смыслом произведения нескольких экспоненциальных производящих функций, сведя задачу к задаче о раскладке различимых предметов по различимым же ящикам.
</p>
**Решение**

[Николай Доронин](https://stepik.org/users/46024420)


Для каждой цифры(ящика) определяются экспоненциальные производящие функции: для цифры "один" с учетом условия, что единица должна присутствовать хотя бы один раз $$ F_1(z)=\frac{z^1}{1!}+\frac{z^2}{2!}+\frac{z^3}{3!}+...+\frac{z^n}{n!}+...=e^z-1$$, для цифры "три" с учетом условия, что "тройка" должна присутствовать хотя бы один раз $$F_3(z)=\frac{z^1}{1!}+\frac{z^2}{2!}+\frac{z^3}{3!}+...+\frac{z^n}{n!}+...=e^z-1$$, для цифры "пять"  $$ F_5(z)=1+\frac{z^1}{1!}+\frac{z^2}{2!}+\frac{z^3}{3!}+...+\frac{z^n}{n!}+...=e^z$$, для цифры "семь" $$ F_7(z)=1+\frac{z^1}{1!}+\frac{z^2}{2!}+\frac{z^3}{3!}+...+\frac{z^n}{n!}+...=e^z$$, для цифры "девять" $$ F_9(z)=1+\frac{z^1}{1!}+\frac{z^2}{2!}+\frac{z^3}{3!}+...+\frac{z^n}{n!}+...=e^z$$

Перемножая получаем $$ {\displaylines} { H(z)=(e^z-1)^2\cdot{e^{3z}}=e^{5z}-2e^{4z}+e^{3z}= \\ =\sum_{n=0}^{\infty}5^n\frac{z^n}{n!}-2\sum_{n=0}^{\infty}4^n\frac{z^n}{n!}+\sum_{n=0}^{\infty}3^n\frac{z^n}{n!}=\sum_{n=0}^{\infty}\frac{z^n}{n!}(5^n-2\cdot4^n+3^n) } .$$

**Ответ**

5^n-2*4^n+3^n
