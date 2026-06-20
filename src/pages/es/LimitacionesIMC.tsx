import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const LimitacionesIMC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-warning/5 blur-3xl animate-float" />
      </div>

      <main id="main-content" className="container max-w-6xl py-8 px-4 md:py-12">
        <Breadcrumbs />
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Las limitaciones del IMC
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">Limitaciones del IMC</span> : Lo que el IMC No Dice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Por qué el IMC no es un indicador perfecto y cuándo puede ser engañoso
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">El IMC es una herramienta de detección, no un diagnóstico</h3>
              <p className="text-muted-foreground">
                Creado en 1832 por Adolphe Quetelet, el IMC fue diseñado para estudios estadísticos de población,
                no para evaluar la salud individual. Presenta varias limitaciones importantes.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Main Limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Lo que el IMC no mide</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La composición corporal</h4>
                    <p className="text-sm text-muted-foreground">
                      El IMC no distingue el músculo de la grasa. 1 kg de músculo = 1 kg de grasa para el IMC.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La distribución de las grasas</h4>
                    <p className="text-sm text-muted-foreground">
                      La grasa abdominal es más peligrosa que la grasa subcutánea. El IMC no lo ve.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La densidad ósea</h4>
                    <p className="text-sm text-muted-foreground">
                      Huesos más pesados aumentan el IMC sin impactar la salud.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">El estado de salud metabólica</h4>
                    <p className="text-sm text-muted-foreground">
                      Una persona delgada puede tener un mal perfil metabólico (colesterol, glucemia).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La hidratación</h4>
                    <p className="text-sm text-muted-foreground">
                      La retención de agua puede aumentar temporalmente el IMC de 1 a 2 puntos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La forma física</h4>
                    <p className="text-sm text-muted-foreground">
                      Dos personas con el mismo IMC pueden tener condiciones físicas muy diferentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Population-specific limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Poblaciones para las que el IMC es inadecuado</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Deportistas y atletas</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  La masa muscular elevada da un IMC de "sobrepeso" u "obesidad" cuando el porcentaje de grasa es mínimo.
                </p>
                <Link to="/es/imc-deportista" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Más información →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">Niños y adolescentes</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Los umbrales adultos no se aplican. Hay que utilizar las curvas de corpulencia adaptadas a la edad y al sexo.
                </p>
                <Link to="/es/imc-nino" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Más información →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">Personas mayores</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  La pérdida de masa muscular (sarcopenia) puede enmascarar un exceso de grasa. Un IMC "normal" puede ser engañoso.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">Mujeres embarazadas</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  El aumento de peso es normal y deseable durante el embarazo. El IMC pre-embarazo sirve de referencia.
                </p>
                <Link to="/es/imc-mujer" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Más información →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">Ciertas etnias</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Las poblaciones asiáticas tienen riesgos aumentados con IMC más bajo. La OMS propone umbrales adaptados (23 en lugar de 25).
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">Morfologías extremas</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Las personas muy altas o muy bajas tienen IMC naturalmente diferentes debido a la relación superficie/volumen.
                </p>
              </div>
            </div>
          </div>

          {/* Better alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternativas y complementos al IMC</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Indicador</th>
                    <th className="text-left py-3 px-4 font-bold">Lo que mide</th>
                    <th className="text-left py-3 px-4 font-bold">Umbrales recomendados</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Perímetro de cintura</td>
                    <td className="py-3 px-4">Grasa abdominal (visceral)</td>
                    <td className="py-3 px-4">&lt;94 cm (H) / &lt;80 cm (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Relación cintura/cadera</td>
                    <td className="py-3 px-4">Distribución de grasas</td>
                    <td className="py-3 px-4">&lt;0,90 (H) / &lt;0,85 (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Relación cintura/talla</td>
                    <td className="py-3 px-4">Grasa central relativa</td>
                    <td className="py-3 px-4">&lt;0,5 (perímetro de cintura &lt; mitad de la talla)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">% Masa grasa</td>
                    <td className="py-3 px-4">Composición corporal real</td>
                    <td className="py-3 px-4">10-20% (H) / 18-28% (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">Masa magra (para deportistas)</td>
                    <td className="py-3 px-4">18-25 (natural)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Impedanciometría</td>
                    <td className="py-3 px-4">Agua, músculo, grasa, hueso</td>
                    <td className="py-3 px-4">Varía según aparato</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When IMC is still useful */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Cuándo el IMC sigue siendo útil</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                A pesar de sus limitaciones, el IMC sigue siendo una herramienta valiosa en ciertos contextos:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Primera detección rápida</strong>: identificar personas que necesitan un examen más completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Estudios epidemiológicos</strong>: comparar poblaciones a gran escala</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Seguimiento individual</strong>: observar la evolución de su peso en el tiempo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Adulto sedentario promedio</strong>: para esta población, el IMC es bastante fiable</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Indigenous populations and ethnic-specific BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Globe className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Poblaciones indigenas y umbrales de IMC etnicos en America Latina</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Una de las limitaciones mas criticas del IMC en America Latina es su <strong>inadecuacion para poblaciones indigenas y mestizas</strong> que representan una proporcion significativa de la poblacion regional. El <strong>INCMNSZ</strong> (Instituto Nacional de Ciencias Medicas y Nutricion Salvador Zubiran) de Mexico ha liderado investigaciones pioneras demostrando que los umbrales estandar de la OMS (25 para sobrepeso, 30 para obesidad) no reflejan el riesgo metabolico real en estas poblaciones. Estudios del INCMNSZ publicados en revistas como <em>Salud Publica de Mexico</em> y <em>The Lancet Diabetes &amp; Endocrinology</em> sugieren que los <strong>puntos de corte deberian reducirse a 23 para sobrepeso y 27 para obesidad</strong> en poblaciones indigenas mexicanas, similar al ajuste que la OMS ya recomienda para poblaciones asiaticas.
              </p>
              <p>
                Los <strong>Pima de Sonora</strong> (Mexico) constituyen uno de los casos mas estudiados a nivel mundial. Esta comunidad indigena presenta una de las <strong>tasas mas altas de diabetes tipo 2 del planeta</strong> (prevalencia superior al 50% en adultos mayores de 35 anos), con un componente genetico de resistencia a la insulina que se manifiesta a niveles de IMC considerados "normales" por los estandares internacionales. El <strong>Instituto Nacional Indigenista</strong> y el <strong>IMSS-BIENESTAR</strong> (programa de salud para comunidades rurales e indigenas) han documentado que un Pima con IMC de 24 puede presentar el mismo riesgo metabolico que un europeo con IMC de 30. Los <strong>mayas de Yucatan</strong> presentan un patron diferente: su constitucion corporal compacta (estatura promedio de 1,55 m en mujeres y 1,62 m en hombres) produce IMC naturalmente mas elevados por la relacion matematica peso/talla cuadrada, sin que esto implique necesariamente exceso de grasa.
              </p>
              <p>
                En la <strong>region andina</strong>, las poblaciones <strong>quechua</strong> y <strong>aymara</strong> de Peru, Bolivia y Ecuador presentan adaptaciones fisiologicas a la altitud (torax amplio, mayor volumen pulmonar, hemoglobina elevada) que incrementan la densidad corporal y, por tanto, el IMC. Investigaciones del <strong>Instituto Nacional de Salud del Peru</strong> y de la <strong>Universidad Mayor de San Andres</strong> (Bolivia) han mostrado que estas poblaciones andinas tienen una <strong>composicion corporal distinta</strong>: mayor proporcion de masa magra en el torax, menor grasa subcutanea pero mayor grasa visceral a IMC equivalentes. La <strong>OPS</strong> ha reconocido la necesidad de desarrollar tablas de referencia regionales, pero hasta la fecha no se han adoptado oficialmente umbrales de IMC diferenciados para poblaciones indigenas latinoamericanas, una brecha que investigadores del INCMNSZ, del <strong>Instituto de Nutricion de Centroamerica y Panama (INCAP)</strong> y de universidades andinas continuan trabajando por cerrar.
              </p>
            </div>
          </div>

          {/* Poblaciones donde el IMC falla */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Users className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Poblaciones donde el IMC falla de manera sistemática</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Si bien la sección anterior aborda grupos generales, es importante profundizar en <strong>casos concretos donde el IMC produce resultados engañosos</strong> que pueden llevar a decisiones clínicas erróneas. Estas situaciones son especialmente relevantes en el contexto hispanohablante, donde la diversidad corporal y cultural exige una mirada más matizada que la simple fórmula peso dividido por talla al cuadrado.
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">Deportistas de élite y recreativos</h3>
              <p>
                En España, la <strong>Agencia Española de Protección de la Salud en el Deporte (AEPSAD)</strong> ha documentado que más del 60% de los futbolistas de La Liga presentan un IMC superior a 25, clasificándolos técnicamente como personas con sobrepeso. Un ejemplo emblemático: un defensa central de 1,88 m y 85 kg tiene un IMC de 24,1 (normal), mientras que un centrocampista de 1,70 m y 75 kg, con un porcentaje de grasa del 9%, alcanza un IMC de 26,0 (sobrepeso). En América Latina, los estudios del <strong>Centro de Alto Rendimiento (CAR) de México</strong> muestran resultados similares: luchadores olímpicos, levantadores de pesas y jugadores de rugby presentan IMC de 28 a 32 con porcentajes de grasa inferiores al 15%. El problema no se limita a los atletas de élite: cualquier persona que practique musculación tres o más veces por semana durante más de un año puede ver su IMC desplazado 2 a 4 puntos por encima de lo que su composición corporal real indicaría.
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">Adultos mayores de 65 años y sarcopenia</h3>
              <p>
                La <strong>sarcopenia</strong> (pérdida progresiva de masa muscular asociada al envejecimiento) es un problema de salud pública que afecta al 10-30% de las personas mayores de 65 años en España según la <strong>Sociedad Española de Geriatría y Gerontología (SEGG)</strong>. Esta condición distorsiona el IMC de forma peligrosa: una persona de 75 años puede mantener un IMC de 22 (aparentemente normal) mientras ha perdido 8 kg de músculo y ganado 8 kg de grasa. En México, el estudio <strong>ENSANUT 2018-19</strong> reveló que el 17% de los adultos mayores clasificados con IMC normal presentaban en realidad obesidad sarcopénica cuando se medía su composición corporal. La <strong>Sociedad Latinoamericana de Sarcopenia (SLS)</strong> recomienda que todo adulto mayor con IMC inferior a 27 pero con circunferencia de pantorrilla inferior a 31 cm sea evaluado con métodos complementarios. En esta población, paradójicamente, un IMC ligeramente elevado (25-27) se asocia con <strong>menor mortalidad</strong>, un fenómeno conocido como la "paradoja de la obesidad en el anciano".
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">Mujeres embarazadas y periodo posparto</h3>
              <p>
                Durante el embarazo, el IMC pierde toda su validez como indicador de salud. La ganancia de peso recomendada varía según el IMC pregestacional: entre 12,5 y 18 kg para mujeres con IMC previo inferior a 18,5, entre 11,5 y 16 kg para IMC normal, y entre 5 y 9 kg para mujeres con obesidad previa. En España, el protocolo de la <strong>SEGO (Sociedad Española de Ginecología y Obstetricia)</strong> utiliza el IMC únicamente como referencia previa al embarazo. Sin embargo, en muchos centros de atención primaria de América Latina, el IMC sigue calculándose rutinariamente durante el embarazo sin la contextualización adecuada, generando ansiedad innecesaria. En el posparto, el IMC puede tardar de 6 a 12 meses en estabilizarse, especialmente durante la lactancia materna, por lo que su uso como indicador durante este periodo también es cuestionable.
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">Diversidad étnica en América Latina</h3>
              <p>
                América Latina es una de las regiones más diversas genéticamente del mundo. Las poblaciones <strong>afrodescendientes</strong> del Caribe colombiano, la costa ecuatoriana y Brasil presentan generalmente mayor masa muscular y densidad ósea, lo que eleva el IMC sin implicar mayor adiposidad. En contraste, las poblaciones <strong>indígenas mesoamericanas</strong> (zapotecas, mixtecos, nahuas) tienden a tener estaturas más bajas y torsos proporcionalmente más anchos, lo que distorsiona la fórmula del IMC. La población <strong>mestiza</strong>, mayoritaria en países como México, Colombia y Perú, presenta una variabilidad genética tan amplia que aplicar un único umbral de IMC resulta inadecuado. El <strong>INCAP (Instituto de Nutrición de Centroamérica y Panamá)</strong> ha propuesto que se desarrollen curvas de referencia regionales, pero estas aún no se han implementado en la práctica clínica cotidiana.
              </p>
            </div>
          </div>

          {/* Alternativas al IMC más precisas */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternativas al IMC más precisas</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La comunidad científica dispone actualmente de múltiples herramientas que superan las limitaciones del IMC. Algunas son accesibles en cualquier hogar, mientras que otras requieren equipamiento especializado disponible en centros de salud y hospitales.
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">Perímetro de cintura: la medida más sencilla y reveladora</h3>
              <p>
                El <strong>perímetro de cintura</strong> (o circunferencia abdominal) es el complemento más recomendado por las guías clínicas españolas y latinoamericanas. Se mide con una cinta métrica flexible a la altura del ombligo, sin comprimir la piel. Los umbrales de riesgo cardiovascular establecidos por la <strong>Federación Internacional de Diabetes (IDF)</strong> y adoptados por la sanidad española son: menos de 94 cm para hombres y menos de 80 cm para mujeres europeas. Sin embargo, para poblaciones latinoamericanas, la IDF recomienda utilizar los <strong>umbrales del Sudeste Asiático</strong> (90 cm para hombres, 80 cm para mujeres) debido a los perfiles metabólicos similares observados en estudios comparativos. En España, la <strong>Encuesta Nacional de Salud (ENSE)</strong> incluye esta medición desde 2006, y se puede realizar gratuitamente en cualquier consulta de atención primaria del Sistema Nacional de Salud (SNS). La ventaja principal del perímetro de cintura es que detecta específicamente la <strong>grasa visceral</strong>, que es la más peligrosa para la salud cardiovascular y metabólica.
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">Índice cintura-estatura (ICE): simple y universal</h3>
              <p>
                El <strong>índice cintura-estatura</strong> (ICE, o waist-to-height ratio en inglés) se calcula dividiendo el perímetro de cintura entre la talla. Su principal ventaja es que utiliza un <strong>punto de corte único e independiente del sexo, la edad y la etnia: 0,5</strong>. Esto significa que su cintura no debería superar la mitad de su estatura. Si mide 1,70 m, su cintura no debería exceder los 85 cm. Estudios publicados en la <em>Revista Española de Cardiología</em> y en la <em>Revista Médica de Chile</em> han demostrado que el ICE predice mejor el riesgo de enfermedad cardiovascular que el IMC en poblaciones hispanas. Un metaanálisis de 2020 que incluyó datos de España, México, Chile y Colombia concluyó que el ICE tiene una <strong>sensibilidad del 87% y especificidad del 75%</strong> para detectar riesgo cardiometabólico, frente al 65% y 60% del IMC respectivamente. Además, su simplicidad lo hace ideal para campañas de salud pública: basta una cinta métrica y conocer la propia estatura.
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">Porcentaje de grasa corporal</h3>
              <p>
                El <strong>porcentaje de grasa corporal</strong> es probablemente el indicador más preciso del estado de composición corporal. Los rangos saludables varían según sexo y edad: para hombres adultos, entre el 10% y el 20% es considerado saludable (con menos del 25% como umbral de obesidad), y para mujeres adultas, entre el 18% y el 28% (con menos del 35% como umbral). Existen varias tecnologías para medirlo, desde las más accesibles hasta las más precisas. Las <strong>básculas de bioimpedancia eléctrica (BIA)</strong> son las más accesibles: disponibles en farmacias, gimnasios y centros de salud por toda España y América Latina, utilizan una corriente eléctrica imperceptible para estimar la composición corporal. Su margen de error es de 3-5%, aceptable para seguimiento personal. En España, muchos centros de atención primaria del SNS disponen de equipos de bioimpedancia que los médicos de familia pueden utilizar de forma gratuita para el paciente.
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">DEXA (Absorciometría Dual de Rayos X)</h3>
              <p>
                La <strong>DEXA</strong> es considerada el estándar de oro para medir la composición corporal. Proporciona datos precisos sobre masa grasa, masa magra y densidad ósea, incluso distinguiendo grasa visceral de subcutánea por regiones corporales. En España, está disponible en la mayoría de hospitales públicos, aunque generalmente se reserva para indicaciones específicas (osteoporosis, seguimiento de pacientes con obesidad mórbida). En el ámbito privado, una exploración DEXA cuesta entre 80 y 150 euros en España y entre 1.000 y 3.000 pesos mexicanos. En Argentina, Chile y Colombia, su disponibilidad ha aumentado considerablemente en los últimos años, especialmente en clínicas deportivas y centros de nutrición avanzada.
              </p>
            </div>
          </div>

          {/* El IMC en el contexto español y latinoamericano */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">El IMC en el contexto español y latinoamericano</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El uso institucional del IMC varía significativamente entre España y los distintos países de América Latina. Comprender cómo cada sistema sanitario integra (y limita) este indicador es fundamental para interpretar correctamente los resultados de una calculadora de IMC.
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">España: la ENSE 2017 y el Sistema Nacional de Salud</h3>
              <p>
                La <strong>Encuesta Nacional de Salud de España (ENSE) 2017</strong>, publicada por el Ministerio de Sanidad y el INE, reveló que el 54,5% de la población adulta española presentaba exceso de peso (37,1% sobrepeso + 17,4% obesidad) según el IMC. Sin embargo, cuando se complementó con la medición del perímetro de cintura, se descubrió que un 20% adicional de personas con IMC normal presentaba <strong>obesidad abdominal</strong>, lo que se conoce como "personas con peso normal pero metabólicamente obesas" (MONW, por sus siglas en inglés). Estos datos impulsaron un cambio en las recomendaciones del SNS: desde 2019, la <strong>Estrategia NAOS</strong> (Nutrición, Actividad Física y Prevención de la Obesidad) recomienda explícitamente que los profesionales de atención primaria midan el perímetro de cintura además del IMC en toda consulta de control de peso. Actualmente, el <strong>protocolo de derivación a endocrinología</strong> en la mayoría de comunidades autónomas utiliza el IMC como criterio primario (derivación a partir de IMC 35, o IMC 30 con comorbilidades), pero cada vez más comunidades como Cataluña, País Vasco y Andalucía están incorporando el perímetro de cintura y marcadores metabólicos como criterios complementarios.
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">México: la NOM-008-SSA3-2017 como modelo regional</h3>
              <p>
                México representa un caso particularmente avanzado en la regulación del uso del IMC. La <strong>Norma Oficial Mexicana NOM-008-SSA3-2017</strong>, que establece los criterios para el tratamiento integral del sobrepeso y la obesidad, es una de las pocas normativas nacionales en el mundo que <strong>exige explícitamente la medición del perímetro de cintura junto al IMC</strong> como parte de la evaluación nutricional obligatoria. Esta norma establece que ningún profesional de la salud debe diagnosticar sobrepeso u obesidad basándose únicamente en el IMC, y define umbrales de riesgo específicos para la población mexicana. La <strong>ENSANUT (Encuesta Nacional de Salud y Nutrición)</strong> de México utiliza ambos indicadores desde su edición de 2006, lo que ha permitido documentar que la prevalencia de obesidad abdominal en México (75% en mujeres y 65% en hombres adultos) es significativamente mayor que lo que sugiere el IMC solo. El <strong>IMSS (Instituto Mexicano del Seguro Social)</strong> y el <strong>ISSSTE</strong> han implementado protocolos donde la combinación de IMC superior a 25 con perímetro de cintura por encima de los umbrales activa automáticamente una evaluación metabólica completa que incluye glucemia, perfil lipídico y presión arterial.
              </p>

              <h3 className="text-lg font-bold text-foreground pt-2">Perspectivas latinoamericanas: ALAD y consensos regionales</h3>
              <p>
                La <strong>Asociación Latinoamericana de Diabetes (ALAD)</strong> ha sido pionera en cuestionar la aplicabilidad universal del IMC en la región. En su <strong>Consenso de Prediabetes 2017</strong> y actualizaciones posteriores, ALAD recomienda que para poblaciones latinoamericanas se utilice un umbral de <strong>IMC 23 (en lugar de 25)</strong> como punto de corte para iniciar el cribado de diabetes, reconociendo que el riesgo metabólico comienza a niveles más bajos en estas poblaciones. Además, ALAD propone el uso combinado del IMC con el perímetro de cintura y el índice cintura-estatura como "tridente diagnóstico" para la evaluación del riesgo cardiometabólico. En Chile, el <strong>Ministerio de Salud (MINSAL)</strong> incluye desde 2014 la medición de cintura en el Examen Médico Preventivo del Adulto (EMPA). En Colombia, la <strong>Resolución 2465 de 2016</strong> del Ministerio de Salud establece indicadores antropométricos múltiples para la clasificación nutricional. En Argentina, la <strong>Sociedad Argentina de Nutrición (SAN)</strong> recomienda desde 2018 que el IMC se interprete siempre junto con al menos un indicador de distribución de grasa. Estas iniciativas regionales reflejan un <strong>consenso creciente</strong>: el IMC solo no es suficiente para evaluar el estado nutricional y el riesgo de salud en las diversas poblaciones latinoamericanas, y debe complementarse sistemáticamente con mediciones de adiposidad central.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprender las limitaciones del IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Las <strong>limitaciones del IMC</strong> son numerosas y bien documentadas por la comunidad científica.
                Este <strong>IMC crítico</strong> no debe interpretarse solo. Los <strong>defectos del IMC</strong>
                incluyen la incapacidad de diferenciar masa grasa y masa magra.
              </p>
              <p>
                <strong>¿Por qué el IMC es imperfecto</strong>? Porque se trata de una simple relación matemática.
                Los <strong>problemas del IMC</strong> son particularmente visibles en deportistas,
                niños y personas mayores. El <strong>IMC fiable o no</strong> depende del contexto de uso.
              </p>
              <p>
                Las <strong>alternativas al IMC</strong> como el perímetro de cintura o el porcentaje de masa grasa
                ofrecen una visión más completa. <strong>¿Es fiable el IMC</strong> para todo el mundo?
                No, pero combinado con otros indicadores, sigue siendo una herramienta de detección útil.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule su IMC con conocimiento de causa</h3>
            <p className="text-muted-foreground mb-6">
              Ahora que conoce las limitaciones, use nuestra calculadora como un primer indicador
            </p>
            <Link
              to="/es/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcular mi IMC
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

export default LimitacionesIMC;
