---
layout: post
title: "Автоматизация обучения на Stepik с помощью Playwright"
date: 2025-11-18 14:00:00
description: "Stepik и playwright"
tags: ["stepik", "playwright", "автоматизация"]
categories: ["stepik", "закрывая гештальты"]
image: /assets/img/stepik-solve.png
related_posts: false
giscus_comments: true
full_width: true
toc:
  sidebar: right
---

«Век живи — век учись». Обучение перестало быть чем-то привязанным к аудиториям и расписаниям (к сожалению, это негативно повлияло на качество образования и престиж).
Для этого существует масса возможностей в наше время. Целая отрасль — «E-Learning».
Среди разнообразия всяческих программ, сервисов и сайтов есть замечательная платформа [Stepik](https://stepik.org).
Разнообразные курсы на любую тематику, возможность стать как учащимся, так и преподавателем — это то, что нужно для любого человека.
Для многих (в том числе и для автора поста) учёба является хобби, а иногда и спортом (на таких платформах есть рейтинги и свои лидеры/авторитеты) — это прогресс, иллюзия того, что что-то сделано, и «закрытие гештальтов».
К сожалению, с появлением chatgpt и прочих AI - степень вовлеченности как учеников, так и преподавателей - снижается. 
Реальное знание и труд который порождает настоящее знание - нивелируются. 
Существуют курсы и отдельные задания "неберучки", авторы курсов или отвечают грубо, или вовсе молчат, и некоторые курсы проходятся с помощью гугл или AI. Или комментариев уже решивших тест или задание.

"Победителей не судят". Бал есть бал. Решенное задание, неважно каким способом, засчитывается.
Конечно, это неприемлемо, перебор ответов. Хак или взлом системы.
Ниже представлен скрипт Playwright, который перебирает возможны варианты. 

```python

import json
from playwright.sync_api import sync_playwright

# Загружаем логин и пароль
with open("config.json", "r") as f:
    cfg = json.load(f)

EMAIL = cfg["email"]
PASSWORD = cfg["password"]

URL = "<>"

from itertools import product

def permutations_with_repetition(chars, min_len, max_len):
    for length in range(min_len, max_len + 1):
        for p in product(chars, repeat=length):
            yield ''.join(p)

for s in permutations_with_repetition("123", 1, 5):
    print(s)

def run():
    with sync_playwright() as p:
        browser = p.firefox.launch(headless=False)
        context = browser.new_context()
        page = context.new_page()

        page.goto(URL)

        # --- Закрыть всплывающее окно, если есть ---
        try:
            page.locator(".woof-message__button").click(timeout=5000)
        except:
            pass

        # --- Нажать LOGIN ---
        page.locator(".navbar__auth_login").click()

        # --- Ввести email ---
        page.locator("#id_login_email").fill(EMAIL)
        # --- Ввести пароль ---
        page.locator("#id_login_password").fill(PASSWORD)

        # --- Кнопка "Войти" ---
        page.locator("#login_form > button").click()

        page.wait_for_timeout(5000)

        # --- Продолжить курс ---
        try:
            page.locator(".course-join-button > button").click(timeout=5000)
        except:
            pass

        for s in permutations_with_repetition("123", 1, 5):
            page.fill(".number-input", s)
            page.click("button.submit-submission", timeout=5000)

        # --- Готово, ты внутри урока ---
        print("Успешный вход!")

        page.wait_for_timeout(10000)
        browser.close()


if __name__ == "__main__":
    run()


```

Для успешной авторизации необходимо чтобы в папке со скриптом нахождился файл config.json

```json
{
  "email": youremail@email.com,
  "password": password
}
```