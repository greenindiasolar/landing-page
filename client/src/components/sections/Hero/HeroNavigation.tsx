import React from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { designTokens } from '../../../theme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface HeroNavigationProps {
    onPrev: () => void;
    onNext: () => void;
    currentSlide: number;
    totalSlides: number;
}

const NavigationContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    '@media (max-width: 600px)': {
        gap: '12px',
    },
});

const NavButton = styled(IconButton)({
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: `2px solid rgba(255, 255, 255, 0.6)`,
    color: designTokens.colors.text.white,
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: designTokens.colors.text.white,
    },
    '& svg': {
        fontSize: '28px',
    },
    '@media (max-width: 600px)': {
        width: '40px',
        height: '40px',
        '& svg': {
            fontSize: '20px',
        },
    },
});

const HeroNavigation: React.FC<HeroNavigationProps> = ({
    onPrev,
    onNext,
}) => {
    return (
        <NavigationContainer>
            <NavButton onClick={onPrev} aria-label="Previous slide">
                <ArrowBackIcon />
            </NavButton>

            <NavButton onClick={onNext} aria-label="Next slide">
                <ArrowForwardIcon />
            </NavButton>
        </NavigationContainer>
    );
};

export default HeroNavigation;
