import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SEOHead } from "@/components/SEOHead";
import PageLoader from "@/components/PageLoader";

// Main pages
const Index = lazy(() => import("./pages/Index"));
const IMCHomme = lazy(() => import("./pages/IMCHomme"));
const IMCFemme = lazy(() => import("./pages/IMCFemme"));
const IMCSportif = lazy(() => import("./pages/IMCSportif"));
const IMCEnfant = lazy(() => import("./pages/IMCEnfant"));

// Explanatory pages
const TableauIMC = lazy(() => import("./pages/TableauIMC"));
const InterpretationIMC = lazy(() => import("./pages/InterpretationIMC"));
const LimitesIMC = lazy(() => import("./pages/LimitesIMC"));

// Complementary pages
const FAQIMC = lazy(() => import("./pages/FAQIMC"));
const SanteEtPoids = lazy(() => import("./pages/SanteEtPoids"));

// English pages
const BMI = lazy(() => import("./pages/en/BMI"));
const BMIMen = lazy(() => import("./pages/en/BMIMen"));
const BMIWomen = lazy(() => import("./pages/en/BMIWomen"));
const BMIAthletes = lazy(() => import("./pages/en/BMIAthletes"));
const BMIChildren = lazy(() => import("./pages/en/BMIChildren"));
const BMITable = lazy(() => import("./pages/en/BMITable"));
const BMIInterpretation = lazy(() => import("./pages/en/BMIInterpretation"));
const BMILimitations = lazy(() => import("./pages/en/BMILimitations"));
const BMIFAQ = lazy(() => import("./pages/en/BMIFAQ"));
const HealthWeight = lazy(() => import("./pages/en/HealthWeight"));

// Spanish pages
const IMCEs = lazy(() => import("./pages/es/IMC"));
const IMCHombre = lazy(() => import("./pages/es/IMCHombre"));
const IMCMujer = lazy(() => import("./pages/es/IMCMujer"));
const IMCDeportista = lazy(() => import("./pages/es/IMCDeportista"));
const IMCNino = lazy(() => import("./pages/es/IMCNino"));
const TablaIMC = lazy(() => import("./pages/es/TablaIMC"));
const InterpretacionIMC = lazy(() => import("./pages/es/InterpretacionIMC"));
const LimitacionesIMC = lazy(() => import("./pages/es/LimitacionesIMC"));
const PreguntasFrecuentesIMC = lazy(() => import("./pages/es/PreguntasFrecuentesIMC"));
const SaludPeso = lazy(() => import("./pages/es/SaludPeso"));

// Portuguese pages
const IMCPt = lazy(() => import("./pages/pt/IMC"));
const IMCHomemPt = lazy(() => import("./pages/pt/IMCHomem"));
const IMCMulherPt = lazy(() => import("./pages/pt/IMCMulher"));
const IMCAtleta = lazy(() => import("./pages/pt/IMCAtleta"));
const IMCCrianca = lazy(() => import("./pages/pt/IMCCrianca"));
const TabelaIMC = lazy(() => import("./pages/pt/TabelaIMC"));
const InterpretacaoIMC = lazy(() => import("./pages/pt/InterpretacaoIMC"));
const LimitacoesIMC = lazy(() => import("./pages/pt/LimitacoesIMC"));
const PerguntasFrequentesIMC = lazy(() => import("./pages/pt/PerguntasFrequentesIMC"));
const SaudePeso = lazy(() => import("./pages/pt/SaudePeso"));

