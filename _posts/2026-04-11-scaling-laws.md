---
layout: post
title: "Законы масштабирования Уэста: почему города растут, а Бразилиа — нет""
date: 2026-04-11 01:00:00
description: "Законы масштабирования"
tags: [dependency-injection, ioc, aop, middleware, ai, cloud, ui-first]
categories: [architecture, dotnet, patterns, "закрывая гештальты"]
thumbnail: /assets/img/di-aop-banner.png
related_posts: false
giscus_comments: true
classes: justified
toc:
  sidebar: right

---

---

## Почему города не умирают

Компании умирают. Организмы умирают. А города — почти никогда. Рим пережил падение империи, Багдад — монгольское нашествие, Дрезден — ковровые бомбардировки. Физик Джеффри Уэст из Института Санта-Фе задался вопросом: почему? И обнаружил нечто неожиданное — **города подчиняются математическим законам**, столь же точным, как законы биологии.

Его книга **«Масштаб» (Scale, 2017)** описывает универсальные степенные законы, управляющие живыми системами: от метаболизма мыши до ВВП мегаполиса. Центральное открытие: удвоение населения города не удваивает ни инфраструктуру, ни экономику. Оба показателя растут — но по разным законам.

---

## Степенной закон: формула

Уэст и его коллеги проанализировали данные сотен городов по всему миру и обнаружили, что практически любой показатель города $$Y$$ масштабируется как степенная функция населения $$N$$:

$$Y = Y_0 \cdot N^{\beta}$$

где $$Y_0$$ — нормировочный коэффициент, а $$\beta$$ — показатель масштабирования. И здесь начинается самое интересное.

### Два класса показателей

**Инфраструктура — субпропорциональный рост (β ≈ 0.85):**

$$Y_{\text{infra}} = Y_0 \cdot N^{0{,}85}$$

Дороги, электросети, водопровод, количество заправок — всё это растёт *медленнее* населения. При удвоении числа жителей инфраструктура вырастает лишь в $$2^{0{,}85} \approx 1{,}80$$ раза. Это **экономия на масштабе**: большой город эффективнее маленького — меньше дорог на одного жителя, меньше труб, меньше расходов на управление.

**Социальные показатели — суперпропорциональный рост (β ≈ 1.15):**

$$Y_{\text{social}} = Y_0 \cdot N^{1{,}15}$$

Зарплаты, патенты, рестораны, количество преступлений, темп ходьбы пешеходов — всё это растёт *быстрее* населения. При удвоении жителей ВВП вырастает в $$2^{1{,}15} \approx 2{,}22$$ раза.

> Иными словами: переехав из города с населением 1 млн в город с населением 2 млн, вы в среднем будете зарабатывать на 15–20% больше, ходить быстрее и производить больше инноваций — даже если не сменили работу.

---

## Логарифмическое доказательство

Почему учёные уверены в этих законах? На обычном графике степенной закон выглядит как кривая. Но если взять логарифм обеих частей уравнения:

$$\log Y = \log Y_0 + \beta \cdot \log N$$

Это уравнение прямой. Наклон прямой и есть коэффициент $$\beta$$. Когда Уэст нанёс данные сотен городов — Токио, Найроби, Мехико, Бангалор, маленькие немецкие городки — на логарифмический график, они легли на прямые с поразительной точностью. Не просто похожи на прямые — статистически это одни из самых чистых закономерностей в социальных науках.

---

## Интерактивная модель

Попробуйте сами: передвигайте слайдер населения и смотрите, как меняются инфраструктура, ВВП и скорость ходьбы.

{% include west_scaling_chart.html %}

---

## Бразилиа: город, который был спроектирован

<figure>
  <img src="/assets/img/brasilia-plan.jpg" alt="Генеральный план Бразилиа в форме самолёта">
  <figcaption>Генеральный план Бразилиа, 1956. Люсиу Коста и Оскар Нимейер. Форма «летящего самолёта» — красота архитектора, не жителя.</figcaption>
