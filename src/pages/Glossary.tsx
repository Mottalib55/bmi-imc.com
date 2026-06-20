import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { Helmet } from "react-helmet-async";
import { BookOpen } from "lucide-react";

interface Term {
  term: string;
  definition: string;
}

const glossaryTerms: Term[] = [
  { term: "BMI (Body Mass Index)", definition: "A numerical value calculated by dividing a person's weight in kilograms by the square of their height in meters (kg/m2). Used worldwide as a screening tool for weight categories." },
  { term: "IMC (Indice de Masse Corporelle)", definition: "The French term for Body Mass Index. Same formula and interpretation as BMI, widely used in French-speaking countries and international health organizations." },
  { term: "Body Mass Index", definition: "A measure of body fat based on height and weight that applies to adult men and women. Developed by Adolphe Quetelet in the 1830s and adopted by the WHO as the standard weight classification metric." },
  { term: "Underweight", definition: "A BMI classification below 18.5 kg/m2 according to the WHO. Associated with increased risk of malnutrition, osteoporosis, weakened immune system, and fertility issues." },
  { term: "Normal Weight", definition: "A BMI between 18.5 and 24.9 kg/m2. This range is associated with the lowest risk of weight-related chronic diseases according to WHO and CDC guidelines." },
  { term: "Overweight", definition: "A BMI between 25.0 and 29.9 kg/m2. Indicates excess body weight that may increase the risk of cardiovascular disease, type 2 diabetes, and other health conditions." },
  { term: "Obese / Obesity", definition: "A BMI of 30.0 kg/m2 or higher. The WHO classifies obesity into three classes: Class I (30-34.9), Class II (35-39.9), and Class III (40+), each with increasing health risks." },
  { term: "Morbid Obesity", definition: "Also called Class III obesity, defined as a BMI of 40 or higher. Associated with severely increased risk of multiple chronic conditions and reduced life expectancy." },
  { term: "Healthy Weight", definition: "A weight range considered optimal for health, typically corresponding to a BMI between 18.5 and 24.9. The specific healthy weight depends on height, age, sex, and body composition." },
  { term: "Ideal Weight", definition: "The theoretical weight at which health risks are minimized for a given height. Often calculated using formulas like Devine, Hamwi, or Robinson, or by targeting a BMI of 21-22." },
  { term: "Waist Circumference", definition: "The measurement around the natural waistline. A waist circumference above 102 cm (40 in) for men or 88 cm (35 in) for women indicates increased cardiovascular and metabolic risk." },
  { term: "Waist-to-Hip Ratio (WHR)", definition: "The ratio of waist circumference to hip circumference. A WHR above 0.90 for men or 0.85 for women indicates abdominal obesity and elevated health risk per WHO guidelines." },
  { term: "Body Fat Percentage", definition: "The proportion of total body weight that is composed of fat tissue. Healthy ranges are typically 10-20% for men and 18-28% for women, though this varies by age and fitness level." },
  { term: "Visceral Fat", definition: "Fat stored deep within the abdominal cavity around vital organs. More metabolically active and strongly associated with cardiovascular disease, insulin resistance, and type 2 diabetes than subcutaneous fat." },
  { term: "Subcutaneous Fat", definition: "Fat stored directly under the skin. Less metabolically dangerous than visceral fat but contributes to overall body weight and BMI calculation." },
  { term: "Metabolic Rate (BMR)", definition: "Basal Metabolic Rate is the number of calories your body burns at rest to maintain basic life functions. BMR accounts for 60-75% of total daily energy expenditure and decreases with age." },
  { term: "TDEE (Total Daily Energy Expenditure)", definition: "The total number of calories burned per day, including BMR, physical activity, and the thermic effect of food. Used to determine caloric needs for weight management." },
  { term: "Lean Body Mass (LBM)", definition: "Total body weight minus body fat weight. Includes muscles, bones, organs, and water. Athletes often have high LBM, which can cause BMI to overestimate their body fat." },
  { term: "FFMI (Fat-Free Mass Index)", definition: "A metric similar to BMI but calculated using lean body mass instead of total weight. More accurate for athletes and muscular individuals. Normal range is 17-20 for men, 14-17 for women." },
  { term: "Quetelet Index", definition: "The original name for BMI, named after Belgian mathematician Adolphe Quetelet who developed the formula in the 1830s. The term BMI replaced it in common usage after Ancel Keys' 1972 publication." },
  { term: "WHO (World Health Organization)", definition: "The United Nations agency responsible for international public health. Established the standard BMI classification system used worldwide for categorizing underweight, normal, overweight, and obesity." },
  { term: "CDC (Centers for Disease Control)", definition: "The US national public health agency. Provides BMI guidelines, growth charts for children, and recommends annual BMI screening for all adults as part of routine health monitoring." },
  { term: "NHS (National Health Service)", definition: "The publicly funded healthcare system in the United Kingdom. Provides free BMI calculators and recommends adjusted BMI thresholds for South Asian, Chinese, and Black African populations." },
  { term: "Percentile (BMI)", definition: "For children and adolescents (ages 2-19), BMI is expressed as a percentile relative to other children of the same age and sex. Above the 85th percentile is overweight; above the 95th is obese." },
  { term: "Growth Chart", definition: "Age- and sex-specific charts used to track children's BMI over time. The WHO and CDC each provide standardized growth charts used by pediatricians worldwide." },
  { term: "Calorie Deficit", definition: "Consuming fewer calories than the body expends. A sustained calorie deficit of approximately 500 calories per day typically results in about 0.5 kg (1 lb) of weight loss per week." },
  { term: "Macronutrients", definition: "The three main categories of nutrients that provide energy: carbohydrates (4 cal/g), proteins (4 cal/g), and fats (9 cal/g). Balanced macronutrient intake supports healthy weight management." },
  { term: "Metabolic Syndrome", definition: "A cluster of conditions (high blood pressure, high blood sugar, excess waist fat, abnormal cholesterol) that occur together and increase risk of heart disease, stroke, and type 2 diabetes." },
  { term: "Insulin Resistance", definition: "A condition where cells become less responsive to insulin, leading to elevated blood sugar. Strongly associated with obesity (especially visceral fat) and a precursor to type 2 diabetes." },
  { term: "Adiposity", definition: "The state of being severely overweight or having excessive body fat. Medical professionals use this term to describe the degree of fat accumulation in the body." },
  { term: "Sarcopenia", definition: "Age-related loss of muscle mass and strength. Can cause BMI to underestimate health risks in elderly individuals who have lost muscle but retained or gained fat tissue." },
  { term: "Body Composition", definition: "The proportions of fat, muscle, bone, and water in the body. Two people with the same BMI can have very different body compositions and therefore different health risk profiles." },
  { term: "DEXA Scan", definition: "Dual-energy X-ray Absorptiometry. A medical imaging technique that provides precise measurements of body fat percentage, lean mass, and bone density. Considered the gold standard for body composition analysis." },
  { term: "Bioelectrical Impedance Analysis (BIA)", definition: "A method of estimating body composition by measuring the resistance of body tissues to a small electrical current. Used in many consumer body fat scales and handheld devices." },
  { term: "Obesity Paradox", definition: "The observation in some studies that slightly overweight or mildly obese individuals may have better survival rates for certain conditions like heart failure compared to normal-weight patients." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "BMI & Health Glossary",
  description: "Comprehensive glossary of 35+ terms related to Body Mass Index (BMI), body composition, weight management, and health metrics used by WHO, CDC, and NHS.",
  url: "https://bmi-imc.com/glossary/",
  definedTerm: glossaryTerms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
  })),
};

