import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Mail, GraduationCap, Shield, Heart, BookOpen, Globe, Scale, AlertTriangle } from "lucide-react";

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>A propos de BMI-IMC — Calculateur IMC Gratuit par Mottalib Radif</title>
        <meta name="description" content="Decouvrez BMI-IMC.com, un calculateur d'Indice de Masse Corporelle gratuit cree par Mottalib Radif, MBA INSEAD. Calculs IMC precis bases sur les normes OMS en 9 langues." />
        <link rel="canonical" href="https://bmi-imc.com/a-propos/" />
      </Helmet>
      <Header />

      <div className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8 gradient-text">A propos de BMI-IMC.com</h1>

        {/* Author Card */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-xl border border-border bg-muted/30 p-6 mb-10">
          <img
            src="/team/mottalib-radif.jpg"
            alt="Mottalib Radif — Fondateur et Editeur de BMI-IMC.com"
            className="h-32 w-32 rounded-full object-cover shadow-lg"
            width={128}
            height={128}
          />
          <div>
            <h2 className="text-2xl font-bold">Mottalib Radif</h2>
            <p className="text-primary font-medium mb-2">Fondateur et Editeur</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>MBA, INSEAD</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionne par la sante et les outils numeriques au service du bien-etre, diplome MBA de l'INSEAD.
              Specialise dans la creation d'outils de sante accessibles et fondes sur les donnees medicales
              officielles. Mottalib Radif, MBA INSEAD, a fonde BMI-IMC.com pour fournir des calculateurs IMC gratuits, precis et faciles
              a utiliser dans plusieurs langues, bases sur les normes de l'OMS. Son parcours allie rigueur
              analytique et engagement profond en faveur de la litteratie en sante accessible a tous,
              quelle que soit la langue ou la localisation geographique.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:contact@bmi-imc.com" className="text-primary hover:underline">
                contact@bmi-imc.com
              </a>
            </div>
          </div>
        </div>

        {/* Notre mission */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Notre Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            BMI-IMC.com a ete cree avec une mission simple mais puissante : offrir a chacun dans le monde
            un acces gratuit a des calculs d'Indice de Masse Corporelle fiables et a des informations de
            sante, quelle que soit la langue ou la localisation de l'utilisateur. Nous croyons que comprendre
            son IMC est une premiere etape fondamentale vers une meilleure conscience de sa sante et des
            decisions eclairees concernant son bien-etre.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Notre calculateur est base sur les normes officielles de classification de l'IMC de
            l'Organisation Mondiale de la Sante (OMS) et est concu pour fournir des resultats instantanes
            et precis avec des interpretations claires. Nous ne collectons aucune donnee de sante
            personnelle, et tous les calculs sont effectues directement dans votre navigateur pour
            une confidentialite maximale.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Aujourd'hui, BMI-IMC.com sert des utilisateurs dans plus de 50 pays et est disponible en
            9 langues : francais, anglais, espagnol, portugais, allemand, italien, hindi, chinois et arabe.
            Chaque page a ete soigneusement elaboree pour fournir des informations medicalement exactes
            adaptees au contexte sanitaire de chaque region. Cet engagement envers l'accessibilite
            multilingue reflete la conviction que l'information en sante ne devrait jamais etre limitee
            par les barrieres linguistiques.
          </p>
        </section>

        {/* Qu'est-ce que l'IMC */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Qu'est-ce que l'Indice de Masse Corporelle (IMC) ?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'Indice de Masse Corporelle, communement appele IMC (ou BMI en anglais pour Body Mass Index),
            est une valeur numerique derivee du poids et de la taille d'une personne. Il sert d'outil de
            depistage simple utilise par les professionnels de sante dans le monde entier pour classer les
            individus dans des categories de poids pouvant indiquer des risques potentiels pour la sante.
            La valeur de l'IMC est calculee en divisant le poids d'une personne en kilogrammes par le carre
            de sa taille en metres : IMC = poids (kg) / taille (m)².
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'IMC a ete initialement concu au debut du XIXe siecle par Adolphe Quetelet, un mathematicien,
            astronome et statisticien belge. Quetelet a developpe cette formule entre 1830 et 1850 dans le
            cadre de ses travaux sur la "physique sociale", ou il cherchait a definir les caracteristiques
            de "l'homme moyen" par l'analyse statistique des populations humaines. Son objectif initial
            n'etait pas le depistage medical mais plutot un outil pour etudier les tendances de la
            morphologie au niveau des populations.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Le terme "Indice de Masse Corporelle" n'a ete introduit qu'en 1972, lorsque Ancel Keys,
            un physiologiste americain, a publie une etude de reference recommandant l'Indice de Quetelet
            comme la meilleure approximation simple du pourcentage de graisse corporelle dans les etudes
            de population. Keys a explicitement note que l'IMC etait approprie pour l'analyse au niveau
            populationnel plutot que pour le diagnostic clinique individuel, une nuance qui reste pertinente
            aujourd'hui. Depuis lors, l'IMC est devenu la metrique la plus largement utilisee pour classer
            l'insuffisance ponderale, le poids normal, le surpoids et l'obesite chez les adultes dans
            les contextes cliniques et de sante publique a travers le monde.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Malgre sa simplicite, l'IMC s'est avere etre un outil epidemiologique precieux. Des etudes
            a grande echelle ont systematiquement demontre des correlations entre des valeurs d'IMC elevees
            et un risque accru de maladies cardiovasculaires, de diabete de type 2, de certains cancers,
            d'apnee du sommeil et de troubles musculo-squelettiques. L'Organisation Mondiale de la Sante
            a adopte l'IMC comme systeme de classification standard pour le surpoids et l'obesite chez
            les adultes, etablissant les seuils qui restent en vigueur aujourd'hui.
          </p>
        </section>

        {/* Classification OMS */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-6 h-6 text-primary" />
            Classification de l'IMC selon l'OMS
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'Organisation Mondiale de la Sante definit les categories d'IMC suivantes pour les adultes
            de 20 ans et plus, qui constituent la base du systeme d'interpretation de notre calculateur.
            Ces seuils sont reconnus internationalement et utilises par les systemes de sante du monde entier
            pour depister les problemes de sante potentiellement lies au poids.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold">Categorie</th>
                  <th className="text-left p-3 font-semibold">IMC (kg/m²)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border"><td className="p-3">Maigreur severe</td><td className="p-3">&lt; 16,0</td></tr>
                <tr className="border-t border-border"><td className="p-3">Maigreur moderee</td><td className="p-3">16,0 - 16,9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Maigreur legere</td><td className="p-3">17,0 - 18,4</td></tr>
                <tr className="border-t border-border"><td className="p-3 font-medium">Poids normal</td><td className="p-3">18,5 - 24,9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Pre-obesite (Surpoids)</td><td className="p-3">25,0 - 29,9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Obesite classe I</td><td className="p-3">30,0 - 34,9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Obesite classe II</td><td className="p-3">35,0 - 39,9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Obesite classe III</td><td className="p-3">&ge; 40,0</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Il est important de noter que ces seuils ont ete principalement etablis a partir de donnees
            provenant de populations europeennes et nord-americaines. L'OMS a reconnu que differents
            groupes ethniques peuvent presenter des risques pour la sante a des seuils d'IMC differents.
            Par exemple, les recherches ont montre que les populations asiatiques tendent a avoir des
            pourcentages de graisse corporelle plus eleves a des valeurs d'IMC plus basses, ce qui a
            conduit plusieurs pays asiatiques a adopter des seuils de surpoids et d'obesite plus bas
            pour leurs populations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Pour les enfants et adolescents ages de 2 a 19 ans, l'interpretation de l'IMC differe de celle
            des adultes. Au lieu de seuils fixes, l'IMC pediatrique est exprime sous forme de percentile
            par rapport aux autres enfants du meme age et du meme sexe. L'OMS et les Centers for Disease
            Control and Prevention (CDC) fournissent des courbes de croissance specifiques a l'age et au
            sexe que notre calculateur utilise pour delivrer des classifications appropriees aux utilisateurs
            plus jeunes.
          </p>
        </section>

        {/* Limites de l'IMC */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-primary" />
            Les limites de l'IMC
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bien que l'IMC soit un outil de depistage precieux, il presente des limites bien documentees que
            les utilisateurs doivent comprendre. L'IMC ne mesure pas directement la graisse corporelle et ne
            peut pas distinguer la masse grasse de la masse maigre. Cela signifie que les individus
            musculairement developpes, comme les athletes et les culturistes, peuvent recevoir une
            classification de surpoids ou d'obesite malgre un faible pourcentage de graisse corporelle.
            Inversement, des individus avec une faible masse musculaire peuvent avoir un IMC normal tout
            en portant des quantites malsaines de graisse viscerale.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'IMC ne tient pas non plus compte de la distribution des graisses. La recherche a demontre que
            la graisse abdominale, egalement appelee graisse viscerale, est plus fortement associee aux
            maladies cardiovasculaires et au syndrome metabolique que la graisse stockee dans d'autres
            zones du corps. Deux personnes avec des valeurs d'IMC identiques peuvent avoir des profils de
            risque de sante tres differents selon l'endroit ou leur graisse corporelle est concentree.
            Pour cette raison, les professionnels de sante recommandent souvent d'utiliser des mesures
            complementaires telles que le tour de taille, le rapport taille-hanches et le pourcentage de
            graisse corporelle en complement de l'IMC pour une evaluation de sante plus complete.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            L'IMC peut egalement etre moins fiable pour certaines populations, notamment les femmes
            enceintes, les personnes agees qui ont pu subir une perte musculaire liee a l'age, et les
            enfants et adolescents en croissance dont la composition corporelle change rapidement. Nos
            pages de contenu sur BMI-IMC.com fournissent des explications detaillees de ces limites et
            encouragent les utilisateurs a considerer leur resultat d'IMC comme un element d'un tableau
            de sante plus large, et non comme un diagnostic definitif.
          </p>
        </section>

        {/* Ce que nous proposons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            Ce Que Nous Proposons
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Calculateur IMC Gratuit", desc: "Calcul instantane de l'Indice de Masse Corporelle avec interpretation selon les normes OMS, fourchette de poids ideal et recommandations de sante personnalisees." },
              { title: "Outils par Profil", desc: "Des calculateurs IMC dedies pour les hommes, les femmes, les sportifs et les enfants avec des recommandations adaptees a l'age et au sexe." },
              { title: "Guides Sante Complets", desc: "Articles approfondis sur l'interpretation de l'IMC, ses limites, la gestion du poids et de la sante, rediges par des professionnels qualifies." },
              { title: "9 Langues Supportees", desc: "Disponibilite complete en francais, anglais, espagnol, portugais, allemand, italien, hindi, chinois et arabe." },
              { title: "Confidentialite Avant Tout", desc: "Aucune donnee personnelle n'est collectee. Tous les calculs sont effectues dans votre navigateur. Pas de cookies de suivi." },
              { title: "Contenu Base sur la Science", desc: "Toutes les informations de sante sont basees sur les directives de l'OMS, la litterature medicale evaluee par des pairs et les recommandations des autorites nationales de sante." },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodologie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Notre Methodologie et Sources de Donnees</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'Indice de Masse Corporelle (IMC) est calcule a l'aide de la formule internationalement
            reconnue etablie par l'Organisation Mondiale de la Sante : IMC = poids (kg) / taille (m)².
            Cette mesure simple mais efficace est utilisee par les professionnels de sante du monde entier
            depuis les annees 1970 pour depister les problemes de sante potentiels lies au poids. Notre
            calculateur implemente fidelement cette formule avec le support des unites metriques (kilogrammes
            et centimetres) et imperiales (livres et pouces), en effectuant automatiquement toutes les
            conversions necessaires.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Notre calculateur met en oeuvre la classification standard de l'IMC de l'OMS : insuffisance
            ponderale (IMC inferieur a 18,5), poids normal (18,5 a 24,9), surpoids (25,0 a 29,9) et
            obesite (30,0 et plus), avec des subdivisions supplementaires pour les classes d'obesite I,
            II et III. Pour les enfants et les adolescents, nous utilisons des courbes de percentiles
            specifiques a l'age et au sexe, comme recommande par l'OMS et les Centers for Disease Control
            and Prevention (CDC) des Etats-Unis.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Les informations de sante et recommandations presentees sur BMI-IMC.com sont tirees de sources
            faisant autorite, notamment la Base de donnees mondiale de l'OMS sur l'Indice de Masse Corporelle,
            les courbes de croissance et directives IMC des CDC americains, les directives cliniques des
            National Institutes of Health (NIH) sur le surpoids et l'obesite, et la litterature medicale
            evaluee par des pairs publiee dans des revues telles que The Lancet, le British Medical
            Journal (BMJ) et le Journal of the American Medical Association (JAMA).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Toutes les recommandations de sante sur ce site sont fournies a titre informatif uniquement et
            ne doivent pas remplacer un avis medical professionnel. Nous encourageons les utilisateurs a
            consulter des professionnels de sante pour des evaluations de sante personnalisees. BMI-IMC.com
            est une ressource educative, et non un outil de diagnostic medical.
          </p>
        </section>

        {/* Approche multilingue */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Notre Approche Multilingue
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            La litteratie en sante ne devrait pas etre contrainte par la langue. BMI-IMC.com est disponible
            en neuf langues : francais, anglais, espagnol, portugais, allemand, italien, hindi, chinois et
            arabe. Chaque version linguistique n'est pas simplement une traduction automatique du contenu
            anglais. Chaque page a ete soigneusement adaptee pour refleter le contexte sanitaire, les
            habitudes alimentaires et la terminologie medicale specifiques a chaque communaute linguistique
            et culturelle.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Notre approche multilingue prend egalement en compte les donnees de sante regionales. Par exemple,
            les taux de prevalence de l'obesite, les recommandations alimentaires et les structures des
            systemes de sante varient considerablement d'une region a l'autre. Le contenu de BMI-IMC.com
            reconnait ces differences et fournit des informations contextuellement pertinentes aux
            utilisateurs du monde entier. Cet engagement envers l'accessibilite linguistique et culturelle
            est au coeur de la vision de Mottalib Radif, MBA INSEAD, qui a concu la plateforme pour servir
            un public veritablement mondial.
          </p>
        </section>

        {/* Pourquoi nous faire confiance */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pourquoi Nous Faire Confiance ?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Contenu expertement recherche :</strong> Nos informations de sante sont recherchees et redigees sur la base des directives de l'OMS, de la litterature medicale evaluee par des pairs et des recommandations des autorites nationales de sante de plusieurs pays.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Methodologie transparente :</strong> Nous expliquons clairement comment l'IMC est calcule, quelles sont ses limites et quand d'autres mesures de sante doivent etre considerees en complement de l'IMC.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Aucun biais commercial :</strong> BMI-IMC.com est entierement gratuit, sans version premium, sans contenu sponsorise et sans recommandations de produits. Notre seul objectif est de fournir des informations de sante precises.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Confidentialite par conception :</strong> Nous ne collectons, ne stockons et ne transmettons aucune donnee de sante personnelle. Tous les calculs d'IMC sont effectues localement dans votre navigateur. Aucun cookie n'est utilise a des fins de suivi.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Mises a jour regulieres :</strong> Notre contenu est revu et mis a jour regulierement pour refleter les dernieres directives de l'OMS et la recherche medicale sur l'indice de masse corporelle et la gestion du poids.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Accessibilite :</strong> BMI-IMC.com est concu pour etre accessible aux utilisateurs de toutes capacites. Notre interface suit les meilleures pratiques d'accessibilite web, garantissant que les lecteurs d'ecran, la navigation au clavier et les technologies d'assistance fonctionnent parfaitement avec nos outils.</span>
            </li>
          </ul>
        </section>

        {/* Pourquoi l'IMC est important */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pourquoi l'IMC est Important pour la Sante Publique</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Le surpoids et l'obesite sont devenus un defi mondial de sante publique. Selon l'Organisation
            Mondiale de la Sante, l'obesite mondiale a presque triple depuis 1975. En 2016, plus de
            1,9 milliard d'adultes etaient classes en surpoids, et plus de 650 millions etaient obeses.
            Ces chiffres continuent d'augmenter, rendant les outils de depistage accessibles comme les
            calculateurs d'IMC de plus en plus importants pour la sensibilisation precoce et la prevention.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Bien que l'IMC seul ne puisse diagnostiquer aucune pathologie, il constitue une premiere etape
            efficace pour identifier les individus susceptibles de beneficier d'une evaluation medicale
            approfondie. En fournissant des calculs d'IMC gratuits et instantanes en neuf langues,
            BMI-IMC.com vise a contribuer a la litteratie mondiale en sante et a permettre aux individus
            de prendre des mesures proactives pour comprendre leur statut ponderal et leur sante globale.
            C'est la motivation centrale du travail de Mottalib Radif, MBA INSEAD, et de l'ensemble du
            projet BMI-IMC.com.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Nous Contacter</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nous valorisons vos retours et cherchons toujours a ameliorer nos outils et notre contenu.
            Que vous ayez une question sur le calcul de l'IMC, une suggestion pour une nouvelle
            fonctionnalite, ou que vous souhaitiez signaler un probleme, n'hesitez pas a nous contacter.
          </p>
          <div className="rounded-lg border border-border p-4 inline-flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:contact@bmi-imc.com" className="text-primary font-medium hover:underline">
              contact@bmi-imc.com
            </a>
          </div>
        </section>

        {/* Footer links */}
        <div className="border-t border-border pt-6 mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link to="/imc" className="hover:text-primary">Calculateur IMC</Link>
          <Link to="/mentions-legales" className="hover:text-primary">Mentions Legales</Link>
          <Link to="/" className="hover:text-primary">BMI Calculator (EN)</Link>
          <Link to="/about" className="hover:text-primary">About (EN)</Link>
        </div>
      </div>
    </div>
  );
};

export default APropos;
