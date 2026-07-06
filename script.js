gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

window.scrollTo(0, 0);

const SUPPORTS_HOVER = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const COARSE_POINTER = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

function edgePad() {
  return Math.min(48, Math.max(20, window.innerWidth * 0.06));
}

const NONE_CIRCLE = { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 };

const INTRO_GROWN_R = 0.05;

const KI_QUESTION_TOKENS = [
  { text: "Wie", keep: true },
  { text: "viel", keep: true },
  { text: "Wasser", keep: false },
  { text: "verbraucht", keep: false },
  { br: true },
  { text: "eine", keep: false },
  { text: "KI-Anfrage", keep: false },
  { text: "?", keep: true, tight: true },
];

const DATA_TOKENS = [
  { text: "Viele", keep: false },
  { text: "der", keep: false },
  { text: "zugrundeliegenden", keep: false },
  { br: true },
  { text: "Daten", keep: false },
  { text: "sind", keep: false },
  { text: "nicht", keep: true },
  { text: "öffentlich", keep: false },
  { br: true },
  { text: "verfügbar.", keep: true },
];

const SLIDES = [
  {

    bg: "#f0f0ee",
    circle: { ...NONE_CIRCLE },
    circle2: { ...NONE_CIRCLE },
    text: { lines: [""] },
  },
  {
    bg: "#f0f0ee",
    circle: { ...NONE_CIRCLE },
    circle2: { ...NONE_CIRCLE },
    text: { lines: [""] },
  },
  {
    bg: "#f0f0ee",

    circle: { cx: 0.5, cy: 0.5, r: INTRO_GROWN_R, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: {
      lines: ["Künstliche Intelligenz verbraucht", "Wasser zur Kühlung von Rechenzentren", "und deren Stromerzeugung."],
    },
  },
  {

    bg: "#f0f0ee",
    circle: { cx: 0.5, cy: 0.5, r: INTRO_GROWN_R, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: {
      lines: ["Künstliche Intelligenz verbraucht", "Wasser zur Kühlung von Rechenzentren", "und deren Stromerzeugung."],
    },
  },
  {

    bg: "#f0f0ee",
    circle: { cx: 0.5, cy: 0.5, r: INTRO_GROWN_R, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: ["Um eine Überhitzung zu", "vermeiden, wird Wasser zur", "Klimatisierung eingesetzt."] },
  },
  {

    bg: "#f0f0ee",
    circle: { cx: 0.5, cy: 0.5, r: INTRO_GROWN_R, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: ["Um eine Überhitzung zu", "vermeiden, wird Wasser zur", "Klimatisierung eingesetzt."] },
  },
  {
    bg: "#f0f0ee",
    circle: { cx: 0.5, cy: 0.5, r: 0.05, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: ["Um eine Überhitzung zu", "vermeiden, wird Wasser zur", "Klimatisierung eingesetzt."] },
  },
  {
    bg: "#f0f0ee",

    circle: { cx: 0.5, cy: 0.5, r: 0.05, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: {
      lines: ["Wie viel Wasser verbraucht", "eine KI-Anfrage?"],
      tokens: KI_QUESTION_TOKENS,
    },
  },
  {
    bg: "#f0f0ee",

    circle: { cx: 0.5, cy: 0.5, r: 0.05, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: ["Wie viel Wasser verbraucht", "eine KI-Anfrage?"], tokens: KI_QUESTION_TOKENS },
  },
  {
    bg: "#f0f0ee",

    circle: { cx: 0.5, cy: 0.5, r: 0.05, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: ["Wie viel Wasser verbraucht", "eine KI-Anfrage?"], tokens: KI_QUESTION_TOKENS },
  },
  {
    bg: "#f0f0ee",
    circle: { cx: 0.5, cy: 0.5, r: 0.05, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: [""] },
  },
  {
    bg: "#f0f0ee",
    circle: { cx: 0.5, cy: 0.5, r: 0.05, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: [""] },
  },
  {
    bg: "#f0f0ee",
    circle: { cx: 0.5, cy: 0.5, r: 0.05, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: [""] },
  },
  {
    bg: "#f0f0ee",
    circle: { cx: 0.5, cy: 0.5, r: 0.05, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: [""] },
  },

  {
    bg: "#f0f0ee",
    circle: { cx: 0.5, cy: 0.5, r: 0.05, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: [""] },
  },
  {
    bg: "#f0f0ee",
    circle: { cx: 0.5, cy: 0.5, r: 0.05, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: [""] },
  },
  {
    bg: "#dddddd",
    circle: { cx: 0.45, cy: 0.42, r: 0.58, blur: 90, fill: "#aaaaaa", opacity: 0.5 },
    circle2: { cx: 0.45, cy: 0.42, r: 0, blur: 90, fill: "#aaaaaa", opacity: 1 },

    text: {
      lines: ["Viele der zugrundeliegenden", "Daten sind nicht öffentlich", "verfügbar."],
      tokens: DATA_TOKENS,
    },
  },
  {

    bg: "#dddddd",
    circle: { cx: 0.45, cy: 0.42, r: 0.58, blur: 90, fill: "#aaaaaa", opacity: 0.5 },
    circle2: { cx: 0.45, cy: 0.42, r: 0, blur: 90, fill: "#aaaaaa", opacity: 1 },
    text: {
      lines: ["Viele der zugrundeliegenden", "Daten sind nicht öffentlich", "verfügbar."],
      tokens: DATA_TOKENS,
    },
  },
  {
    bg: "#333333",
    circle: { cx: 0.5, cy: 0.46, r: 0.34, blur: 55, fill: "#000000", opacity: 0.9 },
    circle2: { cx: 0.5, cy: 0.46, r: 0, blur: 55, fill: "#000000", opacity: 1 },

    text: {
      lines: ["Viele der zugrundeliegenden", "Daten sind nicht öffentlich", "verfügbar."],
      tokens: DATA_TOKENS,
    },
  },
  {
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },

    text: {
      lines: ["Viele der zugrundeliegenden", "Daten sind nicht öffentlich", "verfügbar."],
      tokens: DATA_TOKENS,
    },
  },
  {

    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 },
    text: { lines: [""] },
  },
  {

    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 42, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 42, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Wie viel Wasser verbraucht", "eine KI-Anfrage?"] },
  },
  {

    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 42, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 42, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Wie viel Wasser verbraucht", "eine KI-Anfrage?"] },
  },
  {

    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 14, fill: "#f0f0ee", opacity: 0.9 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 14, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Die Antwort besteht aus Widersprüchen,", "Unsicherheiten und Lücken."] },
  },
  {

    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 40, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 40, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Die Antwort besteht aus Widersprüchen,", "Unsicherheiten und Lücken."] },
  },
  {

    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 42, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 42, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Die Antwort besteht aus Widersprüchen,", "Unsicherheiten und Lücken."] },
  },
  {

    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Die Antwort besteht aus Widersprüchen,", "Unsicherheiten und Lücken."] },
  },
  {

    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    text: { lines: [""] },
  },
  {
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Was bleibt ist"] },
  },
  {
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Was bleibt ist"] },
  },
  {
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 22, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 22, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Ungewissheit"] },
  },
  {
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 22, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 22, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Ungewissheit"] },
  },
  {
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 22, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 22, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Ungewissheit"] },
  },
];

const WATER_STUDY_SOURCES = [
  { name: "Google Gemini", values: ["0,26"], link: "https://arxiv.org/abs/2508.15734" },
  { name: "UC Riverside Studie", values: ["10–50 ml für 20–50 Prompts"], link: "https://arxiv.org/abs/2304.03271" },
  { name: "ChatGPT", note: "Nicht veröffentlicht", link: "https://medium.com/readers-club/chatgpt-water-usage-1a1167244a5a" },
  { name: "IEA", note: "Kein eindeutiger Wert", link: "https://www.iea.org/reports/energy-and-ai" },
];

function studyValueBounds(v) {
  const parts = v.split("–").map((p) => p.trim());
  return parts.length === 2 ? parts : [parts[0], parts[0]];
}
function formatNumber(n) {
  let s = n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  return s.replace(".", ",");
}
function formatValueWithUnit(v) {
  if (/[a-zA-ZäöüÄÖÜß]/.test(v)) return v;
  const isRange = v.includes("–");
  const nums = studyValueBounds(v).map((p) => parseFloat(p.replace(",", ".")));
  const useLiters = nums.every((n) => n >= 1000);
  const formatted = nums.map((n) => formatNumber(useLiters ? n / 1000 : n));
  return `${isRange ? `${formatted[0]}–${formatted[1]}` : formatted[0]} ${useLiters ? "l" : "ml"}`;

}

const RIPPLE_R_MIN = 0.13;
const RIPPLE_R_MAX = 0.37;

const RIPPLE_RADIUS_FRACTIONS = WATER_STUDY_SOURCES.map((_, i, arr) =>
  lerp(RIPPLE_R_MIN, RIPPLE_R_MAX, arr.length > 1 ? i / (arr.length - 1) : 0)
);

const RING_ANGLES = WATER_STUDY_SOURCES.map((_, i) => (360 / WATER_STUDY_SOURCES.length) * i);
const STUDY_DOT_R = COARSE_POINTER ? 0.024 : 0.014;

const CIRCLE_CX = 0.5;

function ripplePosition(rFrac, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  const rPx = rFrac * Math.min(window.innerWidth, window.innerHeight);
  return {
    cx: CIRCLE_CX + (rPx * Math.sin(rad)) / window.innerWidth,
    cy: 0.5 - (rPx * Math.cos(rad)) / window.innerHeight,
  };
}

const WATER_STUDIES = WATER_STUDY_SOURCES.map((source, i) => ({
  name: source.name,
  display: source.values ? source.values.map(formatValueWithUnit).join(" · ") : source.note,
  link: source.link,
  ...ripplePosition(RIPPLE_RADIUS_FRACTIONS[i], RING_ANGLES[i]),
  r: STUDY_DOT_R,
  blur: 0,
  fill: "#000000",
  opacity: 1,
  ringIndex: i,
}));

const N = SLIDES.length;
const SEGMENT_VH = 90;
const NEGATIVE_SHRINK = 0.05;
const TEXT_FADE_RANGE = 1.0;
const EXIT_BLUR_PX = 14;

const TEXT_RISE_PX = 28;

const TEXT_DIM_COLOR = "#e2e4eb";
const SCROLL_HINT_HIDE_P = 0.04;
const TITLE_FADE_RANGE = 0.6;

const HEADER_FADE_RANGE = 0.12;

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpColor(hexA, hexB, t) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  return `rgb(${Math.round(lerp(a[0], b[0], t))}, ${Math.round(lerp(a[1], b[1], t))}, ${Math.round(lerp(a[2], b[2], t))})`;
}

