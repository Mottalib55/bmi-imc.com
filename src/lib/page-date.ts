/**
 * Date de dernière modification d'une page (RECETTE §8.4).
 *
 * `page-dates.json` est engendré avant la construction à partir de l'historique
 * git : chaque route y porte la date du dernier commit ayant touché le
 * composant qui la rend. On n'invente jamais de date — une route absente du
 * fichier n'en affiche aucune — parce qu'une date du jour sur une page non
 * modifiée est un faux signal de fraîcheur.
 */
import dates from "@/data/page-dates.json";

const table = dates as Record<string, string>;

const normaliser = (chemin: string) =>
  chemin.endsWith("/") ? chemin : `${chemin}/`;

/** Date AAAA-MM-JJ de la page, ou null si l'historique ne la donne pas. */
export function dateDePage(pathname: string): string | null {
  return table[normaliser(pathname)] ?? null;
}

const LOCALES: Record<string, string> = {
  fr: "fr-FR", en: "en-GB", es: "es-ES", pt: "pt-PT",
  de: "de-DE", it: "it-IT", ar: "ar", hi: "hi-IN", zh: "zh-CN",
};

/** Date lisible dans la langue de la page. */
export function dateLisible(iso: string, lang: string): string {
  return new Intl.DateTimeFormat(LOCALES[lang] ?? "fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  }).format(new Date(`${iso}T12:00:00Z`));
}

/** « Mise à jour le … », dans la langue de la page. */
export const LIBELLE_MAJ: Record<string, string> = {
  fr: "Mise à jour le", en: "Updated on", es: "Actualizado el", pt: "Atualizado em",
  de: "Aktualisiert am", it: "Aggiornato il", ar: "آخر تحديث", hi: "अद्यतन", zh: "更新于",
};
