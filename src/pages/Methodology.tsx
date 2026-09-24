import { Header } from "@/components/Header";
import { MiseAJour } from "@/components/MiseAJour";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

/**
 * Méthodologie (RECETTE §7, E-E-A-T).
 *
 * Un calculateur de santé doit dire d'où viennent sa formule et ses seuils, et
 * ce qu'il ne mesure pas. Sans cette page, le lecteur n'a aucun moyen de
 * vérifier un chiffre, et rien ne distingue le site d'un calculateur anonyme.
 */
const Methodology = () => {
  const sections: { titre: string; corps: string[] }[] = [
    {
      titre: "1. The formula used",
      corps: [
        "Body mass index is weight in kilograms divided by height in metres squared. An adult of 70 kg and 1.75 m gets 70 ÷ (1.75 × 1.75), that is 22.9. The formula is the one adopted by the World Health Organization; we apply no correction of our own.",
      ],
    },
    {
      titre: "2. Where the thresholds come from",
      corps: [
        "The adult categories — underweight below 18.5, normal up to 25, overweight up to 30, obesity above — come from the WHO international classification. For children and adolescents the raw index means nothing: growth charts by age and sex are used instead, and the result is expressed as a percentile, not a fixed category.",
      ],
    },
    {
      titre: "3. What BMI does not measure",
      corps: [
        "BMI relates a mass to a height. It ignores body composition: a heavily muscled athlete can exceed 25 with no excess fat, while an older person can stay below 25 with high fat and low muscle mass. It also ignores where fat sits, although waist circumference is a better marker of cardiovascular risk.",
        "BMI is therefore not a diagnosis. It helps place a population, and helps open a conversation with a health professional, never to replace one.",
      ],
    },
    {
      titre: "4. Updates and corrections",
      corps: [
        "Each page carries the date of its last real change, taken from the repository history, not today's date: an unchanged page must not look fresh. The WHO thresholds have not moved in decades; the prevalence figures quoted are reviewed whenever a new national survey is published.",
        "If a figure looks wrong to you, write to contact@bmi-imc.com naming the page. We check it against the source, correct it if the error is confirmed, and carry the correction across to every page using the same data.",
      ],
    },
  ];

  const sources = [
    { url: "https://www.who.int/health-topics/obesity", nom: "Organisation mondiale de la santé", quoi: "BMI classification and definitions of overweight and obesity" },
    { url: "https://www.has-sante.fr/", nom: "Haute Autorité de santé", quoi: "French clinical guidance on managing overweight" },
    { url: "https://www.santepubliquefrance.fr/", nom: "Santé publique France", quoi: "prevalence data for the French population" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>BMI methodology: our calculation and official sources</title>
        <meta
          name="description"
          content="The BMI formula, where the WHO thresholds come from, what the index does not measure, how often pages are updated and the official sources used on bmi-imc.com."
        />
        <link rel="canonical" href="https://bmi-imc.com/methodology/" />
      </Helmet>
      <Header />

      <main id="main-content" className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8">Methodology</h1>
        {/* §8.4 : date de mise à jour, juste sous le titre. */}
        <MiseAJour />

        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">
          <p>
            This page sets out how the results shown on the site are obtained, which texts they rest
            on and what they do not allow you to conclude.
          </p>
          {sections.map((s) => (
            <section key={s.titre}>
              <h2 className="text-xl font-bold text-foreground">{s.titre}</h2>
              {s.corps.map((c, i) => (
                <p key={i}>{c}</p>
              ))}
            </section>
          ))}
          <section>
            <h2 className="text-xl font-bold text-foreground">Official sources</h2>
            <ul>
              {sources.map((s) => (
                <li key={s.url}>
                  <a className="underline" href={s.url} rel="noopener" target="_blank">
                    {s.nom}
                  </a>{" "}
                  — {s.quoi}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Methodology;
