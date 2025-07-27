import { useTranslation } from "react-i18next";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Stecks = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const icons = [
    { icon: <FaReact size={36} />, label: "React" },
    { icon: <FaHtml5 size={36} />, label: "HTML5" },
    { icon: <FaCss3Alt size={36} />, label: "CSS3" },
    { icon: <FaWordpress size={36} />, label: "WordPress" },
    { icon: <FaFigma size={36} />, label: "Figma" },
    { icon: <SiTailwindcss size={36} />, label: "Tailwind" },
    { icon: <SiTypescript size={36} />, label: "TypeScript" },
    { icon: <SiNextdotjs size={36} />, label: "Next.js" },
  ];

  useEffect(() => {
    const elements = containerRef.current
      ? Array.from(containerRef.current.children)
      : [];

    elements.forEach((el) => {
      (el as HTMLElement).classList.add("opacity-0");
    });

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="relative py-32 px-6 bg-[var(--color-background)] text-[var(--color-foreground)] overflow-hidden">
      {/* Fundo gradiente suave */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[900px] h-[900px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Título */}
      <h2 className="text-5xl md:text-6xl font-bold text-center font-mono tracking-widest uppercase relative z-10 mb-20">
        <span className="text-[var(--color-accent)]">{t("stecks.title")}</span>
      </h2>

      {/* Grid de Skills */}
      <div
        ref={containerRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10"
      >
        {icons.map(({ icon, label }, index) => (
          <div
            key={index}
            className="opacity-0 flex flex-col items-center justify-center rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-surface)] backdrop-blur-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_var(--color-accent)]/30 hover:bg-[var(--color-accent)]/10 group"
            title={label}
          >
            <div className="text-[var(--color-accent)] group-hover:text-[var(--color-accent-light)] transition-colors">
              {icon}
            </div>
            <span className="mt-3 text-sm italic font-mono text-[color:var(--color-foreground)]/80 group-hover:text-[color:var(--color-foreground)]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
