"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function SafeLink({ href, children, onNavigate, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();

    // Check if it's an anchor link (starts with #)
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      
      // If we're on homepage AND target exists, just scroll
      if (pathname === "/" && target) {
        if (onNavigate) {
          onNavigate();
        }

        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      } else {
        // We're NOT on homepage, navigate to home first, then scroll
        ScrollTrigger.getAll().forEach((st) => st.kill(true));
        gsap.killTweensOf("*");
        
        if (onNavigate) {
          onNavigate();
        }

        setTimeout(() => {
          router.push("/" + href);
        }, 50);
      }
      return;
    }

    // Regular navigation - check if we have any pinned ScrollTriggers
    const triggers = ScrollTrigger.getAll();
    const hasPinnedTriggers = triggers.some((st) => st.vars.pin);

    // Kill all ScrollTriggers and animations
    triggers.forEach((st) => st.kill(true));
    gsap.killTweensOf("*");
    
    if (onNavigate) {
      onNavigate();
    }
    
    // Only delay if there were pinned triggers, otherwise navigate immediately
    if (hasPinnedTriggers) {
      setTimeout(() => {
        router.push(href);
      }, 50);
    } else {
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}