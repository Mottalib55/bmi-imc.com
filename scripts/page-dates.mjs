/**
 * page-dates.mjs — date réelle de dernière modification de chaque page (RECETTE §8.4).
 *
 * Lancé avant la construction. La date d'une route est celle du dernier commit
 * ayant touché le composant qui la rend. Elle n'est jamais inventée : sans
 * historique git, on garde le fichier déjà commité plutôt que d'écrire une date
 * fausse ou de tout effacer.
 *
 * Écrit `src/data/page-dates.json` : { "/route/": "AAAA-MM-JJ" }.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const cible = join(root, "src", "data", "page-dates.json");
mkdirSync(join(root, "src", "data"), { recursive: true });

let dernier;
try {
  dernier = new Map();
  const journal = execFileSync("git", ["log", "--format=@%cs", "--name-only"], {
    cwd: root, encoding: "utf8", maxBuffer: 1 << 28,
  });
  let courante = "";
  for (const ligne of journal.split("\n")) {
    if (ligne.startsWith("@")) courante = ligne.slice(1);
    else if (ligne && !dernier.has(ligne)) dernier.set(ligne, courante);
  }
} catch {
  if (existsSync(cible)) {
    const n = Object.keys(JSON.parse(readFileSync(cible, "utf8"))).length;
    console.log(`page-dates : pas d'historique git, on garde les ${n} date(s) commitée(s)`);
  } else {
    writeFileSync(cible, "{}\n");
    console.log("page-dates : pas d'historique git et aucun fichier commité");
  }
  process.exit(0);
}

const aujourdhui = new Date().toISOString().slice(0, 10);
const modifies = new Set(
  execFileSync("git", ["status", "--porcelain"], { cwd: root, encoding: "utf8" })
    .split("\n").filter(Boolean).map((l) => l.slice(3).replace(/^"|"$/g, "")),
);

// Chaque route est rendue par un composant de src/pages : on associe les deux
// par le chemin déclaré dans App.tsx.
const app = readFileSync(join(root, "src", "App.tsx"), "utf8");
const composants = new Map();
const fichiers = [];
const parcourir = (dir) => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) { parcourir(p); continue; }
    if (!/\.tsx?$/.test(e)) continue;
    fichiers.push(relative(root, p).split(sep).join("/"));
    composants.set(e.replace(/\.tsx?$/, ""), relative(root, p).split(sep).join("/"));
  }
};
parcourir(join(root, "src", "pages"));

const routes = {};
for (const m of app.matchAll(/path="([^"]+)"\s+element=\{<(\w+)/g)) {
  const chemin = m[1] === "/" ? "/" : `/${m[1].replace(/^\/|\/$/g, "")}/`;
  const f = composants.get(m[2]);
  if (!f) continue;
  const d = modifies.has(f) ? aujourdhui : dernier.get(f);
  if (d) routes[chemin] = d;
}

writeFileSync(cible, JSON.stringify(routes, null, 2) + "\n");
console.log(`page-dates : ${Object.keys(routes).length} route(s) datée(s)`);
