/* ============================================================
   Konglomerat — zero-dependency backend
   Node built-ins only (http, fs, crypto). No npm install needed.
   Serves the static frontend AND a JSON REST API on one origin.
   Run:  node server.js      (optional: PORT=5500 node server.js)
   ============================================================ */
"use strict";
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const ROOT = __dirname;
const STATIC_ROOT = path.join(ROOT, "src");   // front-end lives in ./src
const DATA_DIR = path.join(ROOT, "data");     // persisted DB stays at the root
const DB_FILE = path.join(DATA_DIR, "db.json");
const PORT = process.env.PORT || 5500;
const SECRET = "konglomerat-demo-secret-change-me";

/* ----------------------------------------------------------
   Password + token helpers
   ---------------------------------------------------------- */
function hashPw(pw, salt) {
  return crypto.scryptSync(String(pw), salt, 32).toString("hex");
}
function makeUser(username, password, role, name) {
  const salt = crypto.randomBytes(12).toString("hex");
  return { username, role, name, salt, hash: hashPw(password, salt) };
}
function verifyPw(pw, u) {
  try { return u && crypto.timingSafeEqual(Buffer.from(hashPw(pw, u.salt), "hex"), Buffer.from(u.hash, "hex")); }
  catch { return false; }
}
function b64url(buf) { return Buffer.from(buf).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function signToken(payload) {
  const body = b64url(JSON.stringify(payload));
  const sig = b64url(crypto.createHmac("sha256", SECRET).update(body).digest());
  return body + "." + sig;
}
function verifyToken(tok) {
  if (!tok || !tok.includes(".")) return null;
  const [body, sig] = tok.split(".");
  const expect = b64url(crypto.createHmac("sha256", SECRET).update(body).digest());
  if (sig !== expect) return null;
  try { return JSON.parse(Buffer.from(body.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString()); }
  catch { return null; }
}

/* ----------------------------------------------------------
   Seed data
   ---------------------------------------------------------- */
function seed() {
  const L = (uz, ru, en) => ({ uz, ru, en });
  const products = [
    { id:"p1", ico:"💍", company:"Oltin Saroy", name:L("Oltin uzuk","Золотое кольцо","Gold ring"),          desc:L("24K oltin, qo'lda ishlangan","Золото 24K, ручная работа","24K gold, handcrafted"), price:"$1 200" },
    { id:"p2", ico:"🪑", company:"Mebel Pro",   name:L("Yumshoq divan","Мягкий диван","Soft sofa"),          desc:L("Premium teri qoplama","Премиум кожаная обивка","Premium leather"), price:"$850" },
    { id:"p3", ico:"⌚", company:"Vaqt Lux",    name:L("Klassik soat","Классические часы","Classic watch"),  desc:L("Shveytsariya mexanizmi","Швейцарский механизм","Swiss movement"), price:"$2 400" },
    { id:"p4", ico:"👜", company:"Charm House",  name:L("Teri sumka","Кожаная сумка","Leather bag"),          desc:L("Tabiiy teri, milliy uslub","Натуральная кожа, нац. стиль","Genuine leather"), price:"$320" },
    { id:"p5", ico:"🏺", company:"Hunarmand",   name:L("Sopol idish","Керамическая ваза","Ceramic vase"),    desc:L("Qo'lda bo'yalgan","Ручная роспись","Hand-painted"), price:"$140" },
    { id:"p6", ico:"🧶", company:"Atlas Silk",   name:L("Atlas mato","Ткань Атлас","Atlas silk"),             desc:L("An'anaviy ipak","Традиционный шёлк","Traditional silk"), price:"$95" },
    { id:"p7", ico:"💻", company:"TechNation",   name:L("Noutbuk Pro","Ноутбук Pro","Laptop Pro"),            desc:L("Mahalliy yig'ilgan","Местная сборка","Locally assembled"), price:"$1 050" },
    { id:"p8", ico:"🍯", company:"Asal Bio",     name:L("Tog' asali","Горный мёд","Mountain honey"),          desc:L("100% tabiiy","100% натуральный","100% natural"), price:"$25" },
  ];
  const news = [
    { id:"n1", ico:"📈", company:"Oltin Saroy", date:"2026-07-01", title:L("Bugungi oltin kursi","Курс золота на сегодня","Gold rate today"), text:L("1 gr oltin narxi 2% ga oshdi.","Цена 1 гр золота выросла на 2%.","Price of 1g gold rose 2%."), body:{
      uz:["Bugun bir gramm oltin narxi 2% ga oshdi va so'nggi haftalardagi o'sish tendentsiyasini davom ettirdi. Oltin Saroy tahlilchilari buni mavsumiy talab va jahon kotirovkalari mustahkamlanishi bilan bog'lamoqda.","Kompaniya mijozlarga kurs yangilanishini shaxsiy kabinetda kuzatib borishni va yirik xaridlarni oldindan rejalashtirishni tavsiya qiladi."],
      ru:["Сегодня стоимость одного грамма золота выросла на 2%, продолжая восходящий тренд последних недель. Аналитики Oltin Saroy связывают рост с сезонным спросом и укреплением мировых котировок.","Компания рекомендует клиентам следить за ежедневными обновлениями курса в личном кабинете и планировать крупные покупки заранее."],
      en:["The price of one gram of gold rose 2% today, continuing the upward trend of recent weeks. Oltin Saroy analysts attribute the growth to seasonal demand and stronger global quotes.","The company advises customers to track daily rate updates in their dashboard and plan large purchases in advance."] } },
    { id:"n2", ico:"🤝", company:"Konglomerat", date:"2026-06-30", title:L("Yangi eksport shartnomasi","Новый экспортный контракт","New export deal"), text:L("3 kompaniya Markaziy Osiyo bozoriga chiqdi.","3 компании вышли на рынок ЦА.","3 firms entered CA market."), body:{
      uz:["Konglomeratning uchta kompaniyasi yangi eksport shartnomasini imzoladi va Markaziy Osiyo bozoriga chiqdi. Kelishuv yangi sotuv kanallari va hududiy hamkorlarga yo'l ochadi.","Shartnoma platformaning umumiy eksportini oshirishi va qo'shimcha ish o'rinlari yaratishi kutilmoqda."],
      ru:["Три компании конгломерата подписали новый экспортный контракт и вышли на рынок Центральной Азии. Соглашение открывает доступ к новым каналам сбыта и партнёрам в регионе.","Ожидается, что контракт увеличит совокупный экспорт платформы и создаст дополнительные рабочие места."],
      en:["Three conglomerate companies signed a new export contract and entered the Central Asian market. The deal opens access to new sales channels and regional partners.","The contract is expected to raise the platform's total exports and create additional jobs."] } },
    { id:"n3", ico:"🚀", company:"TechNation",  date:"2026-06-28", title:L("Startap aksellerator ochildi","Открыт стартап-акселератор","Startup accelerator opens"), text:L("12 yangi loyiha qabul qilindi.","Принято 12 новых проектов.","12 new projects accepted."), body:{
      uz:["Yangi startap-akselerator ochildi: birinchi to'lqinga turli sohalardan 12 loyiha qabul qilindi. Ishtirokchilar mentorlik, investorlarga kirish va tez ishga tushirish uchun infratuzilma oladi.","Dastur bir necha oy davom etadi va konglomerat investorlari oldida demo-kun bilan yakunlanadi."],
      ru:["Открыт новый стартап-акселератор: в первую волну принято 12 проектов из разных отраслей. Участники получат менторство, доступ к инвесторам и инфраструктуру для быстрого запуска.","Программа рассчитана на несколько месяцев и завершится демо-днём перед инвесторами конгломерата."],
      en:["A new startup accelerator has opened, admitting 12 projects across industries in its first cohort. Participants get mentorship, investor access and infrastructure for a fast launch.","The program runs for several months and ends with a demo day before the conglomerate's investors."] } },
    { id:"n4", ico:"🏭", company:"Mebel Pro",   date:"2026-06-25", title:L("Yangi fabrika ishga tushdi","Запущена новая фабрика","New factory launched"), text:L("500 ish o'rni yaratildi.","Создано 500 рабочих мест.","500 jobs created."), body:{
      uz:["Mebel Pro yangi fabrikani ishga tushirdi va 500 ish o'rni yaratdi. Korxona zamonaviy uskunalar bilan jihozlangan bo'lib, kompaniyaning ishlab chiqarish quvvatini oshiradi.","Yangi fabrika mahsulotining bir qismi konglomerat strategiyasi doirasida eksportga yo'naltiriladi."],
      ru:["Mebel Pro запустила новую фабрику, создав 500 рабочих мест. Предприятие оснащено современным оборудованием и увеличит производственные мощности компании.","Часть продукции новой фабрики будет направлена на экспорт в рамках стратегии конгломерата."],
      en:["Mebel Pro launched a new factory, creating 500 jobs. The plant is equipped with modern machinery and will boost the company's production capacity.","Part of the new factory's output will be exported as part of the conglomerate's strategy."] } },
  ];
  const conferences = [
    { id:"c1", name:"Q3 Strategy Sync", date:"2026-07-03", time:"15:00", joined:30, total:30 },
    { id:"c2", name:"Export Council",   date:"2026-07-05", time:"11:30", joined:12, total:30 },
  ];
  const complaints = [
    { id:"cm1", from:"Charm House", contact:"info@charmhouse.uz", title:L("Yetkazib berish kechikdi","Задержка доставки","Delivery delayed"),
      text:L("№4521 buyurtma 5 kun oldin rasmiylashtirilgan, lekin hali yetkazilmadi. Yetkazib berish xizmati qo'ng'iroqlarga javob bermayapti. Iltimos, holatni tekshirib, yetkazishni tezlashtiring.",
             "Заказ №4521 был оформлен 5 дней назад, но до сих пор не доставлен. Служба доставки не отвечает на звонки. Просим разобраться в ситуации и ускорить доставку.",
             "Order #4521 was placed 5 days ago but still hasn't been delivered. The courier service isn't answering calls. Please look into it and speed up the delivery."),
      reply:null, status:"pending", at:"2026-06-30" },
    { id:"cm2", from:"Vaqt Lux", contact:"+998 90 000 00 02", title:L("Sayt sekin ishlamoqda","Сайт работает медленно","Site is slow"),
      text:L("Kompaniya sayti juda sekin ochilmoqda, ayniqsa mahsulotlar katalogi. Sahifalar 15–20 soniyada yuklanadi va shu sababli mijozlarni yo'qotmoqdamiz.",
             "Сайт компании открывается очень медленно, особенно каталог товаров. Страницы грузятся по 15–20 секунд, из-за этого мы теряем клиентов.",
             "The company site loads very slowly, especially the product catalog. Pages take 15–20 seconds to load and we're losing customers because of it."),
      reply:null, status:"pending", at:"2026-06-29" },
    { id:"cm3", from:"Hunarmand", contact:"hunarmand@mail.uz", title:L("To'lov tizimi xatosi","Ошибка платёжной системы","Payment error"),
      text:L("Karta orqali to'lovda «tranzaksiya rad etildi» xatosi chiqmoqda, garchi kartada mablag' yetarli bo'lsa ham. Muammo bir necha mijozda takrorlanmoqda.",
             "При оплате картой возникает ошибка «транзакция отклонена», хотя на карте достаточно средств. Проблема повторяется у нескольких клиентов.",
             "Card payments fail with a 'transaction declined' error even though there are sufficient funds. Several customers are hitting the same issue."),
      reply:null, status:"pending", at:"2026-06-28" },
    { id:"cm4", from:"Atlas Silk", contact:"+998 90 000 00 04", title:L("Mahsulot rasmi yo'q","Нет фото товара","Missing product photo"),
      text:L("Shourumdagi bir nechta mahsulotda rasm yo'q — o'rniga bo'sh blok ko'rinmoqda. Shu sababli mahsulotlar jozibasiz ko'rinadi va sotuv tushib ketdi.",
             "У нескольких товаров в шоуруме отсутствуют фотографии — вместо них отображается пустой блок. Из-за этого товары выглядят непривлекательно и продажи упали.",
             "Several products in the showroom have no photos — an empty block is shown instead. It makes the products look unappealing and sales have dropped."),
      reply:null, status:"pending", at:"2026-06-27" },
    { id:"cm5", from:"Asal Bio", contact:"asal@bio.uz", title:L("Hisobot yuklanmadi","Отчёт не загрузился","Report failed to load"),
      text:L("Oylik hisobot ochilmayapti — tugma bosilganda xato chiqadi va sahifa muzlab qoladi. Iyun oyi ma'lumotlarini yuklab ololmayapmiz.",
             "Месячный отчёт не открывается — при нажатии на кнопку появляется ошибка и страница зависает. Не можем выгрузить данные за июнь.",
             "The monthly report won't open — clicking the button throws an error and the page freezes. We can't export June's data."),
      reply:null, status:"pending", at:"2026-06-26" },
  ];
  const rnd = [
    { id:"r1", company:"TechNation", cat:"AI / IoT",   name:L("Aqlli logistika","Умная логистика","Smart logistics"), desc:L("Yetkazib berishni optimallashtirish.","Оптимизация доставки.","Delivery optimization."), status:"pending" },
    { id:"r2", company:"Asal Bio",   cat:"GreenTech",  name:L("Eko qadoqlash","Эко-упаковка","Eco packaging"),       desc:L("Bioparchalanuvchi materiallar.","Биоразлагаемые материалы.","Biodegradable materials."), status:"pending" },
  ];
  const messages = [
    { id:"g1", chat:"group", sender:"Oltin Saroy", text:"Курс золота обновлён ✅", ts:1 },
    { id:"g2", chat:"group", sender:"TechNation",  text:"Готовим демо стартапов к пятнице.", ts:2 },
    { id:"g3", chat:"group", sender:"Admin",       text:"Всем добрый день! Конференция в 15:00.", ts:3 },
    { id:"i1", chat:"Oltin Saroy", sender:"Oltin Saroy", text:"Здравствуйте, отчёт готов.", ts:1 },
    { id:"i2", chat:"Oltin Saroy", sender:"Admin",       text:"Отлично, проверю сегодня.", ts:2 },
  ];
  // 13 blocks × counts = 100 modules
  const counts = [8,8,9,7,8,7,8,7,8,8,8,7,7];
  const modules = {};
  counts.forEach((n, bi) => { for (let mi = 0; mi < n; mi++) modules[`m-${bi}-${mi}`] = (mi % 3 !== 0); });

  return {
    users: [
      makeUser("admin", "admin123", "admin", "Admin"),
      makeUser("company1", "company123", "company", "Oltin Saroy"),
    ],
    products, news, conferences, complaints, rnd, messages, modules,
    aiUsage: {}, // { visitorId: count }
    reports: [],
    orders: [],
    notifications: [], // { id, audience:'admin'|'company', title:{uz,ru,en}, text, at, readBy:[] }
    seq: 100,
  };
}

/* ----------------------------------------------------------
   Persistence
   ---------------------------------------------------------- */
let DB;
function load() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (fs.existsSync(DB_FILE)) {
    try {
      DB = JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
      if (!DB.orders) DB.orders = [];        // migrate older db files
      if (!DB.aiUsage) DB.aiUsage = {};
      if (!DB.notifications) DB.notifications = [];
      return;
    } catch { /* fall through to reseed */ }
  }
  DB = seed();
  save();
}
let saveTimer = null;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => fs.writeFileSync(DB_FILE, JSON.stringify(DB, null, 2)), 40);
}
const nextId = (p) => p + (++DB.seq);
// Push a notification for an audience ('admin' or 'company').
// `link` (optional) is a URL the client navigates to when the notification is clicked.
// `company` (optional) targets a single company by name; null = broadcast to the whole audience.
function addNotif(audience, title, text, link, company) {
  DB.notifications.unshift({ id: nextId("ntf"), audience, title, text: String(text), link: link || null, company: company || null, at: new Date().toISOString(), readBy: [] });
}

