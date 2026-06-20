import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2, BookOpen, Globe, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const SaudePeso = () => {
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
            Saúde e bem-estar
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Saúde e Peso</span> : Guia de Nutrição e Bem-Estar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compreender a relação entre peso, IMC e saúde global
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso e saúde: uma relação complexa</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>peso</strong> é apenas um indicador entre outros do seu estado de saúde.
                Um <strong>peso saudável</strong> depende de numerosos fatores: genética, morfologia, atividade física,
                alimentação, sono e bem-estar mental.
              </p>
              <p>
                A obsessão com o número na balança pode ser contraproducente. É mais importante
                se concentrar em <strong>hábitos de vida saudáveis</strong> do que em um peso alvo preciso.
                A saúde não se mede unicamente em quilogramas.
              </p>
            </div>
          </div>

          {/* Health Risks */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Riscos relacionados ao peso</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Riscos do sobrepeso e da obesidade</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Doenças cardiovasculares (infarto, AVC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Diabetes tipo 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Hipertensão arterial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Apneia do sono</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Certos cânceres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Problemas articulares</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Riscos da insuficiência ponderal</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Carências nutricionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Sistema imunológico enfraquecido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Osteoporose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Distúrbios hormonais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Fadiga crônica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Problemas de fertilidade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillars of health */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Os 5 pilares de um peso saudável</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Alimentação</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Privilegie alimentos não processados</li>
                  <li>Coma vegetais em cada refeição</li>
                  <li>Limite açúcares adicionados</li>
                  <li>Hidrate-se suficientemente</li>
                  <li>Escute sua fome e saciedade</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Atividade física</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 min de atividade moderada/semana</li>
                  <li>Inclua fortalecimento muscular</li>
                  <li>Mova-se regularmente durante o dia</li>
                  <li>Encontre uma atividade que goste</li>
                  <li>Progrida gradualmente</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Sono</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Durma 7-9 horas por noite</li>
                  <li>Horários regulares</li>
                  <li>Evite telas antes de dormir</li>
                  <li>Quarto fresco e escuro</li>
                  <li>Falta de sono favorece ganho de peso</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Saúde mental</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Gerencie seu estresse</li>
                  <li>Evite alimentação emocional</li>
                  <li>Pratique atenção plena</li>
                  <li>Aceite seu corpo</li>
                  <li>Consulte se necessário</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Acompanhamento médico</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Balanço de saúde anual</li>
                  <li>Acompanhamento da circunferência da cintura</li>
                  <li>Controle pressão, glicemia, colesterol</li>
                  <li>Consulte nutricionista se necessário</li>
                  <li>Não siga dietas extremas</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Progressão</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Estabeleça objetivos realistas</li>
                  <li>Máximo 0,5-1 kg/semana</li>
                  <li>Celebre pequenas vitórias</li>
                  <li>Constância prevalece sobre intensidade</li>
                  <li>Pense a longo prazo</li>
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
              <h2 className="text-2xl font-display font-bold">Conselhos para um peso saudável</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">O que funciona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Mudanças <strong>progressivas e duráveis</strong> de hábitos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Alimentação <strong>equilibrada</strong>, sem restrição extrema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Atividade física <strong>regular e prazerosa</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Sono de <strong>qualidade</strong> (7-8h/noite)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Gerenciamento do <strong>estresse</strong> e emoções</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Acompanhamento por <strong>profissional</strong> se necessário</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">O que não funciona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Dietas <strong>drásticas</strong> e restritivas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Suplementos <strong>milagrosos</strong> e pílulas emagrecedoras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Pesar-se <strong>todos os dias</strong> (variações normais)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Objetivos de perda de peso <strong>irrealistas</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Comparar seu corpo aos <strong>outros</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignorar sinais de <strong>fome/saciedade</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Obesidade no Brasil e em Portugal */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">A epidemia de obesidade no Brasil: dados do VIGITEL 2023</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O Brasil enfrenta uma crise de saúde pública sem precedentes relacionada ao excesso de peso. Segundo a pesquisa
                <strong> VIGITEL 2023</strong> (Vigilância de Fatores de Risco e Proteção para Doenças Crônicas por Inquérito Telefônico),
                realizada pelo <strong>Ministério da Saúde</strong>, <strong>26,8% dos adultos brasileiros</strong> estão obesos
                -- um aumento de mais de 70% em relação aos dados de 2006. Se somarmos o sobrepeso, mais de <strong>61% da
                população adulta</strong> ultrapassa o IMC de 25 kg/m².
              </p>
              <p>
                Existe um <strong>contraste regional marcante</strong> dentro do próprio Brasil. No Sudeste e no Sul, onde a
                urbanização e o acesso a alimentos ultraprocessados são maiores, as taxas de obesidade são as mais elevadas do
                país. Capitais como <strong>Campo Grande (MS)</strong>, <strong>Cuiabá (MT)</strong> e <strong>Porto Alegre (RS)</strong>
                figuram entre as cidades com maior prevalência. Enquanto isso, no Nordeste e no Norte, persiste o paradoxo da
                <strong> dupla carga nutricional</strong>: comunidades que convivem simultaneamente com desnutrição infantil e
                obesidade em adultos. No semiárido nordestino, a insegurança alimentar afeta milhões de famílias, enquanto nas
                periferias das capitais da região, a alimentação barata e calórica baseada em ultraprocessados impulsiona a obesidade.
              </p>
              <p>
                Em <strong>Portugal</strong>, o cenário também é preocupante. Dados da <strong>DGS (Direção-Geral da Saúde)</strong>
                indicam que cerca de <strong>28,7% dos adultos portugueses são pré-obesos</strong> e <strong>15,4% são obesos</strong>.
                O inquérito <strong>IAN-AF (Inquérito Alimentar Nacional e de Atividade Física)</strong> revelou que mais de
                <strong> 5,9 milhões de portugueses</strong> apresentam excesso de peso. A prevalência é particularmente alta
                nas regiões autônomas dos <strong>Açores</strong> e da <strong>Madeira</strong>, bem como no <strong>Alentejo</strong>,
                onde fatores socioeconômicos e o envelhecimento populacional contribuem para o problema.
              </p>
              <p>
                O custo econômico da obesidade para o sistema de saúde brasileiro é estimado em <strong>R$ 3,45 bilhões por ano</strong>
                pelo SUS, considerando hospitalizações, consultas, medicamentos e cirurgias. Em Portugal, o
                <strong> SNS (Serviço Nacional de Saúde)</strong> estima que as doenças associadas à obesidade representam cerca
                de <strong>6% das despesas totais de saúde do país</strong>. Esses números reforçam que a obesidade não é apenas
                uma questão individual, mas um desafio estrutural de saúde pública em todo o mundo lusófono.
              </p>
            </div>
          </div>

          {/* Guia Alimentar e PNAN */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-display font-bold">Guia Alimentar Brasileiro e políticas nutricionais lusófonas</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>Guia Alimentar para a População Brasileira</strong>, publicado pelo Ministério da Saúde em 2014 e
                atualizado em 2022, é reconhecido pela <strong>OMS (Organização Mundial da Saúde)</strong> como um dos melhores
                guias alimentares do mundo. Ao contrário de guias tradicionais baseados em pirâmides ou grupos alimentares, o
                guia brasileiro adota uma abordagem inovadora centrada no <strong>grau de processamento dos alimentos</strong>,
                utilizando a classificação <strong>NOVA</strong> desenvolvida pelo pesquisador Carlos Monteiro da USP.
              </p>
              <p>
                A regra de ouro do guia é simples e poderosa: <strong>"Prefira sempre alimentos in natura ou minimamente
                processados e preparações culinárias a alimentos ultraprocessados."</strong> Essa recomendação reflete a
                compreensão de que o problema alimentar moderno não está nos nutrientes isolados, mas no padrão alimentar como
                um todo. O guia valoriza a cultura alimentar brasileira, incentivando o preparo de refeições em casa, o consumo
                de arroz com feijão, frutas regionais e legumes da estação.
              </p>
              <p>
                A <strong>PNAN (Política Nacional de Alimentação e Nutrição)</strong>, criada em 1999 e revisada em 2012,
                é a base institucional da política alimentar brasileira. Ela estabelece as diretrizes do SUS para promoção da
                alimentação adequada e saudável, prevenção de distúrbios nutricionais e atenção nutricional no sistema de saúde.
                A PNAN articula programas como o <strong>SISVAN (Sistema de Vigilância Alimentar e Nutricional)</strong>, que
                monitora o estado nutricional de milhões de brasileiros atendidos pelo SUS, permitindo identificar populações
                vulneráveis e direcionar políticas públicas.
              </p>
              <p>
                Em Portugal, o <strong>PNPAS (Programa Nacional para a Promoção da Alimentação Saudável)</strong>, coordenado
                pela DGS, desempenha papel semelhante. Desde 2017, Portugal implementou um <strong>imposto sobre bebidas
                açucaradas</strong> (IABA -- Imposto sobre Bebidas Adoçadas com Açúcar), que resultou numa redução de
                <strong> 15% no consumo</strong> dessas bebidas nos primeiros dois anos de aplicação. Essa taxa progressiva
                incide sobre refrigerantes e outras bebidas com adição de açúcar, e os recursos arrecadados são destinados
                ao SNS. A medida portuguesa é considerada um caso de sucesso pela OMS e serviu de modelo para outros
                países europeus.
              </p>
            </div>
          </div>

          {/* Tradições alimentares regionais */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Users className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tradições alimentares regionais: da dieta mediterrânica ao açaí</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                A riqueza cultural dos países lusófonos se reflete numa extraordinária diversidade alimentar que pode ser tanto
                um fator de proteção quanto de risco para a saúde. Em <strong>Portugal</strong>, a <strong>dieta
                mediterrânica</strong> -- reconhecida como Património Imaterial da Humanidade pela UNESCO -- é um dos padrões
                alimentares mais saudáveis do mundo. Rica em <strong>azeite de oliva, peixe, leguminosas, hortaliças, frutas
                e cereais integrais</strong>, essa dieta está associada a menor incidência de doenças cardiovasculares,
                diabetes e certos tipos de câncer. O consumo regular de sardinha, bacalhau e outros peixes fornece ácidos
                graxos ômega-3 essenciais.
              </p>
              <p>
                No <strong>Norte do Brasil</strong>, o <strong>açaí</strong> é um alimento ancestral dos povos ribeirinhos
                da Amazônia, consumido tradicionalmente com farinha de mandioca e peixe. Esse fruto é riquíssimo em
                antioxidantes, fibras e gorduras saudáveis. Porém, nas grandes cidades do Sudeste, o açaí transformou-se num
                produto altamente calórico, servido com xarope de guaraná, leite condensado e granola -- perdendo parte de
                suas propriedades nutricionais originais. A <strong>feijoada</strong>, prato emblemático brasileiro, combina
                feijão-preto (excelente fonte de ferro, fibras e proteínas vegetais) com carnes salgadas e gordurosas.
                Consumida com moderação e acompanhada de couve refogada, laranja e arroz integral, pode integrar uma
                alimentação equilibrada.
              </p>
              <p>
                No <strong>Sul do Brasil</strong>, a cultura do <strong>churrasco</strong> e do chimarrão marca a identidade
                gaúcha. O consumo elevado de carne vermelha nessa região contribui para índices mais altos de colesterol
                e doenças cardiovasculares, segundo dados do VIGITEL. A OMS recomenda limitar o consumo de carne vermelha a
                <strong> 500g por semana</strong>, incluindo carnes processadas. Já a <strong>culinária nordestina</strong>,
                com pratos como <strong>baião de dois</strong> (arroz com feijão-de-corda), <strong>tapioca</strong> e
                <strong> frutas tropicais</strong> como manga, caju e umbu, oferece um padrão alimentar naturalmente rico em
                fibras e micronutrientes quando baseado em ingredientes in natura.
              </p>
              <p>
                O desafio contemporâneo em ambos os países é preservar essas tradições alimentares saudáveis diante do avanço
                dos <strong>alimentos ultraprocessados</strong>. No Brasil, a pesquisa <strong>POF (Pesquisa de Orçamentos
                Familiares)</strong> do IBGE mostra que ultraprocessados já representam <strong>cerca de 20% das calorias
                consumidas</strong> pelos brasileiros, proporção que cresce rapidamente entre jovens e nas classes de renda
                mais alta. Em Portugal, o consumo de ultraprocessados também aumentou significativamente, especialmente entre
                crianças e adolescentes.
              </p>
            </div>
          </div>

          {/* SUS e SNS: cobertura de saúde */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Stethoscope className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">SUS e SNS: tratamento da obesidade nos sistemas públicos de saúde</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>SUS (Sistema Único de Saúde)</strong> do Brasil é o maior sistema público de saúde do mundo,
                atendendo mais de <strong>190 milhões de pessoas</strong>. Na área de obesidade, o SUS oferece atendimento
                integral que inclui consultas com nutricionistas, endocrinologistas e psicólogos nas <strong>UBS (Unidades
                Básicas de Saúde)</strong> e nos <strong>NASF (Núcleos Ampliados de Saúde da Família)</strong>. As equipes
                multiprofissionais da Estratégia Saúde da Família realizam acompanhamento nutricional comunitário, com
                destaque para gestantes, crianças e idosos.
              </p>
              <p>
                O Brasil é o <strong>segundo país do mundo em número de cirurgias bariátricas</strong>, atrás apenas dos
                Estados Unidos. O SUS realiza cerca de <strong>12.000 procedimentos por ano</strong> (bypass gástrico,
                sleeve gástrico e banda gástrica), todos gratuitos para pacientes com <strong>IMC acima de 40 kg/m²</strong>
                ou <strong>IMC acima de 35 kg/m² com comorbidades</strong> como diabetes tipo 2 ou hipertensão. O tempo de
                espera na fila do SUS para cirurgia bariátrica varia de <strong>2 a 5 anos</strong> dependendo do estado,
                e o paciente deve passar por avaliação multiprofissional incluindo nutricionista, psicólogo, cardiologista
                e pneumologista antes da aprovação cirúrgica.
              </p>
              <p>
                O <strong>Programa Saúde na Escola (PSE)</strong>, uma parceria entre os Ministérios da Saúde e da Educação,
                atua na prevenção da obesidade infantil em mais de <strong>85.000 escolas públicas</strong>. O programa inclui
                avaliação nutricional dos alunos, promoção de alimentação saudável na merenda escolar e incentivo à prática
                de atividades físicas. A <strong>Lei nº 11.947/2009</strong> determina que pelo menos <strong>30% dos recursos
                do PNAE (Programa Nacional de Alimentação Escolar)</strong> sejam destinados à compra direta de alimentos
                da agricultura familiar, garantindo produtos frescos e regionais nas escolas.
              </p>
              <p>
                Em <strong>Portugal</strong>, o <strong>SNS (Serviço Nacional de Saúde)</strong> oferece consultas de
                nutrição nos centros de saúde e hospitais públicos, embora o acesso possa ser limitado por listas de espera.
                O programa <strong>PMSE (Programa de Monitorização do Estado de Saúde)</strong> realiza rastreios nutricionais
                em escolas portuguesas. Desde 2018, Portugal implementou restrições à <strong>publicidade de alimentos não
                saudáveis dirigida a crianças</strong>, proibindo anúncios de produtos com excesso de açúcar, sal ou gorduras
                em horários de programação infantil. O <strong>Programa Nacional para a Promoção da Atividade Física
                (PNPAF)</strong> promove a prescrição de exercício físico pelos médicos de família, integrando a atividade
                física ao tratamento de doenças crônicas no âmbito do SNS.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Saúde e peso: o essencial</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Manter um <strong>peso saudável</strong> é importante para seu bem-estar global. A relação
                entre <strong>peso e saúde</strong> é complexa e depende de numerosos fatores. O <strong>IMC</strong>
                é apenas um indicador entre outros para avaliar se você está numa zona de peso saudável.
              </p>
              <p>
                Para <strong>perder peso de forma saudável</strong> ou <strong>manter seu peso</strong>, privilegie uma
                abordagem global: alimentação equilibrada, atividade física regular, sono suficiente e
                gerenciamento do estresse. Evite dietas yo-yo que são prejudiciais à saúde.
              </p>
              <p>
                Um <strong>estilo de vida saudável</strong> é mais importante que um número na balança. Concentre-se
                nos <strong>hábitos de vida</strong> ao invés do peso. Em caso de dúvida, consulte um
                profissional de saúde para acompanhamento personalizado.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule seu IMC</h3>
            <p className="text-muted-foreground mb-6">
              Primeiro indicador para avaliar seu peso saudável
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

export default SaudePeso;
