"use client";

import { useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

function Image({ fill, style, ...props }: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) {
  return <img {...props} style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", color: "transparent", ...style } : style} />;
}

const projects = [
  { n: "01", tag: "STAY", title: "Бронирование жилья", flow: "Search → Results → Property → Booking", image: "assets/project-stay.png", alt: "3D-модель современного дома" },
  { n: "02", tag: "BEAUTY", title: "Запись в салон / SPA", flow: "Search → Service → Date & Time → Booking", image: "assets/project-beauty.png", alt: "3D-модель салонного кресла" },
  { n: "03", tag: "TABLE", title: "Бронирование ресторана", flow: "Search → Restaurant → Date & Time → Booking", image: "assets/project-table.png", alt: "3D-модель ресторанного столика" },
];

const audience = [
  { title: "Новичкам", text: "Хочу попробовать UI/UX и понять, подходит ли мне профессия.", image: "assets/audience-start.png" },
  { title: "Тем, кто знает Figma, но нет системы", text: "Хочу понять полный продуктовый процесс.", image: "assets/audience-system.png" },
  { title: "Тем, кто хочет использовать AI в дизайне", text: "Хочу ускорять работу, а не заменять мышление.", image: "assets/audience-ai.png" },
  { title: "Фрилансерам и начинающим дизайнерам", text: "Хочу законченный проект, который можно показать.", image: "assets/audience-case.png" },
];

const lessons = [
  { n: "01", title: "RESEARCH + AI", text: "Анализируем рынок и конкурентов, собираем отзывы пользователей, находим повторяющиеся проблемы и превращаем их в продуктовые решения.", role: "Researcher", result: "Research board + 5 product conclusions", image: "assets/lesson-research.png" },
  { n: "02", title: "UX + AI", text: "User Flow → wireframes → 4 ключевых экрана → low-fi prototype. Проверяем основной сценарий до визуального дизайна.", role: "UX Critic", result: "Проверенный UX-сценарий", image: "assets/lesson-ux.png" },
  { n: "03", title: "UI + AI", text: "Desktop UI, сетка, typography, color, spacing, hierarchy, Auto Layout и реальный контент.", role: "Content Creator", result: "4 готовых desktop UI screens", image: "assets/lesson-ui.png" },
  { n: "04", title: "SYSTEM + RESPONSIVE + MOTION", text: "Components, variants, states, responsive. Один ключевой экран адаптируем desktop → tablet → mobile и добавляем microanimations.", role: "UI Assistant", result: "Mini design system + responsive + motion", image: "assets/lesson-responsive.png" },
  { n: "05", title: "AI DEVELOPMENT", text: "Переносим готовый дизайн в работающий frontend с Claude Code / Codex, проверяем responsive, interactions и соответствие Figma.", role: "Developer", result: "Живой responsive web product", image: "assets/lesson-development.png" },
];

const path = ["Research board", "User Flow + prototype", "Desktop UI", "Design System + Responsive", "LIVE PRODUCT"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));
    const onScroll = () => setScroll(Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { reveal.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="scroll-progress" style={{ width: `${scroll}%` }} />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}><span>✦</span> Дизайн без воды</a>
        <button className="menu-toggle" aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "≡"}</button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Основная навигация">
          <a href="#about" onClick={closeMenu}>О курсе</a><a href="#audience" onClick={closeMenu}>Кому подойдёт</a><a href="#program" onClick={closeMenu}>Программа</a><a href="#author" onClick={closeMenu}>Автор</a>
        </nav>
        <a className="header-cta" href="https://t.me/TinaPo" target="_blank" rel="noreferrer">Хочу на курс ↗</a>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">МИНИ-КУРС ПО PRODUCT DESIGN</p>
          <h1>ДИЗАЙН<br /><span>БЕЗ ВОДЫ</span></h1>
          <h2>С нуля до живого сайта: дизайн + AI + код</h2>
          <p className="hero-text">Создай свой первый digital-продукт за 5 уроков и собери его в браузере с помощью AI.</p>
          <div className="button-row"><a className="button primary" href="https://t.me/TinaPo" target="_blank" rel="noreferrer">ХОЧУ НА КУРС <span>↗</span></a><a className="button secondary" href="#program">ПРОГРАММА ↓</a></div>
          <div className="hero-meta"><span>5 уроков</span><span>свой темп</span><span>доступ сразу</span></div>
        </div>
        <div className="hero-art art-frame" data-reveal>
          <div className="orb orb-one" /><div className="orb orb-two" /><Image src="assets/hero-course.png" alt="3D-композиция о дизайне и AI" fill sizes="(max-width: 800px) 100vw, 48vw" /><span className="floating-label label-one">UX</span><span className="floating-label label-two">AI ✦</span>
        </div>
      </section>

      <section className="about section dark" id="about">
        <div className="section-kicker">01 / О КУРСЕ</div>
        <div className="about-grid">
          <div data-reveal><h2 className="display-title">НЕ КНОПКИ.<br /><span>А ПРОЦЕСС.</span></h2><p className="lead">Это не курс про изучение кнопок Figma. За 5 уроков ты пройдёшь реальный процесс создания digital-продукта.</p>
            <div className="process-line" aria-label="Этапы курса">{['Research', 'UX', 'UI', 'Responsive', 'AI Development', 'Live Product'].map((item, i) => <span key={item}>{item}{i < 5 && <b>→</b>}</span>)}</div>
            <p className="ai-note"><b>AI работает рядом.</b> Исследует, критикует, пишет и кодит. Но продуктовые решения принимаешь ты.</p></div>
          <div className="about-art art-frame" data-reveal><Image src="assets/about-process.png" alt="3D-композиция процесса создания продукта" fill sizes="(max-width: 800px) 100vw, 44vw" /></div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-head" data-reveal><div><div className="section-kicker">02 / ПРАКТИКА</div><h2 className="display-title">ВЫБЕРИ<br /><span>СВОЙ ПРОЕКТ</span></h2></div><p>Одна понятная задача, четыре ключевых экрана и реальный путь до работающего продукта.</p></div>
        <div className="project-grid">{projects.map((p) => <article className="project-card" key={p.tag} data-reveal><div className="project-image"><Image src={p.image} alt={p.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><div className="project-copy"><div className="number-tag"><span>{p.n}</span><b>{p.tag}</b></div><h3>{p.title}</h3><p>{p.flow}</p></div></article>)}</div>
      </section>

      <section className="audience section pink" id="audience">
        <div className="section-kicker">03 / КОМУ ПОДОЙДЁТ</div><h2 className="display-title" data-reveal>ЕСЛИ ТЫ<br /><span>ХОЧЕШЬ НАЧАТЬ</span></h2>
        <div className="audience-grid">{audience.map((a, i) => <article className="audience-card" key={a.title} data-reveal><div className="mini-icon"><Image src={a.image} alt="" fill sizes="160px" /></div><span className="tiny-number">0{i + 1}</span><h3>{a.title}</h3><p>{a.text}</p></article>)}</div>
      </section>

      <section className="program section dark" id="program">
        <div className="section-kicker">04 / ПРОГРАММА</div><div className="program-title" data-reveal><span className="giant-five">5</span><h2>ШАГОВ<br /><em>ПРОГРАММА КУРСА ✦</em></h2></div>
        <div className="lesson-list">{lessons.map((lesson) => <article className="lesson-card" key={lesson.n} data-reveal><div className="lesson-number">{lesson.n}</div><div className="lesson-icon"><Image src={lesson.image} alt="" fill sizes="180px" /></div><div className="lesson-main"><h3>{lesson.title}</h3><p>{lesson.text}</p></div><div className="lesson-info"><div><span>AI ROLE</span><b>{lesson.role}</b></div><div><span>RESULT</span><b>{lesson.result}</b></div></div></article>)}</div>
      </section>

      <section className="result section">
        <div className="section-head" data-reveal><div><div className="section-kicker">05 / ФИНАЛ</div><h2 className="display-title">ИЗ ИДЕИ<br /><span>В LIVE PRODUCT</span></h2></div><p>Не учебный файл, который останется в Figma. А законченный продукт, который открывается в браузере.</p></div>
        <div className="result-stage" data-reveal><div className="path-list">{path.map((item, i) => <div className={i === 4 ? "path-item active" : "path-item"} key={item}><span>0{i + 1}</span><b>{item}</b>{i < 4 && <i>↓</i>}</div>)}</div><div className="result-art"><Image src="assets/live-product.png" alt="3D-композиция запущенного digital-продукта" fill sizes="(max-width: 800px) 100vw, 55vw" /></div></div>
      </section>

      <section className="author section" id="author">
        <div className="author-photo" data-reveal><Image src="assets/kristina-poliakova.jpeg" alt="Kristina Poliakova, Product Designer" fill sizes="(max-width: 800px) 100vw, 44vw" /><span className="photo-sticker">8+ YEARS<br />IN UI/UX</span></div>
        <div className="author-copy" data-reveal><div className="section-kicker">06 / ОБ АВТОРЕ</div><h2>KRISTINA<br /><span>POLIAKOVA</span></h2><h3>PRODUCT DESIGNER</h3><p>Я Product Designer с 8+ годами опыта в UI/UX и более чем 10 годами в дизайне. Работала с SaaS, fintech, Web3, gaming, healthcare, мобильными приложениями и сложными digital-продуктами.</p><p>Этот мини-курс я собрала, чтобы показать новичку реальный современный процесс создания продукта: без большой школы, месяцев подготовки и теории ради теории.</p><div className="author-tags"><span>REAL PRODUCT EXPERIENCE</span><span>AI-ASSISTED WORKFLOW</span></div></div>
      </section>

      <section className="final-cta section" id="final">
        <div className="final-copy" data-reveal><div className="section-kicker">ГОТОВА НАЧАТЬ?</div><h2>СОЗДАЙ СВОЙ<br />ПЕРВЫЙ ЖИВОЙ<br /><span>DIGITAL-ПРОДУКТ ✦</span></h2><p>5 практических уроков. Свой темп. Доступ сразу.</p><div className="price-row"><strong>€10</strong><a className="button light" href="https://t.me/TinaPo" target="_blank" rel="noreferrer">ХОЧУ НА КУРС ↗</a></div></div>
        <div className="final-art" data-reveal><Image src="assets/live-product.png" alt="3D-символ запуска проекта" fill sizes="(max-width: 800px) 100vw, 40vw" /></div>
      </section>

      <footer><a className="brand" href="#top"><span>✦</span> Дизайн без воды</a><div className="footer-links"><a href="#about">О курсе</a><a href="#program">Программа</a><a href="#author">Автор</a></div><div className="contacts"><a href="mailto:Tina.polyakova27@gmail.com">Email</a><a href="https://t.me/TinaPo" target="_blank" rel="noreferrer">Telegram ↗</a></div><p>© 2026 Kristina Poliakova</p></footer>
    </main>
  );
}
