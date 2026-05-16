import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale, Cpu, FlaskConical, Landmark, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const BMILimitations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-warning/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            BMI Limitations
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">BMI Limitations</span> : What BMI Doesn't Tell You
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why BMI is not a perfect indicator and when it can be misleading
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">BMI is a screening tool, not a diagnosis</h3>
              <p className="text-muted-foreground">
                Created in 1832 by Adolphe Quetelet, BMI was designed for statistical population studies,
                not to assess individual health. It has several important limitations.
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
              <h2 className="text-2xl font-display font-bold">What BMI doesn't measure</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Body composition</h4>
                    <p className="text-sm text-muted-foreground">
                      BMI doesn't distinguish muscle from fat. 1 kg of muscle = 1 kg of fat for BMI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Fat distribution</h4>
                    <p className="text-sm text-muted-foreground">
                      Abdominal fat is more dangerous than subcutaneous fat. BMI doesn't see it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Bone density</h4>
                    <p className="text-sm text-muted-foreground">
                      Heavier bones increase BMI without impacting health.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Metabolic health status</h4>
                    <p className="text-sm text-muted-foreground">
                      A thin person can have poor metabolic profile (cholesterol, glucose).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Hydration</h4>
                    <p className="text-sm text-muted-foreground">
                      Water retention can temporarily increase BMI by 1-2 points.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Physical fitness</h4>
                    <p className="text-sm text-muted-foreground">
                      Two people with the same BMI can have very different physical conditions.
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
              <h2 className="text-2xl font-display font-bold">Populations for which BMI is unsuitable</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Athletes and bodybuilders</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  High muscle mass gives "overweight" or "obese" BMI while body fat is minimal.
                </p>
                <Link to="/bmi-athletes" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Learn more →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">Children and adolescents</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Adult thresholds don't apply. Age and sex-specific body mass curves must be used.
                </p>
                <Link to="/bmi-children" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Learn more →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">Elderly people</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Muscle mass loss (sarcopenia) can mask excess fat. "Normal" BMI can be misleading.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">Pregnant women</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Weight gain is normal and desirable during pregnancy. Pre-pregnancy BMI serves as reference.
                </p>
                <Link to="/bmi-women" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Learn more →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">Certain ethnicities</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Asian populations have increased risks at lower BMI. WHO proposes adapted thresholds (23 instead of 25).
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">Extreme body types</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Very tall or very short people have naturally different BMIs due to surface/volume ratio.
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
              <h2 className="text-2xl font-display font-bold">Alternatives and complements to BMI</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Indicator</th>
                    <th className="text-left py-3 px-4 font-bold">What it measures</th>
                    <th className="text-left py-3 px-4 font-bold">Recommended thresholds</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Waist circumference</td>
                    <td className="py-3 px-4">Abdominal (visceral) fat</td>
                    <td className="py-3 px-4">&lt;37 in (M) / &lt;31.5 in (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Waist-to-hip ratio</td>
                    <td className="py-3 px-4">Fat distribution</td>
                    <td className="py-3 px-4">&lt;0.90 (M) / &lt;0.85 (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Waist-to-height ratio</td>
                    <td className="py-3 px-4">Relative central fat</td>
                    <td className="py-3 px-4">&lt;0.5 (waist &lt; half height)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Body fat %</td>
                    <td className="py-3 px-4">Actual body composition</td>
                    <td className="py-3 px-4">10-20% (M) / 18-28% (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">Lean mass (for athletes)</td>
                    <td className="py-3 px-4">18-25 (natural)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Bioelectrical impedance</td>
                    <td className="py-3 px-4">Water, muscle, fat, bone</td>
                    <td className="py-3 px-4">Varies by device</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When BMI is still useful */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">When BMI remains useful</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Despite its limitations, BMI remains a valuable tool in certain contexts:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Initial rapid screening</strong>: identify people needing more complete assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Epidemiological studies</strong>: compare populations at large scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Individual monitoring</strong>: observe weight evolution over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Average sedentary adult</strong>: for this population, BMI is fairly reliable</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Future of Body Assessment */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <FlaskConical className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">The Future of Body Assessment: Beyond BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Researchers are actively developing new metrics to replace or supplement BMI. One of the most
                promising is the <strong>Body Roundness Index (BRI)</strong>, proposed by Dr Diana Thomas and
                colleagues at the US Military Academy at West Point. BRI uses waist circumference and height
                to estimate body shape as an ellipse, providing a more nuanced picture of central adiposity
                than BMI alone. A <strong>2024 study published in JAMA Network Open</strong>, analysing data
                from over <strong>32,000 participants</strong> in the US National Health and Nutrition Examination
                Survey (NHANES), found that BRI was a stronger predictor of all-cause mortality than BMI,
                particularly for identifying metabolically unhealthy individuals who fall within the "normal"
                BMI range. BRI values typically range from 1 to 15, with higher values indicating greater
                central body roundness and associated health risks.
              </p>
              <p>
                The <strong>UK Biobank</strong>, one of the world's largest biomedical databases with data from
                over <strong>500,000 participants</strong> aged 40-69 across the United Kingdom, has produced
                landmark findings on BMI versus body composition. Studies using UK Biobank data demonstrated
                that individuals classified as "normal weight" by BMI but with high body fat percentage —
                a condition termed <strong>"normal weight obesity"</strong> — had significantly elevated risks
                of cardiovascular disease, metabolic syndrome, and mortality compared to their truly lean
                counterparts. A <strong>2023 analysis</strong> in <strong>The Lancet Regional Health - Europe</strong> found
                that waist-to-hip ratio derived from UK Biobank imaging data outperformed BMI in predicting
                type 2 diabetes risk across all ethnic groups studied, reinforcing calls for multi-metric
                health assessments.
              </p>
            </div>
          </div>

          {/* AI and Technology-Based Assessment */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-info/10">
                <Cpu className="w-6 h-6 text-info" />
              </div>
              <h2 className="text-2xl font-display font-bold">AI-Based Body Composition Assessment</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                While <strong>DEXA (Dual-Energy X-ray Absorptiometry)</strong> scans remain the clinical gold
                standard for body composition analysis, they require specialised equipment, cost between
                <strong> $75 and $300 USD</strong> per scan, and expose patients to low-level radiation. A new
                generation of <strong>AI-powered alternatives</strong> is emerging in the US, UK, and Australia
                that could democratise access to accurate body composition data.
              </p>
              <p>
                <strong>3D body scanning</strong> technology, pioneered by companies like <strong>Styku</strong> (US)
                and <strong>Size Stream</strong>, uses infrared sensors to create a full 3D body model in seconds.
                These systems extract hundreds of measurements — including waist circumference, body fat
                distribution, and lean mass estimates — with accuracy approaching DEXA for many metrics. Several
                <strong> NHS trusts</strong> in England have begun pilot programmes using 3D scanning in weight
                management clinics, and <strong>Australian researchers at the University of Sydney</strong> have
                validated smartphone-based 3D scanning against DEXA with correlation coefficients above 0.95 for
                body fat percentage estimation.
              </p>
              <p>
                <strong>Smartphone AI apps</strong> are also advancing rapidly. Applications developed in the US and
                Australia now use machine learning models trained on thousands of DEXA-validated body scans to
                estimate body fat percentage from two standard smartphone photos. The <strong>US Navy</strong> has
                tested AI-based body composition tools as potential replacements for its tape-measure body fat
                protocol, and the <strong>Australian Defence Force</strong> is evaluating similar technology.
                While these tools are not yet replacements for clinical DEXA, they represent a significant step
                toward making body composition assessment accessible, affordable, and free from the oversimplification
                inherent in BMI.
              </p>
            </div>
          </div>

          {/* The 2023 AMA Policy Change */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Landmark className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">The 2023 AMA Policy Change</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                In <strong>June 2023</strong>, the <strong>American Medical Association (AMA)</strong> adopted a
                landmark policy that formally recognised BMI's significant limitations as a sole measure of
                individual health. The AMA's Council on Science and Public Health concluded that BMI is an
                "imperfect way to measure body fat in multiple groups" and specifically acknowledged that the
                metric carries <strong>racial and ethnic biases</strong> rooted in its historical development using
                predominantly white European populations. This policy represented the most significant institutional
                shift in how the US medical establishment views BMI in decades.
              </p>
              <p>
                The AMA now recommends that BMI should be used <strong>in conjunction with other valid measures</strong> of
                health risk, including but not limited to: <strong>waist circumference</strong>, <strong>body
                composition measurements</strong>, <strong>metabolic markers</strong> (such as blood glucose, lipid
                panels, and inflammatory markers), <strong>genetic and familial predispositions</strong>, and
                the overall clinical picture of a patient. The policy explicitly discourages using BMI as the sole
                criterion for denying insurance coverage or determining clinical eligibility for treatments.
              </p>
              <p>
                This US policy shift echoes guidance already established in the United Kingdom. The <strong>UK's
                National Institute for Health and Care Excellence (NICE)</strong> published clinical guideline
                <strong>CG189</strong> which recommends that healthcare professionals use <strong>waist
                circumference alongside BMI</strong> to assess health risk in adults with a BMI under 35. NICE
                explicitly notes that waist circumference provides additional predictive power for type 2 diabetes,
                cardiovascular disease, and all-cause mortality beyond what BMI alone can offer. In
                <strong> Australia</strong>, the National Health and Medical Research Council (NHMRC) similarly
                recommends combining BMI with waist circumference in its Clinical Practice Guidelines for the
                Management of Overweight and Obesity, noting that BMI alone fails to capture the cardiometabolic
                risks associated with central adiposity that are particularly prevalent in Aboriginal and Torres
                Strait Islander populations.
              </p>
            </div>
          </div>

          {/* Better Alternatives Available Today */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Ruler className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Better Alternatives Available Today</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                The good news is that several <strong>validated, accessible alternatives to BMI</strong> are
                available today for individuals who want a more accurate picture of their health. These range
                from free measurements you can take at home to clinical-grade assessments available at private
                facilities throughout the US, UK, and Australia.
              </p>
              <h4 className="font-bold text-foreground">Waist Circumference</h4>
              <p>
                The <strong>NHS (UK)</strong> formally recommends waist circumference measurement alongside BMI
                as part of routine health assessments. Their guidelines state that for men, a waist circumference
                of <strong>94 cm (37 inches) or more</strong> indicates moderate cardiometabolic risk, while
                <strong> 102 cm (40 inches) or more</strong> indicates high risk. For women, the thresholds are
                <strong> 80 cm (31.5 inches)</strong> for moderate risk and <strong>88 cm (34.5 inches)</strong> for
                high risk. This measurement takes less than 30 seconds, requires only a tape measure, and captures
                visceral fat distribution that BMI completely misses.
              </p>
              <h4 className="font-bold text-foreground">Body Fat Percentage</h4>
              <p>
                Measuring actual body fat percentage removes the ambiguity inherent in BMI. Several options exist:
                <strong> smart scales</strong> using bioelectrical impedance are widely available for $30-100 and
                provide reasonable estimates (typically within 3-5% of clinical measurements); <strong>DEXA
                scans</strong> are available at private clinics and universities for approximately <strong>$100-200
                USD</strong> (or GBP 100-150 in the UK) and provide the clinical gold standard for body composition
                analysis; and <strong>BodPod</strong> (air displacement plethysmography) is available at sports
                science laboratories and some university facilities, offering DEXA-comparable accuracy without
                radiation exposure.
              </p>
              <h4 className="font-bold text-foreground">Waist-to-Height Ratio</h4>
              <p>
                The <strong>waist-to-height ratio (WHtR)</strong> is increasingly regarded by researchers as
                a superior screening tool to BMI for cardiovascular and metabolic risk. The rule is simple:
                your waist circumference should be <strong>less than half your height</strong> (a ratio below
                0.5). This threshold applies universally regardless of sex, age, or ethnicity, making it more
                equitable than BMI. The <strong>Ashwell Shape Chart</strong>, developed by Dr Margaret Ashwell
                in the UK, provides a visual tool for self-assessment using this ratio. A 2023 meta-analysis
                covering over 300,000 participants confirmed that WHtR outperformed BMI in predicting
                cardiometabolic risk across diverse populations.
              </p>
              <h4 className="font-bold text-foreground">Edmonton Obesity Staging System (EOSS)</h4>
              <p>
                The <strong>Edmonton Obesity Staging System</strong>, developed by Dr Arya Sharma at the
                University of Alberta, represents a fundamentally different approach to weight-related health
                assessment. Rather than relying on a single number, EOSS classifies patients into <strong>five
                stages (0-4)</strong> based on the actual presence of metabolic, physical, and psychological
                complications. Stage 0 indicates no apparent risk factors, while Stage 4 indicates severe
                end-stage chronic disease. Research published in the <strong>Canadian Medical Association
                Journal</strong> demonstrated that EOSS predicted mortality significantly better than BMI
                alone, and crucially, many individuals with "obese" BMI values fell into low-risk EOSS stages
                while some with "normal" BMI showed high-risk staging. Both the <strong>UK's Royal College
                of Physicians</strong> and <strong>Obesity Canada</strong> have endorsed clinical approaches
                that incorporate staging systems like EOSS rather than relying on BMI alone.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Understanding BMI limitations</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI limitations</strong> are numerous and well documented by the scientific community.
                This <strong>critical BMI</strong> should not be interpreted alone. <strong>BMI flaws</strong>
                include the inability to differentiate fat mass from lean mass.
              </p>
              <p>
                <strong>Why is BMI imperfect</strong>? Because it's a simple mathematical ratio.
                <strong>BMI problems</strong> are particularly visible in athletes,
                children and elderly. Whether <strong>BMI is reliable or not</strong> depends on usage context.
              </p>
              <p>
                <strong>Alternatives to BMI</strong> like waist circumference or body fat percentage
                offer a more complete picture. <strong>Is BMI reliable</strong> for everyone?
                No, but combined with other indicators, it remains a useful screening tool.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calculate your BMI with full knowledge</h3>
            <p className="text-muted-foreground mb-6">
              Now that you know the limitations, use our calculator as a first indicator
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
          <p>© 2024 BMI Limitations - Understanding Body Mass Index</p>
        </footer>
      </div>
    </div>
  );
};

export default BMILimitations;
