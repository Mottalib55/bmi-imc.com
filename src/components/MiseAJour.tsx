import { useLocation } from "react-router-dom";
import { getCurrentLang } from "@/config/routes";
import { dateDePage, dateLisible, LIBELLE_MAJ } from "@/lib/page-date";

/**
 * Ligne « Mise à jour le … » (RECETTE §8.4).
 *
 * Elle se place sous le titre des pages qui n'ont pas de fil d'Ariane. La date
 * vient de l'historique git, jamais de la date du jour : une page non modifiée
 * ne doit pas paraître fraîche.
 */
export const MiseAJour = () => {
  const { pathname } = useLocation();
  const lang = getCurrentLang(pathname);
  const iso = dateDePage(pathname);
  if (!iso) return null;

  return (
    <p className="mb-6 text-xs text-muted-foreground">
      {LIBELLE_MAJ[lang] ?? LIBELLE_MAJ.fr}{" "}
      <time dateTime={iso}>{dateLisible(iso, lang)}</time>
    </p>
  );
};
