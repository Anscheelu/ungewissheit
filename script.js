gsap.registerPlugin(ScrollTrigger);

window.scrollTo(0, 0);

const NONE_CIRCLE = { cx: 0.5, cy: 0.5, r: 0, blur: 0, fill: "#000000", opacity: 1 };

// Wächst langsam während des Intros, wird aber nie grösser als bei
// "Wie viel Wasser verbraucht" (dort ist r ebenfalls 0.05) — kein Sprung.
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
    // Kurze leere Pause, nachdem "Ungewissheit" ausgefadet ist, bevor der
    // Punkt erscheint (siehe Kreis-Intro-Override im Ticker) — Rhythmus:
    // erst leer, dann Kreis, dann erst Text.
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
    // Verlängert "Um eine Überhitzung..." statt einer separaten leeren Pause —
    // gibt dem Satz mehr Lesezeit und verkürzt zugleich den Leerraum davor,
    // bevor die Frage "Wie viel Wasser..." kommt (war vorher unnötig lang).
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
  // Reservierter, leerer Scroll-Raum für die Quellen-Klick-Strecke: die
  // Ripple-Interaktion, "...unterscheiden sich je nach Quelle." und der Start
  // der Bedingungen-Frage laufen alle hier drüber (siehe GATE_INDEX/VARIANCE_*/
  // CONDITIONS_TRIGGER_INDEX weiter unten) — Kreis bleibt bewusst unverändert
  // bei r: 0.05 stehen.
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
  // Zusätzlicher Puffer für die Bedingungen-Strecke: nach dem letzten Klick
  // ("...und Auslastung.") läuft der Rest (Fade-out, "Wer stellt diese Daten
  // zur Verfügung?") rein über echtes Scrollen (siehe CONDITIONS_VARIANCE_END/
  // DATA_QUESTION_*), braucht deshalb mehr Raum als die alten 4 Slides.
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
    // "Widersprüche": der Punkt selbst bleibt unsichtbar (r:0) — nur die
    // Ripple-Ringe zeigen die Wellen-Kaskade (siehe CONTRADICTIONS_SEGMENT unten).
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 14, fill: "#f0f0ee", opacity: 0.9 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 14, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Die Antwort besteht aus Widersprüchen,", "Unsicherheiten und Lücken."] },
  },
  {
    // "Unsicherheiten": Punkt bleibt unsichtbar.
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 40, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 40, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Die Antwort besteht aus Widersprüchen,", "Unsicherheiten und Lücken."] },
  },
  {
    // "Lücken": derselbe Dunkel-Effekt wie beim vorherigen "Wie viel Wasser..."-Slide.
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 42, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 42, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Die Antwort besteht aus Widersprüchen,", "Unsicherheiten und Lücken."] },
  },
  {
    // Nach "Lücken." bleibt es schwarz: der Punkt kehrt nicht zurück.
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Die Antwort besteht aus Widersprüchen,", "Unsicherheiten und Lücken."] },
  },
  {
    // Verlängert die ruhige Pause nach "Lücken." — mehr Zeit, bevor der Satz
    // wieder wegblendet.
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 26, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Die Antwort besteht aus Widersprüchen,", "Unsicherheiten und Lücken."] },
  },
  {
    // Leer-Slide für den vollen Fade-Abstand vor "Was bleibt ist" (siehe oben).
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
    // Dritte Slide: "Was bleibt ist" bekommt etwas mehr Lesezeit.
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 24, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 24, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Was bleibt ist"] },
  },
  {
    // Leer-Slide für den vollen Fade-Abstand vor "Ungewissheit" (siehe oben).
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 22, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 22, fill: "#f0f0ee", opacity: 1 },
    text: { lines: [""] },
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
  {
    // Vierte Slide: die Schlusszeile bleibt noch etwas länger stehen, bevor
    // der Scroll-Bereich endet.
    bg: "#000000",
    circle: { cx: 0.5, cy: 0.5, r: 0, blur: 22, fill: "#f0f0ee", opacity: 1 },
    circle2: { cx: 0.5, cy: 0.5, r: 0, blur: 22, fill: "#f0f0ee", opacity: 1 },
    text: { lines: ["Ungewissheit"] },
  },
];

// Jeder Klick löst genau einen Ripple aus dem zentralen Kreis aus und zeigt
// genau einen gemessenen Wert. Quellen, die zwei Werte veröffentlichen (UC
// Riverside, CometAPI), erscheinen als zwei eigenständige Ripples statt
// doppelt am selben Ring — Reihenfolge = aufsteigend nach Wert (kleinster
// zuerst), das bestimmt zugleich Reveal-Reihenfolge und Ring-Position.
const WATER_STUDY_SOURCES = [
  { name: "Google Gemini", values: ["0,26"], link: "https://arxiv.org/abs/2508.15734" },
  { name: "UC Riverside Studie", values: ["10–50 ml für 20–50 Prompts"], link: "https://arxiv.org/abs/2304.03271" },
  { name: "ChatGPT", note: "Nicht veröffentlicht", link: "https://medium.com/readers-club/chatgpt-water-usage-1a1167244a5a" },
  { name: "IEA", note: "Kein eindeutiger Wert", link: "https://www.iea.org/reports/energy-and-ai" },
];

// Manche Quellen veröffentlichen einen Bereich statt eines Einzelwerts, z.B.
// "10–50,0" (Halbgeviertstrich als Bereichstrenner, Komma als Dezimaltrenner).
// studyValueBounds liefert die beiden Grenz-Substrings unverändert (fürs Vergleichen),
// alle Werte sind roh in ml hinterlegt — formatValueWithUnit rechnet ab 1000 ml in l um.
function studyValueBounds(v) {
  const parts = v.split("–").map((p) => p.trim());
  return parts.length === 2 ? parts : [parts[0], parts[0]];
}
function formatNumber(n) {
  let s = n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  return s.replace(".", ",");
}
function formatValueWithUnit(v) {
  // Werte mit Buchstaben (z.B. "10–50 ml für 20–50 Prompts") sind bereits
  // fertig formatierter Text mit Zusatzkontext, kein roher ml-Wert zum
  // Umrechnen — studyValueBounds würde am zweiten Bereich (Prompts) scheitern.
  if (/[a-zA-ZäöüÄÖÜß]/.test(v)) return v;
  const isRange = v.includes("–");
  const nums = studyValueBounds(v).map((p) => parseFloat(p.replace(",", ".")));
  const useLiters = nums.every((n) => n >= 1000);
  const formatted = nums.map((n) => formatNumber(useLiters ? n / 1000 : n));
  return `${isRange ? `${formatted[0]}–${formatted[1]}` : formatted[0]} ${useLiters ? "l" : "ml"}`;

}

