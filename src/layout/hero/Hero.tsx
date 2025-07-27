import { useTranslation } from "react-i18next";
import HeroBg from "./HeroBg";
import { ArrowUpRight } from "lucide-react";
import animationData from "../../assets/ScrollDown.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative size-full h-screen flex flex-col items-center justify-center overflow-hidden text-[var(--color-foreground)] transition-colors">
      {/* HeroBg visível sempre, está escuro por padrão */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <HeroBg />
      </div>

      {/* Overlay que aparece SOMENTE no tema claro, para cobrir HeroBg */}
      <div className="absolute inset-0 z-10 bg-[var(--color-background)] dark:hidden"></div>

      {/* Conteúdo principal */}
      <motion.div
        className="flex flex-col gap-4 z-20 text-[var(--color-foreground)] px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t("hero.title")}
        </motion.h1>

        <motion.h2
          className="text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className="text-[var(--color-accent)]">{t("hero.span")}</span>{" "}
          {t("hero.subtitle")}
        </motion.h2>

        <motion.p
          className="text-2xl opacity-80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          className="flex gap-10 justify-center mt-15 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.2 }}
        >
          <a
            target="_blank"
            href="https://github.com/PauloJrDev"
            className="text-center"
          >
            <button className="px-6 text-2xl py-2 rounded-full border border-current text-[var(--color-foreground)] font-[Ethnocentric] italic tracking-wide uppercase transition-all duration-300 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] backdrop-blur-md bg-white/5 dark:bg-black/20">
              {t("hero.button")}
            </button>
          </a>

          <a
            href=""
            className="flex text-2xl items-center gap-3 text-[var(--color-foreground)] italic font-[Ethnocentric] tracking-wide transition-all duration-200 hover:underline underline-offset-4 decoration-[var(--color-accent)] group"
          >
            {t("hero.downloadCV")}

            <motion.span
              className="rounded-full w-6 h-6 bg-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowUpRight size={12} className="text-white" />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-25 h-25"
        />
      </motion.div>
    </div>
  );
};
