"use client";

import { useState } from "react";
import type { Project } from "@/types/data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          ${project.color}
          rounded-2xl
          aspect-[4/3]
          mb-5
          flex
          items-center
          justify-center
          border
          border-border
          overflow-hidden
          transition-all
          duration-300
          ease-out
          ${isHovered ? 'shadow-lg shadow-primary/10 -translate-y-1' : ''}
        `}
      >
        <span
          className={`
            font-display
            text-2xl
            font-bold
            text-foreground/20
            transition-opacity
            duration-300
            ${isHovered ? 'opacity-60' : ''}
          `}
        >
          {project.title}
        </span>
      </div>
      <p
        className={`
          text-primary
          font-display
          text-xs
          tracking-widest
          uppercase
          font-medium
          mb-1
          transition-colors
          duration-300
          ${isHovered ? 'text-primary/80' : ''}
        `}
      >
        {project.category}
      </p>
      <h3
        className={`
          font-display
          text-xl
          font-bold
          mb-1
          transition-colors
          duration-300
          ${isHovered ? 'text-primary' : ''}
        `}
      >
        {project.title}
      </h3>
      <p
        className={`
          text-muted-foreground
          text-sm
          transition-colors
          duration-300
          ${isHovered ? 'text-foreground' : ''}
        `}
      >
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;