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

          <p>
            Conformement aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004
            pour la confiance dans l'economie numerique (LCEN), les presentes mentions legales sont portees
            a la connaissance des utilisateurs et visiteurs du site bmi-imc.com. La connexion et la navigation
            sur le site par un utilisateur impliquent l'acceptation integrale et sans reserve des presentes
            mentions legales. Ces dernieres sont accessibles a tout moment sur le site via un lien en pied de page.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground">1. Editeur du site</h2>
            <p>
              Le site bmi-imc.com est edite par :<br />
              <strong>Mottalib Radif</strong><br />
              Email :{" "}
              <a href="mailto:contact@bmi-imc.com" className="text-primary hover:underline">
                contact@bmi-imc.com
              </a>
            </p>
            <p>
              Conformement a l'article 6-I-1 de la loi pour la confiance dans l'economie numerique,
              l'identite complete de l'editeur est mise a la disposition du public. L'editeur assure la
              responsabilite editoriale du contenu publie sur le site, a l'exception des contenus generes
              par le calculateur IMC qui dependent des donnees saisies par l'utilisateur et des parametres
              de sante en vigueur a la date de consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication du site bmi-imc.com est Mottalib Radif, en qualite de
              fondateur et editeur. Conformement aux articles 93-2 et 93-3 de la loi n° 82-652 du
              29 juillet 1982 sur la communication audiovisuelle, modifiee par la loi n° 2004-575 du
              21 juin 2004, le directeur de la publication est la personne physique responsable du
              contenu editorial du site. Il peut etre contacte par courrier electronique a l'adresse
              contact@bmi-imc.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Hebergement</h2>
            <p>
              Le site bmi-imc.com est heberge par :<br />
              <strong>GitHub Pages</strong> — GitHub, Inc.<br />
              88 Colin P Kelly Jr Street<br />
              San Francisco, CA 94107<br />
              Etats-Unis<br />
              Site web : https://pages.github.com
            </p>
            <p>
              GitHub Pages est un service d'hebergement de sites web statiques fourni par GitHub, Inc.,
              filiale de Microsoft Corporation. L'infrastructure repose sur un reseau mondial de diffusion
              de contenu (CDN) permettant de servir les pages du site depuis le serveur le plus proche de
              chaque visiteur afin d'optimiser les temps de chargement. GitHub Pages utilise le protocole
              HTTPS pour securiser les echanges entre le navigateur de l'utilisateur et les serveurs
              d'hebergement, assurant ainsi le chiffrement des donnees en transit.
            </p>
            <p>
              Conformement a l'article 6-I-2 de la loi pour la confiance dans l'economie numerique, les
              coordonnees de l'hebergeur sont communiquees ci-dessus. En tant qu'hebergeur technique,
              GitHub, Inc. n'exerce aucun controle editorial sur le contenu du site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Objet du site</h2>
            <p>
              BMI-IMC.com est un outil en ligne gratuit permettant de calculer l'Indice de Masse Corporelle
              (IMC) selon la formule etablie par l'Organisation Mondiale de la Sante (OMS). Le site fournit
              du contenu educatif et informatif sur l'IMC, la gestion du poids et la sante dans plusieurs
              langues. Tous les outils et contenus sont fournis gratuitement. Le calculateur IMC fonctionne
              integralement cote client (dans le navigateur de l'utilisateur) et aucune donnee personnelle
              de sante n'est transmise a nos serveurs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Propriete intellectuelle</h2>
            <p>
              L'ensemble du contenu du site bmi-imc.com est protege par les dispositions du Code de la
              propriete intellectuelle, notamment les articles L.111-1 et suivants relatifs au droit
              d'auteur et les articles L.341-1 et suivants relatifs au droit des producteurs de bases de
              donnees. Cette protection couvre l'integralite des elements constitutifs du site, qu'il
              s'agisse des textes, articles, algorithmes de calcul, code source, design graphique, mise
              en page, logos, iconographie, photographies, illustrations et autres elements de propriete
              intellectuelle.
            </p>
            <p>
              Conformement aux articles L.122-4 et L.122-5 du Code de la propriete intellectuelle, toute
              representation ou reproduction, integrale ou partielle, du site ou de l'un quelconque de
              ses elements, par quelque procede que ce soit, sans l'autorisation expresse et prealable de
              l'editeur, est strictement interdite et constituerait une contrefacon sanctionnee par les
              articles L.335-2 et suivants du Code de la propriete intellectuelle.
            </p>
            <p>
              L'utilisateur est autorise a consulter le site et a utiliser le calculateur IMC pour un
              usage strictement personnel et prive. Toute utilisation a des fins commerciales, toute
              reproduction systematique et toute rediffusion du contenu sont interdites sans accord
              prealable ecrit de l'editeur. Les courtes citations a des fins d'information sont autorisees
              a condition de mentionner la source (bmi-imc.com) et de ne pas denaturer le contenu cite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. Avertissement medical</h2>
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
            <h2 className="text-xl font-bold text-foreground">7. Politique de confidentialite</h2>
            <p>
              BMI-IMC.com respecte votre vie privee et s'engage a proteger les donnees personnelles de ses
              utilisateurs conformement au Reglement General sur la Protection des Donnees (RGPD — Reglement
              UE 2016/679) et a la loi Informatique et Libertes du 6 janvier 1978 modifiee.
            </p>
            <p>
              <strong>Donnees de sante :</strong> Nous ne collectons, ne stockons et ne transmettons aucune
              donnee de sante personnelle saisie dans notre calculateur IMC. Tous les calculs sont effectues
              localement dans votre navigateur web a l'aide de JavaScript. Aucune donnee (poids, taille,
              age, sexe) n'est envoyee a nos serveurs ou a des tiers.
            </p>
            <p>
              <strong>Donnees de navigation :</strong> Nous pouvons utiliser des outils d'analyse anonymises
              pour comprendre comment les visiteurs utilisent notre site. Ces donnees sont agregees et ne
              peuvent pas etre utilisees pour identifier des utilisateurs individuels. Aucun cookie de
              profilage ou publicitaire n'est utilise.
            </p>
            <p>
              <strong>Services tiers :</strong> Ce site web peut charger des polices depuis Google Fonts.
              En utilisant ce site, vous consentez au traitement des donnees par ces services conformement
              a leurs politiques de confidentialite respectives.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">8. Politique des cookies</h2>
            <p>
              Conformement a la directive europeenne 2009/136/CE et aux recommandations de la CNIL, nous
              vous informons que le site bmi-imc.com peut utiliser des cookies essentiels strictement
              necessaires au bon fonctionnement du site. Ces cookies techniques ne collectent aucune
              donnee personnelle et ne necessitent pas de consentement prealable conformement a l'article
              82 de la loi Informatique et Libertes.
            </p>
            <p>
              Aucun cookie de suivi, de profilage ou publicitaire n'est utilise sur ce site. Les preferences
              utilisateur (comme le choix de la langue ou le mode sombre/clair) sont stockees dans le
              localStorage du navigateur, qui n'est pas un cookie et n'est jamais transmis a nos serveurs.
              Vous pouvez configurer votre navigateur pour refuser les cookies ou supprimer ceux deja
              installes a tout moment via les parametres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">9. RGPD — Droits des utilisateurs</h2>
            <p>
              Conformement aux articles 15 a 22 du Reglement General sur la Protection des Donnees
              (RGPD), vous disposez des droits suivants concernant vos donnees personnelles :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Droit d'acces</strong> (article 15) : obtenir la confirmation que des donnees personnelles vous concernant sont ou ne sont pas traitees et, si elles le sont, obtenir une copie de ces donnees.</li>
              <li><strong>Droit de rectification</strong> (article 16) : obtenir la correction de donnees personnelles inexactes ou incompletes.</li>
              <li><strong>Droit a l'effacement</strong> (article 17, « droit a l'oubli ») : obtenir la suppression de vos donnees personnelles lorsque les conditions prevues par la loi sont remplies.</li>
              <li><strong>Droit a la limitation du traitement</strong> (article 18) : obtenir la limitation du traitement dans certains cas prevus par la loi.</li>
              <li><strong>Droit a la portabilite</strong> (article 20) : recevoir vos donnees personnelles dans un format structure, couramment utilise et lisible par machine.</li>
              <li><strong>Droit d'opposition</strong> (article 21) : vous opposer a tout moment au traitement de vos donnees personnelles pour des motifs lies a votre situation particuliere.</li>
            </ul>
            <p>
              Etant donne que le site ne collecte pas de donnees personnelles identifiantes, ces droits
              ne sont actuellement pas applicables en pratique. Toutefois, pour toute demande, vous pouvez
              nous contacter a l'adresse contact@bmi-imc.com. Nous nous engageons a repondre dans un
              delai de 30 jours conformement a l'article 12 du RGPD.
            </p>
            <p>
              Vous disposez egalement du droit d'introduire une reclamation aupres de la Commission
              Nationale de l'Informatique et des Libertes (CNIL), autorite de controle francaise en
              matiere de protection des donnees : www.cnil.fr.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">10. Conditions generales d'utilisation</h2>
            <p>
              L'utilisation du site bmi-imc.com implique l'acceptation pleine et entiere des presentes
              conditions d'utilisation. Le site est accessible gratuitement a tout utilisateur disposant
              d'un acces a Internet. Tous les frais supportes par l'utilisateur pour acceder au service
              (materiel informatique, logiciels, connexion Internet, etc.) sont a sa charge exclusive.
            </p>
            <p>
              L'editeur met en oeuvre tous les moyens raisonnables a sa disposition pour assurer un acces
              de qualite au site, mais n'est tenu d'aucune obligation de resultat. L'acces au site peut
              etre interrompu a tout moment, notamment en raison de maintenance technique, de mise a jour
              ou pour toute autre raison, sans que cela ne puisse donner lieu a une quelconque obligation
              ou indemnisation.
            </p>
            <p>
              L'utilisateur s'engage a utiliser le site conformement a sa destination et a ne pas
              l'utiliser a des fins illicites ou contraires aux presentes conditions. Il s'interdit
              notamment de tenter de porter atteinte a la securite du site, d'utiliser des robots ou
              des programmes automatises pour acceder au contenu en masse et de reproduire le site en
              tout ou partie sans autorisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">11. Limitation de responsabilite</h2>
            <p>
              BMI-IMC.com et son editeur ne pourront etre tenus responsables de tout dommage direct,
              indirect, accessoire, special, consecutif ou punitif, y compris mais sans s'y limiter la
              perte de donnees, de revenus ou de profit, decoulant de ou en relation avec l'utilisation
              de ce site web ou de son contenu.
            </p>
            <p>
              L'editeur s'efforce de fournir des informations aussi precises et a jour que possible, mais
              ne fait aucune declaration ni garantie, expresse ou implicite, quant a l'exhaustivite,
              l'exactitude, la fiabilite, l'adequation ou la disponibilite du site ou des informations,
              produits, services ou graphiques connexes contenus sur le site, pour quelque usage que ce soit.
            </p>
            <p>
              L'editeur decline egalement toute responsabilite en cas d'interruption du service, de
              dysfonctionnement technique, de perte de donnees ou de dommage cause a l'equipement
              informatique de l'utilisateur resultant de la navigation sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">12. Liens hypertextes</h2>
            <p>
              Le site bmi-imc.com peut contenir des liens hypertextes renvoyant vers d'autres sites
              Internet, notamment les sites d'organismes de sante officiels (OMS, sante.gouv.fr). Ces
              liens sont proposes a titre informatif. L'editeur de bmi-imc.com n'exerce aucun controle
              sur le contenu de ces sites tiers et decline toute responsabilite quant a leur contenu,
              leur disponibilite ou les consequences de leur consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">13. Droit applicable et juridiction competente</h2>
            <p>
              Les presentes mentions legales sont regies par le droit francais. En cas de litige relatif
              a l'interpretation ou a l'execution des presentes, et apres echec de toute tentative de
              resolution amiable, les tribunaux francais seront seuls competents. La juridiction competente
              sera determinee en fonction de la nature du litige et de la qualite des parties, conformement
              aux regles de competence territoriale et d'attribution prevues par le Code de procedure
              civile et le Code de la consommation.
            </p>
            <p>
              L'eventuelle nullite d'une clause des presentes ne saurait entrainer la nullite de
              l'ensemble des mentions legales. Les parties s'efforceront, dans un tel cas, de remplacer
              la clause nulle par une clause valide se rapprochant le plus possible de l'intention
              initiale des parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">14. Modification des mentions legales</h2>
            <p>
              L'editeur se reserve le droit de modifier les presentes mentions legales a tout moment, afin
              de les adapter aux evolutions legislatives et reglementaires ou aux modifications du site.
              Les modifications prendront effet des leur publication sur cette page. L'utilisateur est
              invite a consulter regulierement cette page pour prendre connaissance d'eventuelles
              modifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">15. Contact</h2>
            <p>
              Pour toute question concernant ces mentions legales, notre politique de confidentialite ou
              le fonctionnement du site, veuillez nous contacter a :{" "}
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
