import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles, Globe, TrendingUp, Utensils, Shield } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const BMIFrauen = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(68);
  const [height, setHeight] = useState(166);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
  useEffect(() => {
    calculateBMI(weight, height);
  }, []);

  const handleWeightChange = (value: number[]) => {
    setWeight(value[0]);
    calculateBMI(value[0], height);
  };

  const handleHeightChange = (value: number[]) => {
    setHeight(value[0]);
    calculateBMI(weight, value[0]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <main id="main-content" className="container max-w-6xl py-8 px-4 md:py-12">
        <Breadcrumbs />
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            BMI-Rechner für Frauen
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">BMI für Frauen</span> : BMI-Rechner und Idealgewicht
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In Deutschland sind 53% der Frauen übergewichtig oder adipös (RKI). BMI-Rechner mit Referenzen von RKI, DGE und der Deutschen Gesellschaft für Gynäkologie (DGGG).
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              Geben Sie Ihre Maße ein
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Gewicht</label>
                  <span className="text-2xl font-bold text-pink-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={35}
                  max={150}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Größe</label>
                  <span className="text-2xl font-bold text-pink-500">{(height / 100).toFixed(2)} m</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={130}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Understanding BMI for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI bei Frauen verstehen</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Laut der <strong>RKI-Studie GEDA</strong> sind <strong>53% der Frauen in Deutschland</strong> übergewichtig oder adipös.
                Die durchschnittliche deutsche Frau ist <strong>1,66 m</strong> groß und wiegt <strong>68 kg</strong>, was einem BMI von 24,7 entspricht
                -- knapp unter der Übergewichtsgrenze. Im <strong>DACH-Vergleich</strong>: Deutschland 53%, Österreich 50%, Schweiz nur 37%.
              </p>
              <p>
                Frauen haben von Natur aus einen <strong>höheren Körperfettanteil</strong> (20-25% gegenüber 15-20% bei Männern),
                was völlig normal und für eine ordnungsgemäße Hormonfunktion notwendig ist.
                Der <strong>ideale Taillenumfang</strong> laut <strong>DGE</strong> liegt bei maximal <strong>80 cm</strong>
                (mäßiges Risiko) oder <strong>88 cm</strong> (hohes Risiko). Dieser Indikator
                ist oft relevanter als der BMI allein, da er das viszerale Bauchfett misst.
              </p>
            </div>
          </div>

          {/* BMI Table for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI-Tabelle für Frauen</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Kategorie</th>
                    <th className="text-left py-3 px-4 font-semibold">BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">Beispiel (1,66 m, Durchschnitt DE)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Untergewicht
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 51 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normalgewicht
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">51 - 69 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Übergewicht
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">69 - 82 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Adipositas
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 82 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Idealgewicht für Frauen nach Größe</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1,58 m", min: 46, max: 62, ideal: 55 },
                { height: "1,62 m", min: 49, max: 65, ideal: 58 },
                { height: "1,64 m", min: 50, max: 67, ideal: 59 },
                { height: "1,66 m (Durchschn.)", min: 51, max: 69, ideal: 60 },
                { height: "1,70 m", min: 53, max: 72, ideal: 64 },
                { height: "1,74 m", min: 56, max: 75, ideal: 66 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideal: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Women-specific factors */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Hormonzyklus & Gewicht</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Das Gewicht kann je nach Menstruationszyklus um <strong>2-3 kg</strong> variieren</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Wassereinlagerungen</strong> vor der Periode sind normal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Mutterschaftsrichtlinien</strong>: BMI-Überwachung als Teil der Schwangerschaftsvorsorge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Hebamme</strong>: Gewichtskontrolle während der Schwangerschaft (Kassenleistung)</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Schwangerschaft & BMI</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Mutterpass</strong>: BMI wird beim ersten Vorsorgetermin dokumentiert</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Empfohlene Gewichtszunahme: <strong>11-16 kg</strong> (bei normalem BMI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>GKV</strong> übernimmt alle Vorsorgeuntersuchungen inkl. Gewichtskontrolle</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Nachsorge durch Hebamme</strong>: 12 Wochen nach der Geburt (Kassenleistung)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Menopause */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI und Wechseljahre</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Während der <strong>Wechseljahre</strong> fördern hormonelle Veränderungen die Gewichtszunahme, insbesondere im
                Bauchbereich. Der Stoffwechsel verlangsamt sich und die Muskelmasse nimmt natürlich ab.
                Es ist daher normal, nach dem 50. Lebensjahr einige Pfunde zuzunehmen.
              </p>
              <p>
                Um einen gesunden <strong>BMI nach 50</strong> oder <strong>BMI nach 60</strong> zu erhalten,
                konzentrieren Sie sich auf eine Ernährung, die reich an <strong>Protein</strong> und <strong>Kalzium</strong> ist,
                und treiben Sie regelmäßig Sport, einschließlich <strong>Krafttraining</strong>.
              </p>
            </div>
          </div>

          {/* DACH Comparison */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Globe className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Frauen-BMI im DACH-Vergleich</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Im <strong>DACH-Raum</strong> gibt es deutliche Unterschiede bei Übergewicht und Adipositas bei Frauen:
                In <strong>Deutschland</strong> sind <strong>53%</strong> der Frauen betroffen, in <strong>Österreich 50%</strong> und in der <strong>Schweiz nur 37%</strong>.
                Schweizer Frauen haben damit die niedrigste Adipositasrate im gesamten DACH-Raum.
              </p>
              <p>
                Die kulturellen Faktoren spielen eine wichtige Rolle: Die <strong>Schweizer Alltagsbewegung</strong> (Wandern, Radfahren, aktiver Lebensstil)
                trägt zu einem gesünderen Gewicht bei. In <strong>Österreich</strong> fördert die traditionelle <strong>Thermenkultur</strong> das Körperbewusstsein
                und die Gesundheitsvorsorge. In Deutschland bieten viele <strong>Krankenkassen Frauengesundheitskurse</strong> als Präventionsleistung an --
                von Ernährungsberatung bis zu Bewegungsprogrammen.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-muted/30 rounded-xl text-center">
                <span className="text-2xl font-bold text-pink-500">53%</span>
                <p className="text-sm text-muted-foreground mt-1">Deutschland (RKI)</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl text-center">
                <span className="text-2xl font-bold text-pink-500">50%</span>
                <p className="text-sm text-muted-foreground mt-1">Österreich</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl text-center">
                <span className="text-2xl font-bold text-pink-500">37%</span>
                <p className="text-sm text-muted-foreground mt-1">Schweiz</p>
              </div>
            </div>
          </div>

          {/* Adipositas-Statistiken Frauen */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <TrendingUp className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Adipositas bei Frauen in Deutschland: RKI-Daten und Trends</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>RKI-Studie GEDA</strong> zeigt, dass <strong>53% der Frauen in Deutschland</strong> übergewichtig oder adipös sind, wobei <strong>24% als adipös</strong> eingestuft werden (BMI ≥ 30). Im europäischen Vergleich liegt Deutschland damit im oberen Mittelfeld. Besonders betroffen sind Frauen in der <strong>Altersgruppe 55-70 Jahre</strong>, wo die Adipositasrate auf über 30% steigt – eine Folge hormoneller Veränderungen, veränderter Lebensgewohnheiten und nachlassender körperlicher Aktivität.
              </p>
              <p>
                Die <strong>DGE-Empfehlungen für Frauen</strong> unterscheiden sich in wesentlichen Punkten von denen für Männer: Der tägliche Kalorienbedarf liegt bei <strong>1.800-2.000 kcal</strong> (gegenüber 2.200-2.400 kcal bei Männern), der <strong>Eisenbedarf ist mit 15 mg/Tag</strong> deutlich höher (Männer: 10 mg), und die DGE empfiehlt Frauen im gebärfähigen Alter eine tägliche Zufuhr von <strong>400 μg Folsäure</strong>. Bei Übergewicht rät die DGE zu einer <strong>moderaten Kalorienreduktion</strong> von maximal 500 kcal täglich in Kombination mit regelmäßiger Bewegung.
              </p>
              <p>
                Regional betrachtet gibt es innerhalb Deutschlands erhebliche Unterschiede: In <strong>Sachsen-Anhalt</strong> sind 28% der Frauen adipös, während in <strong>Hamburg</strong> nur 15% betroffen sind. Diese Diskrepanz hängt mit sozioökonomischen Faktoren, Bildungsniveau und dem Zugang zu Gesundheitsangeboten zusammen. Die <strong>BZgA</strong> hat spezielle Programme entwickelt, die sich an Frauen in sozial benachteiligten Regionen richten.
              </p>
            </div>
          </div>

          {/* Schwangerschaft und Hebamme */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Baby className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Gewichtsmanagement in der Schwangerschaft: Das deutsche Hebammensystem</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Das deutsche <strong>Hebammensystem</strong> ist weltweit einzigartig: Jede schwangere Frau hat gesetzlichen Anspruch auf <strong>Hebammenhilfe</strong> – von der Schwangerschaft über die Geburt bis 12 Wochen nach der Entbindung, vollständig von der gesetzlichen Krankenkasse (GKV) übernommen. Die <strong>Mutterschaftsrichtlinien</strong> schreiben vor, dass der BMI bei der Erstuntersuchung im <strong>Mutterpass</strong> dokumentiert wird und das Gewicht bei jeder Vorsorgeuntersuchung kontrolliert wird.
              </p>
              <p>
                Die empfohlene <strong>Gewichtszunahme in der Schwangerschaft</strong> richtet sich nach dem Ausgangs-BMI: Bei <strong>Normalgewicht (BMI 18,5-24,9): 11,5-16 kg</strong>, bei <strong>Übergewicht (BMI 25-29,9): 7-11,5 kg</strong>, und bei <strong>Adipositas (BMI ≥ 30): 5-9 kg</strong>. Eine übermäßige Gewichtszunahme erhöht das Risiko für <strong>Schwangerschaftsdiabetes</strong>, der in Deutschland etwa 13% aller Schwangerschaften betrifft (DGGG).
              </p>
              <p>
                Die <strong>Deutsche Gesellschaft für Gynäkologie und Geburtshilfe (DGGG)</strong> betont, dass ein <strong>BMI über 30 zu Beginn der Schwangerschaft</strong> als Risikofaktor gilt und eine intensivere Betreuung erfordert. Das <strong>Nationale Zentrum Frühe Hilfen (NZFH)</strong> bietet in Zusammenarbeit mit den Kommunen zusätzliche Unterstützung für Schwangere und junge Mütter mit Gewichtsproblemen an.
              </p>
            </div>
          </div>

          {/* Körperbild und Osteoporose */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Shield className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Körperbild, Osteoporose-Prävention und Frauengesundheit</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Das <strong>Körperbild deutscher Frauen</strong> wird von verschiedenen kulturellen Faktoren geprägt. Im Vergleich zu anderen Ländern zeigt sich in Deutschland eine <strong>pragmatischere Einstellung zum Körpergewicht</strong>: Laut einer Studie der Universität Leipzig sind 68% der deutschen Frauen „eher zufrieden" mit ihrem Körper – ein höherer Wert als in vielen südeuropäischen Ländern. Gleichzeitig warnt die <strong>Bundeszentrale für gesundheitliche Aufklärung (BZgA)</strong> vor den Gefahren von Essstörungen, die etwa <strong>5% der Frauen zwischen 15 und 35 Jahren</strong> betreffen.
              </p>
              <p>
                Ein besonders wichtiges Thema für Frauen ist die <strong>Osteoporose-Prävention</strong>: In Deutschland leiden schätzungsweise <strong>6 Millionen Menschen</strong> an Osteoporose, davon <strong>80% Frauen</strong> (DVO – Dachverband Osteologie). Ein zu niedriger BMI (unter 20) ist ein eigenständiger Risikofaktor. Die DGE empfiehlt Frauen ab 50 Jahren eine tägliche <strong>Kalziumzufuhr von 1.000 mg</strong> und <strong>20 μg Vitamin D</strong>. Regelmäßiges Krafttraining und gewichtsbelastendes Training stärken die Knochendichte und beugen Osteoporose vor.
              </p>
              <p>
                Die <strong>gesetzlichen Krankenkassen</strong> übernehmen für Frauen ab 50 Jahren eine <strong>DXA-Knochendichtemessung</strong> bei begründetem Verdacht auf Osteoporose. Darüber hinaus bieten viele Krankenkassen spezielle <strong>Frauengesundheitsprogramme</strong> an, die Ernährungsberatung, Bewegungskurse und psychologische Unterstützung kombinieren – ein ganzheitlicher Ansatz, der den BMI als einen von mehreren Gesundheitsindikatoren betrachtet.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alles über den weiblichen BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Der <strong>BMI-Rechner für Frauen</strong> basiert auf Daten des <strong>Robert Koch-Instituts (RKI)</strong> und der <strong>Deutschen Gesellschaft für Ernährung (DGE)</strong>.
                Laut RKI-Studie GEDA sind 53% der deutschen Frauen übergewichtig oder adipös. Die <strong>Deutsche Gesellschaft für Gynäkologie und Geburtshilfe (DGGG)</strong>
                empfiehlt die regelmäßige BMI-Kontrolle in jeder Lebensphase einer Frau.
              </p>
              <p>
                Der <strong>ideale BMI für Frauen</strong> liegt zwischen 19 und 24. Für eine durchschnittliche deutsche Frau mit <strong>1,66 m</strong>
                liegt das <strong>Idealgewicht</strong> bei etwa 60 kg. Für eine <strong>1,70 m große Frau</strong> liegt es bei etwa 64 kg.
                Die <strong>BZgA</strong> (Bundeszentrale für gesundheitliche Aufklärung) bietet zusätzliche Ressourcen zur Frauengesundheit.
              </p>
              <p>
                <strong>Welchen BMI sollte ich als Frau haben</strong>? Der gesunde Bereich liegt bei 18,5-24,9, aber sportliche Frauen können etwas höher liegen.
                Der <strong>BMI für Frauen über 40</strong> bleibt numerisch gleich, aber die Körperzusammensetzung ändert sich.
                Der <strong>BMI für Frauen über 50</strong> kann ein paar zusätzliche Pfunde tolerieren -- die DGE empfiehlt Frauen ab 50 besonders auf ausreichend Protein und Kalzium zu achten.
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

export default BMIFrauen;