// Arabic pages
const IMCAr = lazy(() => import("./pages/ar/IMC"));
const IMCRajul = lazy(() => import("./pages/ar/IMCRajul"));
const IMCMaraa = lazy(() => import("./pages/ar/IMCMaraa"));
const IMCRiyadi = lazy(() => import("./pages/ar/IMCRiyadi"));
const IMCTifl = lazy(() => import("./pages/ar/IMCTifl"));
const JadwalIMC = lazy(() => import("./pages/ar/JadwalIMC"));
const TafsirIMC = lazy(() => import("./pages/ar/TafsirIMC"));
const HududIMC = lazy(() => import("./pages/ar/HududIMC"));
const AsilaIMC = lazy(() => import("./pages/ar/AsilaIMC"));
const SihaWazn = lazy(() => import("./pages/ar/SihaWazn"));

// German pages
const BMIDe = lazy(() => import("./pages/de/BMI"));
const BMIMaenner = lazy(() => import("./pages/de/BMIMaenner"));
const BMIFrauen = lazy(() => import("./pages/de/BMIFrauen"));
const BMISportler = lazy(() => import("./pages/de/BMISportler"));
const BMIKinder = lazy(() => import("./pages/de/BMIKinder"));
const BMITabelle = lazy(() => import("./pages/de/BMITabelle"));
const BMIInterpretationDe = lazy(() => import("./pages/de/BMIInterpretation"));
const BMIGrenzen = lazy(() => import("./pages/de/BMIGrenzen"));
const BMIFAQDe = lazy(() => import("./pages/de/BMIFAQ"));
const GesundheitGewicht = lazy(() => import("./pages/de/GesundheitGewicht"));

// Italian pages
const IMCIt = lazy(() => import("./pages/it/IMC"));
const IMCUomo = lazy(() => import("./pages/it/IMCUomo"));
const IMCDonna = lazy(() => import("./pages/it/IMCDonna"));
const IMCSportivo = lazy(() => import("./pages/it/IMCSportivo"));
const IMCBambino = lazy(() => import("./pages/it/IMCBambino"));
const TabellaIMC = lazy(() => import("./pages/it/TabellaIMC"));
const InterpretazioneIMC = lazy(() => import("./pages/it/InterpretazioneIMC"));
const LimitiIMC = lazy(() => import("./pages/it/LimitiIMC"));
const DomandeFrequentiIMC = lazy(() => import("./pages/it/DomandeFrequentiIMC"));
const SalutePeso = lazy(() => import("./pages/it/SalutePeso"));

// Hindi pages
const BMIHi = lazy(() => import("./pages/hi/BMI"));
const BMIPurush = lazy(() => import("./pages/hi/BMIPurush"));
const BMIMahila = lazy(() => import("./pages/hi/BMIMahila"));
const BMIKhiladi = lazy(() => import("./pages/hi/BMIKhiladi"));
const BMIBachche = lazy(() => import("./pages/hi/BMIBachche"));
const BMITalika = lazy(() => import("./pages/hi/BMITalika"));
const BMIVyakhya = lazy(() => import("./pages/hi/BMIVyakhya"));
const BMISeemayen = lazy(() => import("./pages/hi/BMISeemayen"));
const BMIPrashn = lazy(() => import("./pages/hi/BMIPrashn"));
const SwasthyaVajan = lazy(() => import("./pages/hi/SwasthyaVajan"));

// Chinese pages
const BMIZh = lazy(() => import("./pages/zh/BMI"));
const BMINanxing = lazy(() => import("./pages/zh/BMINanxing"));
const BMINvxing = lazy(() => import("./pages/zh/BMINvxing"));
const BMIYundongyuan = lazy(() => import("./pages/zh/BMIYundongyuan"));
const BMIErtong = lazy(() => import("./pages/zh/BMIErtong"));
const BMIBiao = lazy(() => import("./pages/zh/BMIBiao"));
const BMIJiedu = lazy(() => import("./pages/zh/BMIJiedu"));
const BMIJuxianxing = lazy(() => import("./pages/zh/BMIJuxianxing"));
const BMIChangjianwenti = lazy(() => import("./pages/zh/BMIChangjianwenti"));
const JiankangTizhong = lazy(() => import("./pages/zh/JiankangTizhong"));