</figure>

В 1956 году правительство Бразилии решило построить новую столицу с нуля — на пустом плато в центре страны. Проект поручили Люсиу Коста (планировка) и Оскару Нимейеру (архитектура). Результат стал памятником ЮНЕСКО.

И одним из самых известных провалов городского планирования.

**Что было сделано правильно:** геометрически безупречный план, монументальная ось с правительственными зданиями, жилая ось с секторами. Каждый элемент — в гармонии с замыслом.

**Что было сделано неправильно:** город был спроектирован для фиксированного населения — около 500 000 человек. Для автомобиля, не для пешехода. Для официальных функций, не для стихийной городской жизни. Улицы — широкие магистрали, а не переулки, где люди встречаются случайно.

Критики говорят, что Бразилиа не может считаться настоящим городом, потому что в ней нет «антропоморфных ингредиентов»: грязных улиц, людей, идущих пешком в соседний офис, стихийных рынков, неформальных кафе в подворотнях.

В терминах Уэста: **социальная инфраструктура была зафиксирована**, тогда как в органическом городе она масштабировалась бы суперпропорционально вместе с ростом населения.

```
Органический город:  Y_social = Y₀ · N^1.15  →  растёт быстрее N
Бразилиа (1956):     Y_social = const          →  не масштабируется
```

К 1970 году население превысило плановые цифры. Но социальные связи, неформальные пространства и живая городская среда — не выросли вместе с ним. Люди бежали из центра в стихийные пригороды — *сателлитные города* вокруг Бразилиа, — которые как раз выросли органически и в которых жить оказалось удобнее.

---

## Самоорганизация vs проектирование

Уэст противопоставляет два типа систем:

| | Органический город | Спроектированный город |
|---|---|---|
| **Источник порядка** | Миллионы мелких взаимодействий | Генеральный план |
| **Масштабирование** | Следует степенному закону | Зафиксировано при проектировании |
| **Адаптация** | Непрерывная, снизу вверх | Требует пересмотра плана |
| **Социальные связи** | Суперпропорциональный рост | Ограничены планировкой |
| **Примеры** | Рим, Токио, Стамбул | Бразилиа, Чандигарх, Астана |

Живой город — это фрактальная сеть взаимодействий. Именно поэтому он не умирает: сеть адаптируется. Спроектированный город — это иерархическое дерево. Когда ствол не выдерживает нагрузки — всё ломается.

---

## Аналогия с разработкой программ

Вернёмся к коду. Традиционная разработка «от базы данных»:

```
БД → Репозитории → Сервисы → API → UI
```

Это Бразилиа. Система спроектирована исходя из идеальной схемы хранения данных. Когда пользовательские потребности начинают расти и меняться — архитектура не масштабируется. Приходится переписывать.

UI-first разработка:

```
User Story → UI Mockup → API contract → Сервисы → БД
```

Это органический город. Форма системы определяется паттернами поведения пользователей — так же, как улицы органического города прокладываются там, где люди ходят.

Зависимости через интерфейсы (DI) — это механизм, который делает такую архитектуру возможной: каждый слой общается с остальными через абстракции, а не через конкретные реализации. Система может расти и меняться, не ломая то, что уже работает.

> Хорошая архитектура, как живой город, масштабируется суперпропорционально: чем больше пользователей, тем больше ценности — а не тем больше проблем.

---

## Числа

Несколько конкретных закономерностей, которые Уэст подтвердил эмпирически:

| Показатель | β | При удвоении населения |
|---|---|---|
| Протяжённость дорог | 0.83 | ×1.78 |
| Количество заправок | 0.77 | ×1.71 |
| Длина электросетей | 0.87 | ×1.83 |
| Зарплаты | 1.12 | ×2.17 |
| Количество патентов | 1.27 | ×2.41 |
| Количество преступлений | 1.16 | ×2.23 |
| Скорость ходьбы пешехода | 1.09 | ×2.13 |
| Количество ресторанов | 1.15 | ×2.22 |