// Jede Quelle bekommt einen eigenen, gleich abgestuften Ring — ein
// "Quellen-Ring" nach Reihenfolge im Array, nicht nach Betrag skaliert (sonst
// würde z.B. GPT-4s 59'000 ml alle anderen Ringe an den Mittelpunkt drängen).
const RIPPLE_R_MIN = 0.11;
const RIPPLE_R_MAX = 0.34;

const RIPPLE_RADIUS_FRACTIONS = WATER_STUDY_SOURCES.map((_, i, arr) =>
  lerp(RIPPLE_R_MIN, RIPPLE_R_MAX, arr.length > 1 ? i / (arr.length - 1) : 0)
);

// Gleichmässig über den Kreis verteilt, unabhängig davon wie viele Quellen es sind.
const RING_ANGLES = WATER_STUDY_SOURCES.map((_, i) => (360 / WATER_STUDY_SOURCES.length) * i);
const STUDY_DOT_R = 0.014;

function ripplePosition(rFrac, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  const rPx = rFrac * Math.min(window.innerWidth, window.innerHeight);
  return {
    cx: 0.5 + (rPx * Math.sin(rad)) / window.innerWidth,
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
const TEXT_FADE_RANGE = 0.6;
const EXIT_BLUR_PX = 14;
const SCROLL_HINT_HIDE_P = 0.04;
const TITLE_FADE_RANGE = 0.6;
// Header verschwindet zuerst vollständig, erst danach beginnt der Titel
// selbst auszublenden (Endpunkt bleibt TITLE_FADE_RANGE, damit der Rest der
// Intro-Choreografie z.B. CIRCLE_INTRO_START unverändert bleibt).
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
      seg.wordEls = { keep: [], fade: [] };
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
        afterWord = true;
      });
    } else {
      seg.lines.forEach((line, li) => {
        if (li > 0) el.appendChild(document.createElement("br"));
        el.appendChild(document.createTextNode(line));
      });
    }
    container.appendChild(el);
    seg.el = el;
  });
}

const TEXT_SEGMENTS = buildTextSegments(SLIDES);
buildSceneTexts(document.getElementById("sceneTexts"), TEXT_SEGMENTS);

// Texte überlagern sich nie: der Fade-Radius pro Seite ist auf die Hälfte der
// Lücke zum nächsten nicht-leeren Nachbarn begrenzt (leere Slides sind reiner
// Puffer, zählen nicht als "Text") — zwei Texte treffen sich so exakt in der
// Mitte bei Opacity 0, statt zu überlappen. Angewendet im Ticker weiter unten.
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
const conditionsTitleTextEl = document.getElementById("conditionsTitleText");
const conditionsVarianceTextEl = document.getElementById("conditionsVarianceText");

// Jeder Klick auf den Kreis bringt einen weiteren Satzteil und blurt dabei
// den Kreis selbst zunehmend stärker — nicht den Text.
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
const impressumEl = document.getElementById("impressum");
const progressBarEl = document.getElementById("progressBar");
const progressBarFillEl = document.getElementById("progressBarFill");

const QUESTION_INDEX = SLIDES.findIndex((s) => s.text.lines[0] === "Wie viel Wasser verbraucht");
const GATE_INDEX = QUESTION_INDEX + 2;

// Nach den Ripples läuft dieser Abschnitt rein über echtes Scrollen (siehe
// finishReveal) — die 4 leeren Puffer-Slides direkt nach GATE_INDEX in SLIDES
// geben dafür den nötigen, konfliktfreien Scroll-Raum her. GAP ist überall
// hier derselbe Abstand, damit sich jeder Text-zu-Text-Übergang gleich lang
// anfühlt (nicht wie zuvor mit uneinheitlichen Abständen) — Ausnahme ist der
// allererste Übergang: "...unterscheiden sich je nach Quelle." erscheint
// direkt beim letzten Klick (VARIANCE_START == GATE_INDEX, kein Warten auf
// Scroll), erst danach ist wieder alles rein scroll-gesteuert.
const TEXT_GAP = 0.6;
const TEXT_HOLD = 0.8;
// Toleranz gegen minimales, unabsichtliches Zurückscrollen (siehe Ticker weiter
// unten) — ~0.15 Slide entspricht bei 900px Viewporthöhe rund 120px, deutlich
// mehr als ein einzelner Trackpad-Nachlauf-Tick.
const RESET_DEADZONE = 0.15;
const VARIANCE_START = GATE_INDEX;
const VARIANCE_END = VARIANCE_START + TEXT_HOLD;
const CONDITIONS_TRIGGER_INDEX = VARIANCE_END + TEXT_GAP;

// Nach dem letzten Bedingungen-Klick ("...und Auslastung.") läuft der Rest
// wieder rein über echtes Scrollen, analog zu VARIANCE_* oben: der Satz
// bleibt stehen, bis gescrollt wird (kein Timer), dann kommt "Wer stellt
// diese Daten zur Verfügung?" (siehe finishConditions/Ticker unten).
const CONDITIONS_VARIANCE_END = CONDITIONS_TRIGGER_INDEX + TEXT_HOLD;
const DATA_QUESTION_START = CONDITIONS_VARIANCE_END + TEXT_GAP;
const DATA_QUESTION_END = DATA_QUESTION_START + TEXT_HOLD;

