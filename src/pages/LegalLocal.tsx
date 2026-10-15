import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { LEGAL_LOCAL, MAIL } from "@/config/legal-local";

/**
 * Confidentialité ou mentions légales dans une langue autre que le français et
 * l'anglais (RECETTE §15.6) ; textes dans src/config/legal-local.ts.
 */
const avecMail = (texte: string) =>
  texte.split(MAIL).flatMap((part, i) =>
    i === 0 ? [part] : [<a key={i} href={`mailto:${MAIL}`} className="text-primary underline">{MAIL}</a>, part],
  );

const LegalLocal = ({ lang, kind }: { lang: string; kind: "privacy" | "legal" }) => {
  const L = LEGAL_LOCAL[lang];
  const page = L[kind];
  const autre = kind === "privacy" ? L.legal : L.privacy;

  return (
    <div className="min-h-screen bg-background" dir={L.dir}>
      <Header />

      <main id="main-content" className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8">{page.h1}</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground">
          {page.sections.map((s) => (
            <section key={s.h2}>
              <h2 className="text-xl font-bold text-foreground">{s.h2}</h2>
              {s.p.map((t, i) => (
                <p key={i}>{avecMail(t)}</p>
              ))}
            </section>
          ))}
          <p>
            <Link to={autre.path} className="text-primary underline">{autre.h1}</Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalLocal;
