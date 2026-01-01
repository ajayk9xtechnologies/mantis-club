"use client";

import Image from "next/image";
import { MantisImage } from "../../common";
import SectionTitle from "../SectionTitle";
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
    text: "A cocktail that stands out at all times is the Passionfruit Martini, a deliciously refreshing, exotic, and aromatic refreshment that our guests love to tell us about!",
  },
  {
    title: "Shareable Night",
    subTitle: "Snacks/Pairings",
    text: "As Best luxury nightclub in DIFC, we also provide our guests with an array of tasty and shareable snacks to pair with their choice of cocktails.",
  },
  {
    title: "Live DJs & High Energy",
    subTitle: "Music",
    text: "When you come to Mantis there is always a DJ or a curated live music set playing in the background.",
  },
  {
    title: "VIP Service & Premium",
    subTitle: "Lounge",
    text: "Mantis provides an upscale nightlife experience with careful attention to customer service.",
  },
  {
    title: "Unique & Aesthetically Powerful",
    subTitle: "Atmosphere",
    text: "The interior is designed with bright LEDs and futuristic designs to inspire guests to socialize and have a great time!",
  },
];


export default function MantisScrollSection() {
  return (
    <section
      className="
        relative w-full text-white
        bg-center bg-cover bg-no-repeat
        min-h-[90vh]
      "
      style={{
        backgroundImage: `url(${MantisImage.src})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-4 py-24">

        {/* LEFT: STICKY IMAGE */}
        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <Image
              src={MantisImage}
              alt="Mantis Dubai"
              className="w-full rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT: TEXT */}
        <div className="lg:col-span-7 space-y-8">
          {storyContent.map((item, i) => (
            <div key={i}>
              <SectionTitle title={item.title} subtitle={item.subTitle} description={item.text} align="start" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
