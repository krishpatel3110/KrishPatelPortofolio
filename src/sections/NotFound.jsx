import { Home, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLang } from "@/context/LanguageContext";

export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useLang();

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center px-6 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-7xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("notfound_title")}</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          {t("notfound_desc")}
        </p>
        <button
          onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          {t("notfound_back")}
        </button>
      </div>
    </section>
  );
};
