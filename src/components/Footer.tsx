import { Link, useLocation } from "react-router-dom";
import { getCurrentLang, routeMap, type Lang } from "@/config/routes";

const i18n: Record<Lang, {
  copyright: string;
  about: string;
  legal: string;
  glossary: string;
  widget: string;
  calculator: string;
  aboutPath: string;
  legalPath: string;
}> = {
  fr: { copyright: "BMI-IMC.com - Calculateur IMC Gratuit", about: "A propos", legal: "Mentions Legales", glossary: "Glossaire", widget: "Widget", calculator: "Calculateur IMC", aboutPath: "/a-propos", legalPath: "/mentions-legales" },
  en: { copyright: "BMI-IMC.com - Free BMI Calculator", about: "About", legal: "Legal Notice", glossary: "Glossary", widget: "Widget", calculator: "BMI Calculator", aboutPath: "/about", legalPath: "/legal" },
  es: { copyright: "BMI-IMC.com - Calculadora IMC Gratis", about: "Acerca de", legal: "Aviso Legal", glossary: "Glosario", widget: "Widget", calculator: "Calculadora IMC", aboutPath: "/about", legalPath: "/legal" },
  pt: { copyright: "BMI-IMC.com - Calculadora IMC Gratis", about: "Sobre", legal: "Aviso Legal", glossary: "Glossario", widget: "Widget", calculator: "Calculadora IMC", aboutPath: "/about", legalPath: "/legal" },
  de: { copyright: "BMI-IMC.com - BMI Rechner Kostenlos", about: "Uber uns", legal: "Impressum", glossary: "Glossar", widget: "Widget", calculator: "BMI-Rechner", aboutPath: "/about", legalPath: "/legal" },
  it: { copyright: "BMI-IMC.com - Calcolatore IMC Gratis", about: "Chi siamo", legal: "Note Legali", glossary: "Glossario", widget: "Widget", calculator: "Calcolatore IMC", aboutPath: "/about", legalPath: "/legal" },
  hi: { copyright: "BMI-IMC.com - मुफ्त BMI कैलकुलेटर", about: "हमारे बारे में", legal: "कानूनी", glossary: "शब्दावली", widget: "विजेट", calculator: "BMI कैलकुलेटर", aboutPath: "/about", legalPath: "/legal" },
  zh: { copyright: "BMI-IMC.com - 免费BMI计算器", about: "关于我们", legal: "法律声明", glossary: "术语表", widget: "小工具", calculator: "BMI计算器", aboutPath: "/about", legalPath: "/legal" },
  ar: { copyright: "BMI-IMC.com - حاسبة مؤشر كتلة الجسم مجانا", about: "من نحن", legal: "إشعار قانوني", glossary: "مسرد", widget: "أداة", calculator: "حاسبة المؤشر", aboutPath: "/about", legalPath: "/legal" },
};

export const Footer = () => {
  const { pathname } = useLocation();
  const lang = getCurrentLang(pathname);
  const t = i18n[lang] || i18n.en;

  return (
    <footer className="border-t border-border mt-16 pt-8 pb-6">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
          <Link to={routeMap.main[lang]} className="hover:text-primary transition-colors">{t.calculator}</Link>
          <Link to={t.aboutPath} className="hover:text-primary transition-colors">{t.about}</Link>
          <Link to={t.legalPath} className="hover:text-primary transition-colors">{t.legal}</Link>
          <Link to="/glossary" className="hover:text-primary transition-colors">{t.glossary}</Link>
          <Link to="/widget" className="hover:text-primary transition-colors">{t.widget}</Link>
          <a href="mailto:contact@bmi-imc.com" className="hover:text-primary transition-colors">contact@bmi-imc.com</a>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {t.copyright}
        </p>
      </div>
    </footer>
  );
};
