import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2, BookOpen, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const SanteEtPoids = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <main id="main-content" className="container max-w-6xl py-8 px-4 md:py-12">
        <Breadcrumbs />
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Santé et bien-être
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Santé et Poids</span> : Guide Nutrition et Poids Idéal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprendre la relation entre poids, IMC et santé globale
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Poids et santé : une relation complexe</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>poids</strong> n'est qu'un indicateur parmi d'autres de votre état de santé.
                Un <strong>poids santé</strong> dépend de nombreux facteurs : génétique, morphologie, activité physique,
                alimentation, sommeil et bien-être mental.
              </p>
              <p>
                L'obsession du chiffre sur la balance peut être contre-productive. Il est plus important de
                se concentrer sur des <strong>habitudes de vie saines</strong> que sur un poids cible précis.
                La santé ne se mesure pas uniquement en kilogrammes.
              </p>
            </div>
          </div>

          {/* Health Risks */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Risques liés au poids</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Risques du surpoids et de l'obésité</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Maladies cardiovasculaires (infarctus, AVC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Diabète de type 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Hypertension artérielle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Apnée du sommeil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Certains cancers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Problèmes articulaires</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Risques de l'insuffisance pondérale</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Carences nutritionnelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Système immunitaire affaibli</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Ostéoporose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Troubles hormonaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Fatigue chronique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Problèmes de fertilité</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillars of health */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Les 5 piliers d'un poids santé</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Alimentation</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Privilégiez les aliments non transformés</li>
                  <li>Mangez des légumes à chaque repas</li>
                  <li>Limitez les sucres ajoutés</li>
                  <li>Hydratez-vous suffisamment</li>
                  <li>Écoutez votre faim et satiété</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Activité physique</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 min d'activité modérée/semaine</li>
                  <li>Incluez du renforcement musculaire</li>
                  <li>Bougez régulièrement dans la journée</li>
                  <li>Trouvez une activité qui vous plaît</li>
                  <li>Progressez graduellement</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Sommeil</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Dormez 7-9 heures par nuit</li>
                  <li>Horaires réguliers</li>
                  <li>Évitez les écrans avant le coucher</li>
                  <li>Chambre fraîche et sombre</li>
                  <li>Le manque de sommeil favorise la prise de poids</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Santé mentale</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Gérez votre stress</li>
                  <li>Évitez l'alimentation émotionnelle</li>
                  <li>Pratiquez la pleine conscience</li>
                  <li>Acceptez votre corps</li>
                  <li>Consultez si besoin</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Suivi médical</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Bilan de santé annuel</li>
                  <li>Suivi du tour de taille</li>
                  <li>Contrôle tension, glycémie, cholestérol</li>
                  <li>Consultez un nutritionniste si besoin</li>
                  <li>Ne suivez pas de régimes extrêmes</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Progression</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Fixez des objectifs réalistes</li>
                  <li>Maximum 0,5-1 kg/semaine</li>
                  <li>Célébrez les petites victoires</li>
                  <li>La constance prime sur l'intensité</li>
                  <li>Pensez long terme</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Healthy weight tips */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Conseils pour un poids santé</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">Ce qui fonctionne</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Changements <strong>progressifs et durables</strong> des habitudes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Alimentation <strong>équilibrée</strong>, pas de restriction extrême</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Activité physique <strong>régulière et plaisante</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Sommeil de <strong>qualité</strong> (7-8h/nuit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Gestion du <strong>stress</strong> et des émotions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Suivi par un <strong>professionnel</strong> si besoin</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">Ce qui ne fonctionne pas</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Régimes <strong>drastiques</strong> et restrictifs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Compléments <strong>miracles</strong> et pilules minceur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Se peser <strong>tous les jours</strong> (variations normales)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Objectifs de perte de poids <strong>irréalistes</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Comparer son corps aux <strong>autres</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignorer les signaux de <strong>faim/satiété</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Obésité en France : état des lieux */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">L'obésité en France : un enjeu de santé publique majeur</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Selon l'étude <strong>ObÉpi-Roche 2023</strong>, la prévalence de l'obésité chez les adultes français a atteint
                <strong> 17 %</strong>, soit environ <strong>8,5 millions de personnes</strong>. Ce chiffre a été multiplié par deux
                en vingt-cinq ans. Si l'on ajoute le surpoids, ce sont près de <strong>47 % des Français</strong> qui dépassent
                le seuil d'un IMC de 25, avec un IMC moyen national de <strong>25,4 kg/m²</strong>.
              </p>
              <p>
                Les <strong>disparités régionales</strong> sont frappantes. Les Hauts-de-France affichent un taux d'obésité de
                <strong> 22,1 %</strong>, contre seulement <strong>14,2 %</strong> en Île-de-France. L'Outre-mer est encore plus
                touché : la Guadeloupe, la Martinique et La Réunion présentent des taux supérieurs à <strong>25 %</strong>.
                Ces écarts reflètent des inégalités socio-économiques profondes : l'obésité touche <strong>deux fois plus</strong>
                les catégories socioprofessionnelles défavorisées que les cadres supérieurs.
              </p>
              <p>
                Chez les <strong>enfants français</strong>, la situation est préoccupante bien que plus contenue qu'ailleurs en Europe.
                Environ <strong>18 % des enfants de 6 à 17 ans</strong> sont en surpoids, dont <strong>4 %</strong> en situation
                d'obésité, selon Santé Publique France. Le <strong>dépistage scolaire</strong> organisé par la médecine scolaire
                et les PMI (Protection Maternelle et Infantile) joue un rôle crucial dans la détection précoce.
              </p>
              <p>
                Le coût économique de l'obésité pour le système de santé français est estimé entre <strong>12 et 20 milliards
                d'euros par an</strong> selon la Direction de la Recherche, des Études, de l'Évaluation et des Statistiques (DREES).
                Ce montant inclut les soins directs (consultations, hospitalisations, médicaments) et les coûts indirects
                (arrêts maladie, perte de productivité, invalidité).
              </p>
            </div>
          </div>

          {/* Comprendre le métabolisme et la régulation du poids */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <Stethoscope className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-display font-bold">Comprendre le métabolisme et la régulation du poids</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>poids corporel</strong> est régulé par un système complexe impliquant des hormones, le système nerveux
                central et le métabolisme de base. La <strong>leptine</strong>, produite par le tissu adipeux, signale au cerveau
                le niveau de réserves énergétiques. La <strong>ghréline</strong>, sécrétée par l'estomac, stimule l'appétit.
                L'<strong>insuline</strong>, produite par le pancréas, régule la glycémie et le stockage des graisses.
              </p>
              <p>
                Le <strong>métabolisme de base</strong> représente l'énergie dépensée au repos pour maintenir les fonctions
                vitales : respiration, circulation sanguine, température corporelle. Il constitue entre <strong>60 et 75 %</strong>
                de la dépense énergétique totale quotidienne. Ce métabolisme varie considérablement selon l'âge, le sexe,
                la masse musculaire et des facteurs génétiques. Après 30 ans, il diminue d'environ <strong>2 à 3 % par décennie</strong>,
                ce qui explique la prise de poids fréquente avec l'âge si les habitudes alimentaires ne sont pas adaptées.
              </p>
              <p>
                La <strong>thyroïde</strong> joue également un rôle déterminant. L'<strong>hypothyroïdie</strong>, qui touche
                environ <strong>3 % de la population française</strong> (principalement des femmes), ralentit le métabolisme et
                favorise la prise de poids. Le <strong>cortisol</strong>, l'hormone du stress, favorise quant à lui le stockage
                des graisses viscérales (abdominales), les plus dangereuses pour la santé cardiovasculaire.
              </p>
              <p>
                Contrairement aux idées reçues, les <strong>régimes hypocaloriques sévères</strong> sont contre-productifs à long
                terme. Ils déclenchent une réponse adaptative de l'organisme appelée <strong>thermogenèse adaptative</strong> :
                le corps réduit sa dépense énergétique pour préserver ses réserves. C'est le mécanisme qui explique l'<strong>effet
                yo-yo</strong> des régimes restrictifs : après une perte de poids rapide, l'organisme reprend le poids perdu
                (et souvent davantage) dès le retour à une alimentation normale.
              </p>
            </div>
          </div>

          {/* Mesurer sa santé au-delà du poids */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Scale className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Mesurer sa santé au-delà du poids : les indicateurs complémentaires</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC</strong> et le poids sur la balance ne donnent qu'une image partielle de votre état de santé.
                Les professionnels de santé français utilisent plusieurs indicateurs complémentaires pour évaluer les risques
                liés au poids de manière plus précise.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-muted/20 rounded-lg p-5">
                  <h4 className="font-semibold text-foreground mb-2">Tour de taille</h4>
                  <p className="text-sm">
                    Le <strong>tour de taille</strong> est le meilleur indicateur de la <strong>graisse viscérale</strong>,
                    celle qui entoure les organes et qui est la plus dangereuse. Selon la <strong>HAS</strong>, le seuil
                    d'alerte est de <strong>94 cm chez l'homme</strong> et <strong>80 cm chez la femme</strong>.
                    Au-delà de <strong>102 cm (homme) et 88 cm (femme)</strong>, le risque cardiovasculaire est considéré
                    comme très élevé. Cette mesure est simple, gratuite et réalisable chez soi.
                  </p>
                </div>
                <div className="bg-muted/20 rounded-lg p-5">
                  <h4 className="font-semibold text-foreground mb-2">Rapport tour de taille / hanches (RTH)</h4>
                  <p className="text-sm">
                    Le <strong>ratio taille-hanches</strong> complète le tour de taille en tenant compte de la morphologie.
                    L'<strong>OMS</strong> recommande un RTH inférieur à <strong>0,90 chez l'homme</strong> et
                    <strong> 0,85 chez la femme</strong>. Un ratio élevé traduit une répartition androïde des graisses
                    (en forme de pomme), associée à un risque accru de diabète et de maladies cardiaques.
                  </p>
                </div>
                <div className="bg-muted/20 rounded-lg p-5">
                  <h4 className="font-semibold text-foreground mb-2">Indice de Masse Grasse (IMG)</h4>
                  <p className="text-sm">
                    L'<strong>IMG</strong> estime le <strong>pourcentage de graisse corporelle</strong>. Un taux normal
                    se situe entre <strong>10-20 % chez l'homme</strong> et <strong>20-30 % chez la femme</strong>.
                    Il peut être mesuré par <strong>impédancemétrie</strong> (balance connectée), <strong>plis cutanés</strong>
                    ou <strong>DEXA</strong> (absorptiométrie biphotonique), cette dernière étant la méthode de référence
                    disponible dans les CHU et centres de nutrition.
                  </p>
                </div>
                <div className="bg-muted/20 rounded-lg p-5">
                  <h4 className="font-semibold text-foreground mb-2">Marqueurs biologiques</h4>
                  <p className="text-sm">
                    Le bilan sanguin annuel prescrit par le <strong>médecin traitant</strong> comprend des indicateurs
                    essentiels : <strong>glycémie à jeun</strong> (risque de diabète), <strong>cholestérol total, LDL et HDL</strong>
                    (risque cardiovasculaire), <strong>triglycérides</strong>, et <strong>CRP</strong> (inflammation).
                    Ces marqueurs sont <strong>remboursés à 60 %</strong> par l'Assurance Maladie sur prescription médicale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* La culture alimentaire française */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Users className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">La culture alimentaire française : un atout pour le poids santé</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>repas gastronomique des Français</strong> est inscrit au patrimoine immatériel de l'UNESCO depuis 2010.
                Cette reconnaissance souligne la spécificité de l'approche française de l'alimentation, qui associe
                <strong> plaisir gustatif</strong>, <strong>convivialité</strong> et <strong>équilibre nutritionnel</strong>.
                Contrairement aux pays anglo-saxons où le repas est souvent fonctionnel, la France cultive le rituel
                du repas structuré avec entrée, plat et dessert.
              </p>
              <p>
                Cette <strong>structure des repas</strong> est en réalité un facteur protecteur : manger à heures fixes,
                assis à table, en prenant le temps de mastiquer, favorise la <strong>satiété</strong> et limite le grignotage.
                L'<strong>ANSES</strong> (Agence nationale de sécurité sanitaire de l'alimentation) souligne que les Français
                consacrent en moyenne <strong>2 heures et 11 minutes par jour</strong> à manger, soit bien plus que la plupart
                des autres pays de l'OCDE (les Américains y consacrent seulement 1 heure et 2 minutes).
              </p>
              <p>
                Cependant, cette tradition est menacée. La part des <strong>aliments ultra-transformés</strong> dans l'alimentation
                française a augmenté de <strong>30 % en dix ans</strong>, selon l'étude NutriNet-Santé. Le grignotage progresse
                chez les jeunes générations, et les repas pris devant un écran se généralisent. Le <strong>Programme National
                Nutrition Santé (PNNS 4)</strong> et la campagne <strong>« Manger Bouger »</strong> de Santé Publique France
                s'efforcent de préserver et de promouvoir les repères nutritionnels français adaptés à la vie contemporaine.
              </p>
              <p>
                Les <strong>marchés locaux et circuits courts</strong> constituent un autre pilier de l'alimentation saine en France.
                Avec plus de <strong>10 000 marchés de plein air</strong> à travers le pays, l'accès aux produits frais, de saison
                et locaux reste plus facile qu'ailleurs en Europe. Les <strong>AMAP</strong> (Associations pour le Maintien d'une
                Agriculture Paysanne), au nombre de 2 000, offrent des paniers hebdomadaires de produits fermiers qui encouragent
                une alimentation variée et riche en nutriments.
              </p>
            </div>
          </div>

          {/* Prise en charge du poids en France */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Prise en charge du poids par le système de santé français</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le système de santé français offre un cadre unique pour la <strong>prise en charge de l'excès de poids</strong>.
                Le parcours de soins commence par le <strong>médecin traitant</strong>, qui peut prescrire un bilan nutritionnel
                et orienter le patient vers les professionnels adaptés. Depuis 2023, le dispositif <strong>« Mon bilan prévention »</strong>
                permet à tous les Français de bénéficier d'une consultation de prévention incluant l'évaluation du poids
                à des âges clés (18-25 ans, 45-50 ans, 60-65 ans, 70-75 ans).
              </p>
              <p>
                Pour les patients souffrant d'<strong>obésité sévère (IMC ≥ 35 avec comorbidités ou ≥ 40)</strong>, la
                <strong> chirurgie bariatrique</strong> est prise en charge à 100 % par l'Assurance Maladie dans le cadre de
                l'ALD (Affection de Longue Durée). La France réalise environ <strong>50 000 interventions bariatriques par an</strong>
                (sleeve gastrectomy, bypass gastrique, anneau gastrique), ce qui en fait l'un des pays les plus actifs en Europe
                dans ce domaine. Ces interventions sont encadrées par les recommandations de la <strong>HAS</strong> et
                nécessitent un bilan préopératoire multidisciplinaire de 6 à 12 mois.
              </p>
              <p>
                Les <strong>centres spécialisés de l'obésité (CSO)</strong>, au nombre de 37 sur le territoire, coordonnent
                la prise en charge des cas complexes. Ils proposent des programmes d'<strong>éducation thérapeutique (ETP)</strong>,
                des consultations de diététique, de psychologie, d'activité physique adaptée (APA) et un suivi médical spécialisé.
                La prescription d'<strong>activité physique adaptée</strong> par le médecin traitant est possible depuis la loi
                de 2016 pour les patients en ALD, et depuis 2022 pour les patients atteints de maladies chroniques ou présentant
                des facteurs de risque.
              </p>
              <p>
                Les <strong>cures thermales à orientation amaigrissement</strong> représentent une spécificité française.
                Des stations comme <strong>Brides-les-Bains</strong>, <strong>Eugénie-les-Bains</strong> ou <strong>Vals-les-Bains</strong>
                proposent des cures de 21 jours comprenant soins thermaux, rééquilibrage alimentaire et activité physique.
                Ces cures sont partiellement <strong>remboursées par la Sécurité Sociale</strong> sur prescription médicale,
                à hauteur de 65 % des soins thermaux et des frais médicaux.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Santé et poids : comprendre pour mieux agir</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Maintenir un <strong>poids santé</strong> est un enjeu fondamental pour votre bien-être physique et mental. La relation
                entre <strong>poids et santé</strong> est complexe : elle implique la génétique, les hormones, l'alimentation,
                l'activité physique, le sommeil et l'état psychologique. L'<strong>IMC</strong>
                n'est qu'un indicateur de dépistage parmi d'autres pour évaluer si vous êtes dans une zone de poids sain.
                Le <strong>tour de taille</strong>, le <strong>taux de masse grasse</strong> et les <strong>marqueurs
                biologiques</strong> complètent utilement cette évaluation.
              </p>
              <p>
                Pour <strong>perdre du poids sainement</strong> ou <strong>maintenir son poids de forme</strong>, les autorités
                sanitaires françaises recommandent une approche globale et progressive. Le <strong>PNNS</strong> préconise une
                alimentation variée avec au moins <strong>5 fruits et légumes par jour</strong>, des céréales complètes,
                des légumineuses, du poisson deux fois par semaine, et une limitation des produits ultra-transformés,
                du sel et du sucre. L'activité physique quotidienne de <strong>30 minutes minimum</strong> et la réduction
                de la sédentarité sont tout aussi importantes que l'alimentation.
              </p>
              <p>
                Évitez les <strong>régimes yo-yo</strong> et les solutions miracles : la perte de poids durable se construit
                sur des <strong>changements d'habitudes progressifs</strong>. Un objectif raisonnable est une perte de
                <strong> 0,5 à 1 kg par semaine</strong>, soit un déficit calorique modéré de 300 à 500 kcal par jour.
                Au-delà, le risque de reprise de poids et de carences nutritionnelles augmente considérablement.
              </p>
              <p>
                Un <strong>mode de vie sain</strong> est plus important qu'un chiffre sur la balance. Concentrez-vous
                sur vos <strong>habitudes quotidiennes</strong> : la qualité de votre alimentation, votre niveau d'activité,
                votre sommeil et votre gestion du stress. En cas de difficulté, n'hésitez pas à consulter votre
                <strong> médecin traitant</strong>, un <strong>diététicien-nutritionniste</strong> ou un <strong>médecin
                nutritionniste</strong> pour un accompagnement personnalisé et adapté à votre situation.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calculez votre IMC</h3>
            <p className="text-muted-foreground mb-6">
              Premier indicateur pour évaluer votre poids santé
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calculer mon IMC
            </Link>
          </div>
        </div>


        <RelatedPages />

        <AuthorByline />
      </main>

      <Footer />
    </div>
  );
};

export default SanteEtPoids;
