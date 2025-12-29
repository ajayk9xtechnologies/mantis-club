"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import React from "react";
import SectionTitle from "../SectionTitle";

const PartyDarkSection = () => {
  const sectionRef = useRef(null);
  const videoButtonRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sections = [
    {
      title: "LATE NIGHT BEATS",
      description:
        "Those who truly know the top nightlife experiences in DIFC know how to set the right pace, read the chemistry of the crowd, and create an atmosphere for amazing nightlife. Mantis Dubai is one of the Late Night Beats in DIFC that always gets mentioned in this context.",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200",
    },
    {
      title: "BALANCED ENERGY",
      description:
        "Mantis Dubai offers upbeat, energetic music, well-made cocktails, and an engaged and active crowd without the chaos or theatrics sometimes found in other clubs. The room is filled with a mix of house, commercial, Afrobeat, and international music.",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200",
    },
    {
      title: "NATURAL MOMENTUM",
      description:
        "The Top Late Night Club in DIFC provides a natural momentum from one experience to the next, with drinks that are on point, music that uplifts, and a crowd that enhances the overall experience of the night.",
      image:
        "https://images.unsplash.com/photo-1571266028243-d220c265aeb2?w=1200",
    },
    {
      title: "TRENDY CROWD",
      description:
        "Mantis attracts a crowd that understands the balance between style and substance. DIFC professionals, creatives, and socially tuned regulars shape the energy of the room, creating an atmosphere that feels confident, social, and naturally engaging.",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200",
    },
  ];

  useEffect(() => {
    // Rotating video button animation
    let animation;
    if (videoButtonRef.current?.querySelector("svg")) {
      const svg = videoButtonRef.current.querySelector("svg");
      let rotation = 0;
      const animate = () => {
        rotation += 0.5;
        svg.style.transform = `rotate(${rotation}deg)`;
        animation = requestAnimationFrame(animate);
      };
      animation = requestAnimationFrame(animate);
    }

    return () => {
      if (animation) cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Full Section Background Image */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          hoveredIndex !== null ? "opacity-20" : "opacity-0"
        }`}
      >
        {hoveredIndex !== null && (
          <img
            src={sections[hoveredIndex].image}
            alt={sections[hoveredIndex].title}
            className="w-full h-full object-cover object-center"
          />
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Circular Video Button - Top Right */}
        <div
          ref={videoButtonRef}
          className="absolute top-8 right-8 md:top-12 md:right-12 hidden lg:block z-20"
        >
          <div className="relative w-[160px] h-[160px] md:w-[180px] md:h-[180px] flex items-center justify-center">
            <svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              className="absolute inset-0"
            >
              <defs>
                <path
                  id="circlePathParty"
                  d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>
              <text
                className="text-[13px] font-bold uppercase"
                fill="#f8db98"
                style={{ letterSpacing: "6px" }}
              >
                <textPath href="#circlePathParty" startOffset="0%">
                  WATCH VIDEO • MANTIS DUBAI •
                </textPath>
              </text>
            </svg>
            <a
              href="https://www.youtube.com/watch?v=48_q9A9cH1s"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <Play className="w-8 h-8 text-black fill-black ml-1" />
            </a>
          </div>
        </div>

        {/* Section Title */}
        <SectionTitle
          title="PARTY AFTER"
          subtitle="DARK"
          description="DIFC Night Club"
        />

        {/* Sections List */}
        <div className="space-y-0">
          {sections.map((section, index) => (
            <div
              key={index}
              className="party-row border-b border-gray-800 last:border-b-0 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-8 md:py-12 lg:py-16">
                {/* Section Title */}
                <div className="lg:col-span-3">
                  <h3 className="text-white font-bold tracking-tight">
                    {section.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-7">
                  <p className="text-gray-400 paragraph_three leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end">
                  <button
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === index
                        ? "bg-[#f8db98] scale-110"
                        : index === 0
                        ? "bg-[#f8db98]"
                        : "bg-white"
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
                        hoveredIndex === index || index === 0
                          ? "text-black"
                          : "text-black"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-gray-400 paragraph_two mb-6">
            The result is a space where interaction feels easy, nights feel
            fluid, and the experience is driven as much by the people as by the
            music and cocktails.
          </p>
          <p className="text-[#f8db98] paragraph_two font-bold">
            Best club in Dubai for weekend party
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PartyDarkSection);
