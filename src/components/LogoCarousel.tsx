"use client";

import React, { useRef, useState, useCallback, useEffect } from 'react';
import {
  SiC,
  SiRust,
  SiLinux,
  SiKubernetes,
  SiTerraform,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiNodedotjs,
  SiGit,
  SiPostgresql,
  SiCplusplus,
  SiRedhat,
  SiUbuntu,
  SiJavascript
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Technology {
  name: string;
  icon: React.ElementType;
  color: string | { light: string; dark: string };
}

const technologies: Technology[] = [
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  // { name: "Rust", icon: SiRust, color: "#CE422B" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "RHEL", icon: SiRedhat, color: "#EE0000" },
  { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  // { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  // { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
  { name: "JavaScript", icon: SiJavascript, color: "#ffe100" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: { light: "#000000", dark: "#ffffff" } },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

const LogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const getColor = (color: string | { light: string; dark: string }, name: string): string => {
    if (typeof color === 'string') return color;
    const varName = `--tech-${name.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    return `var(${varName})`;
  };

  // Create triple array for seamless infinite scroll
  const tripleArray = [...technologies, ...technologies, ...technologies];

  // Smooth auto-scroll effect
  useEffect(() => {
    if (isHovered || isDragging) return;

    intervalRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const singleSetWidth = (technologies.length * 101); // Approximate card width + gap
      const maxScroll = singleSetWidth * 2;

      if (container.scrollLeft >= maxScroll) {
        // Reset to equivalent position in first set
        container.scrollLeft = container.scrollLeft - singleSetWidth;
      }

      container.scrollLeft += 1; // Smooth pixel-by-pixel scroll
    }, 16); // ~60fps

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, isDragging]);

  // Initialize scroll position and handle infinite scroll wraparound
  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const singleSetWidth = technologies.length * 101;

    // Start in the middle set to allow scrolling in both directions
    container.scrollLeft = singleSetWidth;

    const handleScroll = () => {
      if (container.scrollLeft <= 0) {
        // When reaching the left boundary, jump to end of second set
        container.scrollLeft = singleSetWidth * 2;
      } else if (container.scrollLeft >= singleSetWidth * 2) {
        // When reaching the right boundary, jump to beginning of second set
        container.scrollLeft = singleSetWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);


  return (
    <div className="w-full bg-gradient-to-r from-background via-background/95 to-background py-12">
      <div className="relative">
        {/* Gradient overlays for seamless effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Subtle border fade overlays near chevrons */}
        <div className="absolute left-8 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-background/20 to-background/40 z-[12] pointer-events-none" />
        <div className="absolute right-8 top-0 bottom-0 w-8 bg-gradient-to-l from-transparent via-background/20 to-background/40 z-[12] pointer-events-none" />

        {/* Directional guides */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-card/60 backdrop-blur-sm border border-border/30 rounded-full p-2 pointer-events-none opacity-70">
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </div>

        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-card/60 backdrop-blur-sm border border-border/30 rounded-full p-2 pointer-events-none opacity-70">
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Scrolling container with extra padding for hover effects */}
        <div className="overflow-hidden px-12">
          <div
            ref={scrollRef}
            className={`flex gap-4 overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none py-4`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
              scrollBehavior: 'auto',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            {/* Triple array for seamless infinite scroll */}
            {tripleArray.map((tech, index) => {
              const setIndex = Math.floor(index / technologies.length);
              const techIndex = index % technologies.length;
              return (
                <div
                  key={`${setIndex}-${techIndex}`}
                  className="flex-shrink-0 flex items-center justify-center group"
                >
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/40 hover:border-border transition-all duration-300 hover:bg-card/50 hover:scale-105 hover:shadow-lg min-w-[85px] hover:z-20 relative">
                    <tech.icon
                      className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: getColor(tech.color, tech.name) }}
                    />
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;