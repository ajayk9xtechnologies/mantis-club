"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import MantisImg from "../../assets/images/DSC01348-scaled.jpg";

gsap.registerPlugin(ScrollTrigger);

const storyContent = [
  {
    title: "High-Energy Nights at",
    subTitle: "Mantis",
    text: "The Mantis as Top clubs in DIFC is an exciting nightlife destination that offers an extraordinary blend of energy and style through music (electronic), lighting (state of the art), and the people (trendy) you will meet at the club.",
  },
  {
    title: "A Modern Nightclub with a",
    subTitle: "Bollywood Twist",
    text: "Mantis is a Must-visit clubs in DIFC with a Bollywood twist! The atmosphere is modern, yet the decor is Bollywood-influenced, and the sounds are a blend of Modern-Day Bollywood and Electronic Dance Music.",
  },
  {
    title: "Signature Cocktails and",
    subTitle: "Specialty Drinks",
    text: "A cocktail that stands out at all times is the Passionfruit Martini, a deliciously refreshing, exotic, and aromatic refreshment that our guests love to tell us about! Our drinks are colourful, bold, and vibrant, and they are meant to keep up with the pace of nightlife.",
  },
  {
    title: "Shareable Night",
    subTitle: "Snacks / Pairings",
    text: "As Best luxury nightclub in DIFC, we provide guests with tasty and shareable snacks that perfectly pair with cocktails, offering a boost of energy to fuel the night ahead.",
  },
  {
    title: "Live DJs & High Energy",
    subTitle: "Music",
    text: "Every night features DJs and curated sets blending Bollywood hits, EDM, and commercial tracks designed to keep the crowd moving.",
  },
  {
    title: "VIP Service & Premium",
    subTitle: "Lounge",
    text: "An upscale nightlife experience with personalised VIP service, delivering premium comfort without losing the energy.",
  },
  {
    title: "Unique & Aesthetically Powerful",
    subTitle: "Atmosphere",
    text: "Futuristic interiors, bold LED designs, and immersive visuals create an atmosphere that inspires guests to socialise and celebrate.",
  },
];

export default function MantisPinnedSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".ladder-item");
      const itemGap = 110;

      const setPositions = (activeIndex) => {
        items.forEach((el, i) => {
          const diff = i - activeIndex;

          gsap.to(el, {
            y: diff * itemGap,
            opacity:
              Math.abs(diff) === 0
                ? 1
                : Math.abs(diff) === 1
                ? 0.25
                : 0,
            scale: diff === 0 ? 1.05 : 0.92,
            filter: diff === 0 ? "blur(0px)" : "blur(1px)",
            duration: 0.45,
            ease: "power3.out",
          });
        });
      };

      setPositions(0);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${items.length * 100}%`,
        pin: true,
        scrub: true,
        snap: 1 / (items.length - 1),
        onUpdate: (self) => {
          const index = Math.round(
            self.progress * (items.length - 1)
          );
          setPositions(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-black text-white"
    >
      <div className="container mx-auto h-full grid grid-cols-12 items-center gap-4 px-4">
        {/* LEFT IMAGE */}
        <div className="col-span-12 md:col-span-5 flex justify-center">
          <div className="w-full max-w-[560px]">
            <Image
              src={MantisImg}
              alt="Mantis Dubai"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT LADDER TEXT */}
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="relative h-[30vh] overflow-hidden">
            {storyContent.map((item, i) => (
              <div
                key={i}
                className="ladder-item absolute left-0 right-0"
              >
                <h2 className="text-4xl md:text-6xl font-extrabold   mb-4 text-center">
                  {item.title}
                  <span className="text-color-one block">
                    {item.subTitle}
                  </span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto text-center">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
