/* Aplicação React (sem build). Os textos e as respostas do chatbot ficam em dados.js. */
(function () {
"use strict";
const { useState, useEffect, useRef } = React, h = React.createElement;

const LANGS = [["pt", "Português"], ["es", "Español"], ["fr", "Français"], ["en", "English"]];
const HTMLLANG = { pt: "pt-BR", es: "es", fr: "fr", en: "en" };
const ICONE_CARTAO = { documentacao: "doc", habitacao: "home", adaptacao: "compass", escola: "school" };
const ICONE_FATO = ["nuvem", "onibus", "users", "pin", "phone"];
const TELNUM = ["190", "192", "193", "156", "180", "100"];
const ACAO = { documentacao: "documentos", adaptacao: "cidade" }; // botão extra nas respostas desses assuntos

/* Ícones de linha */
const ICONS = {
  doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',
  home: '<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10M10 20v-6h4v6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  school: '<path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-4.5"/>',
  chat: '<path d="M5 5h14a1 1 0 011 1v9a1 1 0 01-1 1h-7l-4 4v-4H5a1 1 0 01-1-1V6a1 1 0 011-1z"/>',
  send: '<path d="M4 12l16-8-6 16-3-7z"/>',
  minus: '<path d="M6 12h12"/>',
  refresh: '<path d="M4 12a8 8 0 0114-5l2 2M20 4v5h-5M20 12a8 8 0 01-14 5l-2-2M4 20v-5h5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  tree: '<path d="M12 21V6M7 9h10M8.5 13h7M10 5h4"/>',
  nuvem: '<path d="M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z"/>',
  onibus: '<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 12h16M7 20v-3M17 20v-3"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0M16 5a3 3 0 010 6M18 20a6 6 0 00-3-5"/>',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/>',
  estufa: '<path d="M4 20V11a8 8 0 0116 0v9z"/><path d="M12 3v17M4 13h16M8 20v-9M16 20v-9"/>',
  opera: '<path d="M3 20L8 8h8l5 12z"/><path d="M6 14h12M10 8l-1.5 12M14 8l1.5 12"/>',
  museu: '<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  parque: '<circle cx="12" cy="9" r="5"/><path d="M12 14v7M8 21h8"/>',
  rua: '<path d="M4 21V9h6v12M10 21V4h10v17M3 21h18M13 8h4M13 12h4M13 16h4"/>',
  largo: '<path d="M3 21h18M5 21V11l7-6 7 6v10M10 21v-5h4v5"/>',
  mercado: '<path d="M3 10h18l-2 10H5z"/><path d="M8 10l4-6 4 6"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  arauc: '<path d="M12 9.5V20"/><path d="M4.5 11Q12 3.5 19.5 11"/><path d="M7.5 15Q12 10.5 16.5 15"/>',
  sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  lua: '<path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/>',
  brief: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 13h18"/>'
};
function Icon(p) {
  return h("svg", { className: "ic", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, dangerouslySetInnerHTML: { __html: ICONS[p.n] || "" } });
}

const SKYLINE = '<svg viewBox="0 0 1200 300" preserveAspectRatio="xMidYMax slice" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M0 280H1200"/><path d="M60 280V236h44v44M120 280V204h52v76M188 280V248h30v32M1010 280V230h46v50M1072 280V196h56v84M1144 280V246h40v34"/><path d="M300 280V228Q300 176 362 176T424 228V280M300 228H424M331 280V182M362 280V176M393 280V182"/><path d="M556 280V96M564 280V96M546 96h28l-4-12h-20zM552 84V62h16v22M560 62V44"/><ellipse cx="560" cy="98" rx="24" ry="6"/><path d="M690 280l30-84h110l30 84M720 238h110M742 196l-12 84M775 196v84M808 196l12 84"/><path d="M930 280V210M902 208q28-16 56 0M910 224q20-12 40 0M250 280V218M226 216q24-14 48 0M232 230q18-10 36 0"/></svg>';

/* Dados já traduzidos: dados.js (dadosBase, EXTRA e NOVO) */
function dados(lg) {
  const b = dadosBase(lg);
  return { ui: Object.assign({}, b.ui, EXTRA[lg], NOVO[lg], pre("cv_", CVK, CV[lg]), pre("em_", EMK, EM[lg]), XEM[lg], XCV[lg], { cv_niveis: XNIV[lg] }), abas: b.abas, cartoes: b.cartoes, lugares: b.lugares, fatos: b.fatos, passos: b.passos, topicos: b.topicos, det: DET[lg] || DET.pt, doc: DOC[lg] || DOC.pt };
}
function lgInicial() {
  let v = null;
  try { v = localStorage.getItem("idioma"); } catch (e) {}
  if (!v) { v = (navigator.language || "pt").slice(0, 2).toLowerCase(); }
  return LANGS.some(l => l[0] === v) ? v : "pt";
}

/* Busca do chatbot: compara as palavras (sem acento, só o começo delas) com as perguntas e respostas */
const PARAR = {};
("como onde para qual quais minha meus meu uma que com por dos das nao sim posso tenho quero preciso " +
 "cual puedo mis una con los las tengo quiero necesito donde " +
 "comment pour quel quels mon mes une les des est puis dois faut " +
 "how where what which can the and with are you your need want does get have from").split(" ").forEach(w => { PARAR[w] = 1; });
const norm = t => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const stem = w => (w.length > 4 ? w.slice(0, 4) : w);
const palavras = t => norm(t).split(/[^a-z0-9]+/).filter(w => w.length > 2 && !PARAR[w]).map(stem);
function buscar(texto, TP, atual) {
  const q = palavras(texto), r = [];
  if (!q.length) { return r; }
  Object.keys(TP).forEach(k => TP[k].perguntas.forEach(it => {
    const pq = palavras(it.p), pr = palavras(it.r);
    let s = 0;
    q.forEach(w => { if (pq.indexOf(w) > -1) { s += 3; } else if (pr.indexOf(w) > -1) { s += 1; } });
    if (s > 0 && k === atual) { s += 1; }
    if (s > 0) { r.push({ chave: k, item: it, s }); }
  }));
  return r.sort((a, b) => b.s - a.s);
}

/* Lembrete para o calendário (arquivo .ics): 90 dias depois da entrada, com aviso 7 dias antes */
function baixarIcs(data, u) {
  const d = new Date(data + "T12:00:00"); d.setDate(d.getDate() + 90);
  const fim = new Date(d); fim.setDate(fim.getDate() + 1);
  const f = x => x.toISOString().slice(0, 10).replace(/-/g, "");
  const t = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Curitiba Guia//PT", "BEGIN:VEVENT", "UID:" + Date.now() + "@curitiba-guia",
    "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z", "DTSTART;VALUE=DATE:" + f(d), "DTEND;VALUE=DATE:" + f(fim),
    "SUMMARY:" + u.icsT, "DESCRIPTION:" + u.icsD, "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:" + u.icsT, "TRIGGER:-P7D", "END:VALARM", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([t], { type: "text/calendar" })); a.download = "lembrete-pf.ics"; a.click();
}

/* ---------- Páginas ---------- */
function Cab(p) { return h("div", { className: "cab" }, h("div", { className: "w" }, h("h1", null, p.t), h("p", null, p.d))); }

function Inicio(p) {
  const d = p.d, u = d.ui;
  return h("div", null,
    h("section", { className: "hero" },
      h("div", { className: "hero-sky", dangerouslySetInnerHTML: { __html: SKYLINE } }),
      h("div", { className: "w hero-in" },
        h("h1", null, u.h1), h("p", { className: "hero-p" }, u.lead),
        h("div", { className: "hero-btns" },
          h("button", { className: "btn btn-a", onClick: () => p.ir("documentos") }, u.btn, h(Icon, { n: "arrow" })),
          h("button", { className: "btn btn-g", onClick: () => p.abrir(true) }, h(Icon, { n: "chat" }), u.btn2)))),
    h("div", { className: "w" },
      h("section", { className: "ajuda" }, h("h2", null, u.ajuda), h("p", { className: "sub" }, u.ajudaD),
        h("div", { className: "tiles" }, d.cartoes.map(c => h("button", { key: c[0], className: "tile", onClick: () => p.escolher(c[0]) },
          h("span", { className: "tile-i" }, h(Icon, { n: ICONE_CARTAO[c[0]] })), h("strong", null, c[1]), h("span", { className: "tile-s" }, c[2]),
          h("span", { className: "tile-go" }, h(Icon, { n: "arrow" })))))),
      h("section", { className: "trab" },
        h("span", { className: "trab-i" }, h(Icon, { n: "brief" })),
        h("div", null, h("h2", null, u.cv_homeT), h("p", null, u.cv_homeD)),
        h("div", { className: "trab-b" },
          h("button", { className: "btn btn-a", onClick: () => p.ir("curriculo") }, u.cv_homeB1),
          h("button", { className: "btn btn-g", onClick: () => p.ir("empregos") }, u.cv_homeB2))),
      h("section", { className: "bloco" },
        h("div", { className: "bloco-h" }, h("h2", null, u.primeiros),
          h("button", { className: "link", onClick: () => p.ir("documentos") }, u.btn, h(Icon, { n: "arrow" }))),
        h("div", { className: "passos3" }, d.passos.slice(0, 3).map((x, i) => {
          const m = /^.*?[.!?](?=\s|$)/.exec(x[1]);
          return h("button", { key: x[0], className: "p3", onClick: () => p.ir("documentos") },
            h("span", { className: "p3-n" }, i + 1), h("strong", null, x[0]), h("span", { className: "p3-t" }, m ? m[0] : x[1]));
        })))));
}

function Cidade(p) {
  const d = p.d, u = d.ui;
  return h("div", null, h(Cab, { t: u.cidT, d: u.cidD }),
    h("div", { className: "w sec" }, h("div", { className: "fatos" }, d.fatos.map((f, i) =>
      h("article", { key: f[0], className: "fato" }, h("span", { className: "fato-i" }, h(Icon, { n: ICONE_FATO[i] })), h("h3", null, f[0]), h("p", null, f[1]), h("p", { className: "det" }, h("strong", null, u.dicaR + ": "), d.det.fatos[i]),
        i === 4 ? h("div", { className: "tels" }, TELNUM.map((n, k) => h("a", { key: n, href: "tel:" + n }, h(Icon, { n: "phone" }), n + " " + u.tels[k]))) : null)))));
}

function Lugar(p) {
  const l = p.l, [ok, setOk] = useState(true);
  return h("article", { className: "lugar" },
    h("div", { className: "foto" },
      ok ? h("img", { src: "imagens/" + l[6], alt: l[0], loading: "lazy", onError: () => setOk(false) }) : h("div", { className: "foto-v" }, h(Icon, { n: l[3] })),
      h("span", { className: "tag" }, l[1])),
    h("div", { className: "corpo" }, h("h3", null, l[0]), h("p", null, l[2]), p.dica ? h("p", { className: "det" }, h("strong", null, p.rot + ": "), p.dica) : null,
      h("a", { className: "mapa", href: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(l[0] + " Curitiba"), target: "_blank", rel: "noopener noreferrer" }, p.mapa, h(Icon, { n: "ext" }))));
}

function Turismo(p) {
  const d = p.d, u = d.ui, [cat, setCat] = useState("");
  const cats = [""].concat(d.lugares.map(l => l[1]));
  return h("div", null, h(Cab, { t: u.turT, d: u.turD }),
    h("div", { className: "w sec" },
      h("div", { className: "filtros", role: "group", "aria-label": u.filtrar }, cats.map(c => h("button", { key: c, className: c === cat ? "on" : "", "aria-pressed": c === cat, onClick: () => setCat(c) }, c === "" ? u.todos : c))),
      h("div", { className: "grade" }, d.lugares.map((l, i) => (cat === "" || l[1] === cat) ? h(Lugar, { key: l[0], l, dica: d.det.lugares[i], rot: u.dicaR, mapa: u.mapa }) : null))));
}

function Documentos(p) {
  const d = p.d, u = d.ui;
  const [ck, setCk] = useState(() => { try { return JSON.parse(localStorage.getItem("checklist") || "{}"); } catch (e) { return {}; } });
  const [data, setData] = useState("");
  const feitos = d.passos.filter((x, i) => ck[i]).length;
  const marcar = i => { const n = Object.assign({}, ck); n[i] = !n[i]; setCk(n); try { localStorage.setItem("checklist", JSON.stringify(n)); } catch (e) {} };
  return h("div", null, h(Cab, { t: u.docT, d: u.docD }),
    h("div", { className: "w sec" },
      h("div", { className: "resumo" },
        h("div", { className: "prog", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": d.passos.length, "aria-valuenow": feitos }, h("div", { className: "prog-b", style: { width: (feitos / d.passos.length * 100) + "%" } })),
        h("p", null, u.prog.replace("{n}", feitos).replace("{m}", d.passos.length)),
        feitos === d.passos.length ? h("p", { className: "parab", role: "status" }, u.parab) : null,
        h("div", { className: "doc-acoes" },
          h("button", { type: "button", className: "btn btn-s", onClick: () => { document.querySelectorAll("details").forEach(x => { x.open = true; }); window.print(); } }, u.imprimir),
          h("button", { type: "button", className: "btn-x", onClick: () => { setCk({}); try { localStorage.removeItem("checklist"); } catch (e) {} } }, h(Icon, { n: "trash" }), u.limparCk))),
      h("ol", { className: "etapas" }, d.passos.map((x, i) => h("li", { key: x[0], className: ck[i] ? "ok" : "" }, h("h3", null, x[0]), h("p", null, x[1]),
        h("p", { className: "cu" }, h("strong", null, u.cuR + ": "), d.doc.cu[i]),
        h("details", null, h("summary", null, u.comoR),
          h("ol", { className: "como" }, d.doc.como[i].map((s, k) => h("li", { key: k }, s))),
          h("p", { className: "det" }, h("strong", null, u.levarR + ": "), d.det.passos[i])),
        DOCLINK[i] ? h("a", { className: "mapa", href: DOCLINK[i], target: "_blank", rel: "noopener noreferrer" }, u.siteOf, h(Icon, { n: "ext" })) : null,
        h("label", { className: "feito" }, h("input", { type: "checkbox", checked: !!ck[i], onChange: () => marcar(i) }), u.feito)))),
      h("div", { className: "aviso caso" }, h("h3", null, u.casoT), h("ul", null, u.caso.map((t, k) => h("li", { key: k }, t)))),
      h("div", { className: "lembrete" }, h("h3", null, u.lembT), h("p", null, u.lembD),
        h("form", { onSubmit: e => { e.preventDefault(); if (data) { baixarIcs(data, u); } } },
          h("label", null, u.dataL, h("input", { type: "date", required: true, value: data, onChange: e => setData(e.target.value) })),
          h("button", { className: "btn btn-p", type: "submit" }, u.lembB))),
      h("details", { className: "gloss" }, h("summary", null, u.glosT), h("dl", null, u.gloss.map(g => h(React.Fragment, { key: g[0] }, h("dt", null, g[0]), h("dd", null, g[1]))))),
      h("p", { className: "aviso" }, u.aviso)));
}

/* ---------- Currículo ---------- */
const CV0 = { nome: "", cargo: "", cidade: "", end: "", tel: "", email: "", nac: "", nasc: "", link: "", sit: "", cnh: "", foto: "", resumo: "",
  exp: [{ cargo: "", emp: "", local: "", ini: "", fim: "", atual: false, desc: "" }],
  form: [{ curso: "", inst: "", nivel: 0, ini: "", fim: "", atual: false, det: "" }],
  cert: [{ nome: "", inst: "", ano: "", carga: "" }],
  idi: [{ nome: "", nivel: 2 }], hab: "", disp: "", mud: false, viaj: false, extra: "",
  ref: [{ nome: "", cargo: "", cont: "" }], pdfLg: "pt" };
function lerCv() {
  try { const j = JSON.parse(localStorage.getItem("curriculo") || "null"); return j ? Object.assign({}, CV0, j) : CV0; } catch (e) { return CV0; }
}
const txt = s => (typeof s === "string" ? s : "");
const CNHS = ["A", "B", "AB", "C", "D", "E"];

/* Cria o arquivo PDF (jsPDF). Usa a fonte padrão, que aceita letras latinas com acento. */
function gerarPdf(c, lgp) {
  try {
    const J = window.jspdf && window.jspdf.jsPDF;
    if (!J) { return false; }
    const doc = new J({ unit: "pt", format: "a4" }), W = 595, HH = 842, M = 50, CW = W - 2 * M;
    const INK = [18, 32, 26], MUT = [88, 105, 95], GRN = [26, 107, 84], LIN = [210, 222, 216];
    const Hd = PDFH[lgp], T = CV[lgp], X = PDFX[lgp], NV = XNIV[lgp];
    const foto = txt(c.foto).indexOf("data:image/jpeg") === 0 ? c.foto : "";
    const HW = foto ? CW - 88 : CW;
    let y = M;
    const limpa = s => String(s == null ? "" : s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/[\u2013\u2014]/g, "-").replace(/\u2026/g, "...").replace(/[^\u0000-\u00FF]/g, "?");
    const nova = n => { if (y + n > HH - M) { doc.addPage(); y = M; } };
    const fonte = (st, sz, col) => { doc.setFont("helvetica", st); doc.setFontSize(sz); doc.setTextColor(col[0], col[1], col[2]); };
    const par = (s, sz, st, col, x, w) => {
      fonte(st, sz, col);
      doc.splitTextToSize(limpa(s), w).forEach(l => { nova(sz * 1.45); doc.text(l, x, y + sz); y += sz * 1.45; });
    };
    const sec = t => {
      nova(70); y += 14; fonte("bold", 10.5, GRN); doc.text(limpa(t).toUpperCase(), M, y + 10); y += 16;
      doc.setDrawColor(LIN[0], LIN[1], LIN[2]); doc.setLineWidth(0.8); doc.line(M, y, W - M, y); y += 10;
    };
    const periodo = (ini, fim) => [txt(ini).trim(), txt(fim).trim()].filter(Boolean).join(" - ");
    const bullets = desc => {
      txt(desc).split("\n").map(s => s.replace(/^[\s\-\u2022*]+/, "").trim()).filter(Boolean).forEach(b => {
        fonte("normal", 10, INK);
        doc.splitTextToSize(limpa(b), CW - 14).forEach((l, i) => {
          nova(14.5);
          if (i === 0) { doc.setFillColor(GRN[0], GRN[1], GRN[2]); doc.circle(M + 3, y + 7, 1.5, "F"); }
          doc.text(l, M + 12, y + 10); y += 14.5;
        });
      });
    };
    const entrada = (tit, sub, datas, desc) => {
      nova(50);
      fonte("normal", 9.5, MUT);
      const wd = datas ? doc.getTextWidth(limpa(datas)) : 0;
      if (datas) { doc.text(limpa(datas), W - M - wd, y + 11); }
      fonte("bold", 11, INK);
      doc.splitTextToSize(limpa(tit), CW - wd - 14).forEach(l => { doc.text(l, M, y + 11); y += 15; });
      if (txt(sub).trim()) { par(sub, 10, "italic", MUT, M, CW); }
      bullets(desc);
      y += 8;
    };
    const cheio = (a, k) => a.filter(x => x && (x[k] || "").toString().trim());

    /* Topo: nome, cargo, contato e foto (opcional) */
    if (foto) { try { doc.addImage(foto, "JPEG", W - M - 72, M, 72, 72); } catch (e) {} }
    par(c.nome, 24, "bold", INK, M, HW);
    if (txt(c.cargo).trim()) { par(c.cargo, 13, "normal", GRN, M, HW); }
    y += 4;
    const local = [txt(c.end).trim(), txt(c.cidade).trim()].filter(Boolean).join(", ");
    const cont = [local, c.tel, c.email, c.link].map(txt).map(s => s.trim()).filter(Boolean).join("   |   ");
    if (cont) { par(cont, 9.5, "normal", MUT, M, HW); }
    const cnh = CNHS.indexOf(c.cnh) > -1 ? X.cnh + ": " + c.cnh : "";
    const extra = [txt(c.nasc).trim() ? X.nasc + ": " + c.nasc.trim() : "", txt(c.nac).trim() ? Hd[6] + ": " + c.nac.trim() : "", txt(c.sit).trim() ? Hd[7] + ": " + c.sit.trim() : "", cnh].filter(Boolean).join("   |   ");
    if (extra) { par(extra, 9.5, "normal", MUT, M, HW); }
    if (foto) { y = Math.max(y, M + 80); }
    y += 8; doc.setDrawColor(GRN[0], GRN[1], GRN[2]); doc.setLineWidth(2); doc.line(M, y, M + 48, y); y += 4;

    if (txt(c.resumo).trim()) { sec(Hd[0]); par(c.resumo, 10.5, "normal", INK, M, CW); }
    const exps = (c.exp || []).filter(e => txt(e.cargo).trim() || txt(e.emp).trim());
    if (exps.length) {
      sec(Hd[1]);
      exps.forEach(e => entrada(txt(e.cargo).trim() || txt(e.emp).trim(), txt(e.cargo).trim() ? [txt(e.emp).trim(), txt(e.local).trim()].filter(Boolean).join(" - ") : txt(e.local).trim(), periodo(e.ini, e.atual ? Hd[5] : e.fim), e.desc));
    }
    const forms = (c.form || []).filter(f => txt(f.curso).trim() || txt(f.inst).trim());
    if (forms.length) {
      sec(Hd[2]);
      forms.forEach(f => {
        let niv = NV[Number(f.nivel) || 0] || ""; if (niv.toLowerCase() === txt(f.curso).trim().toLowerCase()) { niv = ""; }
        entrada(txt(f.curso).trim() || txt(f.inst).trim(), [niv, txt(f.curso).trim() ? txt(f.inst).trim() : ""].filter(Boolean).join(" - "), periodo(f.ini, f.atual ? X.andam : f.fim), f.det);
      });
    }
    const certs = cheio(c.cert || [], "nome");
    if (certs.length) {
      sec(X.cursos);
      certs.forEach(k => entrada(k.nome.trim(), [txt(k.inst).trim(), txt(k.carga).trim() ? txt(k.carga).trim() + " " + X.horas : ""].filter(Boolean).join(" - "), txt(k.ano).trim(), ""));
    }
    const idis = (c.idi || []).filter(i => txt(i.nome).trim()).map(i => i.nome.trim() + " (" + T[32 + i.nivel] + ")");
    if (idis.length) { sec(Hd[3]); par(idis.join("   |   "), 10.5, "normal", INK, M, CW); }
    const habs = txt(c.hab).split(/[,;\n]/).map(s => s.trim()).filter(Boolean);
    if (habs.length) { sec(Hd[4]); par(habs.join("   |   "), 10.5, "normal", INK, M, CW); }
    const disp = [txt(c.disp).trim(), c.mud ? X.mud : "", c.viaj ? X.viaj : ""].filter(Boolean).join("   |   ");
    if (disp) { sec(X.disp); par(disp, 10.5, "normal", INK, M, CW); }
    if (txt(c.extra).trim()) { sec(X.extra); bullets(c.extra); }
    const refs = cheio(c.ref || [], "nome");
    if (refs.length) {
      sec(X.ref);
      refs.forEach(r => entrada(r.nome.trim(), [txt(r.cargo).trim(), txt(r.cont).trim()].filter(Boolean).join(" - "), "", ""));
    }

    const n = doc.getNumberOfPages();
    if (n > 1) { for (let i = 1; i <= n; i++) { doc.setPage(i); fonte("normal", 8.5, MUT); doc.text(limpa(c.nome) + " - " + i + "/" + n, W / 2, HH - 24, { align: "center" }); } }
    const nome = limpa(c.nome).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "curriculo";
    doc.save("cv-" + nome + ".pdf");
    return true;
  } catch (e) { return false; }
}

function Campo(p) {
  return h("label", { className: "cp" },
    p.rot,
    p.area ? h("textarea", { rows: p.rows || 4, value: p.v, placeholder: p.ph, maxLength: 900, onChange: e => p.on(e.target.value) })
           : h("input", { type: p.tipo || "text", value: p.v, placeholder: p.ph, maxLength: 140, disabled: p.off, autoComplete: p.ac, onChange: e => p.on(e.target.value) }),
    p.dica ? h("small", null, p.dica) : null);
}

function Curriculo(p) {
  const u = p.d.ui, [cv, setCv] = useState(lerCv), [passo, setPasso] = useState(0), [aviso, setAviso] = useState("");
  useEffect(() => { try { localStorage.setItem("curriculo", JSON.stringify(cv)); } catch (e) {} }, [cv]);
  const set = (k, v) => setCv(c => Object.assign({}, c, { [k]: v }));
  const lista = (k, i, campo, v) => setCv(c => Object.assign({}, c, { [k]: c[k].map((x, j) => j === i ? Object.assign({}, x, { [campo]: v }) : x) }));
  const add = (k, novo) => setCv(c => Object.assign({}, c, { [k]: c[k].concat([novo]) }));
  const del = (k, i) => setCv(c => Object.assign({}, c, { [k]: c[k].length > 1 ? c[k].filter((x, j) => j !== i) : CV0[k] }));
  const ULT = 7;
  const ir = n => { if (n > 0 && !cv.nome.trim()) { setAviso(u.cv_obrig); setPasso(0); return; } setAviso(""); setPasso(n); window.scrollTo(0, 0); };
  const baixar = () => { if (!cv.nome.trim()) { setAviso(u.cv_obrig); setPasso(0); return; } setAviso(gerarPdf(cv, cv.pdfLg) ? "" : u.cv_erroPdf); };
  const limpar = () => { if (window.confirm(u.cv_limpar + "?")) { setCv(CV0); try { localStorage.removeItem("curriculo"); } catch (e) {} setPasso(0); setAviso(u.cv_apagado); } };
  const rotulos = [u.cv_s1, u.cv_s2, u.cv_s3, u.cv_s4, u.cv_s7, u.cv_s5, u.cv_s8, u.cv_s6];
  const naoLatino = /[^\u0000-\u00FF\u2018\u2019\u201C\u201D\u2013\u2014\u2026]/.test(JSON.stringify(Object.assign({}, cv, { foto: "" })));
  const remover = (k, i) => h("button", { type: "button", className: "btn-x", onClick: () => del(k, i) }, h(Icon, { n: "trash" }), u.cv_rem);
  const temHab = s => cv.hab.toLowerCase().indexOf(s.toLowerCase()) > -1;
  const addHab = s => set("hab", (cv.hab.trim() ? cv.hab.trim().replace(/[,;]\s*$/, "") + ", " : "") + s);
  const lerFoto = ev => {
    const f = ev.target.files && ev.target.files[0]; ev.target.value = "";
    if (!f) { return; }
    const rd = new FileReader();
    rd.onerror = () => setAviso(u.cv_fotoErr);
    rd.onload = () => {
      const im = new Image();
      im.onerror = () => setAviso(u.cv_fotoErr);
      im.onload = () => {
        try {
          const S = 240, cn = document.createElement("canvas"); cn.width = S; cn.height = S;
          const g = cn.getContext("2d"), m = Math.min(im.width, im.height);
          g.fillStyle = "#fff"; g.fillRect(0, 0, S, S);
          g.drawImage(im, (im.width - m) / 2, (im.height - m) / 2, m, m, 0, 0, S, S);
          set("foto", cn.toDataURL("image/jpeg", 0.85)); setAviso("");
        } catch (e) { setAviso(u.cv_fotoErr); }
      };
      im.src = rd.result;
    };
    rd.readAsDataURL(f);
  };
  const feitos = [
    !!(cv.nome.trim() && (cv.tel.trim() || cv.email.trim())),
    !!cv.resumo.trim(),
    cv.exp.some(e => e.cargo.trim() || e.emp.trim()),
    cv.form.some(f => f.curso.trim() || f.inst.trim()),
    cv.cert.some(k => k.nome.trim()),
    cv.idi.some(i => i.nome.trim()) || !!cv.hab.trim(),
    !!(cv.disp.trim() || cv.extra.trim() || cv.mud || cv.viaj || cv.ref.some(r => r.nome.trim()))
  ];
  const niveis = u.cv_niveis || [];

  let corpo;
  if (passo === 0) {
    corpo = h("div", null, h("p", { className: "cv-dica" }, u.cv_contD),
      h(Campo, { rot: u.cv_nome + " *", v: cv.nome, ph: "Maria Gonzalez", ac: "name", on: v => set("nome", v) }),
      h(Campo, { rot: u.cv_cargo, v: cv.cargo, ph: "Auxiliar de cozinha", on: v => set("cargo", v) }),
      h("div", { className: "cp-2" },
        h(Campo, { rot: u.cv_cidade, v: cv.cidade, ph: "Curitiba, PR", on: v => set("cidade", v) }),
        h(Campo, { rot: u.cv_end, v: cv.end, ph: "Bairro Cajuru", ac: "street-address", on: v => set("end", v) })),
      h("div", { className: "cp-2" },
        h(Campo, { rot: u.cv_tel, v: cv.tel, tipo: "tel", ph: "(41) 99999-0000", ac: "tel", on: v => set("tel", v) }),
        h(Campo, { rot: u.cv_email, v: cv.email, tipo: "email", ph: "nome@email.com", ac: "email", on: v => set("email", v) })),
      h("div", { className: "cp-2" },
        h(Campo, { rot: u.cv_nac, v: cv.nac, ph: "Venezuelana", on: v => set("nac", v) }),
        h(Campo, { rot: u.cv_nasc, v: cv.nasc, ph: "15/03/1990", on: v => set("nasc", v) })),
      h(Campo, { rot: u.cv_link, v: cv.link, ph: "linkedin.com/in/seu-nome", on: v => set("link", v) }),
      h("div", { className: "cp-2" },
        h(Campo, { rot: u.cv_sit, v: cv.sit, ph: "CRNM válida / Protocolo de refúgio", on: v => set("sit", v) }),
        h("label", { className: "cp" }, u.cv_cnh, h("select", { value: cv.cnh, onChange: e => set("cnh", e.target.value) },
          h("option", { value: "" }, u.cv_cnh0), CNHS.map(k => h("option", { key: k, value: k }, k))))),
      h("div", { className: "cv-foto" },
        cv.foto ? h("img", { src: cv.foto, alt: "" }) : h("span", { className: "cv-foto-v", "aria-hidden": true }, h(Icon, { n: "users" })),
        h("div", null, h("strong", null, u.cv_foto), h("p", { className: "cv-mut" }, u.cv_fotoD),
          h("div", { className: "cv-foto-b" },
            h("label", { className: "btn btn-s" }, u.cv_fotoAdd, h("input", { type: "file", accept: "image/*", className: "sr", onChange: lerFoto })),
            cv.foto ? h("button", { type: "button", className: "btn-x", onClick: () => set("foto", "") }, h(Icon, { n: "trash" }), u.cv_fotoRem) : null))));
  } else if (passo === 1) {
    corpo = h(Campo, { rot: u.cv_resumo, area: true, rows: 6, v: cv.resumo, ph: "Cozinheiro com 5 anos de experiência em restaurantes. Organizado, pontual e rápido para aprender.", dica: u.cv_resumoD, on: v => set("resumo", v) });
  } else if (passo === 2) {
    corpo = h("div", null, h("p", { className: "cv-dica" }, u.cv_expD),
      cv.exp.map((e, i) => h("div", { key: i, className: "cv-item" },
        h("div", { className: "cp-2" }, h(Campo, { rot: u.cv_cargoE, v: e.cargo, ph: "Cozinheiro", on: v => lista("exp", i, "cargo", v) }), h(Campo, { rot: u.cv_emp, v: e.emp, ph: "Restaurante Sabor", on: v => lista("exp", i, "emp", v) })),
        h(Campo, { rot: u.cv_local, v: e.local, ph: "Caracas, Venezuela", on: v => lista("exp", i, "local", v) }),
        h("div", { className: "cp-2" }, h(Campo, { rot: u.cv_ini, v: e.ini, ph: "03/2019", on: v => lista("exp", i, "ini", v) }), h(Campo, { rot: u.cv_fim, v: e.fim, off: e.atual, ph: "08/2023", on: v => lista("exp", i, "fim", v) })),
        h("label", { className: "cv-chk" }, h("input", { type: "checkbox", checked: !!e.atual, onChange: ev => lista("exp", i, "atual", ev.target.checked) }), u.cv_atual),
        h(Campo, { rot: u.cv_desc, area: true, v: e.desc, ph: "Preparava refeições para 80 pessoas\nOrganizava o estoque", on: v => lista("exp", i, "desc", v) }),
        remover("exp", i))),
      h("button", { type: "button", className: "btn btn-s", onClick: () => add("exp", CV0.exp[0]) }, h(Icon, { n: "plus" }), u.cv_addExp));
  } else if (passo === 3) {
    corpo = h("div", null, h("p", { className: "cv-dica" }, u.cv_formD),
      cv.form.map((f, i) => h("div", { key: i, className: "cv-item" },
        h("div", { className: "cp-2" }, h(Campo, { rot: u.cv_curso, v: f.curso, ph: "Ensino médio completo", on: v => lista("form", i, "curso", v) }), h(Campo, { rot: u.cv_inst, v: f.inst, ph: "Colégio Bolívar", on: v => lista("form", i, "inst", v) })),
        h("label", { className: "cp" }, u.cv_nivelF, h("select", { value: Number(f.nivel) || 0, onChange: e => lista("form", i, "nivel", Number(e.target.value)) },
          niveis.map((n, k) => h("option", { key: k, value: k }, k === 0 ? u.cv_nivelSel : n)))),
        h("div", { className: "cp-2" }, h(Campo, { rot: u.cv_ini, v: f.ini, ph: "2012", on: v => lista("form", i, "ini", v) }), h(Campo, { rot: u.cv_fim, v: f.fim, off: !!f.atual, ph: "2017", on: v => lista("form", i, "fim", v) })),
        h("label", { className: "cv-chk" }, h("input", { type: "checkbox", checked: !!f.atual, onChange: ev => lista("form", i, "atual", ev.target.checked) }), u.cv_andam),
        h(Campo, { rot: u.cv_detF, area: true, rows: 3, v: txt(f.det), ph: "Diploma revalidado no Brasil\nMédia final 8,5", on: v => lista("form", i, "det", v) }),
        remover("form", i))),
      h("button", { type: "button", className: "btn btn-s", onClick: () => add("form", CV0.form[0]) }, h(Icon, { n: "plus" }), u.cv_addForm));
  } else if (passo === 4) {
    corpo = h("div", null, h("p", { className: "cv-dica" }, u.cv_certD),
      cv.cert.map((k, i) => h("div", { key: i, className: "cv-item" },
        h(Campo, { rot: u.cv_certN, v: k.nome, ph: "Manipulação de alimentos", on: v => lista("cert", i, "nome", v) }),
        h("div", { className: "cp-2" }, h(Campo, { rot: u.cv_certI, v: txt(k.inst), ph: "SENAC", on: v => lista("cert", i, "inst", v) }), h(Campo, { rot: u.cv_certC, v: txt(k.carga), tipo: "number", ph: "40", on: v => lista("cert", i, "carga", v) })),
        h(Campo, { rot: u.cv_certA, v: txt(k.ano), ph: "2022", on: v => lista("cert", i, "ano", v) }),
        remover("cert", i))),
      h("button", { type: "button", className: "btn btn-s", onClick: () => add("cert", CV0.cert[0]) }, h(Icon, { n: "plus" }), u.cv_addCert));
  } else if (passo === 5) {
    corpo = h("div", null,
      cv.idi.map((i, k) => h("div", { key: k, className: "cv-idi" },
        h(Campo, { rot: u.cv_idioma, v: i.nome, ph: "Português", on: v => lista("idi", k, "nome", v) }),
        h("label", { className: "cp" }, u.cv_nivel, h("select", { value: i.nivel, onChange: e => lista("idi", k, "nivel", Number(e.target.value)) }, [0, 1, 2, 3, 4].map(n => h("option", { key: n, value: n }, u["cv_n" + n])))),
        remover("idi", k))),
      h("button", { type: "button", className: "btn btn-s", onClick: () => add("idi", { nome: "", nivel: 2 }) }, h(Icon, { n: "plus" }), u.cv_addIdi),
      h("div", { style: { marginTop: "1.4rem" } }, h(Campo, { rot: u.cv_hab, area: true, rows: 3, v: cv.hab, ph: "Cozinha, atendimento ao cliente, trabalho em equipe", dica: u.cv_habD, on: v => set("hab", v) })),
      h("p", { className: "cv-mut", style: { marginBottom: ".4rem" } }, u.cv_sug),
      h("div", { className: "cv-sug" }, (u.cv_sugs || []).map(s => h("button", { key: s, type: "button", disabled: temHab(s), onClick: () => addHab(s) }, "+ " + s))));
  } else if (passo === 6) {
    corpo = h("div", null, h("p", { className: "cv-dica" }, u.cv_extD),
      h(Campo, { rot: u.cv_disp, v: cv.disp, ph: "Qualquer turno, finais de semana, início imediato", on: v => set("disp", v) }),
      h("label", { className: "cv-chk" }, h("input", { type: "checkbox", checked: !!cv.mud, onChange: ev => set("mud", ev.target.checked) }), u.cv_mud),
      h("label", { className: "cv-chk" }, h("input", { type: "checkbox", checked: !!cv.viaj, onChange: ev => set("viaj", ev.target.checked) }), u.cv_viaj),
      h(Campo, { rot: u.cv_extra, area: true, rows: 4, v: cv.extra, ph: "Trabalho voluntário na igreja\nPrêmio de melhor funcionário 2022", on: v => set("extra", v) }),
      h("h3", { className: "cv-sub" }, u.cv_refT), h("p", { className: "cv-dica" }, u.cv_refD),
      cv.ref.map((r, i) => h("div", { key: i, className: "cv-item" },
        h("div", { className: "cp-2" }, h(Campo, { rot: u.cv_refN, v: r.nome, ph: "Carlos Pereira", on: v => lista("ref", i, "nome", v) }), h(Campo, { rot: u.cv_refC, v: txt(r.cargo), ph: "Gerente, Restaurante Sabor", on: v => lista("ref", i, "cargo", v) })),
        h(Campo, { rot: u.cv_refK, v: txt(r.cont), ph: "(41) 98888-0000", on: v => lista("ref", i, "cont", v) }),
        remover("ref", i))),
      h("button", { type: "button", className: "btn btn-s", onClick: () => add("ref", CV0.ref[0]) }, h(Icon, { n: "plus" }), u.cv_addRef));
  } else {
    corpo = h("div", null, h("h2", null, u.cv_pronto), h("p", { className: "cv-dica" }, u.cv_prontoD),
      h("div", { className: "cv-res" }, h("strong", null, cv.nome || "-"), cv.cargo ? h("span", null, cv.cargo) : null, h("span", { className: "cv-mut" }, [cv.cidade, cv.tel, cv.email].filter(Boolean).join(" | "))),
      h("p", { className: "cv-q" }, u.cv_comp),
      h("ul", { className: "cv-lista" }, feitos.map((ok, i) => h("li", { key: i, className: ok ? "ok" : "" }, h("span", { "aria-hidden": true }, ok ? "✓" : "–"), rotulos[i]))),
      h("label", { className: "cp" }, u.cv_idPdf, h("select", { value: cv.pdfLg, onChange: e => set("pdfLg", e.target.value) }, LANGS.map(l => h("option", { key: l[0], value: l[0] }, l[1]))), h("small", null, u.cv_idPdfD)),
      naoLatino ? h("p", { className: "cv-av" }, u.cv_latim) : null,
      h("button", { type: "button", className: "btn btn-a", onClick: baixar }, h(Icon, { n: "download" }), u.cv_baixar),
      h("p", { className: "cv-priv" }, u.cv_priv));
  }

  return h("div", null, h(Cab, { t: u.cv_t, d: u.cv_d }),
    h("div", { className: "w sec" },
      h("ol", { className: "cv-passos", "aria-label": u.cv_t }, rotulos.map((l, i) => h("li", { key: i, className: i === passo ? "on" : i < passo ? "feito" : "" },
        h("button", { type: "button", "aria-current": i === passo ? "step" : undefined, onClick: () => ir(i) }, h("span", null, i + 1), l)))),
      h("div", { className: "cv-caixa" },
        h("div", { className: "cv-topo" },
          h("p", { className: "cv-q" }, u.cv_passoDe.replace("{n}", passo + 1).replace("{m}", rotulos.length)),
          h("button", { type: "button", className: "btn-x", onClick: limpar }, h(Icon, { n: "trash" }), u.cv_limpar)),
        aviso ? h("p", { className: "cv-err", role: "alert" }, aviso) : null,
        corpo,
        passo < ULT ? h("div", { className: "cv-nav" },
          h("button", { type: "button", className: "btn btn-s", disabled: passo === 0, onClick: () => ir(passo - 1) }, h(Icon, { n: "back" }), u.cv_ant),
          h("button", { type: "button", className: "btn btn-p", onClick: () => ir(passo + 1) }, u.cv_prox, h(Icon, { n: "arrow" }))) :
          h("div", { className: "cv-nav" }, h("button", { type: "button", className: "btn btn-s", onClick: () => ir(passo - 1) }, h(Icon, { n: "back" }), u.cv_ant)))));
}

/* ---------- Empregos ---------- */
function Empregos(p) {
  const u = p.d.ui, D = EMPD[p.lg], grupos = [["of", u.em_gOf], ["mig", u.em_gMig], ["vag", u.em_gVag], ["rh", u.em_gRh]];
  const ext = { target: "_blank", rel: "noopener noreferrer" };
  return h("div", null, h(Cab, { t: u.em_t, d: u.em_d }),
    h("div", { className: "w sec" },
      grupos.map(g => h("section", { key: g[0], className: "emp-g" }, h("h2", null, g[1]), g[0] === "rh" ? h("p", { className: "emp-sub" }, u.em_rhN) : null,
        h("div", { className: "emp-grade" }, EMP.map((s, i) => s[0] !== g[0] ? null : h("article", { key: s[1], className: "emp-c" },
          h("h3", null, s[1]), h("p", null, D[i]),
          s[2] ? h("a", Object.assign({ className: "btn btn-p", href: s[2] }, ext), u.em_abrir, h(Icon, { n: "ext" })) : h("p", { className: "emp-sem" }, u.em_semSite)))))),
      h("p", { className: "emp-nota" }, u.em_externo),
      h("section", { className: "emp-alerta" }, h("h2", null, h(Icon, { n: "alert" }), u.em_antesT),
        h("ul", null, [1, 2, 3, 4, 5].map(n => h("li", { key: n }, u["em_f" + n])))),
      h("section", { className: "emp-ajuda" }, h("h2", null, u.em_ajT), h("p", null, u.em_ajD),
        h("div", { className: "emp-btns" },
          h("a", Object.assign({ className: "btn btn-p", href: "https://ipe.sit.trabalho.gov.br/#!/" }, ext), u.em_ipe, h(Icon, { n: "ext" })),
          h("a", { className: "btn btn-o", href: "tel:100" }, h(Icon, { n: "phone" }), u.em_d100))),
      h("div", { className: "emp-atalhos" },
        h("button", { className: "link", onClick: () => p.ir("curriculo") }, u.em_cvLink, h(Icon, { n: "arrow" })),
        h("button", { className: "link", onClick: () => p.ir("documentos") }, u.em_docLink, h(Icon, { n: "arrow" })))));
}

function Idioma(p) {
  const [ab, setAb] = useState(false);
  useEffect(() => {
    if (!ab) { return; }
    const f = e => { if (e.type === "keydown") { if (e.key === "Escape") { setAb(false); } } else if (!e.target.closest(".idioma")) { setAb(false); } };
    document.addEventListener("click", f); document.addEventListener("keydown", f);
    return () => { document.removeEventListener("click", f); document.removeEventListener("keydown", f); };
  }, [ab]);
  const atual = LANGS.filter(l => l[0] === p.lg)[0];
  return h("div", { className: "idioma" },
    h("button", { className: "idioma-b", "aria-haspopup": "listbox", "aria-expanded": ab, "aria-label": p.rotulo + ": " + atual[1], onClick: () => setAb(!ab) }, h(Icon, { n: "globe" }), atual[1]),
    ab ? h("ul", { className: "idioma-l", role: "listbox" }, LANGS.map(l => h("li", { key: l[0] },
      h("button", { role: "option", "aria-selected": l[0] === p.lg, lang: l[0], className: l[0] === p.lg ? "on" : "", onClick: () => { p.trocar(l[0]); setAb(false); } }, l[1])))) : null);
}

/* ---------- Chatbot ---------- */
function Chat(p) {
  const d = p.d, u = d.ui, log = useRef(null), inp = useRef(null), [txt, setTxt] = useState("");
  useEffect(() => { if (log.current) { log.current.scrollTop = log.current.scrollHeight; } }, [p.msgs, p.dig, p.aberto]);
  useEffect(() => {
    if (!p.aberto) { return; }
    if (inp.current && window.matchMedia && matchMedia("(pointer: fine)").matches) { inp.current.focus({ preventScroll: true }); }
    const f = e => { if (e.key === "Escape") { p.abrir(false); } };
    document.addEventListener("keydown", f);
    return () => document.removeEventListener("keydown", f);
  }, [p.aberto]);

  if (!p.aberto) {
    return h("aside", { className: "chat", "aria-label": u.assist },
      h("button", { className: "fab", "aria-expanded": false, onClick: () => p.abrir(true) }, h(Icon, { n: "chat" }), u.fab));
  }
  const vistas = {};
  p.msgs.forEach(m => { if (m.a === "user") { vistas[m.t] = 1; } });
  const opcoes = !p.topico
    ? h("div", { className: "ch-temas" }, Object.keys(d.topicos).map(k => h("button", { key: k, onClick: () => p.escolher(k) }, h(Icon, { n: ICONE_CARTAO[k] }), d.topicos[k].nome)))
    : h("div", { className: "ch-perg" }, h("p", { className: "ch-lab" }, u.outras),
        d.topicos[p.topico].perguntas.map(q => h("button", { key: q.p, className: vistas[q.p] ? "vista" : "", onClick: () => p.perguntar(q, p.topico) }, q.p)),
        h("button", { className: "menu", onClick: p.voltar }, h(Icon, { n: "back" }), u.menu));

  return h("aside", { className: "chat", "aria-label": u.assist }, h("div", { className: "ch" },
    h("header", { className: "ch-top" },
      h("span", { className: "ch-av", "aria-hidden": true }, h(Icon, { n: "chat" })),
      h("div", { className: "ch-t" }, h("strong", null, u.assist), h("span", null, u.chatSub)),
      h("button", { className: "ic-btn", "aria-label": u.novo, title: u.novo, onClick: () => p.reiniciar() }, h(Icon, { n: "refresh" })),
      h("button", { className: "ic-btn", "aria-label": u.minA, title: u.minA, onClick: () => p.abrir(false) }, h(Icon, { n: "minus" }))),
    h("div", { className: "ch-log", ref: log, role: "log", "aria-live": "polite" },
      p.msgs.map((m, i) => h("div", { key: i, className: "msg " + m.a },
        m.t,
        m.acao ? h("div", null, h("button", { className: "msg-acao", onClick: () => p.ir(m.acao) }, m.acao === "documentos" ? u.irDoc : u.irCid, h(Icon, { n: "arrow" }))) : null,
        m.sug ? h("div", { className: "sug" }, m.sug.map(s => h("button", { key: s.item.p, onClick: () => p.perguntar(s.item, s.chave) }, s.item.p))) : null)),
      p.dig ? h("div", { className: "msg bot dig", role: "status", "aria-label": u.dig }, h("i"), h("i"), h("i")) : null),
    h("div", { className: "ch-opc" }, opcoes),
    h("form", { className: "ch-form", onSubmit: e => { e.preventDefault(); if (txt.trim()) { p.enviar(txt.trim()); setTxt(""); } } },
      h("input", { ref: inp, value: txt, onChange: e => setTxt(e.target.value), placeholder: u.ph, "aria-label": u.ph, maxLength: 200 }),
      h("button", { type: "submit", "aria-label": u.enviar }, h(Icon, { n: "send" }))),
    h("p", { className: "ch-emerg" }, u.emerg)));
}

/* ---------- App ---------- */
function App() {
  const [aba, setAba] = useState(() => { const x = location.hash.slice(1); return ABAS.some(b => b[0] === x) ? x : "inicio"; });
  const [aberto, setAberto] = useState(() => { try { return localStorage.getItem("chatAberto") === "1"; } catch (e) { return false; } });
  const [lg, setLg] = useState(lgInicial);
  const [tema, setTema] = useState(() => document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
  const D = dados(lg), u = D.ui;
  const [msgs, setMsgs] = useState(() => [{ a: "bot", t: dados(lgInicial()).ui.intro }]);
  const [topico, setTopico] = useState(null), [dig, setDig] = useState(false);
  const pend = useRef(0), ger = useRef(0);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    const m = document.querySelector('meta[name="theme-color"]'); if (m) { m.setAttribute("content", tema === "dark" ? "#0d1612" : "#0e3b2e"); }
  }, [tema]);
  const alternar = () => { const n = tema === "dark" ? "light" : "dark"; setTema(n); try { localStorage.setItem("tema", n); } catch (e) {} };
  useEffect(() => { document.documentElement.lang = HTMLLANG[lg]; document.title = u.marca; }, [lg]);
  useEffect(() => { const a = document.querySelector(".abas .on"); if (a && a.scrollIntoView) { try { a.scrollIntoView({ inline: "center", block: "nearest" }); } catch (e) {} } }, [aba, lg]);

  const ir = id => { setAba(id); try { history.replaceState(null, "", "#" + id); } catch (e) {} window.scrollTo(0, 0); };
  const abrir = v => { setAberto(v); try { localStorage.setItem("chatAberto", v ? "1" : "0"); } catch (e) {} };
  const reduz = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const user = t => setMsgs(l => l.concat([{ a: "user", t }]));
  const bot = m => { /* mostra "digitando" por um instante antes da resposta */
    const g = ger.current; pend.current++; setDig(true);
    setTimeout(() => { if (g !== ger.current) { return; } pend.current--; setDig(pend.current > 0); setMsgs(l => l.concat([Object.assign({ a: "bot" }, m)])); }, reduz ? 0 : 550);
  };
  const reiniciar = l => { ger.current++; pend.current = 0; setDig(false); setTopico(null); setMsgs([{ a: "bot", t: dados(l || lg).ui.intro }]); };
  const trocar = l => { setLg(l); try { localStorage.setItem("idioma", l); } catch (e) {} reiniciar(l); };
  const escolher = k => { abrir(true); user(D.topicos[k].nome); bot({ t: u.sobre.replace("{t}", D.topicos[k].nome.toLowerCase()) }); setTopico(k); };
  const perguntar = (q, k) => { user(q.p); bot({ t: q.r, acao: ACAO[k] }); setTopico(k); };
  const voltar = () => { user(u.menu); bot({ t: u.claro }); setTopico(null); };
  const enviar = tx => {
    user(tx);
    const r = buscar(tx, D.topicos, topico);
    if (r.length && r[0].s >= 3 && (!r[1] || r[0].s > r[1].s)) { bot({ t: r[0].item.r, acao: ACAO[r[0].chave] }); setTopico(r[0].chave); }
    else { bot({ t: u.parecido, sug: r.length ? r.slice(0, 3) : Object.keys(D.topicos).map(k => ({ chave: k, item: D.topicos[k].perguntas[0] })) }); }
  };

  const pp = { key: lg, d: D, lg, ir, abrir, escolher };
  const pagina = aba === "cidade" ? h(Cidade, pp) : aba === "turismo" ? h(Turismo, pp) : aba === "documentos" ? h(Documentos, pp) : aba === "curriculo" ? h(Curriculo, pp) : aba === "empregos" ? h(Empregos, pp) : h(Inicio, pp);
  return h(React.Fragment, null,
    h("a", { className: "pular", href: "#conteudo", onClick: e => { e.preventDefault(); const m = document.getElementById("conteudo"); if (m) { m.focus(); } } }, u.pular),
    h("header", { className: "topo" }, h("div", { className: "w topo-in" },
      h("button", { className: "marca", onClick: () => ir("inicio") }, h("span", { className: "marca-i" }, h(Icon, { n: "arauc" })), u.marca),
      h("nav", { className: "abas", "aria-label": u.nav }, D.abas.map(b => h("button", { key: b[0], className: aba === b[0] ? "on" : "", "aria-current": aba === b[0] ? "page" : undefined, onClick: () => ir(b[0]) }, b[1]))),
      h("div", { className: "topo-d" }, h(Idioma, { lg, trocar, rotulo: u.idioma }),
        h("button", { type: "button", className: "tema-b", "aria-label": tema === "dark" ? u.temaC : u.temaE, title: tema === "dark" ? u.temaC : u.temaE, onClick: alternar }, h(Icon, { n: tema === "dark" ? "sol" : "lua" }))))),
    h("main", { id: "conteudo", tabIndex: -1 }, pagina),
    h("footer", { className: "rodape" }, h("div", { className: "w" }, h("strong", null, u.marca), h("p", null, u.rodape), h("p", null, u.emerg))),
    h(Chat, { d: D, aberto, abrir, msgs, topico, dig, escolher, perguntar, voltar, enviar, reiniciar, ir }));
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
