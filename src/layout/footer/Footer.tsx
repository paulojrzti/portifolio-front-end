import { useTranslation, Trans } from "react-i18next";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[var(--color-background)]">
      <div className="flex flex-col items-center justify-center bg-[hsl(var(--color-surface))] text-gray-200 pt-30 pb-5 rounded-t-[80px] px-4">
        <h2 className="text-8xl text-center font-bold tracking-widest uppercase font-mono mb-15 bg-gradient-to-r from-purple-500 to-white text-transparent bg-clip-text animate-textReveal">
          <Trans i18nKey="footer.title" components={{ br: <br /> }} />
        </h2>

        <div className="flex justify-center gap-10 mb-30">
          <a
            href="https://wa.me/seunumero" // substitua pelo número real
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[var(--color-foreground)] rounded-full px-9 py-2 text-lg uppercase tracking-wide hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-300"
          >
            {t("footer.whatsapp")}
          </a>
          <a
            href="mailto:seu@email.com" // substitua pelo email real
            className="border-2 border-[var(--color-foreground)] rounded-full px-9 py-2 text-lg uppercase tracking-wide hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-300"
          >
            {t("footer.email")}
          </a>
        </div>

        <div className="flex justify-center gap-20 flex-wrap mb-15">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-center border-t border-[var(--color-foreground)] pt-2 hover:text-purple-400 transition-colors"
          >
            <span className="text-ms">github</span>
            <FaGithub className="text-lg" />
          </a>

          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-center border-t border-[var(--color-foreground)] pt-2 hover:text-purple-400 transition-colors"
          >
            <span className="text-ms">linkedin</span>
            <FaLinkedin className="text-lg" />
          </a>

          <a
            href="https://instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-center border-t border-[var(--color-foreground)] pt-2 hover:text-purple-400 transition-colors"
          >
            <span className="text-ms">instagram</span>
            <FaInstagram className="text-lg" />
          </a>
        </div>

        <p className="text-xs opacity-60 font-mono text-center mt-1">
          Feito por PauloJr · Todos os direitos reservados © 2025
        </p>
      </div>
    </div>
  );
};
