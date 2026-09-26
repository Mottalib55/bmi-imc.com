import { Link, useLocation } from "react-router-dom";
import { getCurrentLang, routeMap, type Lang } from "@/config/routes";
import { dateDePage, dateLisible, LIBELLE_MAJ } from "@/lib/page-date";

const i18n: Record<Lang, {
  copyright: string;
  about: string;
  legal: string;
  glossary: string;
  widget: string;
  calculator: string;
  aboutPath: string;
  legalPath: string;
  privacy: string;
  privacyPath: string;
  methodology: string;
  methodologyPath: string;
  disclaimer: string;
  editor: string;
}> = {
  fr: { copyright: "BMI-IMC.com - Calculateur IMC Gratuit", about: "À propos", legal: "Mentions Légales", glossary: "Glossaire", widget: "Widget", calculator: "Calculateur IMC", aboutPath: "/a-propos/", legalPath: "/mentions-legales/", privacy: "Confidentialité", privacyPath: "/confidentialite/", methodology: "Méthodologie", methodologyPath: "/methodologie/", disclaimer: "Les résultats affichés sont des estimations fondées sur la formule de l'IMC retenue par l'OMS. L'IMC ne mesure ni la masse grasse ni l'état de santé et ne remplace pas un avis médical.", editor: "Édité par Radif Partners" },
  en: { copyright: "BMI-IMC.com - Free BMI Calculator", about: "About", legal: "Legal Notice", glossary: "Glossary", widget: "Widget", calculator: "BMI Calculator", aboutPath: "/about/", legalPath: "/legal/", privacy: "Privacy", privacyPath: "/privacy/", methodology: "Methodology", methodologyPath: "/methodology/", disclaimer: "The results shown are estimates based on the BMI formula used by the WHO. BMI measures neither body fat nor health status and does not replace medical advice.", editor: "Published by Radif Partners" },
  es: { copyright: "BMI-IMC.com - Calculadora IMC Gratis", about: "Acerca de", legal: "Aviso Legal", glossary: "Glosario", widget: "Widget", calculator: "Calculadora IMC", aboutPath: "/about/", legalPath: "/legal/", privacy: "Privacidad", privacyPath: "/privacy/", methodology: "Metodología", methodologyPath: "/methodology/", disclaimer: "Los resultados son estimaciones basadas en la fórmula del IMC de la OMS. El IMC no mide la grasa corporal ni el estado de salud y no sustituye una consulta médica.", editor: "Editado por Radif Partners" },
  pt: { copyright: "BMI-IMC.com - Calculadora IMC Gratis", about: "Sobre", legal: "Aviso Legal", glossary: "Glossario", widget: "Widget", calculator: "Calculadora IMC", aboutPath: "/about/", legalPath: "/legal/", privacy: "Privacidade", privacyPath: "/privacy/", methodology: "Metodologia", methodologyPath: "/methodology/", disclaimer: "Os resultados sao estimativas baseadas na formula do IMC da OMS. O IMC nao mede a gordura corporal nem o estado de saude e nao substitui uma consulta medica.", editor: "Editado por Radif Partners" },
  de: { copyright: "BMI-IMC.com - BMI Rechner Kostenlos", about: "Über uns", legal: "Impressum", glossary: "Glossar", widget: "Widget", calculator: "BMI-Rechner", aboutPath: "/about/", legalPath: "/legal/", privacy: "Datenschutz", privacyPath: "/privacy/", methodology: "Methodik", methodologyPath: "/methodology/", disclaimer: "Die angezeigten Werte sind Schätzungen auf Grundlage der BMI-Formel der WHO. Der BMI misst weder den Körperfettanteil noch den Gesundheitszustand und ersetzt keine ärztliche Beratung.", editor: "Herausgegeben von Radif Partners" },
  it: { copyright: "BMI-IMC.com - Calcolatore IMC Gratis", about: "Chi siamo", legal: "Note Legali", glossary: "Glossario", widget: "Widget", calculator: "Calcolatore IMC", aboutPath: "/about/", legalPath: "/legal/", privacy: "Privacy", privacyPath: "/privacy/", methodology: "Metodologia", methodologyPath: "/methodology/", disclaimer: "I risultati sono stime basate sulla formula dell'IMC adottata dall'OMS. L'IMC non misura la massa grassa né lo stato di salute e non sostituisce un parere medico.", editor: "Edito da Radif Partners" },
  hi: { copyright: "BMI-IMC.com - मुफ्त BMI कैलकुलेटर", about: "हमारे बारे में", legal: "कानूनी", glossary: "शब्दावली", widget: "विजेट", calculator: "BMI कैलकुलेटर", aboutPath: "/about/", legalPath: "/legal/", privacy: "गोपनीयता", privacyPath: "/privacy/", methodology: "कार्यप्रणाली", methodologyPath: "/methodology/", disclaimer: "दिखाए गए परिणाम WHO के BMI सूत्र पर आधारित अनुमान हैं। BMI न तो शरीर की चर्बी मापता है और न ही स्वास्थ्य की स्थिति, और यह चिकित्सकीय सलाह का विकल्प नहीं है।", editor: "Radif Partners द्वारा प्रकाशित" },
  zh: { copyright: "BMI-IMC.com - 免费BMI计算器", about: "关于我们", legal: "法律声明", glossary: "术语表", widget: "小工具", calculator: "BMI计算器", aboutPath: "/about/", legalPath: "/legal/", privacy: "隐私", privacyPath: "/privacy/", methodology: "方法", methodologyPath: "/methodology/", disclaimer: "所显示的结果是根据世界卫生组织采用的 BMI 公式得出的估算值。BMI 既不测量体脂也不反映健康状况，不能替代医疗建议。", editor: "由 Radif Partners 出版" },
  ar: { copyright: "BMI-IMC.com - حاسبة مؤشر كتلة الجسم مجانا", about: "من نحن", legal: "إشعار قانوني", glossary: "مسرد", widget: "أداة", calculator: "حاسبة المؤشر", aboutPath: "/about/", legalPath: "/legal/", privacy: "الخصوصية", privacyPath: "/privacy/", methodology: "المنهجية", methodologyPath: "/methodology/", disclaimer: "النتائج المعروضة تقديرية وتستند إلى معادلة مؤشر كتلة الجسم المعتمدة من منظمة الصحة العالمية. لا يقيس المؤشر نسبة الدهون ولا الحالة الصحية ولا يغني عن استشارة طبية.", editor: "نشر بواسطة Radif Partners" },
};

