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

const FAQIMC = () => {
  const faqs = [
    {
      question: "Qu'est-ce que l'IMC et comment le calcule-t-on en France ?",
      answer: "L'<strong>IMC (Indice de Masse Corporelle)</strong> est l'indicateur de référence utilisé par la <strong>HAS</strong> (Haute Autorité de Santé) pour évaluer la corpulence. Formule : IMC = Poids (kg) / Taille² (m). Exemple pour un Français moyen : 77 kg / (1,78)² = <strong>24,3</strong>. En France, l'IMC moyen est de <strong>25,4</strong> selon l'enquête ObÉpi-Roche 2023. Utilisez notre <a href='/' class='text-primary hover:underline'>calculateur IMC gratuit</a>."
    },
    {
      question: "L'obésité est-elle remboursée par la Sécurité Sociale ?",
      answer: "Oui, la prise en charge de l'obésité est <strong>partiellement remboursée</strong> en France. Les consultations chez un <strong>médecin nutritionniste</strong> sont remboursées à 70% sur prescription. Les consultations chez un <strong>diététicien libéral</strong> ne sont pas remboursées par la Sécu (sauf dans le cadre du dispositif « Mon Bilan Diététique »). La <strong>chirurgie bariatrique</strong> est prise en charge à 100% pour un IMC ≥ 40, ou ≥ 35 avec comorbidités, après 6-12 mois de suivi pluridisciplinaire."
    },
    {
      question: "Quelle est la différence entre un nutritionniste et un diététicien en France ?",
      answer: "Le <strong>médecin nutritionniste</strong> est un médecin (6 ans d'études + spécialisation) qui peut prescrire des médicaments et des examens. Ses consultations sont remboursées par la Sécu. Le <strong>diététicien</strong> est un professionnel de santé (BTS ou DUT) qui ne prescrit pas de médicaments. Ses consultations sont remboursées uniquement dans certains cadres (hôpital, dispositif « Mon Bilan Diététique » depuis 2024). Les deux sont compétents pour vous accompagner dans la gestion de votre poids."
    },
    {
      question: "Qu'est-ce que le PNNS « Manger Bouger » recommande pour l'IMC ?",
      answer: "Le <strong>Programme National Nutrition Santé</strong> (PNNS) recommande pour maintenir un IMC sain : <strong>1)</strong> 5 fruits et légumes par jour, <strong>2)</strong> Limiter les aliments ultra-transformés (classés Nova 4), <strong>3)</strong> 30 minutes d'activité physique quotidienne, <strong>4)</strong> Limiter la sédentarité (écrans, position assise), <strong>5)</strong> Privilégier les féculents complets, <strong>6)</strong> Consommer du poisson 2 fois/semaine. Le site <strong>mangerbouger.fr</strong> propose des outils personnalisés."
    },
    {
      question: "L'IMC est-il le même pour tous les Français ?",
      answer: "Non, des <strong>disparités régionales</strong> existent en France. Les <strong>Hauts-de-France</strong> ont le taux d'obésité le plus élevé (26%) contre <strong>13% en Île-de-France</strong> (ObÉpi-Roche 2023). Les catégories socio-professionnelles jouent aussi : les ouvriers ont un IMC moyen de <strong>26,3</strong> vs <strong>25,1</strong> chez les cadres (INSERM). Les DOM-TOM sont également plus touchés que la métropole."
    },
    {
      question: "Peut-on faire du sport sur ordonnance pour réduire son IMC ?",
      answer: "Oui ! Depuis le <strong>décret de 2016</strong> (« Sport sur ordonnance »), votre médecin peut prescrire de l'<strong>APA (Activité Physique Adaptée)</strong> si vous avez une ALD (Affection Longue Durée), dont l'obésité sévère. La loi de 2022 a élargi ce dispositif. Les séances sont encadrées par un <strong>enseignant APA</strong> (licence STAPS mention APA). Le remboursement varie selon les mutuelles et certaines collectivités locales (Paris, Lyon, Strasbourg)."
    },
    {
      question: "Mon médecin traitant peut-il m'aider avec mon IMC ?",
      answer: "Absolument. Le <strong>médecin traitant</strong> est le premier interlocuteur pour les questions de poids en France. Il peut : <strong>1)</strong> Calculer votre IMC et mesurer votre tour de taille, <strong>2)</strong> Prescrire un bilan sanguin (glycémie, cholestérol, triglycérides), <strong>3)</strong> Vous orienter vers un nutritionniste ou un CSO (Centre Spécialisé de l'Obésité), <strong>4)</strong> Prescrire du sport sur ordonnance. Le <strong>bilan de santé gratuit</strong> de la Sécu tous les 5 ans inclut aussi le calcul de l'IMC."
    },
    {
      question: "Qu'est-ce que le « paradoxe français » et l'IMC ?",
      answer: "Le <strong>paradoxe français</strong> fait référence au fait que les Français ont historiquement un taux d'obésité plus bas que les Américains ou les Britanniques malgré une alimentation riche (fromages, vin, charcuterie). Les explications incluent : <strong>portions plus petites</strong>, <strong>repas structurés</strong> (entrée-plat-dessert à heures fixes), alimentation variée, et <strong>culture gastronomique</strong> qui valorise la qualité sur la quantité. Cependant, ce paradoxe <strong>s'estompe</strong> : l'obésité en France a triplé en 30 ans (6% en 1997 → 17% en 2023)."
    },
    {
      question: "L'IMC du carnet de santé est-il fiable pour les enfants français ?",
      answer: "Le <strong>carnet de santé français</strong> contient des <strong>courbes de corpulence</strong> mises à jour par l'INSERM et le PNNS. Ces courbes utilisent des percentiles et le <strong>rebond d'adiposité</strong> (normalement vers 6 ans) pour détecter précocement le surpoids. Elles sont fiables mais doivent être interprétées par un pédiatre. En France, <strong>17% des enfants</strong> sont en surpoids (étude Esteban, Santé Publique France). Voir notre page <a href='/imc-enfant' class='text-primary hover:underline'>IMC Enfant</a>."
    },
    {
      question: "Le Nutri-Score aide-t-il à maintenir un bon IMC ?",
      answer: "Le <strong>Nutri-Score</strong> (classement A à E) est un outil d'aide au choix alimentaire développé en France par l'équipe du Pr Serge Hercberg (INSERM). Des études montrent qu'une alimentation guidée par le Nutri-Score est associée à un <strong>IMC plus bas</strong>. Depuis 2017, il est affiché volontairement sur les emballages en France. Privilégiez les produits notés <strong>A et B</strong>. Attention : le Nutri-Score compare des produits d'une même catégorie, il ne remplace pas un conseil nutritionnel."
    },
    {
      question: "Comment obtenir une chirurgie bariatrique en France ?",
      answer: "En France, la <strong>chirurgie bariatrique</strong> (sleeve, bypass) est accessible pour un IMC ≥ 40 ou ≥ 35 avec comorbidités. Le parcours HAS comprend : <strong>1)</strong> Suivi pluridisciplinaire de 6-12 mois (nutritionniste, psychologue, endocrinologue), <strong>2)</strong> Accord du comité médico-chirurgical, <strong>3)</strong> Entente préalable de la CPAM. Prise en charge à <strong>100%</strong> par la Sécurité Sociale. Environ <strong>50 000 interventions</strong> sont réalisées chaque année en France."
    },
    {
      question: "Les régimes sont-ils dangereux selon l'ANSES ?",
      answer: "L'<strong>ANSES</strong> (Agence nationale de sécurité sanitaire) a publié un rapport alertant sur les <strong>dangers des régimes restrictifs</strong> : Dukan, Atkins, détox, jeûne prolongé... Ces régimes entraînent souvent un <strong>effet yo-yo</strong> (reprise du poids + déperdition musculaire) et peuvent causer des carences nutritionnelles. L'ANSES recommande plutôt un <strong>rééquilibrage alimentaire progressif</strong> encadré par un professionnel, conforme aux recommandations du PNNS."
    },
    {
      question: "Quel est l'IMC moyen des Français en 2024 ?",
      answer: "Selon l'enquête <strong>ObÉpi-Roche 2023</strong> (la référence en France), l'IMC moyen des Français est de <strong>25,4</strong> (25,8 pour les hommes, 25,1 pour les femmes). <strong>47% de la population</strong> est en surpoids ou obèse. L'obésité touche <strong>17% des adultes</strong> (vs 8,3% en 1997). La France reste toutefois en dessous de la moyenne européenne (16% vs 23% pour l'UE)."
    },
    {
      question: "Le tour de taille est-il plus fiable que l'IMC en France ?",
      answer: "La <strong>HAS</strong> recommande de mesurer <strong>les deux</strong>. Le tour de taille mesure la graisse abdominale (viscérale), plus dangereuse que la graisse sous-cutanée. Seuils HAS : Hommes &lt;94 cm (modéré), &lt;102 cm (élevé). Femmes &lt;80 cm (modéré), &lt;88 cm (élevé). En France, <strong>41% des femmes et 48% des hommes</strong> dépassent les seuils de risque modéré (Santé Publique France)."
    },
    {
      question: "L'IMC est-il le même selon l'origine ethnique ?",
      answer: "L'<strong>OMS</strong> recommande des seuils abaissés pour les <strong>populations asiatiques</strong> : surpoids dès un IMC de <strong>23</strong> (au lieu de 25) et obésité dès 27,5. La France, avec sa population diverse, est concernée par ces adaptations. Des études de l'<strong>INSERM</strong> montrent un risque métabolique (diabète de type 2, syndrome métabolique) accru à un IMC plus bas pour certaines populations. Votre médecin peut adapter l'interprétation de votre <a href='/' class='text-primary hover:underline'>calculateur IMC</a> en fonction de votre profil."
    },
    {
      question: "Qu'est-ce que l'obésité à poids normal (TOFI) ?",
      answer: "Le syndrome <strong>TOFI</strong> (Thin Outside, Fat Inside) désigne des personnes ayant un <strong>IMC normal</strong> (18,5-25) mais un excès de <strong>graisse viscérale</strong> dangereux pour la santé. En France, on estime que <strong>20 à 30%</strong> des personnes de poids normal présentent ce profil à risque. Le <strong>tour de taille</strong> est essentiel pour les détecter. Les risques cardiovasculaires et de diabète sont similaires à ceux du surpoids. Un <a href='/interpretation-imc' class='text-primary hover:underline'>IMC normal</a> ne garantit donc pas l'absence de risque métabolique."
    },
    {
      question: "Existe-t-il une nouvelle formule d'IMC plus précise ?",
      answer: "La <strong>formule de Trefethen</strong>, proposée par l'université d'Oxford en 2013, utilise le calcul : <strong>1,3 × poids / taille<sup>2,5</sup></strong>. Elle corrige le biais de la formule classique qui <strong>surestime l'IMC des personnes grandes</strong> et le sous-estime pour les plus petites. Cette formule n'est pas officiellement adoptée par la <strong>HAS</strong> en France, mais elle est discutée dans la littérature médicale. Notre <a href='/' class='text-primary hover:underline'>calculateur IMC</a> utilise la formule standard de Quételet, reconnue internationalement."
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
            Questions fréquentes
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">FAQ IMC</span> : Réponses aux Questions sur l'IMC
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Réponses aux questions des Français sur l'IMC, avec des références HAS, INSERM, PNNS et Sécurité Sociale
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Calculez votre IMC maintenant</h3>
          <p className="text-muted-foreground mb-6">
            Utilisez notre calculateur gratuit pour connaître votre indice de masse corporelle
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Calculer mon IMC
          </Link>
        </div>

        {/* SEO Schema */}
        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">Tout savoir sur l'IMC en France</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Cette <strong>FAQ IMC</strong> répond aux questions les plus courantes des Français sur le calcul et
              l'interprétation de l'<strong>Indice de Masse Corporelle</strong>. Que vous cherchiez à savoir
              <strong> comment calculer l'IMC</strong>, <strong>quel est l'IMC idéal</strong>, ou
              <strong> si l'IMC est fiable</strong>, vous trouverez les réponses ici, avec les références
              officielles de la <strong>HAS</strong>, de l'<strong>INSERM</strong> et du <strong>PNNS</strong>.
            </p>
            <p>
              En France, l'IMC est utilisé comme outil de dépistage de première ligne par les médecins traitants
              et les centres de santé. Le <strong>bilan de santé gratuit</strong> proposé par la Sécurité Sociale
              tous les 5 ans inclut systématiquement le calcul de l'IMC et la mesure du tour de taille.
              Depuis 2024, le dispositif « <strong>Mon bilan prévention</strong> » propose un bilan personnalisé
              à 25, 45 et 65 ans, incluant l'évaluation de l'IMC et des conseils nutritionnels adaptés.
            </p>
            <p>
              L'IMC est un outil simple mais qui a ses limites et doit être complété par d'autres indicateurs
              comme le <strong>tour de taille</strong> et le <strong>bilan sanguin</strong>. N'hésitez pas à
              consulter votre médecin traitant ou un nutritionniste pour un bilan complet. En cas d'obésité
              sévère (IMC ≥ 35), les <strong>37 CSO</strong> (Centres Spécialisés de l'Obésité) répartis sur
              tout le territoire français assurent une prise en charge pluridisciplinaire.
            </p>
            <p>
              La France innove également dans les <strong>outils numériques de santé</strong> pour la gestion
              du poids. « <strong>Mon Espace Santé</strong> » (lancé en 2022) permet de suivre ses données de
              santé, y compris l'évolution de son IMC dans le temps. Le dispositif
              « <strong>Mon Bilan Prévention</strong> » (2024) offre des bilans de santé gratuits aux âges clés
              de 25, 45 et 65 ans, incluant une évaluation de l'IMC et des conseils personnalisés. Les outils
              comme le <strong>Nutri-Score</strong> sur les emballages et l'application « Mon Nutri-Score »
              aident les consommateurs français à faire de meilleurs choix alimentaires au quotidien. Le
              <strong> PNNS 4</strong> (2019-2023) vise une réduction de l'obésité de 20% d'ici 2030.
            </p>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 FAQ IMC - Réponses à vos questions</p>
        </footer>
      </div>
    </div>
  );
};

export default FAQIMC;
