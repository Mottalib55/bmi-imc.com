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
      titre: "1. Responsable",
      corps: [
        "Le site bmi-imc.com est édité par Radif Partners. Toute question sur cette page ou sur vos données peut être adressée à contact@bmi-imc.com.",
      ],
    },
    {
      titre: "2. Votre taille et votre poids restent dans votre navigateur",
      corps: [
        "La taille, le poids, l'âge et le sexe saisis dans le calculateur d'IMC sont calculés par votre propre navigateur. Ils ne nous sont pas transmis, ne sont enregistrés sur aucun serveur et ne sont pas conservés sur votre appareil : à la fermeture ou au rechargement de la page, ils disparaissent. Il n'y a pas de compte, et l'éditeur ne collecte ni n'enregistre aucune donnée de santé.",
      ],
    },
    {
      titre: "3. Mesure d’audience avec Google Analytics",
      corps: [
        "bmi-imc.com utilise Google Analytics 4 pour compter ses visites et savoir quelles pages servent : pages vues, page de provenance, durée de la visite, type d’appareil et de navigateur, pays et ville approximatifs. Google Analytics dépose pour cela deux cookies sur votre terminal : _ga, qui distingue les visiteurs par un identifiant aléatoire, et _ga_F6NRFKKHRG, qui garde l’état de la visite. Leur durée de vie est réglée à 13 mois au plus (390 jours) et n’est pas prolongée à chaque visite.",
        "L’adresse IP est anonymisée : Google Analytics 4 ne l’enregistre ni ne la conserve. L’adresse de page transmise est privée de ses paramètres, de sorte que vos saisies n’y figurent pas. Le site n’affiche pas de publicité : stockage publicitaire, personnalisation des annonces et signaux Google sont désactivés, et les données de mesure ne sont partagées avec aucun annonceur.",
        "Fournisseur : Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande, sous-traitant au sens de l’article 28 du RGPD. Les données peuvent être transférées à Google LLC, aux États-Unis, dans le cadre du EU–U.S. Data Privacy Framework et des clauses contractuelles types de la Commission européenne. Conservation chez Google : 14 mois, puis suppression. Base juridique : l’intérêt légitime de l’éditeur à connaître l’usage de son site (article 6-1 f du RGPD). Pour vous y opposer, bloquez ou supprimez les cookies dans les réglages de votre navigateur, ou installez le module de désactivation de Google Analytics (https://tools.google.com/dlpage/gaoptout) ; le site fonctionne alors de la même façon.",
      ],
    },
    {
      titre: "4. Mesure anonyme de la stabilité du site",
      corps: [
        "Pour repérer un calculateur qui fonctionne mal sur tel téléphone ou tel navigateur, nous utilisons Microsoft Clarity en mode sans cookie. L'outil ne remonte que des signaux techniques : erreurs de script, temps de chargement, clics sans effet, profondeur de défilement. Chaque page vue reçoit son propre identifiant aléatoire, de sorte que les visites ne sont jamais reliées entre elles, et le texte des pages comme tous les champs de saisie sont masqués dans votre navigateur avant tout envoi : Clarity ne voit ni une taille, ni un poids, ni un résultat d'IMC.",
        "Prestataire : Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irlande. Finalité : détecter et corriger les pannes, sans profilage, publicité ni revente. Conservation : 30 jours pour les relevés de pages vues, 13 mois pour les statistiques agrégées. Base légale : l'intérêt légitime de l'éditeur à faire fonctionner un outil gratuit (article 6-1 f du RGPD). Pour vous y opposer, bloquez clarity.ms dans votre navigateur ou avec un bloqueur de contenu, ou écrivez à contact@bmi-imc.com ; le calculateur fonctionne exactement de la même façon sans lui.",
      ],
    },
    {
      titre: "5. Hébergement",
      corps: [
        "Le site est servi par GitHub Pages (GitHub, Inc., États-Unis), qui tient de brefs journaux techniques (adresse IP, page demandée, heure) pour délivrer et protéger le service ; l'éditeur n'y a pas accès. Les transferts vers les États-Unis reposent sur le cadre de protection des données UE–États-Unis. Les courriels que vous nous envoyez ne sont gardés que le temps d'y répondre.",
      ],
    },
    {
      titre: "6. Vos droits",
      corps: [
        "Vous pouvez demander l'accès, la rectification ou l'effacement de données vous concernant et vous opposer à la mesure de stabilité, par courriel à contact@bmi-imc.com, avec une réponse sous un mois. Comme aucun fichier de lecteurs n'est tenu, la réponse est le plus souvent que rien n'est détenu à votre sujet. Vous pouvez aussi saisir la CNIL (www.cnil.fr) ou l'autorité de votre pays.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Confidentialité de bmi-imc.com : mesure d’audience Google Analytics</title>
        <meta
          name="description"
          content="Ce que bmi-imc.com mesure avec Google Analytics (cookies _ga, 13 mois au plus, sans publicité), ce qui reste dans votre navigateur, vos droits et comment vous opposer."
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
