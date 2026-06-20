export interface PageSEO {
  path: string;
  lang: string;
  title: string;
  description: string;
}

export const defaultSEO: PageSEO[] = [
  // --- Français ---
  {
    path: "/imc",
    lang: "fr",
    title: "Calcul IMC Gratuit — Résultat Immédiat avec Interprétation",
    description: "Calculez votre indice de masse corporelle en 10 secondes. Résultat instantané avec catégorie OMS, poids idéal selon votre taille et conseils personnalisés.",
  },
  {
    path: "/imc-homme",
    lang: "fr",
    title: "IMC Homme : Calculer son Poids Idéal selon Taille et Âge",
    description: "Calculez votre IMC masculin et découvrez votre fourchette de poids idéal. Tableau par tranche d'âge, seuils normaux et tour de taille recommandé pour hommes.",
  },
  {
    path: "/imc-femme",
    lang: "fr",
    title: "IMC Femme : Calcul Poids Idéal, Grossesse et Ménopause",
    description: "Calculez votre IMC féminin avec les spécificités hormonales prises en compte. Poids idéal par taille, impact grossesse et ménopause sur la masse corporelle.",
  },
  {
    path: "/imc-sportif",
    lang: "fr",
    title: "IMC Sportif : Pourquoi le Résultat est Faux en Musculation",
    description: "L'IMC surestime la masse grasse chez les sportifs musclés. Découvrez le FFMI, l'indice adapté aux athlètes, et les alternatives fiables pour votre corps.",
  },
  {
    path: "/imc-enfant",
    lang: "fr",
    title: "IMC Enfant et Adolescent — Courbe de Croissance OMS Gratuite",
    description: "Calculez l'IMC de votre enfant avec les courbes de croissance OMS. Résultat en percentile selon l'âge et le sexe, seuils pédiatriques de 2 à 18 ans détaillés.",
  },
  {
    path: "/tableau-imc",
    lang: "fr",
    title: "Tableau IMC Complet — Classification OMS par Catégorie",
    description: "Consultez le tableau IMC officiel avec tous les seuils OMS. Maigreur, normal, surpoids, ob��sité : trouvez votre catégorie avec exemples poids/taille concrets.",
  },
  {
    path: "/interpretation-imc",
    lang: "fr",
    title: "Comprendre son IMC — Que Signifie Votre Résultat (Guide)",
    description: "Comprenez ce que signifie votre résultat IMC pour votre santé. Explication catégorie par catégorie, quand consulter et les facteurs qui faussent le calcul.",
  },
  {
    path: "/limites-imc",
    lang: "fr",
    title: "Limites de l'IMC — 7 Cas Où le Résultat est Trompeur",
    description: "L'IMC n'est pas fiable pour les sportifs, seniors, femmes enceintes et certaines morphologies. Les cas précis où il se trompe et les alternatives recommandées.",
  },
  {
    path: "/faq-imc",
    lang: "fr",
    title: "FAQ IMC — 17 Questions Fréquentes, Réponses d'Experts",
    description: "Réponses claires aux questions fréquentes sur l'IMC. Formule de calcul, poids normal, fiabilité, remboursement Sécu, tour de taille et quand s'inquiéter.",
  },
  {
    path: "/sante-et-poids",
    lang: "fr",
    title: "Poids et Santé — Guide Complet Nutrition et Poids Idéal",
    description: "Tout comprendre sur la relation entre poids et santé. Nutrition équilibrée, activité physique, prévention du surpoids et stratégies pour un poids durable.",
  },

  // --- English ---
  {
    path: "/",
    lang: "en",
    title: "BMI Calculator Free — Instant Result with Health Analysis",
    description: "Calculate your Body Mass Index in 10 seconds. Get your WHO category, healthy weight range for your height, and clear guidance on what your number means.",
  },
  {
    path: "/bmi-men",
    lang: "en",
    title: "BMI for Men — Ideal Weight by Height and Age (Chart)",
    description: "Calculate your male BMI and find your ideal weight range by height. Age-specific chart, waist circumference thresholds, and when your BMI may be misleading.",
  },
  {
    path: "/bmi-women",
    lang: "en",
    title: "BMI for Women — Ideal Weight, Pregnancy & Menopause Guide",
    description: "Calculate your female BMI with hormonal factors considered. Healthy weight by height, pregnancy weight gain ranges, and menopause effects on body composition.",
  },
  {
    path: "/bmi-athletes",
    lang: "en",
    title: "BMI for Athletes — Why It's Wrong for Muscular People",
    description: "BMI overestimates body fat in muscular people. Learn about FFMI, body fat percentage, and accurate alternatives for athletes, bodybuilders and gym-goers.",
  },
  {
    path: "/bmi-children",
    lang: "en",
    title: "Child BMI Calculator — Percentile by Age and Gender (WHO)",
    description: "Calculate your child's BMI percentile using WHO growth charts. Age and gender-specific results for kids 2-18, healthy weight ranges and when to see a doctor.",
  },
  {
    path: "/bmi-table",
    lang: "en",
    title: "BMI Chart and Table — WHO Classification with Examples",
    description: "Complete BMI table with all WHO categories and thresholds. Underweight, normal, overweight, obese — find your category with weight examples for every height.",
  },
  {
    path: "/bmi-interpretation",
    lang: "en",
    title: "What Does My BMI Mean? Each Category Explained Clearly",
    description: "Understand what your BMI number tells you about your health. Each category explained, when to take action, risk factors, and what can make BMI inaccurate.",
  },
  {
    path: "/bmi-limitations",
    lang: "en",
    title: "BMI Limitations — 7 Cases Where Your Result is Inaccurate",
    description: "BMI fails for athletes, elderly, pregnant women and certain ethnicities. The exact cases where it misleads and which alternatives give a more accurate picture.",
  },
  {
    path: "/bmi-faq",
    lang: "en",
    title: "BMI FAQ — 19 Common Questions Answered with WHO Data",
    description: "Clear answers to common BMI questions. How to calculate it, what's a normal range, does it apply to you, insurance impact, and when to use other assessments.",
  },
  {
    path: "/health-weight",
    lang: "en",
    title: "Healthy Weight Guide — Diet, Exercise & Long-Term Success",
    description: "Evidence-based guide to reaching and maintaining a healthy weight. Balanced nutrition, exercise plans, portion control tips and sustainable lifestyle changes.",
  },

  // --- Español ---
  {
    path: "/es/imc",
    lang: "es",
    title: "Calculadora de IMC Gratis — Resultado Inmediato y Preciso",
    description: "Calcula tu índice de masa corporal en segundos. Resultado con clasificación OMS, peso ideal según tu estatura y recomendaciones de salud personalizadas.",
  },
  {
    path: "/es/imc-hombre",
    lang: "es",
    title: "IMC Hombre — Peso Ideal según Estatura y Edad (Tabla)",
    description: "Calcula tu IMC masculino y conoce tu rango de peso ideal por estatura. Tabla por edad, perímetro abdominal saludable y factores de riesgo para hombres.",
  },
  {
    path: "/es/imc-mujer",
    lang: "es",
    title: "IMC Mujer — Peso Ideal Femenino, Embarazo y Menopausia",
    description: "Calcula tu IMC femenino considerando factores hormonales. Peso ideal por estatura, efecto del embarazo y menopausia sobre tu índice de masa corporal explicado.",
  },
  {
    path: "/es/imc-deportista",
    lang: "es",
    title: "IMC Deportista — Por Qué el Resultado Falla con Músculo",
    description: "El IMC sobreestima la grasa en personas musculosas. Conoce el FFMI para atletas y las alternativas precisas para evaluar tu composición corporal real hoy mismo.",
  },
  {
    path: "/es/imc-nino",
    lang: "es",
    title: "IMC Niños y Adolescentes — Percentil por Edad y Sexo OMS",
    description: "Calcula el IMC de tu hijo con las curvas de crecimiento OMS. Resultado por percentil según edad y sexo, rangos saludables de 2 a 18 años y cuándo consultar.",
  },
  {
    path: "/es/tabla-imc",
    lang: "es",
    title: "Tabla de IMC Completa — Clasificación OMS con Ejemplos",
    description: "Tabla de clasificación IMC completa con todos los umbrales OMS. Bajo peso, normal, sobrepeso, obesidad: tu categoría con ejemplos peso/estatura concretos.",
  },
  {
    path: "/es/interpretacion-imc",
    lang: "es",
    title: "Interpretación del IMC — Qué Significa Tu Resultado Real",
    description: "Entiende qué indica tu cifra de IMC sobre tu salud. Explicación categoría por categoría, cuándo preocuparte, cuándo actuar y factores que alteran el resultado.",
  },
  {
    path: "/es/limitaciones-imc",
    lang: "es",
    title: "Limitaciones del IMC — Cuándo el Resultado No Es Fiable",
    description: "El IMC falla en deportistas, embarazadas, ancianos y ciertas etnias. Los casos exactos donde engaña y qué alternativas médicas son realmente más precisas hoy.",
  },
  {
    path: "/es/preguntas-frecuentes-imc",
    lang: "es",
    title: "Preguntas Frecuentes IMC — 19 Respuestas Claras con Datos",
    description: "Respuestas a las preguntas más comunes sobre el IMC con datos OMS. Fórmula, rangos normales por edad, fiabilidad real y cuándo usar otros indicadores de salud.",
  },
  {
    path: "/es/salud-peso",
    lang: "es",
    title: "Peso Saludable — Guía de Nutrición, Dieta y Ejercicio",
    description: "Guía completa para alcanzar y mantener un peso saludable. Alimentación equilibrada, actividad física recomendada, control de porciones y hábitos que funcionan.",
  },

  // --- Português ---
  {
    path: "/pt/imc",
    lang: "pt",
    title: "Calculadora de IMC Grátis — Resultado Imediato e Preciso",
    description: "Calcule seu índice de massa corporal em 10 segundos. Resultado com classificação OMS, peso ideal para sua altura e orientações de saúde personalizadas.",
  },
  {
    path: "/pt/imc-homem",
    lang: "pt",
    title: "IMC Masculino — Peso Ideal por Altura e Idade (Tabela)",
    description: "Calcule seu IMC e descubra a faixa de peso ideal para sua altura e idade. Tabela por faixa etária, cintura abdominal saudável e riscos específicos masculinos.",
  },
  {
    path: "/pt/imc-mulher",
    lang: "pt",
    title: "IMC Feminino — Peso Ideal, Gravidez e Menopausa (Guia)",
    description: "Calcule seu IMC feminino com fatores hormonais considerados. Peso ideal por altura, ganho de peso na gravidez e efeitos da menopausa no índice corporal.",
  },
  {
    path: "/pt/imc-atleta",
    lang: "pt",
    title: "IMC para Atletas — Por Que o Resultado Erra com Músculo",
    description: "O IMC superestima gordura em quem tem massa muscular. Conheça o FFMI e as alternativas precisas para avaliar composição corporal de atletas e quem treina.",
  },
  {
    path: "/pt/imc-crianca",
    lang: "pt",
    title: "IMC Infantil — Calcular Percentil por Idade e Sexo (OMS)",
    description: "Calcule o IMC do seu filho com as curvas de crescimento da OMS. Resultado por percentil, faixas saudáveis de 2 a 18 anos e quando procurar o pediatra.",
  },
  {
    path: "/pt/tabela-imc",
    lang: "pt",
    title: "Tabela de IMC Completa — Classificação OMS com Exemplos",
    description: "Tabela IMC com todos os limites da classificação OMS. Baixo peso, normal, sobrepeso e obesidade com exemplos de peso para cada faixa de altura e nível de risco.",
  },
  {
    path: "/pt/interpretacao-imc",
    lang: "pt",
    title: "Interpretação do IMC — O Que Seu Resultado Realmente Indica",
    description: "Entenda o que seu resultado de IMC significa para sua saúde. Explicação por categoria, quando se preocupar, quando agir e fatores que alteram a precisão.",
  },
  {
    path: "/pt/limitacoes-imc",
    lang: "pt",
    title: "Limitações do IMC — Quando o Resultado Não É Confiável",
    description: "O IMC falha para atletas, grávidas, idosos e certas etnias. Os casos exatos em que o resultado engana e quais alternativas médicas são realmente mais precisas.",
  },
  {
    path: "/pt/perguntas-frequentes-imc",
    lang: "pt",
    title: "Perguntas Frequentes sobre IMC — Respostas Completas OMS",
    description: "Respostas claras às perguntas mais comuns sobre o IMC. Fórmula de cálculo, faixas normais por idade, confiabilidade real e quando usar outros indicadores.",
  },
  {
    path: "/pt/saude-peso",
    lang: "pt",
    title: "Peso Saudável — Guia Completo de Nutrição e Exercícios",
    description: "Guia prático para alcançar e manter um peso saudável duradouro. Alimentação equilibrada, exercícios recomendados, controle de porções e hábitos sustentáveis.",
  },

  // --- العربية ---
  {
    path: "/ar/imc",
    lang: "ar",
    title: "حاسبة مؤشر كتلة الجسم مجاناً — نتيجة فورية مع تحليل صحي شامل",
    description: "احسب مؤشر كتلة جسمك خلال ثوانٍ واحصل على تصنيفك حسب معايير منظمة الصحة العالمية. وزنك المثالي بناءً على طولك مع نصائح صحية مخصصة لتحسين نمط حياتك اليومي.",
  },
  {
    path: "/ar/imc-rajul",
    lang: "ar",
    title: "مؤشر كتلة الجسم للرجل — الوزن المثالي حسب الطول والعمر",
    description: "احسب مؤشر كتلة جسمك كرجل واعرف وزنك المثالي حسب طولك. جدول مفصل بحسب الفئة العمرية ومحيط الخصر الصحي وعوامل خطر السمنة البطنية عند الرجال وحلول عملية.",
  },
  {
    path: "/ar/imc-maraa",
    lang: "ar",
    title: "مؤشر كتلة الجسم للمرأة — الوزن المثالي والعوامل الهرمونية",
    description: "احسبي مؤشر كتلة جسمك مع مراعاة التغيرات الهرمونية في كل مرحلة عمرية. الوزن المثالي حسب الطول وتأثير الحمل وانقطاع الطمث على المؤشر مع نصائح مخصصة للنساء.",
  },
  {
    path: "/ar/imc-riyadi",
    lang: "ar",
    title: "مؤشر كتلة الجسم للرياضيين — لماذا النتيجة خاطئة لذوي العضلات",
    description: "مؤشر كتلة ا��جسم يبالغ في تقدير الدهون عند ذوي الكتلة العضلية العالية. تعرف على مؤشر FFMI والبدائل الدقيقة لتقييم تكوين جسم الرياضيين ولاعبي كمال الأجسام.",
  },
  {
    path: "/ar/imc-tifl",
    lang: "ar",
    title: "مؤشر كتلة الجسم للأطفال — حساب المئين حسب العمر والجنس",
    description: "احسب مؤشر كتلة جسم طفلك بمنحنيات النمو المعتمدة من منظمة الصحة العالمية. نتائج دقيقة بالمئين حسب العمر والجنس مع إرشادات صحية للأطفال من سن ٢ إلى ١٨ سنة.",
  },
  {
    path: "/ar/jadwal-imc",
    lang: "ar",
    title: "جدول مؤشر كتلة الجسم الكامل — تصنيف منظمة الصحة العالمية",
    description: "جدول تصن��ف مؤشر كتلة الجسم حسب منظمة الصحة العالمية. النحافة والوزن الطبيعي والسمنة بدرجاتها مع أمثلة عملية لكل فئة طول ومستوى الخطر الصحي المرتبط بها.",
  },
  {
    path: "/ar/tafsir-imc",
    lang: "ar",
    title: "تفسير نتيجة مؤشر كتلة الجسم — ماذا يعني رقمك للصحة",
    description: "افهم ما يعنيه رقم مؤشر كتلة جسمك لصحتك الحقيقية بشكل واضح ومبسط. شرح مفصل لكل فئة صحية ومتى يجب القلق ومتى تتصرف والعوامل المؤثرة على دقة النتيجة وموثوقيتها.",
  },
  {
    path: "/ar/hudud-imc",
    lang: "ar",
    title: "حدود مؤشر كتلة الجسم — متى لا يمكنك الوثوق بالنتيجة",
    description: "مؤشر كتلة الجسم يخطئ مع الرياضيين والحوامل وكبار السن وبعض الأعراق. اكتشف الحالات التي يضلل فيها المؤشر وما هي البدائل الطبية الأكثر دقة لتقييمك الصحي.",
  },
  {
    path: "/ar/asila-imc",
    lang: "ar",
    title: "أسئلة شائعة عن مؤشر كتلة الجسم — إجابات علمية مفصلة ودقيقة",
    description: "إجابات علمية على أكثر الأسئلة شيوعاً حول مؤشر كتلة الجسم. طريقة الحساب الصحيحة والنطاقات الطبيعية حسب العمر والجنس ومتى يجب عليك استخدام مؤشرات بديلة أدق.",
  },
  {
    path: "/ar/siha-wazn",
    lang: "ar",
    title: "الوزن الصحي — دليل شامل للتغذية المتوازنة والنشاط البدني",
    description: "دليل عملي شامل للوصول إلى وزن صحي مثالي والحفاظ عليه. نصائح تغذية متوازنة ونشاط بدني مناسب وعادات يومية فعالة لإدارة الوزن بشكل مستدام على المدى الطويل.",
  },

  // --- Deutsch ---
  {
    path: "/de/bmi",
    lang: "de",
    title: "BMI Rechner Kostenlos — Sofort Ergebnis mit Auswertung",
    description: "Berechnen Sie Ihren Body-Mass-Index in Sekunden. Sofort-Ergebnis mit WHO-Kategorie, Idealgewicht für Ihre Größe und individuelle Gesundheitsempfehlungen.",
  },
  {
    path: "/de/bmi-maenner",
    lang: "de",
    title: "BMI Männer — Idealgewicht nach Größe und Alter (Tabelle)",
    description: "Berechnen Sie Ihren männlichen BMI und finden Sie Ihr Idealgewicht. Tabelle nach Alter, Bauchumfang-Grenzwerte und Risikofaktoren speziell für Männer erklärt.",
  },
  {
    path: "/de/bmi-frauen",
    lang: "de",
    title: "BMI Frauen — Idealgewicht, Schwangerschaft & Wechseljahre",
    description: "Berechnen Sie Ihren weiblichen BMI mit Berücksichtigung hormoneller Faktoren. Idealgewicht nach Größe, Schwangerschaft und Wechseljahre Einfluss auf den BMI.",
  },
  {
    path: "/de/bmi-sportler",
    lang: "de",
    title: "BMI Sportler — Warum das Ergebnis bei Muskelmasse falsch ist",
    description: "Der BMI überschätzt Körperfett bei muskulösen Menschen. FFMI als Alternative, Körperfettanteil messen und genaue Methoden für Sportler und Kraftsportler.",
  },
  {
    path: "/de/bmi-kinder",
    lang: "de",
    title: "BMI Kinder Rechner — Perzentile nach Alter und Geschlecht",
    description: "Berechnen Sie den BMI Ihres Kindes mit WHO-Wachstumskurven. Ergebnis als Perzentile, gesunde Bereiche für 2 bis 18 Jahre und wann zum Kinderarzt gehen.",
  },
  {
    path: "/de/bmi-tabelle",
    lang: "de",
    title: "BMI Tabelle Komplett — WHO-Klassifikation mit Beispielen",
    description: "Vollständige BMI-Tabelle mit allen WHO-Schwellenwerten. Untergewicht, Normalgewicht, Übergewicht, Adipositas — Ihre Kategorie mit Gewichtsbeispielen pro Größe.",
  },
  {
    path: "/de/bmi-interpretation",
    lang: "de",
    title: "BMI Ergebnis verstehen — Was Ihr Wert wirklich bedeutet",
    description: "Verstehen Sie was Ihr BMI-Wert über Ihre Gesundheit aussagt. Kategorie für Kategorie erklärt, wann handeln und welche Faktoren das Ergebnis verfälschen.",
  },
  {
    path: "/de/bmi-grenzen",
    lang: "de",
    title: "BMI Grenzen — 7 Fälle in denen der BMI falsch liegt",
    description: "Der BMI versagt bei Sportlern, Schwangeren, Senioren und bestimmten Ethnien. Die genauen Fälle wo er täuscht und welche Alternativen wirklich besser sind.",
  },
  {
    path: "/de/bmi-faq",
    lang: "de",
    title: "BMI Häufige Fragen — Formel, Normalwerte und Fakten",
    description: "Klare Antworten auf die häufigsten BMI-Fragen. Berechnungsformel, Normalbereich nach Alter, Aussagekraft in der Praxis und wann andere Methoden besser sind.",
  },
  {
    path: "/de/gesundheit-gewicht",
    lang: "de",
    title: "Gesundes Gewicht — Ernährung, Bewegung und Dauererfolg",
    description: "Praxisratgeber für ein gesundes Gewicht auf Dauer. Ausgewogene Ernährung, Bewegungsempfehlungen, Portionskontrolle und nachhaltige Gewohnheiten für den Alltag.",
  },
  // --- Italiano ---
  {
    path: "/it/imc",
    lang: "it",
    title: "Calcolo IMC Gratis — Risultato Immediato con Analisi OMS",
    description: "Calcola il tuo indice di massa corporea in pochi secondi. Risultato immediato con categoria OMS, peso ideale per la tua altezza e consigli salute mirati.",
  },
  {
    path: "/it/imc-uomo",
    lang: "it",
    title: "IMC Uomo — Peso Ideale Maschile per Altezza e Età (Tabella)",
    description: "Calcola il tuo IMC maschile e scopri il peso ideale per altezza e età. Tabella per fasce d'età, girovita raccomandato e rischi specifici per la salute maschile.",
  },
  {
    path: "/it/imc-donna",
    lang: "it",
    title: "IMC Donna — Peso Ideale Femminile, Gravidanza e Menopausa",
    description: "Calcola il tuo IMC femminile con fattori ormonali considerati. Peso ideale per altezza, impatto della gravidanza e menopausa sull'indice di massa corporea.",
  },
  {
    path: "/it/imc-sportivo",
    lang: "it",
    title: "IMC Sportivi — Perché il Risultato è Sbagliato con i Muscoli",
    description: "L'IMC sovrastima il grasso in chi ha molta massa muscolare. Scopri il FFMI e le alternative precise per valutare la reale composizione corporea degli atleti.",
  },
  {
    path: "/it/imc-bambino",
    lang: "it",
    title: "IMC Bambini — Calcolo Percentile per Età e Sesso con OMS",
    description: "Calcola l'IMC di tuo figlio con le curve di crescita OMS. Risultato in percentile per età e sesso, intervalli sani dai 2 ai 18 anni e quando consultare.",
  },
  {
    path: "/it/tabella-imc",
    lang: "it",
    title: "Tabella IMC Completa — Classificazione OMS con Esempi Peso",
    description: "Tabella di classificazione IMC con tutte le soglie OMS. Sottopeso, normopeso, sovrappeso, obesità: trova la tua categoria con esempi di peso per ogni altezza.",
  },
  {
    path: "/it/interpretazione-imc",
    lang: "it",
    title: "Interpretazione IMC — Cosa Significa il Tuo Risultato",
    description: "Capisci cosa significa il tuo numero IMC per la tua salute reale. Spiegazione categoria per categoria, quando preoccuparti e fattori che alterano la precisione.",
  },
  {
    path: "/it/limiti-imc",
    lang: "it",
    title: "Limiti dell'IMC — Quando il Risultato Non è Affidabile",
    description: "L'IMC fallisce per sportivi, anziani, donne in gravidanza e alcune etnie. I casi esatti dove il risultato inganna e le alternative mediche più precise oggi.",
  },
  {
    path: "/it/domande-frequenti-imc",
    lang: "it",
    title: "Domande Frequenti IMC — 20 Risposte Chiare con Dati OMS",
    description: "Risposte alle domande più comuni sull'IMC con dati OMS verificati. Formula di calcolo, valori normali per età, affidabilità reale e indicatori alternativi.",
  },
  {
    path: "/it/salute-peso",
    lang: "it",
    title: "Peso Sano — Guida Completa Alimentazione e Attività Fisica",
    description: "Guida pratica per raggiungere e mantenere un peso sano nel tempo. Alimentazione equilibrata, esercizio fisico consigliato e abitudini sostenibili ogni giorno.",
  },
  // --- हिन्दी ---
  {
    path: "/hi/bmi",
    lang: "hi",
    title: "BMI कैलकुलेटर मुफ्त — तुरंत सटीक परिणाम WHO मानक के अनुसार",
    description: "अपना बॉडी मास इंडेक्स 10 सेकंड में कैलकुलेट करें। WHO मानक अनुसार परिणाम, आपकी ऊंचाई के लिए आदर्श वजन सीमा और व्यक्तिगत स्वास्थ्य सलाह तुरंत प्राप्त करें।",
  },
  {
    path: "/hi/bmi-purush",
    lang: "hi",
    title: "पुरुषों का BMI — ऊंचाई और उम्र के अनुसार आदर्श वजन तालिका",
    description: "पुरुषों का BMI कैलकुलेट करें और ऊंचाई अनुसार आदर्श वजन जानें। उम्र अनुसार BMI तालिका, कमर की परिधि सीमा और पुरुषों में पेट की चर्बी के स्वास्थ्य जोखिम।",
  },
  {
    path: "/hi/bmi-mahila",
    lang: "hi",
    title: "महिलाओं का BMI — आदर्श वजन, गर्भावस्था और रजोनिवृत्ति गाइड",
    description: "हार्मोनल कारकों को ध्यान में रखते हुए महिला BMI कैलकुलेट करें। ऊंचाई अनुसार आदर्श वजन, गर्भावस्था में वजन बढ़ना और रजोनिवृत्ति का BMI पर प्रभाव समझें।",
  },
  {
    path: "/hi/bmi-khiladi",
    lang: "hi",
    title: "खिलाड़ियों का BMI — मांसपेशियों वालों पर क्यों गलत होता है",
    description: "BMI मांसपेशियों वाले लोगों में शरीर की चर्बी बढ़ा-चढ़ाकर दिखाता है। FFMI सूचकांक और एथलीटों के लिए शरीर संरचना मापने के सटीक वैज्ञानिक विकल्प जानें यहां।",
  },
  {
    path: "/hi/bmi-bachche",
    lang: "hi",
    title: "बच्चों का BMI कैलकुलेटर — उम्र और लिंग अनुसार परसेंटाइल WHO",
    description: "WHO ग्रोथ चार्ट से बच्चे का BMI परसेंटाइल कैलकुलेट करें। 2 से 18 साल उम्र और लिंग अनुसार सटीक परिणाम, स्वस्थ वजन सीमा और डॉक्टर से कब मिलें यहां जानें।",
  },
  {
    path: "/hi/bmi-talika",
    lang: "hi",
    title: "BMI तालिका — WHO वर्गीकरण पूर्ण उदाहरणों सहित (चार्ट)",
    description: "WHO मानक के अनुसार पूर्ण BMI वर्गीकरण तालिका देखें। कम वजन, सामान्य, अधिक वजन, मोटापा — हर ऊंचाई के लिए वजन उदाहरण और स्वास्थ्य जोखिम स्तर की पूरी जानकारी।",
  },
  {
    path: "/hi/bmi-vyakhya",
    lang: "hi",
    title: "BMI व्याख्या — आपका नंबर स्वास्थ्य के बारे में क्या कहता है",
    description: "समझें कि आपका BMI नंबर स्वास्थ्य जोखिमों के बारे में क्या बताता है। हर श्रेणी की विस्तृत व्याख्या, कब चिंता करें, कब कार्रवाई करें और अशुद्धि के कारण।",
  },
  {
    path: "/hi/bmi-seemayen",
    lang: "hi",
    title: "BMI की सीमाएं — किन लोगों पर यह सही परिणाम नहीं देता है",
    description: "BMI खिलाड़ियों, गर्भवती महिलाओं, बुजुर्गों और कुछ जातीय समूहों के लिए गलत होता है। वे मामले जहां यह भ्रमित करता है और कौन से चिकित्सा विकल्प बेहतर हैं।",
  },
  {
    path: "/hi/bmi-prashn",
    lang: "hi",
    title: "BMI सवाल-जवाब — फॉर्मूला, सामान्य सीमा और विशेषज्ञ सुझाव",
    description: "BMI के बारे में आम सवालों के स्पष्ट जवाब। सही गणना कैसे करें, सामान्य सीमा क्या है, क्या यह आप पर लागू होता है और अन्य स्वास्थ्य मूल्यांकन कब उपयुक्त होते हैं।",
  },
  {
    path: "/hi/swasthya-vajan",
    lang: "hi",
    title: "स्वस्थ वजन गाइड — सही पोषण, व्यायाम और जीवनशैली सुझाव",
    description: "स्वस्थ व��न हासिल करने और बनाए रखने की पूरी गाइड। संतुलित पोषण, अनुशंसित व्यायाम, भाग नियंत्रण और दीर्घकालिक वजन प्रबंधन की प्रभावी रणनीतियां यहां जानें।",
  },

  // --- 中文 ---
  {
    path: "/zh/bmi",
    lang: "zh",
    title: "BMI计算器免费在线 — 10秒出结果含健康分析",
    description: "即时计算您的身体质量指数，获取WHO标准分类。了解身高对应的健康体重范围、健康风险等级和个性化改善建议，科学管理体重。",
  },
  {
    path: "/zh/bmi-nanxing",
    lang: "zh",
    title: "男性BMI计算器 — 按身高年龄查理想体重表",
    description: "计算男性BMI并查看身高对应的理想体���范围。包含各年龄段对照表、腰围安全值和男性腹部肥胖健康风险分析与实用改善方案。",
  },
  {
    path: "/zh/bmi-nvxing",
    lang: "zh",
    title: "女性BMI计算器 — 理想体重与激素影响全面分析",
    description: "考虑女性激素因素计算BMI。按身高查理想体重、孕期体重管理、更年期对体重的影响和各生命阶段的科学体重管理建议。",
  },
  {
    path: "/zh/bmi-yundongyuan",
    lang: "zh",
    title: "运动员BMI — 为什么肌肉多的人BMI结果不准确",
    description: "BMI会高估肌肉发达者的体脂率。了解FFMI去脂体重指数的科学原理，以及运动员和健身者评估真实身体成分的精准替代方法。",
  },
  {
    path: "/zh/bmi-ertong",
    lang: "zh",
    title: "儿童BMI计算器 — 按年龄性别查WHO百分位数",
    description: "使用WHO生长曲线计算儿童BMI百分位数。2至18岁按年龄和性别的精确结果、健康体重范围及何时需要就医的专业指导。",
  },
  {
    path: "/zh/bmi-biao",
    lang: "zh",
    title: "BMI对照表完整版 — WHO标准分类含体重示例",
    description: "基于WHO标准的完整BMI分类对照表。偏瘦、正常、超重、肥胖各类别精确阈值，每个身高段对应的体重示例和健康风险等级。",
  },
  {
    path: "/zh/bmi-jiedu",
    lang: "zh",
    title: "BMI结果解读 — 你的数字对健康意味着什么",
    description: "理解BMI数值对健康风险的实际含义。逐类别详细解读、何时需要担心、何时采取行动，以及哪些因素会让BMI结果变得不够准确。",
  },
  {
    path: "/zh/bmi-juxianxing",
    lang: "zh",
    title: "BMI局限性 — 7种人群的BMI结果不可靠",
    description: "BMI对运动员、孕妇、老年人和特定族群不够准确。了解哪些情况下它会误导你，以及哪些医学替代指标能更真实反映你的健康。",
  },
  {
    path: "/zh/bmi-changjianwenti",
    lang: "zh",
    title: "BMI常见问题解答 — 计算公式、正常范围、实用建议",
    description: "BMI常见问题的清晰解答。如何正确计算、正常范围是多少、是否适用于你、以及何时应该使用其他健康评估指标来替代BMI。",
  },
  {
    path: "/zh/jiankang-tizhong",
    lang: "zh",
    title: "健康体重管理指南 — 科学饮食与运动建议",
    description: "循证医学指导的健康体重管理方案。均衡饮食建议、推荐运动量、份量控制技巧和可持续的长期体重维护习惯，科学减重不反弹。",
  },
  // --- Utility pages ---
  {
    path: "/glossary",
    lang: "en",
    title: "BMI Glossary - 35+ Health & Weight Terms Defined",
    description: "Complete glossary of BMI, body mass index, obesity, underweight, healthy weight, metabolic rate, body fat percentage and 30+ health terms with WHO and CDC definitions.",
  },
  {
    path: "/widget",
    lang: "en",
    title: "Free BMI Calculator Widget - Embed on Your Website",
    description: "Add a free BMI calculator widget to your website or blog. Copy the embed code and paste it into your HTML. Lightweight, responsive, no dependencies required.",
  },
];

const STORAGE_KEY = "seo-overrides";

const normalizePath = (p: string): string =>
  p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p;

export const getSEOForPath = (path: string): PageSEO => {
  const normalized = normalizePath(path);
  const defaults = defaultSEO.find((s) => s.path === normalized);
  if (!defaults) {
    return defaultSEO[0];
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const overrides: Record<string, Partial<PageSEO>> = JSON.parse(raw);
      if (overrides[path]) {
        return { ...defaults, ...overrides[path] };
      }
    }
  } catch {
    // ignore parse errors
  }

  return defaults;
};

export const saveSEOOverride = (path: string, data: Partial<PageSEO>) => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const overrides: Record<string, Partial<PageSEO>> = raw ? JSON.parse(raw) : {};
    overrides[path] = { ...overrides[path], ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  } catch {
    // ignore
  }
};

export const resetSEOOverride = (path: string) => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const overrides: Record<string, Partial<PageSEO>> = JSON.parse(raw);
      delete overrides[path];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    }
  } catch {
    // ignore
  }
};

export const resetAllSEOOverrides = () => {
  localStorage.removeItem(STORAGE_KEY);
};
