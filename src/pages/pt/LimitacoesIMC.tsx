import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale, Activity, Ruler, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const LimitacoesIMC = () => {
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
            As limitações do IMC
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">Limitações do IMC</span> : O que o IMC Não Revela
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Por que o IMC não é um indicador perfeito e quando ele pode ser enganoso
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">O IMC é uma ferramenta de triagem, não um diagnóstico</h3>
              <p className="text-muted-foreground">
                Criado em 1832 por Adolphe Quetelet, o IMC foi concebido para estudos estatísticos de população,
                não para avaliar a saúde individual. Ele apresenta várias limitações importantes.
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
              <h2 className="text-2xl font-display font-bold">O que o IMC não mede</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">A composição corporal</h4>
                    <p className="text-sm text-muted-foreground">
                      O IMC não distingue músculo de gordura. 1 kg de músculo = 1 kg de gordura para o IMC.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">A distribuição de gordura</h4>
                    <p className="text-sm text-muted-foreground">
                      A gordura abdominal é mais perigosa que a gordura subcutânea. O IMC não vê isso.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">A densidade óssea</h4>
                    <p className="text-sm text-muted-foreground">
                      Ossos mais pesados aumentam o IMC sem impactar a saúde.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">O estado de saúde metabólica</h4>
                    <p className="text-sm text-muted-foreground">
                      Uma pessoa magra pode ter um mau perfil metabólico (colesterol, glicemia).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">A hidratação</h4>
                    <p className="text-sm text-muted-foreground">
                      A retenção de água pode aumentar temporariamente o IMC em 1 a 2 pontos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">A forma física</h4>
                    <p className="text-sm text-muted-foreground">
                      Duas pessoas com o mesmo IMC podem ter condições físicas muito diferentes.
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
              <h2 className="text-2xl font-display font-bold">Populações para as quais o IMC é inadequado</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Atletas e esportistas</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  A massa muscular elevada dá um IMC de "sobrepeso" ou "obesidade" quando o percentual de gordura é mínimo.
                </p>
                <Link to="/pt/imc-atleta" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Saiba mais →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">Crianças e adolescentes</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Os limites para adultos não se aplicam. É preciso usar as curvas de corpulência adaptadas à idade e ao sexo.
                </p>
                <Link to="/pt/imc-crianca" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Saiba mais →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">Idosos</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  A perda de massa muscular (sarcopenia) pode mascarar excesso de gordura. Um IMC "normal" pode ser enganoso.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">Gestantes</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  O ganho de peso é normal e desejável durante a gravidez. O IMC pré-gestacional serve de referência.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">Certas etnias</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  As populações asiáticas têm riscos aumentados com IMC mais baixo. A OMS propõe limites adaptados (23 em vez de 25).
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">Morfologias extremas</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pessoas muito altas ou muito baixas têm IMCs naturalmente diferentes devido à relação superfície/volume.
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
              <h2 className="text-2xl font-display font-bold">Alternativas e complementos ao IMC</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Indicador</th>
                    <th className="text-left py-3 px-4 font-bold">O que ele mede</th>
                    <th className="text-left py-3 px-4 font-bold">Limites recomendados</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Circunferência da cintura</td>
                    <td className="py-3 px-4">Gordura abdominal (visceral)</td>
                    <td className="py-3 px-4">&lt;94 cm (H) / &lt;80 cm (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Relação cintura/quadril</td>
                    <td className="py-3 px-4">Distribuição de gordura</td>
                    <td className="py-3 px-4">&lt;0,90 (H) / &lt;0,85 (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Relação cintura/altura</td>
                    <td className="py-3 px-4">Gordura central relativa</td>
                    <td className="py-3 px-4">&lt;0,5 (cintura &lt; metade da altura)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">% Gordura corporal</td>
                    <td className="py-3 px-4">Composição corporal real</td>
                    <td className="py-3 px-4">10-20% (H) / 18-28% (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">Massa magra (para atletas)</td>
                    <td className="py-3 px-4">18-25 (natural)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Impedanciometria</td>
                    <td className="py-3 px-4">Água, músculo, gordura, osso</td>
                    <td className="py-3 px-4">Varia segundo aparelho</td>
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
              <h2 className="text-2xl font-display font-bold">Quando o IMC continua útil</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Apesar de suas limitações, o IMC continua sendo uma ferramenta valiosa em certos contextos:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Primeira triagem rápida</strong>: identificar pessoas necessitando um balanço mais completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Estudos epidemiológicos</strong>: comparar populações em grande escala</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Acompanhamento individual</strong>: observar a evolução do peso ao longo do tempo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Adulto sedentário médio</strong>: para esta população, o IMC é bastante confiável</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FIOCRUZ/IBGE research on BMI limitations in mixed-race and indigenous populations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Globe className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Limitacoes do IMC na populacao brasileira: miscigenacao e povos originarios</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                A <strong>FIOCRUZ (Fundacao Oswaldo Cruz)</strong>, maior instituicao de pesquisa biomedica da America Latina, e o <strong>IBGE (Instituto Brasileiro de Geografia e Estatistica)</strong> produzem pesquisas fundamentais que evidenciam as limitacoes do IMC na populacao brasileira. O <strong>Inquerito Nacional de Saude (PNS)</strong>, conduzido pelo IBGE em parceria com o Ministerio da Saude, revela que os pontos de corte universais do IMC definidos pela OMS (18,5 / 25 / 30) foram calibrados com base em populacoes europeias e norte-americanas predominantemente caucasianas, o que levanta questoes sobre sua aplicabilidade a populacao brasileira, uma das mais miscigenadas do planeta. Pesquisadores da ENSP/FIOCRUZ (Escola Nacional de Saude Publica) demonstraram que a relacao entre IMC e risco cardiovascular varia significativamente conforme a ascendencia genetica: brasileiros com ascendencia africana tendem a apresentar maior massa muscular e densidade ossea para o mesmo IMC, enquanto brasileiros com ascendencia asiatica podem apresentar riscos metabolicos elevados com IMCs considerados "normais" pela escala convencional.
              </p>
              <p>
                O caso dos <strong>povos indigenas brasileiros</strong> e particularmente revelador da inadequacao do IMC como indicador universal de saude. O <strong>Primeiro Inquerito Nacional de Saude e Nutricao dos Povos Indigenas</strong>, coordenado pela FIOCRUZ e pela ABRASCO (Associacao Brasileira de Saude Coletiva), documentou que comunidades indigenas como os Xavante (Mato Grosso), os Guarani-Kaiowa (Mato Grosso do Sul) e os Yanomami (Amazonia) apresentam padroes de composicao corporal, estatura e distribuicao de gordura que nao se enquadram nos limiares ocidentais do IMC. Os Xavante, por exemplo, apresentam prevalencia de sobrepeso e obesidade medida pelo IMC superior a 60%, mas estudos da FIOCRUZ com bioimpedancia revelam que parte desse "excesso" se deve a uma constituicao fisica mais robusta, com tronco mais largo e membros mais curtos, que inflaciona o IMC sem necessariamente indicar risco metabolico proporcional. Em contraste, os Yanomami, historicamente um dos povos mais isolados do Brasil, apresentam IMCs medios muito baixos (em torno de 19-20), refletindo nao apenas constituicao fisica mas tambem inseguranca alimentar agravada pelo garimpo ilegal e pela devastacao ambiental. A <strong>SESAI (Secretaria Especial de Saude Indigena)</strong> e os <strong>DSEI (Distritos Sanitarios Especiais Indigenas)</strong> utilizam protocolos antropometricos adaptados, reconhecendo que o IMC isolado e insuficiente para avaliar a saude nutricional dessas populacoes.
              </p>
              <p>
                A <strong>UERJ (Universidade do Estado do Rio de Janeiro)</strong> e a <strong>USP (Universidade de Sao Paulo)</strong> lideram pesquisas sobre indicadores complementares ao IMC para a populacao brasileira miscigenada. O <strong>indice de conicidade</strong>, o <strong>indice de adiposidade corporal (BAI)</strong> e a <strong>relacao cintura-estatura</strong> sao estudados como alternativas que podem capturar melhor os riscos de saude em uma populacao com tamanha diversidade de biotipos. A propria ABESO reconhece em suas diretrizes que a aplicacao rigida dos pontos de corte do IMC no Brasil deve ser feita com ressalvas, sempre complementada por medicao da circunferencia da cintura e, quando possivel, avaliacao da composicao corporal.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Compreender as limitações do IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                As <strong>limitações do IMC</strong> são numerosas e bem documentadas pela comunidade científica.
                Este <strong>IMC crítico</strong> não deve ser interpretado sozinho. Os <strong>defeitos do IMC</strong>
                incluem a incapacidade de diferenciar massa gorda e massa magra.
              </p>
              <p>
                <strong>Por que o IMC é imperfeito</strong>? Porque se trata de uma simples relação matemática.
                Os <strong>problemas do IMC</strong> são particularmente visíveis em atletas,
                crianças e idosos. O <strong>IMC confiável ou não</strong> depende do contexto de uso.
              </p>
              <p>
                As <strong>alternativas ao IMC</strong> como a circunferência da cintura ou o percentual de gordura corporal
                oferecem uma visão mais completa. <strong>O IMC é confiável</strong> para todos?
                Não, mas combinado com outros indicadores, continua sendo uma ferramenta de triagem útil.
              </p>
            </div>
          </div>

          {/* Populations where BMI fails */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Populações onde o IMC falha</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O Brasil é um país com enorme diversidade de biotipos, práticas esportivas e composições corporais. Diversos grupos populacionais são particularmente mal avaliados pelo IMC, e compreender essas falhas é essencial para evitar diagnósticos equivocados e condutas clínicas inadequadas.
              </p>
              <p>
                <strong>Atletas brasileiros de alto rendimento</strong> representam um dos exemplos mais claros de falha do IMC. No futebol, jogadores como zagueiros e atacantes de força frequentemente apresentam IMC entre 25 e 28, classificados como "sobrepeso", apesar de possuírem percentuais de gordura corporal entre 8% e 12%. No MMA e UFC, lutadores brasileiros — que dominam categorias como peso-médio e peso-pesado — desenvolvem massa muscular densa combinada com baixo percentual de gordura, resultando em IMCs que sugerem "obesidade" quando sua composição corporal é predominantemente de massa magra. No vôlei, modalidade em que o Brasil é potência olímpica, atletas como centrais e opostos com mais de 1,95m de altura e musculatura desenvolvida apresentam IMCs elevados que não refletem qualquer risco à saúde. A Confederação Brasileira de Voleibol (CBV) e o Comitê Olímpico do Brasil (COB) já utilizam avaliações de composição corporal completas, abandonando o IMC como métrica isolada para seus atletas.
              </p>
              <p>
                <strong>Idosos e a população envelhecida do Brasil</strong> constituem outro grupo onde o IMC falha significativamente. O Brasil está passando por uma transição demográfica acelerada: a população acima de 60 anos já ultrapassa 32 milhões de pessoas, e projeções do IBGE indicam que chegará a 73 milhões em 2060. Com o envelhecimento, ocorre a <strong>sarcopenia</strong> — perda progressiva de massa muscular esquelética que pode atingir de 3% a 8% por década após os 30 anos, acelerando-se após os 60. Um idoso com sarcopenia pode apresentar um IMC classificado como "normal" (22 a 24,9), mas possuir percentual de gordura corporal acima de 30% e massa muscular perigosamente baixa. Esse fenômeno, conhecido como <strong>obesidade sarcopênica</strong>, está associado a maior risco de quedas, fraturas, perda de autonomia e mortalidade. A Sociedade Brasileira de Geriatria e Gerontologia (SBGG) recomenda que, para idosos, o IMC seja sempre complementado por medidas de força de preensão palmar (dinamometria), velocidade de marcha e circunferência da panturrilha — indicadores que capturam melhor a funcionalidade e os riscos reais dessa população.
              </p>
              <p>
                <strong>Gestantes</strong> representam uma situação em que o IMC perde completamente sua utilidade durante a gravidez. O ganho de peso gestacional inclui o feto, placenta, líquido amniótico, aumento do volume sanguíneo e retenção hídrica — nenhum desses fatores representa acúmulo de gordura patológica. O Ministério da Saúde do Brasil, por meio dos protocolos de pré-natal da Rede Cegonha, utiliza o IMC pré-gestacional apenas como ponto de referência inicial e acompanha o ganho de peso com base nas curvas de Atalah, que são específicas para gestantes. Uma mulher com IMC pré-gestacional normal (18,5 a 24,9) pode ganhar entre 11,5 e 16 kg durante a gravidez sem que isso indique qualquer problema de saúde.
              </p>
              <p>
                A <strong>diversidade étnica brasileira</strong> torna os limiares universais do IMC particularmente problemáticos. O Brasil abriga a maior população de afrodescendentes fora da África — aproximadamente 56% da população se declara preta ou parda segundo o Censo 2022 do IBGE. Estudos conduzidos pela UFBA (Universidade Federal da Bahia) e pela UFMG (Universidade Federal de Minas Gerais) demonstram que brasileiros afrodescendentes tendem a apresentar maior densidade óssea e proporcionalmente mais massa muscular para o mesmo IMC quando comparados a europeus. Isso significa que um homem negro com IMC de 27 pode ter composição corporal e risco cardiovascular equivalentes a um homem branco com IMC de 24. Por outro lado, a comunidade nipo-brasileira — concentrada principalmente em São Paulo, Paraná e Mato Grosso do Sul, totalizando cerca de 2 milhões de pessoas — apresenta riscos metabólicos aumentados com IMCs mais baixos. A Sociedade Brasileira de Diabetes (SBD) reconhece que descendentes de japoneses desenvolvem resistência à insulina e diabetes tipo 2 com IMCs a partir de 23, muito abaixo do limiar convencional de 25 para sobrepeso. Populações indígenas, com suas particularidades antropométricas já discutidas, completam esse mosaico de biotipos que desafia qualquer classificação universal baseada apenas em peso e altura.
              </p>
              <p>
                Pessoas com <strong>sarcopenia</strong> — independentemente da idade — representam um grupo frequentemente negligenciado nas avaliações baseadas no IMC. A sarcopenia pode ocorrer em pacientes oncológicos em tratamento, pessoas com doenças crônicas debilitantes, indivíduos em imobilização prolongada ou mesmo em adultos jovens extremamente sedentários. Nesses casos, o IMC pode permanecer estável ou até diminuir, mascarando um aumento perigoso no percentual de gordura corporal à medida que a massa muscular é substituída por tecido adiposo. O Consenso Europeu sobre Sarcopenia (EWGSOP2), adotado por sociedades médicas brasileiras, recomenda triagem com o questionário SARC-F seguido de testes funcionais, e não o IMC, para identificar essa condição.
              </p>
            </div>
          </div>

          {/* More precise alternatives to BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Ruler className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternativas mais precisas ao IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Diante das limitações evidentes do IMC, profissionais de saúde no Brasil e em Portugal dispõem de ferramentas mais precisas para avaliar a composição corporal e os riscos associados ao excesso de gordura. Estas alternativas variam em custo, acessibilidade e precisão, permitindo que cada contexto clínico escolha a abordagem mais adequada.
              </p>
              <p>
                A <strong>circunferência da cintura</strong> é considerada pela ABESO (Associação Brasileira para o Estudo da Obesidade e da Síndrome Metabólica) como o complemento mais importante ao IMC na prática clínica. As diretrizes brasileiras, alinhadas com a IDF (International Diabetes Federation), estabelecem os seguintes limiares: para <strong>homens</strong>, circunferência da cintura <strong>≥94 cm indica risco aumentado</strong> e <strong>≥102 cm indica risco substancialmente aumentado</strong> de complicações metabólicas; para <strong>mulheres</strong>, os limites são <strong>≥80 cm para risco aumentado</strong> e <strong>≥88 cm para risco substancialmente aumentado</strong>. A medição é simples, gratuita, requer apenas uma fita métrica inelástica e pode ser realizada em qualquer consulta de atenção primária. A cintura deve ser medida no ponto médio entre a última costela e a crista ilíaca, com o paciente em pé e ao final de uma expiração normal. Essa medida captura especificamente a gordura visceral (abdominal), que é metabolicamente ativa e fortemente associada a diabetes tipo 2, doenças cardiovasculares e síndrome metabólica.
              </p>
              <p>
                A <strong>relação cintura-estatura (RCE)</strong> é uma métrica que vem ganhando destaque em estudos epidemiológicos brasileiros e portugueses. A regra é simples: sua cintura deve medir <strong>menos da metade da sua altura</strong> (RCE &lt; 0,5). Um indivíduo com 1,70m de altura, por exemplo, deve ter circunferência da cintura inferior a 85 cm. A grande vantagem da RCE sobre a circunferência da cintura isolada é que ela se ajusta automaticamente à estatura do indivíduo, eliminando a necessidade de limiares diferentes por sexo ou etnia. Meta-análises publicadas em periódicos como o British Medical Journal demonstram que a RCE prediz melhor o risco cardiovascular do que o IMC em populações diversas, incluindo populações miscigenadas como a brasileira. Em Portugal, pesquisadores da Universidade do Porto e da Universidade de Coimbra têm validado a RCE como preditor de risco metabólico superior ao IMC em estudos com a população portuguesa.
              </p>
              <p>
                O <strong>percentual de gordura corporal por bioimpedância elétrica (BIA)</strong> é uma alternativa acessível e cada vez mais disponível no Brasil. Balanças de bioimpedância estão presentes em grande parte das academias (redes como Smart Fit, Bodytech e Bio Ritmo oferecem avaliações periódicas) e em muitas Unidades Básicas de Saúde (UBS) do SUS, especialmente aquelas que contam com equipes de NASF-AB (Núcleo Ampliado de Saúde da Família). O exame funciona enviando uma corrente elétrica de baixa intensidade pelo corpo e medindo a resistência dos diferentes tecidos — a gordura oferece mais resistência que o músculo, permitindo estimar a composição corporal. Embora menos preciso que métodos de referência, a BIA tem boa reprodutibilidade quando realizada em condições padronizadas (jejum de 4h, bexiga vazia, sem exercício nas 24h anteriores). Os valores de referência para percentual de gordura saudável são: <strong>homens entre 10% e 20%</strong> (até 25% aceitável após 60 anos) e <strong>mulheres entre 18% e 28%</strong> (até 33% aceitável após 60 anos).
              </p>
              <p>
                A <strong>absorciometria de raios X de dupla energia (DEXA ou DXA)</strong> é o padrão-ouro para avaliação da composição corporal. Este exame, originalmente desenvolvido para medir a densidade mineral óssea (sendo fundamental no diagnóstico de osteoporose), fornece informações detalhadas sobre massa gorda, massa magra e massa óssea em cada segmento corporal. No Brasil, a DEXA está disponível em hospitais e laboratórios clínicos de grande porte como Fleury, DASA (Delboni Auriemo, Lavoisier), Hermes Pardini e laboratórios regionais de referência. O custo varia entre R$ 150 e R$ 400 (não coberto pelo SUS para avaliação de composição corporal, apenas para densitometria óssea em indicações específicas). Em Portugal, a DEXA está disponível em hospitais do SNS (Serviço Nacional de Saúde) mediante indicação médica para densitometria e em clínicas privadas como Joaquim Chaves Saúde, Affidea e laboratórios do grupo Germano de Sousa para avaliação completa da composição corporal. A principal vantagem da DEXA é fornecer dados regionais: é possível identificar, por exemplo, acúmulo desproporcional de gordura no tronco (indicativo de risco cardiovascular) mesmo em pessoas com IMC normal.
              </p>
            </div>
          </div>

          {/* BMI in the Brazilian and Portuguese context */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Building2 className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">O IMC no contexto brasileiro e português</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                As políticas de saúde pública no Brasil e em Portugal reconhecem formalmente as limitações do IMC, incorporando indicadores complementares em seus protocolos de atenção à saúde. Compreender como cada sistema de saúde aborda essa questão permite que cidadãos e profissionais contextualizem melhor os resultados do IMC.
              </p>
              <p>
                No Brasil, a <strong>ABESO (Associação Brasileira para o Estudo da Obesidade e da Síndrome Metabólica)</strong> publica diretrizes que são referência para todo o sistema de saúde. As Diretrizes Brasileiras de Obesidade, atualmente em sua 5ª edição, <strong>recomendam explicitamente que o IMC nunca seja utilizado isoladamente</strong>: deve sempre ser combinado com a circunferência da cintura e, quando possível, com avaliação da composição corporal. A ABESO classifica o risco metabólico cruzando o IMC com a medida da cintura, criando uma matriz de risco que é mais precisa que qualquer um dos indicadores sozinho. Por exemplo, um paciente com IMC de 26 (sobrepeso leve) mas cintura abaixo de 94 cm (homem) apresenta risco metabólico menor que um paciente com IMC de 24 (normal) mas cintura acima de 102 cm.
              </p>
              <p>
                Os dados do <strong>VIGITEL (Vigilância de Fatores de Risco e Proteção para Doenças Crônicas por Inquérito Telefônico)</strong>, pesquisa anual do Ministério da Saúde realizada nas 26 capitais brasileiras e no Distrito Federal, revelam a dimensão epidemiológica da obesidade no Brasil. Segundo dados recentes, a prevalência de excesso de peso (IMC ≥ 25) na população adulta brasileira ultrapassa 61%, e a obesidade (IMC ≥ 30) atinge mais de 24% dos adultos. No entanto, o próprio VIGITEL reconhece que esses números são baseados em peso e altura autorreferidos, o que introduz vieses significativos: estudos de validação mostram que pessoas tendem a subestimar o peso e superestimar a altura, significando que a prevalência real de obesidade pode ser ainda maior. As disparidades regionais também são marcantes: capitais do Sul e Sudeste apresentam prevalências diferentes das capitais do Norte e Nordeste, refletindo não apenas diferenças alimentares mas também composições étnicas distintas que interagem de forma diferente com os limiares do IMC.
              </p>
              <p>
                O <strong>Sistema Único de Saúde (SUS)</strong> utiliza o IMC como critério de triagem e encaminhamento dentro da Rede de Atenção à Saúde. Nas Unidades Básicas de Saúde (UBS), o IMC é calculado rotineiramente em consultas de enfermagem e serve como gatilho para encaminhamento ao NASF-AB (Núcleo Ampliado de Saúde da Família e Atenção Básica), que inclui nutricionistas e educadores físicos. Pacientes com IMC ≥ 30 são referenciados para acompanhamento nutricional, e aqueles com IMC ≥ 40 (ou ≥ 35 com comorbidades) podem ser encaminhados para avaliação de cirurgia bariátrica nos centros de referência. No entanto, <strong>o Ministério da Saúde reconhece as limitações do IMC</strong> em seus protocolos: o Caderno de Atenção Básica nº 38 (Obesidade) orienta que a medição da circunferência da cintura seja realizada em toda consulta de avaliação nutricional, e que o IMC seja interpretado dentro de um contexto clínico mais amplo que inclua histórico familiar, hábitos alimentares, nível de atividade física e exames laboratoriais.
              </p>
              <p>
                Em <strong>Portugal</strong>, a <strong>DGS (Direção-Geral da Saúde)</strong> estabelece orientações técnicas para os profissionais do Serviço Nacional de Saúde (SNS). A Norma de Orientação Clínica sobre Obesidade recomenda a utilização conjunta do IMC e da circunferência da cintura para estratificação de risco, seguindo as recomendações da EASO (European Association for the Study of Obesity). O <strong>PNPAS (Programa Nacional para a Promoção da Alimentação Saudável)</strong>, coordenado pela DGS, é uma referência em políticas de saúde pública nutricional na Europa e reconhece que o IMC é um instrumento de rastreio populacional que deve ser complementado por avaliação clínica individualizada. Dados do IAN-AF (Inquérito Alimentar Nacional e de Atividade Física), conduzido pela Universidade do Porto, indicam que cerca de 53% da população portuguesa adulta apresenta excesso de peso, com prevalências mais elevadas no sexo masculino e nas regiões do Alentejo e Açores. O PNPAS recomenda que os médicos de família nos Centros de Saúde utilizem o IMC como primeiro passo, mas que integrem sempre a avaliação da distribuição de gordura corporal e dos marcadores metabólicos antes de definir condutas terapêuticas.
              </p>
              <p>
                Ambos os países convergem num ponto fundamental: <strong>o IMC deve ser visto como porta de entrada, não como destino final</strong> da avaliação nutricional. Tanto as diretrizes da ABESO quanto as da DGS enfatizam que um IMC isolado não define saúde nem doença — ele sinaliza a necessidade de investigação mais aprofundada. Para o cidadão, isso significa que calcular o IMC é um primeiro passo válido e acessível, mas que os resultados devem sempre ser discutidos com um profissional de saúde que possa contextualizar o número dentro da realidade individual de cada pessoa: sua idade, etnia, nível de atividade física, histórico familiar e composição corporal.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule seu IMC com conhecimento de causa</h3>
            <p className="text-muted-foreground mb-6">
              Agora que você conhece as limitações, use nossa calculadora como primeiro indicador
            </p>
            <Link
              to="/pt/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcular meu IMC
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

export default LimitacoesIMC;
