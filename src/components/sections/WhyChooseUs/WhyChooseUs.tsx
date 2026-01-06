import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import CountUp from 'react-countup';
import { designTokens } from '../../../theme';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const SectionWrapper = styled(Box)(({
    backgroundColor: designTokens.colors.bg.lightest,
    padding: ' 0',
    '@media (max-width: 900px)': {
        padding: '60px 0',
    },
}));

const ContentContainer = styled(Container)({
    maxWidth: '1280px !important',
});



const Headline = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '48px',
    fontWeight: 600,
    lineHeight: '56px',
    letterSpacing: '-0.96px',
    color: designTokens.colors.text.primary,
    marginBottom: '16px',
    textAlign: 'center',
    '@media (max-width: 900px)': {
        fontSize: '36px',
        lineHeight: '44px',
    },
    '@media (max-width: 600px)': {
        fontSize: '28px',
        lineHeight: '36px',
    },
});

const Description = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '-0.36px',
    color: designTokens.colors.text.body,
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 64px',
    '@media (max-width: 600px)': {
        fontSize: '16px',
        marginBottom: '48px',
    },
});

const StatsGrid = styled(Grid)({
    marginBottom: '80px',
    '@media (max-width: 900px)': {
        marginBottom: '60px',
    },
});

const StatCard = styled(Box)({
    background: designTokens.colors.bg.white,
    borderRadius: designTokens.radius.xl,
    padding: '40px 32px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: `1px solid ${designTokens.colors.border.light}`,
    boxShadow: designTokens.shadows.card,
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0px 12px 24px 0px rgba(255, 144, 16, 0.15)',
        borderColor: designTokens.colors.brand.primary,
    },
});

const StatNumber = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '56px',
    fontWeight: 700,
    lineHeight: 1.2,
    color: designTokens.colors.text.primary,
    marginBottom: '16px',
    '@media (max-width: 600px)': {
        fontSize: '42px',
    },
});

const StatLabel = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1,
    textAlign: "left",
    color: designTokens.colors.text.body,
    marginTop: 'auto',
    '@media (max-width: 600px)': {
        fontSize: '14px',
    },
});

const StatSuffix = styled('span')(({
    fontSize: '32px',
    fontWeight: 600,
    color: designTokens.colors.text.primary,
    '@media (max-width: 600px)': {
        fontSize: '24px',
    },
}));


const StatTitle = styled(Typography)(({
    fontFamily: "'Onest', sans-serif",
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.4,
    color: designTokens.colors.text.primary,
    marginBottom: '12px',
    textAlign: 'center',
}));





const HighlightedText = styled('span')({
    display: 'inline-block',
    // background: designTokens.colors.overlay.highlightGradient,
    // borderLeft: `4px solid ${designTokens.colors.brand.primary}`,
    padding: '4px 16px',
    color: designTokens.colors.brand.primary,
    fontWeight: 600,
});

interface Stat {
    end: number;
    suffix?: string;
    title: string;
    label: string;
}



const stats: Stat[] = [
    { end: 25, suffix: 'yrs', title: 'warranty provided', label: 'Long-term performance assurance for complete peace of mind.' },
    { end: 100, suffix: '+', title: 'Installations Done So Far', label: 'Trusted by homeowners with proven on-ground execution.' },
    { end: 10, suffix: '+', title: 'Cities Presence', label: 'Serving customers across multiple cities with local support teams.' },
    { end: 90, suffix: '%', title: 'Customers Experience Zero Bill', label: 'Significantly reduced electricity bills after switching to solar.' },
];



const WhyChooseUs: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    return (
        <SectionWrapper  style={{backgroundColor: '#FFF'}} ref={sectionRef} id="why-choose-us">
            <ContentContainer>
                <Box sx={{ textAlign: 'center', marginBottom: '48px' }}>
                    {/* <SectionTag sx={{ justifyContent: 'center' }}>
                        <TagDivider />
                        <TagText>Why Choose Us</TagText>
                    </SectionTag> */}

                    <Headline variant="h2">
                        Why <HighlightedText>Customers Trust</HighlightedText> Green India Solar Energy
                    </Headline>

                    <Description>
                        Built on reliability, transparency, and decades of support
                    </Description>
                </Box>

                {/* Statistics Grid */}
                <StatsGrid container spacing={3}>
                    {stats.map((stat, index) => (
                        <Grid size={{ xs: 6, md: 3 }} key={index}>
                            <StatCard>
                                <StatNumber>
                                    {isVisible ? (
                                        <>
                                            <CountUp
                                                start={0}
                                                end={stat.end}
                                                duration={2.5}
                                                separator=","
                                            />
                                            {stat.suffix && <StatSuffix>{stat.suffix}</StatSuffix>}
                                        </>
                                    ) : (
                                        <>0{stat.suffix}</>
                                    )}
                                </StatNumber>
                                {/* <StatDivider /> */}
                                <StatTitle>{stat.title}</StatTitle>
                                <StatLabel>{stat.label}</StatLabel>
                            </StatCard>
                        </Grid>
                    ))}
                </StatsGrid>

                {/* Features Grid */}
                {/* <FeaturesGrid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <FeatureCard>
                                <FeatureIcon>{feature.icon}</FeatureIcon>
                                <FeatureTitle>{feature.title}</FeatureTitle>
                                <FeatureDescription>{feature.description}</FeatureDescription>
                            </FeatureCard>
                        </Grid>
                    ))}
                </FeaturesGrid> */}
            </ContentContainer>
        </SectionWrapper>
    );
};

export default WhyChooseUs;