// Texte überlagern sich nie: der alte ist immer erst ganz weg, bevor der
// nächste zu erscheinen beginnt. Radius ist deshalb standardmässig auf die
// Hälfte der Lücke zwischen zwei Texten begrenzt (POINT_FADE_RADIUS bei den
// Punkt-Texten unten, halber Slide-Abstand bei den TEXT_SEGMENTS weiter
// unten) — beide treffen sich exakt in der Mitte bei Opacity 0. Ease-out beim
// Erscheinen (schnell rein, sanft ankommen), ease-in beim Verschwinden
// (bleibt zunächst stehen, verschwindet dann zügig) statt linear.
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

const DATA_SEGMENT = TEXT_SEGMENTS.find((seg) => seg.tokens === DATA_TOKENS);
DATA_SEGMENT.fadeRange = [DATA_SEGMENT.startIndex + 1, DATA_SEGMENT.startIndex + 2];

const FINAL_SEGMENT = TEXT_SEGMENTS.find((seg) => seg.lines && seg.lines[0] === "Ungewissheit");
// Position kommt jetzt einheitlich aus TEXT_SEGMENTS.forEach (vertikal
// zentriert wie title-screen) — slide-text--final liefert nur noch die
// grössere, zentrierte Typografie fürs Schlusswort.
if (FINAL_SEGMENT) FINAL_SEGMENT.el.classList.add("slide-text--final");
let finalFadeArmed = false;

// "Die Antwort besteht aus Widersprüchen, Unsicherheiten und Lücken." spannt 5
// Slides mit identischem Text — der Punkt/die Ripples verändern sich darunter
// rein scroll-gesteuert (kein Klick nötig), analog zu den DATA_TOKENS-Slides.
const CONTRADICTIONS_SEGMENT = TEXT_SEGMENTS.find(
  (seg) => seg.lines && seg.lines[0] === "Die Antwort besteht aus Widersprüchen,"
);

// Jedes Wort blendet einzeln beim Scrollen ein (statt der ganze Satz auf
// einmal) — synchronisiert mit den Ripple-Phasen im Ticker unten. Bleibt,
// einmal erschienen, stehen (kein Zurück-Ausblenden wie bei KI_QUESTION_TOKENS).
const CONTRADICTIONS_WORDS = ["Die", "Antwort", "besteht", "aus", "Widersprüchen,", "Unsicherheiten", "und", "Lücken."];
const CONTRADICTIONS_LINE_BREAK_AFTER = "Widersprüchen,";
CONTRADICTIONS_SEGMENT.el.textContent = "";
const contradictionWordSpans = CONTRADICTIONS_WORDS.map((word, i) => {
  if (i > 0) CONTRADICTIONS_SEGMENT.el.append(" ");
  const span = document.createElement("span");
  span.textContent = word;
  gsap.set(span, { opacity: 0 });
  CONTRADICTIONS_SEGMENT.el.appendChild(span);
  if (word === CONTRADICTIONS_LINE_BREAK_AFTER) CONTRADICTIONS_SEGMENT.el.appendChild(document.createElement("br"));
  return span;
});

// 4 Ringe an den gleichen festen Positionen wie die Quellen-Ripples
// (RIPPLE_RADIUS_FRACTIONS) — kein Wachsen nach aussen, jeder Ring "poppt"
// direkt auf seine Zielgrösse. Rollierende Kaskade: ein neuer Ring erscheint
// scharf, zwei Ringe später wird er unscharf (genau wenn wieder zwei Ringe
// später ein neuer entsteht), und nochmal zwei Ringe später verschwindet er
// (siehe RING_STAGGER/RING_BLUR_LAG/RING_FADE_LAG im Ticker).
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
  // Ist eine Quelle belegt (Link vorhanden), öffnet ein Klick auf den bereits
  // enthüllten Punkt die Studie statt den nächsten Ripple auszulösen.
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
    // Das Label ist viel grösser als der eigentliche (winzige) Punkt darunter —
    // beim Hover direkt anklickbar, damit man die Quelle nicht exakt treffen muss.
    labelEl.classList.add("study-name--linked");
    labelEl.addEventListener("click", () => window.open(study.link, "_blank", "noopener"));
  }
  studyRevealEl.append(circle, labelEl);

  circle.addEventListener("mouseenter", () => gsap.set(labelEl, { opacity: 1 }));
  circle.addEventListener("mouseleave", () => gsap.set(labelEl, { opacity: 0 }));

  gsap.set([circle, labelEl], { opacity: 0 });
  return { circle, labelEl };
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
// Wahr, während p aktiv auf gateHoldIndex festgehalten wird (Klick-Strecken).
// Dazwischen (z.B. nach den Ripples, vor den Bedingungen) ist es false und
// echtes Scrollen bewegt p wieder frei — wie in den ersten Szenen.
let scrollFrozen = false;
let scrollLocked = false;
let hintTimer = null;
// Ohne diese Sperre würde "...unterscheiden sich je nach Quelle." schon
// während des ganz normalen Hochscrollens zur Frage "Wie viel Wasser..."
// anfangen einzublenden (VARIANCE_START == GATE_INDEX, Fade-Radius reicht in
// die Frage hinein) — erst wenn die Ripples tatsächlich fertig durchgeklickt
// sind, darf es zählen.
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
// Ohne diese Sperre würde "Wer stellt diese Daten zur Verfügung?" schon
// während des Hochscrollens zur Bedingungen-Frage anfangen einzublenden,
// bevor die Bedingungen-Klicks je gemacht wurden (gleiches Muster wie
// varianceReady oben).
let conditionsVarianceReady = false;
// Sobald "Wer stellt diese Daten zur Verfügung?" per Scroll fertig eingeblendet
// ist, friert der Scroll erneut ein und wartet auf einen Klick — danach läuft
// der Übergang zu DATA_SEGMENT automatisch (siehe armDataQuestionClick/
// onDataQuestionAdvance/creepToDataText unten), nicht per weiterem Scrollen.
let dataQuestionArmed = false;
let dataQuestionDismissed = false;

