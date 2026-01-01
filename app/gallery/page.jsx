"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import {
  MantisImage,
  MantisImageOne,
  MantisImageTwo,
  MantisImageThree,
  MantisImageFour,
  MantisImageFive,
  MantisImageSix,
  MantisImageSeven,
  MantisImageEight,
  MantisImageNine,
  MantisImageTen,
  MantisImageEleven,
  MantisImageTwevele,
  MantisImageThirteen,
  MantisImageFourteen,
  galleryClubImage1,
  galleryClubImage2,
  // galleryClubImage3,
  galleryClubImage4,
  galleryClubImage5,
  galleryClubImage6,
  galleryClubImage7,
  galleryClubImage8,
  // galleryClubImage9,
  galleryClubImage10,
  galleryClubImage11,
} from "../../app/common";

import SectionTitle from "../components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const galleryRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const mantisImg = [
    { src: MantisImage },
    { src: MantisImageOne },
    { src: MantisImageTwo },
    { src: MantisImageThree },
    { src: MantisImageFour },
    { src: MantisImageFive },
    { src: MantisImageSix },
    { src: MantisImageSeven },
    { src: MantisImageEight },
    { src: MantisImageNine },
    { src: MantisImageTen },
    { src: MantisImageEleven },
    { src: MantisImageTwevele },
    { src: MantisImageThirteen },
    { src: MantisImageFourteen },
    { src: galleryClubImage1 },
    { src: galleryClubImage2 },
    // { src: galleryClubImage3 },
    { src: galleryClubImage4 },
    { src: galleryClubImage5 },
    { src: galleryClubImage6 },
    { src: galleryClubImage7 },
    { src: galleryClubImage8 },
    // { src: galleryClubImage9 },
    { src: galleryClubImage10 },
    { src: galleryClubImage11 },
  ];

  useEffect(() => {
    if (!galleryRef.current) return;

    const ctx = gsap.context(() => {
      const items = galleryRef.current.querySelectorAll(".gallery-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 80, rotateZ: -4, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            rotateZ: 0,
            scale: 1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });
    }, galleryRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (


    <section className="relative bg-black py-20 px-4 overflow-hidden">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0">
        <Image
          src={galleryClubImage4}                // any image you like
          alt=""
          fill
          priority
          className="object-cover opacity-60 blur-sm"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* ===== CONTENT ===== */}
      <div ref={galleryRef} className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          title="Photo"
          subtitle="Gallery"
          description="Explore our collection of moments. Click any image to view in full size."
        />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
          {mantisImg.map((img, index) => (
            <div
              key={index}
              className="gallery-item group cursor-pointer"
              onClick={() => setSelectedImage({ img, index })}
            >
              <div className="bg-white p-4 md:p-5 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
                <div className="relative bg-gray-100 border-2 border-gray-200">
                  <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[350px] mt-3">
                    <Image
                      src={img.src}
                      alt={`Gallery Image ${index + 1}`}
                      fill
                      className="object-cover object-[center_30%]"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-gray-800 text-xs md:text-sm italic">
                    Mantis Dubai #{index + 1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-400 transition z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <div className="relative max-w-5xl w-full max-h-[90vh] animate-scaleIn">
            <div className="bg-white p-6 md:p-8 shadow-2xl mx-auto max-w-3xl">
              <div className="relative bg-gray-100 border-2 border-gray-200">
                <div className="relative w-full h-[70vh] mt-6">
                  <Image
                    src={selectedImage.img.src}
                    alt={`Mantis Image ${selectedImage.index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-800 text-lg md:text-xl font-medium italic">
                  Mantis Dubai #{selectedImage.index + 1}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
