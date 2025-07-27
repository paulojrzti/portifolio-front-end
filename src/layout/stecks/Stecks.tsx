import { useTranslation} from "react-i18next";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
export const Stecks = () => {
  const { t } = useTranslation();
  
      const icons = [
        { icon: <FaReact size={40} />, label: "React" },
        { icon: <FaHtml5 size={40} />, label: "HTML5" },
        { icon: <FaCss3Alt size={40} />, label: "CSS3" },
        { icon: <FaWordpress size={40} />, label: "WordPress" },
        { icon: <FaFigma size={40} />, label: "Figma" },
        { icon: <SiTailwindcss size={40} />, label: "Tailwind" },
        { icon: <SiTypescript size={40} />, label: "TypeScript" },
        { icon: <SiNextdotjs size={40} />, label: "Next.js" },
      ];
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-foreground)] py-30">
        <h2 className="text-6xl font-bold text-[var(--color)] tracking-widest uppercase font-mono mb-15">{t("stecks.title")}</h2>
        <div className="grid grid-cols-4 gap-15">
          {icons.map(({ icon, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
              title={label}
            >
              <div className="w-25 h-25 border-2 border-purple-500 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-500 hover:text-black transition duration-300">
                {icon}
              </div>
              <span className="mt-2 text-xs italic font-mono text-[var(--color-foreground)]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};