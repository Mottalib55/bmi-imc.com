import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Legal Notice — BMI-IMC.com</title>
        <meta name="description" content="Legal notice and terms of use for BMI-IMC.com, a free BMI calculator. Publisher information, intellectual property, privacy policy and disclaimer." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://bmi-imc.com/legal/" />
      </Helmet>
      <Header />

      <div className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8">Legal Notice</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Publisher Information</h2>
            <p>
              <strong>Website:</strong> BMI-IMC.com<br />
              <strong>Publisher:</strong> Mottalib Radif<br />
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@bmi-imc.com" className="text-primary hover:underline">
                contact@bmi-imc.com
              </a><br />
              <strong>Editor-in-Chief:</strong> Mottalib Radif
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Purpose of the Website</h2>
            <p>
              BMI-IMC.com is a free online tool for calculating the Body Mass Index (BMI) according to
              the formula established by the World Health Organization (WHO). The site provides educational
              and informational content about BMI, weight management, and health in multiple languages.
              All tools and content are provided free of charge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Medical Disclaimer</h2>
            <p>
              The information provided on BMI-IMC.com is for informational and educational purposes only.
              It does not constitute medical advice, diagnosis, or treatment. The BMI calculation results
              and health information presented on this website should not replace consultation with a
              qualified healthcare professional. Always seek the advice of your physician or other
              qualified health provider with any questions you may have regarding a medical condition.
            </p>
            <p>
              BMI is a screening tool and has known limitations. It does not distinguish between
              lean body mass and fat mass, and may not be appropriate for athletes, pregnant women,
              elderly individuals, or growing children. The publisher accepts no liability for any
              health decisions made based on information provided on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Intellectual Property</h2>
            <p>
              All content on BMI-IMC.com, including but not limited to text, graphics, logos, icons,
              images, audio clips, digital downloads, and software, is the property of Mottalib Radif
              or its content suppliers and is protected by international copyright laws. The compilation
              of all content on this site is the exclusive property of Mottalib Radif.
            </p>
            <p>
              You may not reproduce, distribute, display, sell, lease, transmit, create derivative works
              from, translate, modify, reverse-engineer, disassemble, decompile, or otherwise exploit
              this website or any portion of it unless expressly permitted by Mottalib Radif in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Privacy Policy</h2>
            <p>
              BMI-IMC.com respects your privacy. We do not collect, store, or transmit any personal
              health data entered into our BMI calculator. All calculations are performed locally in
              your web browser using JavaScript.
            </p>
            <p>
              <strong>Data collected:</strong> We may use anonymized analytics tools (such as Google
              Analytics) to understand how visitors use our website. This data is aggregated and cannot
              be used to identify individual users.
            </p>
            <p>
              <strong>Cookies:</strong> This website may use essential cookies for functionality purposes.
              No tracking cookies are used for advertising or profiling.
            </p>
            <p>
              <strong>Third-party services:</strong> This website may load fonts from Google Fonts.
              By using this site, you consent to the processing of data by these services in accordance
              with their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. Limitation of Liability</h2>
            <p>
              BMI-IMC.com and its publisher shall not be liable for any direct, indirect, incidental,
              special, consequential, or punitive damages, including but not limited to loss of data,
              income, or profit, arising from or in connection with the use of this website or its content.
            </p>
            <p>
              While we strive to keep the information on this website accurate and up to date, we make
              no representations or warranties of any kind, express or implied, about the completeness,
              accuracy, reliability, suitability, or availability of the website or the information,
              products, services, or related graphics contained on the website for any purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">7. External Links</h2>
            <p>
              This website may contain links to external websites. These links are provided for
              convenience and informational purposes only. We do not endorse and are not responsible
              for the content, privacy policies, or practices of third-party websites. Following any
              external link is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">8. Applicable Law</h2>
            <p>
              This legal notice is governed by and construed in accordance with the laws of France.
              Any disputes arising from the use of this website shall be subject to the exclusive
              jurisdiction of the competent courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">9. Contact</h2>
            <p>
              For any questions regarding this legal notice or our privacy practices, please contact us at:{" "}
              <a href="mailto:contact@bmi-imc.com" className="text-primary hover:underline">
                contact@bmi-imc.com
              </a>
            </p>
          </section>

          <p className="text-sm italic">Last updated: June 2026</p>
        </div>

        <div className="border-t border-border pt-6 mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">BMI Calculator</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/mentions-legales" className="hover:text-primary">Mentions Legales (FR)</Link>
        </div>
      </div>
    </div>
  );
};

export default Legal;
