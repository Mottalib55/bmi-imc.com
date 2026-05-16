import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2, BookOpen, Globe, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const SalutePeso = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Salute e Benessere
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Salute e Peso</span> : Guida Nutrizione e Benessere
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprendere la relazione tra peso, IMC e salute generale
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduzione */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso e salute: una relazione complessa</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>peso</strong> è solo uno dei tanti indicatori del vostro stato di salute.
                Un <strong>peso sano</strong> dipende da numerosi fattori: genetica, morfologia, attività fisica,
                alimentazione, sonno e benessere mentale.
              </p>
              <p>
                L'ossessione per il numero sulla bilancia può essere controproducente. È più importante
                concentrarsi su <strong>abitudini di vita sane</strong> piuttosto che su un peso obiettivo preciso.
                La salute non si misura solo in chilogrammi.
              </p>
            </div>
          </div>

          {/* Rischi per la salute */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Rischi legati al peso</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Rischi del sovrappeso e dell'obesità</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Malattie cardiovascolari (infarto, ictus)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Diabete di tipo 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Ipertensione arteriosa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Apnea notturna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Alcuni tipi di cancro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Problemi articolari</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Rischi del sottopeso</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Carenze nutrizionali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Sistema immunitario indebolito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Osteoporosi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Disturbi ormonali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Stanchezza cronica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Problemi di fertilità</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pilastri della salute */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">I 5 pilastri di un peso sano</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Alimentazione</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Privilegiate gli alimenti non trasformati</li>
                  <li>Mangiate verdure ad ogni pasto</li>
                  <li>Limitate gli zuccheri aggiunti</li>
                  <li>Idratatevi a sufficienza</li>
                  <li>Ascoltate la vostra fame e sazietà</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Attività fisica</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 min di attività moderata/settimana</li>
                  <li>Includete il rinforzo muscolare</li>
                  <li>Muovetevi regolarmente durante la giornata</li>
                  <li>Trovate un'attività che vi piace</li>
                  <li>Progredite gradualmente</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Sonno</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Dormite 7-9 ore per notte</li>
                  <li>Orari regolari</li>
                  <li>Evitate gli schermi prima di dormire</li>
                  <li>Camera fresca e buia</li>
                  <li>La mancanza di sonno favorisce l'aumento di peso</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Salute mentale</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Gestite il vostro stress</li>
                  <li>Evitate l'alimentazione emotiva</li>
                  <li>Praticate la consapevolezza</li>
                  <li>Accettate il vostro corpo</li>
                  <li>Consultate un professionista se necessario</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Assistenza medica</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Controllo di salute annuale</li>
                  <li>Monitoraggio della circonferenza vita</li>
                  <li>Controllo pressione, glicemia, colesterolo</li>
                  <li>Consultate un nutrizionista se necessario</li>
                  <li>Non seguite diete estreme</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Progressione</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Fissate obiettivi realistici</li>
                  <li>Massimo 0,5-1 kg/settimana</li>
                  <li>Celebrate le piccole vittorie</li>
                  <li>La costanza prevale sull'intensità</li>
                  <li>Pensate a lungo termine</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Consigli per un peso sano */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Consigli per un peso sano</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">Cosa funziona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Cambiamenti <strong>graduali e duraturi</strong> delle abitudini</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Alimentazione <strong>equilibrata</strong>, nessuna restrizione estrema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Attività fisica <strong>regolare e piacevole</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Sonno di <strong>qualità</strong> (7-8h/notte)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Gestione dello <strong>stress</strong> e delle emozioni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Supporto di un <strong>professionista</strong> se necessario</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">Cosa non funziona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Diete <strong>drastiche</strong> e restrittive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Integratori <strong>miracolosi</strong> e pillole dimagranti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Pesarsi <strong>tutti i giorni</strong> (variazioni normali)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Obiettivi di perdita di peso <strong>irrealistici</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Confrontare il proprio corpo con quello degli <strong>altri</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignorare i segnali di <strong>fame/sazietà</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Obesità in Italia: il quadro epidemiologico */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Obesità in Italia: dati e tendenze</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Secondo i dati <strong>ISTAT</strong> più recenti, il <strong>10,8% della popolazione adulta italiana</strong> è
                obesa, un dato che colloca l'Italia tra i Paesi europei con la prevalenza più bassa di obesità.
                Tuttavia, questo dato complessivo nasconde una realtà più sfumata: il <strong>35,5% degli italiani</strong> è
                in sovrappeso (IMC tra 25 e 29,9), portando la percentuale totale di persone con eccesso ponderale
                a oltre il 46%.
              </p>
              <p>
                L'<strong>Istituto Superiore di Sanità (ISS)</strong> sottolinea che la tendenza è in costante aumento,
                soprattutto tra i giovani adulti e nelle regioni meridionali. Negli ultimi vent'anni, la prevalenza
                dell'obesità in Italia è cresciuta di circa il 25%, un dato allarmante che richiede interventi
                strutturali di sanità pubblica. Il sistema di sorveglianza <strong>PASSI</strong> (Progressi delle Aziende
                Sanitarie per la Salute in Italia), coordinato dall'ISS, monitora costantemente questi indicatori
                e fornisce dati aggiornati regione per regione.
              </p>
              <p>
                Un aspetto particolarmente preoccupante riguarda l'<strong>obesità infantile</strong>. Il sistema di
                sorveglianza <strong>OKkio alla Salute</strong>, attivo dal 2008 e promosso dal Ministero della Salute
                in collaborazione con l'ISS, rivela che circa il <strong>21% dei bambini italiani tra i 6 e i 10 anni
                è in sovrappeso</strong> e il 9% è obeso. L'Italia si colloca così tra i Paesi europei con i tassi più
                elevati di obesità infantile, un paradosso per la patria della Dieta Mediterranea.
              </p>
            </div>
          </div>

          {/* Divario Nord-Sud */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Globe className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Il divario Nord-Sud nell'obesità</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Una delle peculiarità italiane in materia di peso e salute è il marcato <strong>divario territoriale
                tra Nord e Sud</strong>. I dati ISTAT mostrano differenze significative: la <strong>Campania</strong> registra
                una prevalenza di obesità del <strong>13,2%</strong>, seguita da Puglia, Sicilia e Calabria con valori
                superiori all'11%. Al contrario, il <strong>Trentino-Alto Adige</strong> si ferma al <strong>7,9%</strong>,
                seguito da Liguria e Valle d'Aosta con valori intorno all'8%.
              </p>
              <p>
                Le ragioni di questo divario sono molteplici e interconnesse. Le regioni meridionali presentano
                in media <strong>redditi più bassi</strong>, che incidono sulla qualità dell'alimentazione: paradossalmente,
                il cibo ultra-processato e ad alta densità calorica è spesso più economico degli alimenti freschi
                e di qualità. Si aggiungono differenze nell'<strong>accesso a strutture sportive</strong>, minori
                opportunità di attività fisica organizzata per bambini e adolescenti, e un progressivo
                allontanamento dalle tradizioni alimentari mediterranee autentiche.
              </p>
              <p>
                L'ISS evidenzia inoltre come le regioni del Sud abbiano tassi più elevati di <strong>sedentarietà</strong>:
                oltre il 50% della popolazione adulta nelle regioni meridionali non pratica alcuna attività
                fisica nel tempo libero, contro il 25-30% nelle regioni settentrionali. Questa differenza si
                riflette direttamente sui tassi di sovrappeso e sulle patologie metaboliche correlate.
              </p>
            </div>
          </div>

          {/* Dieta Mediterranea */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-600/10">
                <Apple className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-display font-bold">La Dieta Mediterranea: patrimonio italiano e modello di salute</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>Dieta Mediterranea</strong>, riconosciuta dall'<strong>UNESCO</strong> come Patrimonio Culturale
                Immateriale dell'Umanità nel 2010, rappresenta il modello alimentare più studiato e validato
                scientificamente al mondo. La sua storia è profondamente legata all'Italia: fu il fisiologo
                americano <strong>Ancel Keys</strong> a descriverla per primo, dopo essersi stabilito a <strong>Pioppi</strong>,
                nel <strong>Cilento</strong>, negli anni Cinquanta. Il suo celebre <strong>Seven Countries Study</strong>,
                condotto su sette nazioni per oltre vent'anni, dimostrò che le popolazioni mediterranee,
                e in particolare quelle dell'Italia meridionale, avevano tassi significativamente più bassi
                di malattie cardiovascolari rispetto ai Paesi del Nord Europa e agli Stati Uniti.
              </p>
              <p>
                Il modello alimentare mediterraneo si basa su principi semplici ma efficaci:
                <strong> olio d'oliva extravergine</strong> come grasso principale, abbondanza di <strong>verdure, legumi,
                frutta e cereali</strong> (preferibilmente integrali), consumo regolare di <strong>pesce</strong> (soprattutto
                azzurro), uso moderato di <strong>latticini</strong> (con preferenza per formaggi stagionati e yogurt),
                consumo limitato di <strong>carni rosse</strong>, e un <strong>bicchiere di vino rosso</strong> ai pasti
                principali. Questo schema alimentare garantisce un apporto equilibrato di acidi grassi
                monoinsaturi, antiossidanti, fibre e micronutrienti essenziali.
              </p>
              <p>
                Il <strong>CREA</strong> (Consiglio per la Ricerca in Agricoltura e l'Analisi dell'Economia Agraria),
                attraverso il suo Centro di Ricerca Alimenti e Nutrizione, ha sviluppato le <strong>Linee Guida
                per una Sana Alimentazione</strong> italiane, che si ispirano proprio ai principi della Dieta
                Mediterranea. Queste linee guida, aggiornate nel 2018, rappresentano il riferimento
                scientifico ufficiale per la corretta alimentazione nel contesto italiano, adattando i
                principi mediterranei alle esigenze nutrizionali contemporanee.
              </p>
              <p>
                La <strong>SINU</strong> (Società Italiana di Nutrizione Umana) pubblica i <strong>LARN</strong> (Livelli
                di Assunzione di Riferimento di Nutrienti ed Energia), che definiscono con precisione
                i fabbisogni nutrizionali della popolazione italiana per fascia d'età e sesso. I LARN
                rappresentano lo strumento tecnico fondamentale per i professionisti della nutrizione
                e vengono utilizzati per formulare piani alimentari personalizzati. L'ultima revisione,
                aggiornata nel 2014, tiene conto delle specificità del patrimonio alimentare italiano e
                delle evidenze scientifiche più recenti sulla relazione tra nutrizione e prevenzione
                delle malattie croniche.
              </p>
            </div>
          </div>

          {/* Cultura alimentare italiana */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <Users className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">La cultura alimentare italiana: convivialità e tradizione</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'Italia possiede una cultura alimentare unica al mondo, fondata sul concetto di
                <strong> convivialità</strong>: il pasto non è solo nutrimento, ma momento di condivisione,
                socialità e piacere. Questa dimensione sociale dell'alimentazione, lungi dall'essere
                un ostacolo alla salute, rappresenta un <strong>fattore protettivo</strong>: mangiare insieme,
                con calma, favorisce una masticazione lenta, una migliore percezione della sazietà
                e un rapporto più sereno con il cibo.
              </p>
              <p>
                Il movimento <strong>Slow Food</strong>, fondato in Italia da <strong>Carlo Petrini</strong> nel
                <strong> 1986</strong> a Bra, in Piemonte, è nato proprio come reazione al dilagare del fast food
                e alla perdita delle tradizioni gastronomiche locali. Oggi Slow Food è un'organizzazione
                internazionale presente in oltre 160 Paesi, ma le sue radici restano profondamente italiane.
                Il suo manifesto promuove il cibo <strong>buono, pulito e giusto</strong>: buono dal punto di vista
                organolettico, pulito perché prodotto nel rispetto dell'ambiente, e giusto perché equo
                per produttori e consumatori. Questi principi si integrano perfettamente con un approccio
                al peso corporeo basato sulla qualità degli alimenti piuttosto che sulla semplice
                restrizione calorica.
              </p>
              <p>
                Le <strong>tradizioni alimentari regionali</strong> italiane offrono un patrimonio di biodiversità
                gastronomica senza eguali. La <strong>pasta</strong>, protagonista della cucina meridionale, fornisce
                carboidrati complessi a lento rilascio energetico. La <strong>polenta</strong>, base della tradizione
                nordica, offre un alimento saziante e nutriente. Le <strong>zuppe di legumi</strong> toscane e umbre
                combinano proteine vegetali e fibre. Il <strong>pesce</strong> delle tradizioni costiere, dalla sardina
                siciliana al baccalà veneto, apporta omega-3 e proteine nobili. L'<strong>olio d'oliva</strong>,
                presente in ogni regione dalla Liguria alla Puglia, rimane il cardine grasso di tutta
                la cucina italiana. Questa diversità regionale, quando valorizzata, offre tutti gli
                strumenti per un'alimentazione varia, equilibrata e naturalmente orientata al
                mantenimento di un peso sano.
              </p>
            </div>
          </div>

          {/* SSN e percorsi di cura */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-600/10">
                <Stethoscope className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-display font-bold">Il SSN e i percorsi di cura per l'obesità in Italia</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>Servizio Sanitario Nazionale (SSN)</strong> italiano garantisce ai cittadini l'accesso
                ai percorsi di cura per l'obesità attraverso i <strong>LEA</strong> (Livelli Essenziali di
                Assistenza). I LEA, aggiornati con il DPCM del 2017, includono prestazioni diagnostiche,
                terapeutiche e riabilitative per le persone con obesità grave e patologie metaboliche
                correlate. Questo significa che visite specialistiche endocrinologiche e dietologiche,
                esami del sangue per il profilo metabolico, e in casi selezionati la <strong>chirurgia
                bariatrica</strong>, sono coperti dal SSN con il pagamento del solo ticket sanitario.
              </p>
              <p>
                Il percorso di cura tipico per un paziente con obesità in Italia prevede diversi livelli
                di intervento. Il <strong>medico di medicina generale</strong> rappresenta il primo punto di
                contatto: calcola l'IMC, valuta il rischio cardiovascolare e metabolico, e indirizza
                il paziente verso lo specialista appropriato. I <strong>centri di riferimento per l'obesità</strong>,
                presenti nelle principali ASL e aziende ospedaliere, offrono un approccio
                multidisciplinare che coinvolge endocrinologo, dietologo, psicologo e, quando necessario,
                chirurgo. L'<strong>Associazione Italiana di Dietetica e Nutrizione Clinica (ADI)</strong> ha
                definito gli standard italiani per la gestione clinica dell'obesità e coordina una rete
                di centri specializzati su tutto il territorio nazionale.
              </p>
              <p>
                Per i bambini e gli adolescenti, il <strong>pediatra di libera scelta</strong> svolge un ruolo
                fondamentale nella prevenzione e nell'identificazione precoce dell'eccesso ponderale.
                I bilanci di salute periodici, previsti dal SSN, includono la misurazione di peso e
                altezza e il calcolo dell'IMC pediatrico, con riferimento alle <strong>curve di crescita
                italiane</strong> elaborate dalla SINU. L'intervento precoce in età pediatrica è considerato
                strategico: secondo i dati di OKkio alla Salute, un bambino obeso ha il <strong>75-80% di
                probabilità</strong> di diventare un adulto obeso se non si interviene tempestivamente con
                modifiche dello stile di vita familiare.
              </p>
            </div>
          </div>

          {/* LARN e riferimenti nutrizionali */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-500/10">
                <BookOpen className="w-6 h-6 text-indigo-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">LARN e linee guida nutrizionali italiane</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                I <strong>LARN</strong> (Livelli di Assunzione di Riferimento di Nutrienti ed Energia per la
                Popolazione Italiana), elaborati dalla <strong>SINU</strong>, rappresentano il documento
                scientifico di riferimento per la nutrizione in Italia. A differenza di semplici
                raccomandazioni generiche, i LARN forniscono valori specifici per la popolazione
                italiana, tenendo conto delle abitudini alimentari, del patrimonio genetico e dello
                stile di vita caratteristici del nostro Paese.
              </p>
              <p>
                Secondo i LARN, la distribuzione energetica giornaliera ideale prevede il
                <strong> 45-60% dell'energia</strong> da carboidrati (con preferenza per quelli complessi e
                un limite del 15% per gli zuccheri semplici), il <strong>20-35%</strong> da grassi (con
                attenzione alla qualità: privilegiare grassi monoinsaturi dell'olio d'oliva e
                polinsaturi omega-3 del pesce), e il <strong>12-18%</strong> da proteine (con un minimo
                di 0,9 g per kg di peso corporeo). L'apporto di <strong>fibre</strong> raccomandato è di
                almeno 25 g al giorno per gli adulti, facilmente raggiungibile con una dieta ricca
                di verdure, legumi e cereali integrali secondo la tradizione mediterranea.
              </p>
              <p>
                Le <strong>Linee Guida per una Sana Alimentazione</strong> del CREA traducono questi valori
                tecnici in consigli pratici per la popolazione. Tra le raccomandazioni principali:
                consumare almeno <strong>5 porzioni</strong> di frutta e verdura al giorno, preferire i
                <strong> cereali integrali</strong>, consumare <strong>legumi</strong> almeno 2-3 volte a settimana,
                limitare il <strong>sale</strong> a meno di 5 g al giorno, bere almeno <strong>1,5-2 litri
                di acqua</strong> al giorno e limitare il consumo di <strong>bevande zuccherate</strong> e
                <strong> alcolici</strong>. Queste indicazioni, radicate nella tradizione alimentare italiana
                e validate dalla ricerca scientifica, costituiscono la base per un peso corporeo
                sano e per la prevenzione delle principali malattie croniche non trasmissibili.
              </p>
            </div>
          </div>

          {/* Contenuto SEO */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Salute e peso: l'essenziale</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Mantenere un <strong>peso sano</strong> è importante per il vostro benessere generale. La relazione
                tra <strong>peso e salute</strong> è complessa e dipende da numerosi fattori. L'<strong>IMC</strong> è
                solo uno degli indicatori per valutare se vi trovate in una fascia di peso sano.
              </p>
              <p>
                Per <strong>perdere peso in modo sano</strong> o <strong>mantenere il proprio peso</strong>, privilegiate un
                approccio globale: alimentazione equilibrata, attività fisica regolare, sonno sufficiente e
                gestione dello stress. Evitate le diete yo-yo che sono dannose per la salute.
              </p>
              <p>
                Uno <strong>stile di vita sano</strong> è più importante di un numero sulla bilancia. Concentratevi
                sulle <strong>abitudini di vita</strong> piuttosto che sul peso. In caso di dubbio, consultate un
                professionista della salute per un accompagnamento personalizzato.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcolate il vostro IMC</h3>
            <p className="text-muted-foreground mb-6">
              Primo indicatore per valutare il vostro peso sano
            </p>
            <Link
              to="/it/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcola il mio IMC
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Salute e Peso</p>
        </footer>
      </div>
    </div>
  );
};

export default SalutePeso;
