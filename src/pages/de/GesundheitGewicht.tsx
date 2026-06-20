import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2, BookOpen, Globe, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const GesundheitGewicht = () => {
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
            Gesundheit und Wohlbefinden
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Gesundheit & Gewicht</span> : Ratgeber für Wohlbefinden
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Die Beziehung zwischen Gewicht, BMI und allgemeiner Gesundheit verstehen
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Gewicht und Gesundheit: eine komplexe Beziehung</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Das <strong>Gewicht</strong> ist nur einer von vielen Indikatoren für Ihren Gesundheitszustand.
                Ein <strong>gesundes Gewicht</strong> hängt von vielen Faktoren ab: Genetik, Körperbau, körperliche Aktivität,
                Ernährung, Schlaf und psychisches Wohlbefinden.
              </p>
              <p>
                Die Besessenheit von der Zahl auf der Waage kann kontraproduktiv sein. Es ist wichtiger,
                sich auf <strong>gesunde Lebensgewohnheiten</strong> zu konzentrieren als auf ein genaues Zielgewicht.
                Gesundheit lässt sich nicht nur in Kilogramm messen.
              </p>
            </div>
          </div>

          {/* Health Risks */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Gewichtsbedingte Risiken</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Risiken von Übergewicht und Adipositas</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Herz-Kreislauf-Erkrankungen (Herzinfarkt, Schlaganfall)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Typ-2-Diabetes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Bluthochdruck</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Schlafapnoe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Bestimmte Krebsarten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Gelenkprobleme</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Risiken von Untergewicht</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Nährstoffmangel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Geschwächtes Immunsystem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Osteoporose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Hormonelle Störungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Chronische Müdigkeit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Fruchtbarkeitsprobleme</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillars of health */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Die 5 Säulen eines gesunden Gewichts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Ernährung</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Bevorzugen Sie unverarbeitete Lebensmittel</li>
                  <li>Essen Sie Gemüse bei jeder Mahlzeit</li>
                  <li>Begrenzen Sie zugesetzten Zucker</li>
                  <li>Trinken Sie ausreichend</li>
                  <li>Achten Sie auf Hunger- und Sättigungssignale</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Körperliche Aktivität</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 Min moderate Aktivität pro Woche</li>
                  <li>Integrieren Sie Krafttraining</li>
                  <li>Bewegen Sie sich regelmäßig im Alltag</li>
                  <li>Finden Sie eine Aktivität, die Ihnen Spaß macht</li>
                  <li>Steigern Sie sich schrittweise</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Schlaf</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Schlafen Sie 7-9 Stunden pro Nacht</li>
                  <li>Regelmäßige Schlafenszeiten</li>
                  <li>Vermeiden Sie Bildschirme vor dem Schlafengehen</li>
                  <li>Kühles und dunkles Schlafzimmer</li>
                  <li>Schlafmangel fördert Gewichtszunahme</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Psychische Gesundheit</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Bewältigen Sie Ihren Stress</li>
                  <li>Vermeiden Sie emotionales Essen</li>
                  <li>Üben Sie Achtsamkeit</li>
                  <li>Akzeptieren Sie Ihren Körper</li>
                  <li>Suchen Sie bei Bedarf Hilfe</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Ärztliche Betreuung</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Jährlicher Gesundheitscheck</li>
                  <li>Überwachung des Taillenumfangs</li>
                  <li>Kontrolle von Blutdruck, Blutzucker, Cholesterin</li>
                  <li>Konsultieren Sie bei Bedarf einen Ernährungsberater</li>
                  <li>Folgen Sie keinen Extremdiäten</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Fortschritt</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Setzen Sie sich realistische Ziele</li>
                  <li>Maximum 0,5-1 kg pro Woche</li>
                  <li>Feiern Sie kleine Erfolge</li>
                  <li>Konstanz geht vor Intensität</li>
                  <li>Denken Sie langfristig</li>
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
              <h2 className="text-2xl font-display font-bold">Tipps für ein gesundes Gewicht</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">Was funktioniert</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Schrittweise und nachhaltige</strong> Änderungen der Gewohnheiten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Ausgewogene</strong> Ernährung, keine extremen Einschränkungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Regelmäßige und angenehme</strong> körperliche Aktivität</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Qualitätsschlaf</strong> (7-8 Stunden pro Nacht)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Umgang mit <strong>Stress</strong> und Emotionen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Bei Bedarf Begleitung durch einen <strong>Fachmann</strong></span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">Was nicht funktioniert</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Drastische</strong> und restriktive Diäten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Wunder</strong>-Nahrungsergänzungsmittel und Diätpillen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Tägliches</strong> Wiegen (normale Schwankungen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Unrealistische</strong> Gewichtsverlust-Ziele</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Vergleichen Sie Ihren Körper nicht mit <strong>anderen</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignorieren Sie nicht die Signale von <strong>Hunger und Sättigung</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DACH Adipositas-Statistiken */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Adipositas in Deutschland, Österreich und der Schweiz</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Laut der <strong>DEGS-Studie des Robert Koch-Instituts (RKI)</strong> sind rund <strong>23 % der Erwachsenen
                in Deutschland adipös</strong> (BMI &ge; 30). Weitere 34 % gelten als übergewichtig (BMI 25–29,9).
                Insgesamt haben somit mehr als die Hälfte aller Erwachsenen in Deutschland ein Gewicht oberhalb
                des Normalbereichs. Die Prävalenz von Adipositas hat sich in den letzten drei Jahrzehnten
                nahezu verdoppelt und stellt eine der größten gesundheitspolitischen Herausforderungen dar.
              </p>
              <p>
                Die Zahlen variieren dabei innerhalb der <strong>DACH-Region</strong> erheblich. In <strong>Österreich</strong> liegt
                die Adipositasrate bei etwa 20 % der Erwachsenen, wobei die östlichen Bundesländer wie
                Burgenland und Niederösterreich stärker betroffen sind als westliche Regionen wie Tirol
                und Vorarlberg. Die <strong>Schweiz</strong> weist mit rund 12 % die niedrigste Adipositasrate in
                der DACH-Region auf, was teilweise auf das hohe Gesundheitsbewusstsein, die ausgeprägte
                Outdoor-Kultur und die vergleichsweise hohen Lebensmittelpreise zurückgeführt wird.
              </p>
              <p>
                Besonders besorgniserregend ist der Anstieg von Übergewicht bei Kindern und Jugendlichen.
                Die <strong>KiGGS-Studie des RKI</strong> zeigt, dass etwa 15 % der Kinder und Jugendlichen in Deutschland
                übergewichtig sind, davon rund 6 % adipös. Das <strong>Deutsche Krebsforschungszentrum (DKFZ)</strong>
                weist darauf hin, dass Adipositas das Risiko für mindestens 13 Krebsarten erhöht, darunter
                Darm-, Brust- und Speiseröhrenkrebs. Die volkswirtschaftlichen Kosten von Adipositas in
                Deutschland werden auf über 63 Milliarden Euro jährlich geschätzt, einschließlich
                direkter Behandlungskosten und indirekter Kosten durch Arbeitsausfälle.
              </p>
            </div>
          </div>

          {/* DGE 10 Regeln */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-600/10">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-display font-bold">Die 10 Regeln der DGE für gesundes Essen</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>Deutsche Gesellschaft für Ernährung (DGE)</strong> ist die führende Fachgesellschaft
                für Ernährungswissenschaft im deutschsprachigen Raum. Ihre <strong>10 Regeln für vollwertiges
                Essen und Trinken</strong> bilden die wissenschaftlich fundierte Grundlage für eine ausgewogene
                Ernährung und werden regelmäßig aktualisiert. Die wichtigsten Empfehlungen umfassen:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border rounded-xl p-4">
                  <h4 className="font-bold mb-2">Lebensmittelvielfalt genießen</h4>
                  <p className="text-sm">Nutzen Sie die Vielfalt der Lebensmittel und essen Sie abwechslungsreich.
                  Wählen Sie überwiegend pflanzliche Lebensmittel. Diese liefern wichtige Nährstoffe,
                  Ballaststoffe und sekundäre Pflanzenstoffe.</p>
                </div>
                <div className="border border-border rounded-xl p-4">
                  <h4 className="font-bold mb-2">Gemüse und Obst – „5 am Tag"</h4>
                  <p className="text-sm">Genießen Sie mindestens 3 Portionen Gemüse und 2 Portionen Obst am Tag.
                  Zur bunten Auswahl gehören auch Hülsenfrüchte wie Linsen, Kichererbsen und Bohnen sowie
                  ungesalzene Nüsse.</p>
                </div>
                <div className="border border-border rounded-xl p-4">
                  <h4 className="font-bold mb-2">Vollkorn bevorzugen</h4>
                  <p className="text-sm">Wählen Sie bei Brot, Nudeln, Reis und Mehl die Vollkornvariante.
                  Vollkornprodukte sättigen länger und enthalten mehr Nährstoffe als Weißmehlprodukte.
                  Gerade Deutschlands berühmte Brotkultur bietet hier viele Möglichkeiten.</p>
                </div>
                <div className="border border-border rounded-xl p-4">
                  <h4 className="font-bold mb-2">Zucker und Salz einsparen</h4>
                  <p className="text-sm">Sparen Sie Zucker und vermeiden Sie zuckergesüßte Lebensmittel und Getränke.
                  Sparen Sie Salz und reduzieren Sie den Anteil salzreicher Lebensmittel. Würzen Sie kreativ
                  mit Kräutern und Gewürzen.</p>
                </div>
              </div>
              <p>
                Die DGE empfiehlt außerdem, <strong>tierische Lebensmittel zu ergänzen</strong> (Milch, Fisch, wenig Fleisch),
                <strong>gesundheitsfördernde Fette</strong> zu bevorzugen (pflanzliche Öle wie Rapsöl und Olivenöl),
                <strong>ausreichend zu trinken</strong> (ca. 1,5 Liter täglich, bevorzugt Wasser), <strong>schonend
                zuzubereiten</strong> (niedrige Temperaturen, wenig Fett), <strong>achtsam zu essen</strong> und sich
                <strong>regelmäßig zu bewegen</strong> (mindestens 30–60 Minuten pro Tag). Diese Regeln bilden
                eine alltagstaugliche Orientierung, die weit über einfache Kalorienzählung hinausgeht.
              </p>
            </div>
          </div>

          {/* Krankenkasse & Prävention */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-600/10">
                <Stethoscope className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-display font-bold">Krankenkassen und Adipositas-Behandlung in Deutschland</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Das deutsche Gesundheitssystem bietet umfassende Möglichkeiten zur Prävention und Behandlung
                von Übergewicht und Adipositas. Nach <strong>§ 20 SGB V</strong> (Sozialgesetzbuch) sind die
                gesetzlichen Krankenkassen verpflichtet, <strong>Präventionskurse</strong> zu fördern und zu
                bezuschussen. Dies umfasst zertifizierte Kurse in den Bereichen Ernährung, Bewegung,
                Stressbewältigung und Suchtmittelkonsum. Die Kassen übernehmen in der Regel 80–100 % der
                Kursgebühren, sofern der Kurs von der <strong>Zentralen Prüfstelle Prävention (ZPP)</strong>
                zertifiziert ist.
              </p>
              <p>
                Für Menschen mit diagnostizierter Adipositas (BMI &ge; 30 oder BMI &ge; 35 mit Begleiterkrankungen)
                stehen zusätzliche Leistungen zur Verfügung. Dazu gehören <strong>Ernährungsberatung</strong> durch
                zertifizierte Fachkräfte, <strong>multimodale Therapieprogramme</strong> (Kombination aus Ernährung,
                Bewegung und Verhaltenstherapie) sowie in schweren Fällen die Übernahme von
                <strong> bariatrischen Operationen</strong> wie Magenbypass oder Schlauchmagen. Der Weg zur
                Kostenübernahme führt meist über den Hausarzt, der eine Überweisung an einen Facharzt
                oder ein spezialisiertes Adipositaszentrum ausstellt.
              </p>
              <p>
                <strong>Reha-Kliniken</strong> spielen in Deutschland eine besondere Rolle bei der nachhaltigen
                Gewichtsreduktion. Stationäre Rehabilitationsmaßnahmen können über die Deutsche Rentenversicherung
                oder die Krankenkasse beantragt werden und dauern in der Regel drei bis sechs Wochen. Während
                dieses Aufenthalts erhalten Patienten ein intensives Programm aus medizinischer Betreuung,
                Ernährungsumstellung, Bewegungstherapie und psychologischer Begleitung. Bekannte
                Reha-Einrichtungen für Adipositas finden sich in Bad Kissingen, Bad Nauheim, Überlingen
                und an der Ostseeküste. Die <strong>Bundeszentrale für gesundheitliche Aufklärung (BZgA)</strong>
                stellt zudem kostenlose Informationsmaterialien und Online-Angebote bereit, die Betroffenen
                den Einstieg in eine gesündere Lebensweise erleichtern.
              </p>
            </div>
          </div>

          {/* Deutsche Ernährungskultur */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-600/10">
                <Globe className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-display font-bold">Deutsche Ernährungskultur und regionale Besonderheiten</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Deutschland verfügt über eine einzigartige <strong>Brotkultur</strong>, die weltweit ihresgleichen sucht.
                Mit über <strong>3.000 registrierten Brotsorten</strong> – vom Schwarzbrot über Pumpernickel bis zum
                Sauerteigbrot – ist Brot ein zentraler Bestandteil der deutschen Ernährung. Vollkornbrote,
                die in Deutschland besonders beliebt sind, liefern wertvolle Ballaststoffe, B-Vitamine und
                Mineralstoffe. Die UNESCO hat die deutsche Brotkultur 2014 als immaterielles Kulturerbe anerkannt.
                Dieses kulturelle Erbe kann ein Vorteil für die Gesundheit sein, wenn man auf Vollkornvarianten
                setzt.
              </p>
              <p>
                Die regionale Küche in Deutschland unterscheidet sich erheblich zwischen Nord und Süd, Ost und West.
                Die <strong>bayerische Küche</strong> ist bekannt für deftige Gerichte wie Schweinsbraten, Knödel und
                Weißwurst – Speisen, die oft kalorienreich sind. In <strong>Norddeutschland</strong> dominieren
                Fischgerichte, Grünkohl und leichtere Kartoffelgerichte. Die <strong>schwäbische Küche</strong> bietet
                mit Spätzle und Maultaschen ebenfalls gehaltvollere Optionen. Eine bewusste Auswahl innerhalb
                dieser regionalen Traditionen kann erheblich zur Gewichtskontrolle beitragen, ohne dass man
                auf regionale Spezialitäten verzichten muss. Das Bundesministerium für Ernährung und
                Landwirtschaft (BMEL) veröffentlicht jährlich den <strong>Ernährungsreport</strong>, der aktuelle
                Trends im Essverhalten der Deutschen dokumentiert. Die Ergebnisse zeigen einen zunehmenden Trend
                zu bewusster Ernährung, pflanzlichen Alternativen und regionalen Produkten.
              </p>
              <p>
                In <strong>Österreich</strong> spielt die Wiener Küche mit ihren berühmten Mehlspeisen – Sachertorte,
                Apfelstrudel, Kaiserschmarrn – eine kulturelle Rolle, die das Bewusstsein für Kalorienzufuhr
                erschweren kann. Die Schweizer Ernährung ist stark von Milchprodukten geprägt (Käse, Schokolade),
                profitiert aber von einer starken Tradition der Outdoor-Aktivitäten und des Wanderns, die als
                natürlicher Ausgleich dient.
              </p>
            </div>
          </div>

          {/* Nutri-Score & Schulverpflegung */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-teal-600/10">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-display font-bold">Nutri-Score, Schulverpflegung und Prävention</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Seit November 2020 können Lebensmittelhersteller in Deutschland den <strong>Nutri-Score</strong> freiwillig
                auf ihren Produkten verwenden. Diese fünfstufige Farbskala von A (grün, ernährungsphysiologisch
                günstig) bis E (rot, weniger günstig) soll Verbrauchern eine schnelle Orientierung beim
                Lebensmitteleinkauf ermöglichen. Das BMEL hat die Einführung aktiv unterstützt, und immer
                mehr deutsche Hersteller und Handelsketten nutzen das Kennzeichnungssystem. Studien zeigen,
                dass der Nutri-Score Verbraucher tatsächlich zu gesünderen Kaufentscheidungen motiviert,
                insbesondere beim Vergleich von Produkten innerhalb einer Kategorie.
              </p>
              <p>
                Im Bereich der <strong>Schulverpflegung</strong> hat Deutschland in den letzten Jahren erhebliche
                Fortschritte gemacht. Die <strong>Vernetzungsstellen Schulverpflegung</strong>, die in jedem
                Bundesland eingerichtet wurden, arbeiten daran, die Qualität des Schulessens nach den Standards
                der DGE zu verbessern. Der DGE-Qualitätsstandard für die Schulverpflegung empfiehlt unter anderem
                täglich frisches Gemüse und Salat, mindestens einmal pro Woche Fisch, die Bevorzugung von
                Vollkornprodukten und eine Reduzierung von Zucker und Fett. Ziel ist es, bereits im Kindesalter
                gesunde Essgewohnheiten zu fördern und damit langfristig Adipositas vorzubeugen.
              </p>
              <p>
                Die <strong>BZgA</strong> betreibt mehrere Präventionsprogramme, die speziell auf verschiedene
                Altersgruppen zugeschnitten sind. Das Programm <strong>„Gut Essen und Trinken"</strong> richtet sich
                an Erwachsene, während <strong>„Komm, iss mit!"</strong> Familien mit Kindern anspricht. Für ältere
                Menschen gibt es spezielle Empfehlungen zur Erhaltung eines gesunden Gewichts unter
                Berücksichtigung des veränderten Nährstoffbedarfs im Alter. Das DKFZ betont in seinen
                Veröffentlichungen, dass Prävention durch gesunde Ernährung und ausreichend Bewegung
                einen wesentlichen Beitrag zur Krebsprävention leistet – ein Aspekt, der in der
                Gewichtsdiskussion häufig zu wenig Beachtung findet. Zusammen bilden diese Institutionen
                ein engmaschiges Netz der Gesundheitsförderung, das in der DACH-Region einzigartig ist.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Gesundheit und Gewicht: Das Wesentliche</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Ein <strong>gesundes Gewicht</strong> zu halten ist wichtig für Ihr allgemeines Wohlbefinden. Die Beziehung
                zwischen <strong>Gewicht und Gesundheit</strong> ist komplex und hängt von vielen Faktoren ab. Der <strong>BMI</strong>
                ist nur einer von mehreren Indikatoren, um zu beurteilen, ob Sie sich in einer gesunden Gewichtszone befinden.
              </p>
              <p>
                Um <strong>gesund abzunehmen</strong> oder <strong>Ihr Gewicht zu halten</strong>, bevorzugen Sie einen
                ganzheitlichen Ansatz: ausgewogene Ernährung, regelmäßige körperliche Aktivität, ausreichend Schlaf und
                Stressbewältigung. Vermeiden Sie Jo-Jo-Diäten, die gesundheitsschädlich sind.
              </p>
              <p>
                Ein <strong>gesunder Lebensstil</strong> ist wichtiger als eine Zahl auf der Waage. Konzentrieren Sie sich
                auf <strong>Lebensgewohnheiten</strong> statt auf das Gewicht. Im Zweifelsfall konsultieren Sie einen
                Gesundheitsfachmann für eine personalisierte Begleitung.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Berechnen Sie Ihren BMI</h3>
            <p className="text-muted-foreground mb-6">
              Erster Indikator zur Bewertung Ihres gesunden Gewichts
            </p>
            <Link
              to="/de/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Meinen BMI berechnen
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

export default GesundheitGewicht;
