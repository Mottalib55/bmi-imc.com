import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2, BookOpen, Globe, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const SaludPeso = () => {
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
            Salud y bienestar
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Salud y Peso</span> : Guía de Nutrición y Bienestar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprender la relación entre peso, IMC y salud global
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso y salud: una relación compleja</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>peso</strong> es solo un indicador entre otros de su estado de salud.
                Un <strong>peso saludable</strong> depende de numerosos factores: genética, morfología, actividad física,
                alimentación, sueño y bienestar mental.
              </p>
              <p>
                La obsesión por la cifra en la báscula puede ser contraproducente. Es más importante
                concentrarse en <strong>hábitos de vida saludables</strong> que en un peso objetivo preciso.
                La salud no se mide únicamente en kilogramos.
              </p>
            </div>
          </div>

          {/* Health Risks */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Riesgos relacionados con el peso</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Riesgos del sobrepeso y la obesidad</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Enfermedades cardiovasculares (infarto, ACV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Diabetes tipo 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Hipertensión arterial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Apnea del sueño</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Ciertos cánceres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Problemas articulares</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Riesgos de la insuficiencia ponderal</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Carencias nutricionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Sistema inmunitario debilitado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Osteoporosis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Trastornos hormonales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Fatiga crónica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Problemas de fertilidad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillars of health */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Los 5 pilares de un peso saludable</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Alimentación</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Privilegie alimentos no procesados</li>
                  <li>Coma verduras en cada comida</li>
                  <li>Limite los azúcares añadidos</li>
                  <li>Hidrátese suficientemente</li>
                  <li>Escuche su hambre y saciedad</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Actividad física</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 min de actividad moderada/semana</li>
                  <li>Incluya fortalecimiento muscular</li>
                  <li>Muévase regularmente durante el día</li>
                  <li>Encuentre una actividad que le guste</li>
                  <li>Progrese gradualmente</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Sueño</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Duerma 7-9 horas por noche</li>
                  <li>Horarios regulares</li>
                  <li>Evite pantallas antes de dormir</li>
                  <li>Habitación fresca y oscura</li>
                  <li>La falta de sueño favorece el aumento de peso</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Salud mental</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Gestione su estrés</li>
                  <li>Evite la alimentación emocional</li>
                  <li>Practique la atención plena</li>
                  <li>Acepte su cuerpo</li>
                  <li>Consulte si es necesario</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Seguimiento médico</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Balance de salud anual</li>
                  <li>Seguimiento del perímetro de cintura</li>
                  <li>Control tensión, glucemia, colesterol</li>
                  <li>Consulte un nutricionista si es necesario</li>
                  <li>No siga dietas extremas</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Progresión</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Fije objetivos realistas</li>
                  <li>Máximo 0,5-1 kg/semana</li>
                  <li>Celebre las pequeñas victorias</li>
                  <li>La constancia prevalece sobre la intensidad</li>
                  <li>Piense a largo plazo</li>
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
              <h2 className="text-2xl font-display font-bold">Consejos para un peso saludable</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">Lo que funciona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Cambios <strong>progresivos y duraderos</strong> de hábitos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Alimentación <strong>equilibrada</strong>, sin restricción extrema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Actividad física <strong>regular y placentera</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Sueño de <strong>calidad</strong> (7-8h/noche)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Gestión del <strong>estrés</strong> y las emociones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Seguimiento por un <strong>profesional</strong> si es necesario</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">Lo que no funciona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Dietas <strong>drásticas</strong> y restrictivas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Complementos <strong>milagrosos</strong> y píldoras adelgazantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Pesarse <strong>todos los días</strong> (variaciones normales)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Objetivos de pérdida de peso <strong>irrealistas</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Comparar su cuerpo con <strong>otros</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignorar las señales de <strong>hambre/saciedad</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Panorama en América Latina y España */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Obesidad y sobrepeso en el mundo hispanohablante</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                América Latina y España enfrentan una <strong>crisis de obesidad sin precedentes</strong>. Según la
                Organización Panamericana de la Salud (OPS/PAHO), más del 60&nbsp;% de la población adulta de la región
                presenta sobrepeso u obesidad, y la tendencia sigue al alza. Este fenómeno no responde a una sola causa:
                la urbanización acelerada, la mayor disponibilidad de alimentos ultraprocesados, el sedentarismo y la
                desigualdad socioeconómica se combinan para crear un escenario alarmante.
              </p>
              <p>
                <strong>México</strong> ocupa uno de los primeros lugares en obesidad adulta de toda América Latina.
                Según la Encuesta Nacional de Salud y Nutrición (ENSANUT), el 36,1&nbsp;% de los adultos mexicanos padece
                obesidad y un 38,3&nbsp;% adicional tiene sobrepeso. Esto significa que casi tres de cada cuatro mexicanos
                se encuentran por encima de un peso saludable. La diabetes tipo 2, estrechamente ligada al exceso de peso,
                se ha convertido en la primera causa de muerte en el país, con más de 150&nbsp;000 fallecimientos anuales.
                El Instituto Mexicano del Seguro Social (IMSS) destina una proporción creciente de su presupuesto al
                tratamiento de enfermedades crónicas asociadas a la obesidad.
              </p>
              <p>
                En <strong>España</strong>, los datos de la Agencia Española de Seguridad Alimentaria y Nutrición (AESAN)
                indican que alrededor del 16&nbsp;% de la población adulta es obesa y un 37&nbsp;% tiene sobrepeso,
                cifras inferiores a las latinoamericanas pero igualmente preocupantes. Sin embargo, las comunidades
                autónomas del sur (Andalucía, Canarias, Extremadura) presentan tasas significativamente más altas que el
                norte del país, lo que pone de manifiesto la influencia del nivel socioeconómico y el acceso a alimentos
                frescos sobre el peso corporal.
              </p>
              <p>
                En <strong>Argentina</strong>, la cuarta Encuesta Nacional de Factores de Riesgo reveló que el 61,6&nbsp;%
                de la población adulta tiene exceso de peso. Argentina es, además, uno de los mayores consumidores de carne
                vacuna per cápita del mundo, con un promedio histórico superior a los 50&nbsp;kg por persona al año. Si
                bien la carne aporta proteínas de alta calidad y hierro, el consumo excesivo de cortes grasos —como el
                asado con hueso o la entraña— se asocia a un mayor riesgo cardiovascular, especialmente cuando la ingesta
                de fibra vegetal, frutas y legumbres es insuficiente.
              </p>
              <p>
                <strong>Chile</strong>, <strong>Colombia</strong> y <strong>Perú</strong> experimentan también un
                crecimiento sostenido del sobrepeso. En Chile, las cifras superan el 74&nbsp;% de la población adulta con
                exceso de peso. En Colombia, la Encuesta Nacional de Situación Nutricional (ENSIN) sitúa la prevalencia
                combinada de sobrepeso y obesidad en torno al 56&nbsp;% de los adultos. En Perú, el sistema público
                EsSalud atiende cada año más casos de síndrome metabólico entre pacientes jóvenes, una tendencia que era
                impensable hace dos décadas.
              </p>
            </div>
          </div>

          {/* Doble carga nutricional */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <Users className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">La doble carga nutricional: desnutrición y obesidad en convivencia</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Uno de los fenómenos más característicos de América Latina es la <strong>doble carga nutricional</strong>:
                la coexistencia, a menudo dentro de un mismo hogar, de personas con desnutrición y personas con obesidad.
                La OPS ha documentado extensamente esta paradoja. Una madre con sobrepeso puede tener hijos con retraso
                en el crecimiento, porque ambos problemas comparten la misma raíz: una alimentación de baja calidad
                nutricional, rica en calorías vacías pero pobre en micronutrientes esenciales.
              </p>
              <p>
                En comunidades rurales de Guatemala, Bolivia o el sur de México, la desnutrición crónica infantil convive
                con un aumento acelerado de la obesidad en adultos. Las familias que durante generaciones dependieron de
                una dieta basada en <strong>maíz, frijol y quelites</strong> —nutricionalmente equilibrada— han ido
                sustituyendo estos alimentos tradicionales por refrescos, galletas industriales y sopas instantáneas, que
                son más baratos y más accesibles en las tiendas locales. Este proceso, conocido como <strong>transición
                nutricional</strong>, afecta desproporcionadamente a las poblaciones más vulnerables.
              </p>
              <p>
                Los Ministerios de Salud de la región reconocen que combatir la obesidad sin abordar simultáneamente la
                desnutrición resulta insuficiente. Programas como «Hambre Cero» en Brasil, las transferencias
                condicionadas de PROSPERA en México o el Programa de Alimentación Complementaria (PACAM) en Chile
                intentan atacar ambos problemas de manera integrada, aunque los resultados varían enormemente según el
                contexto local.
              </p>
            </div>
          </div>

          {/* Políticas públicas pioneras */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <BookOpen className="w-6 h-6 text-emerald-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Políticas públicas pioneras en el mundo hispano</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                América Latina se ha convertido en un <strong>laboratorio mundial de políticas contra la obesidad</strong>,
                con varias iniciativas que hoy son referencia internacional.
              </p>
              <h4 className="font-bold text-foreground pt-2">El impuesto a las bebidas azucaradas en México</h4>
              <p>
                En 2014, México implementó un impuesto de un peso por litro a las bebidas azucaradas. Los estudios
                publicados por el Instituto Nacional de Salud Pública (INSP) mostraron que, tras dos años de aplicación,
                el consumo de estas bebidas se redujo en promedio un 7,6&nbsp;%, con caídas de hasta el 11,7&nbsp;% en los
                hogares de menor ingreso. Aunque el impuesto no ha revertido por sí solo la epidemia de obesidad, sentó un
                precedente que han seguido más de 40 países en el mundo. La recaudación se destina, en teoría, a instalar
                bebederos de agua potable en escuelas públicas, mejorando así el acceso al agua como alternativa saludable.
              </p>
              <h4 className="font-bold text-foreground pt-2">La Ley de Etiquetado de Chile: un modelo global</h4>
              <p>
                Chile aprobó en 2016 la <strong>Ley 20.606 de Composición Nutricional de los Alimentos</strong>, que
                introdujo los sellos octagonales negros de advertencia («ALTO EN» azúcares, grasas saturadas, sodio o
                calorías) en los envases de productos que superan ciertos umbrales. La ley también prohibió la publicidad
                de estos productos dirigida a menores de 14 años y su venta dentro de los establecimientos educativos.
                Los resultados han sido notables: según estudios de la Universidad de Chile y del INTA, el consumo de
                bebidas azucaradas se redujo un 25&nbsp;% y la compra de cereales con exceso de azúcar cayó un 14&nbsp;%
                en los primeros 18 meses. Este modelo fue adoptado posteriormente por México, Perú, Uruguay y Colombia,
                con adaptaciones locales.
              </p>
              <h4 className="font-bold text-foreground pt-2">La Estrategia NAOS en España</h4>
              <p>
                España lanzó en 2005 la <strong>Estrategia para la Nutrición, Actividad Física y Prevención de la
                Obesidad (NAOS)</strong>, coordinada por la AESAN. Sus ejes principales incluyen la promoción de la
                actividad física escolar, la regulación de la publicidad alimentaria infantil, la mejora de la oferta
                alimentaria en máquinas expendedoras de centros educativos y la difusión de la dieta mediterránea como
                modelo alimentario saludable. Aunque los resultados a largo plazo han sido modestos frente a la magnitud
                del problema, España sigue siendo uno de los pocos países europeos con una tasa de obesidad adulta
                inferior al 20&nbsp;%, en parte gracias a la persistencia cultural de la <strong>dieta
                mediterránea</strong>, rica en aceite de oliva, legumbres, pescado, frutas y verduras de temporada.
              </p>
              <h4 className="font-bold text-foreground pt-2">Etiquetado frontal en la región</h4>
              <p>
                Además de Chile y México, Perú implementó su propia ley de etiquetado octagonal en 2019, y Colombia
                adoptó un sistema similar en 2023. Argentina aprobó la Ley de Promoción de la Alimentación Saludable
                en 2021, incorporando sellos negros octagonales y restricciones publicitarias. Uruguay y Ecuador han
                desarrollado sus propios sistemas de advertencia frontal. Cada vez más, la evidencia muestra que estos
                sistemas ayudan a los consumidores a tomar decisiones más informadas y presionan a la industria a
                reformular sus productos reduciendo azúcar, sodio y grasas saturadas.
              </p>
            </div>
          </div>

          {/* Tradiciones alimentarias y salud */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-rose-500/10">
                <Apple className="w-6 h-6 text-rose-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tradiciones alimentarias del mundo hispano y su valor nutricional</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El patrimonio culinario hispanoamericano posee un enorme potencial para una alimentación saludable, siempre
                que se rescaten las preparaciones tradicionales frente a las versiones industrializadas.
              </p>
              <p>
                La base alimentaria mesoamericana de <strong>maíz, frijol y calabaza</strong> (la «milpa») constituye una
                combinación nutricionalmente completa: el maíz aporta energía, el frijol complementa con proteínas y
                lisina, y la calabaza contribuye vitaminas y minerales. La <strong>tortilla de maíz nixtamalizado</strong>,
                preparada de forma artesanal, es una fuente relevante de calcio y fibra, muy distinta de las tortillas
                industriales hechas con harina refinada. En México, los <strong>nopales</strong>, los <strong>quelites</strong>
                y el <strong>amaranto</strong> son superalimentos ancestrales que la ciencia moderna ha revalorizado por su
                alto contenido de fibra, antioxidantes y proteína vegetal.
              </p>
              <p>
                En <strong>Perú</strong>, el <strong>ceviche</strong> —pescado crudo marinado en jugo de limón con cebolla
                y ají— es un plato de alta densidad nutricional y bajo en grasas cuando se prepara de forma tradicional.
                La <strong>quinua</strong>, originaria de los Andes, es reconocida mundialmente como un pseudocereal
                completo. Los <strong>tubérculos andinos</strong> como la papa nativa, la oca y la mashua aportan una
                diversidad de carbohidratos complejos y fitoquímicos protectores. Perú cuenta con más de 3&nbsp;000
                variedades de papa, un patrimonio genético único.
              </p>
              <p>
                En <strong>España</strong>, la <strong>dieta mediterránea</strong> —declarada Patrimonio Inmaterial de la
                Humanidad por la UNESCO en 2010— se asocia consistentemente con menor riesgo cardiovascular, menor
                incidencia de diabetes tipo 2 y mayor longevidad. Sus pilares son el <strong>aceite de oliva virgen
                extra</strong>, las legumbres (lentejas, garbanzos, judías), el pescado azul, las frutas y hortalizas
                frescas, los frutos secos y el consumo moderado de vino tinto. El estudio PREDIMED, uno de los ensayos
                clínicos más grandes del mundo sobre dieta, demostró que la dieta mediterránea suplementada con aceite de
                oliva virgen extra o frutos secos reduce un 30&nbsp;% los eventos cardiovasculares mayores.
              </p>
              <p>
                En <strong>Argentina</strong>, el <strong>mate</strong> es mucho más que una infusión social: la yerba mate
                contiene polifenoles, xantinas y saponinas con efectos antioxidantes y termogénicos documentados. Cuando se
                consume sin azúcar añadida, puede contribuir al control del peso. Sin embargo, el asado argentino —clave
                de la identidad cultural— requiere moderación: la Sociedad Argentina de Nutrición recomienda limitar el
                consumo de carne roja a no más de tres veces por semana e incluir mayor proporción de ensaladas, legumbres
                y verduras grilladas en la parrillada.
              </p>
            </div>
          </div>

          {/* Sistemas de salud y acceso */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-violet-500/10">
                <Stethoscope className="w-6 h-6 text-violet-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Sistemas de salud y acceso al tratamiento de la obesidad</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El acceso al tratamiento de la obesidad varía enormemente en el mundo hispanohablante, dependiendo de la
                estructura del sistema de salud de cada país.
              </p>
              <p>
                En <strong>México</strong>, el IMSS (Instituto Mexicano del Seguro Social) cubre a más de 80 millones de
                derechohabientes y ofrece consultas de nutrición, pero la demanda supera ampliamente la capacidad: se
                estima que hay menos de un nutriólogo por cada 10&nbsp;000 asegurados. El ISSSTE y el sistema público
                INSABI/IMSS-Bienestar atienden al resto de la población, aunque con recursos aún más limitados. La
                cirugía bariátrica, recomendada para pacientes con obesidad severa (IMC {"\u2265"} 40 o {"\u2265"} 35 con
                comorbilidades), está disponible en hospitales de tercer nivel, pero las listas de espera pueden superar
                los dos años.
              </p>
              <p>
                En <strong>Chile</strong>, el FONASA (Fondo Nacional de Salud) y las ISAPRE (aseguradoras privadas) cubren
                diferentes segmentos de la población. Chile fue pionero en incluir la cirugía bariátrica dentro de las
                Garantías Explícitas en Salud (GES) para ciertos pacientes, facilitando el acceso. Además, los centros de
                atención primaria (CESFAM) ofrecen programas de control de peso con equipos multidisciplinarios que
                incluyen médico, nutricionista, psicólogo y kinesiólogo.
              </p>
              <p>
                En <strong>España</strong>, el Sistema Nacional de Salud (SNS) garantiza cobertura universal, y los
                centros de atención primaria disponen de enfermería comunitaria que realiza seguimiento nutricional. Sin
                embargo, las derivaciones a endocrinología o a unidades de obesidad hospitalarias pueden tardar meses.
                Las comunidades autónomas con mayor prevalencia de obesidad son, paradójicamente, las que tienen menos
                recursos especializados, lo que agrava las desigualdades en salud.
              </p>
              <p>
                En <strong>Perú</strong>, EsSalud y el Sistema Integral de Salud (SIS) cubren conjuntamente a la
                mayoría de la población, pero la infraestructura en zonas rurales y periurbanas sigue siendo insuficiente
                para abordar la creciente epidemia de enfermedades crónicas. Los programas de prevención de la obesidad
                están concentrados en Lima y las principales ciudades, dejando desatendidas a comunidades donde la
                transición nutricional avanza con rapidez.
              </p>
              <p>
                En toda la región, la OPS recomienda fortalecer la <strong>atención primaria de salud</strong> como eje
                del abordaje de la obesidad, capacitar a los equipos de salud comunitaria en consejería nutricional,
                y ampliar la cobertura de tratamientos basados en evidencia, incluyendo la terapia conductual, la
                farmacoterapia y, cuando esté indicada, la cirugía metabólica. La prevención desde la infancia, mediante
                entornos escolares saludables, regulación de la publicidad y educación alimentaria, sigue siendo la
                estrategia más costo-efectiva a largo plazo.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Salud y peso: lo esencial</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Mantener un <strong>peso saludable</strong> es importante para su bienestar global. La relación
                entre <strong>peso y salud</strong> es compleja y depende de numerosos factores. El <strong>IMC</strong>
                es solo un indicador entre otros para evaluar si está en una zona de peso saludable.
              </p>
              <p>
                Para <strong>perder peso de manera saludable</strong> o <strong>mantener su peso</strong>, privilegie un
                enfoque global: alimentación equilibrada, actividad física regular, sueño suficiente y
                gestión del estrés. Evite las dietas yo-yo que son perjudiciales para la salud.
              </p>
              <p>
                Un <strong>estilo de vida saludable</strong> es más importante que una cifra en la báscula. Concéntrese
                en los <strong>hábitos de vida</strong> más que en el peso. En caso de duda, consulte a un
                profesional de la salud para un acompañamiento personalizado.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule su IMC</h3>
            <p className="text-muted-foreground mb-6">
              Primer indicador para evaluar su peso saludable
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

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Salud y Peso - Guía de bienestar</p>
        </footer>
      </div>
    </div>
  );
};

export default SaludPeso;
