import { Header } from "@/components/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
      >
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

const PreguntasFrecuentesIMC = () => {
  const faqs = [
    {
      question: "¿Qué es exactamente el IMC?",
      answer: "El <strong>IMC (Índice de Masa Corporal)</strong> es un indicador que permite estimar la corpulencia de una persona. Se calcula dividiendo el peso (en kg) por la talla al cuadrado (en metros). Fórmula: IMC = Peso / Talla². Es una herramienta de detección rápida utilizada por profesionales de la salud."
    },
    {
      question: "¿Cómo calcular su IMC?",
      answer: "Para calcular su IMC, divida su peso en kilogramos por su talla en metros al cuadrado. Por ejemplo, si pesa 70 kg y mide 1,75 m: IMC = 70 / (1,75 × 1,75) = 70 / 3,0625 = <strong>22,9</strong>. También puede usar nuestra <a href='/es/imc' class='text-primary hover:underline'>calculadora IMC gratuita</a>."
    },
    {
      question: "¿Cuál es el IMC ideal?",
      answer: "Según la OMS, un <strong>IMC normal</strong> se sitúa entre <strong>18,5 y 24,9</strong>. Esta es la zona donde los riesgos para la salud son más bajos. Sin embargo, el IMC ideal puede variar según la edad, el sexo y la actividad física. El IMC óptimo se sitúa a menudo alrededor de 21-22."
    },
    {
      question: "¿Es fiable el IMC?",
      answer: "El IMC es un buen indicador para la población general, pero tiene <strong>limitaciones</strong>. No distingue la masa muscular de la masa grasa. Un deportista musculoso puede tener un IMC elevado sin exceso de grasa. Otros indicadores como el perímetro de cintura o el porcentaje de masa grasa son complementarios. Vea nuestra página sobre las <a href='/es/limitaciones-imc' class='text-primary hover:underline'>limitaciones del IMC</a>."
    },
    {
      question: "¿Qué IMC para una mujer?",
      answer: "El IMC normal para una mujer es el mismo que para un hombre: <strong>18,5 a 24,9</strong>. Sin embargo, las mujeres tienen naturalmente un porcentaje de grasa más elevado (20-25% vs 15-20% para los hombres). El perímetro de cintura es a menudo más pertinente: no debería superar los 80 cm. Consulte nuestra página <a href='/es/imc-mujer' class='text-primary hover:underline'>IMC Mujer</a> para más detalles."
    },
    {
      question: "¿Qué IMC para un hombre?",
      answer: "El IMC normal para un hombre se sitúa entre <strong>18,5 y 24,9</strong>. Los hombres musculosos pueden tener un IMC más elevado (hasta 27-28) sin problema de salud. El perímetro de cintura es un indicador complementario importante: no debería superar los 94 cm. Vea nuestra página <a href='/es/imc-hombre' class='text-primary hover:underline'>IMC Hombre</a>."
    },
    {
      question: "¿Cómo calcular el IMC de un niño?",
      answer: "El cálculo es el mismo (peso/talla²), pero la <strong>interpretación es diferente</strong>. No se utilizan los umbrales adultos (18,5/25/30). Se utilizan curvas de corpulencia que tienen en cuenta la edad y el sexo. Un niño debe situarse en las curvas de percentiles. Consulte nuestra página <a href='/es/imc-nino' class='text-primary hover:underline'>IMC Niño</a>."
    },
    {
      question: "¿Se puede calcular el IMC durante el embarazo?",
      answer: "<strong>No</strong>, el IMC no se aplica durante el embarazo. El aumento de peso es normal y necesario. El IMC pre-embarazo sirve de referencia para determinar el aumento de peso recomendado (11-16 kg para un IMC normal). Consulte a su ginecólogo para un seguimiento personalizado."
    },
    {
      question: "¿Es el IMC el mismo para los deportistas?",
      answer: "<strong>El IMC está sesgado para los deportistas</strong>. La fórmula no distingue músculo y grasa. Un culturista con 10% de masa grasa puede tener un IMC de 30+ (clasificado obeso). Para deportistas, prefiera el <strong>FFMI</strong> (Fat-Free Mass Index), el porcentaje de masa grasa o el perímetro de cintura. Vea nuestra página <a href='/es/imc-deportista' class='text-primary hover:underline'>IMC Deportista</a>."
    },
    {
      question: "¿A partir de qué IMC se tiene sobrepeso?",
      answer: "Se habla de <strong>sobrepeso</strong> a partir de un IMC de <strong>25</strong>. Entre 25 y 29,9, es sobrepeso (o preobesidad). A partir de 30, se habla de obesidad. Estos umbrales están definidos por la OMS y se utilizan mundialmente."
    },
    {
      question: "¿A partir de qué IMC se es obeso?",
      answer: "La <strong>obesidad</strong> comienza con un IMC de <strong>30</strong>. Se divide en tres clases: Clase I (30-34,9) = obesidad moderada, Clase II (35-39,9) = obesidad severa, Clase III (≥40) = obesidad mórbida. Cuanto más elevado es el IMC, más aumentan los riesgos de salud."
    },
    {
      question: "¿Cómo perder peso eficazmente?",
      answer: "Para perder peso de manera duradera: <strong>1)</strong> Cree un déficit calórico moderado (300-500 kcal/día), <strong>2)</strong> Privilegie una alimentación equilibrada rica en proteínas, <strong>3)</strong> Practique actividad física regular (cardio + musculación), <strong>4)</strong> Duerma suficiente (7-8h), <strong>5)</strong> Sea paciente: apunte a 0,5-1 kg/semana máximo."
    },
    {
      question: "¿Es el perímetro de cintura más importante que el IMC?",
      answer: "El perímetro de cintura es un <strong>excelente complemento</strong> al IMC. Mide la grasa abdominal (visceral), que es más peligrosa para la salud. Umbrales recomendados: Hombres &lt;94 cm (riesgo moderado), &lt;102 cm (riesgo elevado). Mujeres &lt;80 cm (riesgo moderado), &lt;88 cm (riesgo elevado)."
    },
    {
      question: "¿Cambia el IMC con la edad?",
      answer: "La fórmula del IMC sigue siendo la misma, pero su <strong>interpretación puede variar</strong>. Después de los 65 años, un IMC ligeramente más elevado (hasta 27) puede ser protector. Con la edad, la masa muscular disminuye (sarcopenia), lo que puede falsear el IMC. Se recomienda un seguimiento médico regular."
    },
    {
      question: "¿Cuál es la diferencia entre IMC y BMI?",
      answer: "¡No hay <strong>ninguna diferencia</strong>! IMC significa <strong>Índice de Masa Corporal</strong> (español) y BMI significa <strong>Body Mass Index</strong> (inglés). Es exactamente el mismo indicador con la misma fórmula y los mismos umbrales."
    },
    {
      question: "¿El IMC es igual para todas las etnias?",
      answer: "No exactamente. La <strong>OMS</strong> recomienda umbrales más bajos para poblaciones asiáticas (sobrepeso a partir de IMC 23, obesidad a partir de 27,5) debido a mayor riesgo metabólico con menos grasa corporal visible. En <strong>México</strong>, las poblaciones indígenas pueden presentar composiciones corporales distintas. Los estudios en poblaciones mestizas latinoamericanas sugieren que la distribución de grasa abdominal es más frecuente, lo que hace del <strong>perímetro de cintura</strong> un complemento esencial al IMC estándar."
    },
    {
      question: "¿El sistema de salud cubre el tratamiento de la obesidad?",
      answer: "En <strong>España</strong>, el SNS (Sistema Nacional de Salud) cubre la derivación a endocrinología y, en algunas comunidades autónomas, consultas con nutricionistas. La <strong>cirugía bariátrica</strong> se financia para IMC≥40 o IMC≥35 con comorbilidades, aunque las listas de espera pueden superar los 18 meses. En <strong>México</strong>, el IMSS y el ISSSTE cubren tratamientos de obesidad incluyendo programas nutricionales y cirugía en casos graves. El antiguo Seguro Popular (hoy INSABI/IMSS-Bienestar) también contempla atención para obesidad mórbida en hospitales de referencia."
    },
    {
      question: "¿Qué es la obesidad sarcopénica?",
      answer: "La <strong>obesidad sarcopénica</strong> combina un exceso de masa grasa con una pérdida significativa de masa muscular. Una persona puede tener un IMC normal o ligeramente elevado (25-27) pero presentar un porcentaje de grasa alto y poca musculatura. Es frecuente en personas <strong>sedentarias</strong> y mayores de 65 años. Los criterios EWGSOP (European Working Group on Sarcopenia in Older People) definen esta condición. El tratamiento principal es el <strong>entrenamiento de resistencia</strong> combinado con una ingesta proteica adecuada (1,2-1,6 g/kg/día)."
    },
    {
      question: "¿La dieta mediterránea ayuda a mantener un IMC saludable?",
      answer: "Sí. El estudio <strong>PREDIMED</strong> (Prevención con Dieta Mediterránea) demostró que esta dieta, reconocida por la <strong>UNESCO</strong> como patrimonio inmaterial, reduce el riesgo cardiovascular y favorece un peso saludable. Sus pilares son el aceite de oliva virgen extra, legumbres, pescado, frutas, verduras y consumo moderado de vino tinto. Las dietas tradicionales de España y Latinoamérica comparten elementos protectores cuando se basan en alimentos <strong>no ultraprocesados</strong>: frijoles, maíz nixtamalizado, aguacate y pescado."
    },
    {
      question: "¿A partir de qué IMC se puede operar?",
      answer: "En España, la <strong>cirugía bariátrica</strong> se indica con IMC≥40 o IMC≥35 acompañado de comorbilidades (diabetes tipo 2, apnea del sueño, hipertensión). Las técnicas principales son el <strong>bypass gástrico</strong> y la gastrectomía vertical (sleeve). En el SNS, la espera puede ser de 1-2 años según la comunidad autónoma; la opción privada reduce los plazos. Antes de operar, se exige un seguimiento multidisciplinar de <strong>6-12 meses</strong> que incluye evaluación psicológica, nutricional y pruebas de compromiso con cambios de hábitos."
    }
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
            Preguntas frecuentes
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">FAQ IMC</span> : Preguntas Frecuentes sobre el IMC
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respuestas a las preguntas más frecuentes sobre el Índice de Masa Corporal
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Calcule su IMC ahora</h3>
          <p className="text-muted-foreground mb-6">
            Use nuestra calculadora gratuita para conocer su índice de masa corporal
          </p>
          <Link
            to="/es/imc"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Calcular mi IMC
          </Link>
        </div>

        {/* IMSS/SUS coverage info */}
        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">Cobertura del IMC y obesidad en los sistemas publicos de salud</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              En <strong>Mexico</strong>, el <strong>IMSS</strong> incluye la medicion del IMC como parte obligatoria del chequeo anual de medicina preventiva (<strong>PrevenIMSS</strong>). Los derechohabientes con IMC superior a 30 pueden acceder a programas de nutricion, endocrinologia y, en casos graves, cirugia bariatrica cubierta por el seguro social. El <strong>ISSSTE</strong> ofrece servicios equivalentes para los trabajadores del Estado, con clinicas de obesidad en sus hospitales regionales principales.
            </p>
            <p>
              En <strong>Brasil</strong>, el <strong>SUS</strong> (Sistema Unico de Saude) cubre consultas nutricionales, evaluaciones de IMC en las <strong>Unidades Basicas de Saude (UBS)</strong> y cirugia bariatrica para pacientes con IMC superior a 40 o superior a 35 con comorbilidades, a traves de centros especializados acreditados por el Ministerio de Salud. En <strong>Espana</strong>, el <strong>SNS</strong> incluye el calculo del IMC en el protocolo estandar de atencion primaria dentro del PAPPS (Programa de Actividades Preventivas y de Promocion de la Salud), con derivacion a endocrinologia hospitalaria segun criterios clinicos.
            </p>
            <p>
              En <strong>España</strong>, la <strong>Estrategia NAOS</strong> (Nutrición, Actividad Física y Prevención de la Obesidad), impulsada desde 2005, y el Plan de Colaboración para la Mejora de la Composición de los Alimentos han sido iniciativas gubernamentales clave para frenar la epidemia de obesidad. Según la Encuesta Nacional de Salud (ENS 2017), la prevalencia de obesidad en adultos españoles ronda el <strong>16%</strong>, con diferencias regionales significativas: comunidades como Andalucía y Canarias presentan tasas más elevadas. La <strong>AESAN</strong> (Agencia Española de Seguridad Alimentaria y Nutrición, anteriormente AECOSAN) supervisa la seguridad alimentaria y la nutrición, mientras que el <strong>código PAOS</strong> regula la publicidad de alimentos dirigida a menores de 12 años.
            </p>
            <p>
              En <strong>Latinoamérica</strong>, las tasas de obesidad varían enormemente: <strong>México</strong> registra una de las cifras más altas del mundo (36,1% de adultos con obesidad), mientras que países como Colombia y Perú se sitúan en torno al 22%. El <strong>impuesto al refresco</strong> implementado en México en 2014 logró reducir el consumo de bebidas azucaradas un 7,6% en su primer año de aplicación. La innovadora <strong>Ley de Etiquetado</strong> de Chile, con sus sellos negros de advertencia ("alto en azúcares", "alto en grasas saturadas"), ha sido adoptada por varios países latinoamericanos incluyendo México, Perú y Uruguay. Estas medidas de salud pública complementan el monitoreo individual del IMC y demuestran que las políticas poblacionales son esenciales para combatir la obesidad a gran escala.
            </p>
          </div>
        </div>

        {/* SEO Schema */}
        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">Todo sobre el IMC</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Esta <strong>FAQ IMC</strong> responde a las preguntas más comunes sobre el cálculo e
              interpretación del <strong>Índice de Masa Corporal</strong>. Ya busque saber
              <strong> cómo calcular el IMC</strong>, <strong>cuál es el IMC ideal</strong>, o
              <strong> si el IMC es fiable</strong>, encontrará las respuestas aquí.
            </p>
            <p>
              El IMC es una herramienta simple pero útil para evaluar su corpulencia. Sin embargo, tiene sus limitaciones
              y debe completarse con otros indicadores. No dude en consultar a un profesional de la
              salud para un balance completo.
            </p>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 FAQ IMC - Respuestas a sus preguntas</p>
        </footer>
      </div>
    </div>
  );
};

export default PreguntasFrecuentesIMC;