Примечательно, что коэффициент $$\beta \approx 1.15$$ повторяется для совершенно разных социальных показателей — и для хорошего (зарплаты, патенты), и для плохого (преступность). Это универсальный коэффициент социального ускорения.

<div class="west-scaling-widget" style="margin: 2rem 0;">

<style>
.wsw { font-family: inherit; }
.wsw .slider-row { display: flex; align-items: center; gap: 12px; margin: 1rem 0; }
.wsw .slider-label { font-size: 13px; color: #73726c; min-width: 130px; }
.wsw .slider-val { font-size: 15px; font-weight: 500; min-width: 70px; text-align: right; }
.wsw .metric-row { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 10px; margin: 1rem 0; }
.wsw .metric { background: #f5f4f0; border-radius: 8px; padding: .75rem 1rem; }
.wsw .metric-label { font-size: 11px; color: #73726c; margin: 0 0 4px; }
.wsw .metric-value { font-size: 22px; font-weight: 500; }
.wsw .metric-delta { font-size: 11px; margin-top: 2px; color: #73726c; }
.wsw .formula-block { background: #f5f4f0; border-left: 3px solid #1D9E75; border-radius: 6px; padding: 1rem 1.25rem; margin: 1.5rem 0; font-family: 'Courier New', monospace; font-size: 13px; line-height: 2; }
.wsw .chart-section { margin: 1.5rem 0; }
.wsw .chart-title { font-size: 13px; color: #444; margin: 0 0 6px; font-weight: 500; }
.wsw .chart-wrap { position: relative; width: 100%; }
.wsw .legend { display: flex; flex-wrap: wrap; gap: 14px; font-size: 11px; color: #73726c; margin: 6px 0 0; }
.wsw .leg-item { display: flex; align-items: center; gap: 5px; }
.wsw .leg-sq { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }
.wsw .note { font-size: 12px; color: #73726c; border-left: 2px solid #d3d1c7; padding-left: 10px; margin: .75rem 0; line-height: 1.65; }
.wsw .section-divider { border: none; border-top: 0.5px solid #d3d1c7; margin: 1.5rem 0; }
@media (max-width: 600px) {
  .wsw .metric-row { grid-template-columns: 1fr 1fr; }
  .wsw .metric-row .metric:last-child { grid-column: 1 / -1; }
}
@media (prefers-color-scheme: dark) {
  .wsw .metric, .wsw .formula-block { background: #2c2c2a; }
  .wsw .metric-label, .wsw .slider-label, .wsw .legend, .wsw .note, .wsw .chart-title { color: #b0aea6; }
}
</style>

<div class="wsw">

  <div class="slider-row">
    <span class="slider-label">Население города</span>
    <input type="range" id="wsw-pop" min="1" max="40" value="10" step="1" style="flex:1; cursor:pointer;">
    <span class="slider-val" id="wsw-pop-val">1.0 млн</span>
  </div>

  <div class="metric-row">
    <div class="metric">
      <div class="metric-label">Инфраструктура &nbsp;<code style="font-size:10px">β = 0.85</code></div>
      <div class="metric-value" id="wsw-infra" style="color:#3B8BD4">—</div>
      <div class="metric-delta" id="wsw-infra-d">субпропорционально</div>
    </div>
    <div class="metric">
      <div class="metric-label">ВВП / зарплаты &nbsp;<code style="font-size:10px">β = 1.15</code></div>
      <div class="metric-value" id="wsw-gdp" style="color:#1D9E75">—</div>
      <div class="metric-delta" id="wsw-gdp-d">суперпропорционально</div>
    </div>
    <div class="metric">
      <div class="metric-label">Скорость ходьбы &nbsp;<code style="font-size:10px">β = 1.09</code></div>
      <div class="metric-value" id="wsw-walk" style="color:#BA7517">—</div>
      <div class="metric-delta" id="wsw-walk-d">суперпропорционально</div>
    </div>
  </div>

  <div class="formula-block">
    <div>Y = Y₀ · N<sup>β</sup></div>
    <div>Инфраструктура: &nbsp;β = <strong style="color:#3B8BD4">0.85</strong> &nbsp;→&nbsp; 2<sup>0.85</sup> ≈ <strong>×1.80</strong> при удвоении N</div>
    <div>ВВП / инновации: β = <strong style="color:#1D9E75">1.15</strong> &nbsp;→&nbsp; 2<sup>1.15</sup> ≈ <strong>×2.22</strong> при удвоении N</div>
  </div>

  <hr class="section-divider">

  <div class="chart-section">
    <div class="chart-title">Кривые роста при увеличении населения</div>
    <div class="chart-wrap" style="height:280px;"><canvas id="wsw-chart1"></canvas></div>
    <div class="legend">
      <span class="leg-item"><span class="leg-sq" style="background:#3B8BD4"></span>Инфраструктура (β=0.85)</span>
      <span class="leg-item"><span class="leg-sq" style="background:#1D9E75"></span>ВВП / зарплаты (β=1.15)</span>
      <span class="leg-item"><span class="leg-sq" style="background:#D85A30; opacity:.5"></span>Линейный рост (β=1.0)</span>
    </div>
  </div>

  <div class="chart-section">
    <div class="chart-title">Логарифмический масштаб — степенной закон становится прямой</div>
    <div class="chart-wrap" style="height:260px;"><canvas id="wsw-chart2"></canvas></div>
    <div class="legend">
      <span class="leg-item"><span class="leg-sq" style="background:#3B8BD4"></span>Инфраструктура</span>
      <span class="leg-item"><span class="leg-sq" style="background:#1D9E75"></span>ВВП</span>
      <span class="leg-item" style="display:flex;align-items:center;gap:5px;">
        <span style="width:14px;height:0;border-top:2px dashed #888;display:inline-block;"></span>
        Реальные города
      </span>
    </div>
    <div class="note">
      На логарифмическом графике log(Y) = log(Y₀) + β · log(N) — прямая линия.
      Наклон = коэффициент β. Данные сотен городов мира ложатся на эти прямые
      с точностью, нетипичной для социальных наук.
    </div>
  </div>

  <div class="chart-section">
    <div class="chart-title">Бразилиа: спроектированный город vs органический рост</div>
    <div class="chart-wrap" style="height:260px;"><canvas id="wsw-chart3"></canvas></div>
    <div class="legend">
      <span class="leg-item"><span class="leg-sq" style="background:#1D9E75"></span>Органический город (β=1.15)</span>
      <span class="leg-item"><span class="leg-sq" style="background:#D85A30"></span>Бразилиа: проектная ёмкость (const)</span>
      <span class="leg-item"><span class="leg-sq" style="background:#888780"></span>Бразилиа: фактический социальный индекс</span>
    </div>
    <div class="note">
      Бразилиа спроектирована для 500 000 жителей. Население выросло — социальная
      инфраструктура не масштабировалась. Органические пригороды (сателлитные города)
      выросли стихийно и оказались удобнее для жизни.
    </div>
  </div>

</div><!-- .wsw -->

<script>
(function() {
  var BLUE  = '#3B8BD4';
  var GREEN = '#1D9E75';
  var RED   = '#D85A30';
  var GRAY  = '#888780';
  var AMBER = '#BA7517';

  var isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var gridC  = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)';
  var tickC  = isDark ? '#b0aea6' : '#73726c';

  function pw(N, b) { return Math.pow(N, b); }

  var pops   = [0.1, 0.5, 1, 2, 5, 10, 20, 50];
  var pLabels = pops.map(function(n){ return n < 1 ? Math.round(n*1000)+'k' : n+'M'; });
  var infra  = pops.map(function(n){ return pw(n, 0.85); });
  var gdp    = pops.map(function(n){ return pw(n, 1.15); });
  var lin    = pops.map(function(n){ return pw(n, 1.0);  });

  var baseOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: gridC }, ticks: { color: tickC, font: { size: 11 } } },
      y: { grid: { color: gridC }, ticks: { color: tickC, font: { size: 11 } } }
    }
  };

  function deepMerge(a, b) {
    var out = Object.assign({}, a);
    Object.keys(b).forEach(function(k){
      out[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]))
               ? deepMerge(a[k] || {}, b[k]) : b[k];
    });
    return out;
  }

  /* Chart 1 */
  new Chart(document.getElementById('wsw-chart1'), {
    type: 'line',
    data: {
      labels: pLabels,
      datasets: [
        { label: 'Инфраструктура', data: infra, borderColor: BLUE,  backgroundColor: BLUE+'22',  borderWidth: 2, fill: true,  tension: 0.4, pointRadius: 3 },
        { label: 'ВВП',            data: gdp,   borderColor: GREEN, backgroundColor: GREEN+'22', borderWidth: 2, fill: true,  tension: 0.4, pointRadius: 3 },
        { label: 'Линейный',       data: lin,   borderColor: RED,   borderDash: [5,4],            borderWidth: 1.5, fill: false, tension: 0.4, pointRadius: 0 }
      ]
    },
    options: deepMerge(baseOpts, {
      scales: {
        x: { title: { display: true, text: 'Население', color: tickC, font: { size: 11 } } },
        y: { title: { display: true, text: 'Относительная величина', color: tickC, font: { size: 11 } } }
      }
    })
  });

  /* Chart 2: log-log */
  var logPops  = pops.map(function(n){ return +Math.log10(n).toFixed(2); });
  var logInfra = infra.map(function(v){ return +Math.log10(v).toFixed(3); });
  var logGdp   = gdp.map(function(v){   return +Math.log10(v).toFixed(3); });

  var cities = [
    { name: 'Токио',    logN: +Math.log10(37).toFixed(2),   logY: +Math.log10(pw(37,  1.15)*0.98).toFixed(3) },
    { name: 'Мехико',   logN: +Math.log10(21).toFixed(2),   logY: +Math.log10(pw(21,  1.15)*1.02).toFixed(3) },
    { name: 'Найроби',  logN: +Math.log10(4.5).toFixed(2),  logY: +Math.log10(pw(4.5, 1.15)*0.97).toFixed(3) },
    { name: 'Бангалор', logN: +Math.log10(12).toFixed(2),   logY: +Math.log10(pw(12,  1.15)*1.05).toFixed(3) }
  ];

  new Chart(document.getElementById('wsw-chart2'), {
    type: 'line',
    data: {
      labels: logPops,
      datasets: [
        { label: 'Инфраструктура', data: logInfra, borderColor: BLUE,  borderWidth: 2, fill: false, tension: 0, pointRadius: 0 },
        { label: 'ВВП',            data: logGdp,   borderColor: GREEN, borderWidth: 2, fill: false, tension: 0, pointRadius: 0 },
        {
          label: 'Города', type: 'scatter',
          data: cities.map(function(c){ return { x: c.logN, y: c.logY }; }),
          backgroundColor: GREEN + '99', borderColor: GREEN, pointRadius: 5, showLine: false
        }
      ]
    },
    options: deepMerge(baseOpts, {
      plugins: {
        tooltip: {
          callbacks: {
            label: function(ctx) {
              if (ctx.datasetIndex === 2) return ' ' + cities[ctx.dataIndex].name;
              return ' ' + ctx.dataset.label + ': ' + ctx.parsed.y.toFixed(2);
            }
          }
        }
      },
      scales: {
        x: { title: { display: true, text: 'log(Население, млн)', color: tickC, font: { size: 11 } } },
        y: { title: { display: true, text: 'log(Показатель)',      color: tickC, font: { size: 11 } } }
      }
    })
  });

  /* Chart 3: Brasilia */
  var years   = [1960, 1970, 1980, 1990, 2000, 2010, 2020];
  var orgN    = [0.5,  1.1,  2.2,  4.0,  7.0,  11.5, 17.0];
  var orgSoc  = orgN.map(function(n){ return +pw(n / 0.5, 1.15).toFixed(3); });
  var designed = years.map(function(){ return 1.0; });
  var actual   = [1.00, 1.05, 1.11, 1.17, 1.24, 1.32, 1.41];

  new Chart(document.getElementById('wsw-chart3'), {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        { label: 'Органический рост', data: orgSoc,   borderColor: GREEN, borderWidth: 2, fill: false, tension: 0.4, pointRadius: 3 },
        { label: 'Проектная ёмкость', data: designed,  borderColor: RED,   borderDash: [5,4], borderWidth: 1.5, fill: false, tension: 0, pointRadius: 0 },
        { label: 'Бразилиа факт.',    data: actual,    borderColor: GRAY,  borderWidth: 2, fill: false, tension: 0.3, pointRadius: 3 }
      ]
    },
    options: deepMerge(baseOpts, {
      scales: {
        x: { title: { display: true, text: 'Год', color: tickC, font: { size: 11 } } },
        y: { title: { display: true, text: 'Социальный индекс (норм.)', color: tickC, font: { size: 11 } } }
      }
    })
  });

  /* Slider */
  var slider = document.getElementById('wsw-pop');
  var popVal = document.getElementById('wsw-pop-val');

  slider.addEventListener('input', function() {
    var N = this.value / 10;
    popVal.textContent = N.toFixed(1) + ' млн';

    var iV = pw(N, 0.85).toFixed(2);
    var gV = pw(N, 1.15).toFixed(2);
    var wV = pw(N, 1.09).toFixed(2);

    document.getElementById('wsw-infra').textContent  = '×' + iV;
    document.getElementById('wsw-gdp').textContent    = '×' + gV;
    document.getElementById('wsw-walk').textContent   = '×' + wV;

    var linV = N.toFixed(2);
    document.getElementById('wsw-infra-d').textContent = iV < linV ? 'медленнее роста населения' : 'пропорционально';
    document.getElementById('wsw-gdp-d').textContent   = gV > linV ? '+' + ((gV - linV) * 100 / linV).toFixed(0) + '% к линейному' : '';
    document.getElementById('wsw-walk-d').textContent  = wV > linV ? '+' + ((wV - linV) * 100 / linV).toFixed(0) + '% к линейному' : '';
  });

  slider.dispatchEvent(new Event('input'));

  /* Load Chart.js if not present */
  if (typeof Chart === 'undefined') {
    var s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js';
    s.onload = function() { slider.dispatchEvent(new Event('input')); };
    document.head.appendChild(s);
  }
})();
</script>

</div><!-- .west-scaling-widget -->


---

## Вывод

Законы Уэста описывают принцип, который интуитивно понимает каждый хороший архитектор — и городской, и программный: **сложность не проектируется, она возникает**. Задача архитектора — не предусмотреть всё заранее, а создать условия, в которых система сможет расти органически.

Бразилиа нарушила этот принцип. Хорошая программная архитектура — с правильно выбранными зависимостями, инверсией управления и UI-first подходом — его соблюдает.

---

## Ссылки

- Geoffrey West — *Scale: The Universal Laws of Growth, Innovation, Sustainability, and the Pace of Life* (Penguin Press, 2017)
- Geoffrey West — [TED Talk: The surprising math of cities and corporations](https://www.ted.com/talks/geoffrey_west_the_surprising_math_of_cities_and_corporations)
- Lucio Costa, Oscar Niemeyer — [Brasília UNESCO World Heritage](https://whc.unesco.org/en/list/445)
- Статья в T&P: [Джеффри Уэст о городах и слонах](https://theoryandpractice.ru/posts/2577)

---

*Следующая часть серии: [IoC-контейнеры и перехват в .NET](/di-aop-part2)*
