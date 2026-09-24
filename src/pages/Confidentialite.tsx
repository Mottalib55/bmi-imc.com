import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

/**
 * Politique de confidentialité (RGPD, RECETTE §8).
 *
 * La page était absente du site : sans elle, aucun lien de pied ne peut mener
 * à l'information exigée par les articles 13 et 14 du RGPD.
 */
const Confidentialite = () => {
  const sections: { titre: string; corps: string[] }[] = [
    {
      titre: "1. Responsable du traitement",
      corps: [
        "Le site bmi-imc.com est édité par Radif Partners, qui détermine les finalités et les moyens des traitements décrits ci-dessous. Toute question relative à vos données peut être adressée à contact@bmi-imc.com.",
      ],
    },
    {
      titre: "2. Le calcul de l'IMC ne quitte pas votre navigateur",
      corps: [
        "La taille, le poids, l'âge et le sexe que vous saisissez dans le calculateur ne sont ni transmis à un serveur ni enregistrés. Le calcul s'exécute entièrement dans votre navigateur, et la page ne conserve rien après sa fermeture. Aucun compte n'est nécessaire et aucune donnée de santé n'est collectée.",
      ],
    },
    {
      titre: "3. Mesure d'audience",
      corps: [
        "Nous mesurons la fréquentation du site afin de savoir quelles pages sont utiles et lesquelles doivent être réécrites. Les données recueillies sont les pages consultées, la provenance, le type d'appareil et des informations techniques agrégées. Elles ne permettent pas de vous identifier et ne sont pas recoupées avec les valeurs saisies dans le calculateur.",
      ],
    },
    {
      titre: "4. Bases légales et durées",
      corps: [
        "La mesure d'audience repose sur l'intérêt légitime de l'éditeur à améliorer son site. Les données d'audience sont conservées treize mois au plus, conformément à la recommandation de la CNIL. Les messages reçus par courriel sont conservés un an après la dernière réponse.",
      ],
    },
    {
      titre: "5. Destinataires et transferts",
      corps: [
        "Les données ne sont ni vendues ni louées. Elles sont traitées par l'hébergeur du site et par l'outil de mesure d'audience, qui agissent sur instruction de l'éditeur. Aucun transfert de données de santé n'a lieu, puisqu'aucune n'est collectée.",
      ],
    },
    {
      titre: "6. Vos droits",
      corps: [
        "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité. Ces droits s'exercent par courriel à contact@bmi-imc.com, avec une réponse sous un mois. Si la réponse ne vous satisfait pas, vous pouvez saisir la Commission nationale de l'informatique et des libertés sur www.cnil.fr.",
      ],
    },
    {
      titre: "7. Cookies",
      corps: [
        "Le site dépose les cookies techniques nécessaires à son fonctionnement, qui ne requièrent pas de consentement. Les cookies de mesure d'audience sont configurés de manière à ne pas permettre le suivi d'une personne d'un site à l'autre. Vous pouvez les supprimer à tout moment depuis les réglages de votre navigateur.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Politique de confidentialité — BMI-IMC.com</title>
        <meta
          name="description"
          content="Quelles données bmi-imc.com collecte, ce que devient votre taille et votre poids, combien de temps les données d'audience sont conservées et comment exercer vos droits RGPD."
        />
        <link rel="canonical" href="https://bmi-imc.com/confidentialite/" />
      </Helmet>
      <Header />

      <main id="main-content" className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8">Politique de confidentialité</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">
          <p>
            Cette page explique quelles données le site traite, pourquoi, combien de temps il les
            conserve et comment vous pouvez agir dessus. Elle complète les mentions légales, qui
            identifient l&apos;éditeur et l&apos;hébergeur.
          </p>
          {sections.map((s) => (
            <section key={s.titre}>
              <h2 className="text-xl font-bold text-foreground">{s.titre}</h2>
              {s.corps.map((c, i) => (
                <p key={i}>{c}</p>
              ))}
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Confidentialite;
