import { useEffect } from 'react';

export const useParallax = (containerRef, elementRef, speedFactor = 0.15) => {
    useEffect(() => {
        const container = containerRef.current;
        const element = elementRef.current;

        if (!container || !element || window.innerWidth < 1024) return;

        let ticking = false;

        const updateParallax = () => {
            const scrollPos = window.scrollY;
            const containerRect = container.getBoundingClientRect();
            const containerTopInitial = containerRect.top + scrollPos;

            const relativeScroll = scrollPos - containerTopInitial;

            if (relativeScroll < 0) {
                element.style.transform = `translateY(0px)`;
                return;
            }

            const translateY = relativeScroll * speedFactor;
            element.style.transform = `translate3d(0, ${translateY}px, 0)`;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);

    }, [containerRef, elementRef, speedFactor]);
};