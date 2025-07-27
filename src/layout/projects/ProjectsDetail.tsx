import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "./data";
import type { Project } from "../../types";
import { gsap } from "gsap";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const project: Project | undefined = projects.find((p) => p.id === id);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.98, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, []);

  if (!project)
    return <div className="text-white p-4">Projeto não encontrado</div>;

  return (
    <div
      ref={containerRef}
      className="h-screen flex flex-col items-center w-screen relative bg-[var(--color-background)] text-[var(--color-foreground)] pl-25 pr-25"
    >
      <button
        ref={buttonRef}
        onClick={() => navigate("/")}
        className="absolute top-8 right-8 bg-white/10 text-white px-4 py-2 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
      >
        ✕
      </button>

      <img
        ref={imageRef}
        src={project.image}
        alt={project.title}
        className="rounded-b-2xl w-screen h-9/12 object-cover"
      />

      <div className="flex flex-col items-center justify-center h-1/2">
        <h2 className="text-3xl text-center font-bold mb-4">{project.title}</h2>
        <p className="max-w-2xl text-center text-lg text-white/80 px-4">
          {project.description}
        </p>
      </div>
    </div>
  );
}
