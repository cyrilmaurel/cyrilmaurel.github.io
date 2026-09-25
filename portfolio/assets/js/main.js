/* Rendu commun : menu, pied de page, listes générées depuis data.js.
   Normalement tu n'as pas besoin de modifier ce fichier. */

const ROOT = document.body.dataset.root || "";
const PAGE = document.body.dataset.page || "";

const CADRES = {
  formation: "Réalisation en cours de formation",
  pro1: "Réalisations en milieu professionnel en cours de première année",
  pro2: "Réalisations en milieu professionnel en cours de seconde année"
};
const CADRE_COURT = { formation: "Formation", pro1: "Entreprise · 1re année", pro2: "Entreprise · 2e année" };

const ALL_COMP = [...COMPETENCES_E5, ...COMPETENCES_E6];
const compByCode = code => ALL_COMP.find(c => c.code === code);
const esc = s => String(s ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const periode = r => (r.debut || r.fin) ? `du ${esc(r.debut || "…")} au ${esc(r.fin || "…")}` : "Dates à compléter";
const etatClass = e => ({ "terminée": "ok", "en cours": "wip" }[e] || "todo");

/* ---------- Menu + pied de page ---------- */
function renderChrome() {
  const links = [
    ["index", "Accueil", "index.html"],
    ["parcours", "Parcours", "parcours.html"],
    ["entreprise", "Alternance", "entreprise.html"],
    ["realisations", "Réalisations", "realisations.html"],
    ["synthese", "Tableau de synthèse", "synthese.html"],
    ["veille", "Veille", "veille.html"],
    ["print", "Version PDF", "print.html"]
  ];
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="wrap header-inner">
      <a class="brand" href="${ROOT}index.html">
        <span class="brand-mark" aria-hidden="true">${esc(PROFIL.prenom[0])}${esc(PROFIL.nom[0])}</span>
        <span>${esc(PROFIL.prenom)} ${esc(PROFIL.nom)}</span>
      </a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav">Menu</button>
      <nav id="nav" class="nav">
        ${links.map(([id, label, href]) =>
          `<a href="${ROOT}${href}"${PAGE === id ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
      </nav>
    </div>`;
  document.body.prepend(header);
  const btn = header.querySelector(".nav-toggle");
  btn.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap footer-inner">
      <span>${esc(PROFIL.prenom)} ${esc(PROFIL.nom)} · BTS SIO option SISR · ${esc(PROFIL.session)}</span>
      <span>
        <a href="mailto:${esc(PROFIL.email)}">${esc(PROFIL.email)}</a> ·
        <a href="${esc(PROFIL.linkedin)}" target="_blank" rel="noopener">LinkedIn</a> ·
        <a href="${esc(PROFIL.github)}" target="_blank" rel="noopener">GitHub</a>
      </span>
    </div>`;
  document.body.append(footer);
}

/* ---------- Carte de réalisation ---------- */
function card(r) {
  return `
    <a class="card" href="${ROOT}realisations/${r.id}.html" data-comps="${r.competences.join(" ")}" data-epreuve="${r.epreuve}">
      <div class="card-top">
        <span class="tag tag-${r.epreuve.toLowerCase()}">${r.epreuve}</span>
        <span class="etat etat-${etatClass(r.etat)}">${esc(r.etat)}</span>
      </div>
      <h3>${esc(r.titre)}</h3>
      <p>${esc(r.resume)}</p>
      <div class="card-meta">${CADRE_COURT[r.cadre]} · ${periode(r)}</div>
      <div class="chips">${r.competences.map(c => `<span class="chip" title="${esc(compByCode(c)?.nom)}">${c}</span>`).join("")}</div>
    </a>`;
}

/* ---------- Couverture des compétences ---------- */
function coverage(list, comps) {
  return comps.map(c => ({ ...c, n: list.filter(r => r.competences.includes(c.code)).length }));
}
function coverageHtml(cov, label) {
  const ok = cov.filter(c => c.n > 0).length;
  return `
    <div class="coverage">
      <div class="coverage-head"><strong>${label}</strong><span class="${ok === cov.length ? "good" : "warn"}">${ok}/${cov.length} compétences couvertes</span></div>
      <div class="coverage-grid">
        ${cov.map(c => `<div class="cov ${c.n ? "on" : "off"}" title="${esc(c.nom)}"><b>${c.code}</b><span>${esc(c.court)}</span><em>${c.n} réal.</em></div>`).join("")}
      </div>
    </div>`;
}

/* ---------- Page Réalisations ---------- */
function renderRealisations(el) {
  const e5 = REALISATIONS.filter(r => r.epreuve === "E5");
  const e6 = REALISATIONS.filter(r => r.epreuve === "E6");
  el.innerHTML = `
    ${coverageHtml(coverage(e5, COMPETENCES_E5), "Épreuve E5")}
    ${coverageHtml(coverage(e6, COMPETENCES_E6), "Épreuve E6 SISR")}
    <div class="filters" role="group" aria-label="Filtrer par compétence">
      <button class="filter active" data-f="all">Toutes</button>
      <button class="filter" data-f="E5">E5</button>
      <button class="filter" data-f="E6">E6</button>
      ${ALL_COMP.map(c => `<button class="filter" data-f="${c.code}" title="${esc(c.nom)}">${c.code}</button>`).join("")}
    </div>
    <section class="real-group">
      <h2 class="section-title">Épreuve E5 · portfolio</h2>
      <div class="cards">${e5.map(card).join("")}</div>
    </section>
    <section class="real-group">
      <h2 class="section-title">Épreuve E6 · réalisations techniques</h2>
      <p class="small">L’E6 s’appuie sur un dossier numérique distinct (fiches descriptives officielles). Ces réalisations sont aussi présentées ici pour regrouper mon travail.</p>
      <div class="cards">${e6.map(card).join("")}</div>
    </section>`;
  el.querySelectorAll(".filter").forEach(b => b.addEventListener("click", () => {
    el.querySelectorAll(".filter").forEach(x => x.classList.toggle("active", x === b));
    const f = b.dataset.f;
    el.querySelectorAll(".card").forEach(c => {
      const show = f === "all" || c.dataset.epreuve === f || c.dataset.comps.split(" ").includes(f);
      c.hidden = !show;
    });
    el.querySelectorAll(".real-group").forEach(g => { g.hidden = !g.querySelector(".card:not([hidden])"); });
  }));
}

/* ---------- Page Tableau de synthèse (modèle officiel annexe 8-1) ---------- */
function renderSynthese(el) {
  const e5 = REALISATIONS.filter(r => r.epreuve === "E5");
  const cov = coverage(e5, COMPETENCES_E5);
  const url = new URL(ROOT || "./", location.href).href;
  const section = key => {
    const rows = e5.filter(r => r.cadre === key);
    return `
      <tr class="group"><th colspan="8">${CADRES[key]}</th></tr>
      ${rows.length ? rows.map(r => `
        <tr>
          <td class="titre"><a href="${ROOT}realisations/${r.id}.html">${esc(r.titre)}</a>
            <small>${r.documents.map(esc).join(" · ")}</small></td>
          <td class="per">${(r.debut || r.fin) ? `${esc(r.debut)} au ${esc(r.fin)}` : "—"}</td>
          ${COMPETENCES_E5.map(c => `<td class="x">${r.competences.includes(c.code) ? "X" : ""}</td>`).join("")}
        </tr>`).join("") : `<tr><td colspan="8" class="empty">Aucune réalisation pour l’instant</td></tr>`}`;
  };
  el.innerHTML = `
    <div class="synth-id">
      <div><span>NOM et prénom</span><strong>${esc(PROFIL.nom)} ${esc(PROFIL.prenom)}</strong></div>
      <div><span>Centre de formation</span><strong>${esc(PROFIL.etablissement)}</strong></div>
      <div><span>Option</span><strong>SISR</strong></div>
      <div><span>Adresse URL du portfolio</span><strong>${esc(url)}</strong></div>
    </div>
    <div class="table-scroll">
      <table class="synth">
        <thead>
          <tr>
            <th class="titre">Réalisations professionnelles<br><small>intitulé et documents associés</small></th>
            <th class="per">Période</th>
            ${COMPETENCES_E5.map(c => `<th class="comp"><span>${c.code}</span>${esc(c.nom)}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${section("formation")}${section("pro1")}${section("pro2")}
        </tbody>
        <tfoot>
          <tr><th colspan="2">Nombre de réalisations par compétence</th>
            ${cov.map(c => `<td class="x ${c.n ? "" : "missing"}">${c.n}</td>`).join("")}</tr>
        </tfoot>
      </table>
    </div>`;
}

/* ---------- En-tête d'une fiche de réalisation ---------- */
function renderFiche(el) {
  const id = el.dataset.real || document.body.dataset.real;
  const r = REALISATIONS.find(x => x.id === id);
  if (!r) { el.innerHTML = `<p class="empty">Réalisation introuvable : vérifie l’id dans data.js.</p>`; return; }
  if (PAGE !== "print") document.title = `${r.titre} · Portfolio ${PROFIL.prenom} ${PROFIL.nom}`;
  const comps = r.competences.map(compByCode).filter(Boolean);
  el.innerHTML = `
    <p class="eyebrow"><a href="${ROOT}realisations.html">Réalisations</a> / ${r.epreuve}</p>
    <h1>${esc(r.titre)}</h1>
    <p class="lead">${esc(r.resume)}</p>
    <dl class="facts">
      <div><dt>Période</dt><dd>${periode(r)}</dd></div>
      <div><dt>Cadre</dt><dd>${CADRE_COURT[r.cadre]}</dd></div>
      <div><dt>Épreuve</dt><dd>${r.epreuve}</dd></div>
      <div><dt>État</dt><dd><span class="etat etat-${etatClass(r.etat)}">${esc(r.etat)}</span></dd></div>
    </dl>
    <div class="comp-box">
      <h2>Compétences mobilisées</h2>
      <ul>${comps.map(c => `<li><b>${c.code}</b> ${esc(c.nom)}</li>`).join("")}</ul>
    </div>`;
}

/* ---------- Certifications ---------- */
function renderCertifs(el) {
  const cls = { "obtenue": "ok", "en cours": "wip" };
  el.innerHTML = CERTIFICATIONS.map(c => `
    <div class="cert ${c.etat === "obtenue" ? "done" : ""}">
      <span class="etat etat-${cls[c.etat] || "todo"}">${esc(c.etat)}${c.date ? " · " + esc(c.date) : ""}</span>
      <h3>${c.lien ? `<a href="${esc(c.lien)}" target="_blank" rel="noopener">${esc(c.nom)}</a>` : esc(c.nom)}</h3>
      <p class="small">${esc(c.organisme)}</p>
      <p class="small" style="margin:0">${esc(c.detail)}</p>
    </div>`).join("");
}

/* ---------- Page Veille ---------- */
function renderVeille(el) {
  el.innerHTML = `
    <section class="panel">
      <h2>Mon sujet : ${esc(VEILLE.sujet)}</h2>
      <p>${esc(VEILLE.pourquoi)}</p>
      <div class="two">
        <div><h3>Outils</h3><ul>${VEILLE.outils.map(o => `<li>${esc(o)}</li>`).join("")}</ul></div>
        <div><h3>Sources de référence</h3><ul>${VEILLE.sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.nom)}</a></li>`).join("")}</ul></div>
      </div>
    </section>
    <h2 class="section-title">Synthèses</h2>
    <div class="timeline">
      ${VEILLE.articles.map(a => `
        <article class="entry">
          <time>${esc(a.date)}</time>
          <h3>${esc(a.titre)}</h3>
          ${(a.contenu || [a.resume]).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join("")}
          ${a.sources.length ? `<p class="small">Sources : ${a.sources.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.nom)}</a>`).join(", ")}</p>` : ""}
        </article>`).join("")}
    </div>`;
}

/* ---------- Accueil : profil + aperçu ---------- */
function fillProfil(root = document) {
  root.querySelectorAll("[data-profil]").forEach(n => {
    const k = n.dataset.profil;
    if (k === "cv" && !PROFIL.cv) { n.hidden = true; return; }
    if (n.tagName === "A") n.href = k === "email" ? `mailto:${PROFIL.email}` : (k === "cv" ? ROOT + PROFIL.cv : PROFIL[k]);
    else n.textContent = k === "nomComplet" ? `${PROFIL.prenom} ${PROFIL.nom}` : PROFIL[k];
  });
}

function renderAccueil() {
  fillProfil();
  const av = document.querySelector(".avatar");
  if (av && PROFIL.photo) av.innerHTML = `<img src="${ROOT}${PROFIL.photo}" alt="Photo de ${esc(PROFIL.prenom)} ${esc(PROFIL.nom)}">`;
  const s = document.getElementById("stats");
  if (s) {
    const e5 = REALISATIONS.filter(r => r.epreuve === "E5");
    const covered = coverage(e5, COMPETENCES_E5).filter(c => c.n).length;
    const done = REALISATIONS.filter(r => r.etat === "terminée").length;
    s.innerHTML = `
      <div><strong>${REALISATIONS.length}</strong><span>réalisations recensées</span></div>
      <div><strong>${done}</strong><span>terminées</span></div>
      <div><strong>${covered}/6</strong><span>compétences E5 couvertes</span></div>`;
  }
  const latest = document.getElementById("latest");
  if (latest) latest.innerHTML = REALISATIONS.filter(r => r.epreuve === "E5").slice(0, 3).map(card).join("");
}

/* ---------- Liste simple des réalisations (version PDF) ---------- */
function renderRealList(el) {
  const block = (ep, label) => {
    const rows = REALISATIONS.filter(r => r.epreuve === ep);
    return `<h2>${label}</h2>
      <div class="table-scroll"><table class="synth" style="min-width:0">
        <thead><tr><th>Réalisation</th><th>Cadre</th><th>Période</th><th>Compétences</th></tr></thead>
        <tbody>${rows.map(r => `<tr><td class="titre"><strong>${esc(r.titre)}</strong></td>
          <td>${CADRE_COURT[r.cadre]}</td><td>${periode(r)}</td><td>${r.competences.join(", ")}</td></tr>`).join("")}</tbody>
      </table></div>`;
  };
  el.innerHTML = block("E5", "Épreuve E5") + `<div style="height:1.5rem"></div>` + block("E6", "Épreuve E6");
}

/* ---------- Version PDF : tout le portfolio sur une page ---------- */
async function buildPrint() {
  const status = document.getElementById("print-status");
  const btn = document.getElementById("print-all");
  const grab = async (url, sel) => {
    const html = await (await fetch(url, { cache: "no-store" })).text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const node = doc.querySelector(sel);
    node.querySelectorAll(".actions, .no-print, .btn").forEach(n => n.remove());
    return node;
  };
  try {
    document.getElementById("p-about").innerHTML = (await grab("index.html", "#about")).innerHTML;
    for (const [id, url] of [["p-parcours", "parcours.html"], ["p-entreprise", "entreprise.html"]]) {
      const node = await grab(url, "main");
      const box = document.getElementById(id);
      box.innerHTML = node.innerHTML;
      box.querySelector('[data-render="certifs"]')?.closest("section")?.remove();  // déjà dans la partie Certifications
      fillProfil(box);
    }
    const list = document.getElementById("p-fiches");
    for (const r of [...REALISATIONS.filter(x => x.epreuve === "E5"), ...REALISATIONS.filter(x => x.epreuve === "E6")]) {
      const node = await grab(`realisations/${r.id}.html`, "main");
      node.querySelectorAll("[src], [href]").forEach(n => {
        for (const a of ["src", "href"]) { const v = n.getAttribute(a); if (v && v.startsWith("../")) n.setAttribute(a, v.slice(3)); }
      });
      node.querySelectorAll('a[href="realisations.html"]').forEach(a => a.closest("p")?.remove());
      const sec = document.createElement("section");
      sec.className = "page-break print-fiche";
      sec.innerHTML = node.innerHTML;
      const head = sec.querySelector('[data-render="fiche"]');
      if (head) { head.dataset.real = r.id; renderFiche(head); }
      list.append(sec);
    }
    status.textContent = "Portfolio prêt : clique sur « Enregistrer en PDF », puis choisis « Enregistrer au format PDF » comme imprimante.";
    btn.disabled = false;
  } catch (e) {
    status.textContent = "Impossible de charger toutes les pages. Ouvre cette page depuis le site en ligne (pas en double-cliquant sur le fichier).";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  renderAccueil();
  const map = { "realisations-list": renderRealList, certifs: renderCertifs, realisations: renderRealisations, synthese: renderSynthese, fiche: renderFiche, veille: renderVeille };
  document.querySelectorAll("[data-render]").forEach(el => map[el.dataset.render]?.(el));
  const pdf = document.getElementById("pdf-link");
  if (pdf) pdf.href = ROOT + PROFIL.synthesePdf;
  const printBtn = document.getElementById("print");
  if (printBtn) printBtn.addEventListener("click", () => window.print());
  if (PAGE === "print") {
    document.getElementById("site-url").textContent = new URL("./", location.href).href;
    document.getElementById("print-all").addEventListener("click", () => window.print());
    buildPrint();
  }
});
