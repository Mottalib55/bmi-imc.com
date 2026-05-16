import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2, BookOpen, Globe, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const HealthWeight = () => {
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
            Health and wellness
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Health & Weight</span> : Guide to Healthy Living
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the relationship between weight, BMI and overall health
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Weight and health: a complex relationship</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Weight</strong> is just one indicator among others of your health status.
                A <strong>healthy weight</strong> depends on many factors: genetics, body type, physical activity,
                diet, sleep and mental well-being.
              </p>
              <p>
                Obsessing over the scale number can be counterproductive. It's more important to
                focus on <strong>healthy lifestyle habits</strong> than a specific target weight.
                Health isn't measured solely in pounds or kilograms.
              </p>
            </div>
          </div>

          {/* Health Risks */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Weight-related risks</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Risks of overweight and obesity</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Cardiovascular diseases (heart attack, stroke)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Type 2 diabetes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>High blood pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Sleep apnea</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Certain cancers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Joint problems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Risks of underweight</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Nutritional deficiencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Weakened immune system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Osteoporosis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Hormonal disorders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Chronic fatigue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Fertility problems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillars of health */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">The 5 pillars of healthy weight</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Nutrition</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Favor unprocessed foods</li>
                  <li>Eat vegetables with each meal</li>
                  <li>Limit added sugars</li>
                  <li>Stay well hydrated</li>
                  <li>Listen to hunger and fullness cues</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Physical activity</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 min moderate activity/week</li>
                  <li>Include strength training</li>
                  <li>Move regularly throughout day</li>
                  <li>Find activity you enjoy</li>
                  <li>Progress gradually</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Sleep</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Sleep 7-9 hours per night</li>
                  <li>Regular schedule</li>
                  <li>Avoid screens before bed</li>
                  <li>Cool and dark room</li>
                  <li>Lack of sleep promotes weight gain</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Mental health</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Manage your stress</li>
                  <li>Avoid emotional eating</li>
                  <li>Practice mindfulness</li>
                  <li>Accept your body</li>
                  <li>Seek help if needed</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Medical monitoring</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Annual health checkup</li>
                  <li>Waist circumference monitoring</li>
                  <li>Check blood pressure, glucose, cholesterol</li>
                  <li>Consult nutritionist if needed</li>
                  <li>Don't follow extreme diets</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Progress</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Set realistic goals</li>
                  <li>Maximum 1-2 lbs/week</li>
                  <li>Celebrate small victories</li>
                  <li>Consistency over intensity</li>
                  <li>Think long term</li>
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
              <h2 className="text-2xl font-display font-bold">Tips for healthy weight</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">What works</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Gradual and sustainable</strong> habit changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Balanced</strong> diet, no extreme restriction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Regular and enjoyable</strong> physical activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Quality</strong> sleep (7-8h/night)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Stress</strong> and emotion management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Professional</strong> monitoring if needed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">What doesn't work</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Drastic</strong> and restrictive diets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Miracle</strong> supplements and diet pills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Weighing yourself <strong>every day</strong> (normal variations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Unrealistic</strong> weight loss goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Comparing your body to <strong>others</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignoring <strong>hunger/fullness</strong> signals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* US Obesity Epidemic */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Users className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">The American obesity epidemic: a public health crisis</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>United States</strong> faces one of the most severe obesity crises in the developed world.
                According to the <strong>CDC's National Health and Nutrition Examination Survey (NHANES)</strong>,
                the adult obesity rate in the US stands at <strong>42.4%</strong>, with an additional 30.7% of adults
                classified as overweight. This means that nearly <strong>three out of four American adults</strong> carry
                excess weight, a staggering figure that has tripled since the 1960s.
              </p>
              <p>
                The <strong>National Institutes of Health (NIH)</strong> estimates that obesity-related healthcare
                costs in the United States exceed <strong>$173 billion annually</strong>. Adults with obesity spend
                on average $1,861 more per year on medical expenses than those at a healthy weight. Beyond direct
                medical costs, obesity drives indirect economic losses through reduced productivity, increased
                absenteeism, and disability claims, totaling an estimated <strong>$340 billion in combined
                economic impact</strong> each year.
              </p>
              <p>
                Racial and socioeconomic disparities compound the crisis. <strong>CDC data</strong> shows that
                obesity prevalence is highest among <strong>non-Hispanic Black adults (49.9%)</strong>, followed by
                Hispanic adults (45.6%), non-Hispanic white adults (41.4%), and non-Hispanic Asian adults (16.1%).
                These disparities are closely tied to systemic issues including access to healthy food, safe spaces
                for physical activity, healthcare availability, and socioeconomic conditions.
              </p>
              <p>
                Childhood obesity presents an equally alarming picture. The <strong>CDC</strong> reports that
                approximately <strong>19.7% of children and adolescents aged 2 to 19</strong> are obese in the
                United States. Children with obesity are significantly more likely to become obese adults, and
                they face elevated risks of type 2 diabetes, asthma, sleep disorders, and psychological distress
                during their formative years. The <strong>American Heart Association (AHA)</strong> has identified
                childhood obesity as one of the most pressing pediatric health challenges of the twenty-first century.
              </p>
            </div>
          </div>

          {/* Food Deserts and the Built Environment */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Apple className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Food deserts and the American nutrition landscape</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                A key driver of obesity in America is the prevalence of <strong>food deserts</strong> -- areas where
                residents have limited access to affordable, nutritious food. The <strong>USDA</strong> estimates that
                roughly <strong>19 million Americans</strong> live in food deserts, often in low-income urban
                neighborhoods and rural communities. In these areas, convenience stores and fast-food outlets
                far outnumber grocery stores, making calorie-dense and nutrient-poor food the path of least
                resistance for families on tight budgets.
              </p>
              <p>
                The <strong>USDA MyPlate guidelines</strong> recommend that Americans fill half their plate with
                fruits and vegetables, a quarter with grains (preferably whole grains), and a quarter with lean
                protein, accompanied by a serving of dairy. In practice, however, the average American diet
                diverges sharply from these recommendations. Americans consume roughly <strong>17 teaspoons of
                added sugar per day</strong>, nearly triple the <strong>American Heart Association's</strong>
                recommended limit of six teaspoons for women and nine for men.
              </p>
              <p>
                The <strong>FDA's updated Nutrition Facts label</strong>, which became mandatory for large
                manufacturers in 2020, was designed to address some of these gaps. By requiring a dedicated line
                for <strong>added sugars</strong>, realistic serving sizes, and a clearer calorie display, the
                FDA aimed to empower consumers to make more informed choices. Early research suggests that the
                updated labels have helped some consumers reduce sugar intake, though the overall impact on
                population-level obesity remains modest. The FDA also continues to work on front-of-package
                labeling initiatives to make nutritional quality visible at a glance, a measure already adopted
                in several other countries.
              </p>
            </div>
          </div>

          {/* NHS and UK Approach */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Stethoscope className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">The UK approach: NHS Weight Management and the sugar tax</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Across the Atlantic, the <strong>United Kingdom</strong> tackles obesity through a markedly
                different healthcare model. With approximately <strong>28% of adults classified as obese</strong>
                and a further 36% overweight, the UK faces its own significant weight crisis, though at lower
                overall rates than the United States. The <strong>National Health Service (NHS)</strong> provides
                a structured pathway for weight management that is free at the point of use.
              </p>
              <p>
                The <strong>NHS Weight Management Programme</strong> allows individuals to be referred by their
                <strong>GP (General Practitioner)</strong> to a 12-week course covering nutrition, physical
                activity, and behavioral change. These programmes are available both in-person and digitally,
                and they have expanded significantly since 2021 as part of the government's broader obesity
                strategy. Patients with a BMI of 30 or above, or 27.5 for those in higher-risk ethnic groups,
                are eligible for referral. For individuals with severe obesity (BMI 40+), the NHS offers access
                to specialist services including <strong>bariatric surgery</strong> and pharmacological interventions.
              </p>
              <p>
                One of the UK's most celebrated public health achievements in recent years is the
                <strong> Soft Drinks Industry Levy</strong>, commonly known as the <strong>sugar tax</strong>,
                introduced in April 2018. The levy charges manufacturers based on the sugar content of their
                beverages: 18 pence per liter for drinks with 5g or more of sugar per 100ml, and 24 pence per
                liter for drinks exceeding 8g per 100ml. The results have been striking. Before the levy was
                even enacted, manufacturers reformulated their products to fall below the thresholds, reducing
                the average sugar content in soft drinks by <strong>46%</strong> between 2015 and 2020. Revenue
                from the levy has been directed toward school sports and breakfast programs, creating a virtuous
                cycle of investment in children's health.
              </p>
              <p>
                The <strong>UK Eatwell Guide</strong>, the British equivalent of the USDA MyPlate, emphasizes
                similar principles but with distinct cultural and nutritional nuances. It recommends that
                starchy carbohydrates form the largest portion of meals, followed by fruits and vegetables
                (aiming for the well-known <strong>"5 A Day"</strong> target), with smaller portions of
                protein, dairy, and oils. Unlike the American MyPlate, the Eatwell Guide explicitly
                recommends limiting sugary drinks and high-fat snacks and provides portion guidance in
                a single visual plate format that has become a cornerstone of NHS dietary advice.
              </p>
            </div>
          </div>

          {/* US vs UK Comparison and Health Insurance */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">US vs UK: comparing public health strategies</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                The contrast between <strong>American and British approaches</strong> to tackling obesity
                reveals fundamentally different philosophies. The US system relies heavily on individual
                responsibility, market-driven solutions, and employer-based wellness initiatives, while
                the UK leans toward regulatory and population-level interventions delivered through
                its universal healthcare system.
              </p>
              <p>
                In the <strong>United States</strong>, the <strong>Affordable Care Act (ACA)</strong> mandates
                that insurance plans cover <strong>preventive services</strong> related to obesity at no cost
                to the patient, including BMI screening, dietary counseling, and behavioral interventions for
                adults with a BMI of 30 or above. Many large employers also run <strong>corporate wellness
                programs</strong> that offer financial incentives, such as reduced premiums or health savings
                account contributions, for employees who meet weight and fitness benchmarks. While well-intentioned,
                these programs have drawn criticism for potentially penalizing those with genetic predispositions
                to higher weight, and their long-term effectiveness in reducing obesity rates remains contested.
              </p>
              <p>
                The <strong>NIH</strong> and <strong>CDC</strong> have also championed community-level
                interventions. The CDC's <strong>National Diabetes Prevention Program (DPP)</strong>, a
                structured lifestyle change program, has demonstrated that individuals at high risk for type 2
                diabetes can reduce their risk by <strong>58%</strong> through modest weight loss of 5 to 7
                percent of body weight combined with 150 minutes of weekly physical activity. This evidence-based
                program is now covered by Medicare and many private insurers, marking a significant shift toward
                prevention-focused healthcare in the American system.
              </p>
              <p>
                The UK, meanwhile, has been bolder with <strong>regulatory measures</strong>. Beyond the sugar
                tax, the UK government has restricted <strong>advertising of high fat, sugar, and salt (HFSS)
                foods</strong> before the 9pm television watershed and has imposed limits on promotional deals
                for unhealthy products in supermarkets. Plans for mandatory calorie labeling in large restaurant
                chains took effect in 2022, requiring establishments with 250 or more employees to display
                calorie counts on their menus. These measures reflect a belief that systemic changes to the food
                environment are essential complements to individual behavior change.
              </p>
              <p>
                Both nations can learn from each other. The US excels in <strong>medical innovation</strong>,
                with FDA-approved medications like semaglutide showing remarkable promise for weight management,
                while the UK's population-health approach demonstrates that <strong>upstream policy
                interventions</strong> can meaningfully shift dietary patterns before individuals ever need
                clinical care. The <strong>American Heart Association</strong> and <strong>NHS England</strong>
                alike increasingly acknowledge that obesity is not a failure of willpower but a complex
                condition shaped by genetics, environment, socioeconomic factors, and public policy -- and
                that effective strategies must address all of these dimensions simultaneously.
              </p>
            </div>
          </div>

          {/* Evidence-Based Resources */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <BookOpen className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Trusted resources for weight and health</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                When seeking guidance on weight management, it is essential to rely on <strong>evidence-based
                sources</strong> rather than fad diets or social media trends. The following organizations
                provide free, scientifically validated information for residents of the United States and
                United Kingdom:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>CDC (Centers for Disease Control and Prevention)</strong> -- provides comprehensive data on obesity prevalence, prevention strategies, and the National Diabetes Prevention Program.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>NIH (National Institutes of Health)</strong> -- funds and publishes cutting-edge research on metabolic health, nutrition science, and weight-related disease prevention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>NHS (National Health Service)</strong> -- offers free weight management programmes, GP referral pathways, and the NHS BMI calculator for UK residents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>American Heart Association (AHA)</strong> -- publishes dietary guidelines, heart-health risk assessments, and resources linking cardiovascular health to healthy weight maintenance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>USDA (United States Department of Agriculture)</strong> -- maintains the MyPlate dietary framework and provides tools for meal planning, food access mapping, and nutrition education.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>FDA (Food and Drug Administration)</strong> -- regulates nutrition labeling, approves weight-management medications, and monitors the safety of dietary supplements.</span>
                </li>
              </ul>
              <p>
                Your weight journey is personal, and no single approach works for everyone. Whether you are
                navigating the <strong>American healthcare system</strong> or accessing services through the
                <strong> NHS</strong>, the most important step is to seek support from qualified professionals
                and to treat your body with the patience and respect it deserves.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Health and weight: the essentials</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Maintaining a <strong>healthy weight</strong> is important for your overall well-being. The relationship
                between <strong>weight and health</strong> is complex and depends on many factors. <strong>BMI</strong>
                is just one indicator among others to assess whether you're in a healthy weight zone.
              </p>
              <p>
                To <strong>lose weight healthily</strong> or <strong>maintain weight</strong>, favor a
                holistic approach: balanced diet, regular physical activity, sufficient sleep and
                stress management. Avoid yo-yo dieting which is harmful to health.
              </p>
              <p>
                A <strong>healthy lifestyle</strong> is more important than a number on the scale. Focus on
                <strong> lifestyle habits</strong> rather than weight. When in doubt, consult a
                healthcare professional for personalized support.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calculate your BMI</h3>
            <p className="text-muted-foreground mb-6">
              First indicator to assess your healthy weight
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calculate my BMI
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Health and Weight - Wellness Guide</p>
        </footer>
      </div>
    </div>
  );
};

export default HealthWeight;
