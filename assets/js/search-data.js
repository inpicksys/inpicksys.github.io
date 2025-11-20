// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-о-проекте",
    title: "О проекте",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-блог",
          title: "Блог",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-публикации",
          title: "Публикации",
          description: "Публикации Струтинского М.Н.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-обучение",
          title: "Обучение",
          description: "Решение задач из курсов",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-проекты",
          title: "Проекты",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Public Repositories. Will be updated soon",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "M. Strutinsky CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-почему-для-восстановления-рутила-водородом-нужна-температура-4700-k",
        
          title: "Почему для восстановления рутила водородом нужна температура 4700 K",
        
        description: "Stepik. Неорганическая химия: введение в химию элементов. Восстановление минерала рутила",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/rutil-temperature/";
          
        },
      },{id: "post-взаимосвязь-параметров-электронного-микроскопа-и-характеристик-изображения",
        
          title: "Взаимосвязь параметров электронного микроскопа и характеристик изображения",
        
        description: "Физические принципы РЭМ и особенности оборудования. Как ускоряющее напряжение, ток пучка и размер апертуры влияют на разрешение, контраст и глубину резкости в растровом электронном микроскопе.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/sem-parameters/";
          
        },
      },{id: "post-разбор-задачи-заряженный-шарик-в-газе-поляризуемых-молекул",
        
          title: "Разбор задачи: Заряженный шарик в газе поляризуемых молекул",
        
        description: "Заряженный шарик в газе поляризуемых молекул",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/electrostatic-gas-problem/";
          
        },
      },{id: "post-joomla-миграция-и-импорт-контента",
        
          title: "Joomla. Миграция и импорт контента",
        
        description: "Работа с базой данных mysql",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/joomla-db-migration/";
          
        },
      },{id: "post-деплоймент-joomla-5-github-actions",
        
          title: "Деплоймент joomla 5. Github actions",
        
        description: "Описание github actions деплоймента для joomla5",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/joomla-deployment-aws/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "courses-1-1-основные-понятия-теории-множеств",
          title: '1.1 Основные понятия теории множеств',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_1_1-Basic-concepts-of-set-theory";
            },},{id: "courses-1-2-основные-правила-перечислительной-комбинаторики",
          title: '1.2 Основные правила перечислительной комбинаторики',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_1_2-Basic-rules-of-enumerative-combinatorics";
            },},{id: "courses-1-3-принцип-дирихле",
          title: '1.3 Принцип Дирихле',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_1_3-Dirichlet-principle";
            },},{id: "courses-1-4-k-сочетания-из-n-элементов",
          title: '1.4 K-сочетания из n-элементов',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_1_4-K-combinations-of-n-elements";
            },},{id: "courses-2-1-k-перестановки-из-n-элементов",
          title: '2.1 k-перестановки из n элементов',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_2_1-k-permutations-of-n-elements";
            },},{id: "courses-2-2-урновые-схемы-и-схемы-раскладки-по-ящикам",
          title: '2.2 Урновые схемы и схемы раскладки по ящикам',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_2_2-Urn-diagrams-and-box-layout-diagrams";
            },},{id: "courses-2-3-подсчет-отображений-конечных-множеств",
          title: '2.3 Подсчет отображений конечных множеств',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_2_3-Counting-mappings-of-finite-sets";
            },},{id: "courses-2-4-перестановки-с-повторениями-числа-стирлинга",
          title: '2.4 Перестановки с повторениями. Числа Стирлинга',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_2_4-Permutations-with-repetitions-Stirling-numbers";
            },},{id: "courses-3-1-рекуррентные-соотношения",
          title: '3.1 Рекуррентные соотношения',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_3_1-Recurrence-relations";
            },},{id: "courses-3-2-производящие-функции",
          title: '3.2 Производящие функции',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_3_2-Generating-functions";
            },},{id: "courses-3-3-решение-рекуррентных-соотношений-с-помощью-производящих-функций",
          title: '3.3 Решение рекуррентных соотношений с помощью производящих функций',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_3_3-Solving-recurrence-relations-using-generating-functions";
            },},{id: "courses-3-4-числа-каталана",
          title: '3.4 Числа Каталана',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_3_4-Catalan-Numbers";
            },},{id: "courses-4-1-комбинаторный-смысл-операций-над-производящими-функциями",
          title: '4.1 Комбинаторный смысл операций над производящими функциями',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_4_1-Combinatorial-meaning-of-operations-on-generating-functions";
            },},{id: "courses-4-2-понятие-композиции-обыкновенных-производящих-функций",
          title: '4.2 Понятие композиции обыкновенных производящих функций',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_4_2-the-concept-of-composition-of-ordinary-generating-functions";
            },},{id: "courses-4-3-разбиение-числа-на-слагаемые-диаграммная-техника",
          title: '4.3 Разбиение числа на слагаемые. Диаграммная техника',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_4_3-Breaking-a-number-into-addends-Diagrammatic-technique";
            },},{id: "courses-5-1-композиция-экспоненциальных-производящих-функций",
          title: '5.1 Композиция экспоненциальных производящих функций',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_5_1-Composition-of-Exponential-Generating-Functions";
            },},{id: "courses-5-2-комбинаторика-перестановок",
          title: '5.2 Комбинаторика перестановок',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_5_2-Combinatorics-of-permutations";
            },},{id: "courses-5-3-формула-кэли-для-подсчета-всех-помеченных-деревьев",
          title: '5.3 Формула Кэли для подсчета всех помеченных деревьев',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_5_3-Cayleys-formula-for-counting-all-labeled-trees";
            },},{id: "courses-5-4-перечисление-деревьев",
          title: '5.4 Перечисление деревьев',
          description: "Основы перечислительной комбиаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-basics-of-combinatorics/module_5_4-Enumeration-of-trees";
            },},{id: "courses-coursera-электростатика-и-магнитостатика",
          title: 'Coursera - Электростатика и магнитостатика',
          description: "Электростатика и магнитостатика",
          section: "Courses",handler: () => {
              window.location.href = "/coursera-electrostatic-and-magnetostatic/";
            },},{id: "courses-магнитное-поле-в-вакууме",
          title: 'Магнитное поле в вакууме',
          description: "Электростатика и магнетостатика",
          section: "Courses",handler: () => {
              window.location.href = "/coursera-electrostatic-and-magnetostatic/week-8-test";
            },},{id: "courses-основные-понятия-и-законы-генетики",
          title: 'Основные понятия и законы генетики',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_1_2-basics-genetic-laws";
            },},{id: "courses-1-3-равновесие-в-популяции-закон-харди-вайнберга",
          title: '1.3 Равновесие в популяции. Закон Харди-Вайнберга',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_1_3-equilibrium_in_the_population_Hardy-Weinberg_law";
            },},{id: "courses-1-4-ассортативность-скрещиваний-инбридинг",
          title: '1.4 Ассортативность скрещиваний. Инбридинг',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_1_4_inbreeding";
            },},{id: "courses-1-5-мутационный-процесс",
          title: '1.5 Мутационный процесс',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_1_5_mutations";
            },},{id: "courses-1-6-нейтральная-теория-и-ее-следствия",
          title: '1.6 Нейтральная теория и ее следствия',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_1_6-neutral_theory_and_its_consequences";
            },},{id: "courses-2-1-дрейф-генов-модель-райта-фишера",
          title: '2.1 Дрейф генов. Модель Райта-Фишера',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_2_1-genetic-drift-Wright-Fisher-model";
            },},{id: "courses-2-2-коалесцентная-теория",
          title: '2.2 Коалесцентная теория',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_2_2-coalescence-theory";
            },},{id: "courses-2-3-коалесцентные-методы-демографического-анализа",
          title: '2.3 Коалесцентные методы демографического анализа',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_2_3-coalescence-methods-of-demographic-analysis";
            },},{id: "courses-2-4-поток-генов",
          title: '2.4 Поток генов',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_2_4-gene-flow";
            },},{id: "courses-2-5-анализ-генетического-смешения",
          title: '2.5 Анализ генетического смешения',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_2_5-analysis-of-genetic-mixing";
            },},{id: "courses-3-1-отбор-и-приспособленность",
          title: '3.1 Отбор и приспособленность',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_3_1-selection-and-fitness";
            },},{id: "courses-3-2-аллель-частотный-спектр-и-естественный-отбор",
          title: '3.2 Аллель-частотный спектр и естественный отбор',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_3_2-allele-frequency-spectrum-and-natural-selection";
            },},{id: "courses-3-3-поиск-сигналов-отбора-в-белок-кодирующих-генах",
          title: '3.3 Поиск сигналов отбора в белок-кодирующих генах',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_3_3-search-for-selection-signals-in-protein-coding-genes";
            },},{id: "courses-3-4-поиск-сигналов-отбора-ld-методы",
          title: '3.4 Поиск сигналов отбора. LD-методы',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_3_4-search-for-selection-signals-LD-Methods";
            },},{id: "courses-3-5-заключение",
          title: '3.5 Заключение',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_3_5-conclusion";
            },},{id: "courses-3-6-бонус-мини-проект",
          title: '3.6 Бонус. Мини-проект',
          description: "Генетика и геномика популяций",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/module_3_6-bonus";
            },},{id: "courses-1-2-вероятностная-модель-эксперимента",
          title: '1.2 Вероятностная модель эксперимента',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-1_2-probabilistic-model-of-space";
            },},{id: "courses-1-3-вероятностные-пространства",
          title: '1.3 Вероятностные пространства',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-1_3-probability-spaces";
            },},{id: "courses-1-4-немного-комбинаторики",
          title: '1.4 Немного комбинаторики',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-1_4-a-little-combinatorics";
            },},{id: "courses-1-5-условная-вероятность",
          title: '1.5 Условная вероятность',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-1_5-conditional-probability";
            },},{id: "courses-1-6-теорема-байеса",
          title: '1.6 Теорема Байеса',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-1_6-Bayes-theorem";
            },},{id: "courses-1-7-независимые-события",
          title: '1.7 Независимые события',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-1_7-Independent-events";
            },},{id: "courses-1-8-схема-бернулли",
          title: '1.8 Схема Бернулли',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-1_8-Bernoulli-scheme";
            },},{id: "courses-1-9-краткие-сведения-из-математического-анализа",
          title: '1.9 Краткие сведения из математического анализа',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-1_9-Brief-information-from-mathematical-analysis";
            },},{id: "courses-2-1-случайные-величины",
          title: '2.1 Случайные величины',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-2_1-Random-variables";
            },},{id: "courses-2-1-случайные-величины",
          title: '2.1 Случайные величины',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-2_2-Mathematical-Expectation";
            },},{id: "courses-2-3-дисперсия",
          title: '2.3 Дисперсия',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-2_3-Dispersion";
            },},{id: "courses-2-4-закон-больших-чисел",
          title: '2.4 Закон больших чисел',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-2_4-Law-of-Large-Numbers";
            },},{id: "courses-2-5-теорема-пуассона",
          title: '2.5 Теорема Пуассона',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-2_5-Poisson-theorem";
            },},{id: "courses-2-6-локальная-теорема-муавра-лапласа",
          title: '2.6 Локальная теорема Муавра–Лапласа',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-2_6-Local-Moivre-Laplace-theorem";
            },},{id: "courses-2-7-интегральная-теорема-муавра-лапласа",
          title: '2.7 Интегральная теорема Муавра–Лапласа',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-2_7-Moivre%E2%80%93Laplace-integral-theorem";
            },},{id: "courses-3-1-геометрическая-вероятность",
          title: '3.1 Геометрическая вероятность',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-3_1-Geometric-probability";
            },},{id: "courses-3-2-аксиоматическое-определение-вероятности",
          title: '3.2 Аксиоматическое определение вероятности',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-3_2-Axiomatic-definition-of-probability";
            },},{id: "courses-3-3-случайные-величины",
          title: '3.3 Случайные величины',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-3_3_Random-variables";
            },},{id: "courses-3-4-совместное-распределение",
          title: '3.4 Совместное распределение',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-3_4-joint-distribution";
            },},{id: "courses-3-5-математическое-ожидание",
          title: '3.5 Математическое ожидание',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-3_5-mathematical-expectation";
            },},{id: "courses-3-6-моменты-случайной-величины",
          title: '3.6 Моменты случайной величины',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-3_6-moments-of-a-random-variable";
            },},{id: "courses-3-7-сходимости-последовательности-случайных-величин",
          title: '3.7 Сходимости последовательности случайных величин',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-3_7-convergence-of-a-sequence-of-random-variables";
            },},{id: "courses-4-1-дискретные-случайные-величины",
          title: '4.1 Дискретные случайные величины',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-4_1-discrete-random-variables";
            },},{id: "courses-4-2-производящие-функции",
          title: '4.2 Производящие функции',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-4_2-generating-functions";
            },},{id: "courses-4-3-лемма-бореля-кантелли",
          title: '4.3 Лемма Бореля–Кантелли',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-4_3-Borel%E2%80%93Cantelli-lemma";
            },},{id: "courses-4-4-непрерывное-распределение",
          title: '4.4 Непрерывное распределение',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-4_4-Continuous-distribution";
            },},{id: "courses-4-5-независимость",
          title: '4.5 Независимость',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-4_5-Independence";
            },},{id: "courses-4-6-математическое-ожидание",
          title: '4.6 Математическое ожидание',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-4_6-Mathematical-Expectation";
            },},{id: "courses-4-7-характеристические-функции-случайных-величин",
          title: '4.7 Характеристические функции случайных величин',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-4_7-Characteristic-functions-of-random-variables";
            },},{id: "courses-4-8-центральная-предельная-теорема",
          title: '4.8 Центральная предельная теорема',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/module-4_8-Central-Limit-Theorem";
            },},{id: "courses-stepik-основы-перечислительной-комбинаторики",
          title: 'Stepik - Основы перечислительной комбинаторики',
          description: "Основы Комбинаторики",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-combinatorics-basics/";
            },},{id: "courses-stepik-генетика-и-геномика-популяций",
          title: 'Stepik - генетика и геномика популяций',
          description: "Генетика популяций — одна из составляющих современной эволюционной теории, называемой синтетической теорией эволюции.",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-course-genetics-and-population/";
            },},{id: "courses-stepik-нейронные-сети-и-обработка-текста",
          title: 'Stepik - Нейронные сети и обработка текста',
          description: "Нейронные сети и обработка текста",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-neuro-networks-and-text-treatment/";
            },},{id: "courses-stepik-теория-вероятностей",
          title: 'Stepik - Теория вероятностей',
          description: "Теория Вероятностей",
          section: "Courses",handler: () => {
              window.location.href = "/stepik-probability_theory-3089/";
            },},{id: "news-публикация-курса-по-генетике-решения-задач",
          title: 'Публикация курса по генетике (решения задач)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-публикация-курса-по-теории-вероятностей",
          title: 'Публикация курса по Теории Вероятностей',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-публикация-курса-по-комбинаторике",
          title: 'Публикация курса по Комбинаторике',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_combinatorics/";
            },},{id: "projects-mfe-demo",
          title: 'MFE demo',
          description: "Demo project written on React js &amp; Vue js",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-saltpound",
          title: 'Saltpound',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-compare-yourself",
          title: 'Compare Yourself',
          description: "Demo aws lambda project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-saltpound",
          title: 'Saltpound',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