// Während der Klick-Strecken (Quellen → Bedingungen → Daten-Frage) bleibt p
// auf gateHoldIndex eingefroren, damit sich Szene/Kreis nicht bewegen — echtes
// Scrollen ist in dieser Zeit ohnehin gesperrt (siehe lockScroll). Die Bar
// zeigte hier früher einen künstlichen "Klick-Fortschritt", der beim Auftauen
// immer wieder sichtbar zurücksprang, weil er nie exakt mit dem realen p
// übereinstimmte. Einfacher und ohne jeden Sprung: die Bar bewegt sich während
// des Einfrierens schlicht nicht (bleibt exakt auf gateHoldIndex stehen, siehe
// barP im Ticker) und blendet stattdessen kurz aus — man kann in dieser Zeit
// ja sowieso nicht scrollen. Die automatische Kriech-Animation danach
// (creepToDataText) bewegt gateHoldIndex selbst weiter, die Bar folgt dem also
// weiterhin sichtbar, nur eben ohne separaten Proxy.

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

function scheduleScrollHint(showImmediately) {
  clearTimeout(scrollHintTimer);
  gsap.to(scrollHintEl, { opacity: showImmediately ? 1 : 0, duration: showImmediately ? 0.4 : 0.2 });
  scrollHintTimer = setTimeout(() => gsap.to(scrollHintEl, { opacity: 1, duration: 0.4 }), HINT_DELAY_MS);
}

// Erzwingt, dass der "scrollen"-Hinweis nie gleichzeitig mit dem "klicken"-
// Hinweis sichtbar ist. Nötig an zwei Stellen: (1) sobald ein Klick-Gate
// (wieder) einrastet — ohne das könnte ein von finishReveal/finishConditions/
// releaseGate gerade erst scharf geschaltener "scrollen"-Hinweis genau in dem
// Moment aufblenden, in dem eigentlich schon wieder geklickt werden soll; (2)
// beim Zurücksetzen einer Klick-Strecke (resetRipples/resetConditions/
// resetDataQuestion) — sonst bleibt scrollHintArmedAgain auf einen Trigger-
// Punkt stehen, der hinter dem jetzt zurückgesetzten p liegt, und der Hinweis
// taucht beim erneuten Vorwärtsscrollen zur falschen Zeit wieder auf.
function hideScrollHint() {
  scrollHintArmedAgain = false;
  clearTimeout(scrollHintTimer);
  gsap.killTweensOf(scrollHintEl);
  gsap.to(scrollHintEl, { opacity: 0, duration: 0.25 });
}

// Während des Impressum-Warte-Fensters entscheidet die Scroll-/Tasten-Richtung:
// vorwärts (oder Touch, ohne verlässliche Richtung) überspringt die Wartezeit
// wie bisher, rückwärts bricht sie ab und schickt ein Stück zurück in die
// Story (siehe cancelImpressumWait).
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
  // Kein "scrollen"-Hinweis hier — es gibt nichts mehr, wohin man scrollen
  // könnte. Blendet nach kurzer Zeit von selbst ein (Scrollen funktioniert
  // im Hintergrund weiterhin als stiller Shortcut, wird aber nicht beworben).
  impressumRevealTimer = gsap.delayedCall(6, revealImpressum);
}

// Abbruch des Warte-Fensters durch Zurückscrollen/-tasten, bevor das Impressum
// überhaupt erschienen ist — kein Reveal, stattdessen ein kleiner, bewusster
// Schritt zurück (analog zum Snap in armGate/armConditionsGate), der p sicher
// unter FINAL_SEGMENT.startIndex bringt. Ohne diesen Snap stünde der reale
// Scroll noch exakt auf der Schwelle (er wurde ja die ganze Zeit per
// preventDefault blockiert) und armImpressum würde im nächsten Tick sofort
// wieder auslösen.
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

  // Als eine Timeline statt einzelner delayedCalls, damit rückwärts scrollen
  // (siehe resetImpressum/Ticker) den gesamten Schluss-Ablauf mit einem
  // einzigen .kill() sauber stoppen kann, egal in welcher Phase er gerade ist.
  endingTimeline = gsap.timeline();
  endingTimeline.to(circleEl, { opacity: 0, duration: 1, ease: "power2.out" }, 0);
  endingTimeline.to(circle2El, { opacity: 0, duration: 1, ease: "power2.out" }, 0);
  if (FINAL_SEGMENT) endingTimeline.to(FINAL_SEGMENT.el, { opacity: 0, duration: 1, ease: "power2.out" }, 0);

  endingTimeline.call(() => impressumEl.setAttribute("aria-hidden", "false"), null, 1);
  endingTimeline.to(impressumEl, { opacity: 1, duration: 1, ease: "power2.out" }, 1);

  // "neustart" an der scrollen-Position, aber erst 1–2s NACH dem Impressum
  // (impressum startet bei 1s, braucht 1s zum Einblenden — daher 3.5s Gesamt-
  // verzögerung ab hier), nicht gleichzeitig mit dem Rest des Schluss-Fadeouts.
  endingTimeline.call(() => {
    restartHintEl.setAttribute("aria-hidden", "false");
    restartHintEl.style.pointerEvents = "auto";
  }, null, 3.5);
  endingTimeline.to(restartHintEl, { opacity: 1, duration: 1, ease: "power2.out" }, 3.5);
}

// Rückwärts über das fertige Ende hinaus scrollen (Impressum/"neustart" schon
// sichtbar) — setzt beides zurück und übergibt die Kontrolle über
// circleEl/circle2El/FINAL_SEGMENT sofort wieder an den normalen, p-gesteuerten
// Ticker-Durchlauf (kein manuelles Zurücksetzen ihrer Opacity nötig, siehe
// Aufrufstelle im Ticker unten).
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
  scrollLocked = true;
  window.addEventListener("wheel", preventScroll, { passive: false });
  window.addEventListener("touchmove", preventScroll, { passive: false });
  window.addEventListener("keydown", preventScrollKeys);
}

