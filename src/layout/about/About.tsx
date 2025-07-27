import { useTranslation, Trans } from "react-i18next";
import { useEffect, useRef } from "react";
import { CountUp } from "../../components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "/paulo.jpg";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const { t } = useTranslation();

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      gsap.from(descRef.current, {
        opacity: 0,
        x: -30,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 85%",
        },
      });

      gsap.from(cardsRef.current?.children || [], {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1.2,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative px-6 md:px-20 py-24 bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Conteúdo */}
        <div className="max-w-3xl w-full">
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold uppercase tracking-widest font-mono mb-6 text-center md:text-left"
          >
            {t("about.title")}
          </h2>

          <p
            ref={descRef}
            className="text-lg md:text-xl leading-relaxed font-light text-justify md:text-left"
          >
            {t("about.description")}
          </p>

          {/* Cards de números */}
          <div
            ref={cardsRef}
            className="flex flex-col sm:flex-row justify-around gap-10 mt-10"
          >
            {/* Experiência */}
            <div className="flex flex-col items-center">
              <div className="text-4xl font-mono font-bold text-[var(--color-accent)]">
                <CountUp from={0} to={2} direction="up" duration={2} />+
              </div>
              <p className="text-center font-mono font-bold text-sm">
                <Trans i18nKey="about.exp" components={{ br: <br /> }} />
              </p>
            </div>

            {/* Projetos */}
            <div className="flex flex-col items-center">
              <div className="text-4xl font-mono font-bold text-[var(--color-accent)]">
                <CountUp from={0} to={20} direction="up" duration={2} />+
              </div>
              <p className="text-center font-mono font-bold text-sm">
                <Trans i18nKey="about.projects" components={{ br: <br /> }} />
              </p>
            </div>

            {/* Empresas */}
            <div className="flex flex-col items-center">
              <div className="text-4xl font-mono font-bold text-[var(--color-accent)]">
                <CountUp from={0} to={3} direction="up" duration={2} />+
              </div>
              <p className="text-center font-mono font-bold text-sm">
                <Trans i18nKey="about.empresas" components={{ br: <br /> }} />
              </p>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="flex justify-center items-center flex-shrink-0">
          <img
            className="border-4 border-[var(--color-accent)] rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl"
            src={aboutImage}
            alt="Foto de perfil"
          />
        </div>
      </div>
    </div>
  );
};
