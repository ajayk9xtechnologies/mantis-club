'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ClubOne from "../../assets/images/clubone.jpg";
import clubone2 from "../../assets/images/clubone2.jpg";
import clubone3 from "../../assets/images/clubone3.jpg";

gsap.registerPlugin(ScrollTrigger);

const ClubIntro = () => {
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image 1 - Fade in and scale
      gsap.fromTo(
        image1Ref.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image1Ref.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image 2 - Slide from left
      gsap.fromTo(
        image2Ref.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image2Ref.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image 3 - Slide from right
      gsap.fromTo(
        image3Ref.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image3Ref.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-background py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-foreground leading-tight mb-6">
            Nightclub in Dubai DIFC - <span className="text-color-one">Mantis Dubai</span>
          </h1>
          <h2 className="text-foreground leading-tight opacity-90">
            Where Music, Mood, and Momentum Meet — Nightclub in DIFC Dubai
          </h2>
        </div>

        {/* First Block - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20 items-center">
          <div>
            <p className="paragraph_one text-foreground leading-relaxed mb-6">
              Mantis Dubai is a Best nightclub in DIFC where the music flows with intention, where the vibe comes from the music, and where the energy grows with the music, rather than creating chaos or trying to overcompensate with alcohol or other substances.
            </p>
            <p className="paragraph_two text-foreground leading-relaxed">
              We create an atmosphere rather than just filling the room with noise. Each beat at Premium nightclub DIFC is arranged in a way that will maintain the energy of the night without killing the conversation.
            </p>
          </div>
          <div ref={image1Ref} className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={ClubOne}
              alt="Mantis Dubai Club Interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Second Block - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20 items-center">
          <div ref={image2Ref} className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden lg:order-1">
            <Image
              src={clubone2}
              alt="Mantis Dubai Dance Floor"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="lg:order-2">
            <p className="paragraph_three text-foreground leading-relaxed">
              Whether you are just getting off work and grabbing a drink or working up, Mantis is the place where music-orientated nights, eye-catching/elegant cocktails, and an alert/engaged audience come together in a smooth, confident, and unapologetically social way.
            </p>
          </div>
        </div>

        {/* Second Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-foreground leading-tight">
            Top Dance Club in DIFC Dubai — <span className="text-color-one">Mantis Dubai</span>
          </h2>
        </div>

        {/* Third Block - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="paragraph_two text-foreground leading-relaxed mb-6">
              Located in the middle of Dubai s DIFC, Mantis is one of Best clubs to party in DIFC that hosts a variety of events focused on music with a fun crowd and a vibe that feels more about rhythm than excesses.
            </p>
            <p className="paragraph_three text-foreground leading-relaxed mb-6">
              Through its signature cocktails, beautiful ambiance, and thoughtfully designed atmosphere, Mantis creates an intentional social scene on nights.
            </p>
            <p className="paragraph_three text-foreground leading-relaxed">
              From the first sip of an after-work drink through to the last beat of a tailored DJ experience that takes over the floor at Mantis, each visit builds its own momentum.
            </p>
          </div>
          <div ref={image3Ref} className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={clubone3}
              alt="Mantis Dubai Atmosphere"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubIntro;