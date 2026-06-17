import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Mail, ExternalLink, GraduationCap, Shield, Heart } from "lucide-react";

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
              Mottalib Radif is a finance professional and digital health advocate with an MBA from INSEAD,
              one of the world's leading business schools. Passionate about making health and financial tools
              accessible to everyone, he founded BMI-IMC.com to provide free, accurate, and easy-to-use
              BMI calculators in multiple languages.
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
            better health awareness.
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
            each region.
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
          <h2 className="text-2xl font-bold mb-4">Our Methodology</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Body Mass Index (BMI) is calculated using the internationally recognized formula established
            by the World Health Organization: BMI = weight (kg) / height (m)². This simple yet effective
            measurement has been used by medical professionals worldwide since the 1970s to screen for
            potential weight-related health issues.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our calculator implements the standard WHO BMI classification: underweight (BMI below 18.5),
            normal weight (18.5 to 24.9), overweight (25.0 to 29.9), and obesity (30.0 and above), with
            further subdivisions for obesity classes I, II, and III. For children and adolescents, we use
            age and sex-specific percentile curves as recommended by the WHO.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are transparent about the limitations of BMI as a health metric. BMI does not distinguish
            between muscle mass and fat mass, does not account for bone density or body composition, and
            may not be appropriate for pregnant women, elderly individuals, or highly trained athletes.
            Our content pages provide detailed explanations of these limitations and suggest complementary
            measurements such as waist-to-hip ratio, body fat percentage, and waist circumference.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            All health recommendations on this site are for informational purposes only and should not
            replace professional medical advice. We encourage users to consult with healthcare providers
            for personalized health assessments.
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
              <span><strong>Privacy by design:</strong> We do not collect, store, or transmit any personal health data. All BMI calculations are performed locally in your browser.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Regular updates:</strong> Our content is reviewed and updated regularly to reflect the latest WHO guidelines and medical research on body mass index and weight management.</span>
            </li>
          </ul>
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
