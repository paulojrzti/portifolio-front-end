import { useNavigate, useParams } from "react-router-dom";
import { projects } from "./data";
import type { Project } from "../../types";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project: Project | undefined = projects.find((p) => p.id === id);

  if (!project)
    return <div className="text-white p-4">Projeto não encontrado</div>;

  return (
    <div className="h-screen flex flex-col itemns-center w-screen relative bg-[var(--color-background)] text-[var(--color-foreground)] pl-25 pr-25">
      <button onClick={() => navigate("/")} className="mb-4 text-sm absolute top-10 right-10">
        X
      </button>
      <img
        src={project.image}
        alt={project.title}
        className=" rounded-b-2xl w-screen h-9/12 object-cover"
      />
      <div className="flex flex-col items-center justify-center h-1/2">
      <h2 className="text-3xl text-center font-bold">{project.title}</h2>
      <p className="mt-4">{project.description}</p>
      </div>
    </div>
  );
}
