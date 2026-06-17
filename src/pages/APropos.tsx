import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Mail, GraduationCap, Shield, Heart } from "lucide-react";

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>A propos de BMI-IMC — Calculateur IMC Gratuit par Mottalib Radif</title>
        <meta name="description" content="Découvrez BMI-IMC.com, un calculateur d'Indice de Masse Corporelle gratuit créé par Mottalib Radif, MBA INSEAD. Calculs IMC précis basés sur les normes OMS en 9 langues." />
        <link rel="canonical" href="https://bmi-imc.com/a-propos/" />
      </Helmet>
      <Header />

      <div className="container max-w-4xl py-12 px-4">
        <h1 className="text-4xl font-display font-bold mb-8 gradient-text">A propos de BMI-IMC.com</h1>

        {/* Author Card */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-xl border border-border bg-muted/30 p-6 mb-10">
          <img
            src="/team/mottalib-radif.jpg"
            alt="Mottalib Radif — Fondateur et Editeur de BMI-IMC.com"
            className="h-32 w-32 rounded-full object-cover shadow-lg"
            width={128}
            height={128}
          />
          <div>
            <h2 className="text-2xl font-bold">Mottalib Radif</h2>
            <p className="text-primary font-medium mb-2">Fondateur et Editeur</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>MBA, INSEAD</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Mottalib Radif est un professionnel de la finance et un promoteur de la sante numerique,
              diplome d'un MBA de l'INSEAD, l'une des meilleures ecoles de commerce au monde. Passionne
              par l'accessibilite des outils de sante et de finance pour tous, il a fonde BMI-IMC.com
              pour fournir des calculateurs IMC gratuits, precis et faciles a utiliser dans plusieurs langues.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:contact@bmi-imc.com" className="text-primary hover:underline">
                contact@bmi-imc.com
              </a>
            </div>
          </div>
        </div>

        {/* Notre mission */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            Notre Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            BMI-IMC.com a ete cree avec une mission simple mais puissante : offrir a chacun dans le monde
            un acces gratuit a des calculs d'Indice de Masse Corporelle fiables et a des informations de
            sante, quelle que soit la langue ou la localisation de l'utilisateur. Nous croyons que comprendre
            son IMC est une premiere etape fondamentale vers une meilleure conscience de sa sante.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Notre calculateur est base sur les normes officielles de classification de l'IMC de
            l'Organisation Mondiale de la Sante (OMS) et est concu pour fournir des resultats instantanes
            et precis avec des interpretations claires. Nous ne collectons aucune donnee de sante
            personnelle, et tous les calculs sont effectues directement dans votre navigateur pour
            une confidentialite maximale.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Aujourd'hui, BMI-IMC.com sert des utilisateurs dans plus de 50 pays et est disponible en
            9 langues : francais, anglais, espagnol, portugais, allemand, italien, hindi, chinois et arabe.
            Chaque page a ete soigneusement elaboree pour fournir des informations medicalement exactes
            adaptees au contexte sanitaire de chaque region.
          </p>
        </section>

        {/* Ce que nous proposons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            Ce Que Nous Proposons
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Calculateur IMC Gratuit", desc: "Calcul instantane de l'Indice de Masse Corporelle avec interpretation selon les normes OMS, fourchette de poids ideal et recommandations de sante personnalisees." },
              { title: "Outils par Profil", desc: "Des calculateurs IMC dedies pour les hommes, les femmes, les sportifs et les enfants avec des recommandations adaptees a l'age et au sexe." },
              { title: "Guides Sante Complets", desc: "Articles approfondis sur l'interpretation de l'IMC, ses limites, la gestion du poids et de la sante, rediges par des professionnels qualifies." },
              { title: "9 Langues Supportees", desc: "Disponibilite complete en francais, anglais, espagnol, portugais, allemand, italien, hindi, chinois et arabe." },
              { title: "Confidentialite Avant Tout", desc: "Aucune donnee personnelle n'est collectee. Tous les calculs sont effectues dans votre navigateur. Pas de cookies de suivi." },
              { title: "Contenu Base sur la Science", desc: "Toutes les informations de sante sont basees sur les directives de l'OMS, la litterature medicale evaluee par des pairs et les recommandations des autorites nationales de sante." },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodologie */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Notre Methodologie</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'Indice de Masse Corporelle (IMC) est calcule a l'aide de la formule internationalement
            reconnue etablie par l'Organisation Mondiale de la Sante : IMC = poids (kg) / taille (m)².
            Cette mesure simple mais efficace est utilisee par les professionnels de sante du monde entier
            depuis les annees 1970 pour depister les problemes de sante potentiels lies au poids.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Notre calculateur met en oeuvre la classification standard de l'IMC de l'OMS : insuffisance
            ponderale (IMC inferieur a 18,5), poids normal (18,5 a 24,9), surpoids (25,0 a 29,9) et
            obesite (30,0 et plus), avec des subdivisions supplementaires pour les classes d'obesite I,
            II et III. Pour les enfants et les adolescents, nous utilisons des courbes de percentiles
            specifiques a l'age et au sexe, comme recommande par l'OMS.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nous sommes transparents sur les limites de l'IMC en tant que metrique de sante. L'IMC ne
            distingue pas la masse musculaire de la masse grasse, ne tient pas compte de la densite
            osseuse ou de la composition corporelle, et peut ne pas etre approprie pour les femmes
            enceintes, les personnes agees ou les athletes de haut niveau. Nos pages de contenu fournissent
            des explications detaillees de ces limites et suggerent des mesures complementaires telles que
            le rapport taille-hanches, le pourcentage de graisse corporelle et le tour de taille.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Toutes les recommandations de sante sur ce site sont fournies a titre informatif uniquement et
            ne doivent pas remplacer un avis medical professionnel. Nous encourageons les utilisateurs a
            consulter des professionnels de sante pour des evaluations de sante personnalisees.
          </p>
        </section>

        {/* Pourquoi nous faire confiance */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pourquoi Nous Faire Confiance ?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Contenu expertement recherche :</strong> Nos informations de sante sont recherchees et redigees sur la base des directives de l'OMS, de la litterature medicale evaluee par des pairs et des recommandations des autorites nationales de sante de plusieurs pays.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Methodologie transparente :</strong> Nous expliquons clairement comment l'IMC est calcule, quelles sont ses limites et quand d'autres mesures de sante doivent etre considerees en complement de l'IMC.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Aucun biais commercial :</strong> BMI-IMC.com est entierement gratuit, sans version premium, sans contenu sponsorise et sans recommandations de produits. Notre seul objectif est de fournir des informations de sante precises.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Confidentialite par conception :</strong> Nous ne collectons, ne stockons et ne transmettons aucune donnee de sante personnelle. Tous les calculs d'IMC sont effectues localement dans votre navigateur.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span><strong>Mises a jour regulieres :</strong> Notre contenu est revu et mis a jour regulierement pour refleter les dernieres directives de l'OMS et la recherche medicale sur l'indice de masse corporelle et la gestion du poids.</span>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Nous Contacter</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nous valorisons vos retours et cherchons toujours a ameliorer nos outils et notre contenu.
            Que vous ayez une question sur le calcul de l'IMC, une suggestion pour une nouvelle
            fonctionnalite, ou que vous souhaitiez signaler un probleme, n'hesitez pas a nous contacter.
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
          <Link to="/imc" className="hover:text-primary">Calculateur IMC</Link>
          <Link to="/mentions-legales" className="hover:text-primary">Mentions Legales</Link>
          <Link to="/" className="hover:text-primary">BMI Calculator (EN)</Link>
          <Link to="/about" className="hover:text-primary">About (EN)</Link>
        </div>
      </div>
    </div>
  );
};

export default APropos;