/* ----------------------------------------------------------
   HTTP helpers
   ---------------------------------------------------------- */
const MIME = {
  ".html":"text/html; charset=utf-8", ".css":"text/css; charset=utf-8",
  ".js":"text/javascript; charset=utf-8", ".json":"application/json; charset=utf-8",
  ".svg":"image/svg+xml", ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg",
  ".gif":"image/gif", ".ico":"image/x-icon", ".webp":"image/webp",
};
function sendJSON(res, code, obj) {
  const s = JSON.stringify(obj);
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Content-Length": Buffer.byteLength(s) });
  res.end(s);
}
function readBody(req) {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", c => { data += c; if (data.length > 12e6) req.destroy(); });
    req.on("end", () => { try { resolve(data ? JSON.parse(data) : {}); } catch { resolve({}); } });
    req.on("error", () => resolve({}));
  });
}
function userFrom(req) {
  const h = req.headers.authorization || "";
  return verifyToken(h.startsWith("Bearer ") ? h.slice(7) : null);
}

/* ----------------------------------------------------------
   Static file serving
   ---------------------------------------------------------- */
function serveStatic(req, res, urlPath) {
  let rel = decodeURIComponent(urlPath.split("?")[0]);
  if (rel === "/" || rel === "") rel = "/index.html";
  const filePath = path.normalize(path.join(STATIC_ROOT, rel));
  if (!filePath.startsWith(STATIC_ROOT)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.stat(filePath, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404, { "Content-Type": "text/plain" }); return res.end("Not found"); }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      // Dev/demo: always revalidate so edited HTML/CSS/JS show up without a hard refresh.
      "Cache-Control": "no-cache, must-revalidate",
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

/* ----------------------------------------------------------
   AI topic guard (Konglomerat only)
   ---------------------------------------------------------- */
const KONG_TOPIC = /konglomerat|конгломерат|kompan|компан|company|companies|firm|фирм|biznes|бизнес|business|mahsulot|tovar|товар|product|sotib|buy|shourum|шоурум|showroom|katalog|каталог|catalog|eksport|экспорт|export|investit|инвест|invest|startap|стартап|startup|loyiha|проект|innovat|инновац|hisobot|отч[её]т|report|konferens|конференц|conferen|uchrashuv|встреч|meeting|yangilik|новост|news|xabar|shikoyat|жалоб|complaint|muammo|проблем|r&d|patent|патент|analitik|аналит|analy|direktor|директор|director|platform|платформ|modul|модул|module|narx|цен|price|oltin|mebel|technation|asal|nima|что такое|what is|haqida|about/i;
const AI_REPLY = {
  about:     { uz:"Konglomerat — 30 milliy kompaniyani yagona AI boshqaruvi ostida birlashtiruvchi platforma.", ru:"Konglomerat — национальная цифровая платформа, объединяющая 30 компаний под единым управлением ИИ.", en:"Konglomerat is a nation-scale platform uniting 30 companies under a single AI command." },
  companies: { uz:"Platformada 30 ta kompaniya bor: Oltin Saroy, Mebel Pro, TechNation, Asal Bio va boshqalar.", ru:"На платформе 30 компаний: Oltin Saroy, Mebel Pro, TechNation, Asal Bio и другие.", en:"The platform hosts 30 companies: Oltin Saroy, Mebel Pro, TechNation, Asal Bio and more." },
  showroom:  { uz:"Shourumlarni bosh sahifadagi «Shourumlar» bo'limida ko'rishingiz mumkin.", ru:"Шоурумы можно посмотреть в разделе «Шоурумы» на главной странице.", en:"Browse showrooms in the «Showrooms» section on the home page." },
  generic:   { uz:"Konglomerat ma'lumotlari asosida tahlil qilyapman… (demo javob)", ru:"Анализирую на основе данных Konglomerat… (демо-ответ)", en:"Analyzing based on Konglomerat data… (demo reply)" },
};
// Greetings are always allowed through the topic guard (they're not off-topic).
const GREETING = /^\s*(salom|assalom|привет|здравству|добр(ый|ое|ый день)|hello|hi|hey|hola)/i;
// Pick a localized string from an {uz,ru,en} object (or a plain string).
function locStr(o, L) { return (o && typeof o === "object") ? (o[L] || o.ru || o.en || "") : String(o == null ? "" : o); }

// Data-aware business assistant. Answers strictly from Konglomerat DB content.
function aiReply(msg, lang, user) {
  const q = String(msg).toLowerCase();
  const L = ["uz","ru","en"].includes(lang) ? lang : "ru";
  const T = (uz, ru, en) => ({ uz, ru, en })[L];

  const companies = [...new Set(DB.products.map(p => p.company))];
  const prices = DB.products.map(p => Number(String(p.price).replace(/[^\d.]/g, ""))).filter(n => n > 0);
  const minP = prices.length ? Math.min(...prices) : 0;
  const maxP = prices.length ? Math.max(...prices) : 0;

  if (GREETING.test(q))
    return T("Salom! Men Konglomerat biznes AI yordamchisiman. Kompaniyalar, mahsulotlar, yangiliklar, hisobotlar yoki shikoyatlar bo'yicha so'rang.",
             "Здравствуйте! Я бизнес-AI Konglomerat. Спросите о компаниях, товарах, новостях, отчётах или жалобах платформы.",
             "Hello! I'm the Konglomerat business AI. Ask about companies, products, news, reports or complaints on the platform.");

  if (/nima|что так|what is|haqida|^about|konglomerat|конгломерат/.test(q)) return AI_REPLY.about[L];

  if (/kompan|компан|company|companies|firm|фирм/.test(q))
    return T(`Platformada ${companies.length}+ kompaniya faoliyat yuritadi, jumladan: ${companies.join(", ")}.`,
             `На платформе работает ${companies.length}+ компаний, среди них: ${companies.join(", ")}.`,
             `The platform runs ${companies.length}+ companies, including: ${companies.join(", ")}.`);

  if (/mahsulot|tovar|товар|product|katalog|каталог|catalog|narx|цен|price|sotib|buy/.test(q)) {
    const list = DB.products.slice(0, 5).map(p => `${p.ico} ${locStr(p.name, L)} — ${p.price}`).join("; ");
    return T(`Katalogda ${DB.products.length} ta mahsulot bor (narx oralig'i $${minP}–$${maxP}). Masalan: ${list}.`,
             `В каталоге ${DB.products.length} товаров (диапазон цен $${minP}–$${maxP}). Например: ${list}.`,
             `The catalog has ${DB.products.length} products (price range $${minP}–$${maxP}). E.g.: ${list}.`);
  }

  if (/yangilik|новост|news|xabar/.test(q)) {
    const n = DB.news[0];
    return n ? T(`So'nggi yangilik: "${locStr(n.title, L)}" — ${n.company}, ${n.date}.`,
                 `Последняя новость: «${locStr(n.title, L)}» — ${n.company}, ${n.date}.`,
                 `Latest news: "${locStr(n.title, L)}" — ${n.company}, ${n.date}.`) : AI_REPLY.generic[L];
  }

  if (/konferens|конференц|conferen|uchrashuv|встреч|meeting/.test(q)) {
    const c = DB.conferences[0];
    return c ? T(`Yaqin konferensiya: "${c.name}" — ${c.date} ${c.time}.`,
                 `Ближайшая конференция: «${c.name}» — ${c.date} ${c.time}.`,
                 `Upcoming conference: "${c.name}" — ${c.date} ${c.time}.`) : AI_REPLY.generic[L];
  }

  if (/shikoyat|жалоб|complaint|muammo|проблем/.test(q)) {
    const pending = DB.complaints.filter(c => c.status === "pending").length;
    return T(`Hozirda ${pending} ta ko'rib chiqilmagan shikoyat bor (jami ${DB.complaints.length}).`,
             `Сейчас ${pending} необработанных жалоб (всего ${DB.complaints.length}).`,
             `There are ${pending} pending complaints (of ${DB.complaints.length} total).`);
  }

  if (/r&d|rnd|startap|стартап|startup|patent|патент|loyiha|проект|innovat|инновац/.test(q))
    return T(`R&D markazida ${DB.rnd.length} ta loyiha ko'rib chiqilmoqda.`,
             `В R&D-центре ${DB.rnd.length} проектов на рассмотрении.`,
             `The R&D center has ${DB.rnd.length} projects under review.`);

  if (/hisobot|отч|report/.test(q))
    return T("Hisobotlar bo'limida umumiy va har bir kompaniya bo'yicha oylik hisobotlar mavjud.",
             "В разделе «Отчёты» доступны сводные и помесячные отчёты по каждой компании.",
             "The Reports section has consolidated and per-company monthly reports.");

  if (/shourum|шоурум|showroom/.test(q)) return AI_REPLY.showroom[L];

  return AI_REPLY.generic[L];
}

/* Generate an official letter to the administration that analyses the reported problem
   and proposes recommendations & solutions. Keyword-driven (no external LLM). */
function aiLetter(msg, lang, user, attachments) {
  const L = ["uz","ru","en"].includes(lang) ? lang : "ru";
  const q = String(msg).toLowerCase();
  const T = (uz, ru, en) => ({ uz, ru, en })[L];
  const company = (user && user.role === "company") ? user.name : ((user && user.name) || "Konglomerat");
  const date = new Date().toISOString().slice(0, 10);

  // Problem domains → subject / analysis / recommendations / solutions (localized).
  const D = [
    { re:/yetkaz|достав|deliver|kechik|задерж|delay|kur[iy]er|курьер/,
      subject:T("Yetkazib berishdagi kechikish","Задержка доставки","Delivery delay"),
      analysis:T("Yetkazib berish jarayonida uzilish aniqlandi; bu mijozlar ishonchiga va takroriy sotuvga ta'sir qiladi.",
                 "Выявлен сбой в процессе доставки, что влияет на доверие клиентов и повторные продажи.",
                 "A breakdown in the delivery process was identified, affecting customer trust and repeat sales."),
      recs:[T("Yetkazib berish holatini real vaqtda kuzatishni yo'lga qo'yish","Внедрить отслеживание статуса доставки в реальном времени","Introduce real-time delivery status tracking"),
            T("Kuryerlik xizmati bilan SLA (javobgarlik muddati) shartnomasini ko'rib chiqish","Пересмотреть SLA с курьерской службой","Review the SLA with the courier service"),
            T("Mijozga avtomatik xabarnomalar yuborishni sozlash","Настроить автоматические уведомления клиенту","Set up automatic customer notifications")],
      sols:[T("24 soat ichida buyurtmani tezkor yetkazib berishni tashkil qilish","Организовать срочную доставку заказа в течение 24 часов","Arrange express delivery within 24 hours"),
            T("Noqulaylik uchun mijozga chegirma yoki bonus taklif qilish","Предложить клиенту скидку или бонус за неудобство","Offer the customer a discount or bonus for the inconvenience")] },
    { re:/to'lov|плат|payment|karta|card|tranzak|транзак|pul|деньг/,
      subject:T("To'lov tizimidagi nosozlik","Сбой платёжной системы","Payment system failure"),
      analysis:T("To'lovlarni qayta ishlashda xatolik yuz bermoqda, bu to'g'ridan-to'g'ri daromad yo'qotilishiga olib keladi.",
                 "Возникают ошибки при обработке платежей, что напрямую ведёт к потере выручки.",
                 "Payment processing errors are occurring, directly causing revenue loss."),
      recs:[T("To'lov provayderi jurnallarini tekshirish","Проверить логи платёжного провайдера","Review the payment provider logs"),
            T("Zaxira to'lov usulini qo'shish","Добавить резервный способ оплаты","Add a backup payment method"),
            T("Tranzaksiyalarni monitoring qilishni kuchaytirish","Усилить мониторинг транзакций","Strengthen transaction monitoring")],
      sols:[T("Nosoz to'lov shlyuzini vaqtincha almashtirish","Временно переключить неисправный платёжный шлюз","Temporarily switch the faulty payment gateway"),
            T("Zarar ko'rgan mijozlarga to'lovni qайта amalga oshirishda yordam berish","Помочь пострадавшим клиентам повторно провести оплату","Assist affected customers in retrying payment")] },
    { re:/sayt|сайт|site|website|sekin|медлен|slow|yuklan|загруж|load|zavis|завис|freeze/,
      subject:T("Sayt ishlashidagi muammo","Проблема с работой сайта","Website performance issue"),
      analysis:T("Sahifalarning sekin yuklanishi konversiyani pasaytiradi va mijozlarni yo'qotishga olib keladi.",
                 "Медленная загрузка страниц снижает конверсию и приводит к потере клиентов.",
                 "Slow page loads reduce conversion and lead to customer loss."),
      recs:[T("Rasm va media hajmini optimallashtirish","Оптимизировать размер изображений и медиа","Optimize image and media sizes"),
            T("Keshlash va CDN dan foydalanish","Использовать кэширование и CDN","Use caching and a CDN"),
            T("Server yukini monitoring qilish","Мониторить нагрузку на сервер","Monitor server load")],
      sols:[T("Muammoli sahifalarni tezkor optimallashtirish","Провести срочную оптимизацию проблемных страниц","Run an urgent optimization of the problem pages"),
            T("Zaxira server quvvatini vaqtincha oshirish","Временно увеличить резервные мощности сервера","Temporarily scale up server capacity")] },
    { re:/rasm|фото|photo|image|surat|kartinka|картинк/,
      subject:T("Mahsulot rasmlari bilan bog'liq muammo","Проблема с фотографиями товаров","Product photo issue"),
      analysis:T("Rasmlarning yo'qligi yoki sifatsizligi mahsulot jozibadorligini va sotuvni pasaytiradi.",
                 "Отсутствие или низкое качество фото снижают привлекательность товара и продажи.",
                 "Missing or low-quality photos reduce product appeal and sales."),
      recs:[T("Barcha mahsulotlar uchun rasm standartini joriy etish","Ввести стандарт фотографий для всех товаров","Introduce a photo standard for all products"),
            T("Rasmlarni yuklashni qayta tekshirish","Перепроверить загрузку изображений","Re-check image uploads"),
            T("Zaxira nusxalarini saqlash","Хранить резервные копии","Keep backups of images")],
      sols:[T("Yetishmayotgan rasmlarni qayta yuklash","Повторно загрузить недостающие фото","Re-upload the missing photos"),
            T("Professional fotosessiya tashkil qilish","Организовать профессиональную фотосъёмку","Arrange a professional photo shoot")] },
    { re:/hisobot|отч[её]т|report|analitik|аналит|дан+ые|ma'lumot/,
      subject:T("Hisobot va tahlil masalasi","Вопрос по отчётности и аналитике","Reporting & analytics matter"),
      analysis:T("Hisobotlarning yuklanmasligi yoki noaniqligi boshqaruv qarorlarini sekinlashtiradi.",
                 "Недоступность или неточность отчётов замедляет управленческие решения.",
                 "Unavailable or inaccurate reports slow down management decisions."),
      recs:[T("Hisobotlarni shakllantirish jarayonini avtomatlashtirish","Автоматизировать формирование отчётов","Automate report generation"),
            T("Ma'lumotlar to'g'riligini tekshirishni joriy etish","Ввести проверку корректности данных","Introduce data-integrity checks"),
            T("Eksport formatlarini qo'shish","Добавить форматы экспорта","Add export formats")],
      sols:[T("Joriy oy uchun hisobotni qo'lda tayyorlab berish","Подготовить отчёт за текущий месяц вручную","Prepare the current month's report manually"),
            T("Hisobot modulidagi xatoni bartaraf etish","Устранить ошибку в модуле отчётов","Fix the error in the reporting module")] },
  ];
  const d = D.find(x => x.re.test(q)) || {
    subject:T("Umumiy murojaat","Общее обращение","General matter"),
    analysis:T("Ko'rsatilgan vaziyat kompaniya faoliyatiga ta'sir qilmoqda va e'tibor talab qiladi.",
               "Описанная ситуация влияет на работу компании и требует внимания.",
               "The described situation affects the company's operations and requires attention."),
    recs:[T("Muammoni batafsil hujjatlashtirish","Подробно задокументировать проблему","Document the issue in detail"),
          T("Mas'ul bo'limni jalb qilish","Привлечь ответственный отдел","Involve the responsible department"),
          T("Muddatlarni belgilash","Установить сроки решения","Set resolution deadlines")],
    sols:[T("Muammoni ustuvor tartibda ko'rib chiqish","Рассмотреть вопрос в приоритетном порядке","Review the matter as a priority"),
          T("Natija bo'yicha mijozga qayta aloqa qilish","Дать обратную связь по результату","Provide feedback on the outcome")],
  };

  const att = Array.isArray(attachments) ? attachments : [];
  const nImg = att.filter(a => a.kind === "image").length;
  const nVoice = att.filter(a => a.kind === "voice").length;
  const nFile = att.filter(a => a.kind === "file").length;
  const attParts = [];
  if (nImg) attParts.push(T(`${nImg} ta rasm`, `${nImg} фото`, `${nImg} photo(s)`));
  if (nVoice) attParts.push(T(`${nVoice} ta ovozli xabar`, `${nVoice} голосовое сообщение`, `${nVoice} voice message(s)`));
  if (nFile) attParts.push(T(`${nFile} ta fayl`, `${nFile} файл(ов)`, `${nFile} file(s)`));

  const lb = {
    header:T("RASMIY XAT","ОФИЦИАЛЬНОЕ ПИСЬМО","OFFICIAL LETTER"),
    to:T("Kimga: Konglomerat ma'muriyati","Кому: Администрация Konglomerat","To: Konglomerat Administration"),
    from:T("Kimdan","От","From"), date:T("Sana","Дата","Date"), subj:T("Mavzu","Тема","Subject"),
    greet:T("Hurmatli ma'muriyat,","Уважаемая администрация,","Dear Administration,"),
    prob:T("Muammo tavsifi:","Описание проблемы:","Problem description:"),
    anal:T("Vaziyat tahlili:","Анализ ситуации:","Situation analysis:"),
    recs:T("Tavsiyalar:","Рекомендации:","Recommendations:"),
    sols:T("Taklif etilayotgan yechimlar:","Предлагаемые решения:","Proposed solutions:"),
    att:T("Ilovalar:","Приложения:","Attachments:"),
    regards:T("Hurmat bilan,","С уважением,","Sincerely,"),
  };
  const lines = [
    lb.header, "",
    lb.to,
    `${lb.from}: ${company}`,
    `${lb.date}: ${date}`,
    `${lb.subj}: ${d.subject}`, "",
    lb.greet, "",
    lb.prob, (String(msg).trim() || "—"), "",
    lb.anal, d.analysis, "",
    lb.recs, ...d.recs.map((r, i) => `${i + 1}. ${r}`), "",
    lb.sols, ...d.sols.map(s => `— ${s}`), "",
  ];
  if (attParts.length) lines.push(`${lb.att} ${attParts.join(", ")}`, "");
  lines.push(lb.regards, company);
  return { letter: lines.join("\n"), subject: d.subject };
}

/* Normalise a value to {uz,ru,en}; empty languages fall back to the first filled one. */
function mlNorm(v) {
  if (typeof v === "string") { const s = v.trim(); return { uz:s, ru:s, en:s }; }
  const o = v || {}, langs = ["uz","ru","en"];
  const first = langs.map(l => (o[l] || "").trim()).find(Boolean) || "";
  const out = {}; langs.forEach(l => out[l] = (o[l] || "").trim() || first); return out;
}
/* Split multi-line text into an array of paragraphs (split on blank lines). */
function splitParas(s) { return String(s || "").split(/\n{2,}/).map(x => x.trim()).filter(Boolean); }

/* Normalise an images payload to an array of 1..max data-URL images.
   Accepts an array, or falls back to a single `image` string. */
function normImages(imagesVal, imageVal, max = 3) {
  let arr = Array.isArray(imagesVal) ? imagesVal : (imageVal ? [imageVal] : []);
  return arr.filter(x => typeof x === "string" && x.startsWith("data:image/")).slice(0, max);
}

/* ----------------------------------------------------------
   API router
   ---------------------------------------------------------- */
async function api(req, res, urlPath) {
  const url = new URL(urlPath, "http://x");
  const p = url.pathname;
  const method = req.method;
  const user = userFrom(req);
  const body = (method === "POST" || method === "PUT") ? await readBody(req) : {};
  const q = url.searchParams;

  const need = (role) => { if (!user) { sendJSON(res, 401, { error:"unauthorized" }); return false; }
    if (role && user.role !== role) { sendJSON(res, 403, { error:"forbidden" }); return false; } return true; };
  const match = (re) => re.exec(p);

  /* health */
  if (p === "/api/health") return sendJSON(res, 200, { ok:true, name:"konglomerat-api" });

  /* auth */
  if (p === "/api/auth/login" && method === "POST") {
    const u = DB.users.find(x => x.username === String(body.username || "").trim());
    if (!u || !verifyPw(body.password || "", u)) return sendJSON(res, 401, { error:"invalid_credentials" });
    const user2 = { username:u.username, role:u.role, name:u.name };
    return sendJSON(res, 200, { token: signToken({ sub:u.username, role:u.role, name:u.name }), user:user2 });
  }
  if (p === "/api/auth/me") { if (!need()) return; return sendJSON(res, 200, { user:{ username:user.sub, role:user.role, name:user.name } }); }

  /* stats (dashboard KPIs) */
  if (p === "/api/stats") {
    return sendJSON(res, 200, {
      companies: 30,
      aiRequests: 4820,
      startups: DB.rnd.length + 10,
      showrooms: DB.products.length,
      complaints: DB.complaints.filter(c => c.status === "pending").length,
      conferences: DB.conferences.length,
    });
  }

  /* products */
  if (p === "/api/products" && method === "GET") {
    let list = DB.products;
    const co = q.get("company");
    if (co) list = list.filter(x => x.company === co);
    return sendJSON(res, 200, list);
  }
  if (p === "/api/products" && method === "POST") {
    if (!need()) return;
    if (!["company","admin"].includes(user.role)) return sendJSON(res, 403, { error:"forbidden" });
    const company = user.role === "company" ? user.name : (body.company || "Konglomerat");
    const images = normImages(body.images, body.image);
    const item = { id:nextId("p"), ico:body.ico || "🛍️", company, name:body.name || {}, desc:body.desc || {}, price:body.price || "", images, image: images[0] || null };
    DB.products.unshift(item); save();
    return sendJSON(res, 201, item);
  }
  { const m = match(/^\/api\/products\/(.+)$/); if (m && method === "GET") {
    const p2 = DB.products.find(x => x.id === m[1]);
    if (!p2) return sendJSON(res, 404, { error:"not_found" });
    return sendJSON(res, 200, p2); } }
  { const m = match(/^\/api\/products\/(.+)$/); if (m && method === "PUT") {
    if (!need()) return;
    const prod = DB.products.find(x => x.id === m[1]);
    if (!prod) return sendJSON(res, 404, { error:"not_found" });
    // Companies may edit only their own products; the admin may edit any.
    if (user.role !== "admin" && prod.company !== user.name) return sendJSON(res, 403, { error:"forbidden" });
    if (body.name  !== undefined) prod.name  = body.name;
    if (body.desc  !== undefined) prod.desc  = body.desc;
    if (body.price !== undefined) prod.price = body.price;
    if (body.ico   !== undefined) prod.ico   = body.ico;
    if (body.images !== undefined || body.image !== undefined) {
      prod.images = normImages(body.images, body.image);
      prod.image = prod.images[0] || null;
    }
    save();
    return sendJSON(res, 200, prod); } }
  { const m = match(/^\/api\/products\/(.+)$/); if (m && method === "DELETE") {
    if (!need()) return;
    const prod = DB.products.find(x => x.id === m[1]);
    if (prod && user.role !== "admin" && prod.company !== user.name) return sendJSON(res, 403, { error:"forbidden" });
    DB.products = DB.products.filter(x => x.id !== m[1]); save(); return sendJSON(res, 200, { ok:true }); } }

  /* orders (visitors purchase; admin lists all, a company lists only its own) */
  if (p === "/api/orders" && method === "GET") {
    if (!need()) return;
    if (user.role === "admin") return sendJSON(res, 200, DB.orders);
    if (user.role === "company") return sendJSON(res, 200, DB.orders.filter(o => o.product && o.product.company === user.name));
    return sendJSON(res, 403, { error:"forbidden" });
  }
  if (p === "/api/orders" && method === "POST") {
    const b = body || {};
    const prod = DB.products.find(x => x.id === b.productId);
    if (!prod) return sendJSON(res, 404, { error:"product_not_found" });
    const name = String(b.name || "").trim();
    const contact = String(b.contact || "").trim();
    if (!name || !contact) return sendJSON(res, 400, { error:"missing_fields" });
    const qty = Math.max(1, parseInt(b.qty, 10) || 1);
    const order = {
      id: nextId("ord"), productId: prod.id,
      product: { name: prod.name, price: prod.price, company: prod.company, ico: prod.ico },
      customer: { name, contact }, qty, at: new Date().toISOString(), status: "new",
    };
    DB.orders.unshift(order);
    // Notify the product's company (targeted) and the admin, including the buyer's contact.
    const prodName = (prod.name && (prod.name.ru || prod.name.en || prod.name.uz)) || "";
    const info = `${name} · ${contact} — "${prodName}"${qty > 1 ? " ×" + qty : ""}`;
    addNotif("company", { uz:"Yangi buyurtma", ru:"Новая заявка на товар", en:"New product request" },
             info, "/company/dashboard.html?order=" + order.id, prod.company);
    addNotif("admin", { uz:"Yangi buyurtma", ru:"Новая заявка", en:"New order" },
             `${prod.company}: ${info}`, null, null);
    save();
    return sendJSON(res, 201, order);
  }

  /* news */
  if (p === "/api/news" && method === "GET") return sendJSON(res, 200, DB.news);
  { const m = match(/^\/api\/news\/(.+)$/); if (m && method === "GET") {
    const n2 = DB.news.find(x => x.id === m[1]);
    if (!n2) return sendJSON(res, 404, { error:"not_found" });
    return sendJSON(res, 200, n2); } }
  if (p === "/api/news" && method === "POST") {
    if (!need("admin")) return;                       // only the Director posts news
    const titleML = mlNorm(body.title || "");
    const contentML = mlNorm(body.content || "");
    const bodyML = { uz:splitParas(contentML.uz), ru:splitParas(contentML.ru), en:splitParas(contentML.en) };
    const images = normImages(body.images, body.image);
    const item = {
      id:nextId("n"), ico:"📰", company: body.company || "Konglomerat",
      date: body.date || new Date().toISOString().slice(0,10),
      title: titleML,
      text: { uz:bodyML.uz[0] || "", ru:bodyML.ru[0] || "", en:bodyML.en[0] || "" },
      body: bodyML,
      images, image: images[0] || null,
    };
    DB.news.unshift(item); save();
    return sendJSON(res, 201, item);
  }
  { const m = match(/^\/api\/news\/(.+)$/); if (m && method === "PUT") {   // admin edits a news item
    if (!need("admin")) return;
    const n = DB.news.find(x => x.id === m[1]);
    if (!n) return sendJSON(res, 404, { error:"not_found" });
    if (body.title !== undefined) n.title = mlNorm(body.title);
    if (body.content !== undefined) {
      const contentML = mlNorm(body.content);
      n.body = { uz:splitParas(contentML.uz), ru:splitParas(contentML.ru), en:splitParas(contentML.en) };
      n.text = { uz:n.body.uz[0] || "", ru:n.body.ru[0] || "", en:n.body.en[0] || "" };
    }
    if (body.images !== undefined || body.image !== undefined) {
      n.images = normImages(body.images, body.image);
      n.image = n.images[0] || null;
    }
    if (body.date  !== undefined) n.date  = body.date;
    save();
    return sendJSON(res, 200, n); } }
  { const m = match(/^\/api\/news\/(.+)$/); if (m && method === "DELETE") {
    if (!need("admin")) return; DB.news = DB.news.filter(x => x.id !== m[1]); save(); return sendJSON(res, 200, { ok:true }); } }

  /* conferences */
  if (p === "/api/conferences" && method === "GET") return sendJSON(res, 200, DB.conferences);
  if (p === "/api/conferences" && method === "POST") {
    if (!need("admin")) return;
    // Optional meeting link (Zoom/Meet/etc.) — only accept http(s) URLs.
    const link = /^https?:\/\//i.test(String(body.link || "").trim()) ? String(body.link).trim() : "";
    const item = { id:nextId("c"), name:body.name || "Conference", date:body.date || "", time:body.time || "", desc:body.desc || "", link, joined:0, total:30 };
    DB.conferences.unshift(item);
    addNotif("company", { uz:"Yangi konferensiya", ru:"Новая конференция", en:"New conference" },
             `${item.name} · ${item.date} ${item.time}`.trim(), "/company/dashboard.html");
    save();
    return sendJSON(res, 201, item);
  }
  { const m = match(/^\/api\/conferences\/(.+)\/join$/); if (m && method === "POST") {
    if (!need()) return;
    const c = DB.conferences.find(x => x.id === m[1]);
    if (!c) return sendJSON(res, 404, { error:"not_found" });
    if (c.joined < c.total) c.joined++; save();
    return sendJSON(res, 200, c); } }
  { const m = match(/^\/api\/conferences\/(.+)$/); if (m && method === "DELETE") {
    if (!need("admin")) return; DB.conferences = DB.conferences.filter(x => x.id !== m[1]); save(); return sendJSON(res, 200, { ok:true }); } }

  /* complaints */
  if (p === "/api/complaints" && method === "GET") { if (!need("admin")) return; return sendJSON(res, 200, DB.complaints); }
  { const m = match(/^\/api\/complaints\/(.+)$/); if (m && method === "GET") {
    if (!need("admin")) return;
    const c = DB.complaints.find(x => x.id === m[1]);
    if (!c) return sendJSON(res, 404, { error:"not_found" });
    return sendJSON(res, 200, c); } }
  if (p === "/api/complaints" && method === "POST") {           // public: visitors & companies
    const from = (user && user.role === "company") ? user.name : (String(body.name || "").trim() || "—");
    const text = typeof body.text === "string" ? body.text.trim() : (body.text || "");
    if (!text || (typeof text === "string" && !text)) return sendJSON(res, 400, { error:"empty" });
    // Optional attached photos: up to 4 data-URL images (legacy complaint form).
    const images = Array.isArray(body.images)
      ? body.images.filter(x => typeof x === "string" && x.startsWith("data:image/")).slice(0, 4)
      : [];
    // Generic attachments (photos / files / voice) — used by the AI official-letter flow.
    const attachments = Array.isArray(body.attachments)
      ? body.attachments
          .filter(a => a && typeof a.data === "string" && a.data.startsWith("data:") && ["image","file","voice"].includes(a.kind))
          .slice(0, 8)
          .map(a => ({ kind:a.kind, data:a.data, name: a.name ? String(a.name).slice(0, 200) : null, dur: a.dur ? Number(a.dur) : null }))
      : [];
    const official = !!body.official;
    const title = body.title ? String(body.title).slice(0, 200) : null;
    const item = { id:nextId("cm"), from, contact:String(body.contact || "").trim(), text, images, attachments, official, title, reply:null, status:"pending", at:new Date().toISOString().slice(0,10) };
    DB.complaints.unshift(item);
    const preview = title || (typeof text === "string" ? text : (text.ru || text.en || ""));
    addNotif("admin",
             official ? { uz:"Rasmiy xat (AI)", ru:"Официальное письмо (AI)", en:"Official letter (AI)" }
                      : { uz:"Yangi shikoyat", ru:"Новая жалоба", en:"New complaint" },
             `${from}: ${String(preview).slice(0, 60)}`, `/admin/complaint-view.html?id=${item.id}`);
    save();
    return sendJSON(res, 201, item);
  }
  { const m = match(/^\/api\/complaints\/(.+)$/); if (m && method === "PUT") {   // admin reply / resolve
    if (!need("admin")) return;
    const c = DB.complaints.find(x => x.id === m[1]);
    if (!c) return sendJSON(res, 404, { error:"not_found" });
    if (body.reply !== undefined) c.reply = body.reply;
    if (body.status) c.status = body.status;
    save(); return sendJSON(res, 200, c);
  } }

  /* R&D */
  if (p === "/api/rnd" && method === "GET") {
    let list = DB.rnd;
    const co = q.get("company");
    if (co) list = list.filter(x => x.company === co);
    return sendJSON(res, 200, list);
  }
  if (p === "/api/rnd" && method === "POST") {
    if (!need()) return;
    const company = user.role === "company" ? user.name : (body.company || "—");
    const item = { id:nextId("r"), company, cat:body.cat || "—", name:body.name || {}, desc:body.desc || {}, patent:!!body.patent, status:"pending" };
    DB.rnd.unshift(item); save();
    return sendJSON(res, 201, item);
  }
  { const m = match(/^\/api\/rnd\/(.+)$/); if (m && method === "PUT") {
    if (!need("admin")) return;
    const r = DB.rnd.find(x => x.id === m[1]);
    if (!r) return sendJSON(res, 404, { error:"not_found" });
    if (body.status) r.status = body.status; save();
    return sendJSON(res, 200, r); } }

  /* modules */
  if (p === "/api/modules" && method === "GET") return sendJSON(res, 200, DB.modules);
  { const m = match(/^\/api\/modules\/(.+)$/); if (m && method === "PUT") {
    if (!need("admin")) return;
    DB.modules[m[1]] = !!body.enabled; save();
    return sendJSON(res, 200, { id:m[1], enabled:DB.modules[m[1]] }); } }

  /* chat messages */
  if (p === "/api/messages" && method === "GET") {
    if (!need()) return;
    const chat = q.get("chat") || "";
    if (user.role !== "admin" && chat !== "group" && chat !== user.name) return sendJSON(res, 403, { error:"forbidden" });
    return sendJSON(res, 200, DB.messages.filter(x => x.chat === chat).sort((a,b) => a.ts - b.ts));
  }
  if (p === "/api/messages" && method === "POST") {
    if (!need()) return;
    const chat = body.chat || "";
    if (user.role !== "admin" && chat !== "group" && chat !== user.name) return sendJSON(res, 403, { error:"forbidden" });
    const kind = ["text","image","file","voice"].includes(body.kind) ? body.kind : "text";
    const item = {
      id:nextId("m"), chat, sender:user.name, role:user.role, kind,
      text:String(body.text || ""),
      data: kind === "text" ? null : (body.data || null),   // data URL for image/file/voice
      name: body.name ? String(body.name).slice(0, 200) : null,
      dur:  body.dur ? Number(body.dur) : null,
      seenBy: [],                                           // [{ name, at }] read receipts
      ts:Date.now(),
    };
    if (kind !== "text" && !item.data) return sendJSON(res, 400, { error:"no_data" });
    DB.messages.push(item); save();
    return sendJSON(res, 201, item);
  }
  if (p === "/api/messages/seen" && method === "POST") {   // mark a chat's messages as seen by me
    if (!need()) return;
    const chat = body.chat || "";
    if (user.role !== "admin" && chat !== "group" && chat !== user.name) return sendJSON(res, 403, { error:"forbidden" });
    const now = Date.now();
    let changed = false;
    DB.messages.forEach(mm => {
      if (mm.chat !== chat || mm.sender === user.name) return;   // never mark my own messages
      mm.seenBy = mm.seenBy || [];
      if (!mm.seenBy.some(s => s.name === user.name)) { mm.seenBy.push({ name: user.name, at: now }); changed = true; }
    });
    if (changed) save();
    return sendJSON(res, 200, { ok:true });
  }
  { const m = match(/^\/api\/messages\/(.+)$/); if (m && method === "PUT") {   // edit own text message
    if (!need()) return;
    const msg = DB.messages.find(x => x.id === m[1]);
    if (!msg) return sendJSON(res, 404, { error:"not_found" });
    if (msg.sender !== user.name) return sendJSON(res, 403, { error:"forbidden" });   // author only
    if ((msg.kind || "text") !== "text") return sendJSON(res, 400, { error:"not_text" });
    const text = String(body.text || "").trim();
    if (!text) return sendJSON(res, 400, { error:"empty" });
    msg.text = text; msg.edited = true; save();
    return sendJSON(res, 200, msg); } }
  { const m = match(/^\/api\/messages\/(.+)$/); if (m && method === "DELETE") {   // author or admin deletes
    if (!need()) return;
    const msg = DB.messages.find(x => x.id === m[1]);
    if (!msg) return sendJSON(res, 404, { error:"not_found" });
    if (msg.sender !== user.name && user.role !== "admin") return sendJSON(res, 403, { error:"forbidden" });
    DB.messages = DB.messages.filter(x => x.id !== m[1]); save();
    return sendJSON(res, 200, { ok:true }); } }

  /* notifications (admin + companies; by role, optionally targeted to one company) */
  // A notification is visible when its audience matches the role AND it's either a broadcast
  // (no company target) or targeted at this exact company.
  const notifVisible = n => n.audience === user.role && (!n.company || n.company === user.name);
  if (p === "/api/notifications" && method === "GET") {
    if (!need()) return;
    const mine = DB.notifications.filter(notifVisible);
    const list = mine.map(n => ({ id:n.id, title:n.title, text:n.text, link:n.link || null, at:n.at, read:(n.readBy || []).includes(user.name) }));
    return sendJSON(res, 200, { list, unread: list.filter(n => !n.read).length });
  }
  if (p === "/api/notifications/read" && method === "POST") {
    if (!need()) return;
    DB.notifications.forEach(n => {
      if (notifVisible(n) && !(n.readBy || []).includes(user.name)) (n.readBy = n.readBy || []).push(user.name);
    });
    save(); return sendJSON(res, 200, { ok:true });
  }

  /* monthly report */
  if (p === "/api/reports/generate" && method === "POST") {
    if (!need()) return;
    const scope = user.role === "admin" ? "ALL" : user.name;
    const rep = { id:nextId("rep"), scope, at:new Date().toISOString(), revenue:"$48K", orders:186, growth:"+22%" };
    DB.reports.unshift(rep); save();
    return sendJSON(res, 201, rep);
  }

  /* AI: draft an official letter to the admin (authenticated company/admin) */
  if (p === "/api/ai/letter" && method === "POST") {
    if (!need()) return;
    const atts = Array.isArray(body.attachments) ? body.attachments.map(a => ({ kind:a && a.kind, name:a && a.name })) : [];
    return sendJSON(res, 200, aiLetter(String(body.message || ""), body.lang || "ru", user, atts));
  }

  /* AI chat — per-visitor 3-prompt limit + topic guard */
  if (p === "/api/ai/usage" && method === "GET") {
    const v = q.get("visitor") || "";
    const used = DB.aiUsage[v] || 0;
    return sendJSON(res, 200, { used, remaining: Math.max(0, 3 - used), locked: used >= 3 });
  }
  if (p === "/api/ai/chat" && method === "POST") {
    const msg = String(body.message || "");
    const lang = body.lang || "ru";
    const onTopic = KONG_TOPIC.test(msg) || GREETING.test(msg);
    // Authenticated users (company/admin) get unlimited business AI — topic guard only.
    if (user) {
      if (!onTopic) return sendJSON(res, 200, { offtopic:true, reply:null, remaining:null, locked:false });
      return sendJSON(res, 200, { offtopic:false, reply:aiReply(msg, lang, user), remaining:null, locked:false });
    }
    // Anonymous visitors: 3-prompt limit tracked per visitor id.
    const v = body.visitor || "";
    if (!v) return sendJSON(res, 400, { error:"no_visitor" });
    const used = DB.aiUsage[v] || 0;
    if (used >= 3) return sendJSON(res, 200, { locked:true, remaining:0, reply:null, offtopic:false });
    if (!onTopic) return sendJSON(res, 200, { offtopic:true, reply:null, remaining:Math.max(0,3-used), locked:false });
    DB.aiUsage[v] = used + 1; save();
    return sendJSON(res, 200, { offtopic:false, reply:aiReply(msg, lang, null), remaining:Math.max(0,3-(used+1)), locked:(used+1)>=3 });
  }

  return sendJSON(res, 404, { error:"not_found" });
}

/* ----------------------------------------------------------
   Server
   ---------------------------------------------------------- */
load();

// Shared request handler for both http and https.
function handler(req, res) {
  const urlPath = req.url || "/";
  if (urlPath.startsWith("/api/")) {
    api(req, res, urlPath).catch(err => { console.error(err); sendJSON(res, 500, { error:"server_error" }); });
  } else {
    serveStatic(req, res, urlPath);
  }
}

// List LAN IPv4 addresses for the startup banner.
function lanAddrs() {
  const nets = require("node:os").networkInterfaces();
  const out = [];
  Object.entries(nets).forEach(([name, addrs]) =>
    (addrs || []).forEach(i => { if (i.family === "IPv4" && !i.internal) out.push({ name, ip: i.address }); }));
  return out;
}

const HTTPS_PORT = process.env.HTTPS_PORT || 5443;
const CERT = path.join(ROOT, "certs", "cert.pem");
const KEY  = path.join(ROOT, "certs", "key.pem");

http.createServer(handler).listen(PORT, "0.0.0.0", () => {
  console.log(`Konglomerat → http://localhost:${PORT}`);
  lanAddrs().forEach(a => console.log(`On network  → http://${a.ip}:${PORT}   (${a.name})`));
  console.log(`API         → http://localhost:${PORT}/api/health`);
});

// HTTPS is required for the microphone (voice messages) on other devices:
// browsers only expose navigator.mediaDevices in a secure context (https or localhost).
if (fs.existsSync(CERT) && fs.existsSync(KEY)) {
  try {
    const https = require("node:https");
    https.createServer({ cert: fs.readFileSync(CERT), key: fs.readFileSync(KEY) }, handler)
      .listen(HTTPS_PORT, "0.0.0.0", () => {
        console.log(`\nSecure (voice-ready, use this on phones/tablets):`);
        console.log(`Konglomerat → https://localhost:${HTTPS_PORT}`);
        lanAddrs().forEach(a => console.log(`On network  → https://${a.ip}:${HTTPS_PORT}   (${a.name})`));
      });
  } catch (e) { console.error("HTTPS disabled:", e.message); }
} else {
  console.log(`(HTTPS off — no certs/ found; voice messages work only on localhost or over https)`);
}
