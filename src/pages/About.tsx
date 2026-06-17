import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Mail, ExternalLink, GraduationCap, Shield, Heart, BookOpen, Globe, Scale, AlertTriangle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About BMI-IMC — Free BMI Calculator by Mottalib Radif</title>
        <meta name="description" content="Learn about BMI-IMC.com, a free Body Mass Index calculator created by Mottalib Radif, MBA INSEAD. Accurate BMI calculations based on WHO standards in 9 languages." />
        <link rel="canonical" href="https://bmi-imc.com/about/" />
      </Helmet>
      <Header />

      <div className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8 gradient-text">About BMI-IMC.com</h1>

        {/* Author Card */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-xl border border-border bg-muted/30 p-6 mb-10">
          <img
            src="/team/mottalib-radif.jpg"
            alt="Mottalib Radif — Founder & Editor of BMI-IMC.com"
            className="h-32 w-32 rounded-full object-cover shadow-lg"
            width={128}
            height={128}
          />
          <div>
            <h2 className="text-2xl font-bold">Mottalib Radif</h2>
            <p className="text-primary font-medium mb-2">Founder & Editor</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>MBA, INSEAD</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about health and digital wellness tools, MBA INSEAD graduate. Specialized in creating
              accessible health tools based on official medical data. Mottalib Radif, MBA INSEAD, founded BMI-IMC.com to provide free,
              accurate, and easy-to-use BMI calculators in multiple languages based on WHO standards. His background
              combines analytical rigor with a deep commitment to making health literacy accessible to people
              around the world, regardless of their language or geographic location.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:contact@bmi-imc.com" className="text-primary hover:underline">
                contact@bmi-imc.com
              </a>
            </div>
          </div>
        </div>

        {/* Mission */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            BMI-IMC.com was created with a simple but powerful mission: to provide everyone in the world with
            free access to reliable Body Mass Index calculations and health information, regardless of their
            language or location. We believe that understanding your BMI is a fundamental first step toward
            better health awareness and making informed decisions about your well-being.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our calculator is based on the official World Health Organization (WHO) BMI classification standards
            and is designed to give you instant, accurate results with clear interpretations. We do not collect
            personal health data, and all calculations are performed directly in your browser for maximum privacy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, BMI-IMC.com serves users in over 50 countries and is available in 9 languages: French,
            English, Spanish, Portuguese, German, Italian, Hindi, Chinese, and Arabic. Every page has been
            carefully crafted to provide medically accurate information tailored to the health context of
            each region. Our commitment to multilingual accessibility reflects the belief that health
            information should never be limited by language barriers.
          </p>
        </section>

        {/* What is BMI */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            What Is Body Mass Index (BMI)?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Body Mass Index, commonly known as BMI, is a numerical value derived from a person's weight
            and height. It serves as a simple screening tool used by healthcare professionals worldwide to
            categorize individuals into weight status categories that may indicate potential health risks.
            The BMI value is calculated by dividing a person's weight in kilograms by the square of their
            height in meters: BMI = weight (kg) / height (m)².
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            BMI was originally devised in the early 19th century by Adolphe Quetelet, a Belgian mathematician,
            astronomer, and statistician. Quetelet developed the formula between 1830 and 1850 as part of his
            work on "social physics," where he sought to define the characteristics of the "average man" through
            statistical analysis of human populations. His original purpose was not medical screening but rather
            a tool for studying population-level trends in body proportions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The term "Body Mass Index" was not coined until 1972, when Ancel Keys, an American physiologist,
            published a landmark study recommending the Quetelet Index as the best simple proxy for body fat
            percentage in population studies. Keys explicitly noted that BMI was appropriate for population-level
            analysis rather than individual clinical diagnosis, a caveat that remains relevant today. Since then,
            BMI has become the most widely used metric for classifying underweight, normal weight, overweight,
            and obesity in adults across clinical and public health settings globally.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Despite its simplicity, BMI has proven to be a valuable epidemiological tool. Large-scale studies
            have consistently demonstrated correlations between elevated BMI values and increased risk of
            cardiovascular disease, type 2 diabetes, certain cancers, sleep apnea, and musculoskeletal disorders.
            The World Health Organization adopted BMI as its standard classification system for overweight and
            obesity in adults, establishing the thresholds that remain in use today.
          </p>
        </section>

        {/* WHO Classification */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-6 h-6 text-primary" />
            WHO BMI Classification Standards
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The World Health Organization defines the following BMI categories for adults aged 20 and older,
            which form the basis of our calculator's interpretation system. These thresholds are internationally
            recognized and used by healthcare systems around the world to screen for potential weight-related
            health concerns.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold">Category</th>
                  <th className="text-left p-3 font-semibold">BMI Range (kg/m²)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border"><td className="p-3">Severe Thinness</td><td className="p-3">&lt; 16.0</td></tr>
                <tr className="border-t border-border"><td className="p-3">Moderate Thinness</td><td className="p-3">16.0 - 16.9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Mild Thinness</td><td className="p-3">17.0 - 18.4</td></tr>
                <tr className="border-t border-border"><td className="p-3 font-medium">Normal Weight</td><td className="p-3">18.5 - 24.9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Pre-obese (Overweight)</td><td className="p-3">25.0 - 29.9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Obesity Class I</td><td className="p-3">30.0 - 34.9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Obesity Class II</td><td className="p-3">35.0 - 39.9</td></tr>
                <tr className="border-t border-border"><td className="p-3">Obesity Class III</td><td className="p-3">&ge; 40.0</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            It is important to note that these thresholds were primarily established based on data from
            European and North American populations. The WHO has acknowledged that different ethnic groups
            may experience health risks at different BMI thresholds. For example, research has shown that
            Asian populations tend to have higher body fat percentages at lower BMI values, leading several
            Asian countries to adopt lower overweight and obesity thresholds for their populations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For children and adolescents between the ages of 2 and 19, BMI interpretation is different from
            that of adults. Instead of fixed thresholds, pediatric BMI is expressed as a percentile relative
            to other children of the same age and sex. The WHO and the Centers for Disease Control and Prevention
            (CDC) provide age- and sex-specific growth charts that our calculator uses to deliver appropriate
            classifications for younger users.
          </p>
        </section>

        {/* Limitations */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-primary" />
            Limitations of BMI
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While BMI is a valuable screening tool, it has well-documented limitations that users should
            understand. BMI does not directly measure body fat and cannot distinguish between fat mass and
            lean mass. This means that muscular individuals, such as athletes and bodybuilders, may receive
            an overweight or obese classification despite having low body fat percentages. Conversely,
            individuals with low muscle mass may have a normal BMI but carry unhealthy amounts of visceral fat.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            BMI also does not account for fat distribution. Research has shown that abdominal fat, also known
            as visceral fat, is more strongly associated with cardiovascular disease and metabolic syndrome
            than fat stored in other areas of the body. Two people with identical BMI values may have very
            different health risk profiles depending on where their body fat is concentrated. For this reason,
            healthcare professionals often recommend using complementary measurements such as waist circumference,
            waist-to-hip ratio, and body fat percentage alongside BMI for a more complete health assessment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            BMI may also be less reliable for certain populations, including pregnant women, elderly individuals
            who may have experienced age-related muscle loss, and growing children and adolescents whose body
            composition changes rapidly. Our content pages at BMI-IMC.com provide detailed explanations of
            these limitations and encourage users to view their BMI result as one piece of a larger health
            picture, not a definitive diagnosis.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Free BMI Calculator", desc: "Instant Body Mass Index calculation with WHO-standard interpretation, ideal weight range, and personalized health recommendations." },
              { title: "Profile-Specific Tools", desc: "Dedicated BMI calculators for men, women, athletes, and children with age and gender-appropriate guidelines." },
              { title: "Comprehensive Health Guides", desc: "In-depth articles on BMI interpretation, limitations, health and weight management, written by qualified professionals." },
              { title: "9 Languages Supported", desc: "Full availability in French, English, Spanish, Portuguese, German, Italian, Hindi, Chinese, and Arabic." },
              { title: "Privacy First", desc: "No personal data is collected. All calculations happen in your browser. No cookies for tracking." },
              { title: "Evidence-Based Content", desc: "All health information is based on WHO guidelines, peer-reviewed research, and official medical sources." },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Our Methodology and Data Sources</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Body Mass Index (BMI) is calculated using the internationally recognized formula established
            by the World Health Organization: BMI = weight (kg) / height (m)². This simple yet effective
            measurement has been used by medical professionals worldwide since the 1970s to screen for
            potential weight-related health issues. Our calculator faithfully implements this formula with
            support for both metric (kilograms and centimeters) and imperial (pounds and inches) units,
            performing all necessary conversions automatically.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our calculator implements the standard WHO BMI classification: underweight (BMI below 18.5),
            normal weight (18.5 to 24.9), overweight (25.0 to 29.9), and obesity (30.0 and above), with
            further subdivisions for obesity classes I, II, and III. For children and adolescents, we use
            age and sex-specific percentile curves as recommended by the WHO and the United States Centers
            for Disease Control and Prevention (CDC).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The health information and recommendations presented on BMI-IMC.com are drawn from authoritative
            sources including the World Health Organization (WHO) Global Database on Body Mass Index, the
            United States Centers for Disease Control and Prevention (CDC) growth charts and BMI guidelines,
            the National Institutes of Health (NIH) clinical guidelines on overweight and obesity, and
            peer-reviewed medical literature published in journals such as The Lancet, the British Medical
            Journal (BMJ), and the Journal of the American Medical Association (JAMA).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            All health recommendations on this site are for informational purposes only and should not
            replace professional medical advice. We encourage users to consult with healthcare providers
            for personalized health assessments. BMI-IMC.com is an educational resource, not a medical
            diagnostic tool.
          </p>
        </section>

        {/* Multilingual Approach */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Our Multilingual Approach
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Health literacy should not be constrained by language. BMI-IMC.com is available in nine languages:
            French, English, Spanish, Portuguese, German, Italian, Hindi, Chinese, and Arabic. Each language
            version is not simply a machine translation of the English content. Instead, every page has been
            carefully adapted to reflect the health context, dietary habits, and medical terminology specific
            to each linguistic and cultural community.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our multilingual approach also considers regional health data. For instance, obesity prevalence
            rates, recommended dietary guidelines, and healthcare system structures vary significantly between
            regions. The content on BMI-IMC.com acknowledges these differences and provides contextually
            relevant information to users worldwide. This commitment to linguistic and cultural accessibility
            is central to the vision of Mottalib Radif, MBA INSEAD, who designed the platform to serve a
            truly global audience.
          </p>
        </section>

        {/* Why Trust Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Trust BMI-IMC.com?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Expert-backed content:</strong> Our health information is researched and written based on WHO guidelines, peer-reviewed medical literature, and national health authority recommendations from multiple countries.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Transparent methodology:</strong> We clearly explain how BMI is calculated, what its limitations are, and when other health metrics should be considered alongside BMI.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>No commercial bias:</strong> BMI-IMC.com is completely free with no premium version, no sponsored content, and no product recommendations. Our only goal is to provide accurate health information.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Privacy by design:</strong> We do not collect, store, or transmit any personal health data. All BMI calculations are performed locally in your browser. No cookies are used for tracking purposes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Regular updates:</strong> Our content is reviewed and updated regularly to reflect the latest WHO guidelines and medical research on body mass index and weight management.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Accessibility:</strong> BMI-IMC.com is designed to be accessible to users of all abilities. Our interface follows web accessibility best practices, ensuring that screen readers, keyboard navigation, and assistive technologies work seamlessly with our tools.</span>
            </li>
          </ul>
        </section>

        {/* Why BMI Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why BMI Matters for Public Health</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Overweight and obesity have become a global public health challenge. According to the World Health
            Organization, worldwide obesity has nearly tripled since 1975. In 2016, more than 1.9 billion
            adults were classified as overweight, and over 650 million were obese. These numbers continue to
            rise, making accessible screening tools like BMI calculators increasingly important for early
            awareness and prevention.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            While BMI alone cannot diagnose any condition, it serves as an effective first step in identifying
            individuals who may benefit from further medical evaluation. By providing free, instant BMI
            calculations in nine languages, BMI-IMC.com aims to contribute to global health literacy and
            empower individuals to take proactive steps toward understanding their weight status and overall
            health. This is the core motivation behind the work of Mottalib Radif, MBA INSEAD, and the
            entire BMI-IMC.com project.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We value your feedback and are always looking to improve our tools and content. Whether you
            have a question about BMI calculation, a suggestion for a new feature, or want to report
            an issue, please do not hesitate to reach out.
          </p>
          <div className="rounded-lg border border-border p-4 inline-flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:contact@bmi-imc.com" className="text-primary font-medium hover:underline">
              contact@bmi-imc.com
            </a>
          </div>
        </section>

        {/* Footer links */}
        <div className="border-t border-border pt-6 mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">BMI Calculator</Link>
          <Link to="/legal" className="hover:text-primary">Legal Notice</Link>
          <Link to="/imc" className="hover:text-primary">Calculateur IMC (FR)</Link>
          <Link to="/a-propos" className="hover:text-primary">A propos (FR)</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
