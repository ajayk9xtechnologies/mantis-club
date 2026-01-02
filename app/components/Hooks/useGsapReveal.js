"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

 
export function useGsapReveal(
  animation = "fade-up",
  delay = 0
) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const fromVars =
      animation === "fade-left"
        ? { x: -60, opacity: 0 }
        : animation === "fade-right"
        ? { x: 60, opacity: 0 }
        : { y: 60, opacity: 0 };

    gsap.fromTo(
      ref.current,
      fromVars,
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      gsap.killTweensOf(ref.current);
    };
  }, [animation, delay]);

  return ref;
}
