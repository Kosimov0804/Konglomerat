/* ============================================================
   KONGLOMERAT — main.js
   Theme switch · i18n (UZ/RU/EN) · AI chat · Login · Modules
   Pure front-end demo prototype. No backend required.
   ============================================================ */

/* ----------------------------------------------------------
   1. TRANSLATIONS  (data-i18n="key")
   ---------------------------------------------------------- */
const I18N = {
  uz: {
    "tagline": "Milliy AI biznes OS",
    "nav.about": "Biz haqimizda",
    "nav.showrooms": "Shourumlar",
    "nav.news": "Yangiliklar",
    "nav.contact": "Aloqa",
    "nav.ai": "AI yordamchi",
    "nav.favorites": "Saralangan",
    "fav.title": "Saralangan mahsulotlar",
    "fav.sub": "Siz yoqtirgan mahsulotlar shu yerda saqlanadi.",
    "fav.empty": "Hozircha saralangan mahsulot yo'q.",
    "fav.emptyHint": "Katalogdagi mahsulotlarda ❤ belgisini bosing.",
    "fav.browse": "Katalogga o'tish",
    "fav.signinTitle": "Email orqali kiring",
    "fav.signinSub": "Saralanganlaringiz shu email'ga bog'lanadi va istalgan qurilmada ochiladi.",
    "fav.signinOk": "Kirish",
    "fav.switch": "Emailni almashtirish",
    "fav.badEmail": "To'g'ri email kiriting",
    "fav.signedin": "Xush kelibsiz",
    "fav.signedAs": "Siz kirdingiz:",
    "btn.login": "Akkauntga kirish",
    "btn.logout": "Chiqish",
    "notif.title": "Bildirishnomalar",
    "notif.empty": "Bildirishnomalar yo'q",

    "hero.eyebrow": "30 kompaniya · 1 platforma",
    "hero.title1": "Milliy",
    "hero.title2": "Konglomerat",
    "hero.title3": "AI boshqaruvida",
    "hero.lead": "Direktor boshqaruvidagi 30 kompaniyani birlashtiruvchi yagona ekotizim. Shourumlar, investitsiyalar, R&D, eksport va analitika — barchasi bir joyda.",
    "hero.cta1": "Platformaga kirish",
    "hero.cta2": "Shourumlarni ko'rish",
    "stat.companies": "Kompaniyalar",
    "stat.modules": "Modullar",
    "stat.blocks": "Boshqaruv bloklari",
    "stat.ai": "AI yordamchi",

    "about.eyebrow": "Biz haqimizda",
    "about.title": "Konglomerat konsepsiyasi",
    "about.lead": "Konglomerat — bu 30 milliy kompaniyani yagona sun'iy intellekt boshqaruvi ostida birlashtiruvchi davlat miqyosidagi raqamli platforma.",
    "about.c1.t": "Yagona boshqaruv",
    "about.c1.d": "Direktor barcha kompaniyalarni bitta nazorat panelidan kuzatadi va boshqaradi.",
    "about.c2.t": "AI yadrosi",
    "about.c2.d": "Har bir jarayon sun'iy intellekt yordamchisi bilan jihozlangan.",
    "about.c3.t": "Milliy miqyos",
    "about.c3.d": "Eksport, investitsiya va xalqaro aloqalar yagona tizimda.",

    "show.eyebrow": "Shourumlar",
    "show.title": "Mahsulotlar katalogi",
    "show.sub": "Konglomerat kompaniyalarining interaktiv mahsulot katalogi.",
    "news.eyebrow": "Yangiliklar",
    "news.title": "Kompaniyalar lentasi",
    "news.sub": "Platformadagi kompaniyalardan dolzarb xabarlar.",
    "news.back": "Yangiliklar",
    "news.published": "E'lon qilingan",
    "news.more": "Boshqa yangiliklar",
    "news.notfound": "Yangilik topilmadi.",
    "news.post": "Yangilik joylash",
    "news.postDesc": "Sarlavha, matn va rasm qo'shing — yangilik lentaga chiqadi.",
    "news.f.title": "Sarlavha",
    "news.f.content": "Yangilik matni",
    "news.f.image": "Rasm",
    "news.f.upload": "Rasm yuklash",
    "photos.label": "Rasmlar (1–3)",
    "photos.add": "Rasm qo'shish",
    "news.f.publish": "E'lon qilish",
    "news.posted": "Yangilik e'lon qilindi!",

    "contact.eyebrow": "Aloqa",
    "contact.title": "Yagona call-markaz",
    "contact.phone": "Telefon",
    "contact.email": "Elektron pochta",
    "contact.office": "Bosh ofis",
    "contact.office.v": "Toshkent shahri, Shayxontohur tumani, Furqat ko'chasi, 1A-uy.",

    "ai.title": "AI Yordamchi",
    "ai.guestLimit": "3 ta bepul so'rov mavjud",
    "ai.placeholder": "Savolingizni yozing...",
    "ai.welcome": "Salom! Men Konglomerat AI yordamchisiman. Sizga qanday yordam bera olaman?",
    "ai.locked": "Bepul so'rovlar tugadi. Davom etish uchun tizimga kiring.",
    "ai.left": "ta bepul so'rov qoldi",

    "aichat.title": "AI Yordamchi",
    "aichat.status": "Onlayn · 24/7",
    "aichat.sub": "Konglomerat platformasi bo'yicha savollaringizni bering.",
    "aichat.s1": "Konglomerat nima?",
    "aichat.s2": "Qanday kompaniyalar bor?",
    "aichat.s3": "Shourumlarni qanday ko'raman?",
    "aichat.disclaimer": "AI yordamchi demo rejimida ishlamoqda.",
    "aichat.login.title": "Tizimga kirish",
    "aichat.login.sub": "Login va parol kiriting — AI suhbatiga kirasiz.",
    "aichat.login.user": "Login",
    "aichat.login.pass": "Parol",
    "aichat.login.enter": "Kirish →",
    "aichat.login.or": "YOKI",
    "aichat.login.email": "email@gmail.com",
    "aichat.login.emailBtn": "Email bilan davom etish",
    "aichat.login.demo": "Demo — AI bilan suhbat",
    "aichat.login.err": "Login yoki parol noto'g'ri.",
    "aichat.login.bademail": "To'g'ri email kiriting.",
    "aichat.offtopic": "Bu savol Konglomerat mavzusidan tashqarida. Iltimos, faqat Konglomerat haqida so'rang.",
    "aichat.locked": "3 ta bepul so'rov tugadi. Davom etish uchun tizimga kiring.",
    "aichat.left": "ta bepul so'rov qoldi",

    "login.title": "Tizimga kirish",
    "login.sub": "Akkauntingizga kiring",
    "login.email": "Login (Email)",
    "login.password": "Parol",
    "login.submit": "Kirish",
    "login.back": "Bosh sahifaga qaytish",
    "login.hint": "Demo: admin / admin123 yoki company1 / company123",
    "login.err.title": "Kirish xatosi",
    "login.err.msg": "Login yoki parol noto'g'ri.",
    "login.ok.title": "Muvaffaqiyatli",
    "login.ok.msg": "Yo'naltirilmoqda...",
    "form.required": "Bu maydonni to'ldiring.",
    "form.email": "To'g'ri email manzil kiriting.",
    "form.invalid": "Qiymat noto'g'ri.",

    "foot.rights": "Barcha huquqlar himoyalangan.",

    "prod.back": "Shourumlar",
    "prod.about": "Mahsulot haqida",
    "prod.company": "Kompaniya",
    "prod.price": "Narxi",
    "prod.buy": "Hoziroq sotib olish",
    "prod.orderTitle": "Buyurtma berish",
    "prod.name": "Ismingiz",
    "prod.contact": "Telefon",
    "prod.qty": "Miqdori",
    "prod.place": "Buyurtmani tasdiqlash",
    "prod.success": "Buyurtma qabul qilindi! Tez orada siz bilan bog'lanamiz.",
    "prod.notfound": "Mahsulot topilmadi.",
    "prod.feat1": "Kafolatlangan sifat",
    "prod.feat2": "Konglomerat tomonidan tasdiqlangan",
    "prod.feat3": "Butun mamlakat bo'ylab yetkazib berish",

    /* admin */
    "admin.brand": "Direktor paneli",
    "side.overview": "Umumiy ko'rinish",
    "side.control": "Boshqaruv paneli",
    "side.modules": "Modullar",
    "side.conferences": "Konferensiyalar",
    "side.chats": "Chatlar",
    "side.rnd": "R&D markaz",
    "side.reports": "Hisobotlar",
    "side.complaints": "Shikoyatlar",
    "comp.title": "Shikoyatlar boshqaruvi",
    "comp.sub": "Kompaniyalar va mehmonlardan kelgan shikoyatlar.",
    "comp.empty": "Hozircha shikoyatlar yo'q.",
    "comp.reply": "Javob berish",
    "comp.replyPh": "Javobingizni yozing...",
    "comp.send": "Javobni yuborish",
    "comp.resolve": "Hal qilindi deb belgilash",
    "comp.resolved": "Hal qilindi",
    "comp.pending": "Ko'rib chiqilmoqda",
    "comp.answer": "Administrator javobi",
    "comp.public.title": "Shikoyat yuborish",
    "comp.public.sub": "Muammo yoki taklifingizni yozing — administrator javob beradi.",
    "comp.f.name": "Ismingiz yoki kompaniya",
    "comp.f.contact": "Email yoki telefon",
    "comp.f.text": "Shikoyat matni",
    "comp.f.photos": "Rasm (ixtiyoriy)",
    "comp.f.addPhoto": "Rasm qo'shish",
    "comp.attachments": "Ilova qilingan rasmlar",
    "comp.attach": "Ilovalar",
    "comp.official": "Rasmiy xat (AI)",
    "comp.f.send": "Yuborish",
    "comp.sent": "Shikoyatingiz yuborildi! Tez orada javob beramiz.",
    "comp.link": "Shikoyat",
    "comp.back": "Shikoyatlarga",
    "comp.problem": "Muammo tavsifi",
    "comp.notfound": "Shikoyat topilmadi.",
    "comp.open": "Ochish",
    "cp.title": "Boshqaruv markazi",
    "cp.sub": "Konglomerat — 30 kompaniya yagona nazoratda",
    "cp.kuzatuv": "Kuzatuv",
    "cp.kuzatuv.badge": "Monitoring",
    "cp.control": "Boshqaruv",
    "cp.control.badge": "Control",
    "kpi.companies": "Faol kompaniyalar",
    "kpi.ai": "AI so'rovlari (bugun)",
    "kpi.startups": "Yangi startaplar",
    "kpi.showrooms": "Yuklangan shourumlar",
    "kpi.complaints": "Shikoyatlar",
    "chart.title": "AI yordamchi faolligi (hafta)",
    "chart.company": "Kompaniyalar tahlili (sektorlar)",
    "complaints.title": "So'nggi shikoyatlar",
    "control.confTitle": "Konferensiya yaratish",
    "control.confDesc": "Barcha 30 kompaniya uchun onlayn uchrashuv tashkil eting.",
    "control.confBtn": "Konferensiya yaratish",
    "control.repTitle": "Oylik umumiy hisobot",
    "control.repDesc": "Barcha kompaniyalar bo'yicha yagona hisobotni yarating.",
    "control.repBtn": "Monthly Report ALL",
    "modules.title": "Boshqaruv modullari",
    "modules.sub": "13 blok · 100 modul — har birini yoqing yoki sozlang.",
    "mod.settings": "Sozlamalar",
    "mod.on": "Yoqilgan",
    "mod.off": "O'chirilgan",

    "conf.title": "Konferensiyalarni boshqarish",
    "conf.sub": "30 kompaniya uchun onlayn uchrashuvlar yarating.",
    "conf.name": "Konferensiya nomi",
    "conf.date": "Sana",
    "conf.time": "Vaqt",
    "conf.desc": "Tavsif",
    "conf.link": "Konferensiya havolasi (Zoom/Meet)",
    "conf.open": "Havolani ochish",
    "conf.launch": "Ishga tushirish",
    "conf.upcoming": "Rejalashtirilgan uchrashuvlar",
    "conf.created": "Konferensiya yaratildi va kompaniyalarga yuborildi!",

    /* company */
    "co.brand": "Kompaniya kabineti",
    "co.title": "Ish maydoni",
    "co.sub": "Oltin Saroy MChJ — biznes boshqaruvi",
    "co.join": "Direktor yangi konferensiya yaratdi!",
    "co.joinBtn": "Join Conference",
    "co.content": "Kontent boshqaruvi",
    "co.addProduct": "Mahsulot qo'shish",
    "co.pname": "Mahsulot nomi",
    "co.pprice": "Narxi",
    "co.pdesc": "Tavsif",
    "co.save": "Saqlash",
    "co.publishNews": "Yangilik e'lon qilish",
    "co.ntitle": "Sarlavha",
    "co.publish": "E'lon qilish",
    "co.myReport": "Oylik hisobotim",
    "co.reportDesc": "Ushbu kompaniyaning individual oylik hisobotini ko'ring.",
    "co.viewReport": "Hisobotni ochish",
    "co.orders": "Xaridor buyurtmalari",
    "co.ordersSub": "Mahsulotlaringizga qiziqqan mijozlar va ularning kontaktlari.",
    "co.ordersEmpty": "Hozircha buyurtmalar yo'q.",
    "co.oProduct": "Mahsulot",
    "co.oQty": "Miqdori",
    "co.oBuyer": "Xaridor",
    "co.oContact": "Kontakt",
    "co.oDate": "Sana",
    "co.bizAi": "Biznes AI yordamchi",
    "co.bizAiNote": "Faqat konglomerat biznes mavzulari bo'yicha javob beradi.",
    "co.blocked": "Bu savol biznes mavzusidan tashqarida. Iltimos, biznes savolini bering.",
    "co.edit": "Tahrirlash",
    "co.delete": "O'chirish",
    "co.cancel": "Bekor qilish",
    "co.update": "Yangilash",
    "co.editProduct": "Mahsulotni tahrirlash",
    "co.updated": "Yangilandi",
    "co.deleted": "O'chirildi",
    "co.delConfirm": "Ushbu elementni o'chirilsinmi?",
    "news.edit": "Yangilikni tahrirlash",
    "news.list": "E'lon qilingan yangiliklar",
    "news.updated": "Yangilik yangilandi!",
    "news.empty": "Hozircha yangiliklar yo'q.",

    "chat.group": "Umumiy chat",
    "chat.groupWho": "31 ishtirokchi · Admin + 30 kompaniya",
    "chat.individual": "Shaxsiy chat",
    "chat.admin": "Admin chat",
    "chat.ai": "AI yordamchi",
    "chat.send": "Yuborish",
    "chat.typeMsg": "Xabar yozing...",
    "msg.edited": "tahrirlangan",
    "msg.editPrompt": "Xabarni tahrirlash:",
    "msg.sending": "Yuborilmoqda",
    "msg.failed": "Yuborilmadi",
    "msg.sent": "Yuborildi",
    "msg.seen": "Ko'rildi",
    "msg.seenBy": "Kim ko'rgan",
    "msg.noSeen": "Hali hech kim ko'rmagan",
    "bizai.s2": "Katalogda nechta mahsulot bor?",
    "bizai.s3": "So'nggi yangilik nima?",
    "bizai.letter": "Ma'muriyatga xat tuzish",
    "bizai.sendAdmin": "Ma'muriyatga yuborish",
    "bizai.sentAdmin": "Ma'muriyatga yuborildi ✓",
    "bizai.describe": "Muammoni yozing va/yoki fayl biriktiring.",
    "bizai.letterReady": "Muammo tahlil qilindi. Rasmiy xat tayyor:",

    "rnd.title": "R&D markazi",
    "rnd.subCo": "Startap loyihalar va patent arizalarini yuboring.",
    "rnd.subAdmin": "Kelib tushgan startaplarni ko'rib chiqing va tasdiqlang.",
    "rnd.submit": "Startap loyiha yuborish",
    "rnd.pname": "Loyiha nomi",
    "rnd.pcat": "Yo'nalish",
    "rnd.pdesc": "Loyiha tavsifi",
    "rnd.patent": "Patent arizasi",
    "rnd.send": "Yuborish",
    "rnd.review": "Ko'rib chiqish navbati",
    "rnd.approve": "Tasdiqlash",
    "rnd.reject": "Rad etish",
    "rnd.pending": "Kutilmoqda",
    "rnd.approved": "Tasdiqlandi",
    "rnd.rejected": "Rad etildi",
    "rnd.sent": "Loyihangiz ko'rib chiqishga yuborildi!",
  },

  ru: {
    "tagline": "Национальная AI бизнес-ОС",
    "nav.about": "О нас",
    "nav.showrooms": "Шоурумы",
    "nav.news": "Новости",
    "nav.contact": "Контакты",
    "nav.ai": "AI-ассистент",
    "nav.favorites": "Избранное",
    "fav.title": "Избранные товары",
    "fav.sub": "Товары, которые вы отметили, сохраняются здесь.",
    "fav.empty": "Пока нет избранных товаров.",
    "fav.emptyHint": "Нажмите ❤ на товаре в каталоге, чтобы добавить.",
    "fav.browse": "Перейти в каталог",
    "fav.signinTitle": "Войдите по email",
    "fav.signinSub": "Избранное привяжется к этому email и откроется на любом устройстве.",
    "fav.signinOk": "Войти",
    "fav.switch": "Сменить email",
    "fav.badEmail": "Введите корректный email",
    "fav.signedin": "Добро пожаловать",
    "fav.signedAs": "Вы вошли как:",
    "btn.login": "Войти в аккаунт",
    "btn.logout": "Выйти",
    "notif.title": "Уведомления",
    "notif.empty": "Нет уведомлений",

    "hero.eyebrow": "30 компаний · 1 платформа",
    "hero.title1": "Национальный",
    "hero.title2": "Konglomerat",
    "hero.title3": "под управлением ИИ",
    "hero.lead": "Единая экосистема, объединяющая 30 компаний под управлением Директора. Шоурумы, инвестиции, R&D, экспорт и аналитика — всё в одном месте.",
    "hero.cta1": "Войти в платформу",
    "hero.cta2": "Смотреть шоурумы",
    "stat.companies": "Компаний",
    "stat.modules": "Модулей",
    "stat.blocks": "Блоков управления",
    "stat.ai": "AI-ассистент",

    "about.eyebrow": "О нас",
    "about.title": "Концепция Konglomerat",
    "about.lead": "Konglomerat — это национальная цифровая платформа, объединяющая 30 компаний под единым управлением искусственного интеллекта.",
    "about.c1.t": "Единое управление",
    "about.c1.d": "Директор наблюдает и управляет всеми компаниями с одной панели контроля.",
    "about.c2.t": "AI-ядро",
    "about.c2.d": "Каждый процесс оснащён помощником на базе искусственного интеллекта.",
    "about.c3.t": "Национальный масштаб",
    "about.c3.d": "Экспорт, инвестиции и международные связи в единой системе.",

    "show.eyebrow": "Шоурумы",
    "show.title": "Каталог товаров",
    "show.sub": "Интерактивный каталог продукции компаний Konglomerat.",
    "news.eyebrow": "Новости",
    "news.title": "Лента компаний",
    "news.sub": "Актуальные новости от компаний платформы.",
    "news.back": "Новости",
    "news.published": "Опубликовано",
    "news.more": "Другие новости",
    "news.notfound": "Новость не найдена.",
    "news.post": "Опубликовать новость",
    "news.postDesc": "Добавьте заголовок, текст и фото — новость появится в ленте.",
    "news.f.title": "Заголовок",
    "news.f.content": "Текст новости",
    "news.f.image": "Изображение",
    "news.f.upload": "Загрузить фото",
    "photos.label": "Фото (1–3)",
    "photos.add": "Добавить фото",
    "news.f.publish": "Опубликовать",
    "news.posted": "Новость опубликована!",

    "contact.eyebrow": "Контакты",
    "contact.title": "Единый call-центр",
    "contact.phone": "Телефон",
    "contact.email": "Эл. почта",
    "contact.office": "Главный офис",
    "contact.office.v": "г. Ташкент, Шайхантахурский район, ул. Фурката, 1А",

    "ai.title": "AI-ассистент",
    "ai.guestLimit": "Доступно 3 бесплатных запроса",
    "ai.placeholder": "Напишите ваш вопрос...",
    "ai.welcome": "Здравствуйте! Я AI-ассистент Konglomerat. Чем могу помочь?",
    "ai.locked": "Бесплатные запросы исчерпаны. Войдите для продолжения.",
    "ai.left": "бесплатных запросов осталось",

    "aichat.title": "AI-ассистент",
    "aichat.status": "Онлайн · 24/7",
    "aichat.sub": "Задайте любые вопросы о платформе Konglomerat.",
    "aichat.s1": "Что такое Konglomerat?",
    "aichat.s2": "Какие есть компании?",
    "aichat.s3": "Как посмотреть шоурумы?",
    "aichat.disclaimer": "AI-ассистент работает в демо-режиме.",
    "aichat.login.title": "Вход в систему",
    "aichat.login.sub": "Введите логин и пароль — войдёте в AI-чат.",
    "aichat.login.user": "Логин",
    "aichat.login.pass": "Пароль",
    "aichat.login.enter": "Войти →",
    "aichat.login.or": "ИЛИ",
    "aichat.login.email": "email@gmail.com",
    "aichat.login.emailBtn": "Продолжить с email",
    "aichat.login.demo": "Демо — чат с AI",
    "aichat.login.err": "Неверный логин или пароль.",
    "aichat.login.bademail": "Введите корректный email.",
    "aichat.offtopic": "Этот вопрос вне тематики Konglomerat. Пожалуйста, спрашивайте только о Konglomerat.",
    "aichat.locked": "3 бесплатных запроса исчерпаны. Войдите, чтобы продолжить.",
    "aichat.left": "бесплатных запросов осталось",

    "login.title": "Вход в систему",
    "login.sub": "Войдите в ваш аккаунт",
    "login.email": "Логин (Email)",
    "login.password": "Пароль",
    "login.submit": "Войти",
    "login.back": "Вернуться на главную",
    "login.hint": "Демо: admin / admin123 или company1 / company123",
    "login.err.title": "Ошибка входа",
    "login.err.msg": "Неверный логин или пароль.",
    "login.ok.title": "Успешно",
    "login.ok.msg": "Перенаправление...",
    "form.required": "Заполните это поле.",
    "form.email": "Введите корректный email.",
    "form.invalid": "Некорректное значение.",

    "foot.rights": "Все права защищены.",

    "prod.back": "Шоурумы",
    "prod.about": "О товаре",
    "prod.company": "Компания",
    "prod.price": "Цена",
    "prod.buy": "Купить сейчас",
    "prod.orderTitle": "Оформление заказа",
    "prod.name": "Ваше имя",
    "prod.contact": "Телефон",
    "prod.qty": "Количество",
    "prod.place": "Подтвердить заказ",
    "prod.success": "Заказ принят! Мы свяжемся с вами в ближайшее время.",
    "prod.notfound": "Товар не найден.",
    "prod.feat1": "Гарантированное качество",
    "prod.feat2": "Проверено Konglomerat",
    "prod.feat3": "Доставка по всей стране",

    "admin.brand": "Панель Директора",
    "side.overview": "Обзор",
    "side.control": "Панель управления",
    "side.modules": "Модули",
    "side.conferences": "Конференции",
    "side.chats": "Чаты",
    "side.rnd": "R&D центр",
    "side.reports": "Отчёты",
    "side.complaints": "Жалобы",
    "comp.title": "Управление жалобами",
    "comp.sub": "Жалобы от компаний и посетителей.",
    "comp.empty": "Пока нет жалоб.",
    "comp.reply": "Ответить",
    "comp.replyPh": "Напишите ответ...",
    "comp.send": "Отправить ответ",
    "comp.resolve": "Отметить решённой",
    "comp.resolved": "Решено",
    "comp.pending": "На рассмотрении",
    "comp.answer": "Ответ администратора",
    "comp.public.title": "Оставить жалобу",
    "comp.public.sub": "Опишите проблему или предложение — администратор ответит.",
    "comp.f.name": "Ваше имя или компания",
    "comp.f.contact": "Email или телефон",
    "comp.f.text": "Текст жалобы",
    "comp.f.photos": "Фото (необязательно)",
    "comp.f.addPhoto": "Добавить фото",
    "comp.attachments": "Прикреплённые фото",
    "comp.attach": "Вложения",
    "comp.official": "Официальное письмо (AI)",
    "comp.f.send": "Отправить",
    "comp.sent": "Ваша жалоба отправлена! Мы скоро ответим.",
    "comp.link": "Жалоба",
    "comp.back": "К жалобам",
    "comp.problem": "Описание проблемы",
    "comp.notfound": "Жалоба не найдена.",
    "comp.open": "Открыть",
    "cp.title": "Центр управления",
    "cp.sub": "Konglomerat — 30 компаний под единым контролем",
    "cp.kuzatuv": "Kuzatuv",
    "cp.kuzatuv.badge": "Мониторинг",
    "cp.control": "Boshqaruv",
    "cp.control.badge": "Управление",
    "kpi.companies": "Активные компании",
    "kpi.ai": "AI-запросов (сегодня)",
    "kpi.startups": "Новые стартапы",
    "kpi.showrooms": "Загруженные шоурумы",
    "kpi.complaints": "Жалобы",
    "chart.title": "Активность AI-ассистента (неделя)",
    "chart.company": "Аналитика компаний (секторы)",
    "complaints.title": "Последние жалобы (Shikoyatlar)",
    "control.confTitle": "Создание конференции",
    "control.confDesc": "Организуйте онлайн-встречу для всех 30 компаний.",
    "control.confBtn": "Создать конференцию",
    "control.repTitle": "Сводный месячный отчёт",
    "control.repDesc": "Сформируйте единый отчёт по всем компаниям.",
    "control.repBtn": "Monthly Report ALL",
    "modules.title": "Модули управления",
    "modules.sub": "13 блоков · 100 модулей — включайте и настраивайте каждый.",
    "mod.settings": "Настройки",
    "mod.on": "Включён",
    "mod.off": "Выключен",

    "conf.title": "Управление конференциями",
    "conf.sub": "Создавайте онлайн-встречи для 30 компаний.",
    "conf.name": "Название конференции",
    "conf.date": "Дата",
    "conf.time": "Время",
    "conf.desc": "Описание",
    "conf.link": "Ссылка на конференцию (Zoom/Meet)",
    "conf.open": "Открыть ссылку",
    "conf.launch": "Запустить",
    "conf.upcoming": "Запланированные встречи",
    "conf.created": "Конференция создана и разослана компаниям!",

    "co.brand": "Кабинет компании",
    "co.title": "Рабочее пространство",
    "co.sub": "ООО «Олтин Сарой» — управление бизнесом",
    "co.join": "Директор создал новую конференцию!",
    "co.joinBtn": "Join Conference",
    "co.content": "Управление контентом",
    "co.addProduct": "Добавить товар",
    "co.pname": "Название товара",
    "co.pprice": "Цена",
    "co.pdesc": "Описание",
    "co.save": "Сохранить",
    "co.publishNews": "Опубликовать новость",
    "co.ntitle": "Заголовок",
    "co.publish": "Опубликовать",
    "co.myReport": "Мой месячный отчёт",
    "co.reportDesc": "Просмотрите индивидуальный месячный отчёт этой компании.",
    "co.viewReport": "Открыть отчёт",
    "co.orders": "Заявки покупателей",
    "co.ordersSub": "Посетители, заинтересовавшиеся вашими товарами, и их контакты.",
    "co.ordersEmpty": "Пока нет заявок.",
    "co.oProduct": "Товар",
    "co.oQty": "Количество",
    "co.oBuyer": "Покупатель",
    "co.oContact": "Контакт",
    "co.oDate": "Дата",
    "co.bizAi": "Бизнес AI-помощник",
    "co.bizAiNote": "Отвечает строго по бизнес-тематике конгломерата.",
    "co.blocked": "Этот вопрос вне бизнес-тематики. Пожалуйста, задайте бизнес-вопрос.",
    "co.edit": "Изменить",
    "co.delete": "Удалить",
    "co.cancel": "Отмена",
    "co.update": "Обновить",
    "co.editProduct": "Редактировать товар",
    "co.updated": "Обновлено",
    "co.deleted": "Удалено",
    "co.delConfirm": "Удалить этот элемент?",
    "news.edit": "Редактировать новость",
    "news.list": "Опубликованные новости",
    "news.updated": "Новость обновлена!",
    "news.empty": "Пока нет новостей.",

    "chat.group": "Общий чат",
    "chat.groupWho": "31 участник · Админ + 30 компаний",
    "chat.individual": "Личный чат",
    "chat.admin": "Админ чат",
    "chat.ai": "AI-ассистент",
    "chat.send": "Отправить",
    "chat.typeMsg": "Напишите сообщение...",
    "msg.edited": "изменено",
    "msg.editPrompt": "Редактировать сообщение:",
    "msg.sending": "Отправка",
    "msg.failed": "Не отправлено",
    "msg.sent": "Отправлено",
    "msg.seen": "Просмотрено",
    "msg.seenBy": "Кто просмотрел",
    "msg.noSeen": "Пока никто не просмотрел",
    "bizai.s2": "Сколько товаров в каталоге?",
    "bizai.s3": "Последняя новость?",
    "bizai.letter": "Составить письмо администратору",
    "bizai.sendAdmin": "Отправить администратору",
    "bizai.sentAdmin": "Отправлено администратору ✓",
    "bizai.describe": "Опишите проблему и/или прикрепите файлы.",
    "bizai.letterReady": "Проблема проанализирована. Официальное письмо готово:",

    "rnd.title": "R&D центр",
    "rnd.subCo": "Подавайте стартап-проекты и заявки на патенты.",
    "rnd.subAdmin": "Рецензируйте и одобряйте присланные стартапы.",
    "rnd.submit": "Подать стартап-проект",
    "rnd.pname": "Название проекта",
    "rnd.pcat": "Направление",
    "rnd.pdesc": "Описание проекта",
    "rnd.patent": "Заявка на патент",
    "rnd.send": "Отправить",
    "rnd.review": "Очередь на рассмотрение",
    "rnd.approve": "Одобрить",
    "rnd.reject": "Отклонить",
    "rnd.pending": "На рассмотрении",
    "rnd.approved": "Одобрено",
    "rnd.rejected": "Отклонено",
    "rnd.sent": "Ваш проект отправлен на рассмотрение!",
  },

  en: {
    "tagline": "National AI Business OS",
    "nav.about": "About Us",
    "nav.showrooms": "Showrooms",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.ai": "AI Assistant",
    "nav.favorites": "Favorites",
    "fav.title": "Favorite products",
    "fav.sub": "The products you liked are saved here.",
    "fav.empty": "No favorite products yet.",
    "fav.emptyHint": "Tap the ❤ on a product in the catalog to add it.",
    "fav.browse": "Go to catalog",
    "fav.signinTitle": "Sign in with email",
    "fav.signinSub": "Your favorites are tied to this email and open on any device.",
    "fav.signinOk": "Sign in",
    "fav.switch": "Switch email",
    "fav.badEmail": "Enter a valid email",
    "fav.signedin": "Welcome",
    "fav.signedAs": "Signed in as:",
    "btn.login": "Log in",
    "btn.logout": "Log out",
    "notif.title": "Notifications",
    "notif.empty": "No notifications",

    "hero.eyebrow": "30 companies · 1 platform",
    "hero.title1": "The National",
    "hero.title2": "Konglomerat",
    "hero.title3": "powered by AI",
    "hero.lead": "A unified ecosystem uniting 30 companies under the Director's command. Showrooms, investment, R&D, export and analytics — all in one place.",
    "hero.cta1": "Enter platform",
    "hero.cta2": "Browse showrooms",
    "stat.companies": "Companies",
    "stat.modules": "Modules",
    "stat.blocks": "Control blocks",
    "stat.ai": "AI assistant",

    "about.eyebrow": "About Us",
    "about.title": "The Konglomerat concept",
    "about.lead": "Konglomerat is a nation-scale digital platform uniting 30 companies under a single artificial-intelligence command.",
    "about.c1.t": "Unified command",
    "about.c1.d": "The Director monitors and manages all companies from a single control panel.",
    "about.c2.t": "AI core",
    "about.c2.d": "Every process is equipped with an artificial-intelligence assistant.",
    "about.c3.t": "National scale",
    "about.c3.d": "Export, investment and international relations in one system.",

    "show.eyebrow": "Showrooms",
    "show.title": "Product catalog",
    "show.sub": "Interactive catalog of products from Konglomerat companies.",
    "news.eyebrow": "News",
    "news.title": "Company feed",
    "news.sub": "Latest news from the platform's companies.",
    "news.back": "News",
    "news.published": "Published",
    "news.more": "More news",
    "news.notfound": "News item not found.",
    "news.post": "Post news",
    "news.postDesc": "Add a headline, text and photo — the news appears in the feed.",
    "news.f.title": "Headline",
    "news.f.content": "News text",
    "news.f.image": "Image",
    "news.f.upload": "Upload photo",
    "photos.label": "Photos (1–3)",
    "photos.add": "Add photo",
    "news.f.publish": "Publish",
    "news.posted": "News published!",

    "contact.eyebrow": "Contact",
    "contact.title": "Unified call-center",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.office": "Head office",
    "contact.office.v": "Tashkent, Shaykhontokhur district, Furqat street, 1A",

    "ai.title": "AI Assistant",
    "ai.guestLimit": "3 free requests available",
    "ai.placeholder": "Type your question...",
    "ai.welcome": "Hello! I'm the Konglomerat AI assistant. How can I help you?",
    "ai.locked": "Free requests used up. Log in to continue.",
    "ai.left": "free requests left",

    "aichat.title": "AI Assistant",
    "aichat.status": "Online · 24/7",
    "aichat.sub": "Ask anything about the Konglomerat platform.",
    "aichat.s1": "What is Konglomerat?",
    "aichat.s2": "Which companies are there?",
    "aichat.s3": "How do I view showrooms?",
    "aichat.disclaimer": "The AI assistant runs in demo mode.",
    "aichat.login.title": "Sign in",
    "aichat.login.sub": "Enter your login and password to access the AI chat.",
    "aichat.login.user": "Login",
    "aichat.login.pass": "Password",
    "aichat.login.enter": "Sign in →",
    "aichat.login.or": "OR",
    "aichat.login.email": "email@gmail.com",
    "aichat.login.emailBtn": "Continue with email",
    "aichat.login.demo": "Demo — chat with AI",
    "aichat.login.err": "Invalid login or password.",
    "aichat.login.bademail": "Enter a valid email.",
    "aichat.offtopic": "This question is outside Konglomerat topics. Please ask only about Konglomerat.",
    "aichat.locked": "3 free requests used up. Sign in to continue.",
    "aichat.left": "free requests left",

    "login.title": "Sign in",
    "login.sub": "Access your account",
    "login.email": "Login (Email)",
    "login.password": "Password",
    "login.submit": "Sign in",
    "login.back": "Back to home",
    "login.hint": "Demo: admin / admin123 or company1 / company123",
    "login.err.title": "Login error",
    "login.err.msg": "Invalid login or password.",
    "login.ok.title": "Success",
    "login.ok.msg": "Redirecting...",
    "form.required": "Please fill out this field.",
    "form.email": "Please enter a valid email address.",
    "form.invalid": "Invalid value.",

    "foot.rights": "All rights reserved.",

    "prod.back": "Showrooms",
    "prod.about": "About this product",
    "prod.company": "Company",
    "prod.price": "Price",
    "prod.buy": "Buy now",
    "prod.orderTitle": "Place your order",
    "prod.name": "Your name",
    "prod.contact": "Phone",
    "prod.qty": "Quantity",
    "prod.place": "Confirm order",
    "prod.success": "Order placed! We'll contact you shortly.",
    "prod.notfound": "Product not found.",
    "prod.feat1": "Guaranteed quality",
    "prod.feat2": "Verified by Konglomerat",
    "prod.feat3": "Nationwide delivery",

    "admin.brand": "Director Panel",
    "side.overview": "Overview",
    "side.control": "Control Panel",
    "side.modules": "Modules",
    "side.conferences": "Conferences",
    "side.chats": "Chats",
    "side.rnd": "R&D Center",
    "side.reports": "Reports",
    "side.complaints": "Complaints",
    "comp.title": "Complaints management",
    "comp.sub": "Complaints from companies and visitors.",
    "comp.empty": "No complaints yet.",
    "comp.reply": "Reply",
    "comp.replyPh": "Write a reply...",
    "comp.send": "Send reply",
    "comp.resolve": "Mark resolved",
    "comp.resolved": "Resolved",
    "comp.pending": "Pending",
    "comp.answer": "Admin response",
    "comp.public.title": "Submit a complaint",
    "comp.public.sub": "Describe your issue or suggestion — an admin will respond.",
    "comp.f.name": "Your name or company",
    "comp.f.contact": "Email or phone",
    "comp.f.text": "Complaint text",
    "comp.f.photos": "Photos (optional)",
    "comp.f.addPhoto": "Add photo",
    "comp.attachments": "Attached photos",
    "comp.attach": "Attachments",
    "comp.official": "Official letter (AI)",
    "comp.f.send": "Send",
    "comp.sent": "Your complaint has been submitted! We'll respond soon.",
    "comp.link": "Complaint",
    "comp.back": "Back to complaints",
    "comp.problem": "Problem description",
    "comp.notfound": "Complaint not found.",
    "comp.open": "Open",
    "cp.title": "Control Center",
    "cp.sub": "Konglomerat — 30 companies under unified control",
    "cp.kuzatuv": "Kuzatuv",
    "cp.kuzatuv.badge": "Monitoring",
    "cp.control": "Boshqaruv",
    "cp.control.badge": "Control",
    "kpi.companies": "Active companies",
    "kpi.ai": "AI requests (today)",
    "kpi.startups": "New startups",
    "kpi.showrooms": "Loaded showrooms",
    "kpi.complaints": "Complaints",
    "chart.title": "AI assistant activity (week)",
    "chart.company": "Company analytics (sectors)",
    "complaints.title": "Recent complaints (Shikoyatlar)",
    "control.confTitle": "Create conference",
    "control.confDesc": "Organize an online meeting for all 30 companies.",
    "control.confBtn": "Create conference",
    "control.repTitle": "Consolidated monthly report",
    "control.repDesc": "Generate a single report across all companies.",
    "control.repBtn": "Monthly Report ALL",
    "modules.title": "Management modules",
    "modules.sub": "13 blocks · 100 modules — enable and configure each.",
    "mod.settings": "Settings",
    "mod.on": "On",
    "mod.off": "Off",

    "conf.title": "Conference management",
    "conf.sub": "Create online meetings for 30 companies.",
    "conf.name": "Conference name",
    "conf.date": "Date",
    "conf.time": "Time",
    "conf.desc": "Description",
    "conf.link": "Conference link (Zoom/Meet)",
    "conf.open": "Open link",
    "conf.launch": "Launch",
    "conf.upcoming": "Scheduled meetings",
    "conf.created": "Conference created and sent to companies!",

    "co.brand": "Company Cabinet",
    "co.title": "Workspace",
    "co.sub": "Oltin Saroy LLC — business management",
    "co.join": "The Director created a new conference!",
    "co.joinBtn": "Join Conference",
    "co.content": "Content management",
    "co.addProduct": "Add product",
    "co.pname": "Product name",
    "co.pprice": "Price",
    "co.pdesc": "Description",
    "co.save": "Save",
    "co.publishNews": "Publish news",
    "co.ntitle": "Headline",
    "co.publish": "Publish",
    "co.myReport": "My monthly report",
    "co.reportDesc": "View this company's individual monthly report.",
    "co.viewReport": "Open report",
    "co.orders": "Buyer requests",
    "co.ordersSub": "Visitors interested in your products, with their contacts.",
    "co.ordersEmpty": "No requests yet.",
    "co.oProduct": "Product",
    "co.oQty": "Quantity",
    "co.oBuyer": "Buyer",
    "co.oContact": "Contact",
    "co.oDate": "Date",
    "co.bizAi": "Business AI assistant",
    "co.bizAiNote": "Answers strictly on conglomerate business topics.",
    "co.blocked": "This question is outside business scope. Please ask a business question.",
    "co.edit": "Edit",
    "co.delete": "Delete",
    "co.cancel": "Cancel",
    "co.update": "Update",
    "co.editProduct": "Edit product",
    "co.updated": "Updated",
    "co.deleted": "Deleted",
    "co.delConfirm": "Delete this item?",
    "news.edit": "Edit news",
    "news.list": "Published news",
    "news.updated": "News updated!",
    "news.empty": "No news yet.",

    "chat.group": "Group chat",
    "chat.groupWho": "31 members · Admin + 30 companies",
    "chat.individual": "Individual chat",
    "chat.admin": "Admin chat",
    "chat.ai": "AI Assistant",
    "chat.send": "Send",
    "chat.typeMsg": "Type a message...",
    "msg.edited": "edited",
    "msg.editPrompt": "Edit message:",
    "msg.sending": "Sending",
    "msg.failed": "Not sent",
    "msg.sent": "Sent",
    "msg.seen": "Seen",
    "msg.seenBy": "Seen by",
    "msg.noSeen": "Not seen yet",
    "bizai.s2": "How many products in the catalog?",
    "bizai.s3": "What's the latest news?",
    "bizai.letter": "Draft a letter to the admin",
    "bizai.sendAdmin": "Send to admin",
    "bizai.sentAdmin": "Sent to admin ✓",
    "bizai.describe": "Describe the problem and/or attach files.",
    "bizai.letterReady": "Problem analyzed. The official letter is ready:",

    "rnd.title": "R&D Center",
    "rnd.subCo": "Submit startup projects and patent applications.",
    "rnd.subAdmin": "Review and approve submitted startups.",
    "rnd.submit": "Submit startup project",
    "rnd.pname": "Project name",
    "rnd.pcat": "Category",
    "rnd.pdesc": "Project description",
    "rnd.patent": "Patent application",
    "rnd.send": "Send",
    "rnd.review": "Review queue",
    "rnd.approve": "Approve",
    "rnd.reject": "Reject",
    "rnd.pending": "Pending",
    "rnd.approved": "Approved",
    "rnd.rejected": "Rejected",
    "rnd.sent": "Your project was submitted for review!",
  },
};

