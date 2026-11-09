document.addEventListener('DOMContentLoaded', () => {
  // --- ЛОГИКА ТЕМЫ ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    body.classList.add('light-theme');
    setSunIcon();
  } else {
    setMoonIcon();
  }

  themeToggleBtn.addEventListener('click', () => {
    body.classList.add('theme-transition');
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
      setSunIcon();
    } else {
      localStorage.setItem('theme', 'dark');
      setMoonIcon();
    }

    setTimeout(() => {
      body.classList.remove('theme-transition');
    }, 800);
  });

  function setSunIcon() {
    themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
  }

  function setMoonIcon() {
    themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
  }

  // --- ЛОГИКА ПЕРЕВОДА ---
  const langToggleBtn = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'ru';

  const translations = {
    ru: {
      heroTitle: 'Твой старт в <span class="gradient-text">крипте</span>',
      heroSubtitle: 'Никаких вложений. Только проверенные площадки, где можно начать зарабатывать уже сегодня.',
      earnTitle: 'Выбери площадку для старта',
      earnSubtitle: 'Зарегистрируйся по ссылкам ниже. Это бесплатно, безопасно и откроет тебе доступ к торговле и бонусам.',
      btnDeriw: 'Начать торговать на DeriW',
      btnDeriwSub: 'Без KYC. Бонусы новичкам.',
      btnBybit: 'Регистрация на Bybit',
      btnBybitSub: 'Крупнейшая биржа. Работает через VPN.',
      feat1Title: 'Без вложений',
      feat1Desc: 'Для старта тебе не нужны деньги. Только время и желание разобраться.',
      feat2Title: 'Только проверенное',
      feat2Desc: 'Мы не даем ссылки на скам. Только площадки с реальными выплатами.',
      feat3Title: 'Быстрый старт',
      feat3Desc: 'Регистрация занимает 2 минуты. Начать торговать можно сразу же.',
      disclaimer: 'Важно: никогда не вводи приватные ключи и не плати за «гарантированный доход». Это не финансовый совет.',
      navStart: 'Начать'
    },
    en: {
      heroTitle: 'Your crypto <span class="gradient-text">start</span>',
      heroSubtitle: 'No investments. Only verified platforms where you can start earning today.',
      earnTitle: 'Choose a platform to start',
      earnSubtitle: 'Register using the links below. It is free, safe, and gives you access to trading and bonuses.',
      btnDeriw: 'Start trading on DeriW',
      btnDeriwSub: 'No KYC. Bonuses for newbies.',
      btnBybit: 'Register on Bybit',
      btnBybitSub: 'Largest exchange. Works via VPN.',
      feat1Title: 'No investments',
      feat1Desc: 'You don\'t need money to start. Just time and desire to learn.',
      feat2Title: 'Verified only',
      feat2Desc: 'We don\'t link to scams. Only platforms with real payouts.',
      feat3Title: 'Fast start',
      feat3Desc: 'Registration takes 2 minutes. You can start trading immediately.',
      disclaimer: 'Important: never enter private keys and do not pay for "guaranteed income". This is not financial advice.',
      navStart: 'Start'
    }
  };

  function applyLanguage(lang) {
    document.getElementById('hero-title').innerHTML = translations[lang].heroTitle;
    document.getElementById('hero-subtitle').textContent = translations[lang].heroSubtitle;
    document.getElementById('earn-title').textContent = translations[lang].earnTitle;
    document.getElementById('earn-subtitle').textContent = translations[lang].earnSubtitle;
    document.getElementById('btn-deriw').textContent = translations[lang].btnDeriw;
    document.getElementById('btn-deriw-sub').textContent = translations[lang].btnDeriwSub;
    document.getElementById('btn-bybit').textContent = translations[lang].btnBybit;
    document.getElementById('btn-bybit-sub').textContent = translations[lang].btnBybitSub;
    document.getElementById('feat1-title').textContent = translations[lang].feat1Title;
    document.getElementById('feat1-desc').textContent = translations[lang].feat1Desc;
    document.getElementById('feat2-title').textContent = translations[lang].feat2Title;
    document.getElementById('feat2-desc').textContent = translations[lang].feat2Desc;
    document.getElementById('feat3-title').textContent = translations[lang].feat3Title;
    document.getElementById('feat3-desc').textContent = translations[lang].feat3Desc;
    document.getElementById('disclaimer').textContent = translations[lang].disclaimer;
    document.getElementById('nav-start').textContent = translations[lang].navStart;
    
    langToggleBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
  }

  applyLanguage(currentLang);

  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
  });
});