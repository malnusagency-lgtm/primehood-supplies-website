import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade in animation on scroll
 */
export function fadeInOnScroll(element: string | Element, options?: gsap.TweenVars) {
    return gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        ...options,
    });
}

/**
 * Stagger animation for multiple elements
 */
export function staggerFadeIn(elements: string | Element[], options?: gsap.TweenVars) {
    return gsap.from(elements, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: elements,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        ...options,
    });
}

/**
 * Text reveal animation (split by characters)
 */
export function textReveal(element: string | Element, options?: gsap.TweenVars) {
    return gsap.from(element, {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: "top center",
        duration: 1.2,
        ease: "power4.out",
        ...options,
    });
}

/**
 * Scale in animation
 */
export function scaleIn(element: string | Element, options?: gsap.TweenVars) {
    return gsap.from(element, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        ...options,
    });
}

/**
 * Parallax effect
 */
export function parallax(element: string | Element, speed: number = 0.5) {
    return gsap.to(element, {
        y: () => window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
}

/**
 * Slide in from left
 */
export function slideInLeft(element: string | Element, options?: gsap.TweenVars) {
    return gsap.from(element, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        ...options,
    });
}

/**
 * Slide in from right
 */
export function slideInRight(element: string | Element, options?: gsap.TweenVars) {
    return gsap.from(element, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        ...options,
    });
}
