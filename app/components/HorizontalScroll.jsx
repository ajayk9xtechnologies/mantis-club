"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: 100,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    /* ✅ GSAP CONTEXT */
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".horizontal__item");

      // ⬅️ Start from RIGHT
      gsap.set(items, {
        xPercent: 100 * (items.length - 1),
      });

      gsap.to(items, {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 3,
          snap: 1 / (items.length - 1),
          end: () => `+=${sectionRef.current.offsetWidth}`,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert(); // ✅ SAFE cleanup
      lenis.destroy(); // ✅
    };
  }, []);

  return (
    <section
  id="horizontal"
  ref={sectionRef}
  className="h-screen overflow-hidden flex items-center"
>
  <div className="horizontal__content flex h-full">
    {[1, 2, 3, 4, 5].map((num) => (
      <div
        className="horizontal__item h-full flex items-center justify-center"
        key={num}
      >
        <div className="flex flex-row items-center gap-5 w-[400px] text-center text-6xl">
          {num}
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
