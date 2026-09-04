'use client';

import { useState, useEffect, useRef } from 'react';

const FULL_TEXT = `$ whoami
--------------------------------------------------
Исм       : Шерйигитов Лазизбек
Туғилган сана : 19.11.2008
Касб      : Фронтенд Дастурчи
Йўналиш   : Веб Дастурлаш
Стек      : React / Next.js / TypeScript / Vue.js
Жойлашув  : Ўзбекистон, Тошкент вил., Оққўрғон
Ҳолат     : Иш изламоқдаман (Open to Work)
--------------------------------------------------

$ cat about.txt

Мен замонавий веб-иловалар ва фойдаланувчига қулай
интерфейслар яратишга ихтисослашган Фронтенд
Дастурчиман.

Кўплаб жамоавий ва шахсий лойиҳаларда ишлаганман.
Асосан React, Next.js, TypeScript, Vue.js ва Tailwind CSS
билан ишлайман. Шунингдек, Telegram ботлар (Mini Apps) 
яратишда ҳам тажрибам бор.

Фронтенд йўналиши бўйича дарс бериш, видео монтаж, 
маъмурият (администраторлик) ва СИ (AI) ёрдамида 
расм/видео генерация қилиш қўлимдан келади.

Ҳозирда бэкенд дастурлаш ва мобил иловалар яратишни
тўлиқ ўзлаштириш устида ишламоқдаман.

$ ls skills/
--------------------------------------------------
ФРОНТЕНД

HTML5
CSS3
JavaScript
TypeScript
React
Next.js
Vue.js
Tailwind CSS
Telegram Mini Apps
--------------------------------------------------
ҚЎШИМЧА КЎНИКМАЛАР

AI Расм ва Видео Генерация
Видео Монтаж
Таълим бериш (Менторинг)
Маъмурият (Администраторлик)
--------------------------------------------------
ЎРГАНМОҚДАМАН (БЭКЕНД & МОБИЛ)

React Native
Python / FastAPI / Flask
--------------------------------------------------

$ cat capabilities.txt

Мен қила оладиган ишлар:

→ Веб сайт ва лендинг пейж (landing page) яратиш
→ Responsive веб илова ишлаб чиқиш
→ React, Next.js ва Vue.js илова яратиш
→ TypeScript билан ишлаш
→ Замонавий ва чиройли UI яратиш
→ Қайта ишлатиладиган (reusable) компонентлар яратиш
→ REST API интеграцияси
→ Фронтенд-бэкенд интеграцияси
→ Framer Motion билан анимациялар
→ Git/GitHub билан версияларни бошқариш
→ Vercel орқали деплоймент (deployment)
→ Хатоларни топиш ва тузатиш (Debugging)
→ AI ёрдамида расм ва видео генерация қилиш
→ Фронтенд йўналишида дарс ўтиш

$ ls projects/
--------------------------------------------------

01 — KASPRO
ТЕЛЕГРАМ МИНИ ИЛОВА (TELEGRAM MINI APP)

Касаба уюшмаси аъзолари учун хизматларни
рақамлаштиришга мўлжалланган платформа.
Санаторий йўлланмалари, чегирмалар, аризалар,
QR-верификация, молия ва ҳисоботларни бошқариш
функциялари ишлаб чиқилган.

Стек: Next.js, TypeScript, Tailwind CSS, 
       PostgreSQL, Prisma, Telegram Mini App.
--------------------------------------------------

02 — SLIDEA
СУНЪИЙ ИНТЕЛЛЕКТ ЁРДАМИДА ТАҚДИМОТ ЯРАТУВЧИ

Сунъий интеллект ёрдамида тақдимотлар
яратишга мўлжалланган веб платформа.
Тақдимот яратиш жараёнини автоматлаштириш,
PDF билан ишлаш ва Телеграм бот интеграцияси
йўналишлари ишлаб чиқилган.

Стек: React, TypeScript, Next.js,
       Tailwind CSS, FastAPI.
--------------------------------------------------

03 — MENUCRAFT
РАҚАМЛИ МЕНЮ ПЛАТФОРМАСИ

Ресторан ва кафелар учун замонавий рақамли
меню платформаси. Менюларни қулай кўрсатиш,
категориялар бўйича тартиблаш ва мобил
қурилмаларга мос responsive интерфейс
ишлаб чиқилган.

Стек: React, Next.js, TypeScript, Tailwind CSS.
--------------------------------------------------

04 — SMARTEDU
ТАЪЛИМНИ БОШҚАРИШ ТИЗИМИ

Таълим муассасаларидаги жараёнларни
рақамлаштириш ва бошқаришга мўлжалланган
платформа. Dashboard, давомат, молия,
ҳисоботлар, чат, календарь, файллар, вазифалар
ва фойдаланувчи ролларини бошқариш
функциялари ишлаб чиқилган.

Стек: React, TypeScript, Next.js, Tailwind CSS.
--------------------------------------------------

$ cat experience.log

ИШ ТАЖРИБАСИ

[ IT АКАДЕМИЯСИ ]
→ Асосий Устоз (Ментор) | 1.5 йил
→ Маъмур (Администратор) | 6 ой
→ Ёрдамчи Ўқитувчи | 6 ой

ШАХСИЙ РИВОЖЛАНИШ ТАЖРИБАСИ
Кўплаб жамоавий (KasPro) ва шахсий (Slidea, 
MenuCraft, SmartEdu) лойиҳалар орқали амалий 
тажриба тўплаганман.

$ cat education.txt
--------------------------------------------------
[ Тошкент Халқаро Молиявий Бошқарув ва 
  Технологиялар Университети (TIFT) ]
Йўналиш: Бакалавр (1-курс талабаси)
Давр: 2026 — Ҳозиргача
--------------------------------------------------

$ find certificates/
--------------------------------------------------
[ Introduction to Generative AI ]
Google Cloud (Coursera) — 2026 йил Март
--------------------------------------------------
[ Build AI Apps with ChatGPT, Dall-E, and GPT-4 ]
Scrimba (Coursera) — 2026 йил Март
--------------------------------------------------
[ IoT Wireless & Cloud Computing ]
Yonsei University (Coursera) — 2026 йил Март
--------------------------------------------------
[ Algorithm and Program Design ]
Huawei ICT Academy — 2026 йил Март
--------------------------------------------------
[ Фронтенд Дастурлаш ]
UNIPRO IT Академияси — 2024 йил
--------------------------------------------------

$ cat languages.txt

Ўзбек тили  : Она тили (Мукаммал)
Рус тили    : Ўрганмоқдаман
Инглиз тили : Бошланғич

$ ./contact.sh
--------------------------------------------------
GitHub   : github.com/sheryigitov2608
Telegram : t.me/laz1zbek2608
Email    : sheryigigtovlazizbek@gmail.com
Телефон  : +998 70 225 25 46
--------------------------------------------------
Жойлашув : Ўзбекистон, Оққўрғон
Ҳолат    : Иш изламоқдаман (Open to Work)`;

const CHAR_SPEED = 18;

export default function Home() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const userScrolledUp = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;
      userScrolledUp.current = distanceFromBottom > 60;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current >= FULL_TEXT.length) {
        clearInterval(interval);
        setDone(true);
        return;
      }
      indexRef.current += 1;
      setDisplayed(FULL_TEXT.slice(0, indexRef.current));
    }, CHAR_SPEED);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!userScrolledUp.current) {
      bottomRef.current?.scrollIntoView({ block: 'nearest' });
    }
  }, [displayed]);

  const renderText = () => {
    const lines = displayed.split('\n');
    return lines.map((line, i) => {
      const isLast = i === lines.length - 1;
      return (
        <span key={i}>
          {line}
          {isLast && !done && <span className="cursor" />}
          {!isLast && <br />}
        </span>
      );
    });
  };

  return (
    <div
      style={{
        padding: '20px 24px',
        minHeight: '100vh',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      {renderText()}
      {done && <span className="cursor" />}
      <div ref={bottomRef} />
    </div>
  );
}
