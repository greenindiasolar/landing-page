import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface LocomotiveScrollProviderProps {
    children: ReactNode;
}

const LocomotiveScrollProvider: React.FC<LocomotiveScrollProviderProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

    useEffect(() => {
        if (!scrollRef.current) return;

        // Initialize Locomotive Scroll
        locomotiveScrollRef.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            class: 'is-inview',
            smartphone: {
                smooth: true,
            },
            tablet: {
                smooth: true,
            },
        });

        // Update on window resize
        const handleResize = () => {
            if (locomotiveScrollRef.current) {
                locomotiveScrollRef.current.update();
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (locomotiveScrollRef.current) {
                locomotiveScrollRef.current.destroy();
            }
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            {children}
        </div>
    );
};

export default LocomotiveScrollProvider;
