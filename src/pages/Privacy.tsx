import { Header } from "@/components/Header";
import { MiseAJour } from "@/components/MiseAJour";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

/**
 * Politique de confidentialité (RGPD, RECETTE §8).
 *
 * La page était absente du site : sans elle, aucun lien de pied ne peut mener
 * à l'information exigée par les articles 13 et 14 du RGPD.
 */
const Privacy = () => {
  const sections: { titre: string; corps: string[] }[] = [
    {
      titre: "1. Who is responsible",
      corps: [
        "The bmi-imc.com website is published by Radif Partners, which determines the purposes and means of the processing described below. Any question about your data can be sent to contact@bmi-imc.com.",
      ],
    },
    {
      titre: "2. The BMI calculation never leaves your browser",
      corps: [
        "The height, weight, age and sex you enter in the calculator are neither sent to a server nor stored. The calculation runs entirely in your browser, and the page keeps nothing once it is closed. No account is required and no health data is collected.",
      ],
    },
    {
      titre: "3. Audience measurement",
      corps: [
        "We measure traffic in order to know which pages are useful and which need rewriting. Two tools load when a page opens: Microsoft Clarity (Microsoft Corporation) and Google Analytics 4 (Google Ireland Limited).",
        "Clarity records how pages are used: clicks, scrolling, pages viewed and their address, as sessions and heatmaps. The content of input fields, and therefore the height and weight you enter, is masked in your browser before anything is sent. Google Analytics receives the pages viewed, the referral source, the device type and an approximate location derived from the IP address. This data is never matched against the values entered in the calculator.",
      ],
    },
    {
      titre: "4. Legal bases and retention",
      corps: [
        "Audience measurement rests on the publisher's legitimate interest in improving the site. Clarity keeps session recordings for thirty days and aggregated data for no more than thirteen months; Google Analytics keeps event data for the period set in the account, fourteen months at most. Emails are kept for one year after the last reply.",
      ],
    },
    {
      titre: "5. Recipients and transfers",
      corps: [
        "Data is neither sold nor rented. It is processed by the site's host and by the two audience measurement tools, Microsoft Clarity and Google Analytics, whose servers may be located in the United States. No transfer of health data takes place, since none is collected.",
      ],
    },
    {
      titre: "6. Your rights",
      corps: [
        "You have the right to access, rectify, erase, restrict, object to and port your data. These rights are exercised by email at contact@bmi-imc.com, with a reply within one month. If the reply does not satisfy you, you may refer the matter to the French data protection authority at www.cnil.fr.",
      ],
    },
    {
      titre: "7. Cookies",
      corps: [
        "The site sets the technical cookies needed to work, which require no consent. The two audience measurement tools set cookies as soon as a page opens, with no prior banner: _clck (one year) and _clsk (one day) for Microsoft Clarity, to which Microsoft may add MUID and CLID on its own domains, and _ga and _ga_F6NRFKKHRG (two years) for Google Analytics. You can delete or block them at any time from your browser settings; the calculator works without them.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>BMI-IMC.com privacy policy: what data the site collects</title>
        <meta
          name="description"
          content="What data bmi-imc.com collects, what happens to your height and weight, how long audience data is kept and how to exercise your rights under the GDPR."
        />
        <link rel="canonical" href="https://bmi-imc.com/privacy/" />
      </Helmet>
      <Header />

      <main id="main-content" className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8">Privacy policy</h1>
        {/* §8.4 : date de mise à jour, juste sous le titre. */}
        <MiseAJour />

        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">
          <p>
            This page explains what data the site processes, why, how long it keeps it and what you
            can do about it. It complements the legal notice, which identifies the publisher and the
            host.
          </p>
          {sections.map((s) => (
            <section key={s.titre}>
              <h2 className="text-xl font-bold text-foreground">{s.titre}</h2>
              {s.corps.map((c, i) => (
                <p key={i}>{c}</p>
              ))}
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