// About & Legal pages
const About = lazy(() => import("./pages/About"));
const APropos = lazy(() => import("./pages/APropos"));
const Legal = lazy(() => import("./pages/Legal"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));

// Keep NotFound static (small, needed for fallback)
import NotFound from "./pages/NotFound";
const Glossary = lazy(() => import("./pages/Glossary"));
const Widget = lazy(() => import("./pages/Widget"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
      <BrowserRouter>
        <SEOHead />
        <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Homepage = English */}
          <Route path="/" element={<BMI />} />

          {/* French pages */}
          <Route path="/imc" element={<Index />} />
          <Route path="/imc-homme" element={<IMCHomme />} />
          <Route path="/imc-femme" element={<IMCFemme />} />
          <Route path="/imc-sportif" element={<IMCSportif />} />
          <Route path="/imc-enfant" element={<IMCEnfant />} />

          {/* Explanatory pages */}
          <Route path="/tableau-imc" element={<TableauIMC />} />
          <Route path="/interpretation-imc" element={<InterpretationIMC />} />
          <Route path="/limites-imc" element={<LimitesIMC />} />

          {/* Complementary pages */}
          <Route path="/faq-imc" element={<FAQIMC />} />
          <Route path="/sante-et-poids" element={<SanteEtPoids />} />

          {/* English pages */}
          <Route path="/bmi-men" element={<BMIMen />} />
          <Route path="/bmi-women" element={<BMIWomen />} />
          <Route path="/bmi-athletes" element={<BMIAthletes />} />
          <Route path="/bmi-children" element={<BMIChildren />} />
          <Route path="/bmi-table" element={<BMITable />} />
          <Route path="/bmi-interpretation" element={<BMIInterpretation />} />
          <Route path="/bmi-limitations" element={<BMILimitations />} />
          <Route path="/bmi-faq" element={<BMIFAQ />} />
          <Route path="/health-weight" element={<HealthWeight />} />

          {/* Spanish pages */}
          <Route path="/es/imc" element={<IMCEs />} />
          <Route path="/es/imc-hombre" element={<IMCHombre />} />
          <Route path="/es/imc-mujer" element={<IMCMujer />} />
          <Route path="/es/imc-deportista" element={<IMCDeportista />} />
          <Route path="/es/imc-nino" element={<IMCNino />} />
          <Route path="/es/tabla-imc" element={<TablaIMC />} />
          <Route path="/es/interpretacion-imc" element={<InterpretacionIMC />} />
          <Route path="/es/limitaciones-imc" element={<LimitacionesIMC />} />
          <Route path="/es/preguntas-frecuentes-imc" element={<PreguntasFrecuentesIMC />} />
          <Route path="/es/salud-peso" element={<SaludPeso />} />

          {/* Portuguese pages */}
          <Route path="/pt/imc" element={<IMCPt />} />
          <Route path="/pt/imc-homem" element={<IMCHomemPt />} />
          <Route path="/pt/imc-mulher" element={<IMCMulherPt />} />
          <Route path="/pt/imc-atleta" element={<IMCAtleta />} />
          <Route path="/pt/imc-crianca" element={<IMCCrianca />} />
          <Route path="/pt/tabela-imc" element={<TabelaIMC />} />
          <Route path="/pt/interpretacao-imc" element={<InterpretacaoIMC />} />
          <Route path="/pt/limitacoes-imc" element={<LimitacoesIMC />} />
          <Route path="/pt/perguntas-frequentes-imc" element={<PerguntasFrequentesIMC />} />
          <Route path="/pt/saude-peso" element={<SaudePeso />} />

          {/* Arabic pages */}
          <Route path="/ar/imc" element={<IMCAr />} />
          <Route path="/ar/imc-rajul" element={<IMCRajul />} />
          <Route path="/ar/imc-maraa" element={<IMCMaraa />} />
          <Route path="/ar/imc-riyadi" element={<IMCRiyadi />} />
          <Route path="/ar/imc-tifl" element={<IMCTifl />} />
          <Route path="/ar/jadwal-imc" element={<JadwalIMC />} />
          <Route path="/ar/tafsir-imc" element={<TafsirIMC />} />
          <Route path="/ar/hudud-imc" element={<HududIMC />} />
          <Route path="/ar/asila-imc" element={<AsilaIMC />} />
          <Route path="/ar/siha-wazn" element={<SihaWazn />} />

          {/* German pages */}
          <Route path="/de/bmi" element={<BMIDe />} />
          <Route path="/de/bmi-maenner" element={<BMIMaenner />} />
          <Route path="/de/bmi-frauen" element={<BMIFrauen />} />
          <Route path="/de/bmi-sportler" element={<BMISportler />} />
          <Route path="/de/bmi-kinder" element={<BMIKinder />} />
          <Route path="/de/bmi-tabelle" element={<BMITabelle />} />
          <Route path="/de/bmi-interpretation" element={<BMIInterpretationDe />} />
          <Route path="/de/bmi-grenzen" element={<BMIGrenzen />} />
          <Route path="/de/bmi-faq" element={<BMIFAQDe />} />
          <Route path="/de/gesundheit-gewicht" element={<GesundheitGewicht />} />

          {/* Italian pages */}
          <Route path="/it/imc" element={<IMCIt />} />
          <Route path="/it/imc-uomo" element={<IMCUomo />} />
          <Route path="/it/imc-donna" element={<IMCDonna />} />
          <Route path="/it/imc-sportivo" element={<IMCSportivo />} />
          <Route path="/it/imc-bambino" element={<IMCBambino />} />
          <Route path="/it/tabella-imc" element={<TabellaIMC />} />
          <Route path="/it/interpretazione-imc" element={<InterpretazioneIMC />} />
          <Route path="/it/limiti-imc" element={<LimitiIMC />} />
          <Route path="/it/domande-frequenti-imc" element={<DomandeFrequentiIMC />} />
          <Route path="/it/salute-peso" element={<SalutePeso />} />

          {/* Hindi pages */}
          <Route path="/hi/bmi" element={<BMIHi />} />
          <Route path="/hi/bmi-purush" element={<BMIPurush />} />
          <Route path="/hi/bmi-mahila" element={<BMIMahila />} />
          <Route path="/hi/bmi-khiladi" element={<BMIKhiladi />} />
          <Route path="/hi/bmi-bachche" element={<BMIBachche />} />
          <Route path="/hi/bmi-talika" element={<BMITalika />} />
          <Route path="/hi/bmi-vyakhya" element={<BMIVyakhya />} />
          <Route path="/hi/bmi-seemayen" element={<BMISeemayen />} />
          <Route path="/hi/bmi-prashn" element={<BMIPrashn />} />
          <Route path="/hi/swasthya-vajan" element={<SwasthyaVajan />} />

          {/* Chinese pages */}
          <Route path="/zh/bmi" element={<BMIZh />} />
          <Route path="/zh/bmi-nanxing" element={<BMINanxing />} />
          <Route path="/zh/bmi-nvxing" element={<BMINvxing />} />
          <Route path="/zh/bmi-yundongyuan" element={<BMIYundongyuan />} />
          <Route path="/zh/bmi-ertong" element={<BMIErtong />} />
          <Route path="/zh/bmi-biao" element={<BMIBiao />} />
          <Route path="/zh/bmi-jiedu" element={<BMIJiedu />} />
          <Route path="/zh/bmi-juxianxing" element={<BMIJuxianxing />} />
          <Route path="/zh/bmi-changjianwenti" element={<BMIChangjianwenti />} />
          <Route path="/zh/jiankang-tizhong" element={<JiankangTizhong />} />


          {/* About & Legal pages */}
          <Route path="/about" element={<About />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/widget" element={<Widget />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
