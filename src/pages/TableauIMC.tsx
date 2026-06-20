import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2, Globe, BookOpen, Activity, Heart } from "lucide-react";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const TableauIMC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <main id="main-content" className="container max-w-6xl py-8 px-4 md:py-12">
        <Breadcrumbs />
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Table className="w-4 h-4" />
            Classification officielle OMS
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Tableau IMC Complet</span> : Classification OMS et Données Françaises
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Classification officielle OMS utilisée par la HAS, avec les données françaises ObÉpi-Roche 2023 : <strong>47% des Français</strong> sont en surpoids ou obèses.
          </p>
        </header>

        <div className="space-y-8">
          {/* Main Table */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Classification internationale de l'IMC (adultes)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Classification</th>
                    <th className="text-left py-4 px-4 font-bold">IMC (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">Risque de comorbidités</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Maigreur sévère</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16,0</td>
                    <td className="py-4 px-4 text-info">Élevé (dénutrition)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Maigreur modérée</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16,0 - 16,9</td>
                    <td className="py-4 px-4 text-info">Modéré</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Maigreur légère</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17,0 - 18,4</td>
                    <td className="py-4 px-4 text-info">Faible</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">Poids normal</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18,5 - 24,9</td>
                    <td className="py-4 px-4 text-success">Faible (référence)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">Surpoids (préobésité)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25,0 - 29,9</td>
                    <td className="py-4 px-4 text-warning">Accru</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obésité classe I (modérée)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30,0 - 34,9</td>
                    <td className="py-4 px-4 text-destructive">Élevé</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obésité classe II (sévère)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35,0 - 39,9</td>
                    <td className="py-4 px-4 text-destructive">Très élevé</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obésité classe III (morbide)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40,0</td>
                    <td className="py-4 px-4 text-destructive">Extrêmement élevé</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Source : Organisation Mondiale de la Santé (OMS)
            </p>
          </div>

          {/* Prévalence en France */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Prévalence par catégorie en France (ObÉpi-Roche 2023)</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                L'enquête <strong>ObÉpi-Roche 2023</strong>, la référence en France sur l'obésité, montre la répartition
                des Français adultes par catégorie d'IMC. L'IMC moyen des Français est de <strong>25,4</strong> (hommes : 25,8, femmes : 25,1).
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-info/5 rounded-xl border border-info/20">
                <div className="text-2xl font-bold text-info">5%</div>
                <div className="text-sm font-medium mt-1">Maigreur</div>
                <div className="text-xs text-muted-foreground">IMC &lt; 18,5</div>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-xl border border-success/20">
                <div className="text-2xl font-bold text-success">47%</div>
                <div className="text-sm font-medium mt-1">Poids normal</div>
                <div className="text-xs text-muted-foreground">IMC 18,5-24,9</div>
              </div>
              <div className="text-center p-4 bg-warning/5 rounded-xl border border-warning/20">
                <div className="text-2xl font-bold text-warning">30%</div>
                <div className="text-sm font-medium mt-1">Surpoids</div>
                <div className="text-xs text-muted-foreground">IMC 25-29,9</div>
              </div>
              <div className="text-center p-4 bg-destructive/5 rounded-xl border border-destructive/20">
                <div className="text-2xl font-bold text-destructive">17%</div>
                <div className="text-sm font-medium mt-1">Obésité</div>
                <div className="text-xs text-muted-foreground">IMC ≥ 30</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Source : ObÉpi-Roche 2023, Inserm/Kantar Health/Roche. Enquête portant sur 9 598 adultes de 18 ans et plus.
            </p>
          </div>

          {/* Weight examples by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tableau poids / taille pour les Français</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Correspondance entre taille et plage de poids pour chaque catégorie d'IMC.
              Les lignes <strong>1m64</strong> (taille moyenne des Françaises) et <strong>1m78</strong> (taille moyenne des Français) sont mises en évidence.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">Taille</th>
                    <th className="text-left py-3 px-3 font-bold text-info">Maigreur<br />&lt;18,5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">Normal<br />18,5-24,9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">Surpoids<br />25-29,9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">Obésité<br />≥30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72, label: "" },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77, label: "" },
                    { h: 164, u: 50, nMin: 50, nMax: 67, sMin: 67, sMax: 81, o: 81, label: "♀ moy. FR" },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87, label: "" },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92, label: "" },
                    { h: 178, u: 59, nMin: 59, nMax: 79, sMin: 79, sMax: 95, o: 95, label: "♂ moy. FR" },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97, label: "" },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102, label: "" },
                    { h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108, label: "" },
                  ].map((row) => (
                    <tr key={row.h} className={`border-b border-border/50 ${row.label ? "bg-primary/5 font-bold" : ""}`}>
                      <td className="py-3 px-3 font-bold">{row.h} cm {row.label && <span className="text-xs text-primary ml-1">({row.label})</span>}</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edge cases */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Cas limites et exceptions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">L'IMC n'est pas adapté pour :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Sportifs musclés</strong> : masse musculaire = IMC surestimé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Femmes enceintes</strong> : prise de poids normale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Personnes âgées</strong> : perte de masse musculaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Enfants/ados</strong> : courbes spécifiques nécessaires</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Indicateurs complémentaires :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Tour de taille</strong> : graisse abdominale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Masse grasse %</strong> : composition corporelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Rapport taille/hanche</strong> : répartition graisses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI</strong> : pour sportifs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tour de taille HAS */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tour de taille : le complément recommandé par la HAS</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>HAS</strong> (Haute Autorité de Santé) recommande de toujours compléter l'IMC
                par la mesure du <strong>tour de taille</strong>, qui évalue la graisse abdominale viscérale,
                la plus dangereuse pour la santé cardiovasculaire.
              </p>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Risque</th>
                    <th className="text-left py-3 px-4 font-bold">Homme</th>
                    <th className="text-left py-3 px-4 font-bold">Femme</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 font-medium text-success">Normal</td>
                    <td className="py-3 px-4">&lt; 94 cm</td>
                    <td className="py-3 px-4">&lt; 80 cm</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-3 px-4 font-medium text-warning">Risque modéré</td>
                    <td className="py-3 px-4">94-102 cm</td>
                    <td className="py-3 px-4">80-88 cm</td>
                  </tr>
                  <tr className="bg-destructive/5">
                    <td className="py-3 px-4 font-medium text-destructive">Risque élevé</td>
                    <td className="py-3 px-4">&gt; 102 cm</td>
                    <td className="py-3 px-4">&gt; 88 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Source : HAS / Santé Publique France. En France, 48% des hommes et 41% des femmes dépassent les seuils de risque modéré.
            </p>
          </div>

          {/* Origines et histoire de la classification IMC */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-display font-bold">Histoire de la classification IMC : de Quetelet à l'OMS</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>Indice de Masse Corporelle</strong> a été inventé en <strong>1832</strong> par le mathématicien et
                statisticien belge <strong>Adolphe Quetelet</strong>. À l'origine baptisé « indice de Quetelet », il visait
                à décrire la corpulence moyenne d'une population, et non à diagnostiquer l'obésité individuelle. Quetelet
                cherchait à définir « l'homme moyen » statistiquement, un concept révolutionnaire pour l'époque.
              </p>
              <p>
                Ce n'est qu'en <strong>1972</strong> que le physiologiste américain <strong>Ancel Keys</strong> a popularisé
                l'indice sous le nom de <strong>« Body Mass Index »</strong> dans une étude publiée dans le
                <em> Journal of Chronic Diseases</em>. Keys a démontré que cette formule simple (poids/taille²) corrélait
                mieux avec le taux de graisse corporelle que d'autres indices disponibles à l'époque, tout en reconnaissant
                ses limites pour les individus très musclés ou très sédentaires.
              </p>
              <p>
                L'<strong>Organisation Mondiale de la Santé (OMS)</strong> a officiellement adopté la classification actuelle
                en <strong>1997</strong>, établissant les seuils que nous utilisons aujourd'hui : maigreur sous 18,5, poids
                normal entre 18,5 et 24,9, surpoids entre 25 et 29,9, et obésité à partir de 30. En France, la <strong>HAS</strong>
                et l'<strong>INSERM</strong> ont intégré ces seuils dans leurs recommandations officielles. Les trois classes
                d'obésité (modérée, sévère et morbide) ont été ajoutées pour affiner la prise en charge médicale, car les
                risques de comorbidités augmentent de manière exponentielle au-delà d'un IMC de 30.
              </p>
            </div>
          </div>

          {/* Disparités régionales en France */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Globe className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Disparités régionales de l'IMC en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>enquête ObÉpi-Roche 2023</strong> révèle des écarts régionaux considérables dans la répartition
                de l'IMC en France. Ces disparités reflètent des différences socio-économiques, culturelles et alimentaires
                profondes entre les territoires.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-destructive/5 rounded-lg p-4 border border-destructive/10">
                  <h4 className="font-semibold text-foreground mb-2">Régions les plus touchées</h4>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Hauts-de-France</strong> : 22,1 % d'obésité — taux le plus élevé de métropole</li>
                    <li><strong>Grand Est</strong> : 20,1 % — influence de l'alimentation riche (charcuterie, bière)</li>
                    <li><strong>Normandie</strong> : 19,8 % — cuisine au beurre et à la crème</li>
                    <li><strong>Outre-mer</strong> : 24-26 % — La Réunion, Guadeloupe, Martinique au-dessus de la moyenne</li>
                  </ul>
                </div>
                <div className="bg-success/5 rounded-lg p-4 border border-success/10">
                  <h4 className="font-semibold text-foreground mb-2">Régions les moins touchées</h4>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Île-de-France</strong> : 14,2 % — population plus jeune, plus active, plus diplômée</li>
                    <li><strong>Pays de la Loire</strong> : 14,8 % — tradition maraîchère et activité physique</li>
                    <li><strong>Occitanie</strong> : 15,5 % — influence de la diète méditerranéenne</li>
                    <li><strong>PACA</strong> : 15,1 % — climat propice à l'activité, cuisine méditerranéenne</li>
                  </ul>
                </div>
              </div>
              <p>
                Le facteur socio-économique est déterminant : le taux d'obésité chez les <strong>ouvriers</strong> est de
                <strong> 22 %</strong>, contre seulement <strong>9 %</strong> chez les <strong>cadres supérieurs</strong>.
                Les revenus influencent directement la qualité de l'alimentation : les ménages modestes consomment davantage
                d'<strong>aliments ultra-transformés</strong> (moins chers au kilogramme) et moins de fruits et légumes frais.
                Le <strong>PNNS 4</strong> cible spécifiquement ces inégalités nutritionnelles à travers des programmes
                d'aide alimentaire comme les <strong>paniers solidaires</strong> et les <strong>ateliers cuisine</strong>
                dans les quartiers prioritaires.
              </p>
            </div>
          </div>

          {/* Risques de santé par catégorie */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Heart className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Risques de santé concrets pour chaque catégorie d'IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Chaque catégorie du tableau IMC correspond à des risques de santé quantifiés par les études épidémiologiques
                menées par l'<strong>INSERM</strong>, la <strong>HAS</strong> et l'<strong>OMS</strong>. Voici les risques
                relatifs associés à chaque tranche d'IMC par rapport au poids normal :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-warning/5 rounded-lg p-4 border border-warning/10">
                  <h4 className="font-semibold text-foreground mb-2">Surpoids (IMC 25-29,9)</h4>
                  <p className="text-sm">
                    Le risque de <strong>diabète de type 2</strong> est multiplié par <strong>2 à 3</strong> par rapport au poids normal.
                    Le risque d'<strong>hypertension artérielle</strong> augmente de <strong>40 %</strong>. Le risque de
                    <strong> stéatose hépatique</strong> (foie gras) est multiplié par 2. Cependant, un surpoids modéré
                    (IMC 25-27) chez les personnes de plus de 65 ans semble avoir un léger effet protecteur sur la mortalité
                    globale, un phénomène appelé <strong>« paradoxe de l'obésité »</strong>.
                  </p>
                </div>
                <div className="bg-destructive/5 rounded-lg p-4 border border-destructive/10">
                  <h4 className="font-semibold text-foreground mb-2">Obésité classe I (IMC 30-34,9)</h4>
                  <p className="text-sm">
                    Le risque de <strong>diabète de type 2</strong> est multiplié par <strong>5 à 8</strong>. Le risque de
                    <strong> maladies cardiovasculaires</strong> (infarctus, AVC) augmente de <strong>70 %</strong>. Le risque
                    d'<strong>apnée du sommeil</strong> est multiplié par 4. Le risque de <strong>gonarthrose</strong>
                    (arthrose du genou) est multiplié par 3, en raison de la surcharge mécanique sur les articulations.
                  </p>
                </div>
                <div className="bg-destructive/5 rounded-lg p-4 border border-destructive/10">
                  <h4 className="font-semibold text-foreground mb-2">Obésité classe II (IMC 35-39,9)</h4>
                  <p className="text-sm">
                    Le risque de <strong>diabète de type 2</strong> est multiplié par <strong>10 à 20</strong>. L'espérance
                    de vie est réduite de <strong>5 à 8 ans</strong> en moyenne. Le risque de <strong>certains cancers</strong>
                    (endomètre, côlon, rein, sein post-ménopause) augmente significativement. La <strong>chirurgie
                    bariatrique</strong> peut être envisagée en présence de comorbidités, selon les recommandations de la HAS.
                  </p>
                </div>
                <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                  <h4 className="font-semibold text-foreground mb-2">Obésité classe III (IMC ≥ 40)</h4>
                  <p className="text-sm">
                    L'espérance de vie est réduite de <strong>8 à 14 ans</strong>. Le risque de mortalité toutes causes
                    est multiplié par <strong>2,5 à 3</strong>. La qualité de vie est sévèrement impactée : mobilité réduite,
                    douleurs chroniques, isolement social. La <strong>chirurgie bariatrique</strong> (sleeve, bypass) est
                    recommandée par la HAS et prise en charge à 100 % par l'Assurance Maladie dans le cadre de l'ALD.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* L'IMC chez les populations spécifiques */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Seuils d'IMC adaptés selon l'origine ethnique</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>OMS</strong> et la <strong>Fédération Internationale du Diabète (FID)</strong> reconnaissent
                que les seuils standard d'IMC ne s'appliquent pas de manière uniforme à toutes les populations. Les
                personnes d'<strong>origine asiatique</strong> (Chine, Japon, Inde, Asie du Sud-Est) développent des
                complications métaboliques (diabète, maladies cardiovasculaires) à des IMC plus bas que les populations
                européennes.
              </p>
              <p>
                Pour ces populations, l'OMS recommande des seuils abaissés : <strong>surpoids dès un IMC de 23</strong>
                (au lieu de 25) et <strong>obésité dès 27,5</strong> (au lieu de 30). En France, avec une population de plus
                en plus diverse, ces seuils adaptés prennent une importance croissante. La <strong>HAS</strong> recommande
                aux médecins traitants de prendre en compte l'origine ethnique du patient dans l'interprétation de l'IMC,
                notamment pour le dépistage du diabète de type 2 et du syndrome métabolique.
              </p>
              <p>
                À l'inverse, certaines études suggèrent que les populations d'<strong>origine africaine et afro-caribéenne</strong>
                peuvent tolérer des IMC légèrement plus élevés sans le même niveau de risque métabolique, en raison d'une
                <strong>masse musculaire et d'une densité osseuse</strong> en moyenne plus importantes. Ces nuances rappellent
                que le tableau IMC est un outil de dépistage populationnel qui doit toujours être interprété dans le contexte
                clinique individuel du patient.
              </p>
            </div>
          </div>

          {/* SEO */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprendre le tableau IMC en France</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>tableau IMC OMS</strong> est la référence internationale utilisée par la <strong>HAS</strong>
                pour classifier la corpulence en France. Ce <strong>tableau d'indice de masse corporelle</strong> définit
                les seuils de <strong>maigreur</strong>, <strong>poids normal</strong>, <strong>surpoids</strong> et <strong>obésité</strong>.
                Conçu à l'origine par le statisticien belge Quetelet au XIXe siècle, il a été formalisé par l'OMS en 1997
                et intégré dans les recommandations de la HAS et de l'INSERM pour le dépistage et la prise en charge
                de l'obésité en France.
              </p>
              <p>
                Selon l'enquête <strong>ObÉpi-Roche 2023</strong>, l'IMC moyen des Français est de <strong>25,4</strong>,
                soit juste au-dessus du seuil de surpoids. <strong>17% des adultes</strong> sont obèses (IMC ≥ 30),
                un chiffre qui a triplé en 30 ans (6% en 1997). La France reste toutefois en dessous de la moyenne
                européenne (23%), grâce notamment à sa culture alimentaire structurée et au Programme National Nutrition
                Santé (PNNS).
              </p>
              <p>
                La <strong>HAS</strong> recommande de compléter le <strong>tableau de correspondance IMC</strong> par
                la mesure du <strong>tour de taille</strong>, qui évalue la graisse viscérale abdominale, la plus
                dangereuse pour la santé. Le <strong>tableau poids taille IMC</strong> ci-dessus
                utilise les tailles moyennes des Français (<strong>1m78</strong> pour les hommes, <strong>1m64</strong> pour les femmes)
                comme repères. Pour les populations d'origine asiatique vivant en France, des seuils abaissés (23 pour
                le surpoids, 27,5 pour l'obésité) sont recommandés par l'OMS.
              </p>
              <p>
                Les risques associés à chaque catégorie d'IMC sont bien documentés : le <strong>diabète de type 2</strong>,
                les <strong>maladies cardiovasculaires</strong> et certains <strong>cancers</strong> augmentent de façon
                progressive avec l'élévation de l'IMC. Pour un bilan complet, consultez votre médecin traitant qui pourra
                prescrire un bilan biologique et mesurer votre tour de taille en complément de l'IMC.
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

export default TableauIMC;
