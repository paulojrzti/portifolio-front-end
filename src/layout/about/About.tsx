import { useTranslation, Trans } from "react-i18next";
import { CountUp } from "../../components"; 
export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between flex-row md:flex-row h-max px-60 py-25 bg-[var(--color-background)] text-[var(--color-foreground)] gap-30">
      <div className="flex justify-center items-center">
        <img
          className="border-2 px-5 py-5 border-purple-500 rounded-full w-130 h-130 object-center object-cover"
          src="/paulo.jpg"
          alt="Foto de perfil"
        />
      </div>
      <div className="w-170 mb-10 md:mb-0 relative">
        <div className="sticky top-0 z-10 backdrop-blur-md bg-[var(--color-background)]/80 w-full py-10">
          <h2 className="text-6xl font-bold text-[var(--color)] tracking-widest uppercase font-mono mb-8">
            <span>{t("about.title")}</span>
          </h2>
          <p className="text-xl leading-relaxed font-sans font-light">
            {t("about.description")}
          </p>
          <div className="flex flex-row justify-between mt-10 w-full">
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl font-mono font-bold flex gap-1  text-[var(--color-accent)]">
                <CountUp
                  from={0}
                  to={2}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text"
                />
                <strong>+</strong>
              </div>
              <p className="font-mono text-lg text-center font-bold">
                <Trans i18nKey="about.exp" components={{ br: <br /> }} />
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl font-mono font-bold flex gap-1  text-[var(--color-accent)]">
                <CountUp
                  from={0}
                  to={20}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text"
                />
                <strong>+</strong>
              </div>
              <p className="font-mono text-lg text-center font-bold">
                <Trans i18nKey="about.projects" components={{ br: <br /> }} />
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl font-mono font-bold flex gap-1 text-[var(--color-accent)]">
                <CountUp
                  from={0}
                  to={3}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text"
                />
                <strong>+</strong>
              </div>
              <p className="font-mono text-lg text-center font-bold">
                <Trans i18nKey="about.empresas" components={{ br: <br /> }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
