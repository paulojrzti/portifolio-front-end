import { useTranslation, Trans } from "react-i18next";
import { useEffect, useRef } from "react";
import { CountUp } from "../../components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "/paulo.jpg";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const { t } = useTranslation();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
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
      }

      if (descRef.current) {
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
      }

      if (cardsRef.current) {
        const elements = Array.from(cardsRef.current.children);
        gsap.from(elements, {
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
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="w-screen bg-[var(--color-background)] px-6 md:px-8 py-28 text-[var(--color-foreground)]"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Texto e contadores */}
        <div className="flex-1 w-full max-w-2xl">
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold uppercase tracking-widest font-mono mb-8 text-left"
          >
            {t("about.title")}
          </h2>

          <p
            ref={descRef}
            className="text-lg md:text-xl leading-relaxed font-light text-left"
          >
            {t("about.description")}
          </p>

          <div
            ref={cardsRef}
            className="flex flex-col sm:flex-row gap-10 mt-12 justify-start"
          >
            {/* Experiência */}
            <div className="flex flex-col items-start">
              <div className="text-4xl font-mono font-bold text-[var(--color-accent)]">
                <CountUp from={0} to={2} direction="up" duration={2} />+
              </div>
              <p className="font-mono font-bold text-sm">
                <Trans i18nKey="about.exp" components={{ br: <br /> }} />
              </p>
            </div>

            {/* Projetos */}
            <div className="flex flex-col items-start">
              <div className="text-4xl font-mono font-bold text-[var(--color-accent)]">
                <CountUp from={0} to={20} direction="up" duration={2} />+
              </div>
              <p className="font-mono font-bold text-sm">
                <Trans i18nKey="about.projects" components={{ br: <br /> }} />
              </p>
            </div>

            {/* Empresas */}
            <div className="flex flex-col items-start">
              <div className="text-4xl font-mono font-bold text-[var(--color-accent)]">
                <CountUp from={0} to={3} direction="up" duration={2} />+
              </div>
              <p className="font-mono font-bold text-sm">
                <Trans i18nKey="about.empresas" components={{ br: <br /> }} />
              </p>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center items-center flex-shrink-0">
          <img
            className="border-4 border-[var(--color-accent)] rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-xl"
            src={aboutImage}
            alt="Foto de perfil"
          />
        </div>
      </div>
    </section>
  );
};
