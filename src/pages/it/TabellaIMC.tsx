import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2, Globe, BookOpen, Activity, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const TabellaIMC = () => {
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
            Classificazione OMS
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Tabella IMC Completa</span> : Classificazione OMS
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Classificazione OMS adottata dall'ISS e dal Ministero della Salute.
            L'Italia ha il 12% di obesi — uno dei tassi pi&ugrave; bassi d'Europa,
            ma il divario Nord-Sud &egrave; enorme.
          </p>
        </header>

        <div className="space-y-8">
          {/* Tabella principale */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Classificazione internazionale dell'IMC (adulti)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Classificazione</th>
                    <th className="text-left py-4 px-4 font-bold">IMC (kg/m&sup2;)</th>
                    <th className="text-left py-4 px-4 font-bold">Rischio di comorbidit&agrave;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Grave sottopeso</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16,0</td>
                    <td className="py-4 px-4 text-info">Elevato (malnutrizione)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Sottopeso moderato</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16,0 - 16,9</td>
                    <td className="py-4 px-4 text-info">Moderato</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Sottopeso lieve</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17,0 - 18,4</td>
                    <td className="py-4 px-4 text-info">Basso</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">Normopeso</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18,5 - 24,9</td>
                    <td className="py-4 px-4 text-success">Basso (riferimento)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">Sovrappeso (Pre-obesit&agrave;)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25,0 - 29,9</td>
                    <td className="py-4 px-4 text-warning">Aumentato</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesit&agrave; Classe I (moderata)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30,0 - 34,9</td>
                    <td className="py-4 px-4 text-destructive">Elevato</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesit&agrave; Classe II (grave)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35,0 - 39,9</td>
                    <td className="py-4 px-4 text-destructive">Molto elevato</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesit&agrave; Classe III (morbigena)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&ge; 40,0</td>
                    <td className="py-4 px-4 text-destructive">Estremamente elevato</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Fonte: Organizzazione Mondiale della Sanit&agrave; (OMS), adottata dall'Istituto Superiore di Sanit&agrave; (ISS)
            </p>
          </div>

          {/* Tabella peso / altezza con altezze medie italiane */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabella peso / altezza — medie italiane</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Corrispondenza tra altezza e intervallo di peso per ogni categoria di IMC.
              Le righe evidenziate corrispondono alle <strong>altezze medie italiane</strong>:
              177 cm per gli uomini e 163 cm per le donne (dati ISTAT).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">Altezza</th>
                    <th className="text-left py-3 px-3 font-bold text-info">Sottopeso<br />&lt;18,5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">Normopeso<br />18,5-24,9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">Sovrappeso<br />25-29,9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">Obesit&agrave;<br />&ge;30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72, highlight: false },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77, highlight: false },
                    { h: 163, u: 49, nMin: 49, nMax: 66, sMin: 66, sMax: 80, o: 80, highlight: true, label: "Media donne" },
                    { h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81, highlight: false },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87, highlight: false },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92, highlight: false },
                    { h: 177, u: 58, nMin: 58, nMax: 78, sMin: 78, sMax: 94, o: 94, highlight: true, label: "Media uomini" },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97, highlight: false },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102, highlight: false },
                    { h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108, highlight: false },
                  ].map((row) => (
                    <tr
                      key={row.h}
                      className={`border-b border-border/50 ${row.highlight ? "bg-primary/10 ring-1 ring-primary/30" : ""}`}
                    >
                      <td className="py-3 px-3 font-bold">
                        {row.h} cm
                        {row.highlight && (
                          <span className="ml-2 text-xs text-primary font-medium">
                            ({row.label})
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Altezze medie italiane: ISTAT, Indagine multiscopo sulle famiglie. Calcoli arrotondati al kg.
            </p>
          </div>

          {/* Prevalenza per categoria in Italia */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Prevalenza per categoria in Italia</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Secondo i dati ISTAT e il sistema di sorveglianza <strong>PASSI</strong> dell'ISS,
              l'Italia presenta uno dei tassi di obesit&agrave; pi&ugrave; bassi dell'Europa occidentale.
              Tuttavia, il divario regionale &egrave; significativo.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-6 rounded-2xl bg-success/10 border border-success/20 text-center">
                <div className="text-4xl font-display font-bold text-success mb-2">12%</div>
                <p className="text-sm text-muted-foreground">
                  <strong>Obesi</strong> in Italia — tra i pi&ugrave; bassi dell'Europa occidentale
                  (Regno Unito 26%, Germania 19%)
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-warning/10 border border-warning/20 text-center">
                <div className="text-4xl font-display font-bold text-warning mb-2">36%</div>
                <p className="text-sm text-muted-foreground">
                  <strong>Sovrappeso + obesi</strong> nella popolazione adulta italiana
                  (24% sovrappeso, 12% obesi)
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20 text-center">
                <div className="text-4xl font-display font-bold text-destructive mb-2">Nord-Sud</div>
                <p className="text-sm text-muted-foreground">
                  <strong>Campania 14,1%</strong> di obesi contro
                  <strong> Trentino-Alto Adige 7,8%</strong> — quasi il doppio
                </p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Regione / Macroarea</th>
                    <th className="text-left py-3 px-4 font-bold">Obesit&agrave; (%)</th>
                    <th className="text-left py-3 px-4 font-bold">Sovrappeso (%)</th>
                    <th className="text-left py-3 px-4 font-bold">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { reg: "Trentino-Alto Adige", ob: "7,8", sv: "27,5", trend: "Stabile" },
                    { reg: "Lombardia", ob: "9,2", sv: "30,1", trend: "Stabile" },
                    { reg: "Toscana", ob: "9,5", sv: "29,8", trend: "Stabile" },
                    { reg: "Italia (media)", ob: "12,0", sv: "35,5", trend: "Lieve aumento" },
                    { reg: "Sicilia", ob: "13,2", sv: "37,4", trend: "In aumento" },
                    { reg: "Campania", ob: "14,1", sv: "39,3", trend: "In aumento" },
                  ].map((row) => (
                    <tr
                      key={row.reg}
                      className={`border-b border-border/50 ${row.reg === "Italia (media)" ? "bg-primary/5 font-semibold" : ""}`}
                    >
                      <td className="py-3 px-4">{row.reg}</td>
                      <td className="py-3 px-4 font-mono">{row.ob}%</td>
                      <td className="py-3 px-4 font-mono">{row.sv}%</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Fonte: ISTAT Indagine multiscopo, Sistema di sorveglianza PASSI (ISS)
            </p>
          </div>

          {/* Dieta Mediterranea e IMC */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Dieta Mediterranea e IMC: perch&eacute; l'Italia resiste all'obesit&agrave;</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'Italia mantiene un tasso di obesit&agrave; relativamente basso grazie a un insieme di fattori
                culturali e alimentari profondamente radicati. La <strong>dieta mediterranea</strong>, riconosciuta
                dall'UNESCO come Patrimonio Culturale Immateriale dell'Umanit&agrave; nel 2010, &egrave; considerata
                uno dei modelli alimentari pi&ugrave; efficaci nella prevenzione dell'obesit&agrave; e delle malattie
                cardiovascolari.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="p-5 rounded-xl bg-success/5 border border-success/20">
                  <h4 className="font-bold mb-3">Pilastri della dieta mediterranea</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Olio extravergine d'oliva</strong> come grasso principale, ricco di polifenoli e acido oleico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Frutta, verdura e legumi</strong> ad ogni pasto, apporto elevato di fibre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Cereali integrali e pesce</strong>, proteine di qualit&agrave; e basso indice glicemico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Consumo moderato di vino</strong> ai pasti, parte della tradizione conviviale</span>
                    </li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-bold mb-3">Fattori culturali protettivi</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Mensa scolastica</strong>: pasti equilibrati cucinati in loco, menu supervisionati da nutrizionisti ASL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Pasti in famiglia</strong>: tradizione del pranzo e della cena come momenti sociali, porzioni regolari</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Prodotti DOP e IGP</strong>: qualit&agrave; certificata, filiera corta, stagionalit&agrave; degli alimenti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Passeggiata serale</strong>: attivit&agrave; fisica leggera radicata nella cultura quotidiana</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Tuttavia, i dati ISTAT mostrano che le regioni meridionali, dove paradossalmente nacque la
                dieta mediterranea, registrano oggi i tassi di obesit&agrave; pi&ugrave; alti. Gli esperti attribuiscono
                questo fenomeno a fattori socioeconomici: reddito pi&ugrave; basso, minore accesso a prodotti freschi
                di qualit&agrave; e diffusione crescente di cibi ultra-processati, soprattutto tra i giovani.
              </p>
            </div>
          </div>

          {/* Circonferenza vita: linee guida ISS */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Circonferenza vita: linee guida ISS</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              L'Istituto Superiore di Sanit&agrave; raccomanda di affiancare all'IMC la misurazione della
              <strong> circonferenza vita</strong> (CV), indicatore diretto del grasso viscerale e del rischio
              cardiometabolico. Queste soglie sono adottate anche dal sistema di sorveglianza PASSI.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Genere</th>
                    <th className="text-left py-4 px-4 font-bold text-warning">Rischio aumentato</th>
                    <th className="text-left py-4 px-4 font-bold text-destructive">Rischio molto elevato</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">Uomini</td>
                    <td className="py-4 px-4 font-mono text-warning">&ge; 94 cm</td>
                    <td className="py-4 px-4 font-mono text-destructive">&ge; 102 cm</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">Donne</td>
                    <td className="py-4 px-4 font-mono text-warning">&ge; 80 cm</td>
                    <td className="py-4 px-4 font-mono text-destructive">&ge; 88 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-muted/50">
                <h4 className="font-bold mb-2">Come misurare correttamente</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>1. In piedi, a torso nudo, addome rilassato</li>
                  <li>2. Posizionare il metro a met&agrave; tra l'ultima costola e la cresta iliaca</li>
                  <li>3. Misurare alla fine di una normale espirazione</li>
                  <li>4. Il metro deve essere orizzontale e aderente, senza comprimere la pelle</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-muted/50">
                <h4 className="font-bold mb-2">Perch&eacute; affiancarla all'IMC</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>-- L'IMC non distingue massa grassa da massa magra</li>
                  <li>-- La CV individua l'obesit&agrave; addominale, il tipo pi&ugrave; pericoloso</li>
                  <li>-- Una CV elevata con IMC normale indica comunque rischio cardiovascolare</li>
                  <li>-- L'ISS la include nei protocolli di prevenzione primaria</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Fonte: ISS, Linee guida per la prevenzione dell'obesit&agrave;; IDF (International Diabetes Federation)
            </p>
          </div>

          {/* Casi limite ed eccezioni */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Casi limite ed eccezioni</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">L'IMC non &egrave; adatto per:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Sportivi muscolosi</strong>: massa muscolare = IMC sovrastimato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Donne in gravidanza</strong>: aumento di peso normale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Anziani</strong>: perdita di massa muscolare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Bambini/adolescenti</strong>: necessarie curve specifiche</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Indicatori complementari:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Circonferenza vita</strong>: grasso addominale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Massa grassa %</strong>: composizione corporea</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Rapporto vita/fianchi</strong>: distribuzione del grasso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI</strong>: per sportivi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ISTAT e ISS: dati sulla distribuzione dell'IMC in Italia */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Activity className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">ISTAT e ISS: il quadro completo dell'obesit&agrave; in Italia</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              L'Italia rappresenta un caso unico nel panorama europeo dell'obesit&agrave;. Con un tasso nazionale del <strong>10,8%</strong> secondo i dati ISTAT pi&ugrave; recenti (Indagine multiscopo "Aspetti della vita quotidiana"), il paese mantiene uno dei livelli pi&ugrave; bassi dell'Europa occidentale, ben al di sotto della media europea del 16,5%. Tuttavia, questo dato nazionale nasconde profondi divari territoriali e tendenze preoccupanti.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="font-bold mb-3">Divario Nord-Sud: i dati regionali</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span><strong>Trentino-Alto Adige: 7,9%</strong> di obesit&agrave;, il tasso pi&ugrave; basso d'Italia. L'elevato livello di reddito, l'accesso a prodotti locali di qualit&agrave; e la cultura dell'attivit&agrave; fisica all'aperto contribuiscono a questo risultato.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span><strong>Lombardia e Veneto: 8,5-9,2%</strong>, tassi inferiori alla media nazionale, favoriti da una forte rete di servizi sanitari e da una maggiore offerta di cibi freschi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span><strong>Campania: 13,2%</strong>, il dato regionale pi&ugrave; alto. La combinazione di fattori socioeconomici sfavorevoli, minore accesso a cibi freschi di qualit&agrave; e diffusione di abitudini alimentari squilibrate spiega il divario.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span><strong>Sicilia e Calabria: 12,5-13%</strong>, tassi simili alla Campania. Il paradosso &egrave; che proprio nelle regioni dove nacque la dieta mediterranea, l'obesit&agrave; &egrave; oggi pi&ugrave; diffusa.</span>
                  </li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-info/5 border border-info/20">
                <h4 className="font-bold mb-3">Dati ISS e sorveglianza PASSI</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Il sistema di sorveglianza <strong>PASSI</strong> (Progressi delle Aziende Sanitarie per la Salute in Italia), coordinato dall'<strong>Istituto Superiore di Sanit&agrave; (ISS)</strong>, raccoglie dati continui sullo stato di salute degli adulti italiani attraverso interviste telefoniche in tutte le ASL del paese.
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0" />
                    <span>Il <strong>31,5% degli adulti italiani</strong> &egrave; in sovrappeso (IMC 25-29,9), con prevalenza maggiore tra gli uomini (40%) rispetto alle donne (24%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-info mt-2 flex-shrink-0" />
                    <span>La prevalenza dell'obesit&agrave; cresce con l'et&agrave;: dal 3% nella fascia 18-24 anni al 15% tra i 50-69 anni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-info mt-2 flex-shrink-0" />
                    <span>Il <strong>45% degli adulti italiani sedentari</strong> ha un IMC superiore a 25, contro il 28% di chi pratica attivit&agrave; fisica regolare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-info mt-2 flex-shrink-0" />
                    <span>Il sistema <strong>OKkio alla Salute</strong> monitora l'obesit&agrave; infantile: il 20,4% dei bambini di 8-9 anni &egrave; in sovrappeso e il 9,4% &egrave; obeso</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Il costo annuale dell'obesit&agrave; per il sistema sanitario italiano &egrave; stimato in circa <strong>9 miliardi di euro</strong> (fonte: Italian Barometer Diabetes Observatory), pari al 4% della spesa sanitaria pubblica. L'ISS raccomanda un approccio integrato che combini prevenzione primaria (educazione alimentare e promozione dell'attivit&agrave; fisica), screening sistematico dell'IMC nelle cure primarie e trattamento specialistico per le forme gravi.
            </p>
          </div>

          {/* Ancel Keys e la dieta mediterranea nel Cilento */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Heart className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Ancel Keys e lo Studio delle Sette Nazioni: come il Cilento ha cambiato la nutrizione mondiale</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La comprensione del rapporto tra alimentazione, IMC e salute cardiovascolare deve molto al lavoro del fisiologo americano <strong>Ancel Keys</strong> (1904-2004), che nel 1958 avvi&ograve; il celebre <strong>Seven Countries Study</strong> (Studio delle Sette Nazioni). Questo studio longitudinale, che segui&igrave; oltre 12.000 uomini in sette paesi per decenni, rivel&ograve; che le popolazioni del <strong>Cilento</strong> (Campania meridionale) presentavano tassi di malattie cardiovascolari e obesit&agrave; straordinariamente bassi rispetto alle popolazioni nordamericane e nordeuropee.
              </p>
              <p>
                Keys, che visse a <strong>Pioppi</strong> (comune di Pollica, Salerno) per oltre 28 anni fino alla sua morte a 100 anni, document&ograve; che la dieta dei contadini cilentani -- basata su <strong>olio extravergine d'oliva, verdure di stagione, legumi, pane integrale, pesce e vino rosso in moderazione</strong> -- era associata a un IMC medio di 22-23 e a una longevit&agrave; eccezionale. Queste osservazioni gettarono le basi scientifiche del concetto di <strong>dieta mediterranea</strong>.
              </p>
              <p>
                Il paradosso odierno &egrave; significativo: le regioni del Sud Italia dove Keys condusse le sue ricerche registrano oggi i tassi di obesit&agrave; pi&ugrave; alti del paese. La globalizzazione alimentare, l'abbandono delle pratiche agricole tradizionali, l'urbanizzazione e la diffusione capillare di alimenti ultraprocessati hanno eroso il modello alimentare che aveva reso il Cilento un esempio mondiale di salute. Questo fenomeno, studiato ampiamente dall'ISS, dimostra che la dieta mediterranea non &egrave; solo un patrimonio da celebrare, ma un modello che va attivamente difeso e promosso attraverso politiche educative e sanitarie mirate.
              </p>
            </div>
          </div>

          {/* Slow Food e impatto sull'IMC */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Slow Food, biodiversit&agrave; e prevenzione dell'obesit&agrave;</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il movimento <strong>Slow Food</strong>, fondato a <strong>Bra (Piemonte)</strong> nel 1986 da Carlo Petrini, rappresenta una delle risposte culturali italiane pi&ugrave; originali alla globalizzazione alimentare e ai suoi effetti sull'aumento dell'IMC nella popolazione. Nato come reazione all'apertura del primo McDonald's a Piazza di Spagna a Roma, Slow Food ha sviluppato una filosofia del "cibo buono, pulito e giusto" che promuove la biodiversit&agrave; alimentare, la produzione locale e il ritorno a pratiche gastronomiche tradizionali.
              </p>
              <p>
                L'impatto di Slow Food sulla prevenzione dell'obesit&agrave; opera su molteplici livelli. I <strong>Presidi Slow Food</strong> (oltre 600 in Italia) salvaguardano variet&agrave; vegetali e razze animali tradizionali, mantenendo viva una diversit&agrave; alimentare che contrasta l'omologazione dei prodotti industriali. L'<strong>Universit&agrave; di Scienze Gastronomiche di Pollenzo</strong> (Cuneo), fondata da Slow Food nel 2004, forma professionisti che uniscono conoscenze nutrizionali, agronomiche e culturali, promuovendo un approccio olistico all'alimentazione.
              </p>
              <p>
                Il progetto <strong>"Orto in Condotta"</strong> di Slow Food Italia coinvolge oltre 600 scuole in tutta la penisola, insegnando ai bambini a coltivare e cucinare ortaggi, a riconoscere i prodotti di stagione e a sviluppare un rapporto consapevole con il cibo. Studi dell'<strong>INRAN</strong> (oggi CREA-Alimenti e Nutrizione) hanno dimostrato che i bambini partecipanti a programmi di educazione alimentare pratica presentano un consumo di frutta e verdura superiore del 30% rispetto ai coetanei e un IMC medio inferiore.
              </p>
              <p>
                La filosofia Slow Food, unita al patrimonio della dieta mediterranea e al sistema DOP/IGP italiano (oltre 320 prodotti certificati, il primato europeo), costituisce un ecosistema culturale e alimentare che contribuisce a mantenere il tasso di obesit&agrave; italiano tra i pi&ugrave; bassi d'Europa. Tuttavia, come sottolineano i ricercatori dell'ISS, questo vantaggio non &egrave; scontato: senza politiche attive di educazione alimentare e di contrasto alla pubblicit&agrave; di cibi ultraprocessati rivolti ai giovani, l'Italia rischia di allinearsi progressivamente ai livelli di obesit&agrave; dei paesi nordeuropei.
              </p>
            </div>
          </div>

          {/* Sezione SEO - Interpretare l'IMC in Italia */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Tabella IMC in Italia: interpretazione e contesto nazionale</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>tabella IMC dell'OMS</strong>, adottata dall'<strong>Istituto Superiore di Sanit&agrave;</strong> (ISS)
                e dal <strong>Ministero della Salute</strong>, &egrave; il riferimento ufficiale in Italia per classificare
                la corporatura degli adulti. Questa <strong>tabella dell'indice di massa corporea</strong> definisce le soglie
                di <strong>sottopeso</strong>, <strong>normopeso</strong>, <strong>sovrappeso</strong> e <strong>obesit&agrave;</strong>.
              </p>
              <p>
                Secondo i dati <strong>ISTAT</strong> pi&ugrave; recenti, l'Italia presenta il <strong>12% di obesi</strong> nella
                popolazione adulta, un dato tra i pi&ugrave; bassi dell'Europa occidentale. Questo risultato &egrave; largamente
                attribuito alla <strong>dieta mediterranea</strong>, modello alimentare riconosciuto dall'UNESCO. Tuttavia,
                il <strong>divario Nord-Sud</strong> resta preoccupante: la Campania supera il 14% di obesit&agrave;, mentre
                il Trentino-Alto Adige si ferma sotto l'8%.
              </p>
              <p>
                La <strong>classificazione dell'IMC</strong> distingue tre livelli di sottopeso (grave, moderato, lieve)
                e tre classi di obesit&agrave; (I, II, III). La <strong>tabella IMC per adulti</strong> si applica alle persone
                di et&agrave; superiore ai 18 anni. Per i bambini, il sistema di sorveglianza <strong>OKkio alla Salute</strong>
                dell'ISS utilizza curve di crescita specifiche.
              </p>
              <p>
                Per interpretare il vostro risultato, consultate la <strong>tabella di corrispondenza IMC</strong> qui sopra,
                calibrata sulle altezze medie italiane. La <strong>tabella peso altezza IMC</strong> vi permette di vedere
                direttamente quale peso corrisponde a quale categoria per la vostra statura. L'ISS raccomanda inoltre di
                affiancare la misurazione della <strong>circonferenza vita</strong> per una valutazione completa del rischio
                cardiometabolico.
              </p>
            </div>
          </div>

          {/* CTA - Calcola il tuo IMC */}
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">Calcola il tuo IMC adesso</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Utilizza il nostro calcolatore gratuito per scoprire in quale categoria ti trovi secondo la classificazione OMS.
            </p>
            <Link
              to="/it/imc"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              <Scale className="w-5 h-5" />
              Calcola il tuo IMC
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

export default TabellaIMC;
