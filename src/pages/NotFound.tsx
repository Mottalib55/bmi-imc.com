import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>404 - Page Not Found | BMI-IMC</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />

      <main id="main-content" className="container max-w-2xl py-20 px-4 text-center">
        <div className="mb-8">
          <span className="text-8xl font-display font-bold gradient-text">404</span>
        </div>
        <h1 className="text-3xl font-display font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            BMI Calculator (EN)
          </Link>
          <Link
            to="/imc"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Calculateur IMC (FR)
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <Link to="/bmi-men" className="rounded-lg border border-border p-3 hover:bg-muted transition-colors">BMI for Men</Link>
          <Link to="/bmi-women" className="rounded-lg border border-border p-3 hover:bg-muted transition-colors">BMI for Women</Link>
          <Link to="/bmi-table" className="rounded-lg border border-border p-3 hover:bg-muted transition-colors">BMI Table</Link>
          <Link to="/imc-homme" className="rounded-lg border border-border p-3 hover:bg-muted transition-colors">IMC Homme</Link>
          <Link to="/imc-femme" className="rounded-lg border border-border p-3 hover:bg-muted transition-colors">IMC Femme</Link>
          <Link to="/tableau-imc" className="rounded-lg border border-border p-3 hover:bg-muted transition-colors">Tableau IMC</Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
