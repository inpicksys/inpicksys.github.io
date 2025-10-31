Вот аккуратно оформленный **Markdown** c формулой и схемой (встроенный SVG-рисунок показывает метод изображений).

---

# Сила взаимодействия точечного заряда и изолированной проводящей сферы

**Дано:** металлическая сфера радиуса $R$ с зарядом $Q$; точечный заряд $-Q$ на расстоянии $d>R$ от центра.

**Ответ (без константы $k$, как обычно просит система):**

$$
F=-Q^{2}\!\left(\frac{R\,d}{(d^{2}-R^{2})^{2}}+\frac{d-R}{d^{3}}\right)
$$

**Та же формула с $k=\tfrac{1}{4\pi\varepsilon_0}$:**

$$
F=-k\,Q^{2}\!\left(\frac{R\,d}{(d^{2}-R^{2})^{2}}+\frac{d-R}{d^{3}}\right)
$$

Знак «минус» означает **притяжение**.

---

## Схема (метод изображений)

Внутри сферы размещаются заряды-изображения:

* $q_1= Q\,\dfrac{R}{d}$ в точке на оси на расстоянии $a=\dfrac{R^{2}}{d}$ от центра;
* $q_2=Q\!\left(1-\dfrac{R}{d}\right)$ в центре сферы.

Сила на $-Q$ — сумма кулоновских сил от $q_1$ и $q_2$.

<!-- Встроенный SVG-рисунок -->

<p align="center">
<svg width="520" height="240" viewBox="-120 -120 520 240" xmlns="http://www.w3.org/2000/svg">
  <!-- ось -->
  <line x1="-110" y1="0" x2="380" y2="0" stroke="#888" stroke-dasharray="4 4"/>
  <!-- сфера (сечение окружностью) -->
  <circle cx="0" cy="0" r="80" fill="none" stroke="#1e88e5" stroke-width="2"/>
  <text x="0" y="-90" text-anchor="middle" font-size="12" fill="#1e88e5">сфера, R</text>
  <!-- центр O -->
  <circle cx="0" cy="0" r="3" fill="#000"/>
  <text x="-10" y="-8" font-size="12">O</text>
  <!-- точечный заряд -Q (снаружи, на расстоянии d) -->
  <circle cx="220" cy="0" r="5" fill="#e53935"/>
  <text x="220" y="-10" text-anchor="middle" font-size="12" fill="#e53935">−Q</text>
  <text x="110" y="-6" text-anchor="middle" font-size="12" fill="#555">d</text>
  <line x1="0" y1="-14" x2="220" y2="-14" stroke="#555" marker-end="url(#arrow)"/>
  <line x1="220" y1="-14" x2="0" y2="-14" stroke="#555" marker-end="url(#arrow)"/>
  <!-- заряд-изображение q1 внутри (на расстоянии a=R^2/d) -->
  <!-- вычислим позицию: пусть R=80, d визуально ~220 => a=R^2/d≈6400/220≈29.1 -->
  <circle cx="29.1" cy="0" r="4" fill="#43a047"/>
  <text x="29.1" y="-10" text-anchor="middle" font-size="12" fill="#2e7d32">q₁=Q·R/d</text>
  <!-- расстояние a -->
  <line x1="0" y1="14" x2="29.1" y2="14" stroke="#555" marker-end="url(#arrow)"/>
  <line x1="29.1" y1="14" x2="0" y2="14" stroke="#555" marker-end="url(#arrow)"/>
  <text x="14.5" y="28" text-anchor="middle" font-size="12" fill="#555">a=R²/d</text>
  <!-- центральный заряд q2 -->
  <circle cx="0" cy="0" r="4" fill="#fb8c00"/>
  <text x="0" y="16" text-anchor="middle" font-size="12" fill="#ef6c00">q₂=Q(1−R/d)</text>
  <!-- направление силы (притяжение) -->
  <path d="M205,-25 L220,0 L205,25" fill="none" stroke="#e53935" stroke-width="2"/>
  <text x="250" y="16" font-size="12" fill="#e53935">F &lt; 0 (притяжение)</text>
  <!-- стрелки -->
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
</p>

---

### Короткое обоснование

$$
F=k\!\left[\frac{(-Q)\,q_1}{(d-a)^2}+\frac{(-Q)\,q_2}{d^2}\right]
=-k\,Q^{2}\!\left(\frac{R\,d}{(d^{2}-R^{2})^{2}}+\frac{1}{d^{2}}-\frac{R}{d^{3}}\right).
$$

При $d\gg R$ получаем $F\approx -kQ^{2}/d^{2}$ (два точечных заряда), при $d\to R^+$ сила $\to -\infty$, что физично.


Отлично! Продолжим ваш вывод и запишем итоговую формулу аккуратно.

Пусть
$a=\dfrac{R^2}{d},\quad q_1=\dfrac{Q R}{d},\quad q_2=Q\!\left(1-\dfrac{R}{d}\right).$
Тогда сила на $-Q$ есть сумма кулоновских сил от $q_1$ и $q_2$:

$$
F \;=\; k\!\left[\frac{(-Q)\,q_1}{(d-a)^2}+\frac{(-Q)\,q_2}{d^2}\right]
= -\,kQ^2\!\left[\frac{(R/d)}{(d-a)^2}+\frac{1}{d^2}-\frac{R}{d^3}\right].
$$

С учётом $d-a=d-\frac{R^2}{d}=\frac{d^2-R^2}{d}\Rightarrow \frac{1}{(d-a)^2}=\frac{d^2}{(d^2-R^2)^2}$ получаем

$$
\boxed{\;F \;=\; -\,k\,Q^{2}\!\left(\frac{R\,d}{(d^{2}-R^{2})^{2}} \;+\; \frac{1}{d^{2}} \;-\; \frac{R}{d^{3}}\right)\;}
$$

Эквивалентная компактная форма:

$$
F \;=\; -\,k\,Q^{2}\!\left(\frac{R\,d}{(d^{2}-R^{2})^{2}} \;+\; \frac{d-R}{d^{3}}\right).
$$

Если система просит записать **только через $Q,R,d$** (без $k$), то просто уберите $k$:

```
F = -Q^2*(R*d/(d^2 - R^2)^2 + (d - R)/d^3)
```

Знак «минус» соответствует **притяжению** $(+Q)$ сферы и $(-Q)$ точечного заряда.
