import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MiseAJour } from "@/components/MiseAJour";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Mentions légales de BMI-IMC.com : éditeur, hébergeur</title>
        <meta name="description" content="Mentions légales et conditions d'utilisation de BMI-IMC.com, calculateur IMC gratuit. Informations éditeur, propriété intellectuelle, politique de confidentialité." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://bmi-imc.com/mentions-legales/" />
      </Helmet>
      <Header />

      <div className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8">Mentions Légales</h1>
        {/* §8.4 : date de mise à jour, juste sous le titre. */}
        <MiseAJour />

        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">

          <p>
            Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004
            pour la confiance dans l'économie numérique (LCEN), les présentes mentions légales sont portées
            à la connaissance des utilisateurs et visiteurs du site bmi-imc.com. La connexion et la navigation
            sur le site par un utilisateur impliquent l'acceptation intégrale et sans réserve des présentes
            mentions légales. Ces dernières sont accessibles à tout moment sur le site via un lien en pied de page.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground">1. Éditeur du site</h2>
            <p>
              Le site bmi-imc.com est édité par :<br />
              <strong>Radif Partners</strong><br />
              Email :{" "}
              <a href="mailto:contact@bmi-imc.com" className="text-primary hover:underline">
                contact@bmi-imc.com
              </a>
            </p>
            <p>
              Conformément à l'article 6-I-1 de la loi pour la confiance dans l'économie numérique,
              l'identité complète de l'éditeur est mise à la disposition du public. L'éditeur assure la
              responsabilité éditoriale du contenu publié sur le site, à l'exception des contenus générés
              par le calculateur IMC qui dépendent des données saisies par l'utilisateur et des paramètres
              de santé en vigueur à la date de consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication du site bmi-imc.com est Radif Partners, en qualité de
              fondateur et éditeur. Conformément aux articles 93-2 et 93-3 de la loi n° 82-652 du
              29 juillet 1982 sur la communication audiovisuelle, modifiée par la loi n° 2004-575 du
              21 juin 2004, le directeur de la publication est la personne physique responsable du
              contenu éditorial du site. Il peut être contacté par courrier électronique à l'adresse
              contact@bmi-imc.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Hébergement</h2>
            <p>
              Le site bmi-imc.com est hébergé par :<br />
              <strong>GitHub Pages</strong> — GitHub, Inc.<br />
              88 Colin P Kelly Jr Street<br />
              San Francisco, CA 94107<br />
              États-Unis<br />
              Site web : https://pages.github.com
            </p>
            <p>
              GitHub Pages est un service d'hébergement de sites web statiques fourni par GitHub, Inc.,
              filiale de Microsoft Corporation. L'infrastructure repose sur un réseau mondial de diffusion
              de contenu (CDN) permettant de servir les pages du site depuis le serveur le plus proche de
              chaque visiteur afin d'optimiser les temps de chargement. GitHub Pages utilise le protocole
              HTTPS pour sécuriser les échanges entre le navigateur de l'utilisateur et les serveurs
              d'hébergement, assurant ainsi le chiffrement des données en transit.
            </p>
            <p>
              Conformément à l'article 6-I-2 de la loi pour la confiance dans l'économie numérique, les
              coordonnées de l'hébergeur sont communiquées ci-dessus. En tant qu'hébergeur technique,
              GitHub, Inc. n'exerce aucun contrôle éditorial sur le contenu du site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Objet du site</h2>
            <p>
              BMI-IMC.com est un outil en ligne gratuit permettant de calculer l'Indice de Masse Corporelle
              (IMC) selon la formule établie par l'Organisation Mondiale de la Santé (OMS). Le site fournit
              du contenu éducatif et informatif sur l'IMC, la gestion du poids et la santé dans plusieurs
              langues. Tous les outils et contenus sont fournis gratuitement. Le calculateur IMC fonctionne
              intégralement côté client (dans le navigateur de l'utilisateur) et aucune donnée personnelle
              de santé n'est transmise à nos serveurs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu du site bmi-imc.com est protégé par les dispositions du Code de la
              propriété intellectuelle, notamment les articles L.111-1 et suivants relatifs au droit
              d'auteur et les articles L.341-1 et suivants relatifs au droit des producteurs de bases de
              données. Cette protection couvre l'intégralité des éléments constitutifs du site, qu'il
              s'agisse des textes, articles, algorithmes de calcul, code source, design graphique, mise
              en page, logos, iconographie, photographies, illustrations et autres éléments de propriété
              intellectuelle.
            </p>
            <p>
              Conformément aux articles L.122-4 et L.122-5 du Code de la propriété intellectuelle, toute
              représentation ou reproduction, intégrale ou partielle, du site ou de l'un quelconque de
              ses éléments, par quelque procédé que ce soit, sans l'autorisation expresse et préalable de
              l'éditeur, est strictement interdite et constituerait une contrefaçon sanctionnée par les
              articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
            <p>
              L'utilisateur est autorisé à consulter le site et à utiliser le calculateur IMC pour un
              usage strictement personnel et privé. Toute utilisation à des fins commerciales, toute
              reproduction systématique et toute rediffusion du contenu sont interdites sans accord
              préalable écrit de l'éditeur. Les courtes citations à des fins d'information sont autorisées
              à condition de mentionner la source (bmi-imc.com) et de ne pas dénaturer le contenu cité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. Avertissement médical</h2>
            <p>
              Les informations fournies sur BMI-IMC.com sont à titre informatif et éducatif uniquement.
              Elles ne constituent pas un avis médical, un diagnostic ou un traitement. Les résultats du
              calcul de l'IMC et les informations de santé présentées sur ce site ne doivent pas remplacer
              la consultation d'un professionnel de santé qualifié. Consultez toujours votre médecin ou un
              autre professionnel de santé qualifié pour toute question relative à une condition médicale.
            </p>
            <p>
              L'IMC est un outil de dépistage et présente des limites connues. Il ne distingue pas la masse
              maigre de la masse grasse et peut ne pas être adapté aux athlètes, aux femmes enceintes, aux
              personnes âgées ou aux enfants en croissance. L'éditeur décline toute responsabilité pour les
              décisions de santé prises sur la base des informations fournies sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">7. Politique de confidentialité</h2>
            <p>
              BMI-IMC.com respecte votre vie privée et s'engage à protéger les données personnelles de ses
              utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD — Règlement
              UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
            </p>
            <p>
              <strong>Données de santé :</strong> Nous ne collectons, ne stockons et ne transmettons aucune
              donnée de santé personnelle saisie dans notre calculateur IMC. Tous les calculs sont effectués
              localement dans votre navigateur web à l'aide de JavaScript. Aucune donnée (poids, taille,
              âge, sexe) n'est envoyée à nos serveurs ou à des tiers.
            </p>
            <p>
              <strong>Données de navigation :</strong> Nous pouvons utiliser des outils d'analyse anonymisés
              pour comprendre comment les visiteurs utilisent notre site. Ces données sont agrégées et ne
              peuvent pas être utilisées pour identifier des utilisateurs individuels. Aucun cookie de
              profilage ou publicitaire n'est utilisé.
            </p>
            <p>
              <strong>Services tiers :</strong> Ce site web peut charger des polices depuis Google Fonts.
              En utilisant ce site, vous consentez au traitement des données par ces services conformément
              à leurs politiques de confidentialité respectives.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">8. Politique des cookies</h2>
            <p>
              Conformément à la directive européenne 2009/136/CE et aux recommandations de la CNIL, nous
              vous informons que le site bmi-imc.com peut utiliser des cookies essentiels strictement
              nécessaires au bon fonctionnement du site. Ces cookies techniques ne collectent aucune
              donnée personnelle et ne nécessitent pas de consentement préalable conformément à l'article
              82 de la loi Informatique et Libertés.
            </p>
            <p>
              Aucun cookie de suivi, de profilage ou publicitaire n'est utilisé sur ce site. Les préférences
              utilisateur (comme le choix de la langue ou le mode sombre/clair) sont stockées dans le
              localStorage du navigateur, qui n'est pas un cookie et n'est jamais transmis à nos serveurs.
              Vous pouvez configurer votre navigateur pour refuser les cookies ou supprimer ceux déjà
              installés à tout moment via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">9. RGPD — Droits des utilisateurs</h2>
            <p>
              Conformément aux articles 15 à 22 du Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Droit d'accès</strong> (article 15) : obtenir la confirmation que des données personnelles vous concernant sont ou ne sont pas traitées et, si elles le sont, obtenir une copie de ces données.</li>
              <li><strong>Droit de rectification</strong> (article 16) : obtenir la correction de données personnelles inexactes ou incomplètes.</li>
              <li><strong>Droit à l'effacement</strong> (article 17, « droit à l'oubli ») : obtenir la suppression de vos données personnelles lorsque les conditions prévues par la loi sont remplies.</li>
              <li><strong>Droit à la limitation du traitement</strong> (article 18) : obtenir la limitation du traitement dans certains cas prévus par la loi.</li>
              <li><strong>Droit à la portabilité</strong> (article 20) : recevoir vos données personnelles dans un format structuré, couramment utilisé et lisible par machine.</li>
              <li><strong>Droit d'opposition</strong> (article 21) : vous opposer à tout moment au traitement de vos données personnelles pour des motifs liés à votre situation particulière.</li>
            </ul>
            <p>
              Étant donné que le site ne collecte pas de données personnelles identifiantes, ces droits
              ne sont actuellement pas applicables en pratique. Toutefois, pour toute demande, vous pouvez
              nous contacter à l'adresse contact@bmi-imc.com. Nous nous engageons à répondre dans un
              délai de 30 jours conformément à l'article 12 du RGPD.
            </p>
            <p>
              Vous disposez également du droit d'introduire une réclamation auprès de la Commission
              Nationale de l'Informatique et des Libertés (CNIL), autorité de contrôle française en
              matière de protection des données : www.cnil.fr.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">10. Conditions générales d'utilisation</h2>
            <p>
              L'utilisation du site bmi-imc.com implique l'acceptation pleine et entière des présentes
              conditions d'utilisation. Le site est accessible gratuitement à tout utilisateur disposant
              d'un accès à Internet. Tous les frais supportés par l'utilisateur pour accéder au service
              (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge exclusive.
            </p>
            <p>
              L'éditeur met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès
              de qualité au site, mais n'est tenu d'aucune obligation de résultat. L'accès au site peut
              être interrompu à tout moment, notamment en raison de maintenance technique, de mise à jour
              ou pour toute autre raison, sans que cela ne puisse donner lieu à une quelconque obligation
              ou indemnisation.
            </p>
            <p>
              L'utilisateur s'engage à utiliser le site conformément à sa destination et à ne pas
              l'utiliser à des fins illicites ou contraires aux présentes conditions. Il s'interdit
              notamment de tenter de porter atteinte à la sécurité du site, d'utiliser des robots ou
              des programmes automatisés pour accéder au contenu en masse et de reproduire le site en
              tout ou partie sans autorisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">11. Limitation de responsabilité</h2>
            <p>
              BMI-IMC.com et son éditeur ne pourront être tenus responsables de tout dommage direct,
              indirect, accessoire, spécial, consécutif ou punitif, y compris mais sans s'y limiter la
              perte de données, de revenus ou de profit, découlant de ou en relation avec l'utilisation
              de ce site web ou de son contenu.
            </p>
            <p>
              L'éditeur s'efforce de fournir des informations aussi précises et à jour que possible, mais
              ne fait aucune déclaration ni garantie, expresse ou implicite, quant à l'exhaustivité,
              l'exactitude, la fiabilité, l'adéquation ou la disponibilité du site ou des informations,
              produits, services ou graphiques connexes contenus sur le site, pour quelque usage que ce soit.
            </p>
            <p>
              L'éditeur décline également toute responsabilité en cas d'interruption du service, de
              dysfonctionnement technique, de perte de données ou de dommage causé à l'équipement
              informatique de l'utilisateur résultant de la navigation sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">12. Liens hypertextes</h2>
            <p>
              Le site bmi-imc.com peut contenir des liens hypertextes renvoyant vers d'autres sites
              Internet, notamment les sites d'organismes de santé officiels (OMS, santé.gouv.fr). Ces
              liens sont proposés à titre informatif. L'éditeur de bmi-imc.com n'exerce aucun contrôle
              sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu,
              leur disponibilité ou les conséquences de leur consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">13. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige relatif
              à l'interprétation ou à l'exécution des présentes, et après échec de toute tentative de
              résolution amiable, les tribunaux français seront seuls compétents. La juridiction compétente
              sera déterminée en fonction de la nature du litige et de la qualité des parties, conformément
              aux règles de compétence territoriale et d'attribution prévues par le Code de procédure
              civile et le Code de la consommation.
            </p>
            <p>
              L'éventuelle nullité d'une clause des présentes ne saurait entraîner la nullité de
              l'ensemble des mentions légales. Les parties s'efforceront, dans un tel cas, de remplacer
              la clause nulle par une clause valide se rapprochant le plus possible de l'intention
              initiale des parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">14. Modification des mentions légales</h2>
            <p>
              L'éditeur se réserve le droit de modifier les présentes mentions légales à tout moment, afin
              de les adapter aux évolutions législatives et réglementaires ou aux modifications du site.
              Les modifications prendront effet dès leur publication sur cette page. L'utilisateur est
              invité à consulter régulièrement cette page pour prendre connaissance d'éventuelles
              modifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">15. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, notre politique de confidentialité ou
              le fonctionnement du site, veuillez nous contacter à :{" "}
              <a href="mailto:contact@bmi-imc.com" className="text-primary hover:underline">
                contact@bmi-imc.com
              </a>
            </p>
          </section>

          <p className="text-sm italic">Dernière mise à jour : juin 2026</p>
        </div>

        <div className="border-t border-border pt-6 mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link to="/imc" className="hover:text-primary">Calculateur IMC</Link>
          <Link to="/a-propos" className="hover:text-primary">À propos</Link>
          <Link to="/legal" className="hover:text-primary">Legal Notice (EN)</Link>
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default MentionsLegales;