function unlockScroll() {
  scrollLocked = false;
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

// Der endgültige Ausstieg aus der ganzen Klick-Strecke, am Ende von
// creepToDataText — setzt den Kreis (Skalierung von den Bedingungen-Klicks)
// zurück, bevor die DATA_SEGMENT-Slide-Geometrie selbst übernimmt.
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

// Nach der letzten Quelle wartet "Quelle 4: ..." auf einen weiteren Klick,
// bevor finishReveal es ausblendet und "Die Werte reichen von..." zeigt —
// kein Automatismus, der Nutzer entscheidet den Moment (siehe onGateClick).
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

  // "Quelle 4: ..." muss ganz weg sein, bevor "...unterscheiden sich je nach
  // Quelle." erscheint (varianceReady lässt es sonst sofort auf Opacity 1
  // springen, während Quelle 4 noch am Ausblenden ist — deshalb erst im onComplete).
  gsap.to(sourceRevealTextEl, {
    opacity: 0,
    duration: 0.4,
    onComplete: () => {
      varianceReady = true;
    },
  });

  // Ab hier wieder wie in den ersten Szenen: p wird nicht mehr festgehalten,
  // "...unterscheiden sich je nach Quelle." blendet rein per echtem Scrollen
  // ein/aus (siehe VARIANCE_* im Ticker), kein Klick, kein Timer.
  scrollFrozen = false;
  unlockScroll();
  scrollHintArmedAgain = true;
  scrollHintTriggerP = gateHoldIndex;
  scheduleScrollHint(true);
}

// "Wovon hängt dieser Wert ab?" verschwindet erst on Klick, nicht von allein
// nach einer festen Wartezeit (siehe circleEl-Klick-Listener unten).
let awaitingConditionsStart = false;

function armConditionsGate() {
  conditionsGateArmed = true;
  scrollFrozen = true;
  gateHoldIndex = CONDITIONS_TRIGGER_INDEX;
  window.scrollTo(0, slidePx(CONDITIONS_TRIGGER_INDEX));
  lockScroll();
  armConditions();
}

function armConditions() {
  // Ripples bleiben stehen statt zu verschwinden — sie werden erst beim
  // ersten Klick unscharf, mit etwas dickerer Kontur (siehe onConditionsClick).
  // Klickbar bleiben sie aber nicht: der Kreis wächst über die Klick-Strecke
  // hinweg auf über das 1.8-fache und würde die (fixen) Quellen-Punkte optisch
  // überlagern — ein Klick dort öffnete sonst versehentlich den Quellen-Link
  // in einem neuen Tab, statt die Bedingungen-Antwort fortzusetzen.
  studyEls.forEach(({ circle, labelEl }) => {
    circle.classList.remove("study-circle--hoverable");
    gsap.to(labelEl, { opacity: 0, duration: 0.3 });
  });

  hideScrollHint();
  circleEl.classList.add("circle--clickable");
  gsap.killTweensOf(circleEl, "scale");
  gsap.to(circleEl, { scale: 1.035, duration: 0.9, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2 });

  gsap.to(conditionsTitleTextEl, { opacity: 1, duration: 0.5, delay: 0.4 });
  clickHintEl.textContent = "Klicke den Kreis an";
  scheduleHint(true, SECOND_GATE_HINT_DELAY_MS);
  awaitingConditionsStart = true;
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
    gsap.to(conditionsTitleTextEl, { opacity: 0, duration: 0.5 });
    gsap.set(conditionsVarianceTextEl, { opacity: 1 });
    conditionsArmed = true;
    // Derselbe Klick, der die Frage wegnimmt, löst auch gleich die erste
    // Stufe aus ("Der Verbrauch schwankt" + erster Blur) — sonst stünde die
    // Antwort einen Klick lang leer da.
    onConditionsClick();
    return;
  }
  if (conditionsArmed) onConditionsClick();
});

// Ab hier wieder wie in den ersten Szenen (analog zu finishReveal): p wird
// nicht mehr festgehalten, "...und Auslastung." bleibt stehen, bis gescrollt
// wird, dann kommt "Wer stellt diese Daten zur Verfügung?" — kein Klick,
// kein Timer (siehe CONDITIONS_VARIANCE_END/DATA_QUESTION_* im Ticker). Der
// Kreis bleibt bewusst unscharf/gross wie am Ende der Bedingungen-Interaktion
// stehen — beide Szenen gehören visuell zusammen, kein Reset (siehe releaseGate).
function finishConditions() {
  conditionsVarianceReady = true;
  scrollFrozen = false;
  unlockScroll();
  circleEl.classList.remove("circle--clickable");
  clearTimeout(hintTimer);
  gsap.to(clickHintEl, { opacity: 0, duration: 0.3 });
  scrollHintArmedAgain = true;
  scrollHintTriggerP = gateHoldIndex;
  scheduleScrollHint(true);
}

// Sobald "Wer stellt diese Daten zur Verfügung?" per Scroll voll sichtbar ist,
// friert der Scroll wieder ein und wartet auf einen Klick (siehe Ticker).
function armDataQuestionClick() {
  dataQuestionArmed = true;
  scrollFrozen = true;
  gateHoldIndex = DATA_QUESTION_START;
  window.scrollTo(0, slidePx(DATA_QUESTION_START));
  lockScroll();
  hideScrollHint();
  circleEl.classList.add("circle--clickable");
  clickHintEl.textContent = "Klicke den Kreis an";
  scheduleHint(true, SECOND_GATE_HINT_DELAY_MS);
}

// Der Klick blendet die Frage aus und stösst danach eine automatisch
// ablaufende Animation an (creepToDataText) — kein weiteres Scrollen nötig.
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

// Der Punkt kriecht automatisch weiter zu DATA_SEGMENT — die Skalierung von
// den Bedingungen-Klicks löst sich dabei sanft auf, kein hartes Zurücksetzen.
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

// "Quelle N: ..." ist Inhalt (Text), kein Hinweis — eigenes Element, oben
// links wie die übrigen Erzähltexte, nicht der zentrale Klick-Hinweis. Wird
// sowohl beim Klick (neu enthüllte Quelle) als auch beim Hover über eine
// bereits enthüllte Quelle benutzt (siehe mouseenter/mouseleave weiter unten).
function renderSourceReveal(index) {
  const study = WATER_STUDIES[index];
  sourceRevealTextEl.textContent = "";
  sourceRevealTextEl.append(`Quelle ${index + 1}: ${study.name}`, document.createElement("br"), study.display);
  // "pro Quelle"-Legende sitzt direkt unter dem Quellen-Text statt oben rechts
  // — Höhe des Texts variiert (1–2 Zeilen je nach Quelle/Viewport), daher hier
  // dynamisch neu vermessen statt eines fixen CSS-Werts.
  const rect = sourceRevealTextEl.getBoundingClientRect();
  gsap.set(rippleLegendEl, { left: 48, top: rect.bottom + 20, right: "auto", xPercent: 0, yPercent: 0 });
}

