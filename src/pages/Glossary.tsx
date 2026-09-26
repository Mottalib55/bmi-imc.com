import { Header } from "@/components/Header";
import { MiseAJour } from "@/components/MiseAJour";
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
  { term: "Waist Circumference", definition: "The distance around the abdomen measured at the midpoint between the lowest rib and the top of the hip bone. The WHO sets action levels at 94 cm for men and 80 cm for women, with substantially raised risk above 102 cm and 88 cm respectively. It captures abdominal fat directly, which BMI cannot." },
  { term: "Waist-to-Height Ratio", definition: "Waist circumference divided by height, with 0.5 as the widely used cut-off: your waist should be less than half your height. It performs better than BMI at predicting cardiometabolic risk and needs no reference table, which is why NICE recommends it alongside BMI for adults under 40." },
  { term: "Visceral Fat", definition: "Fat stored around the internal organs in the abdominal cavity, as opposed to subcutaneous fat stored under the skin. It is metabolically active, releasing inflammatory compounds and free fatty acids into the portal circulation, and is the fat depot most strongly linked to insulin resistance and cardiovascular disease." },
  { term: "Quetelet Index", definition: "The original name for what is now called BMI, after the Belgian statistician Adolphe Quetelet who described it in 1832. He devised it to describe populations, not to assess individuals, a distinction that still explains most of the criticism directed at the measure today." },
  { term: "Ethnic-Specific Thresholds", definition: "Lower BMI cut-offs used for populations of South Asian, Chinese and some other Asian descent, where cardiometabolic risk rises at a lower body mass. The WHO proposes action points at 23 and 27.5 rather than 25 and 30, and several national health services apply them." },
  { term: "BMI Prime", definition: "BMI divided by the upper limit of the normal range, 25. A BMI Prime of 1.0 sits exactly at the overweight boundary, 0.8 near the lower end of normal and 1.2 at the top of the overweight band. It expresses how far a reading is from the threshold as a simple ratio." },
  { term: "Ponderal Index", definition: "Weight divided by the cube of height rather than the square, expressed in kg/m3. It is less sensitive to height than BMI, which is why it is preferred for infants and for very tall or very short adults, where BMI systematically over- or under-states body fatness." },
  { term: "BMI-for-Age Percentile", definition: "The measure used for children and adolescents aged 2 to 19, comparing a child's BMI against reference data for the same age and sex. Below the 5th percentile is underweight, the 5th to 85th healthy, the 85th to 95th overweight and above the 95th obese. Fixed adult thresholds do not apply." },
  { term: "Basal Metabolic Rate (BMR)", definition: "The energy the body uses at complete rest to maintain vital functions, typically 1 400 to 1 800 kcal a day for an adult. It accounts for 60 to 70 per cent of total daily energy expenditure and falls as lean mass is lost, which is why weight regain is common after rapid loss." },
  { term: "Skinfold Calipers", definition: "A low-cost tool that measures the thickness of a pinch of skin and underlying fat at standard sites, converted to a body fat percentage through published equations. Accuracy depends heavily on the operator's technique, but repeated measurements by the same person track change reliably." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "BMI & Health Glossary",
  description: "Comprehensive glossary of 45 terms related to Body Mass Index (BMI), body composition, weight management, and health metrics used by WHO, CDC, and NHS.",
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
        <title>BMI glossary: every term explained in plain English</title>
        <meta name="description" content="Complete glossary of BMI, body mass index, obesity, underweight, healthy weight, metabolic rate, body fat percentage and 30+ health terms. Evidence-based definitions from WHO and CDC." />
        <link rel="canonical" href="https://bmi-imc.com/glossary/" />
        <meta property="og:title" content="BMI Glossary: 45 Health & Weight Terms Defined" />
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
        
        {/* §8.4 : date de mise à jour, juste sous le titre. */}
        <MiseAJour />
          <p className="text-lg text-muted-foreground">
            Definitions for {glossaryTerms.length} key terms related to Body Mass Index, body composition, weight management, and health metrics.
          </p>
        </header>

        {/* §21 : un glossaire n'est qu'une liste de définitions ; sans un
            paragraphe de corps, la page n'a rien qu'un moteur puisse citer. */}
        <p className="mb-10 text-base leading-relaxed text-muted-foreground">
          This glossary gathers the terms you meet when reading a body mass index result: the World
          Health Organization weight categories, the measurements that complete the index such as
          waist circumference and body fat percentage, and the physiological concepts that explain
          why two people with the same index can carry very different risk. Each definition gives
          the threshold and the body that publishes it wherever that makes sense, so the figure can
          be checked at its source rather than taken on trust. Terms are listed alphabetically, and
          those with a page of their own on this site link to it, from how to read a result to the
          limits of the measure and the reference tables by height and weight. Forty-five entries
          are listed, covering the classification bands, the alternative indices, the measurement
          techniques from calipers to DEXA, and the metabolic conditions that excess weight is
          associated with.
        </p>

        <div className="space-y-4">
          {glossaryTerms.map((item, index) => (
            <div key={index} className="glass-card p-5">
              <dt className="font-display font-bold text-lg mb-1">{item.term}</dt>
              <dd className="text-muted-foreground leading-relaxed">{item.definition}</dd>
            </div>
          ))}
        </div>

        <section className="mt-12 space-y-4 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-display font-bold text-foreground">How these terms fit together</h2>
          <p>
            Most of the confusion around body mass index comes from treating one number as if it
            were three separate things: a measure of size, a measure of fatness and a measure of
            health. It is reliably the first, an approximation of the second and, on its own, a
            poor proxy for the third. The terms in this glossary fall into those three groups. BMI,
            the Quetelet index, BMI Prime and the ponderal index all describe mass relative to
            height. Body fat percentage, DEXA, bioelectrical impedance and skinfold calipers
            attempt to measure fatness directly. Waist circumference, waist-to-height ratio,
            visceral fat and metabolic syndrome describe where fat sits and what it is doing, which
            is what actually drives risk.
          </p>
          <p>
            Reading a result well means moving through those three groups rather than stopping at
            the first. An index of 27 says you are heavier than the reference range for your
            height. A waist of 88 cm on a man says some of that weight is abdominal. A fasting
            glucose or a blood pressure reading says whether it is already doing damage. Each step
            adds information the previous one could not supply, and no step is a substitute for the
            one after it.
          </p>
          <h2 className="text-2xl font-display font-bold text-foreground pt-4">Where the thresholds come from</h2>
          <p>
            The adult cut-offs of 18.5, 25 and 30 were adopted by the World Health Organization in
            1995 on the basis of large cohort studies linking body mass to mortality. They were
            chosen as round numbers close to inflection points in those curves, not derived from a
            biological boundary, which is why a reading of 24.9 and one of 25.1 describe almost
            identical bodies despite falling in different categories. The same exercise repeated on
            Asian populations produced lower inflection points, which is the basis for the
            ethnic-specific action points of 23 and 27.5.
          </p>
          <p>
            Children are handled differently again, through percentiles rather than fixed values,
            because body composition changes continuously with age and sex through growth. A child
            at the 90th percentile is heavier than nine in ten children of the same age and sex,
            which is a statement about that population rather than about a universal threshold.
            Applying adult cut-offs to anyone under nineteen produces meaningless results, a
            mistake made often enough that the CDC publishes a specific warning against it.
          </p>
        </section>

        <AuthorByline />
      </main>

      <Footer />
    </div>
  );
};

export default Glossary;
