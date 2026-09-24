import { useLocation } from "react-router-dom";
import { getCurrentLang, getPageType } from "@/config/routes";
import { pageResume } from "@/data/page-resume";

/**
 * Paragraphe citable en haut de page (RECETTE §21).
 *
 * Il doit vivre dans le corps de la page et non dans le <header>, que les
 * moteurs traitent comme un ornement : un paragraphe placé dedans n'est pas
 * repris, quelle que soit sa longueur.
 */
export const ResumeCitable = () => {
  const { pathname } = useLocation();
  const lang = getCurrentLang(pathname);
  const type = getPageType(pathname);
  const texte = type ? pageResume[type]?.[lang] : undefined;
  if (!texte) return null;

  return (
    <p className="mb-10 text-base leading-relaxed text-muted-foreground">
      {texte}
    </p>
  );
};
