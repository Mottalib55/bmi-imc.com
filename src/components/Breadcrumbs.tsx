import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Home } from "lucide-react";
import { getCurrentLang, getPageType, routeMap, type Lang } from "@/config/routes";

const DOMAIN = "https://bmi-imc.com";

const homeLabels: Record<Lang, string> = {
  fr: "Accueil",
  en: "Home",
  es: "Inicio",
  pt: "Inicio",
  de: "Startseite",
  it: "Home",
  hi: "होम",
  zh: "首页",
  ar: "الرئيسية",
};

const pageLabels: Record<string, Record<Lang, string>> = {
  main: { fr: "Calculateur IMC", en: "BMI Calculator", es: "Calculadora IMC", pt: "Calculadora IMC", de: "BMI-Rechner", it: "Calcolatore IMC", hi: "BMI कैलकुलेटर", zh: "BMI计算器", ar: "حاسبة مؤشر كتلة الجسم" },
  men: { fr: "IMC Homme", en: "BMI Men", es: "IMC Hombre", pt: "IMC Homem", de: "BMI Männer", it: "IMC Uomo", hi: "BMI पुरुष", zh: "男性BMI", ar: "مؤشر الرجال" },
  women: { fr: "IMC Femme", en: "BMI Women", es: "IMC Mujer", pt: "IMC Mulher", de: "BMI Frauen", it: "IMC Donna", hi: "BMI महिला", zh: "女性BMI", ar: "مؤشر النساء" },
  athletes: { fr: "IMC Sportif", en: "BMI Athletes", es: "IMC Deportista", pt: "IMC Atleta", de: "BMI Sportler", it: "IMC Sportivo", hi: "BMI खिलाड़ी", zh: "运动员BMI", ar: "مؤشر الرياضيين" },
  children: { fr: "IMC Enfant", en: "BMI Children", es: "IMC Niño", pt: "IMC Criança", de: "BMI Kinder", it: "IMC Bambino", hi: "BMI बच्चे", zh: "儿童BMI", ar: "مؤشر الأطفال" },
  table: { fr: "Tableau IMC", en: "BMI Table", es: "Tabla IMC", pt: "Tabela IMC", de: "BMI-Tabelle", it: "Tabella IMC", hi: "BMI तालिका", zh: "BMI分类表", ar: "جدول المؤشر" },
  interpretation: { fr: "Interprétation", en: "Interpretation", es: "Interpretación", pt: "Interpretação", de: "Interpretation", it: "Interpretazione", hi: "व्याख्या", zh: "BMI解读", ar: "تفسير المؤشر" },
  limitations: { fr: "Limites IMC", en: "BMI Limitations", es: "Limitaciones", pt: "Limitações", de: "BMI-Grenzen", it: "Limiti IMC", hi: "BMI सीमाएं", zh: "BMI局限性", ar: "حدود المؤشر" },
  faq: { fr: "FAQ", en: "FAQ", es: "FAQ", pt: "FAQ", de: "FAQ", it: "FAQ", hi: "FAQ", zh: "常见问题", ar: "أسئلة شائعة" },
  health: { fr: "Santé et Poids", en: "Health & Weight", es: "Salud y Peso", pt: "Saúde e Peso", de: "Gesundheit", it: "Salute e Peso", hi: "स्वास्थ्य", zh: "健康与体重", ar: "الصحة والوزن" },
};

const withTrailingSlash = (path: string): string =>
  path.endsWith("/") ? path : `${path}/`;

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const lang = getCurrentLang(pathname);
  const pageType = getPageType(pathname);
  const isRtl = lang === "ar";

  if (!pageType) return null;

  const homePath = routeMap.main[lang];
  const homeLabel = homeLabels[lang];
  const currentLabel = pageLabels[pageType]?.[lang] || "";
  const currentUrl = `${DOMAIN}${withTrailingSlash(routeMap[pageType][lang])}`;

  // Don't show breadcrumbs on the main/homepage for each language
  if (pageType === "main") return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: `${DOMAIN}${withTrailingSlash(homePath)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentLabel,
        item: currentUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm text-muted-foreground"
        dir={isRtl ? "rtl" : undefined}
      >
        <ol className="flex items-center gap-1 flex-wrap">
          <li className="flex items-center gap-1">
            <Link to={homePath} className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              {homeLabel}
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5" />
            <span aria-current="page" className="text-foreground font-medium">
              {currentLabel}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
};