function avgLuminance(hex) {
  const [r, g, b] = hexToRgb(hex);
  return (r + g + b) / 3;
}

function buildTextSegments(slides) {
  const segments = [];
  slides.forEach((slide, i) => {
    const key = slide.text.lines.join("\n");
    const prev = segments[segments.length - 1];
    if (prev && prev.key === key && prev.endIndex === i - 1) {
      prev.endIndex = i;
    } else {
      segments.push({
        key,
        lines: slide.text.lines,
        tokens: slide.text.tokens,
        fadeRange: slide.text.fadeRange,
        exitBlur: slide.text.exitBlur,
        startIndex: i,
        endIndex: i,
      });
    }
    slide.index = i;
  });
  return segments;
}

function buildSceneTexts(container, segments) {
  segments.forEach((seg) => {
    const el = document.createElement("p");
    el.className = "slide-text";
    if (seg.tokens) {
      el.classList.add("slide-text--plain-color");
      seg.wordEls = { keep: [], fade: [] };
      seg.colorWordEls = [];
      let afterWord = false;
      seg.tokens.forEach((tok) => {
        if (tok.br) {
          el.appendChild(document.createElement("br"));
          afterWord = false;
          return;
        }
        if (afterWord && !tok.tight) {
          el.appendChild(document.createTextNode(" "));
        }
        const span = document.createElement("span");
        span.textContent = tok.text;
        el.appendChild(span);
        (tok.keep ? seg.wordEls.keep : seg.wordEls.fade).push(span);
        seg.colorWordEls.push(span);
        afterWord = true;
      });
    } else if (seg.lines[0] === "Ungewissheit") {

      seg.lines.forEach((line, li) => {
        if (li > 0) el.appendChild(document.createElement("br"));
        el.appendChild(document.createTextNode(line));
      });
    } else {

      el.classList.add("slide-text--plain-color");
      seg.colorWordEls = [];
      seg.lines.forEach((line, li) => {
        if (li > 0) el.appendChild(document.createElement("br"));
        line.split(" ").forEach((word, wi) => {
          if (wi > 0) el.appendChild(document.createTextNode(" "));
          const span = document.createElement("span");
          span.textContent = word;
          el.appendChild(span);
          seg.colorWordEls.push(span);
        });
      });
    }
    container.appendChild(el);
    seg.el = el;
  });
}

const TEXT_SEGMENTS = buildTextSegments(SLIDES);
buildSceneTexts(document.getElementById("sceneTexts"), TEXT_SEGMENTS);

function wrapWordsForColorSweep(el) {
  const lines = el.innerHTML.split(/<br\s*\/?>/i);
  el.textContent = "";
  el.classList.add("slide-text--plain-color");
  const words = [];
  lines.forEach((line, li) => {
    if (li > 0) el.appendChild(document.createElement("br"));
    line.trim().split(" ").forEach((word, wi) => {
      if (!word) return;
      if (wi > 0) el.appendChild(document.createTextNode(" "));
      const span = document.createElement("span");
      span.textContent = word;
      el.appendChild(span);
      words.push(span);
    });
  });
  return words;
}

