import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getCurrentLang, getPageType } from "@/config/routes";
import { pageFaq } from "@/data/page-faq";

const TITRES: Record<string, string> = {
  fr: "Questions fréquentes",
  en: "Frequently asked questions",
  es: "Preguntas frecuentes",
  pt: "Perguntas frequentes",
  de: "Häufige Fragen",
  it: "Domande frequenti",
  hi: "अक्सर पूछे जाने वाले प्रश्न",
  zh: "常见问题",
  ar: "أسئلة شائعة",
};

/**
 * Bloc de FAQ visible + FAQPage, alimentés par la même liste (RECETTE §7).
 *
 * Les panneaux sont des `<details>` natifs : un accordéon en JavaScript qui
 * démonte les panneaux fermés déclare à Google des réponses absentes du HTML
 * servi, panne d'autant plus difficile à repérer qu'elle ne produit aucune
 * erreur. Ici le pré-rendu doit voir le texte, sinon il ne le capture pas.
 */
export const FaqSection = () => {
  const { pathname } = useLocation();
  const lang = getCurrentLang(pathname);
  const type = getPageType(pathname);
  const faq = type ? pageFaq[type]?.[lang] : undefined;
  if (!faq || faq.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="mt-12">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <h2 className="text-2xl font-display font-bold mb-6">{TITRES[lang] ?? TITRES.fr}</h2>
      <div className="space-y-3">
        {faq.map((item) => (
          <details key={item.q} className="glass-card px-5 py-4" open={item === faq[0]}>
            <summary className="cursor-pointer list-none font-medium">
              <h3 className="inline text-base font-medium">{item.q}</h3>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};
