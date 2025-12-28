'use client'
import { useEffect, useRef } from "react";
import React from "react";

const ClubIntro = () => {
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    [image1Ref, image2Ref, image3Ref].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-in {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>
{/* Infinite Marquee Heading */}
<div className="relative overflow-hidden bg-black py-10 border-y border-[#D4AF37]/20 mb-16">
  <div className="animate-marquee flex items-center gap-12">
    {/* We repeat the content twice to ensure it loops perfectly */}
    {[1, 2].map((i) => (
      <h1 key={i} className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight flex items-center gap-12">
        <span>
          Nightclub in Dubai DIFC - <span className="text-[#D4AF37]">Mantis Dubai</span>
        </span>
        <span className="text-outline">
          MANTIS • MANTIS • MANTIS
        </span>
      </h1>
    ))}
  </div>
</div>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <h1 className="text-white leading-tight mb-6">
            Nightclub in Dubai DIFC - <span className="text-[#D4AF37]">Mantis Dubai</span>
          </h1>
          <h2 className="leading-tight">
            Where Music, Mood, and Momentum Meet — Nightclub in DIFC Dubai
          </h2>
        </div>

        {/* First Block - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-28 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 paragraph_three leading-relaxed">
              Mantis Dubai is a Best nightclub in DIFC where the music flows with intention, where the vibe comes from the music, and where the energy grows with the music, rather than creating chaos or trying to overcompensate with alcohol or other substances.
            </p>
            <p className="text-gray-300 paragraph_three leading-relaxed">
              We create an atmosphere rather than just filling the room with noise. Each beat at Premium nightclub DIFC is arranged in a way that will maintain the energy of the night without killing the conversation.
            </p>
          </div>
          <div ref={image1Ref} className="hidden lg:block  fade-up relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1200"
              alt="Mantis Dubai Club Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Block - Image Left, Text Right */}
        <div className="hidden lg:block grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-28 items-center">
          <div ref={image2Ref} className="fade-left relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200"
              alt="Mantis Dubai Dance Floor"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 mt-5">
            <p className="text-gray-300 paragraph_three leading-relaxed text-center ">
              Whether you are just getting off work and grabbing a drink or working up, Mantis is the place where music-orientated nights, eye-catching/elegant cocktails, and an alert/engaged audience come together in a smooth, confident, and unapologetically social way.
            </p>
          </div>
        </div>

        {/* Second Heading */}
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Top Dance Club in DIFC Dubai — <span className="text-[#D4AF37]">Mantis Dubai</span>
          </h2>
        </div>

        {/* Third Block - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed paragraph_three">
              Located in the middle of Dubai s DIFC, Mantis is one of the best clubs to party in DIFC, hosting a variety of music-focused events with a fun crowd and a vibe driven more by rhythm than excess.
            </p>
            <p className="text-gray-300 leading-relaxed paragraph_three">
              Through its signature cocktails, beautiful ambiance, and thoughtfully designed atmosphere, Mantis creates an intentional social scene on nights.
            </p>
            <p className="text-gray-300 leading-relaxed paragraph_three">
              From the first sip of an after-work drink to the last beat of a tailored DJ experience, each visit builds its own momentum.
            </p>
          </div>
          <div ref={image3Ref} className="hidden lg:block fade-right relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200"
              alt="Mantis Dubai Atmosphere"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(ClubIntro);