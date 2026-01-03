"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavigationCleanup() {
    const pathname = usePathname();

    useEffect(() => {
        // Register plugin once
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const cleanup = () => {
            // Very aggressive cleanup
            const allTriggers = ScrollTrigger.getAll();
            allTriggers.forEach((st) => {
                try {
                    st.kill(true); // revert=true is key to avoid removeChild errors
                } catch (e) {
                    console.warn("Error killing ScrollTrigger:", e);
                }
            });
            gsap.killTweensOf("*");
        };

        // Browser navigation (Back/Forward)
        window.addEventListener("popstate", cleanup);

        // Also catch any unmount of this global clean-up component
        return () => {
            window.removeEventListener("popstate", cleanup);
            cleanup();
        };
    }, []);

    // Next.js internal navigation
    useEffect(() => {
        // We don't necessarily want to kill everything on EVERY pathname change 
        // if the navigation was handled by SafeLink (which already cleaned up).
        // But it's safer to do it here too just in case.
        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill(true));
            gsap.killTweensOf("*");
        };
    }, [pathname]);

    return null;
}
