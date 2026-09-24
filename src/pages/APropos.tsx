import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MiseAJour } from "@/components/MiseAJour";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Mail, GraduationCap, Shield, Heart, BookOpen, Globe, Scale, AlertTriangle } from "lucide-react";

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>BMI-IMC.com : qui l'édite, et comment le site est fait</title>
        <meta name="description" content="Découvrez BMI-IMC.com, un calculateur d'Indice de Masse Corporelle gratuit créé par Radif Partners, Éditeur de calculateurs et de guides pratiques. Calculs IMC précis basés sur les normes OMS en 9 langues." />
        <link rel="canonical" href="https://bmi-imc.com/a-propos/" />
      </Helmet>
      <Header />

      <div className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8 gradient-text">À propos de BMI-IMC.com</h1>
        {/* §8.4 : date de mise à jour, juste sous le titre. */}
        <MiseAJour />

        {/* Author Card */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-xl border border-border bg-muted/30 p-6 mb-10">
          <div>
            <h2 className="text-2xl font-bold">Radif Partners</h2>
            <p className="text-primary font-medium mb-2">Fondateur et Éditeur</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Éditeur de calculateurs et de guides pratiques</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionné par la santé et les outils numériques au service du bien-être.
              Spécialisé dans la création d'outils de santé accessibles et fondés sur les données médicales
              officielles. Radif Partners, Éditeur de calculateurs et de guides pratiques, a fondé BMI-IMC.com pour fournir des calculateurs IMC gratuits, précis et faciles
              à utiliser dans plusieurs langues, basés sur les normes de l'OMS. Son parcours allie rigueur
              analytique et engagement profond en faveur de la littératie en santé accessible à tous,
              quelle que soit la langue ou la localisation géographique.
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
            BMI-IMC.com a été créé avec une mission simple mais puissante : offrir à chacun dans le monde
            un accès gratuit à des calculs d'Indice de Masse Corporelle fiables et à des informations de
            santé, quelle que soit la langue ou la localisation de l'utilisateur. Nous croyons que comprendre
            son IMC est une première étape fondamentale vers une meilleure conscience de sa santé et des
            décisions éclairées concernant son bien-être.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Notre calculateur est basé sur les normes officielles de classification de l'IMC de
            l'Organisation Mondiale de la Santé (OMS) et est conçu pour fournir des résultats instantanés
            et précis avec des interprétations claires. Nous ne collectons aucune donnée de santé
            personnelle, et tous les calculs sont effectués directement dans votre navigateur pour
            une confidentialité maximale.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Aujourd'hui, BMI-IMC.com sert des utilisateurs dans plus de 50 pays et est disponible en
            9 langues : français, anglais, espagnol, portugais, allemand, italien, hindi, chinois et arabe.
            Chaque page a été soigneusement élaborée pour fournir des informations médicalement exactes
            adaptées au contexte sanitaire de chaque région. Cet engagement envers l'accessibilité
            multilingue reflète la conviction que l'information en santé ne devrait jamais être limitée
            par les barrières linguistiques.
          </p>
        </section>

        {/* Qu'est-ce que l'IMC */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Qu'est-ce que l'Indice de Masse Corporelle (IMC) ?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'Indice de Masse Corporelle, communément appelé IMC (ou BMI en anglais pour Body Mass Index),
            est une valeur numérique dérivée du poids et de la taille d'une personne. Il sert d'outil de
            dépistage simple utilisé par les professionnels de santé dans le monde entier pour classer les
            individus dans des catégories de poids pouvant indiquer des risques potentiels pour la santé.
            La valeur de l'IMC est calculée en divisant le poids d'une personne en kilogrammes par le carré
            de sa taille en mètres : IMC = poids (kg) / taille (m)².
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'IMC a été initialement conçu au début du XIXe siècle par Adolphe Quetelet, un mathématicien,
            astronome et statisticien belge. Quetelet a développé cette formule entre 1830 et 1850 dans le
            cadre de ses travaux sur la "physique sociale", où il cherchait à définir les caractéristiques
            de "l'homme moyen" par l'analyse statistique des populations humaines. Son objectif initial
            n'était pas le dépistage médical mais plutôt un outil pour étudier les tendances de la
            morphologie au niveau des populations.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Le terme "Indice de Masse Corporelle" n'a été introduit qu'en 1972, lorsque Ancel Keys,
            un physiologiste américain, a publié une étude de référence recommandant l'Indice de Quetelet
            comme la meilleure approximation simple du pourcentage de graisse corporelle dans les études
            de population. Keys a explicitement noté que l'IMC était approprié pour l'analyse au niveau
            populationnel plutôt que pour le diagnostic clinique individuel, une nuance qui reste pertinente
            aujourd'hui. Depuis lors, l'IMC est devenu la métrique la plus largement utilisée pour classer
            l'insuffisance pondérale, le poids normal, le surpoids et l'obésité chez les adultes dans
            les contextes cliniques et de santé publique à travers le monde.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Malgré sa simplicité, l'IMC s'est avéré être un outil épidémiologique précieux. Des études
            à grande échelle ont systématiquement démontré des corrélations entre des valeurs d'IMC élevées
            et un risque accru de maladies cardiovasculaires, de diabète de type 2, de certains cancers,
            d'apnée du sommeil et de troubles musculo-squelettiques. L'Organisation Mondiale de la Santé
            a adopté l'IMC comme système de classification standard pour le surpoids et l'obésité chez
            les adultes, établissant les seuils qui restent en vigueur aujourd'hui.
          </p>
        </section>

        {/* Classification OMS */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-6 h-6 text-primary" />
            Classification de l'IMC selon l'OMS
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'Organisation Mondiale de la Santé définit les catégories d'IMC suivantes pour les adultes
            de 20 ans et plus, qui constituent la base du système d'interprétation de notre calculateur.
            Ces seuils sont reconnus internationalement et utilisés par les systèmes de santé du monde entier
            pour dépister les problèmes de santé potentiellement liés au poids.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold">Catégorie</th>
                  <th className="text-left p-3 font-semibold">IMC (kg/m²)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border"><td className="p-3">Maigreur sévère</td><td className="p-3">&lt; 16,0</td></tr>
                <tr className="border-t border-border"><td className="p-3">Maigreur modérée</td><td className="p-3">16,0 - 16,9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Maigreur légère</td><td className="p-3">17,0 - 18,4</td></tr>
                <tr className="border-t border-border"><td className="p-3 font-medium">Poids normal</td><td className="p-3">18,5 - 24,9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Pré-obésité (Surpoids)</td><td className="p-3">25,0 - 29,9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Obésité classe I</td><td className="p-3">30,0 - 34,9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Obésité classe II</td><td className="p-3">35,0 - 39,9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Obésité classe III</td><td className="p-3">&ge; 40,0</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Il est important de noter que ces seuils ont été principalement établis à partir de données
            provenant de populations européennes et nord-américaines. L'OMS a reconnu que différents
            groupes ethniques peuvent présenter des risques pour la santé à des seuils d'IMC différents.
            Par exemple, les recherches ont montré que les populations asiatiques tendent à avoir des
            pourcentages de graisse corporelle plus élevés à des valeurs d'IMC plus basses, ce qui a
            conduit plusieurs pays asiatiques à adopter des seuils de surpoids et d'obésité plus bas
            pour leurs populations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Pour les enfants et adolescents âgés de 2 à 19 ans, l'interprétation de l'IMC diffère de celle
            des adultes. Au lieu de seuils fixes, l'IMC pédiatrique est exprimé sous forme de percentile
            par rapport aux autres enfants du même âge et du même sexe. L'OMS et les Centers for Disease
            Control and Prevention (CDC) fournissent des courbes de croissance spécifiques à l'âge et au
            sexe que notre calculateur utilise pour délivrer des classifications appropriées aux utilisateurs
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
            Bien que l'IMC soit un outil de dépistage précieux, il présente des limites bien documentées que
            les utilisateurs doivent comprendre. L'IMC ne mesure pas directement la graisse corporelle et ne
            peut pas distinguer la masse grasse de la masse maigre. Cela signifie que les individus
            musculairement développés, comme les athlètes et les culturistes, peuvent recevoir une
            classification de surpoids ou d'obésité malgré un faible pourcentage de graisse corporelle.
            Inversement, des individus avec une faible masse musculaire peuvent avoir un IMC normal tout
            en portant des quantités malsaines de graisse viscérale.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'IMC ne tient pas non plus compte de la distribution des graisses. La recherche a démontré que
            la graisse abdominale, également appelée graisse viscérale, est plus fortement associée aux
            maladies cardiovasculaires et au syndrome métabolique que la graisse stockée dans d'autres
            zones du corps. Deux personnes avec des valeurs d'IMC identiques peuvent avoir des profils de
            risque de santé très différents selon l'endroit où leur graisse corporelle est concentrée.
            Pour cette raison, les professionnels de santé recommandent souvent d'utiliser des mesures
            complémentaires telles que le tour de taille, le rapport taille-hanches et le pourcentage de
            graisse corporelle en complément de l'IMC pour une évaluation de santé plus complète.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            L'IMC peut également être moins fiable pour certaines populations, notamment les femmes
            enceintes, les personnes âgées qui ont pu subir une perte musculaire liée à l'âge, et les
            enfants et adolescents en croissance dont la composition corporelle change rapidement. Nos
            pages de contenu sur BMI-IMC.com fournissent des explications détaillées de ces limites et
            encouragent les utilisateurs à considérer leur résultat d'IMC comme un élément d'un tableau
            de santé plus large, et non comme un diagnostic définitif.
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
              { title: "Calculateur IMC Gratuit", desc: "Calcul instantané de l'Indice de Masse Corporelle avec interprétation selon les normes OMS, fourchette de poids idéal et recommandations de santé personnalisées." },
              { title: "Outils par Profil", desc: "Des calculateurs IMC dédiés pour les hommes, les femmes, les sportifs et les enfants avec des recommandations adaptées à l'âge et au sexe." },
              { title: "Guides Santé Complets", desc: "Articles approfondis sur l'interprétation de l'IMC, ses limites, la gestion du poids et de la santé, rédigés par des professionnels qualifiés." },
              { title: "9 Langues Supportées", desc: "Disponibilité complète en français, anglais, espagnol, portugais, allemand, italien, hindi, chinois et arabe." },
              { title: "Confidentialité Avant Tout", desc: "Aucune donnée personnelle n'est collectée. Tous les calculs sont effectués dans votre navigateur. Pas de cookies de suivi." },
              { title: "Contenu Basé sur la Science", desc: "Toutes les informations de santé sont basées sur les directives de l'OMS, la littérature médicale évaluée par des pairs et les recommandations des autorités nationales de santé." },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Notre Méthodologie et Sources de Données</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'Indice de Masse Corporelle (IMC) est calculé à l'aide de la formule internationalement
            reconnue établie par l'Organisation Mondiale de la Santé : IMC = poids (kg) / taille (m)².
            Cette mesure simple mais efficace est utilisée par les professionnels de santé du monde entier
            depuis les années 1970 pour dépister les problèmes de santé potentiels liés au poids. Notre
            calculateur implémente fidèlement cette formule avec le support des unités métriques (kilogrammes
            et centimètres) et impériales (livres et pouces), en effectuant automatiquement toutes les
            conversions nécessaires.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Notre calculateur met en œuvre la classification standard de l'IMC de l'OMS : insuffisance
            pondérale (IMC inférieur à 18,5), poids normal (18,5 à 24,9), surpoids (25,0 à 29,9) et
            obésité (30,0 et plus), avec des subdivisions supplémentaires pour les classes d'obésité I,
            II et III. Pour les enfants et les adolescents, nous utilisons des courbes de percentiles
            spécifiques à l'âge et au sexe, comme recommandé par l'OMS et les Centers for Disease Control
            and Prevention (CDC) des États-Unis.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Les informations de santé et recommandations présentées sur BMI-IMC.com sont tirées de sources
            faisant autorité, notamment la Base de données mondiale de l'OMS sur l'Indice de Masse Corporelle,
            les courbes de croissance et directives IMC des CDC américains, les directives cliniques des
            National Institutes of Health (NIH) sur le surpoids et l'obésité, et la littérature médicale
            évaluée par des pairs publiée dans des revues telles que The Lancet, le British Medical
            Journal (BMJ) et le Journal of the American Medical Association (JAMA).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Toutes les recommandations de santé sur ce site sont fournies à titre informatif uniquement et
            ne doivent pas remplacer un avis médical professionnel. Nous encourageons les utilisateurs à
            consulter des professionnels de santé pour des évaluations de santé personnalisées. BMI-IMC.com
            est une ressource éducative, et non un outil de diagnostic médical.
          </p>
        </section>

        {/* Approche multilingue */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Notre Approche Multilingue
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            La littératie en santé ne devrait pas être contrainte par la langue. BMI-IMC.com est disponible
            en neuf langues : français, anglais, espagnol, portugais, allemand, italien, hindi, chinois et
            arabe. Chaque version linguistique n'est pas simplement une traduction automatique du contenu
            anglais. Chaque page a été soigneusement adaptée pour refléter le contexte sanitaire, les
            habitudes alimentaires et la terminologie médicale spécifiques à chaque communauté linguistique
            et culturelle.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Notre approche multilingue prend également en compte les données de santé régionales. Par exemple,
            les taux de prévalence de l'obésité, les recommandations alimentaires et les structures des
            systèmes de santé varient considérablement d'une région à l'autre. Le contenu de BMI-IMC.com
            reconnaît ces différences et fournit des informations contextuellement pertinentes aux
            utilisateurs du monde entier. Cet engagement envers l'accessibilité linguistique et culturelle
            est au cœur de la vision de Radif Partners, Éditeur de calculateurs et de guides pratiques, qui a conçu la plateforme pour servir
            un public véritablement mondial.
          </p>
        </section>

        {/* Pourquoi nous faire confiance */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pourquoi Nous Faire Confiance ?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Contenu expertement recherché :</strong> Nos informations de santé sont recherchées et rédigées sur la base des directives de l'OMS, de la littérature médicale évaluée par des pairs et des recommandations des autorités nationales de santé de plusieurs pays.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Méthodologie transparente :</strong> Nous expliquons clairement comment l'IMC est calculé, quelles sont ses limites et quand d'autres mesures de santé doivent être considérées en complément de l'IMC.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Aucun biais commercial :</strong> BMI-IMC.com est entièrement gratuit, sans version premium, sans contenu sponsorisé et sans recommandations de produits. Notre seul objectif est de fournir des informations de santé précises.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Confidentialité par conception :</strong> Nous ne collectons, ne stockons et ne transmettons aucune donnée de santé personnelle. Tous les calculs d'IMC sont effectués localement dans votre navigateur. Aucun cookie n'est utilisé à des fins de suivi.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Mises à jour régulières :</strong> Notre contenu est revu et mis à jour régulièrement pour refléter les dernières directives de l'OMS et la recherche médicale sur l'indice de masse corporelle et la gestion du poids.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Accessibilité :</strong> BMI-IMC.com est conçu pour être accessible aux utilisateurs de toutes capacités. Notre interface suit les meilleures pratiques d'accessibilité web, garantissant que les lecteurs d'écran, la navigation au clavier et les technologies d'assistance fonctionnent parfaitement avec nos outils.</span>
            </li>
          </ul>
        </section>

        {/* Pourquoi l'IMC est important */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pourquoi l'IMC est Important pour la Santé Publique</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Le surpoids et l'obésité sont devenus un défi mondial de santé publique. Selon l'Organisation
            Mondiale de la Santé, l'obésité mondiale a presque triplé depuis 1975. En 2016, plus de
            1,9 milliard d'adultes étaient classés en surpoids, et plus de 650 millions étaient obèses.
            Ces chiffres continuent d'augmenter, rendant les outils de dépistage accessibles comme les
            calculateurs d'IMC de plus en plus importants pour la sensibilisation précoce et la prévention.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Bien que l'IMC seul ne puisse diagnostiquer aucune pathologie, il constitue une première étape
            efficace pour identifier les individus susceptibles de bénéficier d'une évaluation médicale
            approfondie. En fournissant des calculs d'IMC gratuits et instantanés en neuf langues,
            BMI-IMC.com vise à contribuer à la littératie mondiale en santé et à permettre aux individus
            de prendre des mesures proactives pour comprendre leur statut pondéral et leur santé globale.
            C'est la motivation centrale du travail de Radif Partners, Éditeur de calculateurs et de guides pratiques, et de l'ensemble du
            projet BMI-IMC.com.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Nous Contacter</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nous valorisons vos retours et cherchons toujours à améliorer nos outils et notre contenu.
            Que vous ayez une question sur le calcul de l'IMC, une suggestion pour une nouvelle
            fonctionnalité, ou que vous souhaitiez signaler un problème, n'hésitez pas à nous contacter.
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
          <Link to="/mentions-legales" className="hover:text-primary">Mentions Légales</Link>
          <Link to="/" className="hover:text-primary">BMI Calculator (EN)</Link>
          <Link to="/about" className="hover:text-primary">About (EN)</Link>
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default APropos;
