import { Link } from "react-router-dom";
import { getCurrentLang } from "@/config/routes";
import { useLocation } from "react-router-dom";

const i18n: Record<string, { writtenBy: string; credentials: string; aboutPath: string }> = {
  fr: { writtenBy: "Rédigé par", credentials: "MBA INSEAD · Expert Santé & Finance", aboutPath: "/a-propos" },
  en: { writtenBy: "Written by", credentials: "MBA INSEAD · Health & Finance Expert", aboutPath: "/about" },
  es: { writtenBy: "Escrito por", credentials: "MBA INSEAD · Experto en Salud y Finanzas", aboutPath: "/about" },
  pt: { writtenBy: "Escrito por", credentials: "MBA INSEAD · Especialista em Saúde e Finanças", aboutPath: "/about" },
  de: { writtenBy: "Verfasst von", credentials: "MBA INSEAD · Gesundheits- & Finanzexperte", aboutPath: "/about" },
  it: { writtenBy: "Scritto da", credentials: "MBA INSEAD · Esperto di Salute e Finanza", aboutPath: "/about" },
  hi: { writtenBy: "लेखक", credentials: "MBA INSEAD · स्वास्थ्य और वित्त विशेषज्ञ", aboutPath: "/about" },
  zh: { writtenBy: "作者", credentials: "MBA INSEAD · 健康与金融专家", aboutPath: "/about" },
  ar: { writtenBy: "بقلم", credentials: "MBA INSEAD · خبير في الصحة والمالية", aboutPath: "/about" },
};

export const AuthorByline = () => {
  const location = useLocation();
  const lang = getCurrentLang(location.pathname);
  const t = i18n[lang] || i18n.en;

  return (
    <div className="mt-10 flex items-center gap-4 rounded-lg border border-border bg-muted/30 px-5 py-4">
      <img
        src="/team/mottalib-radif.jpg"
        alt="Mottalib Radif"
        className="h-12 w-12 rounded-full object-cover"
        width={48}
        height={48}
        loading="lazy"
      />
      <div className="text-sm">
        <p className="font-semibold">
          {t.writtenBy}{" "}
          <Link to={t.aboutPath} className="text-primary hover:underline">
            Mottalib Radif
          </Link>
        </p>
        <p className="text-muted-foreground">{t.credentials}</p>
      </div>
    </div>
  );
};
