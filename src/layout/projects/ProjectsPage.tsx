import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "./data/Projects";
import type { Project } from "../../types";

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<Project>(projects[0]);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen gap-15 bg-[var(--color-background)] text-[var(--color-foreground)] pr-25 py-50">
      <div className="flex-1 bg-gray-300 rounded-br-[80px] rounded-tr-[80px]  overflow-hidden">
        <img
          src={hovered.image}
          alt={hovered.title}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>

      <div className="flex-1 flex flex-col justify-start py-5 px-6 space-y-4">
        <h1 className="text-5xl font-bold font-mono text-center mb-15">
          PROJECTS
        </h1>
        <div className="space-y-2">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex justify-between items-center border-t py-2 cursor-pointer group"
              onMouseEnter={() => setHovered(p)}
              onClick={() => {
                sessionStorage.setItem(
                  "scrollPosition",
                  window.scrollY.toString()
                );
                navigate(`/project/${p.id}`);
              }}
            >
              <div className="font-mono italic flex items-center gap-2">
                <span className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  →
                </span>
                <h6>{p.title}</h6>
              </div>
              <div className="text-sm">{p.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