const NON_EMPTY_TEXT_SEGMENTS = TEXT_SEGMENTS.filter((seg) => seg.key !== "");
NON_EMPTY_TEXT_SEGMENTS.forEach((seg, idx) => {
  const prev = NON_EMPTY_TEXT_SEGMENTS[idx - 1];
  const next = NON_EMPTY_TEXT_SEGMENTS[idx + 1];
  seg.fadeInRadius = prev ? Math.min(TEXT_FADE_RANGE, (seg.startIndex - prev.endIndex) / 2) : TEXT_FADE_RANGE;
  seg.fadeOutRadius = next ? Math.min(TEXT_FADE_RANGE, (next.startIndex - seg.endIndex) / 2) : TEXT_FADE_RANGE;
});

const invertStageEl = document.getElementById("invertStage");
const titleScreenEl = document.getElementById("titleScreen");
const siteHeaderEl = document.getElementById("siteHeader");
const circleEl = document.getElementById("circle");
const circle2El = document.getElementById("circle2");
const scrollHintEl = document.getElementById("scrollHint");
const restartHintEl = document.getElementById("restartHint");
const clickHintEl = document.getElementById("clickHint");
const sourceRevealTextEl = document.getElementById("sourceRevealText");
const rippleLegendEl = document.getElementById("rippleLegend");
const varianceTextEl = document.getElementById("varianceText");
const varianceWordEls = wrapWordsForColorSweep(varianceTextEl);
const conditionsTitleTextEl = document.getElementById("conditionsTitleText");
const conditionsTitleWordEls = wrapWordsForColorSweep(conditionsTitleTextEl);
const conditionsVarianceTextEl = document.getElementById("conditionsVarianceText");

const CONDITIONS_VARIANCE_CHUNKS = [
  { text: "Der Verbrauch schwankt", blur: 5, growth: 1.18, ringBlur: 4, ringOpacity: 0.75 },
  { text: "je nach Standort,", blur: 10, growth: 1.38, ringBlur: 9, ringOpacity: 0.55 },
  { text: "Klima", blur: 16, growth: 1.6, ringBlur: 15, ringOpacity: 0.38 },
  { text: "und Auslastung.", blur: 24, growth: 1.85, ringBlur: 22, ringOpacity: 0.22 },
];
const conditionsChunkEls = CONDITIONS_VARIANCE_CHUNKS.map((chunk, i) => {
  if (i === 2) {
    conditionsVarianceTextEl.appendChild(document.createElement("br"));
  } else if (i > 0) {
    conditionsVarianceTextEl.append(" ");
  }
  const span = document.createElement("span");
  span.textContent = chunk.text;
  gsap.set(span, { opacity: 0 });
  conditionsVarianceTextEl.appendChild(span);
  return span;
});

const dataQuestionTextEl = document.getElementById("dataQuestionText");
const dataQuestionWordEls = wrapWordsForColorSweep(dataQuestionTextEl);
const impressumEl = document.getElementById("impressum");
const progressBarEl = document.getElementById("progressBar");
const progressBarFillEl = document.getElementById("progressBarFill");

const QUESTION_INDEX = SLIDES.findIndex((s) => s.text.lines[0] === "Wie viel Wasser verbraucht");
const GATE_INDEX = QUESTION_INDEX + 2;

const TEXT_GAP = 1.0;
const TEXT_HOLD = 0.8;

const RESET_DEADZONE = 0.15;
const VARIANCE_START = GATE_INDEX;
const VARIANCE_END = VARIANCE_START + TEXT_HOLD;
const CONDITIONS_TRIGGER_INDEX = VARIANCE_END + TEXT_GAP;

const DATA_QUESTION_START = CONDITIONS_TRIGGER_INDEX;
const DATA_QUESTION_END = DATA_QUESTION_START + TEXT_HOLD;

const EASE_APPEAR = gsap.parseEase("power2.out");
const EASE_LEAVE = gsap.parseEase("power2.in");
const POINT_FADE_RADIUS = TEXT_GAP / 2;

function pointSegmentOpacity(p, startIndex, endIndex, fadeInRadius = TEXT_FADE_RANGE, fadeOutRadius = TEXT_FADE_RANGE) {
  if (p < startIndex) {
    const progress = gsap.utils.clamp(0, 1, 1 - (startIndex - p) / fadeInRadius);
    return EASE_APPEAR(progress);
  }
  if (p > endIndex) {
    const progress = gsap.utils.clamp(0, 1, 1 - (p - endIndex) / fadeOutRadius);
    return EASE_LEAVE(progress);
  }
  return 1;
}

const QUESTION_SEGMENT = TEXT_SEGMENTS.find((seg) => seg.startIndex <= GATE_INDEX && seg.endIndex >= GATE_INDEX);
let questionHidden = false;

QUESTION_SEGMENT.fadeRange = [QUESTION_SEGMENT.startIndex + 1, QUESTION_SEGMENT.startIndex + 2];

const QUESTION_REPRISE_SEGMENT = TEXT_SEGMENTS.find(
  (seg) => seg.lines && seg.lines[0] === "Wie viel Wasser verbraucht" && seg !== QUESTION_SEGMENT
);
if (QUESTION_REPRISE_SEGMENT) {
  QUESTION_REPRISE_SEGMENT.el.classList.remove("slide-text--plain-color");
  QUESTION_REPRISE_SEGMENT.colorWordEls = null;
}

const DATA_SEGMENT = TEXT_SEGMENTS.find((seg) => seg.tokens === DATA_TOKENS);
DATA_SEGMENT.fadeRange = [DATA_SEGMENT.startIndex + 1, DATA_SEGMENT.startIndex + 2];

const FINAL_SEGMENT = TEXT_SEGMENTS.find((seg) => seg.lines && seg.lines[0] === "Ungewissheit");
if (FINAL_SEGMENT) FINAL_SEGMENT.el.classList.add("slide-text--final");
let finalFadeArmed = false;

const CONTRADICTIONS_SEGMENT = TEXT_SEGMENTS.find(
  (seg) => seg.lines && seg.lines[0] === "Die Antwort besteht aus Widersprüchen,"
);

const CONTRADICTIONS_WORDS = ["Die", "Antwort", "besteht", "aus", "Widersprüchen,", "Unsicherheiten", "und", "Lücken."];
const CONTRADICTIONS_LINE_BREAK_AFTER = "Widersprüchen,";
CONTRADICTIONS_SEGMENT.el.textContent = "";
CONTRADICTIONS_SEGMENT.colorWordEls = null;
const contradictionWordSpans = CONTRADICTIONS_WORDS.map((word, i) => {
  if (i > 0) CONTRADICTIONS_SEGMENT.el.append(" ");
  const span = document.createElement("span");
  span.textContent = word;
  gsap.set(span, { opacity: 0, color: TEXT_DIM_COLOR });
  CONTRADICTIONS_SEGMENT.el.appendChild(span);
  if (word === CONTRADICTIONS_LINE_BREAK_AFTER) CONTRADICTIONS_SEGMENT.el.appendChild(document.createElement("br"));
  return span;
});

