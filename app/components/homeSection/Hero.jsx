'use client'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HeroVideo = () => {
  const heroRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const textGroupRef = useRef(null);
  const htmlTextRef = useRef(null);
  const outlineRef = useRef(null);
  const curtainLeftRef = useRef(null);
  const curtainRightRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoId = "48_q9A9cH1s";
  const thumbnailUrl = `https://img.youtube.com/vi/48_q9A9cH1s/maxresdefault.jpg`;

  // Lazy-load YouTube iframes
  useEffect(() => {
    const t = setTimeout(() => setVideoLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial fade-in for text layers
      gsap.fromTo(
        [textGroupRef.current, htmlTextRef.current],
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" }
      );

      // Main scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%", // Tighter scroll for immediate transition
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Existing: Text zoom out
      tl.fromTo(
        [textGroupRef.current, htmlTextRef.current],
        { scale: 1 },
        { scale: 4, ease: "none" },
        0
      );

      // Existing: Fade out text and outline
      tl.to(
        [textGroupRef.current, htmlTextRef.current],
        { opacity: 0, ease: "none" },
        0.4
      );
      tl.to(outlineRef.current, { opacity: 0, ease: "none" }, 0.4);

      // Existing: Background video subtle zoom
      tl.fromTo(
        videoWrapperRef.current,
        { scale: 1 },
        { scale: 1.15, ease: "none" },
        0
      );

      // NEW: Curtain reveal – close from sides at the very end (70-100%)
      tl.fromTo(
        curtainLeftRef.current,
        { x: "-100%" },
        { x: "0%", ease: "power2.in", duration: 0.3 },
        0.7
      );
      tl.fromTo(
        curtainRightRef.current,
        { x: "100%" },
        { x: "0%", ease: "power2.in", duration: 0.3 },
        0.7
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="mantis"
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden bg-black"
      >
        {/* Background Video Wrapper */}
        <div
          ref={videoWrapperRef}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0">
            {!videoLoaded && (
              <Image
                src={thumbnailUrl}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                priority
                unoptimized
              />
            )}
            {videoLoaded && (
              <iframe
                className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${videoId}`}
                allow="autoplay"
                frameBorder="0"
                title="Background Video"
              />
            )}
          </div>

          {/* Dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/60 pointer-events-none" />
      
        </div>

        {/* Semantic HTML Text (SEO-friendly) */}
        <div
          ref={htmlTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center pointer-events-none z-10"
        >
        
        </div>

        {/* SVG Masked Text + Outline (visual effect) */}
        <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none z-20">
          <svg
            ref={textGroupRef}
            className="h-auto"
            style={{ width: "99vw" }}
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="textClip">
                <text x="50%" y="22%" textAnchor="middle" dominantBaseline="middle" fontSize="180" fontWeight="900" fontFamily="'Bebas Neue', sans-serif" letterSpacing="-0.02em">
                  THE
                </text>
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="220" fontWeight="900" fontFamily="'Bebas Neue', sans-serif" letterSpacing="-0.02em">
                  MANTIS
                </text>
                <text x="50%" y="78%" textAnchor="middle" dominantBaseline="middle" fontSize="220" fontWeight="900" fontFamily="'Bebas Neue', sans-serif" letterSpacing="-0.02em">
                  CLUB
                </text>
              </clipPath>
            </defs>

            <g clipPath="url(#textClip)">
              <foreignObject x="-300" y="-200" width="1800" height="1000">
                <div className="relative w-full h-full">
                  {!videoLoaded && (
                    <Image
                      src={thumbnailUrl}
                      alt=""
                      fill
                      sizes="100vw"
                      className="object-cover"
                      unoptimized
                    />
                  )}
                  {videoLoaded && (
                    <iframe
                      className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${videoId}`}
                      allow="autoplay"
                      frameBorder="0"
                      title="Hero Video Fill"
                    />
                  )}
                </div>
              </foreignObject>
            </g>

            <g ref={outlineRef}>
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  <text x="50%" y="22%" textAnchor="middle" dominantBaseline="middle" fontSize="180" fontWeight="900" fontFamily="'Bebas Neue', sans-serif" fill="none" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="1" transform={`translate(0 ${i * 4})`}>
                    THE
                  </text>
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="220" fontWeight="900" fontFamily="'Bebas Neue', sans-serif" fill="none" stroke="hsl(var(--foreground) / 0.2)" strokeWidth="1.2" transform={`translate(0 ${i * 4})`}>
                    MANTIS
                  </text>
                  <text x="50%" y="78%" textAnchor="middle" dominantBaseline="middle" fontSize="220" fontWeight="900" fontFamily="'Bebas Neue', sans-serif" fill="none" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="1" transform={`translate(0 ${i * 4})`}>
                    CLUB
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>

        {/* Curtain Panels */}
        <div
          ref={curtainLeftRef}
          className="absolute inset-y-0 left-0 w-1/2 bg-black z-30 origin-left"
        />
        <div
          ref={curtainRightRef}
          className="absolute inset-y-0 right-0 w-1/2 bg-black z-30 origin-right"
        />

        
      </section>
 
    </>
  );
};

export default HeroVideo;