"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useRef, useEffect, useMemo } from "react";
import { useScrollVelocity, getAnimationDuration } from "@/hooks/use-scroll-velocity";

interface AdaptiveScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  baseDuration?: number;
  className?: string;
  enableVelocityResponse?: boolean;
}

const AdaptiveScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  distance = 50,
  baseDuration = 0.8,
  className = "",
  enableVelocityResponse = true,
}: AdaptiveScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.1,
    margin: "-100px 0px"
  });
  const controls = useAnimation();
  const velocity = useScrollVelocity();

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const reverseOffset = useMemo(() => ({
    up: { y: -distance / 2 },
    down: { y: distance / 2 },
    left: { x: -distance / 2 },
    right: { x: distance / 2 },
  }), [distance]);

  useEffect(() => {
    const animationDuration = enableVelocityResponse
      ? getAnimationDuration(velocity, baseDuration)
      : baseDuration;

    if (isInView) {
      // Animate in when in view
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: animationDuration,
          delay,
          ease: velocity > 0.5
            ? [0.4, 0.0, 0.2, 1.0] // Faster easing for quick scrolls
            : [0.25, 0.1, 0.25, 1.0], // Smoother easing for slow scrolls
        }
      });
    } else {
      // Animate out when out of view
      const exitDuration = animationDuration * 0.6;
      controls.start({
        opacity: velocity > 0.3 ? 0 : 0.7, // Fade out more on fast scrolls
        ...reverseOffset[direction],
        transition: {
          duration: exitDuration,
          ease: [0.25, 0.1, 0.25, 1.0],
        }
      });
    }
  }, [isInView, controls, direction, distance, delay, velocity, baseDuration, enableVelocityResponse, reverseOffset]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={controls}
      style={{
        // Ensure scroll animations don't interfere with CSS hover transforms
        transformOrigin: "center",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AdaptiveScrollReveal;