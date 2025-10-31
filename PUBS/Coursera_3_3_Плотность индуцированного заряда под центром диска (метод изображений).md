# Плотность индуцированного заряда под центром диска (метод изображений)

**Условие.** Над идеально проводящей плоскостью на высоте $H$ расположен равномерно заряженный диск радиуса $R$ с полным зарядом $Q$ (ось диска перпендикулярна плоскости). Найти поверхностную плотность индуцированного заряда $\sigma$ на плоскости **в точке под центром диска**. Система СГС.

---

## Ответ

$$
\boxed{\displaystyle \sigma \;=\; -\,\frac{Q}{\pi R^{2}}\left(1-\frac{H}{\sqrt{H^{2}+R^{2}}}\right)}
$$

Эквивалентная форма (удобна для «нормировки по $H$»):

$$
\displaystyle \sigma \;=\; -\,\frac{Q}{\pi R^{2}}\!\left(1-\frac{1}{\sqrt{1+(R/H)^{2}}}\right)
$$

> Примечание для автопроверки: при необходимости можно написать $ \frac{|H|}{\sqrt{H^{2}+R^{2}}}$ вместо $ \frac{H}{\sqrt{H^{2}+R^{2}}}$.

---

## Идея решения (кратко)

* Метод изображений: заменить «диск + плоскость» на **два параллельных диска** с зарядами $+Q$ и $-Q$, расположенные симметрично относительно плоскости на расстояниях $+H$ и $-H$.
* Напряжённость поля на оси равномерно заряженного диска на расстоянии $H$ от него:

  $$
  E_{\text{disk}}(H)=\frac{2Q}{R^{2}}\!\left(1-\frac{H}{\sqrt{H^{2}+R^{2}}}\right) \quad \text{(СГС)}.
  $$
* В точке на плоскости под центром диска поля от двух дисков **складываются**: $E_{0}=2E_{\text{disk}}(H)$.
* Граничное условие на проводнике (СГС): $E_{n}=4\pi \sigma$. Направление поля к пластине при $Q>0$ даёт минус.

---

## Схема (встроенный SVG)

<p align="center">
<svg width="560" height="320" viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
  <!-- Плоскость проводника -->
  <rect x="30" y="160" width="500" height="4" fill="#777"/>
  <text x="40" y="152" font-size="13" fill="#555">проводящая плоскость (y=0)</text>

  <!-- Реальный диск +Q на высоте H -->

  <ellipse cx="280" cy="80" rx="110" ry="22" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
  <text x="280" y="50" text-anchor="middle" font-size="14" fill="#1976d2">реальный диск, +Q, R</text>

  <!-- Диск-изображение -Q под плоскостью -->

  <ellipse cx="280" cy="240" rx="110" ry="22" fill="#ffebee" stroke="#c62828" stroke-width="2"/>
  <text x="280" y="272" text-anchor="middle" font-size="14" fill="#c62828">диск-изображение, −Q</text>

  <!-- Ось симметрии -->

  <line x1="280" y1="10" x2="280" y2="310" stroke="#999" stroke-dasharray="5,5"/>
  <text x="288" y="18" font-size="12" fill="#666">ось</text>

  <!-- Высота H от плоскости до диска -->

  <line x1="505" y1="160" x2="505" y2="80" stroke="#555"/>
  <polygon points="500,160 510,160 505,168" fill="#555"/>
  <polygon points="500,80 510,80 505,72" fill="#555"/>
  <text x="515" y="123" font-size="13" fill="#555">H</text>

  <!-- Радиус R на верхнем диске -->

  <line x1="280" y1="80" x2="390" y2="80" stroke="#1976d2"/>
  <polygon points="386,75 386,85 394,80" fill="#1976d2"/>
  <text x="335" y="70" font-size="12" fill="#1976d2">R</text>

  <!-- Точка наблюдения на плоскости -->

  <circle cx="280" cy="160" r="4" fill="#000"/>
  <text x="285" y="150" font-size="12" fill="#000">точка под центром</text>

  <!-- Направление E к плоскости -->

  <line x1="280" y1="120" x2="280" y2="156" stroke="#2e7d32" stroke-width="2" marker-end="url(#arrowG)"/>
  <text x="290" y="140" font-size="12" fill="#2e7d32">E₀</text>

  <defs>
    <marker id="arrowG" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
      <polygon points="0,0 8,4 0,8" fill="#2e7d32"/>
    </marker>
  </defs>
