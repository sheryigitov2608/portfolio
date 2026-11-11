'use client';

import { useState, useEffect, useRef } from 'react';

const FULL_TEXT = `Исм: Шерйигитов Лазизбек
Туғилган сана: 19.11.2008
Касб: Фронтенд Дастурчи
Йўналиш: Веб Дастурлаш
Стек: React / Next.js / TypeScript / Vue.js
Жойлашув: Ўзбекистон, Тошкент вил., Оққўрғон

lazizbek@resume:~$ cat about.txt
Мен замонавий веб-иловалар ва фойдаланувчига қулай интерфейслар яратишга ихтисослашган
Фронтенд Дастурчиман. Кўплаб жамоавий ва шахсий лойиҳаларда ишлаганман.
Асосан React, Next.js, TypeScript, Vue.js ва Tailwind CSS билан ишлайман.
Шунингдек, Telegram ботлар (Mini Apps) яратишда ҳам тажрибам бор.
Фронтенд йўналиши бўйича дарс бериш, видео монтаж, маъмурият (администраторлик) ва
СИ (AI) ёрдамида расм/видео генерация қилиш қўлимдан келади.
Ҳозирда бэкенд дастурлаш ва мобил иловалар яратишни тўлиқ ўзлаштириш устида ишламоқдаман.

lazizbek@resume:~$ ls skills/
[ФРОНТЕНД]: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Vue.js, Tailwind CSS, Telegram Mini Apps
[ҚЎШИМЧА_КЎНИКМАЛАР]: AI Расм/Видео Генерация, Видео Монтаж, Менторинг, Маъмурият
[ЎРГАНМОҚДАМАН]: React Native, Python, FastAPI, Flask

lazizbek@resume:~$ cat capabilities.txt
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

lazizbek@resume:~$ ls projects/
[ 01 — KASPRO ]
Телеграм мини илова. Касаба уюшмаси аъзолари учун хизматларни рақамлаштириш.
Стек: Next.js, TypeScript, Tailwind, PostgreSQL, Prisma.

[ 02 — SLIDEA ]
СИ ёрдамида тақдимот яратувчи веб платформа. PDF ва Телеграм бот интеграцияси.
Стек: React, TypeScript, Next.js, Tailwind, FastAPI.

[ 03 — MENUCRAFT ]
Ресторан ва кафелар учун рақамли меню платформаси.
Стек: React, Next.js, TypeScript, Tailwind.

[ 04 — SMARTEDU ]
Таълимни бошқариш тизими (Давомат, молия, ҳисобот, чат).
Стек: React, TypeScript, Next.js, Tailwind.

lazizbek@resume:~$ cat experience.log
[ IT АКАДЕМИЯСИ ]
→ Асосий Устоз (1.5 йил)
→ Маъмур (6 ой)
→ Ёрдамчи Ўқитувчи (6 ой)

[ ШАХСИЙ РИВОЖЛАНИШ ]
Кўплаб жамоавий (KasPro) ва шахсий (Slidea, MenuCraft, SmartEdu)
лойиҳалар орқали амалий тажриба тўпланган.

lazizbek@resume:~$ cat education.txt
[ Тошкент Халқаро Молиявий Бошқарув ва Технологиялар Университети (TIFT) ]
Йўналиш: Бакалавр (1-курс талабаси)
Давр: 2026 — Ҳозиргача

lazizbek@resume:~$ ls certificates/
- Introduction to Generative AI (Google Cloud / Coursera, 2026)
- Build AI Apps with ChatGPT, Dall-E, and GPT-4 (Scrimba / Coursera, 2026)
- IoT Wireless & Cloud Computing (Yonsei University / Coursera, 2026)
- Algorithm and Program Design (Huawei ICT Academy, 2026)
- Фронтенд Дастурлаш (UNIPRO IT Академияси, 2024)

lazizbek@resume:~$ cat languages.txt
Ўзбек тили: Она тили (Мукаммал)
Рус тили: Ўрганмоқдаман
Инглиз тили: Бошланғич

lazizbek@resume:~$ ./contact.sh
GitHub: github.com/sheryigitov2608
Telegram: t.me/laz1zbek2608
Email: sheryigigtovlazizbek@gmail.com
Телефон: +998 70 225 25 46

lazizbek@resume:~$ `;

const CHAR_SPEED = 15;

export default function Home() {
  const [displayed, setDisplayed] = useState('');
  const [terminalState, setTerminalState] = useState<'TYPING' | 'PROMPTING' | 'FINISHED'>('TYPING');
  const [promptAnswer, setPromptAnswer] = useState('');
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
    const lastShown = localStorage.getItem('typingLastShown');
    const now = Date.now();
    
    if (lastShown && now - parseInt(lastShown) < 10 * 60 * 1000) {
      setDisplayed(FULL_TEXT);
      setTerminalState('PROMPTING');
      return;
    }
    
    localStorage.setItem('typingLastShown', now.toString());

    const interval = setInterval(() => {
      if (indexRef.current >= FULL_TEXT.length) {
        clearInterval(interval);
        setTerminalState('PROMPTING');
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
  }, [displayed, terminalState, promptAnswer]);

  useEffect(() => {
    if (terminalState !== 'PROMPTING') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore modifier keys or long keys like Shift/Enter
      if (e.ctrlKey || e.altKey || e.metaKey || e.key.length !== 1) return;
      
      const key = e.key;
      setPromptAnswer(key);
      setTerminalState('FINISHED');
      
      if (key.toLowerCase() === 'y') {
        // Trigger download
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Lazizbek_Sheryigitov_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalState]);

  const renderText = () => {
    const lines = displayed.split('\n');
    return lines.map((line, i) => {
      const isLast = i === lines.length - 1;
      return (
        <span key={i}>
          {line}
          {isLast && terminalState === 'TYPING' && <span className="cursor" />}
          {!isLast && <br />}
        </span>
      );
    });
  };

  return (
    <div
      style={{
        padding: '16px 20px',
        minHeight: '100vh',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      {renderText()}
      {terminalState === 'PROMPTING' && (
        <span>
          ./download_resume.sh<br/>
          Резюмени юклаб олишни истайсизми? [Y/n]: <span className="cursor" />
        </span>
      )}
      {terminalState === 'FINISHED' && (
        <span>
          ./download_resume.sh<br/>
          Резюмени юклаб олишни истайсизми? [Y/n]: {promptAnswer}<br/>
          {promptAnswer.toLowerCase() === 'y' ? '[OK] Резюме юклаб олинмоқда...' : '[CANCEL] Бекор қилинди.'}<br/>
          <br/>
          lazizbek@resume:~$ <span className="cursor" />
        </span>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