const contradictionWaveRings = [0, 1, 2, 3].map(() => {
  const ring = document.createElement("div");
  ring.className = "ripple-ring ripple-ring--light";
  invertStageEl.appendChild(ring);
  gsap.set(ring, { width: 0, height: 0, opacity: 0, filter: "blur(0px)" });
  return ring;
});

const studyRevealEl = document.getElementById("studyReveal");
const studyEls = WATER_STUDIES.map((study, i) => {
  const circle = document.createElement("div");
  circle.className = "study-circle";
  circle.addEventListener("click", () => {
    if (study.link) {
      window.open(study.link, "_blank", "noopener");
    } else {
      onGateClick();
    }
  });

  const labelEl = document.createElement("p");
  labelEl.className = "study-name";
  labelEl.append(`Quelle ${i + 1}: ${study.name}`, document.createElement("br"), study.display);
  if (study.link) {
    labelEl.append(document.createElement("br"), "Studie ansehen ↗");
    labelEl.classList.add("study-name--linked");
    labelEl.addEventListener("click", () => window.open(study.link, "_blank", "noopener"));
  }
  studyRevealEl.append(circle, labelEl);
  const labelHalfW = labelEl.offsetWidth / 2;

  if (SUPPORTS_HOVER) {
    circle.addEventListener("mouseenter", () => gsap.set(labelEl, { opacity: 1 }));
    circle.addEventListener("mouseleave", () => gsap.set(labelEl, { opacity: 0 }));
  }

  gsap.set([circle, labelEl], { opacity: 0 });
  return { circle, labelEl, labelHalfW };
});

const ringEls = [];

function pulseHero(ringIndex) {
  gsap
    .timeline()
    .to(circleEl, { scale: 1.12, duration: 0.18, ease: "power2.out" })
    .to(circleEl, { scale: 1, duration: 0.35, ease: "power2.inOut" });

  const targetRPx = RIPPLE_RADIUS_FRACTIONS[ringIndex] * Math.min(window.innerWidth, window.innerHeight);
  const ring = document.createElement("div");
  ring.className = "ripple-ring";
  studyRevealEl.appendChild(ring);
  gsap.set(ring, { width: 0, height: 0, opacity: 0 });
  gsap.to(ring, { width: targetRPx * 2, height: targetRPx * 2, opacity: 1, duration: 0.7, ease: "power2.out" });
  ringEls.push(ring);
}

function applyStudyCircle(el, geom) {
  gsap.set(el, {
    left: geom.cxPx,
    top: geom.cyPx,
    width: geom.rPx * 2,
    height: geom.rPx * 2,
    xPercent: -50,
    yPercent: -50,
    filter: `blur(${geom.blur}px)`,
    backgroundColor: geom.fill,
  });
}

let revealedCount = 0;
let gateArmed = false;
let gateDone = false;
let scrollFrozen = false;
let hintTimer = null;
let varianceReady = false;

let heroScale = 1;

let waitingForImpressum = false;
let impressumArmed = false;
let studiesDismissed = false;
let studyExtraBlur = 0;
let gateHoldIndex = null;
let conditionsGateArmed = false;
let conditionsArmed = false;
let conditionsStage = 0;
let awaitingDataQuestionStart = false;
let dataQuestionReady = false;
let dataQuestionArmed = false;
let dataQuestionDismissed = false;

const HINT_DELAY_MS = 3000;
const SECOND_GATE_HINT_DELAY_MS = 1000;
let hintEverShown = false;

function scheduleHint(showImmediately, delayMs = HINT_DELAY_MS) {
  clearTimeout(hintTimer);
  gsap.to(clickHintEl, { opacity: showImmediately ? 1 : 0, duration: showImmediately ? 0.4 : 0.2 });
  hintTimer = setTimeout(() => gsap.to(clickHintEl, { opacity: 1, duration: 0.4 }), delayMs);
}

let scrollHintTimer = null;
let scrollHintArmedAgain = false;
let scrollHintTriggerP = null;
let scrollHintInitialDelayDone = false;
setTimeout(() => {
  scrollHintInitialDelayDone = true;
}, 2000);

function scheduleScrollHint(showImmediately) {
  clearTimeout(scrollHintTimer);
  gsap.to(scrollHintEl, { opacity: showImmediately ? 1 : 0, duration: showImmediately ? 0.4 : 0.2 });
  scrollHintTimer = setTimeout(() => gsap.to(scrollHintEl, { opacity: 1, duration: 0.4 }), HINT_DELAY_MS);
}

function hideScrollHint() {
  scrollHintArmedAgain = false;
  clearTimeout(scrollHintTimer);
  gsap.killTweensOf(scrollHintEl);
  gsap.to(scrollHintEl, { opacity: 0, duration: 0.25 });
}

function preventScroll(e) {
  e.preventDefault();
  if (!waitingForImpressum) return;
  if (e.deltaY < 0) cancelImpressumWait();
  else revealImpressum();
}
const SCROLL_KEYS = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "];
const BACKWARD_SCROLL_KEYS = ["ArrowUp", "PageUp", "Home"];
function preventScrollKeys(e) {
  if (!SCROLL_KEYS.includes(e.key)) return;
  e.preventDefault();
  if (!waitingForImpressum) return;
  if (BACKWARD_SCROLL_KEYS.includes(e.key)) cancelImpressumWait();
  else revealImpressum();
}

let impressumRevealTimer = null;

function armImpressum() {
  impressumArmed = true;
  lockScroll();
  waitingForImpressum = true;
  impressumRevealTimer = gsap.delayedCall(8, revealImpressum);
}

function cancelImpressumWait() {
  if (!waitingForImpressum) return;
  waitingForImpressum = false;
  impressumArmed = false;
  if (impressumRevealTimer) {
    impressumRevealTimer.kill();
    impressumRevealTimer = null;
  }
  unlockScroll();
  window.scrollTo(0, slidePx(FINAL_SEGMENT.startIndex - RESET_DEADZONE - 0.05));
}

let endingTimeline = null;

function revealImpressum() {
  if (!waitingForImpressum) return;
  waitingForImpressum = false;
  unlockScroll();
  scrollHintArmedAgain = false;
  clearTimeout(scrollHintTimer);
  gsap.to(scrollHintEl, { opacity: 0, duration: 0.3 });

  finalFadeArmed = true;

  endingTimeline = gsap.timeline();
  endingTimeline.to(circleEl, { opacity: 0, duration: 1, ease: "power2.out" }, 0);
  endingTimeline.to(circle2El, { opacity: 0, duration: 1, ease: "power2.out" }, 0);
  if (FINAL_SEGMENT) endingTimeline.to(FINAL_SEGMENT.el, { opacity: 0, duration: 1, ease: "power2.out" }, 0);

  endingTimeline.call(() => impressumEl.setAttribute("aria-hidden", "false"), null, 2);
  endingTimeline.to(impressumEl, { opacity: 1, duration: 1, ease: "power2.out" }, 2);

  endingTimeline.call(() => {
    restartHintEl.setAttribute("aria-hidden", "false");
    restartHintEl.style.pointerEvents = "auto";
  }, null, 4.5);
  endingTimeline.to(restartHintEl, { opacity: 1, duration: 1, ease: "power2.out" }, 4.5);
}

