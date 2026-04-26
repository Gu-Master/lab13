const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

function createPoster({ name, accent, accentSoft, hair, eyes }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 860">' +
    '<defs>' +
    '<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0%" stop-color="' + accentSoft + '"/>' +
    '<stop offset="100%" stop-color="' + accent + '"/>' +
    "</linearGradient>" +
    "</defs>" +
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
    "</text>" +
    "</svg>";

  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const heroines = [
  {
    id: "asuna",
    name: "Asuna Yuuki",
    anime: "Sword Art Online",
    archetype: "Боевая принцесса",
    mood: "Уверенная и нежная",
    palette: "Алый, белый, медовый",
    quote: "Иногда самое важное сражение происходит ради близких.",
    description: "Лидерская, собранная и очень харизматичная героиня, которая легко стала центром этой витрины.",
    image: createPoster({
      name: "Asuna Yuuki",
      accent: "#ff709f",
      accentSoft: "#ffd4e6",
      hair: "#b87447",
      eyes: "#8f4ef4"
    })
  },
  {
    id: "marin",
    name: "Marin Kitagawa",
    anime: "My Dress-Up Darling",
    archetype: "Яркая модница",
    mood: "Энергичная и дружелюбная",
    palette: "Персиковый, розовый, золотой",
    quote: "Когда любишь хобби по-настоящему, это сразу видно.",
    description: "Героиня с мощной энергией, любовью к косплею и очень выразительным визуальным стилем.",
    image: createPoster({
      name: "Marin Kitagawa",
      accent: "#ff91b8",
      accentSoft: "#ffe8b6",
      hair: "#f1d45d",
      eyes: "#f26a6a"
    })
  },
  {
    id: "mikasa",
    name: "Mikasa Ackerman",
    anime: "Attack on Titan",
    archetype: "Невозмутимый защитник",
    mood: "Сдержанная и сильная",
    palette: "Графит, бордо, сталь",
    quote: "Сила нужна для того, чтобы защитить дорогих людей.",
    description: "Серьёзная и собранная героиня, которая контрастирует с более мягкой пастельной частью коллекции.",
    image: createPoster({
      name: "Mikasa Ackerman",
      accent: "#7f6bff",
      accentSoft: "#d9d2ff",
      hair: "#2f2437",
      eyes: "#596bff"
    })
  },
  {
    id: "nezuko",
    name: "Nezuko Kamado",
    anime: "Demon Slayer",
    archetype: "Милая защитница",
    mood: "Трогательная и смелая",
    palette: "Розовый, тёмно-коричневый, зелёный",
    quote: "Даже в тишине можно оставаться рядом с теми, кого любишь.",
    description: "Образ героини совмещает мягкость и внутреннюю стойкость, поэтому хорошо подходит для аниме-тематики лабораторной.",
    image: createPoster({
      name: "Nezuko Kamado",
      accent: "#ff7eaf",
      accentSoft: "#ffd6e5",
      hair: "#3c2c2a",
      eyes: "#ff6283"
    })
  },
  {
    id: "zero-two",
    name: "Zero Two",
    anime: "Darling in the Franxx",
    archetype: "Дерзкая звезда",
    mood: "Игривый бунтарь",
    palette: "Малиновый, жемчужный, красный",
    quote: "Не бойся выделяться, если это действительно ты.",
    description: "Одна из самых узнаваемых героинь современной аниме-культуры, отлично работающая как акцентный персонаж подборки.",
    image: createPoster({
      name: "Zero Two",
      accent: "#ff5c7a",
      accentSoft: "#ffdbe8",
      hair: "#f6a6bf",
      eyes: "#4bd0d1"
    })
  },
  {
    id: "violet",
    name: "Violet Evergarden",
    anime: "Violet Evergarden",
    archetype: "Элегантная романтика",
    mood: "Спокойная и чувственная",
    palette: "Синий, золото, айвори",
    quote: "Чувства легче понять, когда им находят точные слова.",
    description: "Утончённая героиня, которая добавляет витрине более лиричное и эстетичное настроение.",
    image: createPoster({
      name: "Violet Evergarden",
      accent: "#6e85ff",
      accentSoft: "#e5e8ff",
      hair: "#f0d068",
      eyes: "#4d77db"
    })
  }
];

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/heroines", (req, res) => {
  res.json({ heroines });
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
