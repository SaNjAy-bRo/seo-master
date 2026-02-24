"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type AnimationDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    delay?: number;
    direction?: AnimationDirection;
    distance?: number;
    duration?: number;
    once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    options: ScrollRevealOptions = {}
) {
    const {
        threshold = 0.15,
        rootMargin = "0px 0px -60px 0px",
        delay = 0,
        once = true,
    } = options;

    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (delay > 0) {
                        setTimeout(() => setIsVisible(true), delay);
                    } else {
                        setIsVisible(true);
                    }
                    if (once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            });
        },
        [delay, once]
    );

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Respect prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(handleIntersection, {
            threshold,
            rootMargin,
        });

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, handleIntersection]);

    return { ref, isVisible };
}

/**
 * Hook that returns multiple refs for staggered animations.
 * Each child will animate in sequence with the given stagger delay.
 */
export function useStaggerReveal(
    count: number,
    options: { baseDelay?: number; stagger?: number; threshold?: number } = {}
) {
    const { baseDelay = 0, stagger = 100, threshold = 0.1 } = options;

    const reveals = Array.from({ length: count }, (_, i) =>
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useScrollReveal({
            delay: baseDelay + i * stagger,
            threshold,
            rootMargin: "0px 0px -40px 0px",
        })
    );

    return reveals;
}