function resetImpressum() {
  finalFadeArmed = false;
  impressumArmed = false;
  if (endingTimeline) {
    endingTimeline.kill();
    endingTimeline = null;
  }
  impressumEl.setAttribute("aria-hidden", "true");
  gsap.killTweensOf(impressumEl);
  gsap.to(impressumEl, { opacity: 0, duration: 0.4, ease: "power2.in" });
  restartHintEl.setAttribute("aria-hidden", "true");
  restartHintEl.style.pointerEvents = "none";
  gsap.killTweensOf(restartHintEl);
  gsap.to(restartHintEl, { opacity: 0, duration: 0.3, ease: "power2.in" });
}

restartHintEl.addEventListener("click", () => {
  window.location.reload();
});

function lockScroll() {
  window.addEventListener("wheel", preventScroll, { passive: false });
  window.addEventListener("touchmove", preventScroll, { passive: false });
  window.addEventListener("keydown", preventScrollKeys);
}

function unlockScroll() {
  window.removeEventListener("wheel", preventScroll);
  window.removeEventListener("touchmove", preventScroll);
  window.removeEventListener("keydown", preventScrollKeys);
}

function slidePx(index) {
  return sequenceTrigger.start + (index / (N - 1)) * (sequenceTrigger.end - sequenceTrigger.start);
}

function armGate() {
  gateArmed = true;
  scrollFrozen = true;
  gateHoldIndex = GATE_INDEX;
  window.scrollTo(0, slidePx(GATE_INDEX));
  lockScroll();
  hideScrollHint();
  circleEl.classList.add("circle--clickable");
  clickHintEl.textContent = "Klicke den Kreis an";
  gsap.to(circleEl, { scale: 1.035, duration: 0.9, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2 });
  scheduleHint(!hintEverShown, SECOND_GATE_HINT_DELAY_MS);
  hintEverShown = true;
}

function releaseGate() {
  if (gateDone) return;
  gateDone = true;
  scrollFrozen = false;
  unlockScroll();
  gsap.killTweensOf(circleEl, "scale");
  gsap.to(circleEl, { scale: 1, x: 0, y: 0, duration: 0.6, ease: "power2.inOut" });
  scrollHintArmedAgain = true;
  scrollHintTriggerP = gateHoldIndex;
  scheduleScrollHint(true);
}

let awaitingConclusionClick = false;

function revealNextBatch() {
  const entry = studyEls[revealedCount];
  entry.circle.classList.add("study-circle--hoverable");

  pulseHero(revealedCount);

  revealedCount += 1;
  if (revealedCount >= WATER_STUDIES.length) {
    awaitingConclusionClick = true;
  }
}

function finishReveal() {
  clearTimeout(hintTimer);
  gsap.to(clickHintEl, { opacity: 0, duration: 0.3 });
  gsap.killTweensOf(clickHintEl, "scale");
  gsap.to(clickHintEl, { scale: 1, duration: 0.3 });

  gsap.killTweensOf(circleEl, "scale");
  gsap.to(circleEl, { scale: heroScale, duration: 0.35, ease: "power2.out" });
  studyEls.forEach(({ circle }) => {
    gsap.killTweensOf(circle, "scale");
    gsap.to(circle, { scale: 1, duration: 0.35, ease: "power2.out" });
  });

  gsap.to(rippleLegendEl, { opacity: 0, duration: 0.4 });
  studiesDismissed = true;
  studyEls.forEach(({ labelEl }) => gsap.to(labelEl, { opacity: 0, duration: 0.4 }));

  gsap.to(sourceRevealTextEl, {
    opacity: 0,
    duration: 0.4,
    onComplete: () => {
      varianceReady = true;
    },
  });

  scrollFrozen = false;
  unlockScroll();
  scrollHintArmedAgain = true;
  scrollHintTriggerP = gateHoldIndex;
  scheduleScrollHint(true);
}

let awaitingConditionsStart = false;
let conditionsSweepTl = null;

function armConditionsGate() {
  conditionsGateArmed = true;
  scrollFrozen = true;
  gateHoldIndex = CONDITIONS_TRIGGER_INDEX;
  window.scrollTo(0, slidePx(CONDITIONS_TRIGGER_INDEX));
  lockScroll();
  armConditions();
}

function armConditions() {
  studyEls.forEach(({ circle, labelEl }) => {
    circle.classList.remove("study-circle--hoverable");
    gsap.to(labelEl, { opacity: 0, duration: 0.3 });
  });

  hideScrollHint();

  gsap.to(conditionsTitleTextEl, { opacity: 1, duration: 0.5, delay: 0.4 });

  conditionsSweepTl = gsap.timeline();
  conditionsSweepTl.fromTo(
    conditionsTitleWordEls,
    { color: TEXT_DIM_COLOR },
    { color: "#000000", duration: 0.35, stagger: 0.12 },
    0.9
  );
  conditionsSweepTl.call(() => {
    circleEl.classList.add("circle--clickable");
    gsap.to(circleEl, { scale: 1.035, duration: 0.9, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2 });
    clickHintEl.textContent = "Klicke den Kreis an";
    scheduleHint(true, SECOND_GATE_HINT_DELAY_MS);
    awaitingConditionsStart = true;
  });
}

function onConditionsClick() {
  if (!conditionsArmed || conditionsStage >= CONDITIONS_VARIANCE_CHUNKS.length) return;
  const chunk = CONDITIONS_VARIANCE_CHUNKS[conditionsStage];
  conditionsStage += 1;
  scheduleHint(false, SECOND_GATE_HINT_DELAY_MS);

  gsap.to(conditionsChunkEls[conditionsStage - 1], { opacity: 1, duration: 0.4 });

  if (conditionsStage === 1) {
    ringEls.forEach((ring) => gsap.to(ring, { borderWidth: 18, duration: 1, ease: "power2.out" }));
  }
  ringEls.forEach((ring) =>
    gsap.to(ring, { filter: `blur(${chunk.ringBlur}px)`, opacity: chunk.ringOpacity, duration: 1, ease: "power2.out" })
  );

  const proxy = { v: studyExtraBlur };
  gsap.to(proxy, { v: chunk.blur, duration: 0.8, ease: "power2.out", onUpdate: () => (studyExtraBlur = proxy.v) });

  gsap.killTweensOf(circleEl, "scale");
  gsap.to(circleEl, { scale: chunk.growth, duration: 0.8, ease: "power2.out" });

  if (conditionsStage >= CONDITIONS_VARIANCE_CHUNKS.length) {
    conditionsArmed = false;
    finishConditions();
  }
}

circleEl.addEventListener("click", () => {
  if (awaitingConditionsStart) {
    awaitingConditionsStart = false;
    gsap.set(conditionsTitleTextEl, { opacity: 0 });
    gsap.set(conditionsVarianceTextEl, { opacity: 1 });
    conditionsArmed = true;
    onConditionsClick();
    return;
  }
  if (conditionsArmed) onConditionsClick();
});

