import { Link } from "react-router-dom";
import { getCurrentLang } from "@/config/routes";
import { useLocation } from "react-router-dom";

const i18n: Record<string, { writtenBy: string; credentials: string; aboutPath: string }> = {
  fr: { writtenBy: "Rédigé par", credentials: "Éditeur de calculateurs et de guides pratiques", aboutPath: "/a-propos" },
  en: { writtenBy: "Written by", credentials: "Éditeur de calculateurs et de guides pratiques", aboutPath: "/about" },
  es: { writtenBy: "Escrito por", credentials: "Éditeur de calculateurs et de guides pratiques", aboutPath: "/about" },
  pt: { writtenBy: "Escrito por", credentials: "Éditeur de calculateurs et de guides pratiques", aboutPath: "/about" },
  de: { writtenBy: "Verfasst von", credentials: "Éditeur de calculateurs et de guides pratiques", aboutPath: "/about" },
  it: { writtenBy: "Scritto da", credentials: "Éditeur de calculateurs et de guides pratiques", aboutPath: "/about" },
  hi: { writtenBy: "लेखक", credentials: "Éditeur de calculateurs et de guides pratiques", aboutPath: "/about" },
  zh: { writtenBy: "作者", credentials: "Éditeur de calculateurs et de guides pratiques", aboutPath: "/about" },
  ar: { writtenBy: "بقلم", credentials: "Éditeur de calculateurs et de guides pratiques", aboutPath: "/about" },
};

export const AuthorByline = () => {
  const location = useLocation();
  const lang = getCurrentLang(location.pathname);
  const t = i18n[lang] || i18n.en;

  return (
    <div className="mt-10 flex items-center gap-4 rounded-lg border border-border bg-muted/30 px-5 py-4">
      <div className="text-sm">
        <p className="font-semibold">
          {t.writtenBy}{" "}
          <Link to={t.aboutPath} className="text-primary hover:underline">
            Radif Partners
          </Link>
        </p>
        <p className="text-muted-foreground">{t.credentials}</p>
      </div>
    </div>
  );
};
