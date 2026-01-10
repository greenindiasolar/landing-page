import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { designTokens } from '../../../theme';
import AboutUsImage from '../../../assets/Images/AboutUs/AboutUs.webp';

const SectionWrapper = styled(Box)({
    backgroundColor: designTokens.colors.bg.white,
    padding: '120px 0',
    '@media (max-width: 900px)': {
        padding: '60px 0',
    },
});

const ContentContainer = styled(Container)({
    // maxWidth: '1280px !important',
});

const SectionTag = styled(Box)({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
});

// const TagDivider = styled(Box)({
//     width: '4px',
//     height: '20px',
//     backgroundColor: designTokens.colors.brand.primary,
//     borderRadius: '2px',
// });

const TagText = styled(Typography)({
    fontFamily: "'Inter', sans-serif",
    fontSize: '24px',
    fontWeight: 400,
    color: designTokens.colors.brand.primary,
    letterSpacing: '-0.48px',
});

const Headline = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '48px',
    fontWeight: 600,
    lineHeight: '56px',
    letterSpacing: '-0.96px',
    color: designTokens.colors.text.primary,
    marginBottom: '20px',
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
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '-0.4px',
    color: designTokens.colors.text.body,
    marginBottom: '32px',
    '@media (max-width: 600px)': {
        fontSize: '16px',
        marginBottom: '24px',
    },
});

const ColoredText = styled('span')({
    color: designTokens.colors.brand.primary,
    fontWeight: 600,
});

const HighlightText = styled('span')({
    display: 'inline-block',
    background: designTokens.colors.overlay.highlightGradient,
    borderLeft: `4px solid ${designTokens.colors.brand.primary}`,
    padding: '4px 16px',
    color: designTokens.colors.brand.primaryDark,
    fontWeight: 400,
});

const FundamentalsSection = styled(Box)({
    marginBottom: '32px',
});

const FundamentalsHeading = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: 1.4,
    color: designTokens.colors.text.primary,
    marginBottom: '20px',
});

const FundamentalsList = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
});

const FundamentalItem = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
});

const FundamentalBullet = styled(Box)({
    width: '16px',
    height: '16px',
    minWidth: '16px',
    borderRadius: '50%',
    backgroundColor: designTokens.colors.brand.primary,
    marginTop: '5px',
});

const FundamentalText = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.5,
    color: designTokens.colors.text.primary,
});

const ImageWrapper = styled(Box)({
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    '@media (max-width: 900px)': {
        marginBottom: '24px',
    },
});

const ImageContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    maxWidth: '576px',
    maxHeight: "700px"
});

const MainImage = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    objectFit: 'cover',
    display: 'block',
});



const AboutUs: React.FC = () => {
    return (
        <SectionWrapper id="about" data-scroll-section>
            <ContentContainer >
                <Grid container spacing={{ xs: 3, md: 8 }} alignItems="flex-start">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ImageWrapper data-scroll data-scroll-speed="1.2">
                            <ImageContainer>
                                <MainImage src={AboutUsImage} alt="Solar panel installation" />
                            </ImageContainer>
                        </ImageWrapper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }} data-scroll data-scroll-speed="0.8">
                        <SectionTag>
                            {/* <TagDivider /> */}
                            <TagText>About Us</TagText>
                        </SectionTag>

                        <Headline variant="h2">
                            India's <ColoredText>Fastest-Growing </ColoredText><br />Solar Energy Network
                        </Headline>

                        <Description>
                            Green India Solar Energy is more than a solar company. We're part of a growing movement helping Indian homes and businesses take control of their energy future.
                            <br />
                            <br />
                            With hundreds of successful installations, we make the move from grid dependence to energy independence simple, affordable, and hassle-free.


                        </Description>

                        <FundamentalsSection>
                            <FundamentalsHeading>
                                Every project we deliver is built on three fundamentals:
                            </FundamentalsHeading>
                            <FundamentalsList>
                                <FundamentalItem>
                                    <FundamentalBullet />
                                    <FundamentalText>Proven, high-quality components</FundamentalText>
                                </FundamentalItem>
                                <FundamentalItem>
                                    <FundamentalBullet />
                                    <FundamentalText>Professional planning and execution</FundamentalText>
                                </FundamentalItem>
                                <FundamentalItem>
                                    <FundamentalBullet />
                                    <FundamentalText>Honest, customer-first service</FundamentalText>
                                </FundamentalItem>
                            </FundamentalsList>
                        </FundamentalsSection>
                        <Description>The result is a solar system that performs reliably year after year — not just on day one.</Description>
                        <Box sx={{ marginBottom: '56px' }}>
                            <HighlightText>We build systems you can trust — and relationships you can rely on.</HighlightText>
                        </Box>

                        {/* <StatsContainer>
                            {stats.map((stat, index) => (
                                <StatItem key={index}>
                                    <StatValue>{stat.value}</StatValue>
                                    <StatLabel>{stat.label}</StatLabel>
                                    <StatDescription>{stat.description}</StatDescription>
                                </StatItem>
                            ))}
                        </StatsContainer> */}
                    </Grid>
                </Grid>
            </ContentContainer>
        </SectionWrapper>
    );
};

export default AboutUs;