function finishConditions() {
  clickHintEl.textContent = "Klicke den Kreis an";
  scheduleHint(true, SECOND_GATE_HINT_DELAY_MS);
  setTimeout(() => {
    awaitingDataQuestionStart = true;
  }, 0);
}

circleEl.addEventListener("click", () => {
  if (!awaitingDataQuestionStart) return;
  awaitingDataQuestionStart = false;
  clearTimeout(hintTimer);
  gsap.to(clickHintEl, { opacity: 0, duration: 0.3 });
  circleEl.classList.remove("circle--clickable");
  gsap.set(conditionsVarianceTextEl, { opacity: 0 });

  dataQuestionReady = true;
  scrollFrozen = false;
  unlockScroll();
  scrollHintArmedAgain = true;
  scrollHintTriggerP = gateHoldIndex;
  scheduleScrollHint(true);
});

function armDataQuestionClick() {
  dataQuestionArmed = true;
  scrollFrozen = true;
  gateHoldIndex = DATA_QUESTION_END;
  window.scrollTo(0, slidePx(DATA_QUESTION_END));
  lockScroll();
  hideScrollHint();
  circleEl.classList.add("circle--clickable");
  clickHintEl.textContent = "Klicke den Kreis an";
  scheduleHint(true, SECOND_GATE_HINT_DELAY_MS);
}

function onDataQuestionAdvance() {
  dataQuestionArmed = false;
  dataQuestionDismissed = true;
  clearTimeout(hintTimer);
  gsap.to(clickHintEl, { opacity: 0, duration: 0.3 });
  circleEl.classList.remove("circle--clickable");
  gsap.to(dataQuestionTextEl, { opacity: 0, duration: 0.5 });
  gsap.delayedCall(0.4, creepToDataText);
}

circleEl.addEventListener("click", () => {
  if (dataQuestionArmed) onDataQuestionAdvance();
});

function creepToDataText() {
  gsap.killTweensOf(circleEl, "scale");
  gsap.to(circleEl, { scale: 1, x: 0, y: 0, duration: 1.2, ease: "power2.inOut" });
  const proxy = { v: gateHoldIndex };
  gsap.to(proxy, {
    v: DATA_SEGMENT.startIndex,
    duration: 1.2,
    ease: "power2.inOut",
    onUpdate: () => {
      gateHoldIndex = proxy.v;
    },
    onComplete: () => releaseGate(),
  });
}

function renderSourceReveal(index) {
  const study = WATER_STUDIES[index];
  sourceRevealTextEl.textContent = "";
  sourceRevealTextEl.append(`Quelle ${index + 1}: ${study.name}`, document.createElement("br"), study.display);
  const rect = sourceRevealTextEl.getBoundingClientRect();
  gsap.set(rippleLegendEl, { left: edgePad(), top: rect.bottom + 20, right: "auto", xPercent: 0, yPercent: 0 });
}

function onGateClick() {
  if (awaitingConclusionClick) {
    awaitingConclusionClick = false;
    finishReveal();
    return;
  }
  if (revealedCount >= WATER_STUDIES.length) return;
  if (revealedCount === 0 && !questionHidden) {
    questionHidden = true;
    gsap.set(QUESTION_SEGMENT.el, { opacity: 0 });
    gsap.set(rippleLegendEl, { opacity: 1 });
  }
  renderSourceReveal(revealedCount);
  gsap.killTweensOf(sourceRevealTextEl, "opacity");
  gsap.set(sourceRevealTextEl, { opacity: 1 });
  revealNextBatch();
}

circleEl.addEventListener("click", onGateClick);

function circleGeometry(a, b, t) {
  return {
    cxPx: lerp(a.cx, b.cx, t) * window.innerWidth,
    cyPx: lerp(a.cy, b.cy, t) * window.innerHeight,
    rPx: lerp(a.r, b.r, t) * Math.min(window.innerWidth, window.innerHeight),
    blur: lerp(a.blur, b.blur, t),
    fill: lerpColor(a.fill, b.fill, t),
    opacity: lerp(a.opacity, b.opacity, t),
  };
}

function applyCircle(el, geom) {
  gsap.set(el, {
    left: geom.cxPx,
    top: geom.cyPx,
    width: geom.rPx * 2,
    height: geom.rPx * 2,
    xPercent: -50,
    yPercent: -50,
    filter: `blur(${geom.blur}px)`,
    backgroundColor: geom.fill,
    opacity: geom.opacity,
  });
}

function resetRipples() {
  const wasRevealedCount = revealedCount;
  gateArmed = false;
  revealedCount = 0;
  questionHidden = false;
  studiesDismissed = false;
  awaitingConclusionClick = false;
  varianceReady = false;
  varianceWordEls.forEach((span) => (span.style.color = TEXT_DIM_COLOR));
  clearTimeout(hintTimer);
  gsap.killTweensOf(clickHintEl);
  gsap.to(clickHintEl, { opacity: 0, duration: 0.3 });
  gsap.killTweensOf(sourceRevealTextEl);
  gsap.to(sourceRevealTextEl, { opacity: 0, duration: 0.25 });
  gsap.killTweensOf(rippleLegendEl);
  gsap.to(rippleLegendEl, { opacity: 0, duration: 0.3 });
  circleEl.classList.remove("circle--clickable");
  gsap.killTweensOf(circleEl, "scale");
  gsap.to(circleEl, { scale: 1, duration: 0.4, ease: "power2.inOut" });
  hideScrollHint();

  const REVERSE_STAGGER = 0.12;
  const ringsToRemove = ringEls.splice(0);
  for (let i = 0; i < wasRevealedCount; i += 1) {
    const delay = i * REVERSE_STAGGER;
    const { circle, labelEl } = studyEls[wasRevealedCount - 1 - i];
    circle.classList.remove("study-circle--hoverable");
    gsap.killTweensOf([circle, labelEl]);
    gsap.to([circle, labelEl], { opacity: 0, scale: 0.5, duration: 0.3, delay, ease: "power2.in" });

    const ring = ringsToRemove[wasRevealedCount - 1 - i];
    if (ring) {
      gsap.to(ring, { opacity: 0, scale: 0.5, duration: 0.3, delay, ease: "power2.in", onComplete: () => ring.remove() });
    }
  }
  ringsToRemove.slice(wasRevealedCount).forEach((ring) => ring.remove());
}