const K = {
  lang: localStorage.getItem("kong_lang") || "ru",
  theme: localStorage.getItem("kong_theme") || "light",
};

/* ----------------------------------------------------------
   0. Backend API layer + session
   ---------------------------------------------------------- */
async function api(path, opts = {}) {
  const headers = { ...(opts.headers || {}) };
  if (opts.body !== undefined) headers["Content-Type"] = "application/json";
  const tok = localStorage.getItem("kong_token");
  if (tok) headers["Authorization"] = "Bearer " + tok;
  const res = await fetch(path, {
    method: opts.method || "GET",
    headers,
    body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(data.error || ("http_" + res.status)), { status: res.status, data });
  return data;
}
function session() { try { return JSON.parse(localStorage.getItem("kong_user") || "null"); } catch { return null; } }
function setSession(token, user) { localStorage.setItem("kong_token", token); localStorage.setItem("kong_user", JSON.stringify(user)); }
function clearSession() { localStorage.removeItem("kong_token"); localStorage.removeItem("kong_user"); }
function logout() { clearSession(); location.href = "/index.html"; }
// Redirect to login unless a session with the required role exists.
function requireRole(role) {
  const u = session();
  if (!u || (role && u.role !== role)) { location.href = "/login.html"; return null; }
  return u;
}

/* ----------------------------------------------------------
   1b. SVG icon system (Lucide-style line icons)
   Use inline: icon("home")  · or declaratively: <span data-icon="home"></span>
   ---------------------------------------------------------- */
const ICONS = {
  layers:`<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m6.08 9.5-3.49 1.59a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83L17.92 9.5"/><path d="m6.08 14.5-3.49 1.59a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.58"/>`,
  sparkles:`<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0Z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>`,
  bag:`<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>`,
  package:`<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73Z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/>`,
  newspaper:`<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8Z"/>`,
  grid:`<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>`,
  sliders:`<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>`,
  control:`<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>`,
  video:`<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/>`,
  message:`<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
  flask:`<path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.5 16h13"/>`,
  home:`<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
  file:`<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>`,
  phone:`<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`,
  mail:`<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`,
  pin:`<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`,
  send:`<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>`,
  chart:`<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>`,
  eye:`<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`,
  users:`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
  building:`<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>`,
  cpu:`<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>`,
  rocket:`<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>`,
  dollar:`<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
  globe:`<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>`,
  cap:`<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`,
  tv:`<rect width="20" height="15" x="2" y="7" rx="2"/><polyline points="17 2 12 7 7 2"/>`,
  landmark:`<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>`,
  briefcase:`<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
  crown:`<path d="M11.56 3.69a.5.5 0 0 1 .88 0l2.54 4.7 4.9-2.48a.5.5 0 0 1 .72.57l-2.2 8.02a1 1 0 0 1-.96.73H6.56a1 1 0 0 1-.96-.73L3.4 6.48a.5.5 0 0 1 .72-.57l4.9 2.48Z"/><path d="M5 20h14"/>`,
  moon:`<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`,
  sun:`<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`,
  close:`<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`,
  calendar:`<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M16 2v4"/>`,
  clock:`<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  folder:`<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>`,
  bookmark:`<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>`,
  check:`<path d="M20 6 9 17l-5-5"/>`,
  cart:`<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>`,
  heart:`<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>`,
  star:`<path d="M11.5 2.7a.55.55 0 0 1 1 0l2.4 5 5.4.8a.55.55 0 0 1 .3.9l-3.9 3.8.9 5.4a.55.55 0 0 1-.8.6l-4.8-2.5-4.8 2.5a.55.55 0 0 1-.8-.6l.9-5.4-3.9-3.8a.55.55 0 0 1 .3-.9l5.4-.8Z"/>`,
  chevronLeft:`<path d="m15 18-6-6 6-6"/>`,
  bell:`<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`,
  paperclip:`<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>`,
  mic:`<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>`,
  stop:`<rect width="12" height="12" x="6" y="6" rx="2"/>`,
  menu:`<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>`,
};
// small inline glyph aligned with text (for captions/meta lines)
function ig(name, size = 14) { return `<span class="ig">${icon(name, size)}</span>`; }
function icon(name, size = 20) {
  const p = ICONS[name] || "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}
// Replace every <el data-icon="name"> with its inline SVG (idempotent).
function renderIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach(el => {
    if (el.dataset.iconDone) return;
    el.innerHTML = icon(el.dataset.icon, el.dataset.iconSize ? +el.dataset.iconSize : 20);
    el.dataset.iconDone = "1";
  });
}

/* ----------------------------------------------------------
   2. i18n engine
   ---------------------------------------------------------- */
function t(key) {
  return (I18N[K.lang] && I18N[K.lang][key]) || (I18N.en[key]) || key;
}
// Translate a subtree WITHOUT dispatching langchange (safe to call from render fns).
function translateTree(root) {
  root.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  root.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
}
// Highlight the "AI" / "ИИ" word in the hero title with the accent colour (all languages).
function highlightHeroAI() {
  const el = document.querySelector('[data-i18n="hero.title3"]');
  if (!el) return;
  el.innerHTML = el.textContent.replace(/(^|\s)(AI|ИИ)(?=\s|$)/, '$1<span class="hl-ai">$2</span>');
}
function applyLang() {
  document.documentElement.lang = K.lang;
  translateTree(document);
  highlightHeroAI();
  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === K.lang);
  });
  // let pages re-render dynamic content with new language
  document.dispatchEvent(new CustomEvent("langchange", { detail: K.lang }));
}
function setLang(lang) {
  K.lang = lang;
  localStorage.setItem("kong_lang", lang);
  applyLang();
}

/* ----------------------------------------------------------
   3. Theme engine
   ---------------------------------------------------------- */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", K.theme);
  document.querySelectorAll("[data-theme-toggle]").forEach(b => {
    b.innerHTML = icon(K.theme === "dark" ? "sun" : "moon", 18);
    b.setAttribute("title", K.theme === "dark" ? "Light mode" : "Dark mode");
  });
}
function toggleTheme() {
  K.theme = K.theme === "dark" ? "light" : "dark";
  localStorage.setItem("kong_theme", K.theme);
  applyTheme();
  restyleAllCharts(); // recolor Chart.js graphs for the new theme (no-op if none)
}

/* ----------------------------------------------------------
   4. Header injection (shared markup)
   path = relative prefix to project root ("" or "../")
   ---------------------------------------------------------- */
function buildHeader(opts = {}) {
  const root = opts.root || "";
  const nav = opts.nav || "";
  const u = session();
  const right = opts.right || (u
    ? `<button class="btn btn-soft btn-sm" onclick="logout()" data-i18n="btn.logout">Выйти</button>`
    : `<a class="btn btn-primary btn-sm" href="${root}login.html" data-i18n="btn.login">Войти</a>`);
  return `
  <header class="site-header">
    <div class="container header-inner">
      <button class="icon-btn menu-toggle" id="menuToggle" aria-label="Menu" onclick="toggleMobileMenu()">${icon("menu", 22)}</button>
      <a class="brand" href="${root}index.html">
        <span class="logo-mark">${icon("layers", 22)}</span>
        <span><span class="logo-text">Konglomerat</span>
        <small data-i18n="tagline">National AI Business OS</small></span>
      </a>
      <nav class="header-nav">${nav}</nav>
      <div class="header-tools">
        <div class="lang-switch">
          <button data-lang="uz" onclick="setLang('uz')">UZ</button>
          <button data-lang="ru" onclick="setLang('ru')">RU</button>
          <button data-lang="en" onclick="setLang('en')">EN</button>
        </div>
        <button class="icon-btn" data-theme-toggle onclick="toggleTheme()"></button>
        ${u ? `<div class="notif" id="notifWrap">
          <button class="icon-btn notif-btn" id="notifBtn" title="Notifications">${icon("bell", 18)}<span class="notif-badge" id="notifBadge" hidden></span></button>
          <div class="notif-panel" id="notifPanel" hidden>
            <div class="notif-head" data-i18n="notif.title">Уведомления</div>
            <div class="notif-list" id="notifList"></div>
          </div>
        </div>` : ""}
        ${right}
      </div>
    </div>
  </header>`;
}

/* ----------------------------------------------------------
   4a1. Favorites — per visitor, identified by email, synced to the server.
   The visitor "signs in" with an email; their favorites follow that email
   (localStorage caches the list for instant paint; the server is the source
   of truth so the same email sees the same favorites on any device).
   Shared by the catalog (index) and the Favorites page.
   ---------------------------------------------------------- */
function visitorEmail() { return (localStorage.getItem("kg_visitor_email") || "").trim().toLowerCase(); }
function setVisitorEmail(email) {
  localStorage.setItem("kg_visitor_email", String(email || "").trim().toLowerCase());
  _favs = null; // drop cache so the new identity's list loads
}
function clearVisitor() { localStorage.removeItem("kg_visitor_email"); _favs = null; updateFavBadge(); _emitFavs(); }
function _favCacheKey() { const e = visitorEmail(); return "kg_favs:" + (e || "_guest"); }

let _favs = null; // in-memory cache of the current visitor's favorite keys
function favKey(p) { return String(p.id || ((p.company || "") + "|" + ((p.name && (p.name.ru || p.name.en)) || ""))); }
function getFavs() {
  if (_favs) return _favs;
  try { _favs = JSON.parse(localStorage.getItem(_favCacheKey()) || "[]"); } catch { _favs = []; }
  return _favs;
}
function _setFavs(arr) { _favs = arr.slice(); localStorage.setItem(_favCacheKey(), JSON.stringify(_favs)); }
function isFav(key) { return getFavs().includes(key); }
function favCount() { return getFavs().length; }
function _emitFavs() { document.dispatchEvent(new Event("favschange")); }
function toggleFav(key) {
  const f = getFavs().slice(), i = f.indexOf(key), on = i < 0;
  if (on) f.push(key); else f.splice(i, 1);
  _setFavs(f);
  updateFavBadge();
  const email = visitorEmail();
  if (email) api("/api/favorites", { method: "PUT", body: { email, ids: f } }).catch(() => {});
  _emitFavs();
  return on; // true = теперь в избранном
}
// Pull the current visitor's favorites from the server (call on page load / after sign-in).
async function loadFavs() {
  _favs = null;
  const email = visitorEmail();
  if (email) {
    try { const r = await api("/api/favorites?email=" + encodeURIComponent(email));
      if (Array.isArray(r.ids)) _setFavs(r.ids); } catch {}
  }
  getFavs(); updateFavBadge(); _emitFavs();
  return getFavs();
}
// Ask a guest for their email (styled modal) so favorites can be saved to their account.
async function ensureVisitor() {
  if (visitorEmail()) return true;
  const email = await uiPrompt({
    title: t("fav.signinTitle"),
    placeholder: "email@example.com",
    ok: t("fav.signinOk"), cancel: t("co.cancel"),
  });
  if (email === null) return false;                 // cancelled
  if (!email.includes("@")) { toast(t("fav.badEmail"), "", "error"); return false; }
  setVisitorEmail(email);
  await loadFavs();
  toast(t("fav.signedin"), visitorEmail(), "success");
  return true;
}
// Refresh any "Избранное" nav counter present on the page.
function updateFavBadge() {
  document.querySelectorAll(".fav-badge").forEach(b => {
    const c = favCount(); b.textContent = c; b.hidden = !c;
  });
}
// Show the "Избранное" nav tab only while a visitor is signed in (has an email).
function syncFavAuth() {
  if (document.body) document.body.classList.toggle("fav-auth", !!visitorEmail());
}
// Keep the nav tab + badge in sync whenever the visitor signs in / out or their list changes.
document.addEventListener("favschange", () => { updateFavBadge(); syncFavAuth(); });
// Marketplace-style product card (identical on catalog and Favorites pages).
function productCardHTML(p, L = K.lang) {
  const detailsLbl = L === "uz" ? "Batafsil" : L === "en" ? "Details" : "Подробнее";
  const k = favKey(p);
  const name = (p.name && (p.name[L] || p.name.ru || p.name.en)) || "";
  const desc = (p.desc && (p.desc[L] || p.desc.ru || p.desc.en)) || "";
  const media = p.image ? `<img class="prod-img" src="${escHtml(p.image)}" alt="">`
    : (p.ico ? `<span class="prod-emoji">${p.ico}</span>` : icon("package", 42));
  return `
    <a class="card product-card" href="product.html?id=${p.id || ""}">
      <div class="product-thumb">
        ${media}
        <button type="button" class="fav-btn${isFav(k) ? " on" : ""}" data-fav="${escHtml(k)}" aria-pressed="${isFav(k)}" aria-label="Favorite">${icon("heart", 18)}</button>
      </div>
      <div class="product-body">
        <span class="price">${escHtml(p.price || "")}</span>
        <div class="product-company">${escHtml(p.company || "")}</div>
        <h4 class="product-name">${escHtml(name)}</h4>
        <p class="product-desc">${escHtml(desc)}</p>
        <span class="btn btn-soft btn-sm btn-block product-cta">${detailsLbl}</span>
      </div>
    </a>`;
}
// Delegate heart clicks on a product grid: toggle favorite without following the card link.
// Requires the visitor to be signed in with an email first (favorites are per-visitor).
// Re-rendering is driven by the "favschange" event, so callers just re-render their grid there.
function bindFavClicks(grid) {
  if (!grid) return;
  grid.addEventListener("click", async e => {
    const btn = e.target.closest(".fav-btn");
    if (!btn) return;
    e.preventDefault(); e.stopPropagation();
    const key = btn.dataset.fav;
    if (!visitorEmail()) {
      if (!(await ensureVisitor())) return;   // sign in first; loadFavs() re-renders grids
      if (isFav(key)) return;                 // this item was already in their saved list
    }
    toggleFav(key);                           // updates + emits "favschange" → grids re-render
  });
}

/* ----------------------------------------------------------
   4a2. Mobile navigation (hamburger → sidebar drawer / nav dropdown)
   ---------------------------------------------------------- */
function setMobileBackdrop(show, onClose) {
  let bd = document.querySelector(".mobile-backdrop");
  if (show) {
    if (!bd) { bd = document.createElement("div"); bd.className = "mobile-backdrop"; document.body.appendChild(bd); }
    bd.onclick = () => { setMobileBackdrop(false); onClose && onClose(); };
    requestAnimationFrame(() => bd.classList.add("show"));
  } else if (bd) {
    bd.classList.remove("show"); bd.onclick = null;
    setTimeout(() => bd.remove(), 220);
  }
}
// Toggle the panel sidebar (if present) else the header nav dropdown.
function toggleMobileMenu() {
  const target = document.querySelector(".app-shell > .sidebar") || document.querySelector(".header-nav");
  if (!target) return;
  const open = !target.classList.contains("open");
  target.classList.toggle("open", open);
  setMobileBackdrop(open, () => target.classList.remove("open"));
}
function closeMobileMenu() {
  document.querySelectorAll(".sidebar.open, .header-nav.open").forEach(x => x.classList.remove("open"));
  setMobileBackdrop(false);
}
function initMobileNav() {
  // close the drawer/dropdown after tapping a navigation link
  document.addEventListener("click", e => {
    if (e.target.closest(".header-nav a") || e.target.closest(".side-link")) closeMobileMenu();
  });
  // reset when resizing back to desktop
  window.addEventListener("resize", () => { if (window.innerWidth > 900) closeMobileMenu(); });
}

/* ----------------------------------------------------------
   4b. Admin sidebar (shared across admin pages)
   Returns the inner links markup for <aside class="sidebar">.
   ---------------------------------------------------------- */
function buildAdminSidebar(active) {
  const items = [
    ["overview",    "control-panel.html", "chart",    "side.overview"],
    ["control",     "control.html",       "sliders",  "side.control"],
    // "Modullar" temporarily disabled (2026-07-06) — re-enable by uncommenting.
    // ["modules",     "modules.html",       "grid",     "side.modules"],
    ["conferences", "conferences.html",   "video",    "side.conferences"],
    ["chats",       "chats.html",         "message",  "side.chats"],
    ["rnd",         "rnd.html",           "flask",    "side.rnd"],
    ["complaints",  "complaints.html",    "mail",     "side.complaints"],
  ];
  return `<div class="side-label" data-i18n="admin.brand">Панель Директора</div>` +
    items.map(([key, href, ic, label]) =>
      `<a class="side-link${key === active ? " active" : ""}" href="${href}"><span class="ic" data-icon="${ic}"></span><span data-i18n="${label}"></span></a>`
    ).join("");
}

// Company cabinet sidebar (shared across company pages).
function buildCompanySidebar(active) {
  const items = [
    ["workspace", "dashboard.html", "home",    "co.title"],
    ["content",   "content.html",   "bag",     "co.content"],
    ["report",    "report.html",    "file",    "co.myReport"],
    ["chats",     "chats.html",     "message", "side.chats"],
    ["rnd",       "rnd.html",       "flask",   "side.rnd"],
  ];
  return `<div class="side-label" data-i18n="co.brand">Кабинет компании</div>` +
    items.map(([key, href, ic, label]) =>
      `<a class="side-link${key === active ? " active" : ""}" href="${href}"><span class="ic" data-icon="${ic}"></span><span data-i18n="${label}"></span></a>`
    ).join("");
}

/* ----------------------------------------------------------
   4c. Notifications bell (admin + companies only)
   ---------------------------------------------------------- */
function pickLang(o) { return (o && typeof o === "object") ? (o[K.lang] || o.ru || o.en || "") : (o || ""); }

function initNotifications() {
  const wrap = document.getElementById("notifWrap");
  if (!wrap || !session()) return;
  const btn = document.getElementById("notifBtn"), panel = document.getElementById("notifPanel"),
        list = document.getElementById("notifList"), badge = document.getElementById("notifBadge");

  async function load() {
    try {
      const { list: items, unread } = await api("/api/notifications");
      badge.hidden = unread === 0;
      badge.textContent = unread > 99 ? "99+" : String(unread);
      list.innerHTML = items.length
        ? items.map(n => `<div class="notif-item ${n.read ? "" : "unread"} ${n.link ? "clickable" : ""}" ${n.link ? `data-link="${escHtml(n.link)}"` : ""}>
            <div class="ni-ico">${icon("bell", 15)}</div>
            <div class="grow"><b>${escHtml(pickLang(n.title))}</b><small>${escHtml(n.text)}</small><time>${escHtml((n.at || "").slice(0, 16).replace("T", " "))}</time></div>
            ${n.link ? `<span class="ni-go">${icon("chevronLeft", 16)}</span>` : ""}
          </div>`).join("")
        : `<div class="notif-empty" data-i18n="notif.empty">Нет уведомлений</div>`;
      translateTree(list);
    } catch {}
  }

  btn.addEventListener("click", async e => {
    e.stopPropagation();
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    if (willOpen) { await load(); try { await api("/api/notifications/read", { method: "POST" }); } catch {} badge.hidden = true; }
  });
  // Click a notification → jump to the related page.
  list.addEventListener("click", e => {
    const item = e.target.closest(".notif-item[data-link]"); if (!item) return;
    location.href = item.getAttribute("data-link");
  });
  document.addEventListener("click", e => { if (!wrap.contains(e.target)) panel.hidden = true; });

  load();
  setInterval(load, 25000); // keep the badge fresh
  document.addEventListener("langchange", () => { if (!panel.hidden) load(); });
}

/* ----------------------------------------------------------
   5. Toast notifications
   ---------------------------------------------------------- */
function toast(title, msg, type = "") {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) { wrap = document.createElement("div"); wrap.className = "toast-wrap"; document.body.appendChild(wrap); }
  const ico = type === "error" ? "⚠️" : type === "success" ? "✅" : "🔔";
  const el = document.createElement("div");
  el.className = "toast " + type;
  el.innerHTML = `<span class="t-ico">${ico}</span>
    <div><div class="t-title">${title}</div><div class="t-msg">${msg}</div></div>`;
  wrap.appendChild(el);
  setTimeout(() => { el.style.opacity = "0"; el.style.transform = "translateY(-10px)";
    setTimeout(() => el.remove(), 300); }, 3600);
}

/* ----------------------------------------------------------
   5b. Styled modal dialogs (replace native prompt/confirm)
   ---------------------------------------------------------- */
// Text-input dialog. Resolves to the trimmed string, or null if cancelled/empty.
function uiPrompt(opts = {}) {
  return new Promise(resolve => {
    const o = document.createElement("div");
    o.className = "modal-overlay";
    o.innerHTML = `
      <div class="modal-card" role="dialog" aria-modal="true">
        <div class="modal-title">${escHtml(opts.title || "")}</div>
        <div class="modal-body"><input class="form-control modal-input" type="text" /></div>
        <div class="modal-actions">
          <button class="btn btn-soft btn-sm" data-act="cancel">${escHtml(opts.cancel || t("co.cancel"))}</button>
          <button class="btn btn-primary btn-sm" data-act="ok">${escHtml(opts.ok || t("co.save"))}</button>
        </div>
      </div>`;
    document.body.appendChild(o);
    const input = o.querySelector(".modal-input");
    input.value = opts.value || "";
    if (opts.placeholder) input.placeholder = opts.placeholder;
    const close = v => { o.remove(); document.removeEventListener("keydown", onKey); resolve(v); };
    const submit = () => { const v = input.value.trim(); close(v || null); };
    o.addEventListener("click", e => {
      if (e.target === o) return close(null);
      const b = e.target.closest("button[data-act]"); if (!b) return;
      b.dataset.act === "ok" ? submit() : close(null);
    });
    function onKey(e) { if (e.key === "Escape") close(null); else if (e.key === "Enter") { e.preventDefault(); submit(); } }
    document.addEventListener("keydown", onKey);
    requestAnimationFrame(() => { o.classList.add("open"); input.focus(); input.select(); });
  });
}
// Confirmation dialog. Resolves true (OK) / false (cancel).
function uiConfirm(opts = {}) {
  return new Promise(resolve => {
    const o = document.createElement("div");
    o.className = "modal-overlay";
    o.innerHTML = `
      <div class="modal-card" role="dialog" aria-modal="true">
        <div class="modal-title">${escHtml(opts.title || "")}</div>
        ${opts.message ? `<div class="modal-body"><p class="modal-msg">${escHtml(opts.message)}</p></div>` : ""}
        <div class="modal-actions">
          <button class="btn btn-soft btn-sm" data-act="cancel">${escHtml(opts.cancel || t("co.cancel"))}</button>
          <button class="btn ${opts.danger ? "btn-danger" : "btn-primary"} btn-sm" data-act="ok">${escHtml(opts.ok || t("co.delete"))}</button>
        </div>
      </div>`;
    document.body.appendChild(o);
    const close = v => { o.remove(); document.removeEventListener("keydown", onKey); resolve(v); };
    o.addEventListener("click", e => {
      if (e.target === o) return close(false);
      const b = e.target.closest("button[data-act]"); if (!b) return;
      close(b.dataset.act === "ok");
    });
    function onKey(e) { if (e.key === "Escape") close(false); else if (e.key === "Enter") { e.preventDefault(); close(true); } }
    document.addEventListener("keydown", onKey);
    requestAnimationFrame(() => o.classList.add("open"));
  });
}

/* ----------------------------------------------------------
   5c. Photo lightbox — tap any photo to view it full-screen (all devices)
   ---------------------------------------------------------- */
function openLightbox(src) {
  if (!src) return;
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = `<img src="${src}" alt=""><button class="lightbox-close" aria-label="Close">${icon("close", 22)}</button>`;
  document.body.appendChild(box);
  document.body.style.overflow = "hidden";
  const close = () => { box.remove(); document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  box.addEventListener("click", close);
  function onKey(e) { if (e.key === "Escape") close(); }
  document.addEventListener("keydown", onKey);
  requestAnimationFrame(() => box.classList.add("show"));
}
function initLightbox() {
  document.addEventListener("click", e => {
    const img = e.target.closest(".b-img, .detail-img, .article-banner-img, .attach-item.view img, .article-gallery img");
    if (!img) return;
    const a = img.closest("a"); if (a) e.preventDefault();   // don't also open the file link / navigate
    openLightbox(img.currentSrc || img.src);
  });
}

/* ----------------------------------------------------------
   6. AI Chat widget (visitor + company variants)
   ---------------------------------------------------------- */
function initAIChat(config = {}) {
  const guest = config.mode === "guest";
  const launcher = document.getElementById("aiLauncher");
  const panel = document.getElementById("aiPanel");
  if (!launcher || !panel) return;

  const body = panel.querySelector(".ai-body");
  const input = panel.querySelector("input");
  const sendBtn = panel.querySelector(".ai-foot button");
  const limitBar = panel.querySelector(".ai-limit");
  let remaining = 3;

  // stable per-browser visitor id for the guest widget
  function visitorId() {
    let v = localStorage.getItem("kong_ai_visitor");
    if (!v) { v = "guest-" + Math.random().toString(36).slice(2); localStorage.setItem("kong_ai_visitor", v); }
    return v;
  }
  function setLimit(left) {
    if (!guest || !limitBar) return;
    remaining = left;
    if (left > 0) {
      limitBar.classList.remove("locked");
      limitBar.textContent = `${left} ${t("ai.left")}`;
      input.disabled = false; sendBtn.disabled = false;
    } else {
      limitBar.classList.add("locked");
      limitBar.textContent = t("ai.locked");
      input.disabled = true; sendBtn.disabled = true;
    }
  }
  let welcomeEl = null;
  function addMsg(text, cls) {
    const m = document.createElement("div");
    m.className = "ai-msg " + cls;
    m.textContent = text;
    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
    return m;
  }
  async function send() {
    const text = input.value.trim();
    if (!text) return;
    if (guest && remaining <= 0) return;
    addMsg(text, "user");
    input.value = "";
    try {
      const payload = guest
        ? { visitor: visitorId(), message: text, lang: K.lang }
        : { message: text, lang: K.lang };
      const r = await api("/api/ai/chat", { method: "POST", body: payload });
      if (r.offtopic) { addMsg(guest ? t("aichat.offtopic") : t("co.blocked"), "warn"); return; }
      if (r.locked)   { setLimit(0); return; }
      if (guest && typeof r.remaining === "number") setLimit(r.remaining);
      setTimeout(() => addMsg(r.reply, "bot"), 300);
    } catch {
      addMsg({ uz:"Xatolik yuz berdi.", ru:"Произошла ошибка.", en:"An error occurred." }[K.lang], "warn");
    }
  }

  launcher.addEventListener("click", async () => {
    panel.classList.toggle("open");
    if (panel.classList.contains("open") && !body.dataset.init) {
      welcomeEl = addMsg(t("ai.welcome"), "bot"); body.dataset.init = "1";
      if (guest) { try { const u = await api("/api/ai/usage?visitor=" + encodeURIComponent(visitorId())); setLimit(u.remaining); } catch {} }
    }
  });
  panel.querySelector(".ai-close").addEventListener("click", () => panel.classList.remove("open"));
  sendBtn.addEventListener("click", send);
  input.addEventListener("keydown", e => { if (e.key === "Enter") send(); });

  document.addEventListener("langchange", () => {
    if (guest) setLimit(remaining);
    if (welcomeEl) welcomeEl.textContent = t("ai.welcome");   // keep greeting in the chosen language
  });
}

/* ----------------------------------------------------------
   6b. Business AI panel (logged-in company/admin — unlimited, topic-locked)
   Reuses the .chat-shell / .ai-msg styling from the public assistant.
   ---------------------------------------------------------- */
// Returns the inner markup for a business-AI panel. Drop it into any container.
function buildBizAiShell() {
  return `
  <div class="panel chat-shell biz-ai">
    <div class="chat-shell-head">
      <div class="ai-avatar" data-icon="sparkles" data-icon-size="24"></div>
      <div>
        <b data-i18n="co.bizAi">Бизнес AI-помощник</b>
        <em data-i18n="aichat.status">Онлайн · 24/7</em>
      </div>
    </div>
    <div class="chat-shell-body" id="bizAiBody"></div>
    <div class="chat-suggest" id="bizAiSuggest">
      <button data-i18n="bizai.s2">Сколько товаров в каталоге?</button>
      <button data-i18n="bizai.s3">Последняя новость?</button>
      <button data-action="letter" data-i18n="bizai.letter">Составить письмо администратору</button>
    </div>
    <div class="ai-attachments" id="bizAiAtts"></div>
    <div class="chat-shell-input">
      <input type="file" id="bizAiFile" hidden multiple accept="image/*,audio/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip" />
      <button class="ci-btn" id="bizAiAttach" data-icon="paperclip" title="Файл / фото"></button>
      <button class="ci-btn" id="bizAiMic" data-icon="mic" title="Голосовое"></button>
      <input type="text" id="bizAiInput" data-i18n-ph="ai.placeholder" placeholder="Напишите ваш вопрос..." />
      <button id="bizAiSend" data-icon="send" data-icon-size="18"></button>
    </div>
  </div>`;
}

// Detects a problem report → the AI should produce an official letter.
const BIZAI_PROBLEM = /muammo|проблем|problem|issue|shikoyat|жалоб|complaint|ishlamayapti|не работает|xato|ошибк|error|kechik|задерж|delay|sekin|медлен|slow|to'lov|плат|payment|buzil|сломал|поврежд|yo'qol|пропал|missing/i;

// Wire the business-AI panel. Safe to call once after buildBizAiShell() is in the DOM.
function initBizAi() {
  const body = document.getElementById("bizAiBody");
  const input = document.getElementById("bizAiInput");
  const sendBtn = document.getElementById("bizAiSend");
  const suggest = document.getElementById("bizAiSuggest");
  const attWrap = document.getElementById("bizAiAtts");
  const fileInput = document.getElementById("bizAiFile");
  const attachBtn = document.getElementById("bizAiAttach");
  const micBtn = document.getElementById("bizAiMic");
  if (!body || !input || !sendBtn || body.dataset.init) return;
  body.dataset.init = "1";
  renderIcons(body.closest(".chat-shell"));
  translateTree(body.closest(".chat-shell"));

  function addMsg(text, cls) {
    const m = document.createElement("div");
    m.className = "ai-msg " + cls;
    m.textContent = text;
    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
    return m;
  }
  const greet = addMsg(t("ai.welcome"), "bot");

  /* ---- pending attachments (photos / files / voice) ---- */
  let atts = [];
  function renderAtts() {
    attWrap.innerHTML = atts.map((a, i) => `
      <span class="ai-att">
        ${a.kind === "image" ? `<img src="${a.data}" alt="">` : `<span class="ai-att-ico">${icon(a.kind === "voice" ? "mic" : "file", 14)}</span>`}
        <span class="ai-att-name">${escHtml(a.kind === "voice" ? "🎤 " + fmtDur(a.dur) : (a.name || "file"))}</span>
        <button type="button" class="ai-att-x" data-i="${i}">${icon("close", 12)}</button>
      </span>`).join("");
    attWrap.classList.toggle("has", atts.length > 0);
  }
  attWrap.addEventListener("click", e => { const b = e.target.closest(".ai-att-x"); if (!b) return; atts.splice(+b.dataset.i, 1); renderAtts(); });

  attachBtn.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", async () => {
    for (const f of Array.from(fileInput.files)) {
      if (atts.length >= 6) break;
      if (f.size > 8 * 1024 * 1024) { toast(t("login.err.title"), "≤ 8 MB", "error"); continue; }
      try {
        const data = await fileToDataURL(f);
        atts.push({ kind: f.type.startsWith("image/") ? "image" : (f.type.startsWith("audio/") ? "voice" : "file"), data, name: f.name });
      } catch {}
    }
    fileInput.value = ""; renderAtts();
  });

  // voice recording
  if (micBtn) {
    if (!navigator.mediaDevices || !window.MediaRecorder) { micBtn.style.display = "none"; }
    else {
      let rec = null, chunks = [], startTs = 0, stream = null;
      micBtn.addEventListener("click", async () => {
        if (rec && rec.state === "recording") { rec.stop(); return; }
        try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch { toast(t("login.err.title"), "🎤", "error"); return; }
        chunks = []; rec = new MediaRecorder(stream); startTs = Date.now();
        rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
        rec.onstop = async () => {
          micBtn.classList.remove("rec"); micBtn.innerHTML = icon("mic", 18);
          stream.getTracks().forEach(x => x.stop());
          const blob = new Blob(chunks, { type: (chunks[0] && chunks[0].type) || "audio/webm" });
          const dur = (Date.now() - startTs) / 1000; if (dur < 0.4) return;
          try { atts.push({ kind: "voice", data: await fileToDataURL(blob), name: "voice", dur }); renderAtts(); } catch {}
        };
        rec.start(); micBtn.classList.add("rec"); micBtn.innerHTML = icon("stop", 18);
      });
    }
  }

  /* ---- render an official letter with a "send to admin" action ---- */
  function addLetter(letterText, subject, sentAtts) {
    addMsg(t("bizai.letterReady"), "bot");
    const wrap = document.createElement("div");
    wrap.className = "ai-msg bot ai-letter";
    const pre = document.createElement("pre"); pre.className = "letter-text"; pre.textContent = letterText;
    const btn = document.createElement("button"); btn.className = "btn btn-primary btn-sm letter-send"; btn.textContent = t("bizai.sendAdmin");
    wrap.appendChild(pre); wrap.appendChild(btn);
    body.appendChild(wrap); body.scrollTop = body.scrollHeight;
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      try {
        await api("/api/complaints", { method: "POST", body: { text: letterText, official: true, title: subject, attachments: sentAtts } });
        btn.textContent = t("bizai.sentAdmin"); btn.classList.add("done");
        toast(t("bizai.letter"), t("bizai.sentAdmin"), "success");
      } catch { btn.disabled = false; toast(t("login.err.title"), "", "error"); }
    });
  }

  async function go(text, forceLetter) {
    const v = (text != null ? text : input.value).trim();
    if (!v && !atts.length) { if (forceLetter) addMsg(t("bizai.describe"), "warn"); return; }

    // user bubble (echo text + attachment count)
    const summary = v + (atts.length ? (v ? "  " : "") + "📎" + atts.length : "");
    addMsg(summary || ("📎" + atts.length), "user");
    input.value = "";

    const letterMode = forceLetter || atts.length > 0 || BIZAI_PROBLEM.test(v);
    const sentAtts = atts.slice(); atts = []; renderAtts();

    const typing = addMsg("", "bot typing"); typing.innerHTML = "<span></span><span></span><span></span>";
    try {
      if (letterMode) {
        const r = await api("/api/ai/letter", { method: "POST", body: { message: v, lang: K.lang, attachments: sentAtts.map(a => ({ kind: a.kind, name: a.name })) } });
        typing.remove();
        addLetter(r.letter, r.subject, sentAtts);
      } else {
        const r = await api("/api/ai/chat", { method: "POST", body: { message: v, lang: K.lang } });
        typing.remove();
        if (r.offtopic) { addMsg(t("co.blocked"), "warn"); return; }
        if (r.reply) addMsg(r.reply, "bot");
      }
    } catch {
      typing.remove();
      addMsg({ uz:"Xatolik yuz berdi.", ru:"Произошла ошибка.", en:"An error occurred." }[K.lang], "warn");
    }
  }

  sendBtn.addEventListener("click", () => go());
  input.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
  suggest.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.action === "letter") go(input.value, true);   // draft a letter from what's typed/attached
    else go(b.textContent);
  });
  document.addEventListener("langchange", () => { greet.textContent = t("ai.welcome"); });
}

/* ----------------------------------------------------------
   7. Login logic
   ---------------------------------------------------------- */
function initLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const u = document.getElementById("loginEmail").value.trim();
    const p = document.getElementById("loginPass").value;
    try {
      const { token, user } = await api("/api/auth/login", { method: "POST", body: { username: u, password: p } });
      setSession(token, user);
      toast(t("login.ok.title"), t("login.ok.msg"), "success");
      const dest = user.role === "admin" ? "/admin/control-panel.html" : "/company/dashboard.html";
      setTimeout(() => location.href = dest, 700);
    } catch (err) {
      toast(t("login.err.title"), t("login.err.msg"), "error");
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 500);
    }
  });
}

/* ----------------------------------------------------------
   8. Generic chat (group + individual) initializer
   ---------------------------------------------------------- */
function initChat(streamId, inputId, sendId, fromLabel) {
  const stream = document.getElementById(streamId);
  const input = document.getElementById(inputId);
  const send = document.getElementById(sendId);
  if (!stream || !input || !send) return;
  function add(text) {
    const b = document.createElement("div");
    b.className = "bubble me";
    b.innerHTML = `<div class="b-from">${fromLabel}</div>${text}`;
    stream.appendChild(b); stream.scrollTop = stream.scrollHeight;
  }
  function go() { const v = input.value.trim(); if (!v) return; add(v); input.value = ""; }
  send.addEventListener("click", go);
  input.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
}

/* ----------------------------------------------------------
   8b. Rich chat: message rendering + composer (text/photo/file/voice)
   ---------------------------------------------------------- */
function escHtml(s) { return String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;" }[c])); }
function fmtDur(sec) { sec = Math.max(0, Math.round(sec || 0)); return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0"); }
function fileToDataURL(file) {
  return new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(file); });
}
// Short timestamp for read receipts: "14:05" today, else "26.06 14:05".
function fmtSeen(ts) {
  if (!ts) return "";
  const d = new Date(ts), p = n => String(n).padStart(2, "0");
  const hm = p(d.getHours()) + ":" + p(d.getMinutes());
  return d.toDateString() === new Date().toDateString() ? hm : (p(d.getDate()) + "." + p(d.getMonth() + 1) + " " + hm);
}

// Render one message bubble by kind. `meName` = current user's display name.
// opts.isGroup → group chat (per-reader receipt list) vs 1:1 (seen/sent status).
function msgBubble(m, meName, opts = {}) {
  const s = session();
  const me = m.sender === meName;
  const isAdmin = s && s.role === "admin";
  const isText = (m.kind || "text") === "text";
  let inner;
  if (m.kind === "image" && m.data)      inner = `<img class="b-img" src="${m.data}" alt="">`;
  else if (m.kind === "voice" && m.data) inner = `<span class="b-voice"><audio class="b-audio" controls src="${m.data}"></audio>${m.dur ? `<span class="b-dur">${fmtDur(m.dur)}</span>` : ""}</span>`;
  else if (m.kind === "file" && m.data)  inner = `<a class="b-file" href="${m.data}" download="${escHtml(m.name || "file")}">${icon("file", 16)}<span>${escHtml(m.name || "file")}</span></a>`;
  else                                   inner = `<span class="b-text">${escHtml(m.text || "")}</span>`;
  const edited = m.edited ? ` <span class="b-edited">(${t("msg.edited")})</span>` : "";

  // footer: send time (every message) + read-receipt status (own messages only)
  const time = (m.ts && m.ts > 1e12) ? escHtml(fmtSeen(m.ts)) : "";   // skip tiny seed timestamps
  const timeHtml = time ? `<span class="b-time">${time}</span>` : "";
  let receipt = "";
  if (me && m.sending) {
    receipt = `<div class="b-receipt sending">${timeHtml}<span class="rc-sending">${escHtml(t("msg.sending"))}…</span></div>`;
  } else if (me && m.failed) {
    receipt = `<div class="b-receipt failed">${timeHtml}<span class="rc-failed">✕ ${escHtml(t("msg.failed"))}</span></div>`;
  } else if (me) {
    const seen = m.seenBy || [];
    let status;
    if (opts.isGroup) {
      status = seen.length
        ? `<button type="button" class="seen-toggle" title="${escHtml(t("msg.seenBy"))}">✓✓ ${seen.length}</button>
           <div class="seen-pop" hidden><div class="seen-head">${escHtml(t("msg.seenBy"))}</div>${seen.map(x => `<div class="seen-row"><span class="seen-ava">${escHtml((x.name || "?")[0])}</span><span class="seen-name">${escHtml(x.name)}</span><time>${escHtml(fmtSeen(x.at))}</time></div>`).join("")}</div>`
        : `<span class="rc-sent">✓ ${escHtml(t("msg.sent"))}</span>`;
    } else {
      const first = seen[0];
      status = seen.length
        ? `<span class="rc-seen">✓✓ ${escHtml(t("msg.seen"))}${first ? " · " + escHtml(fmtSeen(first.at)) : ""}</span>`
        : `<span class="rc-sent">✓ ${escHtml(t("msg.sent"))}</span>`;
    }
    receipt = `<div class="b-receipt ${seen.length ? "seen" : ""}">${timeHtml}${status}</div>`;
  } else {
    receipt = timeHtml ? `<div class="b-receipt them">${timeHtml}</div>` : "";
  }

  const canEdit = me && isText && !m.sending && !m.failed;
  const canDel = (me || isAdmin) && !m.sending;
  const acts = (canEdit || canDel)
    ? `<div class="bubble-actions">
         ${canEdit ? `<button type="button" data-msg-act="edit" title="${escHtml(t("co.edit"))}">${icon("sliders", 13)}</button>` : ""}
         ${canDel ? `<button type="button" data-msg-act="del" title="${escHtml(t("co.delete"))}">${icon("close", 13)}</button>` : ""}
       </div>`
    : "";
  return `<div class="bubble ${me ? "me" : "them"}" data-id="${escHtml(m.id)}"><div class="b-from">${escHtml(m.sender)}</div>${inner}${edited}${receipt}${acts}</div>`;
}

// Wire edit/delete on a chat stream (event-delegated). `reload` re-fetches the stream.
function initMessageActions(streamEl, reload) {
  const stream = typeof streamEl === "string" ? document.getElementById(streamEl) : streamEl;
  if (!stream || stream.dataset.actInit) return;
  stream.dataset.actInit = "1";
  stream.addEventListener("click", async e => {
    // read-receipt popover (group chat)
    const seenBtn = e.target.closest(".seen-toggle");
    if (seenBtn) {
      const pop = seenBtn.parentElement.querySelector(".seen-pop");
      const willShow = pop && pop.hidden;
      document.querySelectorAll(".seen-pop").forEach(p => p.hidden = true);
      if (pop) pop.hidden = !willShow;
      return;
    }
    const btn = e.target.closest("[data-msg-act]"); if (!btn) return;
    const bubble = btn.closest(".bubble[data-id]"); if (!bubble) return;
    const id = bubble.dataset.id, act = btn.dataset.msgAct;
    if (act === "del") {
      if (!await uiConfirm({ title: t("co.delConfirm"), danger: true })) return;
      try { await api("/api/messages/" + encodeURIComponent(id), { method: "DELETE" }); reload && await reload(); }
      catch { toast(t("login.err.title"), "", "error"); }
    } else if (act === "edit") {
      const cur = bubble.querySelector(".b-text");
      const next = await uiPrompt({ title: t("msg.editPrompt"), value: cur ? cur.textContent : "", ok: t("co.update") });
      if (next == null) return;
      try { await api("/api/messages/" + encodeURIComponent(id), { method: "PUT", body: { text: next } }); reload && await reload(); }
      catch { toast(t("login.err.title"), "", "error"); }
    }
  });
  // close any open read-receipt popover on outside click
  document.addEventListener("click", e => {
    if (!e.target.closest(".b-receipt")) stream.querySelectorAll(".seen-pop").forEach(p => p.hidden = true);
  });
}

// Wire an attach/mic/text/send composer for one chat.
// opts: { input, send, attach, file, mic, getChat, reload,   (all element ids / fns)
//         stream, meName, isGroup }  (optional — enable optimistic "Sending…" bubble)
function initComposer(opts) {
  const byId = id => id && document.getElementById(id);
  const input = byId(opts.input), send = byId(opts.send), attach = byId(opts.attach), file = byId(opts.file), mic = byId(opts.mic);
  const streamEl = opts.stream ? byId(opts.stream) : null;
  const groupNow = () => (typeof opts.isGroup === "function" ? opts.isGroup() : !!opts.isGroup);
  if (!input || !send) return;

  async function post(payload) {
    // Optimistic bubble: show the message immediately with a "Sending…" status,
    // so on slow connections the user sees it's in progress.
    let temp = null;
    if (streamEl && opts.meName) {
      const m = { id: "tmp", sender: opts.meName, kind: payload.kind, text: payload.text || "",
        data: payload.data || null, name: payload.name || null, dur: payload.dur || null,
        ts: Date.now(), seenBy: [], sending: true };
      streamEl.insertAdjacentHTML("beforeend", msgBubble(m, opts.meName, { isGroup: groupNow() }));
      temp = streamEl.lastElementChild;
      streamEl.scrollTop = streamEl.scrollHeight;
    }
    try {
      await api("/api/messages", { method: "POST", body: { chat: opts.getChat(), ...payload } });
      opts.reload && await opts.reload();   // reload replaces the temp bubble with the real one
    } catch {
      if (temp) { const r = temp.querySelector(".b-receipt"); if (r) r.outerHTML = `<div class="b-receipt failed"><span class="rc-failed">✕ ${t("msg.failed")}</span></div>`; }
      toast(t("login.err.title"), "", "error");
    }
  }
  async function sendText() { const v = input.value.trim(); if (!v) return; input.value = ""; await post({ kind: "text", text: v }); }
  send.addEventListener("click", sendText);
  input.addEventListener("keydown", e => { if (e.key === "Enter") sendText(); });

  // photo / file
  if (attach && file) {
    attach.addEventListener("click", () => file.click());
    file.addEventListener("change", async () => {
      const f = file.files[0]; if (!f) return;
      if (f.size > 8 * 1024 * 1024) { toast(t("login.err.title"), "≤ 8 MB", "error"); file.value = ""; return; }
      try {
        const data = await fileToDataURL(f);
        await post({ kind: f.type.startsWith("image/") ? "image" : "file", data, name: f.name });
      } catch { toast(t("login.err.title"), "", "error"); }
      file.value = "";
    });
  }

  // voice (MediaRecorder)
  if (mic) {
    if (!navigator.mediaDevices || !window.MediaRecorder) { mic.style.display = "none"; }
    else {
      let rec = null, chunks = [], startTs = 0, stream = null;
      mic.addEventListener("click", async () => {
        if (rec && rec.state === "recording") { rec.stop(); return; }
        try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
        catch { toast(t("login.err.title"), "🎤", "error"); return; }
        chunks = []; rec = new MediaRecorder(stream); startTs = Date.now();
        rec.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
        rec.onstop = async () => {
          mic.classList.remove("rec"); mic.innerHTML = icon("mic", 18);
          stream.getTracks().forEach(x => x.stop());
          const blob = new Blob(chunks, { type: (chunks[0] && chunks[0].type) || "audio/webm" });
          const dur = (Date.now() - startTs) / 1000;
          if (dur < 0.4) return; // ignore accidental taps
          try { const data = await fileToDataURL(blob); await post({ kind: "voice", data, dur }); }
          catch { toast(t("login.err.title"), "", "error"); }
        };
        rec.start(); mic.classList.add("rec"); mic.innerHTML = icon("stop", 18);
      });
    }
  }
}

/* ----------------------------------------------------------
   8c. Reusable multi-photo picker (1..max photos)
   Manages an images[] array with thumbnail previews + per-photo remove.
   opts: { button, input, preview, max } — ids or elements.
   Returns { get(), set(arr), clear() }.
   ---------------------------------------------------------- */
function createPhotoPicker(opts) {
  const el = x => (typeof x === "string" ? document.getElementById(x) : x);
  const btn = el(opts.button), inp = el(opts.input), box = el(opts.preview);
  const max = opts.max || 3;
  let images = [];
  function render() {
    if (box) box.innerHTML = images.map((src, i) => `
      <div class="attach-item"><img src="${src}" alt="">
        <button type="button" class="attach-x" data-i="${i}" title="✕">${icon("close", 14)}</button></div>`).join("");
    if (btn) btn.disabled = images.length >= max;
  }
  if (btn && inp) {
    btn.addEventListener("click", () => inp.click());
    inp.addEventListener("change", async () => {
      for (const f of Array.from(inp.files)) {
        if (images.length >= max) { toast(t("photos.label"), "≤ " + max, "error"); break; }
        if (!f.type.startsWith("image/")) continue;
        if (f.size > 5 * 1024 * 1024) { toast(t("login.err.title"), "≤ 5 MB", "error"); continue; }
        try { images.push(await fileToDataURL(f)); } catch {}
      }
      inp.value = ""; render();
    });
  }
  if (box) box.addEventListener("click", e => {
    const b = e.target.closest(".attach-x"); if (!b) return;
    images.splice(+b.dataset.i, 1); render();
  });
  return {
    get: () => images.slice(),
    set: arr => { images = Array.isArray(arr) ? arr.filter(Boolean).slice(0, max) : []; render(); },
    clear: () => { images = []; render(); },
  };
}

/* ----------------------------------------------------------
   9. Accordion modules
   ---------------------------------------------------------- */
function initAccordions() {
  document.querySelectorAll(".module-block .mb-head").forEach(head => {
    head.addEventListener("click", e => {
      if (e.target.closest(".switch") || e.target.closest("button")) return;
      head.parentElement.classList.toggle("open");
    });
  });
}

/* ----------------------------------------------------------
   10. Chart.js — theme-aware dashboard graphs
   ---------------------------------------------------------- */
const KCharts = []; // [{ chart, apply(chart, colors) }]
let _glowPluginReady = false;

// hex (#rgb / #rrggbb) -> rgba string with alpha
function hexA(hex, a) {
  hex = (hex || "").trim().replace("#", "");
  if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
  const n = parseInt(hex || "000000", 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

// pull live theme colors straight from the CSS variables of the active [data-theme]
function chartColors() {
  const cs = getComputedStyle(document.documentElement);
  const v = name => cs.getPropertyValue(name).trim();
  const dark = K.theme === "dark";
  return {
    dark,
    accent:  v("--accent")   || "#43e3ff",
    accent2: v("--accent-2") || "#7b6bff",
    accent3: v("--accent-3") || "#00ffa3",
    text:    v("--text-dim") || "#93a2c4",
    grid:    dark ? "rgba(120,150,230,0.12)" : "rgba(40,70,140,0.10)",
  };
}

// neon glow only in dark theme — drawn via canvas shadow around lines/bars
function ensureGlowPlugin() {
  if (_glowPluginReady || typeof Chart === "undefined") return;
  Chart.register({
    id: "kongGlow",
    beforeDatasetsDraw(chart) {
      const ctx = chart.ctx;
      if (chart.$glow) { ctx.shadowColor = chart.$glowColor || "rgba(67,227,255,.6)"; ctx.shadowBlur = 14; }
      else { ctx.shadowBlur = 0; }
    },
    afterDatasetsDraw(chart) { chart.ctx.shadowBlur = 0; },
  });
  _glowPluginReady = true;
}

function styleScales(chart, c) {
  ["x", "y"].forEach(ax => {
    const s = chart.options.scales && chart.options.scales[ax];
    if (!s) return;
    s.grid = s.grid || {}; s.grid.color = c.grid; s.grid.drawBorder = false;
    s.ticks = s.ticks || {}; s.ticks.color = c.text;
    s.border = s.border || {}; s.border.color = c.grid;
  });
  if (chart.options.plugins && chart.options.plugins.legend && chart.options.plugins.legend.labels)
    chart.options.plugins.legend.labels.color = c.text;
}

// LINE: AI assistant activity — neon stroke + gradient fill
function applyLine(chart, c) {
  const ds = chart.data.datasets[0];
  const g = chart.ctx.createLinearGradient(0, 0, 0, chart.height || 220);
  g.addColorStop(0, hexA(c.accent, c.dark ? 0.38 : 0.26));
  g.addColorStop(1, hexA(c.accent, 0));
  ds.borderColor = c.accent;
  ds.backgroundColor = g;
  ds.pointBackgroundColor = c.accent;
  ds.pointBorderColor = c.dark ? "#0b1020" : "#ffffff";
  ds.pointHoverBackgroundColor = c.accent2;
  chart.$glow = c.dark;
  chart.$glowColor = hexA(c.accent, 0.65);
  styleScales(chart, c);
}

// BAR: company sector analytics — vertical gradient bars
function applyBar(chart, c) {
  const ds = chart.data.datasets[0];
  const g = chart.ctx.createLinearGradient(0, 0, 0, chart.height || 220);
  g.addColorStop(0, c.accent2);
  g.addColorStop(1, hexA(c.accent, c.dark ? 0.55 : 0.9));
  ds.backgroundColor = g;
  ds.borderColor = c.accent;
  ds.borderWidth = c.dark ? 1 : 0;
  ds.hoverBackgroundColor = c.accent;
  ds.borderRadius = 8;
  chart.$glow = c.dark;
  chart.$glowColor = hexA(c.accent2, 0.55);
  styleScales(chart, c);
}

function restyleAllCharts() {
  if (!KCharts.length) return;
  const c = chartColors();
  KCharts.forEach(x => { x.apply(x.chart, c); x.chart.update("none"); });
}

/*
  initDashboardCharts(data) — call from a page that has #aiChart / #companyChart canvases.
  data = {
    ai:      { labels:[...], values:[...] },
    company: { labels:[...], values:[...] }
  }
  Returns { aiChart, companyChart } so the page can refresh labels on language change.
*/
function initDashboardCharts(data) {
  if (typeof Chart === "undefined") { console.warn("Chart.js not loaded"); return {}; }
  ensureGlowPlugin();
  const c = chartColors();
  Chart.defaults.font.family = "'Segoe UI', Inter, system-ui, sans-serif";
  Chart.defaults.color = c.text;

  const out = {};
  const aiCanvas = document.getElementById("aiChart");
  const coCanvas = document.getElementById("companyChart");

  if (aiCanvas && data.ai) {
    const chart = new Chart(aiCanvas, {
      type: "line",
      data: { labels: data.ai.labels, datasets: [{
        label: "AI", data: data.ai.values,
        borderWidth: 3, tension: 0.4, fill: true,
        pointRadius: 4, pointHoverRadius: 6,
      }]},
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false },
          tooltip: { backgroundColor: hexA(c.accent2, 0.95), padding: 10, displayColors: false } },
        scales: { x: {}, y: { beginAtZero: true } },
      },
    });
    applyLine(chart, c); chart.update("none");
    KCharts.push({ chart, apply: applyLine });
    out.aiChart = chart;
  }

  if (coCanvas && data.company) {
    const chart = new Chart(coCanvas, {
      type: "bar",
      data: { labels: data.company.labels, datasets: [{
        label: "Companies", data: data.company.values, maxBarThickness: 46,
      }]},
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false },
          tooltip: { backgroundColor: hexA(c.accent, 0.95), padding: 10, displayColors: false } },
        scales: { x: {}, y: { beginAtZero: true } },
      },
    });
    applyBar(chart, c); chart.update("none");
    KCharts.push({ chart, apply: applyBar });
    out.companyChart = chart;
  }
  return out;
}

/* ----------------------------------------------------------
   10b. Localized native form validation messages (UZ/RU/EN)
   The browser's built-in "required" bubble uses the browser locale;
   override it with the app's chosen language via setCustomValidity.
   ---------------------------------------------------------- */
function localizeValidation() {
  const msgFor = el => {
    const v = el.validity;
    if (v.valueMissing) return t("form.required");
    if (v.typeMismatch && el.type === "email") return t("form.email");
    if (v.typeMismatch || v.patternMismatch || v.rangeUnderflow || v.rangeOverflow ||
        v.stepMismatch || v.tooShort || v.tooLong || v.badInput) return t("form.invalid");
    return "";
  };
  // 'invalid' does not bubble → listen in the capture phase.
  document.addEventListener("invalid", e => {
    const el = e.target;
    if (!el || typeof el.setCustomValidity !== "function") return;
    el.setCustomValidity("");                    // recompute against real constraints
    if (!el.validity.valid) el.setCustomValidity(msgFor(el));
  }, true);
  // clear the custom message as the user types, so the field re-validates fresh
  const clear = e => { const el = e.target; if (el && typeof el.setCustomValidity === "function") el.setCustomValidity(""); };
  document.addEventListener("input", clear, true);
  document.addEventListener("change", clear, true);
}

/* ----------------------------------------------------------
   11. Boot
   ---------------------------------------------------------- */
let _booted = false;
function boot() {
  if (_booted) { applyLang(); return; } // idempotent: re-applying lang is safe, re-binding is not
  _booted = true;
  renderIcons(document);
  applyTheme();
  applyLang();
  initLogin();
  initAccordions();
  initNotifications();
  localizeValidation();
  initMobileNav();
  initLightbox();
  syncFavAuth();   // show/hide the "Избранное" tab based on sign-in state
}
document.addEventListener("DOMContentLoaded", boot);

/* tiny shake animation */
const style = document.createElement("style");
style.textContent = `@keyframes shk{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}.shake{animation:shk .4s}`;
document.head.appendChild(style);