const Glossary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>BMI Glossary - 35+ Health & Weight Terms Defined</title>
        <meta name="description" content="Complete glossary of BMI, body mass index, obesity, underweight, healthy weight, metabolic rate, body fat percentage and 30+ health terms. Evidence-based definitions from WHO and CDC." />
        <link rel="canonical" href="https://bmi-imc.com/glossary/" />
        <meta property="og:title" content="BMI Glossary - 35+ Health & Weight Terms Defined" />
        <meta property="og:description" content="Complete glossary of BMI and health terms with evidence-based definitions from WHO and CDC." />
        <meta property="og:url" content="https://bmi-imc.com/glossary/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />

      <main id="main-content" className="container max-w-4xl py-8 px-4 md:py-12">
        <Breadcrumbs />

        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Reference
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">
            <span className="gradient-text">BMI & Health Glossary</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Definitions for {glossaryTerms.length} key terms related to Body Mass Index, body composition, weight management, and health metrics.
          </p>
        </header>

        <div className="space-y-4">
          {glossaryTerms.map((item, index) => (
            <div key={index} className="glass-card p-5">
              <dt className="font-display font-bold text-lg mb-1">{item.term}</dt>
              <dd className="text-muted-foreground leading-relaxed">{item.definition}</dd>
            </div>
          ))}
        </div>

        <AuthorByline />
      </main>

      <Footer />
    </div>
  );
};

export default Glossary;
