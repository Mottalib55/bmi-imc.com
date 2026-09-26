import { Header } from "@/components/Header";
import { MiseAJour } from "@/components/MiseAJour";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Code, Copy, Check } from "lucide-react";
import { useState } from "react";

const embedCode = `<iframe
  src="https://bmi-imc.com/embed/"
  width="380"
  height="480"
  style="border:none;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.1)"
  title="BMI Calculator Widget"
  loading="lazy"
></iframe>`;

const Widget = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free BMI Calculator Widget - Embed on Your Website</title>
        <meta name="description" content="Add a free BMI calculator widget to your website or blog. Copy the embed code and paste it into your HTML. Lightweight, responsive, no dependencies." />
        <link rel="canonical" href="https://bmi-imc.com/widget/" />
        <meta property="og:title" content="Free BMI Calculator Widget - Embed on Your Website" />
        <meta property="og:description" content="Add a free BMI calculator widget to your website or blog. Copy the embed code and paste it." />
        <meta property="og:url" content="https://bmi-imc.com/widget/" />
      </Helmet>
      <Header />

      <main id="main-content" className="container max-w-4xl py-8 px-4 md:py-12">
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            Embed Widget
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Free BMI Calculator Widget</span>
          </h1>
        {/* §8.4 : date de mise à jour, juste sous le titre. */}
        <MiseAJour />
          <p className="text-lg text-muted-foreground">
            Add a free BMI calculator to your website or blog. Simply copy the embed code below and paste it into your HTML.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="min-w-0">
            <h2 className="text-xl font-display font-bold mb-4">Preview</h2>
            {/* Largeur fluide : 380 px en dur débordaient de 299 px sur un
                écran de 320 px, la page entière prenant un défilement latéral. */}
            <iframe
              src="/embed/"
              height="480"
              style={{ border: "none", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,.1)", width: "100%", maxWidth: "380px" }}
              title="BMI Calculator Widget Preview"
              loading="lazy"
            />
          </div>

          {/* Embed Code */}
          <div className="min-w-0">
            <h2 className="text-xl font-display font-bold mb-4">Embed Code</h2>
            {/* `min-w-0` : sans lui, la piste de grille prend la largeur du
                contenu et `overflow-x-auto` ne retient rien (299 px de débord). */}
            <div className="relative min-w-0">
              <pre className="bg-muted rounded-xl p-4 text-sm overflow-x-auto max-w-full text-muted-foreground">
                <code>{embedCode}</code>
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg bg-background border border-border hover:bg-muted transition-colors"
                aria-label="Copy embed code"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <h3 className="font-semibold text-foreground">Features</h3>
              <ul className="space-y-2">
                <li>- Lightweight: no external dependencies</li>
                <li>- Responsive design (max 380px width)</li>
                <li>- Instant BMI calculation</li>
                <li>- Shows healthy weight range and ideal weight</li>
                <li>- WHO-standard BMI categories</li>
                <li>- Privacy-friendly: all calculations in-browser</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-6">Usage</h3>
              <p>
                Copy the iframe code above and paste it anywhere in your HTML where you want the BMI calculator to appear.
                The widget is self-contained and does not require any additional scripts or stylesheets.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Widget;
