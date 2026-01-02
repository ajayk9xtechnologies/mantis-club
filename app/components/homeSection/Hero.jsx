"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CircularVideoButton from "../CircularVideoButton";
import React from "react";
import { MantisImage } from "../../common";

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
  const [shouldPlayVideo, setShouldPlayVideo] = useState(true);
  const pathname = usePathname();

  const videoId = "48_q9A9cH1s";

  useEffect(() => {
    const t = setTimeout(() => setVideoLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  // Intersection Observer for video playback control
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldPlayVideo(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const toYoutube = () => {
    return window.open("https://www.youtube.com/@mantisdubai6438", "_blank");
  };

  // Kill ScrollTriggers on pathname change (BEFORE navigation completes)
  useEffect(() => {
    return () => {
      // This runs when pathname changes, BEFORE component unmounts
      ScrollTrigger.getAll().forEach((st) => {
        st.kill(true);
      });
      gsap.killTweensOf("*");
    };
  }, [pathname]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          gsap.fromTo(
            [textGroupRef.current, htmlTextRef.current],
            { opacity: 0, scale: 1.2 },
            { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" }
          );

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "+=100%",
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          });

          tl.fromTo(
            [textGroupRef.current, htmlTextRef.current],
            { scale: 1 },
            { scale: 4, ease: "none" },
            0
          );

          tl.to(
            [textGroupRef.current, htmlTextRef.current],
            { opacity: 0, ease: "none" },
            0.4
          );
          tl.to(outlineRef.current, { opacity: 0, ease: "none" }, 0.4);

          tl.fromTo(
            videoWrapperRef.current,
            { scale: 1 },
            { scale: 1.15, ease: "none" },
            0
          );

          tl.fromTo(
            curtainLeftRef.current,
            { x: "-100%" },
            { x: "-30%", ease: "power2.in", duration: 0.3 },
            0.7
          );
          tl.fromTo(
            curtainRightRef.current,
            { x: "100%" },
            { x: "30%", ease: "power2.in", duration: 0.3 },
            0.7
          );
        },

        "(max-width: 767px)": () => {
          gsap.set([curtainLeftRef.current, curtainRightRef.current], {
            display: "none",
          });

          gsap.set(
            [
              textGroupRef.current,
              htmlTextRef.current,
              videoWrapperRef.current,
            ],
            {
              clearProps: "all",
            }
          );
        },
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        id="mantis"
        ref={heroRef}
        className="relative h-[100dvh] w-full overflow-hidden bg-black"
      >
        <div ref={videoWrapperRef} className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            {!videoLoaded && (
              <Image
                src={MantisImage}
                alt="Mantis Dubai Nightclub"
                fill
                sizes="100vw"
                className="object-cover"
                priority
                unoptimized
              />
            )}
            {videoLoaded && (
              <video
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                ref={(el) => {
                  if (el) {
                    if (shouldPlayVideo) el.play().catch(() => { });
                    else el.pause();
                  }
                }}
              >
                <source src="/videos/club.mp4" type="video/mp4" />
              </video>
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80 pointer-events-none" />
        </div>

        <div
          ref={htmlTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center pointer-events-none z-10"
        ></div>

        <div className="absolute inset-0 flex items-center justify-center px-4 z-20" onClick={toYoutube} >
          <CircularVideoButton />
          <svg
            ref={textGroupRef}
            className="h-auto pointer-events-none w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[75vw]"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="textClip">
                <text
                  x="50%"
                  y="22%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="220"
                  fontWeight="900"
                  fontFamily="'Bebas Neue', sans-serif"
                  letterSpacing="-0.02em"
                >
                  THE
                </text>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="220"
                  fontWeight="900"
                  fontFamily="'Bebas Neue', sans-serif"
                  letterSpacing="-0.02em"
                >
                  MANTIS
                </text>
                <text
                  x="50%"
                  y="78%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="220"
                  fontWeight="900"
                  fontFamily="'Bebas Neue', sans-serif"
                  letterSpacing="-0.02em"
                >
                  CLUB
                </text>
              </clipPath>
            </defs>

            <g clipPath="url(#textClip)">
              <foreignObject x="-300" y="-200" width="1800" height="1000">
                <div className="relative w-full h-full">
                  {!videoLoaded && (
                    <Image
                      src={MantisImage}
                      alt="Mantis Dubai Nightclub"
                      fill
                      sizes="100vw"
                      className="object-cover"
                      unoptimized
                    />
                  )}
                  {videoLoaded && (
                    <video
                      className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
                      autoPlay
                      muted
                      loop
                      playsInline
                      ref={(el) => {
                        if (el) {
                          if (shouldPlayVideo) el.play().catch(() => { });
                          else el.pause();
                        }
                      }}
                    >
                      <source src="/videos/club.mp4" type="video/mp4" />
                    </video>
                  )}
                </div>
              </foreignObject>
            </g>

            <g ref={outlineRef}>
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  <text
                    x="50%"
                    y="22%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="180"
                    fontWeight="900"
                    fontFamily="'Bebas Neue', sans-serif"
                    fill="none"
                    stroke="hsl(var(--foreground) / 0.15)"
                    strokeWidth="1"
                    transform={`translate(0 ${i * 4})`}
                  >
                    THE
                  </text>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="220"
                    fontWeight="900"
                    fontFamily="'Bebas Neue', sans-serif"
                    fill="none"
                    stroke="hsl(var(--foreground) / 0.2)"
                    strokeWidth="1.2"
                    transform={`translate(0 ${i * 4})`}
                  >
                    MANTIS
                  </text>
                  <text
                    x="50%"
                    y="78%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="220"
                    fontWeight="900"
                    fontFamily="'Bebas Neue', sans-serif"
                    fill="none"
                    stroke="hsl(var(--foreground) / 0.15)"
                    strokeWidth="1"
                    transform={`translate(0 ${i * 4})`}
                  >
                    CLUB
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>

        {/* Book Now CTA Button */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-[1000] pointer-events-auto">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#f8db98] text-black font-extrabold text-xl rounded-full overflow-hidden border-2 border-[#f8db98] cursor-pointer"
          >
            <span className="relative z-10 tracking-widest">BOOK NOW</span>
            <div className="relative z-10 w-6 h-6 flex items-center justify-center bg-black/10 rounded-full transition-transform duration-500 group-hover:rotate-45">
              <svg
                className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* Animated Shine Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine" />

            {/* Background Hover Transition */}
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </div>

        <div
          ref={curtainLeftRef}
          className="absolute inset-y-0 left-0 w-1/2 bg-black z-30 origin-left pointer-events-none"
        />
        <div
          ref={curtainRightRef}
          className="absolute inset-y-0 right-0 w-1/2 bg-black z-30 origin-right pointer-events-none"
        />
      </section>
    </>
  );
};

export default React.memo(HeroVideo);