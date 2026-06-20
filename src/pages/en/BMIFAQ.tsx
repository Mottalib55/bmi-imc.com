import { Header } from "@/components/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

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

const BMIFAQ = () => {
  const faqs = [
    {
      question: "What is BMI exactly?",
      answer: "<strong>BMI (Body Mass Index)</strong> is an indicator that estimates a person's body mass. It's calculated by dividing weight (in kg) by height squared (in meters). Formula: BMI = Weight / Height². It's a rapid screening tool used by healthcare professionals."
    },
    {
      question: "How to calculate BMI?",
      answer: "To calculate your BMI, divide your weight in kilograms by your height in meters squared. For example, if you weigh 154 lbs (70 kg) and are 5'9\" (1.75 m): BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 = <strong>22.9</strong>. You can also use our <a href='/' class='text-primary hover:underline'>free BMI calculator</a>."
    },
    {
      question: "What is the ideal BMI?",
      answer: "According to WHO, a <strong>normal BMI</strong> is between <strong>18.5 and 24.9</strong>. This is the zone where health risks are lowest. However, ideal BMI can vary according to age, sex and physical activity. Optimal BMI is often around 21-22."
    },
    {
      question: "Is BMI reliable?",
      answer: "BMI is a good indicator for the general population, but it has <strong>limitations</strong>. It doesn't distinguish muscle mass from fat mass. A muscular athlete can have high BMI without excess fat. Other indicators like waist circumference or body fat percentage are complementary. See our page on <a href='/bmi-limitations' class='text-primary hover:underline'>BMI limitations</a>."
    },
    {
      question: "What BMI for women?",
      answer: "Normal BMI for women is the same as for men: <strong>18.5 to 24.9</strong>. However, women naturally have higher body fat (20-25% vs 15-20% for men). Waist circumference is often more relevant: it shouldn't exceed 31.5 inches. Check our <a href='/bmi-women' class='text-primary hover:underline'>Women's BMI</a> page for more details."
    },
    {
      question: "What BMI for men?",
      answer: "Normal BMI for men is between <strong>18.5 and 24.9</strong>. Muscular men can have higher BMI (up to 27-28) without health problems. Waist circumference is an important complementary indicator: it shouldn't exceed 37 inches. See our <a href='/bmi-men' class='text-primary hover:underline'>Men's BMI</a> page."
    },
    {
      question: "How to calculate a child's BMI?",
      answer: "The calculation is the same (weight/height²), but <strong>interpretation is different</strong>. Adult thresholds (18.5/25/30) are not used. Body mass curves that account for age and sex are used. A child must be positioned on percentile curves. Check our <a href='/bmi-children' class='text-primary hover:underline'>Children's BMI</a> page."
    },
    {
      question: "Can BMI be calculated during pregnancy?",
      answer: "<strong>No</strong>, BMI doesn't apply during pregnancy. Weight gain is normal and necessary. Pre-pregnancy BMI serves as reference to determine recommended weight gain (25-35 lbs for normal BMI). Consult your gynecologist for personalized monitoring."
    },
    {
      question: "Is BMI the same for athletes?",
      answer: "<strong>BMI is biased for athletes</strong>. The formula doesn't distinguish muscle from fat. A bodybuilder with 10% body fat can have BMI 30+ (classified obese). For athletes, prefer <strong>FFMI</strong> (Fat-Free Mass Index), body fat percentage or waist circumference. See our <a href='/bmi-athletes' class='text-primary hover:underline'>Athletes' BMI</a> page."
    },
    {
      question: "From what BMI are you overweight?",
      answer: "<strong>Overweight</strong> starts at BMI <strong>25</strong>. Between 25 and 29.9, it's overweight (or pre-obesity). From 30, it's obesity. These thresholds are defined by WHO and used worldwide."
    },
    {
      question: "From what BMI are you obese?",
      answer: "<strong>Obesity</strong> starts at BMI <strong>30</strong>. It's divided into three classes: Class I (30-34.9) = moderate obesity, Class II (35-39.9) = severe obesity, Class III (≥40) = morbid obesity. The higher the BMI, the more health risks increase."
    },
    {
      question: "How to lose weight effectively?",
      answer: "To lose weight sustainably: <strong>1)</strong> Create moderate caloric deficit (300-500 kcal/day), <strong>2)</strong> Favor balanced diet rich in protein, <strong>3)</strong> Practice regular physical activity (cardio + strength), <strong>4)</strong> Sleep sufficiently (7-8h), <strong>5)</strong> Be patient: aim for 1-2 lbs/week maximum."
    },
    {
      question: "Is waist circumference more important than BMI?",
      answer: "Waist circumference is an <strong>excellent complement</strong> to BMI. It measures abdominal (visceral) fat, which is more dangerous for health. Recommended thresholds: Men &lt;37 inches (moderate risk), &lt;40 inches (high risk). Women &lt;31.5 inches (moderate risk), &lt;35 inches (high risk)."
    },
    {
      question: "Does BMI change with age?",
      answer: "The BMI formula stays the same, but its <strong>interpretation may vary</strong>. After 65, slightly higher BMI (up to 27) can be protective. With age, muscle mass decreases (sarcopenia), which can skew BMI. Regular medical monitoring is recommended."
    },
    {
      question: "What's the difference between BMI and BMI?",
      answer: "There is <strong>no difference</strong>! BMI means <strong>Body Mass Index</strong> in English. It's exactly the same indicator with the same formula and thresholds."
    },
    {
      question: "Does BMI apply the same to all ethnicities?",
      answer: "<strong>No</strong>, BMI thresholds don't apply equally across all ethnic groups. The <strong>WHO</strong> suggests lower cutoff points for <strong>South Asian and East Asian</strong> populations: overweight starts at BMI 23 (instead of 25) and obesity at 27.5 (instead of 30). These populations tend to carry more visceral fat at lower BMIs, increasing cardiovascular and diabetes risk. Healthcare providers in the UK and Australia increasingly use ethnicity-adjusted thresholds for screening."
    },
    {
      question: "What is the new BMI formula?",
      answer: "In 2013, Oxford mathematician <strong>Nick Trefethen</strong> proposed a revised BMI formula: <strong>1.3 × weight (kg) / height (m)^2.5</strong>. The standard formula overestimates BMI for very tall people and underestimates it for very short people. Trefethen's formula corrects this scaling issue by using an exponent of 2.5 instead of 2. While not officially adopted by health authorities, it provides a more accurate comparison across different heights and has gained attention in academic circles."
    },
    {
      question: "Can BMI affect my health insurance?",
      answer: "In the <strong>United States</strong>, BMI can influence <strong>life insurance premiums</strong> — applicants with a BMI over 30 often face higher rates or may be declined. Under the <strong>ACA</strong>, health insurers cannot deny coverage or charge more based on BMI. However, <strong>workplace wellness programs</strong> can offer premium discounts (up to 30%) for employees who meet BMI targets or participate in weight management programs. Short-term health plans outside the ACA may still use BMI for underwriting."
    },
    {
      question: "What is skinny fat (normal weight obesity)?",
      answer: "<strong>Skinny fat</strong>, medically called <strong>normal weight obesity</strong>, describes individuals with a normal BMI (18.5–24.9) but an excessively high body fat percentage (above 30% for women, 24% for men). Also known as <strong>TOFI</strong> (Thin Outside, Fat Inside), this condition carries similar metabolic risks to obesity — including insulin resistance, elevated cholesterol, and cardiovascular disease. It's common in sedentary people who lack muscle mass. Body composition analysis via DEXA scan is the best way to identify it."
    },
    {
      question: "How accurate are home scales for tracking BMI?",
      answer: "Modern <strong>digital scales</strong> are generally accurate to within 0.2–0.5 lbs, which is sufficient for BMI tracking. For consistency, weigh yourself at the <strong>same time each morning</strong>, after using the bathroom and before eating. <strong>Hydration</strong>, meals, and exercise can cause weight fluctuations of 2–4 lbs daily. <strong>Smart scales</strong> with bioelectrical impedance (BIA) estimate body fat percentage but can vary by 3–5% from clinical methods like DEXA. Focus on weekly averages rather than daily readings."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <main id="main-content" className="container max-w-4xl py-8 px-4 md:py-12">
        <Breadcrumbs />
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI FAQ</span> : Common Questions About Body Mass Index
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Answers to the most frequently asked questions about Body Mass Index
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Calculate your BMI now</h3>
          <p className="text-muted-foreground mb-6">
            Use our free calculator to know your body mass index
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Calculate my BMI
          </Link>
        </div>

        {/* SEO Schema */}
        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">Everything about BMI</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              This <strong>BMI FAQ</strong> answers the most common questions about calculating and
              interpreting <strong>Body Mass Index</strong>. Whether you're looking to know
              <strong> how to calculate BMI</strong>, <strong>what is ideal BMI</strong>, or
              <strong> if BMI is reliable</strong>, you'll find answers here.
            </p>
            <p>
              BMI is a simple but useful tool to assess your body mass. However, it has its limits
              and should be complemented by other indicators. Don't hesitate to consult a healthcare
              professional for a complete assessment.
            </p>
            <p>
              In the <strong>United Kingdom</strong>, the NHS provides structured
              <strong> weight management services</strong> organised into tiers. <strong>Tier 2</strong> services
              include community-based lifestyle and weight management programmes — typically 12-week
              group sessions covering diet, physical activity, and behavioural change, available through
              GP referral at no cost. <strong>Tier 3</strong> services are specialist multidisciplinary
              clinics offering intensive support, including dietitians, psychologists, and physician-led
              care for individuals with a BMI of 35+ (or 30+ with comorbidities). <strong>Tier 4</strong> is
              bariatric surgery, available on the NHS for patients with a BMI of 40+ or 35+ with serious
              obesity-related conditions, following assessment through a Tier 3 programme. Waiting times
              for Tier 3 and 4 services vary by region but can exceed <strong>two years</strong> in some
              NHS trusts.
            </p>
            <p>
              In the <strong>United States</strong>, the <strong>Affordable Care Act (ACA)</strong> requires
              most health insurance plans to cover <strong>obesity screening and counselling</strong> as
              a preventive service with no out-of-pocket cost to the patient. The <strong>US Preventive
              Services Task Force (USPSTF)</strong> gives a "B" recommendation for screening all adults
              for obesity, meaning insurers must cover it. Medicare specifically covers up to
              <strong> 22 intensive behavioural therapy (IBT) sessions</strong> per year for beneficiaries
              with a BMI of 30 or higher. Coverage for <strong>anti-obesity medications</strong> such as
              semaglutide (Wegovy) and tirzepatide (Zepbound) varies significantly between plans, with
              many private insurers now adding coverage following FDA approvals while Medicare Part D
              currently excludes weight-loss drugs under most circumstances.
            </p>
            <p>
              In <strong>Australia</strong>, the <strong>Medicare</strong> system covers GP visits
              including weight assessments at no out-of-pocket cost with a bulk-billed appointment.
              The <strong>Chronic Disease Management</strong> plan (formerly known as EPC — Enhanced
              Primary Care) allows GPs to refer patients with a BMI above 30 to up to
              <strong> 5 allied health sessions per year</strong>, including consultations with
              dietitians and exercise physiologists, subsidised through Medicare. Private health
              insurance extras policies often cover additional dietitian consultations and gym
              memberships. The <strong>CSIRO Total Wellbeing Diet</strong> program, developed by
              Australia's national science agency, is one of the country's most recognised
              evidence-based weight management programmes and is available online nationwide.
            </p>
            <p>
              Globally, <strong>BMI thresholds are being reconsidered</strong> by medical authorities.
              In June 2023, the <strong>American Medical Association (AMA)</strong> adopted a landmark
              policy recognising BMI's limitations as a sole diagnostic measure. The AMA now recommends
              that BMI be used <strong>in conjunction with</strong> other metrics including
              <strong> waist circumference</strong>, <strong>body composition</strong> (via DEXA or
              bioelectrical impedance), <strong>metabolic markers</strong> (blood glucose, cholesterol,
              blood pressure), and <strong>genetic or ethnic factors</strong>. This shift acknowledges
              that BMI alone can misclassify metabolically healthy individuals as unhealthy and vice
              versa. The policy encourages clinicians to move toward a more holistic assessment of
              weight-related health rather than relying on a single number derived from height and weight.
            </p>
          </div>
        </div>


        <RelatedPages />

        <AuthorByline />
      </main>

      <Footer />
    </div>
  );
};

export default BMIFAQ;
