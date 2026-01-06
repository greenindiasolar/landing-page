import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '../../common';
import { type HeroSlide as HeroSlideType } from '../../../data/heroSlides';
import { designTokens } from '../../../theme';
import {
    CheckCircle,
    ShieldCheck,
    ThumbsUp,
    BadgeCheck,
    Clock,
    CreditCard,
    Headset
} from 'lucide-react';

interface HeroSlideProps {
    slide: HeroSlideType;
    isActive: boolean;
}

const SlideWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: isActive ? 1 : 0,
    visibility: isActive ? 'visible' : 'hidden',
    zIndex: isActive ? 2 : 1,
    transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in-out',
}));

const BackgroundImage = styled(Box)<{ bgImage: string }>(({ bgImage }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 62%, rgba(0, 0, 0, 1) 100%)',
        // background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.85) 100%)',
    },
}));

const ContentWrapper = styled(Box)({
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: '120px',
});

const ContentContainer = styled(Container)({
    maxWidth: '1280px !important',
});

const SectionTag = styled(Box)({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
});

// const TagDivider = styled(Box)({
//     width: '4px',
//     height: '24px',
//     backgroundColor: designTokens.colors.brand.primary,
//     borderRadius: '2px',
// });

const TagText = styled(Typography)({
    fontFamily: "'Inter', sans-serif",
    fontSize: '18px',
    fontWeight: 400,
    color: '#E5E7EB',
    letterSpacing: '-0.48px',
});

const Headline = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '56px',
    fontWeight: 600,
    lineHeight: '64px',
    letterSpacing: '-1.12px',
    color: designTokens.colors.text.white,
    maxWidth: '750px',
    marginBottom: '16px',
    '@media (max-width: 900px)': {
        fontSize: '40px',
        lineHeight: '48px',
        maxWidth: '500px',
    },
    '@media (max-width: 600px)': {
        fontSize: '32px',
        lineHeight: '40px',
    },
});

const Subheadline = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.32px',
    color: designTokens.colors.bg.medium,
    maxWidth: '650px',
    marginBottom: '32px',
});
const BottomText = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.32px',
    color: designTokens.colors.bg.medium,
    maxWidth: '450px',
    marginBottom: '-60px',
    marginTop: "30px"

});

const ButtonGroup = styled(Box)({
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
});

const BulletPointsContainer = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px 24px',
    marginTop: '32px',
    marginBottom: '-60px',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '12px',
    },
});

const BulletPointItem = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: "#D1D5DB",
    fontFamily: "'Inter', sans-serif",
    fontSize: '16px',
    fontWeight: 400,
    '& svg': {
        width: '20px',
        height: '20px',
        flexShrink: 0,
    },
});

// Icon mapping for bullet points
const iconMap: Record<string, React.ReactNode> = {
    'check-circle': <CheckCircle />,
    'shield-check': <ShieldCheck />,
    'thumbs-up': <ThumbsUp />,
    'badge-check': <BadgeCheck />,
    'clock': <Clock />,
    'credit-card': <CreditCard />,
    'headset': <Headset />,
};

const HeroSlide: React.FC<HeroSlideProps> = ({ slide, isActive }) => {
    return (
        <SlideWrapper isActive={isActive}>
            <BackgroundImage bgImage={slide.backgroundImage} />
            <ContentWrapper>
                <ContentContainer maxWidth={false}>
                    <SectionTag>
                        <Box sx={{
                            width: "14px",
                            height: "14px",
                            backgroundColor: "#E5E7EB",
                            borderRadius: "4px",
                            transform: 'rotate(45deg)',
                        }}>

                        </Box>
                        <TagText>{slide.tag}</TagText>
                    </SectionTag>

                    <Headline variant="h1">{slide.headline}</Headline>

                    <Subheadline>{slide.subheadline}</Subheadline>

                    <ButtonGroup>
                        <Button variant="primary" href={slide.primaryButton.link}>
                            {slide.primaryButton.text}
                        </Button>
                        <Button variant="outlineLight" href={slide.secondaryButton.link}>
                            {slide.secondaryButton.text}
                        </Button>
                    </ButtonGroup>

                    {slide.bulletPoints ? (
                        <BulletPointsContainer>
                            {slide.bulletPoints.map((point, index) => (
                                <BulletPointItem key={index}>
                                    {iconMap[point.icon]}
                                    <span>{point.text}</span>
                                </BulletPointItem>
                            ))}
                        </BulletPointsContainer>
                    ) : (
                        <BottomText>{slide.bottomText}</BottomText>
                    )}
                </ContentContainer>
            </ContentWrapper>
        </SlideWrapper>
    );
};

export default HeroSlide;
