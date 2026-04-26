const les1Output = document.getElementById("les1-output");
const les2Output = document.getElementById("les2-output");
const les4Output = document.getElementById("les4-output");
const statusEl = document.getElementById("les3-status");
const cardsEl = document.getElementById("les3-cards");
const modalsRoot = document.getElementById("modals-root");

function createPoster(heroine) {
  const initials = heroine.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const accent = heroine.accent || "#ff7eb7";
  const accentSoft = heroine.accentSoft || "#ffe0ef";
  const hair = heroine.hair || "#6d4f6d";
  const eyes = heroine.eyes || "#7f6bff";

  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 860">' +
    '<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0%" stop-color="' + accentSoft + '"/>' +
    '<stop offset="100%" stop-color="' + accent + '"/>' +
    "</linearGradient></defs>" +
    '<rect width="640" height="860" rx="38" fill="url(#bg)"/>' +
    '<circle cx="520" cy="120" r="74" fill="rgba(255,255,255,0.24)"/>' +
    '<circle cx="112" cy="180" r="52" fill="rgba(255,255,255,0.18)"/>' +
    '<circle cx="320" cy="330" r="128" fill="' + hair + '"/>' +
    '<ellipse cx="320" cy="372" rx="106" ry="122" fill="#ffe8dd"/>' +
    '<path d="M234 318c24-74 150-82 176 0v50c-22-28-54-42-90-42-34 0-66 14-86 40z" fill="' + hair + '"/>' +
    '<ellipse cx="280" cy="380" rx="18" ry="22" fill="' + eyes + '"/>' +
    '<ellipse cx="360" cy="380" rx="18" ry="22" fill="' + eyes + '"/>' +
    '<circle cx="286" cy="376" r="6" fill="#ffffff"/>' +
    '<circle cx="366" cy="376" r="6" fill="#ffffff"/>' +
    '<path d="M286 438c20 18 48 18 68 0" stroke="#b75d7e" stroke-width="8" fill="none" stroke-linecap="round"/>' +
    '<path d="M198 648c30-106 202-118 246 0" fill="#fff5fb"/>' +
    '<path d="M224 628c28-40 170-42 194 0" fill="' + accentSoft + '"/>' +
    '<circle cx="236" cy="286" r="26" fill="' + accent + '"/>' +
    '<circle cx="404" cy="286" r="26" fill="' + accent + '"/>' +
    '<rect x="88" y="704" width="464" height="96" rx="26" fill="rgba(255,255,255,0.22)"/>' +
    '<text x="320" y="760" text-anchor="middle" font-family="Trebuchet MS, Arial, sans-serif" font-size="52" font-weight="700" fill="#ffffff">' +
    initials +
    "</text></svg>";

  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function runLesson1() {
  const lines = [];
  const clubMember = "Миса Амане";
  let starBalance = 120;
  const bonusPerEvent = 35;
  const dailySpend = 8;
  const weekSchedule = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  ];

  lines.push("Участница клуба: " + clubMember);
  lines.push("Стартовый баланс звёзд: " + starBalance);
  lines.push("");

  for (let dayIndex = 0; dayIndex < weekSchedule.length; dayIndex += 1) {
    const dayName = weekSchedule[dayIndex];
    const visitedEvent = dayIndex === 1 || dayIndex === 4 || dayIndex === 5;

    if (visitedEvent) {
      starBalance += bonusPerEvent;
      lines.push(dayName + ": посещение ивента +" + bonusPerEvent + ", баланс = " + starBalance);
    } else {
      lines.push(dayName + ": новых наград нет, баланс = " + starBalance);
    }

    starBalance -= dailySpend;
    lines.push(dayName + ": трата на мерч -" + dailySpend + ", баланс = " + starBalance);
    lines.push("");
  }

  lines.push("Итоговый баланс к концу недели: " + starBalance);
  les1Output.textContent = lines.join("\n");
}

function runLesson2() {
  const lines = [];
  const messages = [
    "Я собираю топ вайфу сезона, нужна помощь!",
    "Добавь Марин, она слишком яркая и стильная.",
    "Согласна, но Микаса всё ещё вне конкуренции.",
    "Тогда ищем ещё вайфу с сильным характером.",
    "Я уже подготовила список и постер для клуба."
  ];
  const searchText = "вайфу";

  lines.push("Переписка клуба:");
  lines.push("");

  for (let i = 0; i < messages.length; i += 1) {
    const author = i % 2 === 0 ? "Ая" : "Рин";
    lines.push(author + ": " + messages[i]);
  }

  lines.push("");
  lines.push('Поиск по слову "' + searchText + '":');

  const foundMessages = [];
  for (const message of messages) {
    if (message.toLowerCase().includes(searchText.toLowerCase())) {
      foundMessages.push(message);
    }
  }

  if (foundMessages.length === 0) {
    lines.push("Совпадения не найдены.");
  } else {
    for (let index = 0; index < foundMessages.length; index += 1) {
      lines.push(index + 1 + ". " + foundMessages[index]);
    }
  }

  les2Output.textContent = lines.join("\n");
}