function resetConditions() {
  const wasStage = conditionsStage;
  conditionsGateArmed = false;
  conditionsArmed = false;
  awaitingConditionsStart = false;
  conditionsStage = 0;
  if (conditionsSweepTl) {
    conditionsSweepTl.kill();
    conditionsSweepTl = null;
  }
  conditionsTitleWordEls.forEach((span) => (span.style.color = TEXT_DIM_COLOR));
  awaitingDataQuestionStart = false;
  dataQuestionReady = false;
  clearTimeout(hintTimer);
  gsap.killTweensOf(clickHintEl);
  gsap.to(clickHintEl, { opacity: 0, duration: 0.3 });
  gsap.killTweensOf(conditionsTitleTextEl);
  gsap.to(conditionsTitleTextEl, { opacity: 0, duration: 0.3 });
  gsap.killTweensOf(conditionsVarianceTextEl);
  gsap.to(conditionsVarianceTextEl, { opacity: 0, duration: 0.3 });
  gsap.killTweensOf(dataQuestionTextEl);
  gsap.to(dataQuestionTextEl, { opacity: 0, duration: 0.3 });
  dataQuestionWordEls.forEach((span) => (span.style.color = TEXT_DIM_COLOR));

  const REVERSE_STAGGER = 0.15;
  gsap.killTweensOf(conditionsChunkEls);
  for (let i = 0; i < wasStage; i += 1) {
    gsap.to(conditionsChunkEls[wasStage - 1 - i], { opacity: 0, duration: 0.3, delay: i * REVERSE_STAGGER, ease: "power2.in" });
  }

  circleEl.classList.remove("circle--clickable");
  gsap.killTweensOf(circleEl, "scale");
  gsap.to(circleEl, { scale: 1, duration: 0.5, ease: "power2.inOut" });

  const blurProxy = { v: studyExtraBlur };
  gsap.to(blurProxy, { v: 0, duration: 0.5, ease: "power2.inOut", onUpdate: () => (studyExtraBlur = blurProxy.v) });

  gsap.killTweensOf(ringEls);
  gsap.to(ringEls, { borderWidth: 12, filter: "blur(0px)", opacity: 1, duration: 0.5, ease: "power2.inOut" });
  hideScrollHint();
}

function resetDataQuestion() {
  dataQuestionArmed = false;
  dataQuestionDismissed = false;
  dataQuestionReady = false;
  awaitingDataQuestionStart = false;
  gateDone = false;
  clearTimeout(hintTimer);
  gsap.killTweensOf(clickHintEl);
  gsap.to(clickHintEl, { opacity: 0, duration: 0.3 });
  gsap.killTweensOf(dataQuestionTextEl);
  gsap.to(dataQuestionTextEl, { opacity: 0, duration: 0.3 });
  dataQuestionWordEls.forEach((span) => (span.style.color = TEXT_DIM_COLOR));
  circleEl.classList.remove("circle--clickable");
  gsap.killTweensOf(circleEl, "scale");
  gsap.to(circleEl, { scale: 1, duration: 0.4, ease: "power2.inOut" });
  hideScrollHint();
}

const sequenceTrigger = ScrollTrigger.create({
  trigger: "#stageTrigger",
  start: "top top",
  end: `+=${(N - 1) * SEGMENT_VH}%`,
  pin: true,
  scrub: true,
});

