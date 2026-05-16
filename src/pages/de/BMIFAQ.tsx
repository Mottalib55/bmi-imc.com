import { Header } from "@/components/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

interface FAQItemProps { question: string; answer: string; }

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors">
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

const BMIFAQDe = () => {
  const faqs = [
    { question: "Was genau ist der BMI?", answer: "Der <strong>Body-Mass-Index (BMI)</strong> ist ein Indikator zur Schätzung der Körpermasse einer Person. Er wird berechnet, indem das Gewicht (in kg) durch das Quadrat der Körpergröße (in Metern) geteilt wird. Die Formel: BMI = Gewicht / Größe². Es ist ein schnelles Screening-Tool, das von Gesundheitsfachkräften verwendet wird." },
    { question: "Wie berechne ich meinen BMI?", answer: "Um Ihren BMI zu berechnen, teilen Sie Ihr Gewicht in Kilogramm durch das Quadrat Ihrer Größe in Metern. Beispiel: Wenn Sie 70 kg wiegen und 1,75 m groß sind: BMI = 70 / (1,75 × 1,75) = 70 / 3,0625 = <strong>22,9</strong>. Sie können auch unseren <a href='/de/bmi' class='text-primary hover:underline'>kostenlosen BMI-Rechner</a> verwenden." },
    { question: "Was ist ein idealer BMI?", answer: "Laut Weltgesundheitsorganisation liegt der <strong>normale BMI</strong> zwischen <strong>18,5 und 24,9</strong>. Dies ist der Bereich, in dem die gesundheitlichen Risiken am geringsten sind. Der ideale BMI kann jedoch je nach Alter, Geschlecht und körperlicher Aktivität variieren. Der optimale BMI liegt oft bei etwa 21-22." },
    { question: "Ist der BMI zuverlässig?", answer: "Der BMI ist ein guter Indikator für die allgemeine Bevölkerung, hat aber <strong>Grenzen</strong>. Er unterscheidet nicht zwischen Muskel- und Fettmasse. Ein muskulöser Sportler kann einen hohen BMI haben, ohne überschüssiges Fett zu haben. Andere Indikatoren wie Taillenumfang oder Körperfettanteil sind ergänzend. Siehe unsere Seite über <a href='/de/bmi-grenzen' class='text-primary hover:underline'>BMI-Grenzen</a>." },
    { question: "Welcher BMI ist normal für Frauen?", answer: "Der normale BMI für Frauen ist der gleiche wie für Männer: <strong>18,5 bis 24,9</strong>. Frauen haben jedoch natürlicherweise einen höheren Körperfettanteil (20-25% vs. 15-20% bei Männern). Der Taillenumfang ist oft relevanter: Er sollte 80 cm nicht überschreiten. Besuchen Sie unsere Seite zum <a href='/de/bmi-frauen' class='text-primary hover:underline'>BMI für Frauen</a>." },
    { question: "Welcher BMI ist normal für Männer?", answer: "Der normale BMI für Männer liegt zwischen <strong>18,5 und 24,9</strong>. Muskulöse Männer können einen höheren BMI haben (bis zu 27-28), ohne gesundheitliche Probleme. Der Taillenumfang ist ein wichtiger ergänzender Indikator: Er sollte 94 cm nicht überschreiten. Siehe unsere Seite zum <a href='/de/bmi-maenner' class='text-primary hover:underline'>BMI für Männer</a>." },
    { question: "Wie berechne ich den BMI meines Kindes?", answer: "Die Berechnung ist die gleiche (Gewicht/Größe²), aber die <strong>Interpretation ist unterschiedlich</strong>. Die Schwellenwerte für Erwachsene (18,5/25/30) werden nicht verwendet. Es werden BMI-Kurven verwendet, die Alter und Geschlecht berücksichtigen. Das Kind muss auf Perzentilkurven eingeordnet werden. Siehe unsere Seite zum <a href='/de/bmi-kinder' class='text-primary hover:underline'>BMI für Kinder</a>." },
    { question: "Kann man den BMI in der Schwangerschaft berechnen?", answer: "<strong>Nein</strong>, der BMI gilt nicht während der Schwangerschaft. Die Gewichtszunahme ist normal und notwendig. Der BMI vor der Schwangerschaft wird als Referenz verwendet, um die empfohlene Gewichtszunahme zu bestimmen (11-16 kg bei normalem BMI). Konsultieren Sie Ihren Gynäkologen für eine individuelle Betreuung." },
    { question: "Gilt der BMI auch für Sportler?", answer: "Der <strong>BMI ist für Sportler verzerrt</strong>. Die Formel unterscheidet nicht zwischen Muskeln und Fett. Ein Bodybuilder mit 10% Körperfett kann einen BMI von 30+ haben (klassifiziert als fettleibig). Für Sportler sind <strong>FFMI</strong>, Körperfettanteil oder Taillenumfang besser geeignet. Siehe unsere Seite zum <a href='/de/bmi-sportler' class='text-primary hover:underline'>BMI für Sportler</a>." },
    { question: "Ab welchem BMI beginnt Übergewicht?", answer: "<strong>Übergewicht</strong> beginnt bei einem BMI von <strong>25</strong>. Zwischen 25 und 29,9 liegt Übergewicht (oder Präadipositas) vor. Ab 30 spricht man von Adipositas. Diese Schwellenwerte wurden von der WHO festgelegt und werden weltweit verwendet." },
    { question: "Ab welchem BMI beginnt Adipositas?", answer: "<strong>Adipositas</strong> beginnt bei einem BMI von <strong>30</strong>. Sie wird in drei Grade unterteilt: Grad I (30-34,9) = mäßige Adipositas, Grad II (35-39,9) = schwere Adipositas, Grad III (≥40) = morbide Adipositas. Je höher der BMI, desto größer die gesundheitlichen Risiken." },
    { question: "Wie nehme ich effektiv ab?", answer: "Um nachhaltig Gewicht zu verlieren: <strong>1)</strong> Schaffen Sie ein moderates Kaloriendefizit (300-500 kcal/Tag), <strong>2)</strong> Bevorzugen Sie eine ausgewogene, proteinreiche Ernährung, <strong>3)</strong> Treiben Sie regelmäßig Sport (Ausdauer + Kraft), <strong>4)</strong> Schlafen Sie ausreichend (7-8 Stunden), <strong>5)</strong> Seien Sie geduldig: Streben Sie maximal 0,5-1 kg/Woche an." },
    { question: "Ist der Taillenumfang wichtiger als der BMI?", answer: "Der Taillenumfang ist eine <strong>ausgezeichnete Ergänzung</strong> zum BMI. Er misst das viszerale Fett, das am gefährlichsten für die Gesundheit ist. Empfohlene Schwellenwerte: Männer <94 cm (mäßiges Risiko), <102 cm (hohes Risiko). Frauen <80 cm (mäßiges Risiko), <88 cm (hohes Risiko)." },
    { question: "Verändert sich der BMI mit dem Alter?", answer: "Die BMI-Formel bleibt gleich, aber die <strong>Interpretation kann variieren</strong>. Nach 65 Jahren kann ein etwas höherer BMI (bis zu 27) schützend sein. Mit zunehmendem Alter nimmt die Muskelmasse ab, was den BMI verzerren kann. Es wird eine regelmäßige medizinische Überwachung empfohlen." },
    { question: "Gilt der BMI gleich für alle Ethnien?", answer: "Nein. Die <strong>WHO</strong> empfiehlt für Menschen südasiatischer oder ostasiatischer Herkunft niedrigere Schwellenwerte: Übergewicht ab BMI <strong>23</strong> statt 25 und Adipositas ab 27,5 statt 30. In Deutschland mit über 20 % Bevölkerung mit Migrationshintergrund ist das besonders relevant. Studien zeigen, dass bei diesen Gruppen schon bei niedrigerem BMI ein erhöhtes Risiko für Typ-2-Diabetes und Herz-Kreislauf-Erkrankungen besteht. Sprechen Sie mit Ihrem Hausarzt über Ihre individuelle <a href='/de/bmi-interpretation' class='text-primary hover:underline'>BMI-Interpretation</a>." },
    { question: "Was ist der Unterschied zwischen BMI und WHtR?", answer: "Das <strong>Waist-to-Height-Ratio (WHtR)</strong>, auf Deutsch Taille-zu-Größe-Verhältnis, gilt als präziserer Indikator für gesundheitliche Risiken als der BMI. Es wird berechnet, indem der Taillenumfang durch die Körpergröße geteilt wird. Ein WHtR unter <strong>0,5</strong> gilt als optimal. Im Gegensatz zum BMI erfasst das WHtR gezielt das gefährliche viszerale Bauchfett und berücksichtigt die Fettverteilung. Der BMI bleibt jedoch als schnelles Screening-Tool nützlich – idealerweise kombiniert man beide Werte. Mehr zu den <a href='/de/bmi-grenzen' class='text-primary hover:underline'>Grenzen des BMI</a>." },
    { question: "Übernimmt die Krankenkasse eine Ernährungsberatung?", answer: "Ja, gemäß <strong>§ 43 SGB V</strong> bezuschussen gesetzliche Krankenkassen individuelle Ernährungsberatung bei ärztlicher Verordnung (z. B. bei BMI ≥ 30 oder Diabetes). Der Eigenanteil beträgt meist 10 % der Kosten. Zusätzlich fördert <strong>§ 20 SGB V</strong> zertifizierte Präventionskurse mit bis zu <strong>150 € pro Kurs</strong> jährlich – darunter DGE-zertifizierte Programme zur Gewichtsreduktion. Fragen Sie Ihre Krankenkasse nach dem Bonusprogramm und lassen Sie sich vorab eine Kostenübernahme bestätigen." },
    { question: "Was ist Normal-Weight-Obesity (NWO)?", answer: "<strong>Normal-Weight-Obesity</strong> bezeichnet Personen mit normalem BMI (18,5–24,9), aber überhöhtem Körperfettanteil – über <strong>30 % bei Frauen</strong> und über <strong>25 % bei Männern</strong>. Man spricht auch vom <strong>TOFI-Phänomen</strong> (Thin Outside, Fat Inside). Diese Menschen tragen verstecktes viszerales Fett, das Entzündungen fördert und das Risiko für Herz-Kreislauf-Erkrankungen erhöht. Der BMI allein erkennt dieses Risikoprofil nicht. Eine Körperfettmessung (BIA, DEXA) ist hier entscheidend. Siehe auch <a href='/de/bmi-grenzen' class='text-primary hover:underline'>BMI-Grenzen</a>." },
    { question: "Wie genau sind BMI-Apps und Smartwatches?", answer: "BMI-Apps berechnen den Index korrekt, da die Formel einfach ist – die Genauigkeit hängt nur von Ihren eingegebenen Daten ab. <strong>Smarte Körperwaagen</strong> mit bioelektrischer Impedanzanalyse (BIA) können Körperfett auf ±3–5 % genau messen, sofern sie unter konstanten Bedingungen genutzt werden. Smartwatches am Handgelenk sind für Körperkomposition dagegen <strong>wenig zuverlässig</strong>. Am besten kombinieren Sie eine gute BIA-Waage mit regelmäßiger ärztlicher Kontrolle für ein vollständiges Bild Ihrer <a href='/de/gesundheit-gewicht' class='text-primary hover:underline'>Gesundheit und Ihres Gewichts</a>." },
    { question: "Ab welchem BMI ist eine Magenverkleinerung möglich?", answer: "In Deutschland ist eine <strong>bariatrische Operation</strong> (Schlauchmagen, Magenbypass) ab einem BMI ≥ <strong>40</strong> oder ab BMI ≥ <strong>35 mit Begleiterkrankungen</strong> (Diabetes, Bluthochdruck, Schlafapnoe) möglich. Voraussetzung ist eine dokumentierte <strong>6-monatige konservative Therapie</strong> (Ernährungsumstellung, Bewegung, Psychotherapie). Der Antrag geht an den <strong>Medizinischen Dienst (MD)</strong>, der die Kostenübernahme prüft. Es empfiehlt sich, einen von der <strong>DKG-zertifizierten Adipositas-Zentrum</strong> aufzusuchen, das das gesamte Verfahren begleitet. Mehr zum Thema <a href='/de/bmi-interpretation' class='text-primary hover:underline'>BMI-Interpretation</a>." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-4xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Häufig gestellte Fragen
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI FAQ</span> : Häufige Fragen zum Body-Mass-Index
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Antworten auf die häufigsten Fragen zum Body-Mass-Index
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Berechnen Sie jetzt Ihren BMI</h3>
          <p className="text-muted-foreground mb-6">Verwenden Sie unseren kostenlosen Rechner, um Ihren BMI zu ermitteln</p>
          <Link to="/de/bmi" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">Meinen BMI berechnen</Link>
        </div>

        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">Alles über den BMI</h2>
          <div className="text-muted-foreground space-y-4">
            <p>Diese <strong>BMI-FAQ</strong> beantwortet die häufigsten Fragen zur Berechnung und Interpretation des Body-Mass-Index. Ob Sie wissen möchten, <strong>wie Sie Ihren BMI berechnen</strong>, <strong>was ein idealer BMI ist</strong> oder <strong>ob der BMI zuverlässig ist</strong>, hier finden Sie die Antworten.</p>
            <p>Der BMI ist ein einfaches, aber nützliches Werkzeug zur Einschätzung Ihrer Körpermasse. Er hat jedoch seine Grenzen und sollte durch andere Indikatoren ergänzt werden. Zögern Sie nicht, einen Spezialisten für eine umfassende Bewertung zu konsultieren.</p>
            <p>Im <strong>deutschen Gesundheitssystem</strong> ist der BMI fest verankert: Der <strong>Gesundheits-Check-up</strong> beim Hausarzt, der von allen gesetzlichen Krankenkassen (GKV) ab 35 Jahren übernommen wird, umfasst routinemäßig eine BMI-Berechnung. Bei einem BMI ab 30 kann Ihr Arzt eine <strong>Ernährungsberatung nach § 43 SGB V</strong> verordnen, die von der Krankenkasse bezuschusst wird. Die <strong>Bundeszentrale für gesundheitliche Aufklärung (BZgA)</strong> stellt zudem kostenlose Informationsmaterialien zum Thema Gewichtsmanagement bereit. Darüber hinaus fördert <strong>§ 20 SGB V</strong> Präventionskurse in den Bereichen Ernährung und Bewegung mit Zuschüssen von bis zu 150 Euro pro Kurs. Bei schwerer Adipositas (BMI ab 35 mit Begleiterkrankungen oder ab 40) kann nach einer dokumentierten sechsmonatigen konservativen Therapie sogar eine <strong>bariatrische Operation</strong> (Magenbypass, Schlauchmagen) von der Krankenkasse übernommen werden -- ein Antrag beim Medizinischen Dienst (MD) ist dafür erforderlich. In Österreich bietet die <strong>Österreichische Gesundheitskasse (ÖGK)</strong> vergleichbare Leistungen, einschließlich des traditionellen Kursystems, und in der Schweiz deckt die obligatorische <strong>Grundversicherung (KVG)</strong> ärztliche Ernährungsberatung bei vorliegender Diagnose ab.</p>
            <p>Die <strong>Nationale Adipositas-Strategie</strong> der Bundesregierung zielt darauf ab, Übergewicht und Adipositas in Deutschland langfristig zu reduzieren. Grundlage der evidenzbasierten Behandlung ist die <strong>S3-Leitlinie der Deutschen Adipositas-Gesellschaft (DAG)</strong>, die einen multimodalen Ansatz aus Ernährungstherapie, Bewegungstherapie und Verhaltensmodifikation empfiehlt. Strukturierte Programme wie <strong>DOC WEIGHT</strong> (ein ärztlich begleitetes Langzeitprogramm) und <strong>M.O.B.I.L.I.S.</strong> (ein interdisziplinäres Bewegungs- und Lebensstilprogramm für Personen mit BMI 30–40) werden von vielen Krankenkassen gefördert. Diese Programme kombinieren wöchentliche Gruppeneinheiten, individuelle Beratung und langfristige Nachsorge über mindestens zwölf Monate – ein Ansatz, der deutlich effektiver ist als kurzfristige Diäten.</p>
            <p>Die <strong>Deutsche Gesellschaft für Ernährung (DGE)</strong> hat 2024 ihre Ernährungsempfehlungen grundlegend überarbeitet. Die aktualisierten <strong>„10 Regeln der DGE"</strong> betonen nun stärker den Stellenwert pflanzlicher Lebensmittel, die Reduktion von Zucker und gesättigten Fettsäuren sowie die Nachhaltigkeit der Ernährung. Für den DACH-Raum (Deutschland, Österreich, Schweiz) gewinnt zudem der <strong>Nutri-Score</strong> als vereinfachte Nährwertkennzeichnung auf Lebensmittelverpackungen an Bedeutung – er hilft Verbrauchern, schnell gesündere Produkte zu erkennen. In Kombination mit einem regelmäßigen BMI-Monitoring unterstützen diese Instrumente ein bewussteres Essverhalten und langfristiges <a href='/de/gesundheit-gewicht' class='text-primary hover:underline'>Gewichtsmanagement</a>.</p>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI FAQ - Antworten auf Ihre Fragen</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIFAQDe;
