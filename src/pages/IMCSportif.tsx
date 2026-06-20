import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, Globe } from "lucide-react";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const IMCSportif = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const handleCalculate = useCallback((calculatedBmi: number, w: number, h: number) => {
    setBmi(calculatedBmi);
    setWeight(w);
    setHeight(h);
  }, []);

  // Calculate FFMI if we have data
  const ffmi = weight && height ? (weight * 0.85) / Math.pow(height / 100, 2) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <main id="main-content" className="container max-w-6xl py-8 px-4 md:py-12">
        <Breadcrumbs />
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            Calculateur pour sportifs
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">IMC Sportif</span> : Limites du BMI pour les Athlètes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pourquoi l'IMC classe Teddy Riner « obèse » et Antoine Dupont en « surpoids » — et quelles alternatives utiliser pour les sportifs français
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Attention : L'IMC est biaisé pour les sportifs</h3>
              <p className="text-muted-foreground">
                L'IMC ne distingue pas la <strong>masse musculaire</strong> de la <strong>masse grasse</strong>.
                Un sportif musclé peut avoir un IMC "surpoids" ou "obésité" tout en étant en excellente santé.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <BMICalculator onCalculate={handleCalculate} />
          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">Estimation FFMI (Fat-Free Mass Index)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Le FFMI est un meilleur indicateur pour les sportifs car il prend en compte la masse maigre.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI estimé (avec 15% de masse grasse)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Naturel : 18-25 | Dopage probable : &gt;25
              </p>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {/* Athlètes français célèbres */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Des champions français « obèses » selon l'IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC sportif</strong> pose problème car la formule ne fait aucune différence entre le poids
                des muscles et celui de la graisse. Voici ce que l'IMC dit des plus grands athlètes français :
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-orange-500/5 rounded-xl">
                <div className="text-3xl font-bold text-orange-500">~39</div>
                <div className="text-sm font-bold mt-1">Teddy Riner</div>
                <div className="text-xs text-muted-foreground">Judo, 130 kg / 2m04</div>
                <div className="text-xs text-destructive mt-1">IMC = « obésité morbide »</div>
              </div>
              <div className="text-center p-4 bg-orange-500/5 rounded-xl">
                <div className="text-3xl font-bold text-orange-500">~27</div>
                <div className="text-sm font-bold mt-1">Antoine Dupont</div>
                <div className="text-xs text-muted-foreground">Rugby, 85 kg / 1m76</div>
                <div className="text-xs text-warning mt-1">IMC = « surpoids »</div>
              </div>
              <div className="text-center p-4 bg-orange-500/5 rounded-xl">
                <div className="text-3xl font-bold text-orange-500">~26</div>
                <div className="text-sm font-bold mt-1">Nikola Karabatić</div>
                <div className="text-xs text-muted-foreground">Handball, 100 kg / 1m96</div>
                <div className="text-xs text-warning mt-1">IMC = « surpoids »</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Ces athlètes sont au sommet de leur forme physique, pourtant l'IMC les classe en surpoids ou obèses.
              C'est la preuve que le <strong>muscle est plus dense que la graisse</strong> et que l'IMC est inadapté aux sportifs.
            </p>
          </div>

          {/* Exemples par sport français */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC et sports populaires en France</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Rugby (Top 14, XV de France)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Piliers/2e lignes : IMC 30-35 (« obèse »)</li>
                  <li>• Arrières : IMC 26-29 (« surpoids »)</li>
                  <li>• Masse grasse réelle : 12-18%</li>
                  <li>• L'IMC ne tient pas compte du gabarit rugbystique</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Judo / Sports de combat (INSEP)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC souvent 26-32 selon catégorie</li>
                  <li>• France : 1ère nation mondiale en judo olympique</li>
                  <li>• Masse grasse : 8-15%</li>
                  <li>• Problème de « faire le poids » (coupe de poids)</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Football (Ligue 1)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC typique : 22-25 (souvent « normal »)</li>
                  <li>• Masse grasse : 8-12%</li>
                  <li>• Sport d'endurance + explosivité</li>
                  <li>• L'IMC est plus fiable pour ce type de sport</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Musculation / CrossFit</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC souvent 28-35 (« obèse »)</li>
                  <li>• Masse grasse : 8-15%</li>
                  <li>• Fédération française de force (FFForce)</li>
                  <li>• FFMI plus pertinent que l'IMC</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternatives à l'IMC pour sportifs en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                L'<strong>INSEP</strong> (Institut National du Sport, de l'Expertise et de la Performance) et les
                pôles France utilisent des mesures bien plus précises que l'IMC pour évaluer la composition corporelle
                de leurs athlètes :
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Masse grasse (%) - DXA</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  L'INSEP utilise l'<strong>absorptiométrie DXA</strong> (référence médicale) pour mesurer la composition corporelle.
                </p>
                <p className="text-xs">
                  <strong>Homme sportif :</strong> 8-18%<br />
                  <strong>Femme sportive :</strong> 15-25%
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Fat-Free Mass Index : évalue la masse maigre rapportée à la taille.
                </p>
                <p className="text-xs">
                  <strong>Naturel :</strong> 18-25<br />
                  <strong>Élite naturel :</strong> 24-26
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Tour de taille (HAS)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Recommandé par la <strong>HAS</strong> en complément de l'IMC, même pour les sportifs.
                </p>
                <p className="text-xs">
                  <strong>Homme :</strong> &lt;94 cm (modéré) &lt;102 cm (élevé)<br />
                  <strong>Femme :</strong> &lt;80 cm (modéré) &lt;88 cm (élevé)
                </p>
              </div>
            </div>
          </div>

          {/* Sport sur ordonnance et STAPS */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Sport, IMC et système français</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                En France, le <strong>certificat médical de non contre-indication</strong> est obligatoire pour la compétition.
                Les médecins du sport formés (capacité de médecine du sport, DESC) savent que l'IMC est insuffisant
                pour les sportifs et utilisent des mesures complémentaires.
              </p>
              <p>
                Le <strong>sport sur ordonnance</strong> (décret 2016, élargi en 2022) permet aux médecins de prescrire
                de l'<strong>APA (Activité Physique Adaptée)</strong> encadrée par un professionnel STAPS-APA.
                Pour les sportifs en reconversion ou les anciens athlètes, c'est un outil précieux pour maintenir
                une composition corporelle saine après l'arrêt de la compétition.
              </p>
              <p>
                L'<strong>INSEP</strong> (Vincennes), les <strong>CREPS</strong> et les <strong>pôles France</strong>
                disposent de laboratoires d'analyse de la composition corporelle (DXA, impédancemétrie, plis cutanés)
                bien plus fiables que l'IMC seul.
              </p>
            </div>
          </div>

          {/* Nutrition sportive en France */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Nutrition sportive et composition corporelle en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>nutrition sportive</strong> est un domaine encadré en France par l'<strong>ANSES</strong> et la
                <strong> norme AFNOR NF V94-001</strong> qui définit les exigences pour les compléments alimentaires destinés aux
                sportifs. L'INSEP dispose d'un département de nutrition sportive dirigé par des médecins et diététiciens spécialisés
                qui accompagnent les athlètes de haut niveau dans l'optimisation de leur composition corporelle, bien au-delà du
                simple calcul d'IMC.
              </p>
              <p>
                Les besoins énergétiques d'un sportif sont radicalement différents de ceux d'un sédentaire. Un rugbyman
                du <strong>Top 14</strong> consomme entre <strong>4 000 et 6 000 kcal/jour</strong> selon sa position, tandis qu'un
                homme sédentaire de même corpulence n'a besoin que de 2 000 à 2 500 kcal. Cette différence métabolique rend l'IMC
                encore plus inadapté : le sportif a un poids élevé mais un taux de masse grasse faible, grâce à une alimentation
                riche en protéines (1,5 à 2,2 g/kg/jour selon les recommandations de la <strong>Société Française de Nutrition du Sport</strong>)
                et un entraînement intensif.
              </p>
              <p>
                En France, la <strong>lutte antidopage</strong> est gérée par l'<strong>AFLD</strong> (Agence Française de Lutte
                contre le Dopage). Le FFMI (Fat-Free Mass Index) est aussi utilisé comme indicateur indirect de dopage :
                un FFMI supérieur à <strong>25-26</strong> est considéré comme difficilement atteignable sans substances
                interdites chez un homme, selon les études de Kouri et al. Les contrôles de l'AFLD incluent parfois des
                mesures de composition corporelle par impédancemétrie pour détecter des changements suspects de masse musculaire.
              </p>
              <p>
                Pour les sportifs amateurs en France, les <strong>Maisons Sport-Santé</strong> (plus de 500 labellisées par
                le ministère des Sports) proposent des bilans de condition physique incluant l'évaluation de la composition
                corporelle par impédancemétrie, bien plus pertinente que le simple IMC. Ces structures sont accessibles
                gratuitement et constituent un premier pas vers un suivi adapté à la pratique sportive.
              </p>
            </div>
          </div>

          {/* IMC des sportifs professionnels français */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">L'IMC des sportifs professionnels français</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'analyse de l'<strong>IMC des sportifs professionnels français</strong> révèle des paradoxes fascinants qui illustrent
                parfaitement les limites de cet indicateur. En <strong>rugby</strong>, discipline phare du sport français, les joueurs
                du <strong>Top 14</strong> présentent des IMC qui les classifieraient systématiquement en surpoids ou en obésité.
                Au <strong>Stade Toulousain</strong>, quadruple champion d'Europe, les piliers et deuxièmes lignes affichent couramment
                des IMC compris entre <strong>28 et 35</strong>, tandis que les trois-quarts se situent entre 26 et 29. Pourtant, les
                données de l'<strong>INSEP</strong> (Institut National du Sport, de l'Expertise et de la Performance) montrent que ces
                athlètes possèdent un taux de masse grasse de seulement <strong>12 à 18 %</strong>, bien en dessous de la moyenne
                masculine française de 23 %. On parle alors de <strong>« fausse obésité »</strong> chez le rugbyman : l'IMC élevé
                reflète uniquement la masse musculaire développée par des années d'entraînement en force et de préparation physique
                spécifique. Un pilier international français pesant 120 kg pour 1m85 (IMC 35) possède en réalité une composition
                corporelle radicalement différente d'un homme sédentaire de même IMC, dont la masse grasse dépasse souvent 30 %.
              </p>
              <p>
                À l'opposé du spectre, le <strong>cyclisme professionnel français</strong> illustre le phénomène inverse. Les coureurs
                du <strong>Tour de France</strong> présentent des IMC remarquablement bas, entre <strong>19 et 21</strong> pour les grimpeurs.
                Un coureur comme Thibaut Pinot affichait un IMC proche de 20, considéré comme la limite basse de la « normalité ».
                Les sprinteurs français comme Arnaud Démare se situent légèrement au-dessus, autour de 22-23, en raison de leur masse
                musculaire au niveau des cuisses. L'INSEP a documenté que les cyclistes professionnels français maintiennent un taux de
                masse grasse entre <strong>5 et 10 %</strong> durant la saison de compétition, un niveau qui serait considéré comme
                dangereux pour la population générale mais qui est optimal pour la performance aérobie. Cette donnée montre qu'un IMC
                « normal » peut masquer un état de restriction énergétique préoccupant.
              </p>
              <p>
                En <strong>football</strong>, les joueurs de <strong>Ligue 1</strong> présentent généralement des IMC entre 22 et 25,
                souvent classés dans la zone « normale ». C'est l'un des rares sports de haut niveau où l'IMC reste relativement
                pertinent, en raison de l'équilibre entre endurance et puissance requis par la discipline. Néanmoins, certains
                défenseurs centraux et attaquants puissants dépassent 25 d'IMC tout en possédant un taux de masse grasse inférieur
                à 10 %. En <strong>judo</strong> et dans les <strong>sports de combat</strong>, la situation est complexe car les
                athlètes sont classés par <strong>catégories de poids</strong> et non par IMC. La France, première nation mondiale en
                judo olympique avec plus de <strong>50 médailles olympiques</strong>, dispose de judokas dont l'IMC varie considérablement
                selon la catégorie : de 22-23 pour les légers (moins de 66 kg) à plus de 35 pour les super-lourds. Le concept même de
                « poids de forme » dans ces sports est déterminé par la catégorie de compétition et non par un IMC théorique. Les
                données de l'INSEP confirment que le rapport puissance/poids et la composition corporelle mesurée par DXA sont les
                seuls indicateurs véritablement pertinents pour ces athlètes.
              </p>
            </div>
          </div>

          {/* Suivi médical des sportifs en France */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Activity className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Le suivi médical des sportifs en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le système français de <strong>suivi médical des sportifs</strong> est l'un des plus structurés au monde. Tout sportif
                licencié doit obtenir un <strong>certificat médical d'aptitude</strong> (ou certificat de non contre-indication à la
                pratique sportive), délivré par un <strong>médecin du sport</strong> formé à évaluer la condition physique au-delà du
                simple IMC. Depuis la réforme de 2016, ce certificat est valable trois ans pour les sports sans risque particulier,
                avec un questionnaire de santé annuel. Pour les sportifs de <strong>haut niveau inscrits sur liste ministérielle</strong>,
                le suivi est bien plus approfondi : l'INSEP met en place un <strong>suivi longitudinal</strong> comprenant au minimum
                deux bilans médicaux complets par an. Ces bilans incluent systématiquement une <strong>évaluation de la composition
                corporelle par DXA</strong> (absorptiométrie biphotonique à rayons X), disponible dans les <strong>centres de médecine
                du sport (CMS)</strong> agréés sur tout le territoire français. La DXA fournit une cartographie précise de la répartition
                de la masse grasse, de la masse maigre et de la densité osseuse, rendant l'IMC totalement obsolète dans ce contexte.
              </p>
              <p>
                Les <strong>fédérations sportives françaises</strong> ont progressivement abandonné l'IMC comme indicateur de suivi au
                profit de la <strong>composition corporelle segmentaire</strong>. La Fédération Française de Rugby (FFR), la Fédération
                Française de Judo (FFJDA) et la Fédération Française d'Athlétisme (FFA) exigent toutes un suivi régulier de la masse
                grasse et de la masse musculaire de leurs athlètes en pôle. Les <strong>CREPS</strong> (Centres de Ressources,
                d'Expertise et de Performance Sportive) disposent d'équipements d'impédancemétrie bioélectrique multi-fréquence,
                permettant un suivi mensuel de la composition corporelle sans irradiation. Les recommandations de la <strong>Société
                Française de Nutrition (SFN)</strong> pour les sportifs insistent sur le fait que l'IMC ne doit jamais être utilisé
                comme unique critère d'évaluation nutritionnelle chez l'athlète. La SFN préconise un bilan nutritionnel complet
                incluant le calcul des apports énergétiques, le dosage des micronutriments (fer, vitamine D, calcium) et l'évaluation
                de la disponibilité énergétique relative (RED-S), un syndrome qui touche particulièrement les sportifs d'endurance.
              </p>
              <p>
                Un enjeu majeur du suivi médical sportif en France concerne les <strong>troubles du comportement alimentaire (TCA)</strong>
                dans certaines disciplines. Les sports dits <strong>« à catégorie de poids »</strong> (judo, boxe, lutte, haltérophilie)
                et les sports <strong>« esthétiques »</strong> (danse classique, gymnastique artistique, patinage artistique, natation
                synchronisée) présentent une prévalence de TCA significativement plus élevée que la population générale. En France,
                des études menées par l'INSEP en collaboration avec les services de psychiatrie de l'hôpital de la Pitié-Salpêtrière
                ont montré que jusqu'à <strong>20 % des athlètes féminines</strong> dans ces disciplines présentaient des comportements
                alimentaires à risque. L'obsession de maintenir un IMC bas pour la performance ou l'esthétique peut conduire à
                l'<strong>anorexie athlétique</strong>, à la <strong>boulimie</strong> ou au <strong>syndrome RED-S</strong> (Relative
                Energy Deficiency in Sport). Les médecins du sport français sont désormais formés à dépister ces troubles grâce à des
                questionnaires validés (EAT-26, SCOFF) et à un suivi de la courbe de poids rapportée à la performance, bien plus
                pertinent qu'un simple seuil d'IMC. La prise en charge pluridisciplinaire associant médecin du sport, diététicien
                spécialisé en nutrition du sport et psychologue est aujourd'hui la norme dans les structures de haut niveau françaises.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC et sport : ce qu'il faut retenir</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>calcul IMC sportif</strong> donne souvent des résultats trompeurs. Que vous pratiquiez
                le <strong>rugby</strong>, le <strong>judo</strong>, le <strong>handball</strong>, la <strong>musculation</strong>
                ou le <strong>CrossFit</strong>, votre <strong>IMC athlète</strong> sera probablement surévalué.
              </p>
              <p>
                En France, l'<strong>INSEP</strong> et les fédérations sportives n'utilisent pas l'IMC comme indicateur principal.
                Ils privilégient la <strong>DXA</strong> (absorptiométrie biphotonique), les <strong>plis cutanés</strong>
                et l'<strong>impédancemétrie</strong>. Le <strong>FFMI</strong> (Fat-Free Mass Index) est aussi un bon indicateur
                accessible à tous les sportifs.
              </p>
              <p>
                La <strong>HAS</strong> recommande de toujours compléter l'IMC par le <strong>tour de taille</strong>,
                y compris pour les sportifs. C'est un indicateur simple de graisse abdominale viscérale, la plus
                dangereuse pour la santé cardiovasculaire.
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <AuthorByline />
      </main>

      <Footer />
    </div>
  );
};

export default IMCSportif;
