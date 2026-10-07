// Confidentialité et mentions légales dans chaque langue servie hors français et anglais
// (RECETTE §15.6, règle « sans cookie » du 2026-10-06). Ces pages suivent le régime de leur
// arbre de langue (noindex, comme les autres pages traduites). Titres et descriptions
// recopiés dans src/config/seo.ts (lu par scripts/inject-seo.mjs).

export interface LegalSection {
  h2: string;
  p: string[];
}

export interface LegalPage {
  path: string;
  title: string;
  description: string;
  h1: string;
  sections: LegalSection[];
}

export interface LegalLang {
  dir?: "rtl";
  privacy: LegalPage;
  legal: LegalPage;
}

export const MAIL = "contact@bmi-imc.com";

const MS = "Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18";
const GH = "GitHub, Inc., 88 Colin P Kelly Jr Street, San Francisco, CA 94107";

export const LEGAL_LOCAL: Record<string, LegalLang> = {
  de: {
    privacy: {
      path: "/de/datenschutz/",
      title: "Datenschutz bei BMI-IMC.com: keine Cookies, keine Daten",
      description: "BMI-IMC.com setzt keine Cookies und speichert keine personenbezogenen Daten: Größe und Gewicht bleiben im Browser, nur die Stabilität wird anonym mit Microsoft Clarity gemessen.",
      h1: "Datenschutzerklärung",
      sections: [
        { h2: "1. Verantwortlich", p: [`bmi-imc.com wird von Radif Partners herausgegeben. Fragen zu dieser Seite oder zu Ihren Daten richten Sie an ${MAIL}.`] },
        { h2: "2. Größe und Gewicht bleiben in Ihrem Browser", p: ["Größe, Gewicht, Alter und Geschlecht, die Sie in den BMI-Rechner eingeben, berechnet allein Ihr Browser. Sie werden nicht an uns gesendet, nicht auf einem Server gespeichert und nicht auf Ihrem Gerät abgelegt: Nach dem Schließen oder Neuladen der Seite sind sie weg. Es gibt kein Konto, und der Herausgeber erhebt keinerlei Gesundheitsdaten."] },
        { h2: "3. Keine Cookies", p: ["Auf bmi-imc.com wird kein einziges Cookie gespeichert. Das gilt für Statistik, Werbung und soziale Netzwerke ebenso wie für die Clarity-Cookies _clck, _clsk, MUID und CLID. Weil Sie folglich nichts erlauben oder verweigern müssen, blendet die Seite auch keinen Cookie-Hinweis ein."] },
        { h2: "4. Anonyme Messung der Stabilität", p: [
          "Damit uns auffällt, wenn der BMI-Rechner auf einem Handy oder in einem Browser hakt, läuft Microsoft Clarity ohne Cookies mit. Das Werkzeug meldet ausschließlich Technisches, etwa Fehlermeldungen von Skripten, langsame Ladevorgänge, ins Leere gehende Klicks und wie weit gescrollt wurde. Für jede aufgerufene Seite entsteht eine neue zufällige Kennung; zwei Besuche lassen sich so nicht zusammenführen. Inhalte der Seite und sämtliche Felder sind bereits in Ihrem Browser verdeckt: Ihre Körpergröße, Ihr Gewicht und Ihr Ergebnis erreichen Clarity nie.",
          `Anbieter: ${MS}, Irland. Wozu: ausschließlich zur Fehlersuche; es entstehen keine Profile, keine Werbung, keine Weitergabe. Aufbewahrung: Einzelaufrufe 30 Tage, Gesamtstatistiken 13 Monate. Grundlage ist unser berechtigtes Interesse, ein kostenloses Angebot funktionsfähig zu halten (Art. 6 Abs. 1 lit. f DSGVO). Wer das nicht möchte, sperrt clarity.ms mit einem Blocker oder schreibt an ${MAIL}; am Rechner ändert sich dadurch nichts.`,
        ] },
        { h2: "5. Hosting", p: [`Die Seiten liefert GitHub Pages aus (${GH}, USA). GitHub protokolliert kurzzeitig technische Daten (IP-Adresse, Seite, Uhrzeit), um den Dienst bereitzustellen und zu schützen; der Herausgeber hat darauf keinen Zugriff. Übermittlungen in die USA stützen sich auf das EU-US Data Privacy Framework.`] },
        { h2: "6. Ihre Rechte", p: [`Auskunft, Berichtigung, Löschung und Widerspruch gegen die Stabilitätsmessung (Art. 15 bis 21 DSGVO) können Sie per E-Mail an ${MAIL} geltend machen; wir antworten innerhalb eines Monats. Da keine Nutzerdatei geführt wird, lautet die Antwort meist, dass nichts über Sie gespeichert ist. Beschwerden können Sie beim Bundesbeauftragten für den Datenschutz und die Informationsfreiheit (BfDI), bei Ihrer Landesbehörde oder bei der französischen CNIL einreichen.`] },
      ],
    },
    legal: {
      path: "/de/impressum/",
      title: "Impressum von BMI-IMC.com: Herausgeber und Hosting",
      description: "Impressum von BMI-IMC.com: Herausgeber Radif Partners, Kontakt, Hosting bei GitHub Pages, Urheberrecht und warum der BMI-Rechner keine ärztliche Beratung ersetzt.",
      h1: "Impressum",
      sections: [
        { h2: "1. Herausgeber", p: [`Betreiber und inhaltlich verantwortlich für bmi-imc.com: Radif Partners, erreichbar unter ${MAIL}.`] },
        { h2: "2. Hosting", p: [`${GH}, USA (GitHub Pages), rein technischer Dienstleister ohne Einfluss auf die Inhalte.`] },
        { h2: "3. Gesundheitshinweis", p: ["Der BMI-Rechner liefert einen Schätzwert nach der Formel der Weltgesundheitsorganisation. Er misst weder Körperfett noch Gesundheitszustand und ersetzt keine ärztliche Untersuchung oder Beratung."] },
        { h2: "4. Urheberrecht", p: ["Alle Inhalte dieser Website unterliegen dem Urheberrecht. Wer kurz zitiert und auf die Quelle verlinkt, darf das gern tun; ganze Seiten zu übernehmen setzt unsere schriftliche Zustimmung voraus."] },
        { h2: "5. Datenschutz und Cookies", p: ["Cookies kommen hier nicht zum Einsatz, und personenbezogene Daten legt der Herausgeber nicht an. Einzig die technische Zuverlässigkeit wird mit Microsoft Clarity anonym beobachtet; die Datenschutzerklärung erläutert die Einzelheiten."] },
        { h2: "6. Anwendbares Recht", p: ["Maßgeblich ist das Recht Frankreichs; zwingende Schutzregeln Ihres Heimatlandes für Verbraucher bleiben davon unberührt."] },
      ],
    },
  },
  es: {
    privacy: {
      path: "/es/privacidad/",
      title: "Privacidad de BMI-IMC.com: sin cookies ni datos guardados",
      description: "BMI-IMC.com no instala cookies ni guarda datos personales: su estatura y su peso se quedan en el navegador y solo Microsoft Clarity mide de forma anónima la estabilidad.",
      h1: "Política de privacidad",
      sections: [
        { h2: "1. Responsable", p: [`bmi-imc.com es un sitio editado por Radif Partners. Cualquier pregunta sobre esta página o sobre sus datos puede enviarse a ${MAIL}.`] },
        { h2: "2. Su estatura y su peso no salen del navegador", p: ["La estatura, el peso, la edad y el sexo que introduce en la calculadora de IMC se calculan en su propio navegador. No se nos envían, no se guardan en ningún servidor y no quedan almacenados en su dispositivo: al cerrar o recargar la página desaparecen. No hay cuenta de usuario y el editor no recoge ningún dato de salud."] },
        { h2: "3. Ninguna cookie", p: ["En bmi-imc.com no se guarda ninguna cookie en su equipo: tampoco de estadísticas, publicidad o redes sociales, y Clarity funciona sin sus cookies _clck, _clsk, MUID y CLID. Por eso la página no le pide permiso para nada ni muestra ventanas sobre cookies."] },
        { h2: "4. Medición anónima de la estabilidad", p: [
          "Si la calculadora de IMC se bloquea en algún teléfono o navegador, queremos saberlo; para ello Microsoft Clarity trabaja sin cookies y se limita a lo técnico: fallos de código, lentitud al cargar, pulsaciones sin respuesta y hasta dónde se baja en la página. A cada página abierta se le asigna un código al azar distinto, de manera que dos visitas nunca se relacionan. Los textos y las casillas quedan tapados en su propio navegador: su estatura, su peso y su resultado nunca llegan a Clarity.",
          `Proveedor: ${MS}, Irlanda. Para qué: localizar errores y repararlos, nada más (ni perfiles, ni anuncios, ni venta de datos). Plazos: un mes para cada página vista registrada y trece meses para los totales. Fundamento: nuestro interés legítimo en que una herramienta gratuita funcione bien (art. 6.1.f del RGPD). Si no lo desea, impida la carga de clarity.ms con un bloqueador o avísenos en ${MAIL}; la calculadora seguirá funcionando.`,
        ] },
        { h2: "5. Alojamiento", p: [`Las páginas se sirven desde GitHub Pages (${GH}, Estados Unidos), que guarda registros técnicos breves (dirección IP, página, hora) para prestar y proteger el servicio; el editor no tiene acceso a ellos. Las transferencias a Estados Unidos se amparan en el Marco de Privacidad de Datos UE-EE. UU.`] },
        { h2: "6. Sus derechos", p: [`Puede ejercer los derechos de acceso, rectificación, supresión y oposición (arts. 15 a 21 del RGPD) escribiendo a ${MAIL}; respondemos en el plazo de un mes. Al no existir ningún fichero de usuarios, la respuesta suele ser que no guardamos nada sobre usted. También puede reclamar ante la Agencia Española de Protección de Datos (www.aepd.es) o ante la autoridad de su país.`] },
      ],
    },
    legal: {
      path: "/es/aviso-legal/",
      title: "Aviso legal de BMI-IMC.com: editor, alojamiento y uso",
      description: "Aviso legal de BMI-IMC.com: editor Radif Partners, contacto, alojamiento en GitHub Pages, propiedad intelectual y por qué la calculadora no sustituye al médico.",
      h1: "Aviso legal",
      sections: [
        { h2: "1. Titular", p: [`Edita bmi-imc.com y responde de sus contenidos Radif Partners (${MAIL}).`] },
        { h2: "2. Alojamiento", p: [`${GH}, Estados Unidos (GitHub Pages), prestador técnico sin control editorial.`] },
        { h2: "3. Advertencia sanitaria", p: ["La calculadora ofrece una estimación con la fórmula del IMC de la Organización Mundial de la Salud. No mide la grasa corporal ni el estado de salud y no sustituye una consulta médica."] },
        { h2: "4. Propiedad intelectual", p: ["Todo el contenido de bmi-imc.com tiene derechos de autor. Puede citarlo brevemente si enlaza la fuente; copiarlo entero exige nuestro permiso por escrito."] },
        { h2: "5. Datos personales y cookies", p: ["Aquí no se usan cookies y el editor no crea ningún registro de datos personales; únicamente se vigila, de forma anónima con Microsoft Clarity, que el sitio funcione, tal y como detalla la política de privacidad."] },
        { h2: "6. Legislación aplicable", p: ["Rige la ley francesa, sin que ello le prive de la protección obligatoria que le reconozca como consumidor la ley de su país."] },
      ],
    },
  },
  it: {
    privacy: {
      path: "/it/privacy/",
      title: "Privacy di BMI-IMC.com: nessun cookie, nessun dato salvato",
      description: "BMI-IMC.com non usa cookie né conserva dati personali: altezza e peso restano nel browser e Microsoft Clarity misura soltanto, in modo anonimo, la stabilità.",
      h1: "Informativa sulla privacy",
      sections: [
        { h2: "1. Titolare", p: [`bmi-imc.com è pubblicato da Radif Partners. Per domande su questa pagina o sui suoi dati scriva a ${MAIL}.`] },
        { h2: "2. Altezza e peso restano nel suo browser", p: ["Altezza, peso, età e sesso inseriti nel calcolatore IMC sono elaborati dal suo browser. Non ci vengono trasmessi, non sono salvati su alcun server e non restano sul dispositivo: chiudendo o ricaricando la pagina scompaiono. Non serve un account e l'editore non raccoglie alcun dato sanitario."] },
        { h2: "3. Nessun cookie", p: ["Sul suo dispositivo bmi-imc.com non salva alcun cookie: niente statistiche, pubblicità o social, e Clarity gira senza _clck, _clsk, MUID e CLID. Di conseguenza il sito non le chiede alcuna autorizzazione e non mostra finestre sui cookie."] },
        { h2: "4. Misura anonima della stabilità", p: [
          "Quando il calcolatore IMC si inceppa su qualche smartphone o browser vogliamo accorgercene: per questo Microsoft Clarity lavora senza cookie e registra unicamente aspetti tecnici, come errori del codice, lentezza di caricamento, tocchi che non producono nulla e profondità di lettura. Ogni apertura di pagina ha un codice casuale diverso, perciò due visite non vengono mai unite. Contenuti e caselle sono coperti già nel suo browser: altezza, peso e risultato non arrivano a Clarity.",
          `Fornitore: ${MS}, Irlanda. Scopo: individuare e riparare i malfunzionamenti, senza profili, annunci o vendita. Durata: un mese per ogni pagina registrata, tredici mesi per i totali. Fondamento: il nostro legittimo interesse a mantenere efficiente un servizio gratuito (art. 6, par. 1, lett. f del GDPR). Se preferisce di no, impedisca il caricamento di clarity.ms o ci scriva a ${MAIL}: il calcolatore resterà identico.`,
        ] },
        { h2: "5. Hosting", p: [`Le pagine sono servite da GitHub Pages (${GH}, Stati Uniti), che conserva brevi log tecnici (indirizzo IP, pagina, ora) per erogare e proteggere il servizio; l'editore non vi accede. I trasferimenti verso gli Stati Uniti si basano sul Data Privacy Framework UE-USA.`] },
        { h2: "6. I suoi diritti", p: [`Può chiedere accesso, rettifica e cancellazione e opporsi alla misura di stabilità (artt. 15-21 del GDPR) scrivendo a ${MAIL}; rispondiamo entro un mese. Poiché non teniamo archivi di utenti, di norma la risposta è che non conserviamo nulla su di lei. Può anche rivolgersi al Garante per la protezione dei dati personali (www.garanteprivacy.it).`] },
      ],
    },
    legal: {
      path: "/it/note-legali/",
      title: "Note legali di BMI-IMC.com: editore, hosting e condizioni",
      description: "Note legali di BMI-IMC.com: editore Radif Partners, contatti, hosting su GitHub Pages, proprietà intellettuale e perché il calcolatore non sostituisce il medico.",
      h1: "Note legali",
      sections: [
        { h2: "1. Editore", p: [`Pubblica bmi-imc.com e ne risponde Radif Partners (${MAIL}).`] },
        { h2: "2. Hosting", p: [`${GH}, Stati Uniti (GitHub Pages), fornitore tecnico senza controllo editoriale.`] },
        { h2: "3. Avvertenza sanitaria", p: ["Il calcolatore fornisce una stima con la formula dell'IMC dell'Organizzazione mondiale della sanità. Non misura la massa grassa né lo stato di salute e non sostituisce il parere del medico."] },
        { h2: "4. Proprietà intellettuale", p: ["I contenuti di bmi-imc.com sono tutelati dal diritto d'autore: brevi estratti con link alla fonte sono benvenuti, copie integrali no, salvo nostra autorizzazione scritta."] },
        { h2: "5. Dati personali e cookie", p: ["Qui non si usano cookie e l'editore non crea archivi di dati personali; con Microsoft Clarity si controlla soltanto, in modo anonimo, che il sito funzioni, come descritto nell'informativa sulla privacy."] },
        { h2: "6. Legge applicabile", p: ["Vale la legge francese, ferma restando la tutela obbligatoria che la legge del suo paese le riconosce come consumatore."] },
      ],
    },
  },
  pt: {
    privacy: {
      path: "/pt/privacidade/",
      title: "Privacidade do BMI-IMC.com: sem cookies e sem dados",
      description: "O BMI-IMC.com não usa cookies nem guarda dados pessoais: altura e peso ficam no seu navegador e só a estabilidade é medida, de forma anônima, pelo Microsoft Clarity.",
      h1: "Política de privacidade",
      sections: [
        { h2: "1. Responsável", p: [`O bmi-imc.com é editado pela Radif Partners. Dúvidas sobre esta página ou sobre seus dados podem ser enviadas para ${MAIL}.`] },
        { h2: "2. Sua altura e seu peso não saem do navegador", p: ["A altura, o peso, a idade e o sexo digitados na calculadora de IMC são calculados pelo seu próprio navegador. Eles não são enviados para nós, não ficam gravados em nenhum servidor e não permanecem no seu aparelho: ao fechar ou recarregar a página, somem. Não há cadastro e o editor não coleta nenhum dado de saúde."] },
        { h2: "3. Nenhum cookie", p: ["O bmi-imc.com não instala cookies: nem de estatística, nem de publicidade, nem de redes sociais, nem os do Microsoft Clarity (_clck, _clsk, MUID, CLID). Como não há nada a aceitar ou recusar, nenhum aviso de cookies é exibido."] },
        { h2: "4. Medição anônima da estabilidade", p: [
          "Para encontrar uma calculadora que falha em determinado celular ou navegador, usamos o Microsoft Clarity no modo sem cookies. Ele coleta apenas sinais técnicos: erros de script, tempo de carregamento, cliques sem efeito e rolagem. Cada página vista recebe um identificador aleatório próprio, de modo que as visitas não são ligadas entre si. O texto e todos os campos são mascarados no navegador antes de qualquer envio: o Clarity não vê altura, peso nem IMC.",
          `Fornecedor: ${MS}, Irlanda. Finalidade: detectar e corrigir falhas, sem perfilagem, publicidade ou venda. Retenção: 30 dias para os registros de páginas vistas e 13 meses para as estatísticas agregadas. Base legal: legítimo interesse em manter uma ferramenta gratuita funcionando (art. 7, IX, da LGPD; art. 6.º, n.º 1, al. f, do RGPD). Oposição: bloqueie clarity.ms no navegador ou com um bloqueador, ou escreva para ${MAIL}; a calculadora funciona igual sem o Clarity.`,
        ] },
        { h2: "5. Hospedagem", p: [`As páginas são servidas pelo GitHub Pages (${GH}, Estados Unidos), que mantém registros técnicos curtos (endereço IP, página, horário) para prestar e proteger o serviço; o editor não tem acesso a eles.`] },
        { h2: "6. Seus direitos", p: [`Você pode pedir acesso, correção ou eliminação de dados e se opor à medição de estabilidade escrevendo para ${MAIL}; respondemos em até um mês. Como não mantemos cadastro de usuários, a resposta costuma ser que não guardamos nada sobre você. Você também pode recorrer à ANPD (www.gov.br/anpd) no Brasil, à CNPD (www.cnpd.pt) em Portugal ou à autoridade do seu país.`] },
      ],
    },
    legal: {
      path: "/pt/aviso-legal/",
      title: "Aviso legal do BMI-IMC.com: editor, hospedagem e uso",
      description: "Aviso legal do BMI-IMC.com: editor Radif Partners, contato, hospedagem no GitHub Pages, direitos autorais e por que a calculadora não substitui uma consulta médica.",
      h1: "Aviso legal",
      sections: [
        { h2: "1. Editor", p: [`O bmi-imc.com é editado pela Radif Partners, responsável pelo conteúdo. Contato: ${MAIL}.`] },
        { h2: "2. Hospedagem", p: [`${GH}, Estados Unidos (GitHub Pages), prestador técnico sem controle editorial.`] },
        { h2: "3. Aviso de saúde", p: ["A calculadora dá uma estimativa pela fórmula do IMC da Organização Mundial da Saúde. Ela não mede a gordura corporal nem o estado de saúde e não substitui uma consulta médica."] },
        { h2: "4. Direitos autorais", p: ["Textos, calculadoras e gráficos são protegidos. Citações curtas com link para a página são permitidas; a reprodução integral exige autorização por escrito."] },
        { h2: "5. Dados pessoais e cookies", p: ["O site não usa cookies e o editor não registra dados pessoais. Só a estabilidade técnica é medida, de forma anônima e sem cookies, com o Microsoft Clarity, como explica a política de privacidade."] },
        { h2: "6. Lei aplicável", p: ["Aplica-se a lei francesa, sem prejuízo das normas obrigatórias de proteção do consumidor do seu país de residência."] },
      ],
    },
  },
  ar: {
    dir: "rtl",
    privacy: {
      path: "/ar/privacy/",
      title: "سياسة الخصوصية في BMI-IMC.com: بدون كوكيز وبدون بيانات",
      description: "لا يستخدم موقع BMI-IMC.com ملفات تعريف الارتباط (كوكيز) ولا يحفظ أي بيانات شخصية: يبقى الطول والوزن في متصفحك، ويقيس Microsoft Clarity استقرار الموقع فقط بشكل مجهول.",
      h1: "سياسة الخصوصية",
      sections: [
        { h2: "1. الجهة المسؤولة", p: [`ينشر موقع bmi-imc.com شركة Radif Partners. يمكن إرسال أي سؤال عن هذه الصفحة أو عن بياناتك إلى ${MAIL}.`] },
        { h2: "2. طولك ووزنك لا يغادران متصفحك", p: ["يحسب متصفحك وحده الطول والوزن والعمر والجنس التي تدخلها في حاسبة مؤشر كتلة الجسم. لا تُرسل إلينا، ولا تُحفظ على أي خادم، ولا تبقى على جهازك: تختفي عند إغلاق الصفحة أو إعادة تحميلها. لا يوجد حساب، ولا يجمع الناشر أي بيانات صحية."] },
        { h2: "3. لا كوكيز", p: ["لا يضع الموقع أي ملفات كوكيز: لا لقياس الزيارات ولا للإعلانات ولا لشبكات التواصل، ولا ملفات Microsoft Clarity أيضًا (_clck و_clsk وMUID وCLID). ولأنه لا يوجد ما يُقبل أو يُرفض، لا تظهر أي نافذة خاصة بالكوكيز."] },
        { h2: "4. قياس مجهول لاستقرار الموقع", p: [
          "لاكتشاف حاسبة لا تعمل جيدًا على هاتف أو متصفح معين نستخدم Microsoft Clarity في وضع بدون كوكيز. لا يجمع سوى إشارات تقنية: أخطاء البرمجة، وزمن التحميل، والنقرات التي لا تؤدي إلى شيء، ومدى التمرير. تحصل كل صفحة معروضة على معرّف عشوائي خاص بها، فلا تُربط الزيارات ببعضها. ويُخفى نص الصفحة وكل خانات الإدخال داخل متصفحك قبل أي إرسال: لا يرى Clarity طولك ولا وزنك ولا نتيجتك.",
          `المزوّد: ${MS}، أيرلندا. الغرض: اكتشاف الأعطال التقنية وإصلاحها فقط، بلا تنميط ولا إعلانات ولا بيع. مدة الحفظ: 30 يومًا لسجلات الصفحات و13 شهرًا للإحصاءات المجمّعة. الأساس القانوني: المصلحة المشروعة في تشغيل أداة مجانية (المادة 6-1-و من اللائحة الأوروبية العامة لحماية البيانات). للاعتراض: احظر النطاق clarity.ms في متصفحك أو بأداة حجب، أو راسلنا على ${MAIL}؛ تعمل الحاسبة بالطريقة نفسها دونه.`,
        ] },
        { h2: "5. الاستضافة", p: [`تُقدَّم الصفحات عبر GitHub Pages (${GH}، الولايات المتحدة)، التي تحتفظ بسجلات تقنية قصيرة (عنوان IP، الصفحة، الوقت) لتقديم الخدمة وحمايتها؛ ولا يطّلع الناشر عليها.`] },
        { h2: "6. حقوقك", p: [`يمكنك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها، والاعتراض على قياس الاستقرار، بالكتابة إلى ${MAIL}، ونرد خلال شهر. وبما أننا لا نحتفظ بأي ملف عن الزوار، يكون الرد غالبًا أننا لا نملك أي بيانات عنك. ويمكنك أيضًا التوجه إلى الجهة المختصة في بلدك، مثل الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) أو اللجنة الوطنية الفرنسية للمعلوماتية والحريات (CNIL).`] },
      ],
    },
    legal: {
      path: "/ar/legal/",
      title: "إشعار قانوني لموقع BMI-IMC.com: الناشر والاستضافة",
      description: "الإشعار القانوني لموقع BMI-IMC.com: الناشر Radif Partners، وسيلة التواصل، الاستضافة على GitHub Pages، حقوق المؤلف، ولماذا لا تغني الحاسبة عن الطبيب.",
      h1: "إشعار قانوني",
      sections: [
        { h2: "1. الناشر", p: [`ينشر موقع bmi-imc.com شركة Radif Partners، وهي المسؤولة عن محتواه. للتواصل: ${MAIL}.`] },
        { h2: "2. الاستضافة", p: [`${GH}، الولايات المتحدة (GitHub Pages)، وهي مزوّد تقني لا يتدخل في المحتوى.`] },
        { h2: "3. تنبيه صحي", p: ["تعطي الحاسبة تقديرًا وفق معادلة مؤشر كتلة الجسم المعتمدة من منظمة الصحة العالمية. لا تقيس نسبة الدهون ولا الحالة الصحية، ولا تغني عن استشارة الطبيب."] },
        { h2: "4. حقوق المؤلف", p: ["النصوص والحاسبات والرسوم محمية. يُسمح بالاقتباس القصير مع رابط إلى الصفحة، أما النسخ الكامل فيتطلب إذنًا كتابيًا."] },
        { h2: "5. البيانات الشخصية والكوكيز", p: ["لا يستخدم الموقع أي كوكيز ولا يسجل الناشر أي بيانات شخصية. يُقاس فقط الاستقرار التقني بشكل مجهول وبدون كوكيز عبر Microsoft Clarity، كما توضح سياسة الخصوصية."] },
        { h2: "6. القانون المطبق", p: ["يخضع هذا الإشعار للقانون الفرنسي، مع مراعاة القواعد الإلزامية لحماية المستهلك في بلد إقامتك."] },
      ],
    },
  },
  hi: {
    privacy: {
      path: "/hi/privacy/",
      title: "BMI-IMC.com गोपनीयता नीति: कोई कुकी नहीं, कोई डेटा नहीं",
      description: "BMI-IMC.com कोई कुकी नहीं लगाता और कोई व्यक्तिगत डेटा नहीं रखता: आपकी लंबाई और वजन ब्राउज़र में ही रहते हैं, केवल साइट की स्थिरता Microsoft Clarity से गुमनाम रूप से मापी जाती है।",
      h1: "गोपनीयता नीति",
      sections: [
        { h2: "1. ज़िम्मेदार कौन है", p: [`bmi-imc.com को Radif Partners प्रकाशित करती है। इस पेज या अपने डेटा से जुड़ा कोई भी सवाल ${MAIL} पर भेजें।`] },
        { h2: "2. आपकी लंबाई और वजन ब्राउज़र से बाहर नहीं जाते", p: ["BMI कैलकुलेटर में डाली गई लंबाई, वजन, उम्र और लिंग की गणना आपका अपना ब्राउज़र करता है। ये हमें नहीं भेजे जाते, किसी सर्वर पर सेव नहीं होते और आपके डिवाइस पर भी नहीं रहते: पेज बंद या रीलोड करते ही मिट जाते हैं। कोई खाता नहीं है और प्रकाशक कोई स्वास्थ्य डेटा इकट्ठा नहीं करता।"] },
        { h2: "3. कोई कुकी नहीं", p: ["bmi-imc.com कोई कुकी नहीं लगाता: न विज़िटर गिनने की, न विज्ञापन की, न सोशल मीडिया की, और न ही Microsoft Clarity की कुकी (_clck, _clsk, MUID, CLID)। चूँकि स्वीकार या अस्वीकार करने के लिए कुछ है ही नहीं, इसलिए कुकी से जुड़ी कोई सूचना नहीं दिखाई जाती।"] },
        { h2: "4. साइट की स्थिरता का गुमनाम माप", p: [
          "किसी खास फ़ोन या ब्राउज़र पर ठीक से न चलने वाले कैलकुलेटर को पकड़ने के लिए हम कुकी-रहित मोड में Microsoft Clarity का उपयोग करते हैं। यह केवल तकनीकी संकेत लेता है: स्क्रिप्ट की त्रुटियाँ, लोड होने का समय, बेअसर क्लिक और स्क्रॉल की गहराई। हर पेज व्यू को अलग यादृच्छिक पहचान मिलती है, इसलिए विज़िट आपस में नहीं जोड़ी जातीं। पेज का पाठ और सभी इनपुट फ़ील्ड भेजे जाने से पहले ब्राउज़र में ही छिपा दिए जाते हैं: Clarity आपकी लंबाई, वजन या BMI नहीं देखता।",
          `प्रदाता: ${MS}, आयरलैंड। उद्देश्य: केवल तकनीकी खराबियाँ ढूँढना और ठीक करना, बिना प्रोफ़ाइलिंग, विज्ञापन या बिक्री के। अवधि: पेज व्यू रिकॉर्ड 30 दिन, संकलित आँकड़े 13 महीने। कानूनी आधार: एक मुफ़्त टूल को चालू रखने में वैध हित (यूरोपीय GDPR का अनुच्छेद 6(1)(f))। आपत्ति: ब्राउज़र या कंटेंट ब्लॉकर में clarity.ms ब्लॉक करें, या ${MAIL} पर लिखें; कैलकुलेटर इसके बिना भी वैसे ही चलता है।`,
        ] },
        { h2: "5. होस्टिंग", p: [`पेज GitHub Pages (${GH}, संयुक्त राज्य अमेरिका) से दिए जाते हैं, जो सेवा देने और सुरक्षित रखने के लिए थोड़े समय के तकनीकी लॉग (IP पता, पेज, समय) रखता है; प्रकाशक की उन तक पहुँच नहीं है।`] },
        { h2: "6. आपके अधिकार", p: [`आप अपने डेटा तक पहुँच, सुधार या मिटाने का अनुरोध और स्थिरता माप पर आपत्ति ${MAIL} पर लिखकर कर सकते हैं; हम एक महीने के भीतर जवाब देते हैं। हम विज़िटरों की कोई फ़ाइल नहीं रखते, इसलिए जवाब आम तौर पर यही होता है कि आपके बारे में हमारे पास कुछ नहीं है। भारत में डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 के तहत आप भारतीय डेटा संरक्षण बोर्ड से भी संपर्क कर सकते हैं।`] },
      ],
    },
    legal: {
      path: "/hi/legal/",
      title: "BMI-IMC.com कानूनी सूचना: प्रकाशक और होस्टिंग",
      description: "BMI-IMC.com की कानूनी सूचना: प्रकाशक Radif Partners, संपर्क, GitHub Pages पर होस्टिंग, कॉपीराइट, और BMI कैलकुलेटर डॉक्टर की सलाह की जगह क्यों नहीं ले सकता।",
      h1: "कानूनी सूचना",
      sections: [
        { h2: "1. प्रकाशक", p: [`bmi-imc.com को Radif Partners प्रकाशित करती है, जो इसकी सामग्री के लिए ज़िम्मेदार है। संपर्क: ${MAIL}।`] },
        { h2: "2. होस्टिंग", p: [`${GH}, संयुक्त राज्य अमेरिका (GitHub Pages), जो केवल तकनीकी सेवा देता है और सामग्री में दखल नहीं देता।`] },
        { h2: "3. स्वास्थ्य संबंधी चेतावनी", p: ["कैलकुलेटर विश्व स्वास्थ्य संगठन के BMI सूत्र से अनुमान देता है। यह शरीर की चर्बी या स्वास्थ्य की स्थिति नहीं मापता और डॉक्टर की सलाह का विकल्प नहीं है।"] },
        { h2: "4. कॉपीराइट", p: ["पाठ, कैलकुलेटर और ग्राफ़ कॉपीराइट से सुरक्षित हैं। पेज के लिंक के साथ छोटा उद्धरण दिया जा सकता है; पूरी सामग्री दोबारा छापने के लिए लिखित अनुमति चाहिए।"] },
        { h2: "5. व्यक्तिगत डेटा और कुकी", p: ["साइट कोई कुकी नहीं लगाती और प्रकाशक कोई व्यक्तिगत डेटा दर्ज नहीं करता। गोपनीयता नीति में बताए अनुसार Microsoft Clarity से केवल तकनीकी स्थिरता बिना कुकी के, गुमनाम रूप से मापी जाती है।"] },
        { h2: "6. लागू कानून", p: ["इस सूचना पर फ़्रांसीसी कानून लागू होता है, आपके देश के अनिवार्य उपभोक्ता संरक्षण नियमों को प्रभावित किए बिना।"] },
      ],
    },
  },
  zh: {
    privacy: {
      path: "/zh/privacy/",
      title: "BMI-IMC.com 隐私政策：不使用 Cookie，不保存数据",
      description: "BMI-IMC.com 不使用 Cookie，也不保存任何个人数据：身高和体重只留在您的浏览器中，我们只通过 Microsoft Clarity 以匿名方式检测网站的稳定性。",
      h1: "隐私政策",
      sections: [
        { h2: "1. 责任方", p: [`bmi-imc.com 由 Radif Partners 发布。关于本页面或您的数据的任何问题，请发送至 ${MAIL}。`] },
        { h2: "2. 身高和体重不会离开您的浏览器", p: ["您在 BMI 计算器中输入的身高、体重、年龄和性别完全由您自己的浏览器计算。这些数据不会发送给我们，不会保存在任何服务器上，也不会留在您的设备中：关闭或刷新页面后即消失。本站无需注册账户，发布者也不收集任何健康数据。"] },
        { h2: "3. 不使用 Cookie", p: ["bmi-imc.com 不设置任何 Cookie：没有统计、广告或社交媒体 Cookie，也没有 Microsoft Clarity 的 Cookie（_clck、_clsk、MUID、CLID）。由于没有需要接受或拒绝的内容，本站不显示任何 Cookie 提示。"] },
        { h2: "4. 匿名检测网站稳定性", p: [
          "为了找出在某款手机或浏览器上无法正常工作的计算器，我们以无 Cookie 模式使用 Microsoft Clarity。它只收集技术信号：脚本错误、加载时间、无效点击和页面滚动深度。每次页面浏览都会获得一个独立的随机标识，因此不同访问之间不会被关联。页面文字和所有输入框在发送前都会在浏览器中被遮蔽：Clarity 看不到您的身高、体重或 BMI 结果。",
          `服务提供方：${MS}，爱尔兰。目的：仅用于发现和修复技术故障，不做用户画像、不投放广告、不出售数据。保存期限：页面浏览记录 30 天，汇总统计 13 个月。法律依据：维持免费工具正常运行的正当利益（欧盟《通用数据保护条例》第 6 条第 1 款 f 项）。如需拒绝：在浏览器或内容拦截工具中屏蔽 clarity.ms，或写信至 ${MAIL}；没有它，计算器同样可以正常使用。`,
        ] },
        { h2: "5. 托管", p: [`页面由 GitHub Pages（${GH}，美国）提供，GitHub 会短期保存技术日志（IP 地址、请求的页面、时间）以提供和保护服务；发布者无法访问这些日志。`] },
        { h2: "6. 您的权利", p: [`您可以写信至 ${MAIL}，要求查阅、更正或删除与您有关的数据，或反对稳定性检测；我们会在一个月内答复。由于我们不保存任何访客档案，答复通常是我们没有您的任何数据。您也可以向所在地的个人信息保护主管部门投诉，例如中国的国家互联网信息办公室或法国国家信息与自由委员会（CNIL）。`] },
      ],
    },
    legal: {
      path: "/zh/legal/",
      title: "BMI-IMC.com 法律声明：发布者与托管",
      description: "BMI-IMC.com 法律声明：发布者 Radif Partners、联系方式、GitHub Pages 托管、版权，以及为何 BMI 计算器不能替代医生的建议。",
      h1: "法律声明",
      sections: [
        { h2: "1. 发布者", p: [`bmi-imc.com 由 Radif Partners 发布，并对其内容负责。联系方式：${MAIL}。`] },
        { h2: "2. 托管", p: [`${GH}，美国（GitHub Pages），仅提供技术服务，不干预内容。`] },
        { h2: "3. 健康提示", p: ["计算器根据世界卫生组织采用的 BMI 公式给出估算值。它既不测量体脂，也不反映健康状况，不能替代医生的建议。"] },
        { h2: "4. 版权", p: ["文字、计算器和图表均受版权保护。可附带页面链接进行简短引用；完整转载须获得书面许可。"] },
        { h2: "5. 个人数据与 Cookie", p: ["本站不使用 Cookie，发布者也不记录任何个人数据。如隐私政策所述，我们仅通过 Microsoft Clarity 以无 Cookie 的匿名方式检测技术稳定性。"] },
        { h2: "6. 适用法律", p: ["本声明适用法国法律，但不影响您居住国强制性消费者保护规定的适用。"] },
      ],
    },
  },
};

export const LEGAL_PATH_LANG: Record<string, string> = Object.fromEntries(
  Object.entries(LEGAL_LOCAL).flatMap(([lang, L]) => [[L.privacy.path, lang], [L.legal.path, lang]]),
);
