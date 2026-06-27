import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOForPath } from "@/config/seo";
import { getAlternates, localeMap, type Lang } from "@/config/routes";

const DOMAIN = "https://bmi-imc.com";

const withTrailingSlash = (path: string): string =>
  path.endsWith("/") ? path : `${path}/`;

// Pages that should NOT get MedicalWebPage schema
const UTILITY_PATHS = ["/about", "/a-propos", "/legal", "/mentions-legales", "/widget", "/glossary"];

const isContentPage = (path: string): boolean =>
  !UTILITY_PATHS.includes(path);

export const SEOHead = () => {
  const { pathname } = useLocation();
  const seo = getSEOForPath(pathname);
  const alternates = getAlternates(pathname);
  const canonicalUrl = `${DOMAIN}${withTrailingSlash(seo.path)}`;

  const articleJsonLd = isContentPage(seo.path) ? {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": seo.title,
    "description": seo.description,
    "url": canonicalUrl,
    "inLanguage": seo.lang,
    "datePublished": "2026-05-16",
    "dateModified": "2026-06-27",
    "author": {
      "@type": "Person",
      "name": "Mottalib Radif",
      "url": `${DOMAIN}/about/`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "BMI-IMC",
      "url": DOMAIN,
      "logo": {
        "@type": "ImageObject",
        "url": `${DOMAIN}/logo-512.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  } : null;

  return (
    <Helmet>
      <html lang={seo.lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BMI-IMC" />
      <meta property="og:image" content={`${DOMAIN}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content={localeMap[seo.lang as Lang] || "en_US"} />
      {alternates && Object.entries(alternates)
        .filter(([lang]) => lang !== seo.lang)
        .map(([lang]) => (
          <meta key={`og-alt-${lang}`} property="og:locale:alternate" content={localeMap[lang as Lang]} />
        ))
      }
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={`${DOMAIN}/og-image.png`} />
      {alternates && Object.entries(alternates).map(([lang, path]) => (
        <link key={`hreflang-${lang}`} rel="alternate" hrefLang={lang} href={`${DOMAIN}${withTrailingSlash(path)}`} />
      ))}
      {alternates && (
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${withTrailingSlash(alternates.en)}`} />
      )}
      {articleJsonLd && (
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      )}
    </Helmet>
  );
};