gsap.ticker.add(() => {
  let p = gsap.utils.clamp(0, N - 1, sequenceTrigger.progress * (N - 1));

  if (finalFadeArmed) {
    if (FINAL_SEGMENT && p < FINAL_SEGMENT.startIndex - RESET_DEADZONE) {
      resetImpressum();
    } else {
      return;
    }
  }

  if (!scrollFrozen) {
    if (gateArmed && p < GATE_INDEX - RESET_DEADZONE) resetRipples();
    if (conditionsGateArmed && p < CONDITIONS_TRIGGER_INDEX - RESET_DEADZONE) resetConditions();
    if (gateDone && p < DATA_QUESTION_START - RESET_DEADZONE) resetDataQuestion();
  }

  if (!gateArmed && p >= GATE_INDEX) armGate();
  if (!conditionsGateArmed && p >= CONDITIONS_TRIGGER_INDEX) armConditionsGate();
  if (dataQuestionReady && !dataQuestionArmed && !dataQuestionDismissed && p >= DATA_QUESTION_END) {
    armDataQuestionClick();
  }
  if (scrollFrozen) {
    p = gateHoldIndex;
    window.scrollTo(0, slidePx(gateHoldIndex));
  }

  if (!impressumArmed && FINAL_SEGMENT && p >= FINAL_SEGMENT.startIndex) armImpressum();

  const i = Math.min(N - 2, Math.floor(p));
  const t = p - i;
  const a = SLIDES[i];
  const b = SLIDES[i + 1];

  invertStageEl.style.backgroundColor = lerpColor(a.bg, b.bg, t);

  const bgLuminance = lerp(avgLuminance(a.bg), avgLuminance(b.bg), t);
  gsap.set(progressBarEl, { opacity: scrollFrozen ? 0 : gsap.utils.clamp(0, 1, bgLuminance / 30) });
  const barP = scrollFrozen ? gateHoldIndex : p;
  gsap.set(progressBarFillEl, { scaleY: barP / (N - 1) });

  const textFullColorHere = lerpColor("#000000", "#f0f0ee", 1 - gsap.utils.clamp(0, 1, bgLuminance / 30));
  function sweepWords(wordEls, startIndex, endIndex) {
    const sweepT = gsap.utils.clamp(0, 1, (p - startIndex) / (endIndex - startIndex));
    const n = wordEls.length;
    wordEls.forEach((span, i) => {
      const wordT = gsap.utils.clamp(0, 1, (sweepT - i / n) / (1 / n));
      span.style.color = lerpColor(TEXT_DIM_COLOR, textFullColorHere, wordT);
    });
  }

  varianceTextEl.style.opacity = varianceReady
    ? pointSegmentOpacity(p, VARIANCE_START, VARIANCE_END, POINT_FADE_RADIUS, POINT_FADE_RADIUS)
    : 0;
  if (varianceReady) sweepWords(varianceWordEls, VARIANCE_START, VARIANCE_END);

  if (dataQuestionReady && !dataQuestionDismissed) {
    dataQuestionTextEl.style.opacity = pointSegmentOpacity(
      p,
      DATA_QUESTION_START,
      DATA_QUESTION_END,
      POINT_FADE_RADIUS,
      POINT_FADE_RADIUS
    );
    sweepWords(dataQuestionWordEls, DATA_QUESTION_START, DATA_QUESTION_END);
  }

  const blackness = 1 - gsap.utils.clamp(0, 1, bgLuminance / 30);
  const negativeScale = 1 - blackness * NEGATIVE_SHRINK;

  const circleGeom = circleGeometry(a.circle, b.circle, t);
  const circle2Geom = circleGeometry(a.circle2, b.circle2, t);
  circleGeom.rPx *= negativeScale;
  circle2Geom.rPx *= negativeScale;

  const CIRCLE_INTRO_START = TITLE_FADE_RANGE + 0.05;
  if (p < QUESTION_INDEX) {
    const introT = gsap.utils.clamp(0, 1, (p - CIRCLE_INTRO_START) / (QUESTION_INDEX - CIRCLE_INTRO_START));
    circleGeom.rPx = introT * INTRO_GROWN_R * Math.min(window.innerWidth, window.innerHeight) * negativeScale;
  }

  applyCircle(circleEl, { ...circleGeom, blur: circleGeom.blur + studyExtraBlur });
  applyCircle(circle2El, circle2Geom);

  WATER_STUDIES.forEach((study, idx) => {
    const geom = circleGeometry(study, study, 0);
    const entry = studyEls[idx];
    const { circle, labelEl, labelHalfW } = entry;
    applyStudyCircle(circle, { ...geom, blur: geom.blur + studyExtraBlur });
    const labelCx = gsap.utils.clamp(labelHalfW + 4, window.innerWidth - labelHalfW - 4, geom.cxPx);
    gsap.set(labelEl, { left: labelCx, top: geom.cyPx - geom.rPx - 8, xPercent: -50, yPercent: -100 });
    if (studiesDismissed) {
      gsap.set([circle, labelEl], { opacity: 0 });
    }
  });

  if (CONTRADICTIONS_SEGMENT) {
    const minSidePx = Math.min(window.innerWidth, window.innerHeight);
    const phase = p - CONTRADICTIONS_SEGMENT.startIndex;

    const WORD_TO_STEP = [0, 0, 0, 0, 1, 2, 3, 4];
    const STEP_SPAN = 2 / 5;
    const WORD_FADE_WIDTH = 0.3;
    contradictionWordSpans.forEach((span, i) => {
      const wordT = gsap.utils.clamp(0, 1, (phase - WORD_TO_STEP[i] * STEP_SPAN) / WORD_FADE_WIDTH);
      gsap.set(span, { opacity: EASE_APPEAR(wordT) });
    });

    const colorSweepStart = 4 * STEP_SPAN + WORD_FADE_WIDTH;
    const colorSweepEnd = colorSweepStart + 1;
    const colorSweepT = EASE_APPEAR(gsap.utils.clamp(0, 1, (phase - colorSweepStart) / (colorSweepEnd - colorSweepStart)));
    const contradictionColor = lerpColor(TEXT_DIM_COLOR, textFullColorHere, colorSweepT);
    contradictionWordSpans.forEach((span) => {
      span.style.color = contradictionColor;
    });

    const RING_STAGGER = 0.2;
    const RING_START_OFFSET = 2 * RING_STAGGER;
    const RING_POP_DURATION = 0.08;
    const RING_BLUR_RAMP = 0.1;
    const RING_MAX_BLUR_PX = 10;
    const RING_FADE_DURATION = 0.2;
    const RING_MAX_OPACITY = 0.6;

    contradictionWaveRings.forEach((ring, idx) => {
      const age = phase - RING_START_OFFSET - idx * RING_STAGGER;
      if (age < 0) {
        gsap.set(ring, { opacity: 0 });
        return;
      }
      const targetPx = RIPPLE_RADIUS_FRACTIONS[idx] * minSidePx * 2;
      const popT = gsap.utils.clamp(0, 1, age / RING_POP_DURATION);
      const blurT = gsap.utils.clamp(0, 1, (age - 2 * RING_STAGGER) / RING_BLUR_RAMP);
      const fadeT = gsap.utils.clamp(0, 1, 1 - (age - 4 * RING_STAGGER) / RING_FADE_DURATION);
      gsap.set(ring, {
        width: targetPx * popT,
        height: targetPx * popT,
        opacity: popT * fadeT * RING_MAX_OPACITY,
        filter: `blur(${blurT * RING_MAX_BLUR_PX}px)`,
      });
    });

  }

  const sceneTextLeftPx = edgePad();
  const sceneTextTopPx = 0.05 * window.innerHeight;

  gsap.set(varianceTextEl, { left: sceneTextLeftPx, top: sceneTextTopPx, xPercent: 0, yPercent: 0 });
  gsap.set(conditionsTitleTextEl, { left: sceneTextLeftPx, top: sceneTextTopPx, xPercent: 0, yPercent: 0 });
  gsap.set(conditionsVarianceTextEl, { left: sceneTextLeftPx, top: sceneTextTopPx, xPercent: 0, yPercent: 0 });
  gsap.set(dataQuestionTextEl, { left: sceneTextLeftPx, top: sceneTextTopPx, xPercent: 0, yPercent: 0 });

  TEXT_SEGMENTS.forEach((seg) => {

    if (seg === QUESTION_SEGMENT && questionHidden) return;

    const fadeInRadius = seg.fadeInRadius ?? TEXT_FADE_RANGE;
    const fadeOutRadius = seg.fadeOutRadius ?? TEXT_FADE_RANGE;
    const opacity = pointSegmentOpacity(p, seg.startIndex, seg.endIndex, fadeInRadius, fadeOutRadius);

    const dist = p > seg.endIndex ? p - seg.endIndex : 0;
    const exitBlur = seg.exitBlur && dist > 0 ? Math.min(dist / fadeOutRadius, 1) * EXIT_BLUR_PX : 0;

    const riseY = seg === FINAL_SEGMENT || p > seg.startIndex ? 0 : (1 - opacity) * TEXT_RISE_PX;
    const isFinal = seg === FINAL_SEGMENT;

    gsap.set(seg.el, {
      opacity,
      left: sceneTextLeftPx,
      top: isFinal ? "50%" : sceneTextTopPx,
      xPercent: 0,
      yPercent: isFinal ? -50 : 0,
      y: riseY,
      filter: `blur(${exitBlur}px)`,
    });

    if (seg.wordEls) {
      const [fadeStart, fadeEnd] = seg.fadeRange;
      const wordFadeT = gsap.utils.clamp(0, 1, (p - fadeStart) / (fadeEnd - fadeStart));
      seg.wordEls.fade.forEach((span) => gsap.set(span, { opacity: 1 - wordFadeT }));
    }

    if (seg.colorWordEls && !isFinal) {
      const sweepEnd = seg.fadeRange ? seg.fadeRange[0] : seg.endIndex;
      const textFullColor = lerpColor("#000000", "#f0f0ee", blackness);
      const sweepT = gsap.utils.clamp(0, 1, (p - seg.startIndex) / (sweepEnd - seg.startIndex || fadeOutRadius));
      const n = seg.colorWordEls.length;
      seg.colorWordEls.forEach((span, i) => {
        const wordT = gsap.utils.clamp(0, 1, (sweepT - i / n) / (1 / n));
        span.style.color = lerpColor(TEXT_DIM_COLOR, textFullColor, wordT);
      });
    }
  });

  const titleFadeT = p < HEADER_FADE_RANGE
    ? 0
    : (p - HEADER_FADE_RANGE) / (TITLE_FADE_RANGE - HEADER_FADE_RANGE);
  titleScreenEl.style.opacity = gsap.utils.clamp(0, 1, 1 - titleFadeT);
  siteHeaderEl.style.opacity = gsap.utils.clamp(0, 1, 1 - p / HEADER_FADE_RANGE);

  if (!scrollHintArmedAgain) {
    scrollHintEl.style.opacity = scrollHintInitialDelayDone && p <= SCROLL_HINT_HIDE_P ? 1 : 0;
  } else if (p > scrollHintTriggerP + SCROLL_HINT_HIDE_P) {
    clearTimeout(scrollHintTimer);
    gsap.to(scrollHintEl, { opacity: 0, duration: 0.3 });
    scrollHintArmedAgain = false;
  }
});