function runLesson4() {
  if (!les4Output) return;

  const items = [
    "Приложение запускается через Node.js и Express без дополнительной сборки.",
    "Главная страница и клиентские файлы вынесены в каталог public для удобной публикации.",
    "Данные о героинях выдаются с собственного маршрута /api/heroines, поэтому интерфейс не зависит от стороннего сервиса.",
    "Проверка доступности сервера выполняется через маршрут /health.",
    "Статическая копия каталога также подходит для размещения на GitHub Pages."
  ];

  les4Output.innerHTML = items.map((item) => "<li>" + escapeHtml(item) + "</li>").join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeHeroine(heroine, index) {
  return {
    id: heroine.id || "heroine-" + index,
    name: heroine.name || "Без имени",
    anime: heroine.anime || "Не указано",
    archetype: heroine.archetype || "Не указано",
    mood: heroine.mood || "Не указано",
    quote: heroine.quote || "Цитата отсутствует",
    description: heroine.description || "Описание отсутствует",
    image: heroine.image || createPoster(heroine),
    palette: heroine.palette || "Розово-пастельная",
    accent: heroine.accent || "#ff7eb7",
    accentSoft: heroine.accentSoft || "#ffe0ef",
    hair: heroine.hair || "#6d4f6d",
    eyes: heroine.eyes || "#7f6bff"
  };
}

async function fetchHeroines() {
  const urls = ["./data/heroines.json", "data/heroines.json", "./api/heroines", "/api/heroines"];

  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        continue;
      }

      const payload = await response.json();
      const heroines = Array.isArray(payload.heroines) ? payload.heroines : [];
      if (heroines.length > 0) {
        return heroines.map(normalizeHeroine);
      }
    } catch (error) {
      continue;
    }
  }

  throw new Error("Источник данных недоступен");
}

function getCharacterCard(character) {
  return (
    '<article class="character-card">' +
    '<img src="' + escapeHtml(character.image) + '" alt="' + escapeHtml(character.name) + '">' +
    '<div class="body">' +
    "<h3>" + escapeHtml(character.name) + "</h3>" +
    '<p class="meta"><b>Аниме:</b> ' + escapeHtml(character.anime) + "</p>" +
    '<p class="meta"><b>Архетип:</b> ' + escapeHtml(character.archetype) + "</p>" +
    '<p class="meta"><b>Настроение:</b> ' + escapeHtml(character.mood) + "</p>" +
    '<button class="btn" data-open-modal="' + escapeHtml(character.id) + '">Открыть профиль</button>' +
    "</div>" +
    "</article>"
  );
}

function getCharacterCards(characters) {
  return characters.map(getCharacterCard);
}

function getCharacterModal(character) {
  return (
    '<div class="modal" id="modal-' + escapeHtml(character.id) + '" data-modal>' +
    '<div class="modal-box">' +
    '<div class="modal-head">' +
    "<h3>" + escapeHtml(character.name) + "</h3>" +
    '<button class="close" data-close-modal>&times;</button>' +
    "</div>" +
    '<div class="modal-content">' +
    '<img src="' + escapeHtml(character.image) + '" alt="' + escapeHtml(character.name) + '">' +
    "<p><b>Аниме:</b> " + escapeHtml(character.anime) + "</p>" +
    "<p><b>Архетип:</b> " + escapeHtml(character.archetype) + "</p>" +
    "<p><b>Настроение:</b> " + escapeHtml(character.mood) + "</p>" +
    "<p><b>Цветовая палитра:</b> " + escapeHtml(character.palette) + "</p>" +
    "<p><b>Цитата:</b> " + escapeHtml(character.quote) + "</p>" +
    "<p><b>Описание:</b> " + escapeHtml(character.description) + "</p>" +
    "</div>" +
    "</div>" +
    "</div>"
  );
}

function getCharacterModals(characters) {
  return characters.map(getCharacterModal);
}

function closeAllModals() {
  document.querySelectorAll("[data-modal]").forEach((modal) => {
    modal.classList.remove("is-open");
  });
}

function bindModalEvents() {
  cardsEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-modal]");
    if (!button) return;

    const id = button.getAttribute("data-open-modal");
    const modal = document.getElementById("modal-" + id);
    if (modal) {
      modal.classList.add("is-open");
    }
  });

  modalsRoot.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal]")) {
      closeAllModals();
      return;
    }

    if (event.target.matches("[data-modal]")) {
      closeAllModals();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
}

async function initLesson3() {
  bindModalEvents();

  try {
    const heroines = await fetchHeroines();
    cardsEl.innerHTML = getCharacterCards(heroines).join("");
    modalsRoot.innerHTML = getCharacterModals(heroines).join("");
    statusEl.textContent = "Загружено героинь: " + heroines.length;
  } catch (error) {
    statusEl.textContent = "Не удалось загрузить каталог: " + (error && error.message ? error.message : error);
    cardsEl.innerHTML = "";
    modalsRoot.innerHTML = "";
  }
}

runLesson1();
runLesson2();
runLesson4();
initLesson3();
