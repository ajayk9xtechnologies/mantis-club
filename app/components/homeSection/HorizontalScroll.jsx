"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import MantisImageOne from "./../../assets/images/DSC01432-scaled.jpg";
import MantisImageTwo from "./../../assets/images/DSC01389-2048x1365.jpg";
import MantisImageThree from "./../../assets/images/DSC01362-1-1024x683.jpg";
import MantisImageFour from "./../../assets/images/DSC01579-3-scaled.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const mantisImg = [
    MantisImageOne,
    MantisImageTwo,
    MantisImageFour,
    MantisImageThree,
  ];

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (t) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const container = scrollRef.current;
      if (!container) return;

      const content = container.querySelector(".horizontal__content");
      if (!content) return;

      const scrollWidth = content.scrollWidth - container.offsetWidth;

      // horizontal movement
      gsap.to(content, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // fade in / out
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="bg-black">
      <section
        ref={sectionRef}
        className="min-h-[90vh] grid grid-cols-12 overflow-hidden"
      >
        {/* LEFT */}
        <div className="col-span-4 flex items-center px-12 text-white">
          <div className="max-w-sm">
            <h2 className="text-foreground leading-tight mb-6">
              Never {" "}
              <span className="text-color-one">Ending</span>
            </h2>
            <p className="opacity-70 paragraph_three">
              This content stays fixed while the imagery flows horizontally.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div ref={scrollRef} className="col-span-8 overflow-hidden">
          <div className="horizontal__content flex gap-4 py-32">
            {mantisImg.map((img, index) => (
              <div
                key={index}
                className="shrink-0
                  w-[85vw] md:w-[65vw] lg:w-[30vw]
                  h-[60vh] md:h-[70vh] lg:h-[80vh]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`Mantis Image ${index + 1}`}
                    fill
                    className="object-contain rounded-2xl"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
