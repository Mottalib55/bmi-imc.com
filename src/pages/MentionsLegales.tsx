import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Mentions Legales — BMI-IMC.com</title>
        <meta name="description" content="Mentions legales et conditions d'utilisation de BMI-IMC.com, calculateur IMC gratuit. Informations editeur, propriete intellectuelle, politique de confidentialite." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://bmi-imc.com/mentions-legales/" />
      </Helmet>
      <Header />

      <div className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8">Mentions Legales</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Informations sur l'Editeur</h2>
            <p>
              <strong>Site web :</strong> BMI-IMC.com<br />
              <strong>Editeur :</strong> Mottalib Radif<br />
              <strong>Email :</strong>{" "}
              <a href="mailto:contact@bmi-imc.com" className="text-primary hover:underline">
                contact@bmi-imc.com
              </a><br />
              <strong>Directeur de la publication :</strong> Mottalib Radif
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Objet du Site</h2>
            <p>
              BMI-IMC.com est un outil en ligne gratuit permettant de calculer l'Indice de Masse Corporelle
              (IMC) selon la formule etablie par l'Organisation Mondiale de la Sante (OMS). Le site fournit
              du contenu educatif et informatif sur l'IMC, la gestion du poids et la sante dans plusieurs
              langues. Tous les outils et contenus sont fournis gratuitement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Avertissement Medical</h2>
            <p>
              Les informations fournies sur BMI-IMC.com sont a titre informatif et educatif uniquement.
              Elles ne constituent pas un avis medical, un diagnostic ou un traitement. Les resultats du
              calcul de l'IMC et les informations de sante presentees sur ce site ne doivent pas remplacer
              la consultation d'un professionnel de sante qualifie. Consultez toujours votre medecin ou un
              autre professionnel de sante qualifie pour toute question relative a une condition medicale.
            </p>
            <p>
              L'IMC est un outil de depistage et presente des limites connues. Il ne distingue pas la masse
              maigre de la masse grasse et peut ne pas etre adapte aux athletes, aux femmes enceintes, aux
              personnes agees ou aux enfants en croissance. L'editeur decline toute responsabilite pour les
              decisions de sante prises sur la base des informations fournies sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Propriete Intellectuelle</h2>
            <p>
              Tout le contenu de BMI-IMC.com, y compris mais sans s'y limiter, les textes, graphiques,
              logos, icones, images, clips audio, telechargements numeriques et logiciels, est la propriete
              de Mottalib Radif ou de ses fournisseurs de contenu et est protege par les lois internationales
              sur le droit d'auteur.
            </p>
            <p>
              Vous ne pouvez pas reproduire, distribuer, afficher, vendre, louer, transmettre, creer des
              oeuvres derivees, traduire, modifier, desassembler, decompiler ou exploiter de toute autre
              maniere ce site web ou toute partie de celui-ci sans l'autorisation ecrite expresse de
              Mottalib Radif.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Politique de Confidentialite</h2>
            <p>
              BMI-IMC.com respecte votre vie privee. Nous ne collectons, ne stockons et ne transmettons
              aucune donnee de sante personnelle saisie dans notre calculateur IMC. Tous les calculs sont
              effectues localement dans votre navigateur web a l'aide de JavaScript.
            </p>
            <p>
              <strong>Donnees collectees :</strong> Nous pouvons utiliser des outils d'analyse anonymises
              (tels que Google Analytics) pour comprendre comment les visiteurs utilisent notre site. Ces
              donnees sont agregees et ne peuvent pas etre utilisees pour identifier des utilisateurs
              individuels.
            </p>
            <p>
              <strong>Cookies :</strong> Ce site web peut utiliser des cookies essentiels a des fins de
              fonctionnalite. Aucun cookie de suivi n'est utilise a des fins publicitaires ou de profilage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. Limitation de Responsabilite</h2>
            <p>
              BMI-IMC.com et son editeur ne pourront etre tenus responsables de tout dommage direct,
              indirect, accessoire, special, consecutif ou punitif, y compris mais sans s'y limiter la
              perte de donnees, de revenus ou de profit, decoulant de ou en relation avec l'utilisation
              de ce site web ou de son contenu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">7. Liens Externes</h2>
            <p>
              Ce site web peut contenir des liens vers des sites web externes. Ces liens sont fournis a
              titre de commodite et d'information uniquement. Nous n'approuvons pas et ne sommes pas
              responsables du contenu, des politiques de confidentialite ou des pratiques des sites web
              tiers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">8. Droit Applicable</h2>
            <p>
              Les presentes mentions legales sont regies et interpretees conformement au droit francais.
              Tout litige decoulant de l'utilisation de ce site web sera soumis a la competence exclusive
              des tribunaux competents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">9. Contact</h2>
            <p>
              Pour toute question concernant ces mentions legales ou nos pratiques en matiere de
              confidentialite, veuillez nous contacter a :{" "}
              <a href="mailto:contact@bmi-imc.com" className="text-primary hover:underline">
                contact@bmi-imc.com
              </a>
            </p>
          </section>

          <p className="text-sm italic">Derniere mise a jour : juin 2026</p>
        </div>

        <div className="border-t border-border pt-6 mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link to="/imc" className="hover:text-primary">Calculateur IMC</Link>
          <Link to="/a-propos" className="hover:text-primary">A propos</Link>
          <Link to="/legal" className="hover:text-primary">Legal Notice (EN)</Link>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
