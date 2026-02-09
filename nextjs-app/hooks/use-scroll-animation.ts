"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollAnimationOptions {
    animation?: gsap.TweenVars;
    scrollTrigger?: ScrollTrigger.Vars;
}

/**
 * Custom hook for applying scroll-based animations to elements
 */
export function useScrollAnimation<T extends HTMLElement>(
    options: UseScrollAnimationOptions = {}
) {
    const elementRef = useRef<T>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const element = elementRef.current;

        const defaultAnimation: gsap.TweenVars = {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            ...options.animation,
        };

        const defaultScrollTrigger: ScrollTrigger.Vars = {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
            ...options.scrollTrigger,
        };

        const animation = gsap.from(element, {
            ...defaultAnimation,
            scrollTrigger: defaultScrollTrigger,
        });

        return () => {
            animation.kill();
        };
    }, [options]);

    return elementRef;
}
