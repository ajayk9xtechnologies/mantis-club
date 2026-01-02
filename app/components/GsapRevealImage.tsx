"use client";
import Image from "next/image";
import { useGsapReveal } from "./Hooks/useGsapReveal";

type Props = {
  src: any;
  alt: string;
  animation?: "fade-up" | "fade-left" | "fade-right";
  className?: string;
  delay?: number;
};

export default function GsapRevealImage({
  src,
  alt,
  animation = "fade-up",
  className = "",
  delay = 0,
}: Props) {
  const ref = useGsapReveal(animation, delay);

  return (
    <div ref={ref} className={className}>
      <Image
        src={src}
        alt={alt}
        className={className}
      />
    </div>
  );
}
