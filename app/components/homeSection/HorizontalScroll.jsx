"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SafeLink from "../SafeLink";
import MantisImageOne from "./../../assets/images/DSC01432-scaled.jpg";
import MantisImageTwo from "./../../assets/images/DSC01389-2048x1365.jpg";
import MantisImageThree from "./../../assets/images/DSC01362-1-1024x683.jpg";
import MantisImageFour from "./../../assets/images/DSC01579-3-scaled.jpg";
import Button from "../Button";
import Link from "next/link";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const galleryRef = useRef(null);
  const headerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const mantisImg = [
    MantisImageOne,
    MantisImageTwo,
    MantisImageFour,
    MantisImageThree,
    MantisImageOne,
    MantisImageTwo,
    MantisImageFour,
    MantisImageThree,
  ];
  useEffect(() => {
    let ctx;

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      ctx = gsap.context(() => {
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: -50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: galleryRef.current,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
              },
            }
          );
        }

        const images = gsap.utils.toArray(".gallery-item");
        images.forEach((img, index) => {
          gsap.fromTo(
            img,
            {
              opacity: 0,
              y: 100,
              rotateZ: -5,
              scale: 0.8,
            },
            {
              opacity: 1,
              y: 0,
              rotateZ: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                end: "top 60%",
                scrub: 1,
              },
            }
          );
        });
      }, galleryRef);
    }, 0);

    return () => {
      clearTimeout(timeoutId);

      ScrollTrigger.getAll().forEach((trigger) => {
        try {
          trigger.kill(true);
        } catch (e) {}
      });

      if (ctx) {
        try {
          ctx.revert();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <section className="bg-black py-16 px-4">
      <div ref={galleryRef} className="container mx-auto max-w-7xl">
        <SectionTitle
          title="Photo"
          subtitle="Gallery"
          description="Explore our collection of moments. Click any image to view in full size."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
          {mantisImg.map((img, index) => (
            <div
              key={`gallery-${index}`}
              className="gallery-item group cursor-pointer"
              onClick={() => setSelectedImage({ img, index })}
            >
              <div className="bg-white p-4 md:p-5 shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
                <div className="relative bg-gray-100 border-2 border-gray-200">
                  <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[350px] mt-3">
                    <Image
                      src={img}
                      alt={`Gallery Image ${index + 1}`}
                      fill
                      className="object-cover object-[center_30%]"
                    />
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-gray-800 text-xs md:text-sm italic">
                    {" "}
                    Mantis Dubai #{index + 1}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <SafeLink href="/gallery" className="animated-button">
            <div className="animated-inner">
              <span>More Gallery</span>
              <span aria-hidden="true"></span>
            </div>
          </SafeLink>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-400 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-5xl w-full max-h-[90vh] animate-scaleIn">
            {/* Large Photobooth Style */}
            <div className="bg-white p-6 md:p-8 shadow-2xl mx-auto max-w-3xl">
              <div className="relative bg-gray-100 border-2 border-gray-200">
                {/* Large Image */}
                <div className="relative w-full h-[70vh] mt-6">
                  <Image
                    src={selectedImage.img}
                    alt={`Mantis Image ${selectedImage.index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <p className="text-gray-800 text-lg md:text-xl font-medium italic">
                  Mantis Dubai #{selectedImage.index + 1}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
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
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
