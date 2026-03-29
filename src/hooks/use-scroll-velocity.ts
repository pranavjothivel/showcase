"use client";

import { useEffect, useState, useRef } from "react";

export const useScrollVelocity = () => {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(0);

  useEffect(() => {
    let rafId: number;

    const updateVelocity = (timestamp: number) => {
      const currentScrollY = window.scrollY;
      const deltaY = Math.abs(currentScrollY - lastScrollY.current);
      const deltaTime = timestamp - lastTimestamp.current;

      if (deltaTime > 0) {
        // Calculate velocity in pixels per millisecond
        const currentVelocity = deltaY / deltaTime;

        // Smooth the velocity with exponential moving average
        setVelocity(prev => prev * 0.8 + currentVelocity * 0.2);
      }

      lastScrollY.current = currentScrollY;
      lastTimestamp.current = timestamp;

      rafId = requestAnimationFrame(updateVelocity);
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateVelocity);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return velocity;
};

// Helper to convert velocity to animation duration
export const getAnimationDuration = (
  velocity: number,
  baseTime: number = 0.8,
  minTime: number = 0.3,
  maxTime: number = 1.5
): number => {
  // Normalize velocity (typical scroll velocities range from 0 to 2+)
  const normalizedVelocity = Math.min(velocity * 500, 1);

  // Fast scroll = shorter duration, slow scroll = longer duration
  const duration = baseTime * (1 - normalizedVelocity * 0.6);

  return Math.max(minTime, Math.min(maxTime, duration));
};