export const Footer = () => {
  const { pathname } = useLocation();
  const lang = getCurrentLang(pathname);
  const t = i18n[lang] || i18n.en;
  const iso = dateDePage(pathname);

  return (
    <footer className="border-t border-border mt-16 pt-8 pb-6">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
          <Link to={routeMap.main[lang]} className="hover:text-primary transition-colors">{t.calculator}</Link>
          <Link to={t.aboutPath} className="hover:text-primary transition-colors">{t.about}</Link>
          <Link to={t.legalPath} className="hover:text-primary transition-colors">{t.legal}</Link>
          <Link to="/glossary/" className="hover:text-primary transition-colors">{t.glossary}</Link>
          <Link to={t.privacyPath} className="hover:text-primary transition-colors">{t.privacy}</Link>
          <Link to={t.methodologyPath} className="hover:text-primary transition-colors">{t.methodology}</Link>
          <Link to="/widget/" className="hover:text-primary transition-colors">{t.widget}</Link>
          <a href="mailto:contact@bmi-imc.com" className="hover:text-primary transition-colors">contact@bmi-imc.com</a>
        </div>
        {/* §8.4 : l'avertissement, l'éditeur et la date de mise à jour doivent
            figurer sur chaque page, pas seulement sur la page « à propos ». */}
        <p className="mx-auto mb-4 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          {t.disclaimer}
        </p>
        {/* §7 : les seuils affichés viennent de textes publics ; les nommer sur
            chaque page permet au lecteur de les vérifier à la source. */}
        <p className="mx-auto mb-4 max-w-3xl text-center text-xs text-muted-foreground">
          {lang === "fr" ? "Sources :" : "Sources:"}{" "}
          <a className="underline" href="https://www.who.int/health-topics/obesity" rel="noopener" target="_blank">
            {lang === "fr" ? "Organisation mondiale de la santé" : "World Health Organization"}
          </a>
          {" \u00b7 "}
          <a className="underline" href="https://www.has-sante.fr/" rel="noopener" target="_blank">
            Haute Autorité de santé
          </a>
          {" \u00b7 "}
          <a className="underline" href="https://www.santepubliquefrance.fr/" rel="noopener" target="_blank">
            Santé publique France
          </a>
          {" \u00b7 "}
          <a className="underline" href="https://www.cdc.gov/healthyweight/assessing/bmi/" rel="noopener" target="_blank">
            CDC
          </a>
        </p>
        <p className="text-center text-xs text-muted-foreground" data-author="Radif Partners">
          &copy; {new Date().getFullYear()} {t.copyright} &middot; {t.editor}
          {iso && (
            <>
              {" "}&middot; {LIBELLE_MAJ[lang] ?? LIBELLE_MAJ.fr}{" "}
              <time dateTime={iso}>{dateLisible(iso, lang)}</time>
            </>
          )}
        </p>
      </div>
    </footer>
  );
};
