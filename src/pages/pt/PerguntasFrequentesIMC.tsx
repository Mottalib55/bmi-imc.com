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

const PerguntasFrequentesIMC = () => {
  const faqs = [
    {
      question: "O que é o IMC exatamente?",
      answer: "O <strong>IMC (Índice de Massa Corporal)</strong> é um indicador que permite estimar a corpulência de uma pessoa. Ele se calcula dividindo o peso (em kg) pela altura ao quadrado (em metros). Fórmula: IMC = Peso / Altura². É uma ferramenta de triagem rápida usada pelos profissionais de saúde."
    },
    {
      question: "Como calcular seu IMC?",
      answer: "Para calcular seu IMC, divida seu peso em quilogramas pela sua altura em metros ao quadrado. Por exemplo, se você pesa 70 kg e mede 1,75 m: IMC = 70 / (1,75 × 1,75) = 70 / 3,0625 = <strong>22,9</strong>. Você também pode usar nossa <a href='/pt/imc' class='text-primary hover:underline'>calculadora IMC gratuita</a>."
    },
    {
      question: "Qual é o IMC ideal?",
      answer: "Segundo a OMS, um <strong>IMC normal</strong> se situa entre <strong>18,5 e 24,9</strong>. É a zona onde os riscos para a saúde são os menores. Entretanto, o IMC ideal pode variar segundo a idade, o sexo e a atividade física. O IMC ótimo se situa frequentemente por volta de 21-22."
    },
    {
      question: "O IMC é confiável?",
      answer: "O IMC é um bom indicador para a população geral, mas tem <strong>limitações</strong>. Ele não distingue massa muscular de massa gorda. Um atleta musculoso pode ter um IMC elevado sem excesso de gordura. Outros indicadores como a circunferência da cintura ou o percentual de gordura corporal são complementares. Veja nossa página sobre as <a href='/pt/limitacoes-imc' class='text-primary hover:underline'>limitações do IMC</a>."
    },
    {
      question: "Qual IMC para uma mulher?",
      answer: "O IMC normal para uma mulher é o mesmo que para um homem: <strong>18,5 a 24,9</strong>. Entretanto, as mulheres têm naturalmente um percentual de gordura mais elevado (20-25% vs 15-20% para homens). A circunferência da cintura é frequentemente mais pertinente: não deve ultrapassar 80 cm."
    },
    {
      question: "Qual IMC para um homem?",
      answer: "O IMC normal para um homem se situa entre <strong>18,5 e 24,9</strong>. Homens musculosos podem ter um IMC mais elevado (até 27-28) sem problema de saúde. A circunferência da cintura é um indicador complementar importante: não deve ultrapassar 94 cm."
    },
    {
      question: "Como calcular o IMC de uma criança?",
      answer: "O cálculo é o mesmo (peso/altura²), mas a <strong>interpretação é diferente</strong>. Não usamos os limites para adultos (18,5/25/30). Usamos curvas de corpulência que levam em conta a idade e o sexo. Uma criança deve estar situada nas curvas de percentis. Consulte nossa página <a href='/pt/imc-crianca' class='text-primary hover:underline'>IMC Criança</a>."
    },
    {
      question: "Podemos calcular o IMC durante a gravidez?",
      answer: "<strong>Não</strong>, o IMC não se aplica durante a gravidez. O ganho de peso é normal e necessário. O IMC pré-gestacional serve de referência para determinar o ganho de peso recomendado (11-16 kg para um IMC normal). Consulte seu ginecologista para acompanhamento personalizado."
    },
    {
      question: "O IMC é o mesmo para atletas?",
      answer: "<strong>O IMC é enviesado para atletas</strong>. A fórmula não distingue músculo e gordura. Um fisiculturista com 10% de gordura corporal pode ter um IMC de 30+ (classificado como obeso). Para atletas, prefira o <strong>FFMI</strong> (Fat-Free Mass Index), o percentual de gordura corporal ou a circunferência da cintura. Veja nossa página <a href='/pt/imc-atleta' class='text-primary hover:underline'>IMC Atleta</a>."
    },
    {
      question: "A partir de qual IMC estamos com sobrepeso?",
      answer: "Falamos de <strong>sobrepeso</strong> a partir de um IMC de <strong>25</strong>. Entre 25 e 29,9, é sobrepeso (ou pré-obesidade). A partir de 30, falamos de obesidade. Estes limites são definidos pela OMS e são usados mundialmente."
    },
    {
      question: "A partir de qual IMC estamos obesos?",
      answer: "A <strong>obesidade</strong> começa com um IMC de <strong>30</strong>. Ela se divide em três classes: Classe I (30-34,9) = obesidade moderada, Classe II (35-39,9) = obesidade severa, Classe III (≥40) = obesidade mórbida. Quanto mais elevado o IMC, mais os riscos de saúde aumentam."
    },
    {
      question: "Como perder peso eficazmente?",
      answer: "Para perder peso de forma duradoura: <strong>1)</strong> Crie um déficit calórico moderado (300-500 kcal/dia), <strong>2)</strong> Privilegie uma alimentação equilibrada rica em proteínas, <strong>3)</strong> Pratique atividade física regular (cardio + musculação), <strong>4)</strong> Durma suficientemente (7-8h), <strong>5)</strong> Seja paciente: vise 0,5-1 kg/semana no máximo."
    },
    {
      question: "A circunferência da cintura é mais importante que o IMC?",
      answer: "A circunferência da cintura é um <strong>excelente complemento</strong> ao IMC. Ela mede a gordura abdominal (visceral), que é mais perigosa para a saúde. Limites recomendados: Homens &lt;94 cm (risco moderado), &lt;102 cm (risco elevado). Mulheres &lt;80 cm (risco moderado), &lt;88 cm (risco elevado)."
    },
    {
      question: "O IMC muda com a idade?",
      answer: "A fórmula do IMC permanece a mesma, mas sua <strong>interpretação pode variar</strong>. Após 65 anos, um IMC ligeiramente mais elevado (até 27) pode ser protetor. Com a idade, a massa muscular diminui (sarcopenia), o que pode distorcer o IMC. Um acompanhamento médico regular é recomendado."
    },
    {
      question: "Qual é a diferença entre IMC e BMI?",
      answer: "Não há <strong>nenhuma diferença</strong>! IMC significa <strong>Índice de Massa Corporal</strong> (português) e BMI significa <strong>Body Mass Index</strong> (inglês). É exatamente o mesmo indicador com a mesma fórmula e os mesmos limites."
    },
    {
      question: "O IMC é igual para todas as etnias?",
      answer: "A OMS recomenda <strong>pontos de corte mais baixos para populações asiáticas</strong> (sobrepeso a partir de 23 e obesidade a partir de 27,5), pois estas apresentam maior risco metabólico com IMC menor. O Brasil, com sua composição étnica diversa — descendentes europeus, africanos, indígenas e asiáticos —, exige atenção especial. A composição corporal varia entre grupos étnicos: pessoas de ascendência africana tendem a ter maior densidade óssea e massa magra, enquanto descendentes asiáticos acumulam mais gordura visceral com IMC mais baixo. Profissionais de saúde devem considerar a etnia ao interpretar o IMC."
    },
    {
      question: "O SUS cobre tratamento para obesidade?",
      answer: "Sim. O <strong>SUS</strong> oferece acompanhamento multidisciplinar gratuito através do <strong>NASF</strong> (nutricionista, educador físico, psicólogo). A <strong>cirurgia bariátrica</strong> é coberta para pacientes com IMC≥40 ou IMC≥35 com comorbidades, mediante encaminhamento pela rede de atenção. As filas de espera podem chegar a 3 anos em alguns estados. Os <strong>CAPS</strong> oferecem suporte psicossocial para transtornos alimentares. Em Portugal, o <strong>SNS</strong> cobre consultas de nutrição nos centros de saúde e cirurgia bariátrica com critérios semelhantes aos da OMS."
    },
    {
      question: "O que é a obesidade de peso normal (TOFI)?",
      answer: "TOFI (<strong>Thin Outside, Fat Inside</strong>) descreve pessoas com IMC normal (18,5-24,9) mas com <strong>percentual de gordura corporal elevado</strong>, especialmente gordura visceral acumulada ao redor dos órgãos abdominais. É comum em populações sedentárias que não praticam exercícios de força. Estas pessoas apresentam riscos metabólicos semelhantes aos de obesos: resistência à insulina, colesterol elevado e inflamação crônica. Por isso, o IMC sozinho não é suficiente — medidas como circunferência da cintura e exames de composição corporal (bioimpedância, DEXA) são fundamentais."
    },
    {
      question: "Como a alimentação brasileira tradicional ajuda no peso saudável?",
      answer: "A dieta tradicional brasileira é protetora: <strong>arroz com feijão</strong> forma uma proteína completa com alto teor de fibras, frutas tropicais fornecem vitaminas e antioxidantes, e a mandioca oferece energia de baixo índice glicêmico. Porém, o Brasil é o <strong>4º maior mercado mundial de ultraprocessados</strong>. A classificação <strong>NOVA</strong>, criada pelo pesquisador brasileiro Carlos Monteiro (USP), categoriza alimentos pelo grau de processamento. O <strong>Guia Alimentar para a População Brasileira</strong> (2014) é considerado pela OMS referência mundial ao priorizar alimentos in natura sobre ultraprocessados."
    },
    {
      question: "A partir de qual IMC é indicada a cirurgia bariátrica?",
      answer: "No Brasil, os critérios para cirurgia bariátrica são: <strong>IMC≥40</strong> ou <strong>IMC≥35 com comorbidades</strong> (diabetes, hipertensão, apneia do sono). A <strong>Resolução CFM 2.131/2015</strong> permite cirurgia metabólica a partir de IMC≥30 com diabetes tipo 2 não controlado. O SUS exige acompanhamento prévio de 2 anos. A <strong>SBCBM</strong> (Sociedade Brasileira de Cirurgia Bariátrica e Metabólica) certifica centros de excelência. As técnicas disponíveis incluem bypass gástrico (Roux-en-Y), sleeve gástrico e banda gástrica ajustável."
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
            Perguntas frequentes
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">FAQ IMC</span> : Perguntas Frequentes sobre o IMC
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas às perguntas mais frequentes sobre o Índice de Massa Corporal
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Calcule seu IMC agora</h3>
          <p className="text-muted-foreground mb-6">
            Use nossa calculadora gratuita para conhecer seu índice de massa corporal
          </p>
          <Link
            to="/pt/imc"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Calcular meu IMC
          </Link>
        </div>

        {/* SUS/SNS coverage information */}
        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">IMC e acompanhamento gratuito pelo SUS e SNS</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              No Brasil, o <strong>SUS (Sistema Unico de Saude)</strong> garante acompanhamento nutricional gratuito a toda a populacao. A triagem do IMC e realizada nas <strong>UBS (Unidades Basicas de Saude)</strong> e os dados sao registrados no <strong>SISVAN (Sistema de Vigilancia Alimentar e Nutricional)</strong>. Pacientes com IMC elevado recebem encaminhamento para nutricionistas e educadores fisicos do <strong>NASF-AB</strong>, e casos graves tem acesso a cirurgia bariatrica pelo SUS. O <strong>Disque Saude (136)</strong> orienta cidadaos sobre servicos disponiveis em cada municipio. Em Portugal, o <strong>SNS (Servico Nacional de Saude)</strong> oferece consultas de nutricao, acompanhamento com medico de familia nas <strong>USF (Unidades de Saude Familiar)</strong> e cobertura para cirurgia bariatrica. O <strong>PNPAS</strong> da DGS e a plataforma <strong>Nutricao.pt</strong> disponibilizam orientacoes alimentares baseadas na dieta mediterranica. Ambos os sistemas publicos reconhecem a obesidade como doenca cronica e oferecem tratamento multidisciplinar sem custo para o paciente.
            </p>
            <p>
              A pesquisa <strong>VIGITEL</strong> (Vigilância de Fatores de Risco por Inquérito Telefônico), realizada anualmente pelo Ministério da Saúde, revela que <strong>60,3% dos adultos brasileiros estão com sobrepeso</strong> (IMC≥25) e <strong>25,9% são obesos</strong> (dados de 2023). As taxas variam por região: Sul e Sudeste apresentam maior prevalência de sobrepeso, enquanto Norte e Nordeste registram o crescimento mais acelerado. O <strong>Programa Academia da Saúde</strong> disponibiliza equipamentos de exercício ao ar livre e aulas gratuitas em mais de 4.000 municípios. O <strong>Guia Alimentar para a População Brasileira</strong> é considerado pela OMS um dos melhores guias alimentares do mundo, ao enfatizar alimentos in natura e minimamente processados em detrimento dos ultraprocessados.
            </p>
            <p>
              Em Portugal, o <strong>Programa Nacional para a Promoção da Alimentação Saudável (PNPAS)</strong> e a <strong>Estratégia Nacional para a Atividade Física</strong> orientam as políticas de gestão do peso. A taxa de obesidade em Portugal é de aproximadamente <strong>22%</strong> (estudo IAN-AF), com prevalência mais elevada nos Açores e na Madeira. O SNS disponibiliza consultas de nutrição gratuitas nos centros de saúde, e o <strong>imposto sobre bebidas açucaradas</strong>, implementado em 2017, contribuiu para a redução do consumo de refrigerantes. Portugal também aprovou a cobertura de cirurgia bariátrica pelo SNS com critérios semelhantes às diretrizes da OMS, reforçando o compromisso com o tratamento da obesidade como doença crónica prioritária.
            </p>
          </div>
        </div>

        {/* SEO Schema */}
        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">Tudo sobre o IMC</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Esta <strong>FAQ IMC</strong> responde às perguntas mais comuns sobre o cálculo e
              interpretação do <strong>Índice de Massa Corporal</strong>. Seja você procurando saber
              <strong> como calcular o IMC</strong>, <strong>qual é o IMC ideal</strong>, ou
              <strong> se o IMC é confiável</strong>, você encontrará as respostas aqui.
            </p>
            <p>
              O IMC é uma ferramenta simples mas útil para avaliar sua corpulência. Entretanto, ele tem limites
              e deve ser complementado por outros indicadores. Não hesite em consultar um profissional de
              saúde para um balanço completo.
            </p>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 FAQ IMC - Respostas às suas perguntas</p>
        </footer>
      </div>
    </div>
  );
};

export default PerguntasFrequentesIMC;
