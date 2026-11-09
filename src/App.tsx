"use client";

import { useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

function Image({ fill, style, ...props }: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) {
  return <img {...props} style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", color: "transparent", ...style } : style} />;
}

const audience = [
  { title: "Новичкам", text: "Хочешь создавать сайты, но пока не понимаешь, с чего начать.", benefit: "Пройдёшь путь от выбора стиля до публикации по пошаговым урокам — без предварительного опыта в дизайне и программировании.", image: "/assets/audience-start.png" },
  { title: "Тем, кто хочет освоить AI", text: "Генерируешь идеи и картинки, но пока не собираешь их в законченный проект.", benefit: "Свяжешь инструменты в единый процесс: черновик сайта, работа над дизайном, визуалы, анимация и публикация.", image: "/assets/audience-ai.png" },
  { title: "Экспертам и предпринимателям", text: "Есть идея для сайта, и хочется самостоятельно работать над её воплощением.", benefit: "Создашь лендинг на свою тему и разберёшься, как менять его внешний вид и публиковать результат.", image: "/assets/audience-case.png" },
  { title: "Фрилансерам и дизайнерам", text: "Хочешь попробовать AI в работе над сайтом — от первых референсов до готовой страницы.", benefit: "Пройдёшь весь процесс на практике и оформишь результат в новый кейс для портфолио.", image: "/assets/audience-system.png" },
];

const lessons = [
  { n: "01", title: "ОТ ИДЕИ К ВИЗУАЛЬНОМУ СТИЛЮ", text: "Выберешь тему, соберёшь первый черновик сайта с AI и подберёшь референсы. Создашь название, логотип и визуальное направление, затем начнёшь дорабатывать блоки в Figma.", role: "Claude · ChatGPT · Figma · Midjourney", result: "Черновик сайта и выбранное направление дизайна.", image: "/assets/lesson-research.png" },
  { n: "02", title: "ВИЗУАЛЫ И АНИМАЦИЯ В СТИЛЕ ПРОЕКТА", text: "Дорабатываем дизайн в Figma, генерируем изображения под выбранный стиль и оживляем визуалы. Возвращаем всё в проект и доводим страницу до цельного результата.", role: "Figma · Midjourney · Kling · Claude", result: "Дизайн сайта с AI-визуалами и анимацией.", image: "/assets/lesson-ui.png" },
  { n: "03", title: "ИЗ ДИЗАЙНА — В РАБОТАЮЩИЙ САЙТ", text: "Подключаем полезные сервисы без сложной разработки, проверяем сайт на разных экранах и бесплатно публикуем его по ссылке через GitHub и Vercel.", role: "Claude · GitHub · Vercel · шпаргалка по публикации", result: "Адаптивный сайт, который можно открыть и отправить по ссылке.", image: "/assets/lesson-ux.png" },
  { n: "04", title: "QR-МЕНЮ С ЗАКАЗАМИ В TELEGRAM", text: "В Work-режиме — пошаговом рабочем процессе внутри ChatGPT — создаём с телефона QR-меню для кафе, дорабатываем визуальный стиль и подключаем Telegram-бота для приёма заказов.", role: "ChatGPT · Telegram", result: "Опубликованное QR-меню с приёмом заказов.", image: "/assets/lesson-mobile-product.png" },
  { n: "05", title: "ОФОРМЛЕНИЕ ПРОЕКТА В ПОРТФОЛИО", text: "Оформляем готовую работу в кейс, готовим обложку и публикацию для портфолио. Разбираем CV и площадки, где можно показывать проекты и искать первые заказы.", role: "Behance · Dribbble · Figma · Google Docs", result: "Готовый кейс, обновлённое CV и план продвижения", image: "/assets/lesson-development.png" },
];

const courseResults = [
  { title: "Сайт со своим визуальным стилем", text: "Адаптивный лендинг на выбранную тобой тему: от референсов и дизайна до AI-визуалов, анимации и публикации по ссылке.", image: "/assets/course-result-frameo-mockup.png", alt: "Лендинг FRAMEO на экране ноутбука", href: "https://tinapolyakova27-hub.github.io/frameo/", linkLabel: "Открыть сайт FRAMEO" },
  { title: "QR-меню с приёмом заказов", text: "Дополнительная практика: создашь с телефона меню для кафе и подключишь Telegram-бота, чтобы получать заказы.", image: "/assets/course-result-luma-menu.png", alt: "QR-меню Luma Café и экран приёма заказов", href: "https://qr-place-luma.tinapo.chatgpt.site", linkLabel: "Открыть QR-меню" },
  { title: "Кейс для портфолио", text: "Оформишь проект: подготовишь обложку, структуру кейса и публикацию, которую можно показать потенциальному заказчику или работодателю.", image: "/assets/course-result-portfolio-case.png", alt: "Оформление кейса FRAMEO и Luma Café для портфолио", contain: true },
];

const learningSteps = [
  { title: "Получаешь доступ", text: "Все материалы открываются сразу после оплаты.", image: "/assets/step-access-3d.png" },
  { title: "Готовишь инструменты", text: "Проходишь короткий подготовительный модуль.", image: "/assets/step-preparation-3d.png" },
  { title: "Выбираешь тему", text: "Работаешь над сайтом для своей идеи.", image: "/assets/step-payment-3d.png" },
  { title: "Повторяешь и дорабатываешь", text: "Применяешь шаги из уроков к своему проекту.", image: "/assets/step-practice-3d.png" },
  { title: "Публикуешь и оформляешь", text: "Выводишь сайт онлайн и готовишь кейс.", image: "/assets/step-publish-3d.png" },
];


const faq = [
  { q: "Смогу ли я использовать этот процесс для других сайтов?", paragraphs: ["Да. На курсе ты проходишь последовательность от выбора темы и визуального направления до публикации. Этот подход можно применять к следующим лендингам, меняя содержание, стиль и визуалы под новую задачу. Более сложные функции могут потребовать дополнительного изучения."] },
  { q: "Это курс по дизайну или программированию?", paragraphs: ["Курс соединяет работу над дизайном сайта с его созданием при помощи AI. Ты подбираешь референсы, задаёшь стиль, дорабатываешь визуальную часть и публикуешь результат. Предварительно учиться программированию не нужно."] },
  {
    q: "Какие инструменты понадобятся?",
    paragraphs: [
      "В курсе используются Claude, ChatGPT, Figma, Midjourney, Kling, GitHub, Vercel, Telegram, Behance или Dribbble, LinkedIn и Google Docs.",
      "В подготовительном модуле ты зарегистрируешься в сервисах, которые нужны для старта. Остальные подключим по ходу курса — тогда, когда они действительно понадобятся.",
    ],
  },
  {
    q: "Что оплачивается отдельно? Нужны ли платные подписки?",
    paragraphs: [
      "Да, понадобится хотя бы один платный AI-сервис. Самый универсальный вариант для курса — ChatGPT Plus: в нём можно работать и над сайтом, и над изображениями. Claude подойдёт для создания сайта, но визуалы придётся искать или генерировать отдельно.",
      "Если используешь два AI-сервиса, их можно чередовать, когда в одном временно заканчиваются лимиты. Для более выразительных изображений можно подключить Midjourney, а для видео — Gemini или Kling.",
      "Ориентировочная стоимость на момент подготовки курса: ChatGPT — $20, Claude — €15, Gemini — $5, Midjourney — $10, Kling — $9. Тарифы и лимиты сервисов могут меняться.",
      "Для Figma, GitHub, Vercel, Telegram, Behance, Dribbble и LinkedIn достаточно бесплатных тарифов.",
    ],
  },
  {
    q: "Что такое Work-режим ChatGPT и нужна ли подписка?",
    paragraphs: [
      "Work — режим для многошаговых задач: исследования, работы с файлами, создания документов, презентаций, таблиц и сайтов. Обычный Chat удобнее для быстрых вопросов и идей, а Codex — для задач, связанных с кодом.",
      "Для Work нужна подходящая платная подписка ChatGPT. Если режим доступен в твоём тарифе, его можно выбрать в новом чате, переключившись с Chat на Work.",
    ],
  },
  {
    q: "Подойдёт ли курс без опыта в Figma и дизайне?",
    paragraphs: ["Да. Мы начинаем с нуля и постепенно проходим весь путь: от идеи до первого сайта и мини-продукта. Опыт в дизайне, программировании или Figma не нужен — достаточно повторять шаги вместе с уроками."],
  },
  {
    q: "Нужно ли уметь программировать?",
    paragraphs: ["Нет. AI-инструменты помогут создать сайт и мини-продукт без глубоких знаний кода. Ты будешь работать по понятным пошаговым инструкциям, проверять результат и вносить правки."],
  },
  {
    q: "Можно ли пройти курс только с телефона?",
    paragraphs: ["Полностью — нет. Четвёртый урок можно пройти с телефона: ты соберёшь онлайн-меню, добавишь QR-код, настроишь Telegram-бота и опубликуешь результат. Для остальных уроков понадобится компьютер или ноутбук."],
  },
  {
    q: "Сколько времени занимает обучение?",
    paragraphs: ["Курс проходится в своём темпе. Подготовка занимает около 3 минут, уроки — примерно 11–17 минут. Время на практику зависит от выбранной идеи, желаемого результата и скорости работы компьютера."],
  },
  {
    q: "На какой срок открывается доступ?",
    paragraphs: ["Доступ ко всем материалам курса открывается навсегда."],
  },
  {
    q: "Как я получу материалы после оплаты?",
    paragraphs: ["Сразу после оплаты ты получишь доступ ко всем материалам: подготовительному модулю, пяти урокам и шпаргалке дизайнера."],
  },
  {
    q: "Чем отличается тариф с поддержкой?",
    paragraphs: ["Ты получаешь доступ в общий Telegram-чат участников, где можно делиться работами, идеями и прогрессом. Также в тариф входит один персональный разбор вопроса по твоему проекту — отметь меня в чате через @TinaPo, и я отвечу."],
  },
  {
    q: "Можно ли выбрать свою тему проекта?",
    paragraphs: [
      "Да. В первых трёх уроках можно выбрать любую понятную тему: личный бренд, кафе, магазин, бьюти-мастер, фотограф, дизайнер, онлайн-сервис или другой проект.",
      "В четвёртом уроке понадобится идея мини-продукта с конкретным действием — выбрать, заказать, забронировать, записаться или отправить заявку. Информация от пользователя будет приходить владельцу или менеджеру в Telegram.",
    ],
    bullets: ["онлайн-меню с заказом блюд", "каталог товаров", "запись или бронирование услуги", "регистрация на мероприятие", "заказ консультации", "аренда вещей или техники"],
  },
];

const legalDocuments = {
  terms: {
    label: "Политика использования",
    paragraphs: [
      "Материалы курса предназначены для личного обучения покупателя. Их нельзя копировать, публиковать, передавать третьим лицам или перепродавать без письменного разрешения автора.",
      "Доступ к курсу предоставляется навсегда. Внешние сервисы, которые используются в уроках, работают по собственным правилам и могут менять тарифы, интерфейсы и лимиты.",
    ],
  },
  privacy: {
    label: "Политика конфиденциальности",
    paragraphs: [
      "На сайте нет формы регистрации, и он не запрашивает платёжные данные. Если ты пишешь по email или в Telegram, переданная информация используется только для ответа, оформления доступа к курсу и поддержки.",
      "Контактные данные не продаются и не передаются для сторонней рекламы. Telegram, почтовый сервис и другие внешние платформы обрабатывают данные по собственным политикам конфиденциальности.",
    ],
  },
  refunds: {
    label: "Условия возврата средств",
    paragraphs: [
      "Если доступ к материалам не был предоставлен или возникла техническая проблема, которую не удалось решить, напиши на email или в Telegram. Укажи имя, email, дату оплаты и кратко опиши ситуацию.",
      "Запросы рассматриваются индивидуально с учётом факта предоставления доступа, способа оплаты и применимых требований законодательства. Перед покупкой можно уточнить любые условия в Telegram.",
    ],
  },
} as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [theme, setTheme] = useState<"pink" | "reference">("pink");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [legalOpen, setLegalOpen] = useState<keyof typeof legalDocuments | null>(null);

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));
    if (window.localStorage.getItem("course-theme") === "reference") setTheme("reference");
    const onScroll = () => setScroll(Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { reveal.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    if (!legalOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setLegalOpen(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [legalOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((current) => {
    const next = current === "pink" ? "reference" : "pink";
    window.localStorage.setItem("course-theme", next);
    return next;
  });


  return (
    <main className={theme === "reference" ? "reference-theme" : ""}>
      <div className="scroll-progress" style={{ width: `${scroll}%` }} />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}><span>✦</span> Дизайн без воды <i>с помощью AI</i></a>
        <button className="menu-toggle" aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "≡"}</button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Основная навигация">
          <a href="#results" onClick={closeMenu}>Что создашь</a><a href="#about" onClick={closeMenu}>О курсе</a><a href="#program" onClick={closeMenu}>Программа</a><a href="#pricing" onClick={closeMenu}>Тарифы</a><a href="#author" onClick={closeMenu}>Автор</a>
          <button className={`theme-toggle ${theme === "pink" ? "theme-pink" : "theme-mint"}`} type="button" aria-label={`Сейчас выбрана ${theme === "pink" ? "розовая" : "мятная"} тема. Переключить тему`} aria-pressed={theme === "reference"} onClick={toggleTheme}><span className="theme-toggle-track" aria-hidden="true"><span className="theme-toggle-thumb" /></span><span>{theme === "pink" ? "РОЗОВАЯ" : "МЯТНАЯ"}</span></button>
        </nav>
        <a className="header-cta" href="#pricing">Начать обучение — $10</a>
      </header>

      <section className="hero hero-centered section" id="top">
        <div className="hero-decoration hero-decoration-left" aria-hidden="true"><Image src="/assets/audience-start.png" alt="" fill sizes="190px" /></div>
        <div className="hero-decoration hero-decoration-left-small" aria-hidden="true"><Image src="/assets/audience-ai.png" alt="" fill sizes="120px" /></div>
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">01 / ДИЗАЙН БЕЗ ВОДЫ С ПОМОЩЬЮ AI · ПРАКТИЧЕСКИЙ КУРС</p>
          <h1>НАУЧИСЬ СОЗДАВАТЬ С <span>AI</span><br />САЙТЫ СТУДИЙНОГО УРОВНЯ,<br />КОТОРЫМИ БУДУТ<br />ВОСХИЩАТЬСЯ КЛИЕНТЫ</h1>
          <h2>Повторяй простые шаги — и за 5 уроков освоишь процесс от идеи до стильного сайта по ссылке: со своими визуалами и анимацией. Без опыта в дизайне и коде. Бонусом соберёшь QR-меню с приёмом заказов и оформишь проект в портфолио.</h2>
          <p className="hero-text">Учись в своём темпе. Доступ к материалам — сразу после покупки.</p>
          <div className="button-row"><a className="button primary" href="#pricing">Посмотреть тарифы — от $10</a><a className="button secondary" href="#results">Что я создам на курсе</a></div>
          <div className="hero-meta hero-gift"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M3 8h18v4H3zM5 12v9h14v-9M12 8v13"/><path d="M12 8H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z"/></svg><span>Шпаргалка дизайнера: AI-инструменты, промпты и чек-листы в подарок</span></div>
        </div>
        <div className="hero-decoration hero-decoration-right" aria-hidden="true"><Image src="/assets/audience-system.png" alt="" fill sizes="190px" /></div>
        <div className="hero-decoration hero-decoration-right-small" aria-hidden="true"><Image src="/assets/audience-case.png" alt="" fill sizes="120px" /></div>
      </section>

      <section className="results section" id="results">
        <div className="section-kicker">02 / ЧТО ТЫ СОЗДАШЬ</div>
        <div className="results-head" data-reveal><h2 className="display-title">ОСВОИШЬ ПРОЦЕСС.<br /><span>ЗАКРЕПИШЬ НА СВОИХ ПРОЕКТАХ.</span></h2><p>Пройдёшь весь путь: выберешь визуальный стиль, создашь сайт с AI и опубликуешь его по ссылке. Затем соберёшь QR-меню и упакуешь готовую работу в кейс для портфолио.</p></div>
        <div className="results-grid">{courseResults.map((item) => <article className="result-card" key={item.title} data-reveal><div className={`result-media${item.contain ? " contain" : ""}`}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><div className="result-copy"><span>УЧЕБНЫЙ ПРОЕКТ ИЗ КУРСА</span><h3>{item.title}</h3><p>{item.text}</p>{item.href && <a href={item.href} target="_blank" rel="noreferrer">{item.linkLabel}</a>}</div></article>)}</div>
      </section>

      <section className="about section dark" id="about">
        <div className="section-kicker">03 / О КУРСЕ</div>
        <div className="about-grid">
          <div data-reveal><h2 className="display-title">ОТ ИДЕИ ДО ПУБЛИКАЦИИ<br /><span>ЗА 5 УРОКОВ</span></h2><p className="lead">AI помогает собрать первый черновик. Дальше ты работаешь над результатом: подбираешь референсы, задаёшь визуальное направление, дорабатываешь блоки в Figma и создаёшь изображения и анимацию под выбранный стиль.</p><p className="lead">На курсе пройдёшь этот процесс на своей теме — от идеи до опубликованного сайта. Этот же подход сможешь использовать в следующих проектах.</p>
            <div className="process-line" aria-label="Пять шагов курса">{['Идея и референсы', 'Визуальный стиль', 'AI-визуалы и анимация', 'Публикация', 'Кейс в портфолио'].map((item) => <span key={item}>{item}</span>)}</div>
            <p className="ai-note"><b>Тему сайта выбираешь сам.</b> Все AI-инструменты осваиваешь на реальных задачах, а не на отдельных упражнениях.</p></div>
          <div className="about-art art-frame" data-reveal><Image src="/assets/about-process.png" alt="3D-композиция процесса создания продукта" fill sizes="(max-width: 800px) 100vw, 44vw" /></div>
        </div>
      </section>

      <section className="audience section pink" id="audience">
        <div className="audience-shell">
          <div className="section-kicker">04 / ПРИСОЕДИНЯЙСЯ, ЕСЛИ</div>
          <h2 className="display-title" data-reveal>КОМУ<br /><span>ПОДОЙДЁТ</span></h2>
          <div className="audience-grid">{audience.map((a) => <article className="audience-card" key={a.title} data-reveal><div className="mini-icon"><Image src={a.image} alt="" fill sizes="160px" /></div><h3>{a.title}</h3><p>{a.text}</p><div className="audience-benefit"><b>Что получишь</b><span>{a.benefit}</span></div></article>)}</div>
        </div>
      </section>

      <section className="learning section" id="learning">
        <div className="section-kicker">05 / КАК ПРОХОДИТ КУРС</div>
        <h2 className="display-title" data-reveal>СМОТРИШЬ. ПРИМЕНЯЕШЬ.<br /><span>ДОРАБАТЫВАЕШЬ. ПУБЛИКУЕШЬ.</span></h2>
        <div className="learning-steps" data-reveal>{learningSteps.map((step, i) => <div key={step.title}><div className="learning-step-icon" aria-hidden="true"><Image src={step.image} alt="" fill sizes="(max-width: 560px) 96px, 120px" /></div><div className="learning-step-copy"><span className="learning-step-number">0{i + 1}</span><b>{step.title}</b><p>{step.text}</p></div></div>)}</div>
        <div className="learning-facts" data-reveal><div><span>ФОРМАТ</span><b>Подготовка + 5 видеоуроков</b></div><div><span>ДЛИТЕЛЬНОСТЬ</span><b>3 минуты подготовки и 11–17 минут на урок</b></div><div><span>ТЕМП</span><b>Проходишь и практикуешься в своём ритме</b></div><div><span>УСТРОЙСТВА</span><b>Уроки 1–3 и 5 — компьютер, урок 4 — телефон</b></div><div><span>ДОСТУП</span><b>Сразу после покупки</b></div></div>
      </section>

      <section className="program section dark" id="program">
        <div className="section-kicker">06 / ПРОГРАММА</div><div className="program-title" data-reveal><span className="giant-five">5</span><h2>ШАГОВ<br /><em>ПРОГРАММА КУРСА ✦</em></h2></div>
        <div className="lesson-list">{lessons.map((lesson) => <article className="lesson-card" key={lesson.n} data-reveal><div className="lesson-number">{lesson.n}</div><div className="lesson-icon"><Image src={lesson.image} alt="" fill sizes="180px" /></div><div className="lesson-main"><h3>{lesson.title}</h3><p>{lesson.text}</p></div><div className="lesson-info"><div><span>ИНСТРУМЕНТЫ</span><b>{lesson.role}</b></div><div><span>РЕЗУЛЬТАТ</span><b>{lesson.result}</b></div></div></article>)}</div>
        <div className="program-cta"><a className="button primary" href="#pricing">Начать курс — от $10</a></div>
      </section>

      <section className="pricing section" id="pricing">
        <div className="pricing-head" data-reveal>
          <div><div className="section-kicker">07 / ТАРИФЫ</div><h2>ВЫБЕРИ<br /><span>СВОЙ СТАРТ ✦</span></h2></div>
          <p>В обоих тарифах — весь курс и материалы. В тарифе с поддержкой дополнительно доступны чат участников и один персональный разбор вопроса по твоему проекту.</p>
        </div>
        <div className="pricing-grid">
          <article className="pricing-card" data-reveal>
            <div className="pricing-card-top"><span className="pricing-label">САМОСТОЯТЕЛЬНО</span><strong>$10</strong></div>
            <h3>ЛЁГКИЙ<br />СТАРТ</h3>
            <p className="pricing-description">Для тех, кто хочет освоить процесс самостоятельно и практиковаться в своём темпе.</p>
            <ul><li>5 практических уроков без лишней теории</li><li>Шпаргалка дизайнера: AI-инструменты, промпты и чек-листы</li><li>Практика на реальных задачах: сайт, мобильный продукт и кейс</li><li>Доступ ко всем материалам сразу после покупки</li><li>Доступ ко всем материалам навсегда</li></ul>
            <a className="button pricing-button" href="https://t.me/TinaPo" target="_blank" rel="noreferrer">КУПИТЬ КУРС — $10</a>
          </article>

          <article className="pricing-card featured" data-reveal>
            <div className="pricing-card-top"><span className="pricing-label">С ПОДДЕРЖКОЙ</span><strong>$15</strong></div>
            <span className="pricing-badge">ЛУЧШИЙ ВЫБОР</span>
            <h3>СТАРТ<br />ВМЕСТЕ</h3>
            <p className="pricing-description">Для тех, кому важно делиться прогрессом, видеть работы других и получить помощь в сложный момент.</p>
            <ul><li>Всё, что входит в «Лёгкий старт»</li><li>Общий Telegram-чат участников курса</li><li>Обмен работами, идеями и полезными находками</li><li>Один персональный разбор вопроса по твоему проекту</li></ul>
            <a className="button pricing-button light" href="https://t.me/TinaPo" target="_blank" rel="noreferrer">КУПИТЬ С ПОДДЕРЖКОЙ — $15</a>
          </article>
        </div>
      </section>

      <section className="author section" id="author">
        <div className="author-photo" data-reveal><Image src="/assets/kristina-poliakova.jpeg" alt="Kristina Poliakova, Product Designer" fill sizes="(max-width: 800px) 100vw, 44vw" /></div>
        <div className="author-copy" data-reveal><div className="section-kicker">08 / ОБ АВТОРЕ</div><h2>KRISTINA<br /><span>POLIAKOVA</span></h2><p>Я Product Designer с 8+ годами опыта в UI/UX и более чем 10 годами в дизайне. Работала с SaaS, fintech, Web3, gaming, healthcare, мобильными приложениями и сложными digital-продуктами.</p><p>На этом курсе я показываю, как соединить дизайн и AI в одном процессе: от референсов и визуального стиля до работающего сайта и кейса в портфолио. Чтобы ты не просто повторил учебный пример, а понял, как подойти к следующему проекту.</p><div className="author-tags"><span>REAL PRODUCT EXPERIENCE</span><span>AI-ASSISTED WORKFLOW</span></div></div>
      </section>

      <section className="faq section dark" id="faq">
        <div className="section-kicker">09 / FAQ</div>
        <div className="faq-layout">
          <h2 className="display-title" data-reveal>ВОПРОСЫ<br /><span>ПЕРЕД СТАРТОМ</span></h2>
          <div className="faq-list" data-reveal>
            {faq.map((item, index) => {
              const isOpen = openFaq === index;
              const panelId = `faq-panel-${index}`;
              return <article className={isOpen ? "faq-item open" : "faq-item"} key={item.q}>
                <button className="faq-question" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenFaq(isOpen ? null : index)}>
                  <span>{item.q}</span><i aria-hidden="true">+</i>
                </button>
                <div className="faq-answer" id={panelId} aria-hidden={!isOpen}>
                  <div className="faq-answer-inner">
                    {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {item.bullets && <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                  </div>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="final-cta compact-cta section" id="start">
        <div data-reveal>
          <h2 className="display-title">ТВОЙ ПЕРВЫЙ САЙТ<br /><span>МОЖЕТ БЫТЬ ОНЛАЙН УЖЕ ПОСЛЕ 5 УРОКОВ</span></h2>
          <p className="lead">Освой процесс создания сайтов с AI: от визуального стиля до публикации. Закрепи его на своём проекте, собери QR-меню и оформи кейс для портфолио.</p>
          <a className="button primary" href="#pricing">Начать курс — от $10</a>
          <p className="cta-meta">5 практических уроков · доступ навсегда · свой темп</p>
          <p className="cta-support">Остались вопросы? <a href="https://t.me/TinaPo" target="_blank" rel="noreferrer">Напиши в Telegram</a></p>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span>✦</span> Дизайн без воды <i>с помощью AI</i></a>
        <div className="footer-links"><a href="#about">О курсе</a><a href="#program">Программа</a><a href="#pricing">Тарифы</a><a href="#faq">FAQ</a></div>
        <div className="contacts"><span>Email:</span><a href="mailto:Tina.polyakova27@gmail.com">Tina.polyakova27@gmail.com</a><a href="https://t.me/TinaPo" target="_blank" rel="noreferrer">Telegram</a></div>
        <div className="legal-links">
          <button type="button" onClick={() => setLegalOpen("terms")}>Политика использования</button>
          <button type="button" onClick={() => setLegalOpen("privacy")}>Политика конфиденциальности</button>
          <button type="button" onClick={() => setLegalOpen("refunds")}>Условия возврата средств</button>
        </div>
        <p>© 2026 Kristina Poliakova</p>
      </footer>

      {legalOpen && <div className="legal-backdrop" role="presentation" onMouseDown={() => setLegalOpen(null)}>
        <section className="legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="legal-close" type="button" aria-label="Закрыть" onClick={() => setLegalOpen(null)} autoFocus>×</button>
          <p className="section-kicker">ДИЗАЙН БЕЗ ВОДЫ С ПОМОЩЬЮ AI</p>
          <h2 id="legal-title">{legalDocuments[legalOpen].label}</h2>
          {legalDocuments[legalOpen].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="legal-contact">Вопросы: <a href="mailto:Tina.polyakova27@gmail.com">Tina.polyakova27@gmail.com</a> · <a href="https://t.me/TinaPo" target="_blank" rel="noreferrer">Telegram</a></div>
        </section>
      </div>}
    </main>
  );
}
