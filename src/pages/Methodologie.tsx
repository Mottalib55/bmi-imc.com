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
const Methodologie = () => {
  const sections: { titre: string; corps: string[] }[] = [
    {
      titre: "1. La formule utilisée",
      corps: [
        "L'indice de masse corporelle est le poids en kilogrammes divisé par le carré de la taille en mètres. Un adulte de 70 kg mesurant 1,75 m obtient 70 ÷ (1,75 × 1,75), soit 22,9. La formule est celle retenue par l'Organisation mondiale de la santé ; nous n'appliquons aucune correction propre au site.",
      ],
    },
    {
      titre: "2. D'où viennent les seuils",
      corps: [
        "Les catégories adultes — maigreur en dessous de 18,5, corpulence normale jusqu'à 25, surpoids jusqu'à 30, obésité au-delà — proviennent de la classification internationale de l'OMS. Pour les enfants et les adolescents, l'IMC brut n'a pas de sens : on utilise les courbes de croissance par âge et par sexe, et le résultat s'exprime en percentile, pas en catégorie fixe.",
      ],
    },
    {
      titre: "3. Ce que l'IMC ne mesure pas",
      corps: [
        "L'IMC rapporte une masse à une taille. Il ignore la composition corporelle : un sportif très musclé peut dépasser 25 sans excès de graisse, une personne âgée peut rester sous 25 avec une masse grasse élevée et une masse musculaire faible. Il ignore aussi la répartition des graisses, alors que le tour de taille est un meilleur indicateur du risque cardiovasculaire.",
        "L'IMC n'est donc pas un diagnostic. Il sert à situer une population, et à ouvrir une conversation avec un professionnel de santé, jamais à la remplacer.",
      ],
    },
    {
      titre: "4. Mise à jour et corrections",
      corps: [
        "Chaque page porte la date de sa dernière modification réelle, prise dans l'historique du dépôt, et non la date du jour : une page non modifiée ne doit pas paraître fraîche. Les seuils de l'OMS n'ont pas changé depuis des décennies ; les données de prévalence citées sont revues lorsqu'une nouvelle enquête nationale paraît.",
        "Si un chiffre vous paraît faux, écrivez à contact@bmi-imc.com en indiquant la page. Nous vérifions contre la source, corrigeons si l'erreur est confirmée, et reportons la correction sur toutes les pages qui reprenaient la même donnée.",
      ],
    },
  ];

  const sources = [
    { url: "https://www.who.int/health-topics/obesity", nom: "Organisation mondiale de la santé", quoi: "classification de l'IMC et définitions du surpoids et de l'obésité" },
    { url: "https://www.has-sante.fr/", nom: "Haute Autorité de santé", quoi: "recommandations françaises sur la prise en charge du surpoids" },
    { url: "https://www.santepubliquefrance.fr/", nom: "Santé publique France", quoi: "données de prévalence en population française" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>IMC : notre méthode de calcul et nos sources officielles</title>
        <meta
          name="description"
          content="La formule de l'IMC, l'origine des seuils de l'OMS, ce que l'indice ne mesure pas, la fréquence des mises à jour et les sources officielles utilisées sur bmi-imc.com."
        />
        <link rel="canonical" href="https://bmi-imc.com/methodologie/" />
      </Helmet>
      <Header />

      <main id="main-content" className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8">Méthodologie</h1>
        {/* §8.4 : date de mise à jour, juste sous le titre. */}
        <MiseAJour />

        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">
          <p>
            Cette page dit comment les résultats affichés sur le site sont obtenus, sur quels textes
            ils s&apos;appuient et ce qu&apos;ils ne permettent pas de conclure.
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
            <h2 className="text-xl font-bold text-foreground">Sources officielles</h2>
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

export default Methodologie;
