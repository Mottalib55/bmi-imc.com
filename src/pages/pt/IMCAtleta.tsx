import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, Globe } from "lucide-react";
import { RelatedPages } from "@/components/RelatedPages";

const IMCAtleta = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const handleCalculate = useCallback((calculatedBmi: number, w: number, h: number) => {
    setBmi(calculatedBmi);
    setWeight(w);
    setHeight(h);
  }, []);

  // Calculate FFMI if we have data
  const ffmi = weight && height ? (weight * 0.85) / Math.pow(height / 100, 2) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            Calculadora para atletas
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">IMC Atleta</span> : Limites do IMC para Esportistas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Por que o IMC classifica Neymar como "normal" mas a maioria dos lutadores de MMA brasileiros como "obesos". O Brasil é potência mundial em esportes de combate.
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Atenção: O IMC é enviesado para atletas brasileiros</h3>
              <p className="text-muted-foreground">
                O IMC não distingue <strong>massa muscular</strong> de <strong>massa gorda</strong>.
                No Brasil, onde o esporte de combate e a musculação são extremamente populares, um atleta
                musculoso pode ter um IMC de "sobrepeso" ou "obesidade" mesmo estando em excelente forma física.
                Lutadores da UFC, jogadores do Brasileirão e surfistas da WSL frequentemente são mal classificados pelo IMC.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <BMICalculator onCalculate={handleCalculate} />
          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">Estimativa FFMI (Fat-Free Mass Index)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              O FFMI é um indicador melhor para atletas pois leva em conta a massa magra. Referência utilizada pela
              medicina esportiva brasileira (CBMDE) e centros de treinamento do Comitê Olímpico do Brasil.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI estimado (com 15% de gordura corporal)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Natural: 18-25 | Doping provável: &gt;25
              </p>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {/* Famous Brazilian Athletes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC de atletas brasileiros famosos</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Veja como o IMC classifica alguns dos maiores esportistas do Brasil. Todos estão em excelente
              condição física, mas o IMC conta histórias muito diferentes dependendo do esporte.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <h4 className="font-bold mb-2 text-lg">Neymar Jr</h4>
                <p className="text-sm text-muted-foreground mb-3">Futebol - Seleção Brasileira</p>
                <p className="text-xs text-muted-foreground">1m75 | 68 kg</p>
                <p className="text-3xl font-bold text-green-500 my-2">22.2</p>
                <p className="text-xs text-green-500 font-medium">IMC "Normal"</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Maior camisa 10 brasileiro da atualidade. O IMC classifica como "normal", mas não revela sua composição corporal de elite.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <h4 className="font-bold mb-2 text-lg">Amanda Nunes</h4>
                <p className="text-sm text-muted-foreground mb-3">UFC / MMA - Bahia</p>
                <p className="text-xs text-muted-foreground">1m73 | 61 kg</p>
                <p className="text-3xl font-bold text-green-500 my-2">20.4</p>
                <p className="text-xs text-green-500 font-medium">IMC "Normal"</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Considerada a maior lutadora de MMA de todos os tempos. Baiana, bicampeã simultânea do UFC. Seu IMC não reflete sua força explosiva.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <h4 className="font-bold mb-2 text-lg">Gabriel Medina</h4>
                <p className="text-sm text-muted-foreground mb-3">Surfe - WSL</p>
                <p className="text-xs text-muted-foreground">1m80 | 75 kg</p>
                <p className="text-3xl font-bold text-green-500 my-2">23.1</p>
                <p className="text-xs text-green-500 font-medium">IMC "Normal"</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Bicampeão mundial de surfe da WSL. Maresias, litoral de SP. Corpo funcional para alta performance nas ondas, mas o IMC não mede potência e agilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Sports by Category - Brazilian/Portuguese focus */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC por esporte: realidade brasileira e portuguesa</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">Futebol</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">Brasileirão | Liga Portugal | Seleção</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC típico: <strong>22-25</strong></li>
                  <li>Paixão nacional no Brasil e em Portugal</li>
                  <li>Jogadores magros e velozes (Neymar, Vinícius Jr.)</li>
                  <li>O IMC funciona razoavelmente para futebolistas</li>
                  <li>Mas não mede agilidade, VO2max ou resistência</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">MMA / Jiu-Jitsu</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">UFC | BJJ | Bellator</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC típico: <strong>25-32</strong></li>
                  <li>Brasil = potência mundial do MMA</li>
                  <li>Lutadores pesados têm IMC de "obeso"</li>
                  <li>Amanda Nunes, Charles Oliveira, Alex Pereira</li>
                  <li>O IMC falha completamente neste contexto</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">Vôlei</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">Superliga | Seleção Brasileira</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC típico: <strong>23-27</strong></li>
                  <li>Brasil domina o vôlei mundial (masculino e feminino)</li>
                  <li>Jogadores altos com grande massa muscular</li>
                  <li>A altura elevada distorce o IMC para cima</li>
                  <li>Composição corporal varia muito por posição</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">Surfe</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">WSL | Circuito brasileiro</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC típico: <strong>22-25</strong></li>
                  <li>Gabriel Medina, Filipe Toledo, Italo Ferreira</li>
                  <li>Corpo funcional: leveza + potência</li>
                  <li>O IMC parece "normal" mas não revela o condicionamento</li>
                  <li>Brasil é potência na WSL há mais de uma década</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Brazil as combat sports powerhouse */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">O Brasil como potência nos esportes de combate</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                O Brasil é, sem dúvida, uma das maiores potências mundiais nos <strong>esportes de combate</strong>.
                Essa tradição influencia diretamente a forma como devemos interpretar o IMC de milhões de
                praticantes brasileiros de artes marciais.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-orange-500 mb-2">Jiu-Jitsu Brasileiro (BJJ)</h4>
                <p className="text-sm text-muted-foreground">
                  Nascido no Rio de Janeiro com a família Gracie, o BJJ se espalhou pelo mundo.
                  A composição corporal dos praticantes varia enormemente entre faixas e categorias de peso.
                  Um faixa-preta pesado pode ter IMC acima de 30 com excelente condicionamento.
                  Academias como Gracie Barra, Nova União e Alliance são referências globais.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-orange-500 mb-2">UFC e MMA profissional</h4>
                <p className="text-sm text-muted-foreground">
                  O Brasil é o segundo país mais representado no UFC, atrás apenas dos EUA.
                  Lutadores como Anderson Silva, Amanda Nunes, Charles Oliveira e Alex Pereira são lendas do esporte.
                  O corte de peso antes das lutas torna o IMC ainda mais irrelevante, pois os atletas flutuam
                  10-15 kg entre pesagem e luta.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-orange-500 mb-2">Capoeira</h4>
                <p className="text-sm text-muted-foreground">
                  Arte marcial afro-brasileira única que combina luta, dança e acrobacia.
                  Praticantes de capoeira desenvolvem condicionamento funcional excepcional com
                  flexibilidade, explosão e resistência. O IMC não captura essa riqueza física.
                  A capoeira é Patrimônio Cultural Imaterial da Humanidade pela UNESCO.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-orange-500 mb-2">Cultura fitness e o efeito Cristiano Ronaldo</h4>
                <p className="text-sm text-muted-foreground">
                  Em Portugal, Cristiano Ronaldo revolucionou a cultura fitness. Seu corpo é referência
                  mundial de condicionamento atlético (1m87, 85 kg, IMC ~24.3). Tanto no Brasil quanto
                  em Portugal, a indústria de academias e MMA cresce rapidamente, com cada vez mais
                  pessoas monitorando composição corporal além do simples IMC.
                </p>
              </div>
            </div>
          </div>

          {/* Alternatives - Brazilian references */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternativas ao IMC para atletas no Brasil</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              A medicina esportiva brasileira oferece recursos especializados para avaliação corporal de atletas.
              O <strong>CBMDE</strong> (Colégio Brasileiro de Medicina do Esporte) e o <strong>CONFEF</strong> (Conselho
              Federal de Educação Física) recomendam métodos complementares ao IMC.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Gordura corporal (%)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Medição direta do percentual de gordura. Disponível em clínicas de medicina esportiva do SUS
                  e em centros privados. Método de dobras cutâneas (protocolo Pollock) é o mais comum no Brasil.
                </p>
                <p className="text-xs">
                  <strong>Homem:</strong> 10-20% ideal<br />
                  <strong>Mulher:</strong> 18-28% ideal
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Fat-Free Mass Index: avalia a massa magra em relação à altura.
                  Utilizado por preparadores físicos da Seleção Brasileira e clubes do Brasileirão.
                </p>
                <p className="text-xs">
                  <strong>Natural:</strong> 18-25<br />
                  <strong>Elite natural:</strong> 24-26
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Avaliação integrada (CBMDE)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  O CBMDE recomenda avaliação completa: circunferência da cintura, bioimpedância, DEXA
                  e testes funcionais. A medicina esportiva pelo SUS oferece acompanhamento em Núcleos de
                  Apoio à Saúde da Família (NASF).
                </p>
                <p className="text-xs">
                  <strong>Cintura (H):</strong> &lt;94 cm<br />
                  <strong>Cintura (M):</strong> &lt;80 cm
                </p>
              </div>
            </div>
          </div>

          {/* CONFEF/CREF, COB and Brazilian combat sports body composition */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Protocolos brasileiros de composicao corporal: CONFEF, CREF e COB</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>CONFEF (Conselho Federal de Educacao Fisica)</strong> e os <strong>CREFs regionais</strong> regulamentam a atuacao dos profissionais de educacao fisica no Brasil e estabelecem protocolos de avaliacao antropometrica que vao muito alem do simples calculo do IMC. Esses protocolos incluem medicao de dobras cutaneas (metodo de Jackson-Pollock adaptado para a populacao brasileira), bioimpedancia eletrica e circunferencias corporais, oferecendo uma visao detalhada da composicao corporal do atleta.
              </p>
              <p>
                O <strong>COB (Comite Olimpico do Brasil)</strong> utiliza centros de excelencia como o <strong>NAR (Nucleo de Alto Rendimento Esportivo)</strong> em Sao Paulo e o <strong>Centro de Treinamento Olimpico</strong> na Barra da Tijuca, Rio de Janeiro, onde atletas da selecao olimpica passam por avaliacoes de composicao corporal com tecnologia DEXA (absorcao de raios-X de dupla energia) e pletismografia por deslocamento de ar (BOD POD). Nesses centros, o IMC e considerado apenas um dado inicial, nunca um indicador definitivo da aptidao fisica do atleta.
              </p>
              <p>
                O <strong>paradoxo do IMC no futebol brasileiro</strong> e particularmente revelador. Ronaldo Fenomeno, durante o auge de sua carreira no Barcelona e na Selecao Brasileira, mantinha um IMC entre 24 e 26, classificado como peso normal ou limiar de sobrepeso. No entanto, sua composicao corporal era de atleta de elite, com explosao muscular nas coxas que a formula do IMC interpretava como excesso de peso. Adriano Imperador, com IMC frequentemente acima de 27 durante a fase no Flamengo, era outro exemplo classico de como o indice falha ao avaliar jogadores com grande massa muscular.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3 text-orange-500">Capoeira e composicao corporal</h4>
                <p className="text-sm text-muted-foreground">
                  A capoeira, reconhecida como <strong>Patrimonio Cultural Imaterial da Humanidade pela UNESCO</strong> desde 2014, desenvolve um condicionamento funcional unico que combina flexibilidade, explosao, resistencia e agilidade. Mestres de capoeira Angola e Regional apresentam biotipos distintos: a Angola privilegia movimentos baixos e rasteiros que exigem grande flexibilidade de quadril, enquanto a Regional incorpora golpes mais altos e acrobacias. O IMC de praticantes avancados de capoeira geralmente varia entre 21 e 26, mas essa faixa nao captura a riqueza da preparacao fisica envolvida. O <strong>CONFEF reconhece a capoeira como atividade fisica</strong> regulamentada, e grupos como Abada-Capoeira e Capoeira Brasil realizam avaliacoes fisicas periodicas de seus membros utilizando protocolos de composicao corporal muito mais completos que o IMC.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3 text-orange-500">Jiu-Jitsu Brasileiro: categorias de peso e IMC</h4>
                <p className="text-sm text-muted-foreground">
                  A <strong>CBJJ (Confederacao Brasileira de Jiu-Jitsu)</strong> e a <strong>IBJJF (International Brazilian Jiu-Jitsu Federation)</strong> organizam competicoes em categorias de peso que vao do galo (ate 57,5 kg) ao pesadissimo (acima de 100,5 kg). Essa amplitude demonstra a diversidade de biotipos no esporte. Um competidor da categoria meio-pesado (ate 88,3 kg) com 1m75 de altura apresenta um IMC de 28,8, classificado como sobrepeso pela OMS, mesmo sendo um atleta de alto rendimento com percentual de gordura inferior a 12%. As academias filiadas ao CREF frequentemente oferecem avaliacao de composicao corporal antes de competicoes, utilizando adipometros e bioimpedancia para orientar o corte de peso de forma segura, evitando a desidratacao extrema que o simples controle pelo IMC poderia mascarar.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3 text-orange-500">UFC Brasil e o corte de peso</h4>
                <p className="text-sm text-muted-foreground">
                  O Brasil e o segundo pais com mais lutadores na historia do UFC, e a pratica de <strong>corte de peso (weight cut)</strong> torna o IMC completamente irrelevante nesse contexto. Alex Pereira, campeao do UFC em duas categorias, compete com peso oficial de 93 kg (meio-pesado) mas treina com mais de 105 kg, o que representa uma variacao de IMC de mais de 4 pontos entre treinos e pesagem. Charles Oliveira, ex-campeao dos leves, fazia cortes de peso de mais de 10 kg antes das lutas. A <strong>CABMMA (Comissao Atletica Brasileira de MMA)</strong> monitora a saude dos lutadores e exige exames medicos pre-luta que incluem avaliacoes muito alem do IMC, como funcao renal, hidratacao e perfil cardiaco.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3 text-orange-500">Cultura fitness em Portugal e a influencia de Cristiano Ronaldo</h4>
                <p className="text-sm text-muted-foreground">
                  Em Portugal, a <strong>Federacao Portuguesa de Culturismo e Fitness (FPCF)</strong> e o <strong>IPDJ (Instituto Portugues do Desporto e Juventude)</strong> promovem avaliacoes de composicao corporal para atletas de todas as modalidades. O impacto cultural de Cristiano Ronaldo na percepcao portuguesa sobre condicionamento fisico e inegavel: sua rotina de treino e composicao corporal (cerca de 7% de gordura, IMC de 24,3) tornaram-se referencia popular. A <strong>FMH (Faculdade de Motricidade Humana)</strong> da Universidade de Lisboa e referencia em pesquisa sobre composicao corporal de atletas portugueses, utilizando protocolos ISAK (International Society for the Advancement of Kinanthropometry) que complementam as limitacoes do IMC.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC atleta no Brasil: o que você precisa saber</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>IMC atleta</strong> é uma questão particularmente relevante no Brasil, onde milhões de pessoas
                praticam <strong>futebol</strong>, <strong>MMA</strong>, <strong>jiu-jitsu</strong>, <strong>musculação</strong> e
                <strong> surfe</strong>. A fórmula do IMC (peso/altura²) foi criada no século XIX para populações sedentárias
                e simplesmente não se aplica a quem treina regularmente.
              </p>
              <p>
                No <strong>futebol brasileiro</strong>, jogadores do Brasileirão e da Seleção geralmente têm IMC entre
                22-25, o que parece "normal". Mas essa normalidade esconde uma <strong>composição corporal</strong> totalmente
                diferente de um sedentário com o mesmo IMC. No <strong>MMA brasileiro</strong>, a situação é ainda mais
                extrema: lutadores do UFC frequentemente são classificados com "sobrepeso" ou "obesidade" pelo IMC,
                mesmo com gordura corporal abaixo de 15%.
              </p>
              <p>
                O <strong>jiu-jitsu brasileiro</strong> (BJJ), esporte criado no Rio de Janeiro, é praticado por milhões
                de pessoas em todo o país. A <strong>composição corporal</strong> de um faixa-preta varia enormemente
                conforme a categoria de peso, e o IMC falha em capturar essas diferenças. Se você pratica
                qualquer arte marcial ou esporte de combate, utilize o <strong>FFMI</strong>, o <strong>percentual de
                gordura corporal</strong> ou procure avaliação especializada na medicina esportiva.
              </p>
              <p>
                O <strong>CONFEF</strong> (Conselho Federal de Educação Física) e o <strong>CBMDE</strong> (Colégio
                Brasileiro de Medicina do Esporte) disponibilizam diretrizes para avaliação da composição corporal
                de atletas. Consulte também os serviços de medicina esportiva do <strong>SUS</strong>, disponíveis
                nos NASF e em centros de referência como o NAR (Núcleo de Alto Rendimento Esportivo).
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>
            <Link to="/pt/imc" className="text-primary hover:underline">
              Voltar para a Calculadora IMC
            </Link>
          </p>
          <p className="mt-2">© 2024 Calculadora IMC Atleta - Ferramenta informativa apenas</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCAtleta;
