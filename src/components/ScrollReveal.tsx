"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  className?: string;
  enableParallax?: boolean;
}

const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.8,
  className = "",
  enableParallax = false,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance / 2, -distance / 2]);

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const exitOffset = {
    up: { y: -distance / 2 },
    down: { y: distance / 2 },
    left: { x: -distance / 2 },
    right: { x: distance / 2 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: enableParallax ? y : 0,
      }}
      exit={{
        opacity: 0,
        ...exitOffset[direction],
      }}
      viewport={{
        once: false,
        amount: 0.1,
        margin: "-100px 0px"
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      style={enableParallax ? { y } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;