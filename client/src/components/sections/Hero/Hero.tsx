import React, { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeroSlide from './HeroSlide';
import HeroNavigation from './HeroNavigation';
import { heroSlides } from '../../../data/heroSlides';
import { useInterval } from '../../../hooks/useInterval';

const SLIDE_INTERVAL = 5000; // 5 seconds auto-rotation

const HeroContainer = styled(Box)({
    position: 'relative',
    top: '10px',
    // width: '100%',
    height: '100vh',
    minHeight: '500px',
    overflow: 'hidden',
    backgroundColor: '#000',
    borderRadius: '8px',
    marginLeft: '12px',
    marginRight: '12px',
    '@media (max-width: 600px)': {
        top: '0px',
        marginLeft: '8px',
        marginRight: '8px',
        minHeight: '300px',
        maxHeight: '700px',
        borderRadius: '6px',
    },
});

const SlidesWrapper = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '100%',
});

const NavigationWrapper = styled(Box)({
    position: 'absolute',
    bottom: '48px',
    right: '48px',
    zIndex: 100,
    '@media (max-width: 768px)': {
        bottom: '24px',
        right: '24px',
    },
});

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalSlides = heroSlides.length;

    const goToNext = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const goToPrev = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    // Auto-rotation using custom hook
    useInterval(
        () => {
            goToNext();
        },
        isPaused ? null : SLIDE_INTERVAL
    );

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <HeroContainer
            data-scroll-section
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <SlidesWrapper>
                {heroSlides.map((slide, index) => (
                    <HeroSlide
                        key={slide.id}
                        slide={slide}
                        isActive={index === currentSlide}
                    />
                ))}
            </SlidesWrapper>

            <NavigationWrapper>
                <HeroNavigation
                    onPrev={goToPrev}
                    onNext={goToNext}
                    currentSlide={currentSlide}
                    totalSlides={totalSlides}
                />
            </NavigationWrapper>
        </HeroContainer>
    );
};

export default Hero;