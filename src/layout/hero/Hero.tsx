import { useTranslation } from "react-i18next";
import HeroBg from "./HeroBg";
import { Menu } from "../../components";
import { ArrowUpRight } from "lucide-react"; 

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative size-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors">
      {/* HeroBg visível sempre, está escuro por padrão */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <HeroBg />
      </div>

      {/* Overlay que aparece SOMENTE no tema claro, para cobrir HeroBg */}
      <div className="absolute inset-0 z-10 bg-[var(--color-background)] dark:hidden"></div>

      {/* Menu fixo centralizado no topo */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-20">
        <Menu />
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col gap-4 z-20 text-[var(--color-foreground)] px-4 text-center">
        <h1 className="text-7xl">{t("hero.title")}</h1>

        <h2 className="text-6xl">
          <span className="text-[var(--color-accent)]">{t("hero.span")}</span>{" "}
          {t("hero.subtitle")}
        </h2>

        <p className="text-2xl opacity-80">{t("hero.description")}</p>

        <div className="flex gap-10 justify-center mt-20 flex-wrap">
          <a
            target="_blank"
            href="https://github.com/PauloJrDev"
            className="text-center"
          >
            <button className="px-6 text-2xl py-2 rounded-full border border-current text-[var(--color-foreground)] font-[Ethnocentric] italic tracking-wide uppercase hover:brightness-125 transition-all">
              {t("hero.button")}
            </button>
          </a>

          <a
            href=""
            className="flex text-2xl items-center gap-3 text-[var(--color-foreground)] italic font-[Ethnocentric] tracking-wide transition-all group"
          >
            {t("hero.downloadCV")}

            <span className="rounded-full w-6 h-6 bg-[var(--color-accent)] flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowUpRight size={12} className="text-white" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
