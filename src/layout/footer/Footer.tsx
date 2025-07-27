import { useTranslation, Trans } from "react-i18next";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[var(--color-background)]">
      <div className="flex flex-col items-center justify-center bg-[hsl(var(--color-surface))] text-gray-200 pt-30 pb-5 rounded-t-[80px] px-4">
        <h2 className="text-8xl text-center font-bold  tracking-widest uppercase font-mono mb-15">
          <Trans i18nKey="footer.title" components={{ br: <br /> }} />
        </h2>

        <div className="flex justify-center gap-10 mb-30">
          <button className="border-2 border-[var(--color-foreground)] rounded-full px-9 py-2 text-lg uppercase tracking-wide">
            {t("footer.whatsapp")}
          </button>
          <button className="border-2 border-[var(--color-foreground)] rounded-full px-9 py-2 text-lg uppercase tracking-wide">
            {t("footer.email")}
          </button>
        </div>

        <div className="flex justify-center gap-80 mb-15">
          <div className="flex gap-10 items-center border-t border-[var(--color-foreground)] pt-2">
            <span className="text-ms mb-1">github</span>
            <FaGithub className="text-gray-200" />
          </div>
          <div className="flex gap-10 items-center border-t border-[var(--color-foreground)] pt-2">
            <span className="text-ms mb-1">linkedin</span>
            <FaLinkedin className="text-gray-200" />
          </div>
          <div className="flex gap-10 items-center border-t border-[var(--color-foreground)] pt-2">
            <span className="text-ms mb-1">instagram</span>
            <FaInstagram className="text-gray-200" />
          </div>
        </div>

        <p className="text-xs opacity-60 font-mono text-center mt-1">
          Feito por PauloJr · Todos os direitos reservados © 2025
        </p>
      </div>
    </div>
  );
};