</svg>
</p>

---

## Проверки

* При $H\to \infty$: $\sigma \sim -\dfrac{Q}{\pi R^{2}}\left(1-\frac{H}{H}\right)\to 0$ — далеко от пластины индуцируется пренебрежимо малый заряд.
* При $R\to \infty$ при фиксированном $H$: локально поле стремится к полю бесконечной плоскости, $\sigma \to -\dfrac{Q}{\pi R^{2}}$ (равномерное распределение).
* Знак «минус» при $Q>0$: под положительным диском индуцируется отрицательный заряд.


Для нахождения поверхностной плотности индуцированного заряда в точке металлической поверхности, расположенной под центром диска найдем напряженность поля вблизи этой точки и воспользуемся граничным условием на поверхности металла:

En=4πσ.En​=4πσ.E, start subscript, n, end subscript, equals, 4, pi, sigma, point

Чтобы найти напряженность поля, применим метод изображений. Диск и плоскость заменим на систему, состоящую из двух противоположно заряженных дисков, расположенных параллельно друг другу на расстоянии 2H2H2, H. Посчитаем напряженность поля, создаваемую каждым из дисков на его оси на расстоянии HHH от него. Для этого необходимо разбить диск на тонкие кольца и просуммировать проекции напряженности поля на ось диска от всех таких колец:

E(H)=∫0RdQr2+H2cos⁡θ=∫0RQπR22πrdr1r2+H2Hr2+H2=2QHR2∫0Rrdr(r2+H2)3/2=2QR2(1−HR2+H2).E(H)=0∫R​r2+H2dQ​cosθ=0∫R​πR2Q​2πrdrr2+H21​r2+H2
​H​=R22QH​0∫R​(r2+H2)3/2rdr​=R22Q​(1−R2+H2

​H​).​ \begin{array}{l} { E(H) = \int\limits_{0}^{R}\frac{dQ}{r^{2}+H^{2}}\cos\theta=\int\limits_{0}^{R}\frac{Q}{\pi R^2}2\pi rdr\frac{1}{r^{2}+H^{2}}\frac{H}{\sqrt{r^{2}+H^{2}}} } \\ { =\frac{2QH}{R^2}\int\limits_{0}^{R}\frac{rdr}{\left(r^{2}+H^{2}\right)^{3/2}} = \frac{2Q}{R^2}\left(1-\frac{H}{\sqrt{R^{2}+H^{2}}}\right).} \end{array}

Так как диски диски имеют разные заряды, суммарная напряженность в рассматриваемой точке, находящейся посередине между двумя дисками, будет в 2 раза больше:

E0(H)=4QR2(1−HR2+H2).E0​(H)=R24Q​(1−R2+H2

​H​).E, start subscript, 0, end subscript, left parenthesis, H, right parenthesis, equals, start fraction, 4, Q, divided by, R, squared, end fraction, left parenthesis, 1, minus, start fraction, H, divided by, square root of, R, squared, plus, H, squared, end square root, end fraction, right parenthesis, point

Напряженность направлена к металлической пластине, если заряд диска положительный и от пластины в противном случае:

4πσ=−4QR2(1−HR2+H2)⇒σ=−QπR2(1−HR2+H2).4πσ=−R24Q​(1−R2+H2
​H​)⇒σ=−πR2Q​(1−R2+H2

​H​).4, pi, sigma, equals, minus, start fraction, 4, Q, divided by, R, squared, end fraction, left parenthesis, 1, minus, start fraction, H, divided by, square root of, R, squared, plus, H, squared, end square root, end fraction, right parenthesis, right arrow, sigma, equals, minus, start fraction, Q, divided by, pi, R, squared, end fraction, left parenthesis, 1, minus, start fraction, H, divided by, square root of, R, squared, plus, H, squared, end square root, end fraction, right parenthesis, point

Ответ: σ=−QπR2(1−HR2+H2)σ=−πR2Q​(1−R2+H2
​H​)