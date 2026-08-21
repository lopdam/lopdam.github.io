import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import { useReducedMotion } from "motion/react";

const toPercent = (value: number) => `${(value * 100).toFixed(2)}%`;

export const useSpotlight = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const frameRef = useRef(0);
  const pointerRef = useRef({ clientX: 0, clientY: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  const paint = useCallback(() => {
    frameRef.current = 0;

    const element = ref.current;
    if (!element) return;

    const { left, top, width, height } = element.getBoundingClientRect();
    if (!width || !height) return;

    const { clientX, clientY } = pointerRef.current;
    element.style.setProperty("--spotlight-x", toPercent((clientX - left) / width));
    element.style.setProperty("--spotlight-y", toPercent((clientY - top) / height));
  }, []);

  const onPointerMove = useCallback(
    (event: PointerEvent<T>) => {
      if (prefersReducedMotion || event.pointerType === "touch") return;

      pointerRef.current = { clientX: event.clientX, clientY: event.clientY };
      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(paint);
    },
    [paint, prefersReducedMotion]
  );

  return { ref, onPointerMove };
};
