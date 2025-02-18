---
layout: post
title: Joomla. Миграция и импорт контента
date: 2025-01-27 12:00:00
description: Работа с базой данных mysql
tags: joomla db
categories: разработка joomla
related_posts: false
giscus_comments: true
toc:
  sidebar: right
---

### Импорт в joomla 5

<p style="text-align:justify; text-justify:inter-word;">
Joomla 3.x версия(и) - долго использовалась многими сайтами, и после обновления до 4-ой, а потом и до 5 - структура таблиц, поля этих таблиц, а также модули, компоненты и плагины перестали поддерживать новые версии, а некоторые и вовсе существовать. 
</p>
<p style="text-align:justify; text-justify:inter-word;">
Процесс перехода на новую версию joomla, или на платформу joomla из других CMS (к примеру, wordpress) или источников готового контента - крайне болезненный. В сети множество платных плагинов, миграторов, скриптов для импорта контента в новую версию joomla. Не факт, что они работают. Не факт, что они работают правильно. 
</p>
<p style="text-align:justify; text-justify:inter-word;">
К счастью joomla и похожие CMS используют основу для своего хранения mylsql СУБД.
Далее будут представлены несколько mysql-сриптов с описаниями для импорта контента в joomla.
</p>


 - 1. Таблица **\<prefix\>\_assets** хранит объекты используемые статъями (articles) и прочими типами контента. Если данные импортируются не из joomla - этот шаг можно пропустить.
 
```sql
# assets

ALTER TABLE <new_db>.<prefix>_assets
disable keys;
Replace INTO <new_db>.<prefix>_assets
SELECT *
FROM <old_db>.<old_prefix>_assets

```

- 2. Таблица **\<prefix\>\_categories** хранит категории ваших публикаций.

```sql

# categories
ALTER TABLE <new_db>.<prefix>_categories
disable keys;
Replace INTO <new_db>.<prefix>_categories
SELECT *
FROM <old_db>.<old_prefix>_categories

```

- 3. Таблица **\<prefix\>\_content** - собственно основная таблица где хранятся статьи (article) и посты (posts) в joomla. 

```sql

ALTER TABLE <new_db>.<prefix>_content
disable keys;

Replace INTO <new_db>.<prefix>_content(id, asset_id, title, alias, introtext, `fulltext`, state, catid, created, created_by, created_by_alias, modified, modified_by, checked_out, checked_out_time, publish_up, publish_down, images, urls, attribs, version, ordering, metakey, metadesc, access, hits, metadata, featured, `language`, note)
SELECT id, asset_id, title, alias, introtext, `fulltext`, state, catid, created, created_by, created_by_alias, modified, modified_by, checked_out, checked_out_time, publish_up, publish_down, images, urls, attribs, version, ordering, metakey, metadesc, access, hits, metadata, featured, `language`, note
FROM <db_old>.<old_prefix>_content


```

*createdBy* - важное поле - необходимо использовать вновь созданного администратора в новой бд:

```sql
select id from <new_db>.<prefix>_users
where name="your_admin_name"

```
После выполнения этих скриптов (успешного) ваши статьи будут в новой joomla, но не будут видны. 
Вместо *Replace* можно использовать *Insert* (даже нужно, чтобы не перетереть уже существующий контент).

4. В joomla 5 появились новые таблицы workflow\_\*. Для того, чтобы можно было увидеть в админке joomla ваш контент, необходимо обновить/заполнить таблицу workflow_associations:
- [Copying com_content table between databases](https://forum.joomla.org/viewtopic.php?t=998513)
- [How to move articles from joomla 3.10 to joomla 4.1Topic is solved](https://forum.joomla.org/viewtopic.php?t=993253#p3658054)
Пример из последней ссылки

```sql
INSERT INTO jos_workflow_associations (`item_id`, `stage_id`, `extension`)
SELECT `id`, 1, "com_content.article"
FROM jos_content
WHERE `id` > 23 AND `id` < 71;
```

При полном копировании/импорте (если есть таблица *workflow_associations*):

```sql
ALTER TABLE <new_db>.<prefix>_workflow_associations
disable keys;
REPLACE INTO <new_db>.<prefix>_workflow_associations(item_id, stage_id, extension)
SELECT item_id, stage_id, extension
FROM <old_db>.<old_prefix>_workflow_associations

```

При полном копировании/импорте (если нет таблицы *workflow_associations*):

```sql
ALTER TABLE <new_db>.<prefix>_workflow_associations
disable keys;
INSERT INTO <new_db>.<prefix>_workflow_associations(item_id, stage_id, extension)
SELECT id, 1, "com_content.article"
FROM <old_db>.<old_prefix>_content

```

5. Для копирования пользователей можно воспользоваться: [copy joomla3.10 user tables to joomla 5](https://forum.joomla.org/viewtopic.php?t=1006236)

Есть и другие типы контента, которые можно сохранить/перенести/импортировать. Но они не так критичны и много зависит от компонентов, которые выиспользуете, и шаблона joomla.









