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
        "bmi-imc.com is published by Radif Partners. Any question about this page or about your data can be sent to contact@bmi-imc.com.",
      ],
    },
    {
      titre: "2. Your height and weight never leave your browser",
      corps: [
        "The height, weight, age and sex you type into the BMI calculator are computed by your own browser. They are not sent to us, not stored on a server and not kept on your device: close or reload the page and they are gone. There is no account, and no health data of any kind is collected or recorded by the publisher.",
      ],
    },
    {
      titre: "3. No cookies",
      corps: [
        "bmi-imc.com sets no cookies: no audience, advertising or social-media cookie, and no Microsoft Clarity cookie either (_clck, _clsk, MUID, CLID). Since there is nothing to accept or refuse, the site shows no cookie banner.",
      ],
    },
    {
      titre: "4. Anonymous check of site stability",
      corps: [
        "To find a calculator that misbehaves on a given phone or browser, we use Microsoft Clarity in cookieless mode. It reports technical signals only: script errors, loading times, clicks that do nothing and how far a page is scrolled. Each page view gets its own random identifier, so visits are never linked together, and the page text and every input field are masked in your browser before anything is sent: Clarity never sees a height, a weight or a BMI result.",
        "Provider: Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Ireland. Purpose: detecting and fixing technical faults, with no profiling, advertising or resale. Retention: 30 days for page-view records, 13 months for aggregated statistics. Legal basis: the publisher's legitimate interest in keeping a free tool working (Article 6(1)(f) GDPR). To object, block clarity.ms in your browser or with a content blocker, or write to contact@bmi-imc.com; the calculator works exactly the same without it.",
      ],
    },
    {
      titre: "5. Hosting",
      corps: [
        "The site is served by GitHub Pages (GitHub, Inc., United States), which keeps short technical logs (IP address, page requested, time) to deliver and protect the service; the publisher has no access to them. Transfers to the United States rely on the EU–US Data Privacy Framework. Emails you send us are kept only as long as needed to answer them.",
      ],
    },
    {
      titre: "6. Your rights",
      corps: [
        "You may ask for access to, correction or erasure of any data about you and object to the stability check, by email at contact@bmi-imc.com, with a reply within one month. Since no file on readers is kept, the answer is usually that nothing is held about you. You may also complain to the French data protection authority (www.cnil.fr) or to the authority of your own country, such as the ICO in the United Kingdom.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>BMI-IMC.com privacy policy: no cookies, no data kept</title>
        <meta
          name="description"
          content="bmi-imc.com sets no cookies and keeps no personal data: your height and weight stay in your browser, and only an anonymous, cookieless stability check is run."
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