function onGateClick() {
  if (awaitingConclusionClick) {
    awaitingConclusionClick = false;
    finishReveal();
    return;
  }
  if (revealedCount >= WATER_STUDIES.length) return;
  // Erst beim ersten Klick verschwindet die Frage — dafür kommt die
  // "pro Quelle"-Erklärung.
  if (revealedCount === 0 && !questionHidden) {
    questionHidden = true;
    gsap.to(QUESTION_SEGMENT.el, { opacity: 0, duration: 0.4 });
    gsap.to(rippleLegendEl, { opacity: 1, duration: 0.5, delay: 0.3 });
  }
  renderSourceReveal(revealedCount);
  // Sofort sichtbar, gleichzeitig mit dem Ripple — nicht erst kurz ausblenden
  // und verzögert wieder einblenden (das wirkte wie ein Verschwinden).
  gsap.killTweensOf(sourceRevealTextEl, "opacity");
  gsap.to(sourceRevealTextEl, { opacity: 1, duration: 0.25 });
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

// Rückwärts-Scrollen macht alles rückgängig, was per Klick hinzugekommen ist
// — sobald man über eine bereits erledigte Klick-Strecke zurück scrollt (nur
// möglich, wenn diese gerade nicht eingefroren/gesperrt ist), wird ihr
// Zustand komplett zurückgesetzt und die Strecke kann beim nächsten Vorwärts-
// Scrollen erneut durchgeklickt werden (siehe die drei Aufrufe im Ticker unten).
function resetRipples() {
  const wasRevealedCount = revealedCount;
  gateArmed = false;
  revealedCount = 0;
  questionHidden = false;
  studiesDismissed = false;
  awaitingConclusionClick = false;
  varianceReady = false;
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

  // Rückwärts-Reveal statt Hart-Cut: die zuletzt enthüllte Quelle verschwindet
  // zuerst, dann rückwärts der Reihe nach — spiegelt den Vorwärts-Klickablauf.
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
  // Falls je mehr Ringe im DOM als revealedCount hergibt (sollte nicht
  // vorkommen) — sicherheitshalber ohne Animation aufräumen.
  ringsToRemove.slice(wasRevealedCount).forEach((ring) => ring.remove());
}

function resetConditions() {
  const wasStage = conditionsStage;
  conditionsGateArmed = false;
  conditionsArmed = false;
  awaitingConditionsStart = false;
  conditionsStage = 0;
  conditionsVarianceReady = false;
  clearTimeout(hintTimer);
  gsap.killTweensOf(clickHintEl);
  gsap.to(clickHintEl, { opacity: 0, duration: 0.3 });
  gsap.killTweensOf(conditionsTitleTextEl);
  gsap.to(conditionsTitleTextEl, { opacity: 0, duration: 0.3 });
  gsap.killTweensOf(conditionsVarianceTextEl);
  gsap.to(conditionsVarianceTextEl, { opacity: 0, duration: 0.3 });

  // Rückwärts-Reveal statt Hart-Cut: die zuletzt hinzugekommene Zeile
  // verschwindet zuerst, dann rückwärts der Reihe nach.
  const REVERSE_STAGGER = 0.15;
  gsap.killTweensOf(conditionsChunkEls);
  for (let i = 0; i < wasStage; i += 1) {
    gsap.to(conditionsChunkEls[wasStage - 1 - i], { opacity: 0, duration: 0.3, delay: i * REVERSE_STAGGER, ease: "power2.in" });
  }

  circleEl.classList.remove("circle--clickable");
  gsap.killTweensOf(circleEl, "scale");
  gsap.to(circleEl, { scale: 1, duration: 0.5, ease: "power2.inOut" });

  // studyExtraBlur ist eine reine JS-Zahl (kein GSAP-Target) — per Proxy-Objekt
  // sanft auf 0 zurückgeführt statt hart gesetzt, analog zu onConditionsClick.
  const blurProxy = { v: studyExtraBlur };
  gsap.to(blurProxy, { v: 0, duration: 0.5, ease: "power2.inOut", onUpdate: () => (studyExtraBlur = blurProxy.v) });

  gsap.killTweensOf(ringEls);
  gsap.to(ringEls, { borderWidth: 12, filter: "blur(0px)", opacity: 1, duration: 0.5, ease: "power2.inOut" });
  hideScrollHint();
}

function resetDataQuestion() {
  dataQuestionArmed = false;
  dataQuestionDismissed = false;
  gateDone = false;
  clearTimeout(hintTimer);
  gsap.killTweensOf(clickHintEl);
  gsap.to(clickHintEl, { opacity: 0, duration: 0.3 });
  gsap.killTweensOf(dataQuestionTextEl);
  gsap.to(dataQuestionTextEl, { opacity: 0, duration: 0.3 });
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

  // Analog zu den drei Klick-Strecken unten: Zurückscrollen über das fertige
  // Ende hinaus (Impressum/"neustart" schon sichtbar) setzt es zurück und lässt
  // den Rest der Funktion (unten) den Ticker-Durchlauf ab hier ganz normal
  // übernehmen. Bevor genug zurückgescrollt wurde, bleibt der frühe Ausstieg
  // wie bisher bestehen — die Schluss-Timeline behält die Kontrolle.
  if (finalFadeArmed) {
    if (FINAL_SEGMENT && p < FINAL_SEGMENT.startIndex - RESET_DEADZONE) {
      resetImpressum();
    } else {
      return;
    }
  }

  // Rückwärts über eine bereits erledigte Klick-Strecke scrollen setzt sie
  // zurück (siehe resetRipples/resetConditions/resetDataQuestion oben) — nur
  // relevant, wenn gerade nicht eingefroren (währenddessen ist Scrollen ohnehin
  // gesperrt, siehe lockScroll). RESET_DEADZONE verhindert, dass minimales,
  // unabsichtliches Zurückscrollen (z.B. Trackpad-Nachlauf direkt nach einem
  // Klick, ein paar Pixel) sofort eine ganze fertige Strecke zurücksetzt — erst
  // ein wirklich spürbares Zurückscrollen zählt als Absicht.
  if (!scrollFrozen) {
    if (gateArmed && p < GATE_INDEX - RESET_DEADZONE) resetRipples();
    if (conditionsGateArmed && p < CONDITIONS_TRIGGER_INDEX - RESET_DEADZONE) resetConditions();
    if (gateDone && p < DATA_QUESTION_START - RESET_DEADZONE) resetDataQuestion();
  }

  if (!gateArmed && p >= GATE_INDEX) armGate();
  if (!conditionsGateArmed && p >= CONDITIONS_TRIGGER_INDEX) armConditionsGate();
  if (conditionsVarianceReady && !dataQuestionArmed && !dataQuestionDismissed && p >= DATA_QUESTION_START) {
    armDataQuestionClick();
  }
  if (scrollFrozen) {
    p = gateHoldIndex;
    window.scrollTo(0, slidePx(gateHoldIndex));
  }

  // Früher erst bei p >= N-1 (ganz am Ende des Scroll-Bereichs) — wirkte so,
  // als wäre man nach "Ungewissheit" schon fertig, weil man noch weiterscrollen
  // musste, ohne dass sichtbar etwas Neues passierte. Jetzt läuft der Abschluss
  // automatisch als Animation, sobald "Ungewissheit" fertig eingeblendet ist
  // (siehe armImpressum/revealImpressum: Ungewissheit blendet aus, dann
  // Impressum, dann "neustart" — kein weiteres Scrollen nötig).
  if (!impressumArmed && FINAL_SEGMENT && p >= FINAL_SEGMENT.startIndex) armImpressum();

  const i = Math.min(N - 2, Math.floor(p));
  const t = p - i;
  const a = SLIDES[i];
  const b = SLIDES[i + 1];

  invertStageEl.style.backgroundColor = lerpColor(a.bg, b.bg, t);

  const bgLuminance = lerp(avgLuminance(a.bg), avgLuminance(b.bg), t);
  // Während einer Klick-Strecke (scrollFrozen) blendet die Bar kurz aus, statt
  // einen künstlichen "Klick-Fortschritt" vorzutäuschen — man kann in dieser
  // Zeit ohnehin nicht scrollen (siehe lockScroll). .progress-bar hat eine
  // CSS-transition auf opacity, darum ist auch dieser gsap.set-Sprung sanft.
  gsap.set(progressBarEl, { opacity: scrollFrozen ? 0 : gsap.utils.clamp(0, 1, bgLuminance / 30) });
  // Bar bleibt exakt auf gateHoldIndex stehen, solange scrollFrozen aktiv ist
  // (bewegt sich also nicht, siehe Wunsch unten) — sobald aufgetaut wird, ist
  // das reale p an genau dieser Stelle, kein Sprung nötig. Während der
  // automatischen Kriech-Animation (creepToDataText) bewegt sich gateHoldIndex
  // selbst weiter, die Bar folgt dem transparent mit.
  const barP = scrollFrozen ? gateHoldIndex : p;
  gsap.set(progressBarFillEl, { scaleY: barP / (N - 1) });

  // "...unterscheiden sich je nach Quelle.": reine Scroll-Opacity wie die
  // übrigen Erzähltexte, kein Klick, kein Timer. varianceReady-Sperre:
  // VARIANCE_START == GATE_INDEX, ihr Fade-Radius reicht sonst schon in die
  // "Wie viel Wasser..."-Frage hinein, bevor die Ripples je durchgeklickt
  // wurden (siehe finishReveal).
  varianceTextEl.style.opacity = varianceReady
    ? pointSegmentOpacity(p, VARIANCE_START, VARIANCE_END, POINT_FADE_RADIUS, POINT_FADE_RADIUS)
    : 0;

  // "...und Auslastung." / "Wer stellt diese Daten zur Verfügung?": gleiches
  // Muster wie oben — conditionsVarianceReady-Sperre verhindert ein zu frühes
  // Einblenden, während man erst noch auf CONDITIONS_TRIGGER_INDEX zuscrollt.
  if (conditionsVarianceReady) {
    conditionsVarianceTextEl.style.opacity = pointSegmentOpacity(
      p,
      CONDITIONS_TRIGGER_INDEX,
      CONDITIONS_VARIANCE_END,
      POINT_FADE_RADIUS,
      POINT_FADE_RADIUS
    );
    // dataQuestionDismissed-Sperre: sobald der Klick den manuellen Fade-out
    // startet (siehe onDataQuestionAdvance), würde diese Formel ihn sofort
    // wieder auf Opacity 1 zurücksetzen (p steht dabei noch auf DATA_QUESTION_START).
    if (!dataQuestionDismissed) {
      dataQuestionTextEl.style.opacity = pointSegmentOpacity(
        p,
        DATA_QUESTION_START,
        DATA_QUESTION_END,
        POINT_FADE_RADIUS,
        POINT_FADE_RADIUS
      );
    }
  }

  // On pure-black scenes (negative text: black bg, white text), shrink the
  // circle and text ~5% — scales continuously with how "black" the current
  // background is, using the same luminance signal as the progress bar fade.
  const blackness = 1 - gsap.utils.clamp(0, 1, bgLuminance / 30);
  const negativeScale = 1 - blackness * NEGATIVE_SHRINK;

  const circleGeom = circleGeometry(a.circle, b.circle, t);
  const circle2Geom = circleGeometry(a.circle2, b.circle2, t);
  circleGeom.rPx *= negativeScale;
  circle2Geom.rPx *= negativeScale;

  // Rhythmus: erst ist es kurz leer (Titel ist weg, Punkt noch nicht da),
  // dann erscheint der Punkt und wächst langsam weiter — die Zielgrösse
  // erreicht er erst genau bei "Wie viel Wasser verbraucht", nicht schon vorher.
  const CIRCLE_INTRO_START = TITLE_FADE_RANGE + 0.05;
  if (p < QUESTION_INDEX) {
    const introT = gsap.utils.clamp(0, 1, (p - CIRCLE_INTRO_START) / (QUESTION_INDEX - CIRCLE_INTRO_START));
    circleGeom.rPx = introT * INTRO_GROWN_R * Math.min(window.innerWidth, window.innerHeight) * negativeScale;
  }

  // studyExtraBlur ist ausserhalb des Bedingungen/Daten-Fensters ohnehin 0,
  // daher unabhängig vom Gate-Status anwendbar.
  applyCircle(circleEl, { ...circleGeom, blur: circleGeom.blur + studyExtraBlur });
  applyCircle(circle2El, circle2Geom);

  WATER_STUDIES.forEach((study, idx) => {
    const geom = circleGeometry(study, study, 0);
    const entry = studyEls[idx];
    const { circle, labelEl } = entry;
    applyStudyCircle(circle, { ...geom, blur: geom.blur + studyExtraBlur });
    gsap.set(labelEl, { left: geom.cxPx, top: geom.cyPx - geom.rPx - 8, xPercent: -50, yPercent: -100 });
    if (studiesDismissed) {
      gsap.set([circle, labelEl], { opacity: 0 });
    }
  });

  if (CONTRADICTIONS_SEGMENT) {
    const minSidePx = Math.min(window.innerWidth, window.innerHeight);
    const phase = p - CONTRADICTIONS_SEGMENT.startIndex;

    // "Die Antwort besteht aus" blendet als ein Block zusammen ein (Schritt 0),
    // die restlichen 4 Wörter je einzeln (Schritte 1–4) — 5 Schritte statt 8,
    // gleichmässig verteilt über die ersten 3 der 5 Slides (phase 0–2). Die
    // letzten beiden Slides (phase 2–4) sind eine ruhige Pause, in der der
    // fertige Satz einfach stehen bleibt.
    const WORD_TO_STEP = [0, 0, 0, 0, 1, 2, 3, 4];
    const STEP_SPAN = 2 / 5;
    const WORD_FADE_WIDTH = 0.3;
    contradictionWordSpans.forEach((span, i) => {
      const wordT = gsap.utils.clamp(0, 1, (phase - WORD_TO_STEP[i] * STEP_SPAN) / WORD_FADE_WIDTH);
      gsap.set(span, { opacity: EASE_APPEAR(wordT) });
    });

    // Rollierende Ring-Kaskade statt "nach aussen wachsend": 4 Ringe an den
    // gleichen festen Positionen wie die Quellen-Ripples (RIPPLE_RADIUS_FRACTIONS),
    // jeder poppt direkt auf seine Zielgrösse (kein Wachsen nach aussen). Ring i
    // erscheint scharf, wird unscharf genau dann, wenn Ring i+2 erscheint, und
    // verschwindet genau dann, wenn Ring i+2 seinerseits unscharf wird. Ring0
    // startet bewusst erst bei phase 0.4, synchron mit dem Wort "Widersprüchen,"
    // (WORD_TO_STEP[4] * STEP_SPAN) — der erste Ripple soll mit dem Wort
    // erscheinen, nicht schon während "Die Antwort besteht aus" davor.
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

  // Alle Texte links, vertikal zentriert wie der Titel (.title-screen) —
  // Ausnahmen sind nur die Nav und die Quellen-Hover-Labels an den Ripples,
  // die an ihrer jeweiligen Position bleiben müssen.
  const sceneTextLeftPx = 48;

  gsap.set(varianceTextEl, { left: sceneTextLeftPx, top: "50%", xPercent: 0, yPercent: -50 });
  gsap.set(conditionsTitleTextEl, { left: sceneTextLeftPx, top: "50%", xPercent: 0, yPercent: -50 });
  gsap.set(conditionsVarianceTextEl, { left: sceneTextLeftPx, top: "50%", xPercent: 0, yPercent: -50 });
  gsap.set(dataQuestionTextEl, { left: sceneTextLeftPx, top: "50%", xPercent: 0, yPercent: -50 });

  TEXT_SEGMENTS.forEach((seg) => {

    if (seg === QUESTION_SEGMENT && questionHidden) return;

    const fadeInRadius = seg.fadeInRadius ?? TEXT_FADE_RANGE;
    const fadeOutRadius = seg.fadeOutRadius ?? TEXT_FADE_RANGE;
    const opacity = pointSegmentOpacity(p, seg.startIndex, seg.endIndex, fadeInRadius, fadeOutRadius);

    const dist = p > seg.endIndex ? p - seg.endIndex : 0;
    const exitBlur = seg.exitBlur && dist > 0 ? Math.min(dist / fadeOutRadius, 1) * EXIT_BLUR_PX : 0;

    gsap.set(seg.el, {
      opacity,
      left: sceneTextLeftPx,
      top: "50%",
      xPercent: 0,
      yPercent: -50,
      filter: `blur(${exitBlur}px)`,
    });

    if (seg.wordEls) {
      const [fadeStart, fadeEnd] = seg.fadeRange;
      const wordFadeT = gsap.utils.clamp(0, 1, (p - fadeStart) / (fadeEnd - fadeStart));
      seg.wordEls.fade.forEach((span) => gsap.set(span, { opacity: 1 - wordFadeT }));
    }
  });

  const titleFadeT = p < HEADER_FADE_RANGE
    ? 0
    : (p - HEADER_FADE_RANGE) / (TITLE_FADE_RANGE - HEADER_FADE_RANGE);
  titleScreenEl.style.opacity = gsap.utils.clamp(0, 1, 1 - titleFadeT);
  siteHeaderEl.style.opacity = gsap.utils.clamp(0, 1, 1 - p / HEADER_FADE_RANGE);

  if (!scrollHintArmedAgain) {
    scrollHintEl.style.opacity = p > SCROLL_HINT_HIDE_P ? 0 : 1;
  } else if (p > scrollHintTriggerP + SCROLL_HINT_HIDE_P) {
    clearTimeout(scrollHintTimer);
    gsap.to(scrollHintEl, { opacity: 0, duration: 0.3 });
    scrollHintArmedAgain = false;
  }
});
