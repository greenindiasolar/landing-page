import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { designTokens } from '../../../theme';
import PromiseBG from '../../../assets/Images/Promise/PromiseBG.webp';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SectionWrapper = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '480px',
    padding: '120px 0',
    backgroundImage: `url(${PromiseBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 900px)': {
        padding: '80px 0',
        minHeight: '500px',
    },
    '@media (max-width: 600px)': {
        padding: '60px 0',
        minHeight: '400px',
    },
});

const Headline = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '48px',
    fontWeight: 600,
    lineHeight: '56px',
    letterSpacing: '-0.96px',
    color: '#EAEFFF',
    textAlign: 'center',
    marginBottom: '48px',
    '@media (max-width: 900px)': {
        fontSize: '36px',
        lineHeight: '44px',
        marginBottom: '36px',
    },
    '@media (max-width: 600px)': {
        fontSize: '28px',
        lineHeight: '36px',
        marginBottom: '24px',
    },
});

const PromiseBox = styled(Box)({
    backgroundColor: designTokens.colors.bg.white,
    borderRadius: designTokens.radius.xl,
    padding: '48px 56px',
    boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.15)',
    maxWidth: '900px',
    height: "250px",
    margin: '0 auto',
    '@media (max-width: 900px)': {
        padding: '36px 40px',
    },
    '@media (max-width: 600px)': {
        padding: '24px 20px',
    },
});

const PromiseList = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
});

const PromiseItem = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
});

const PromiseIcon = styled(Box)({
    minWidth: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
        fontSize: '24px',
        color: designTokens.colors.brand.primary,
    },
});

const PromiseText = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: "130%",
    letterSpacing: "-2%",
    color: designTokens.colors.text.tertiary,
    '@media (max-width: 600px)': {
        fontSize: '16px',
    },
});

interface PromiseItemType {
    text: string;
}

const promises: PromiseItemType[] = [
    { text: 'We don’t rush installations.' },
    { text: 'We don’t hide pricing.' },
    { text: 'We don’t disappear after handover.' },
    // { text: 'Post-Installation Support – We don\'t disappear after installation. Our team is here for the long haul.' },
    // { text: 'Honest Energy Projections – Realistic savings estimates based on actual data, not inflated promises.' },
];

const OurPromise: React.FC = () => {
    return (
        <SectionWrapper id="our-promise" data-scroll-section>
            <Container maxWidth="lg">
                <Headline variant="h2">Our Promise</Headline>

                <PromiseBox>
                    <PromiseList>
                        {promises.map((promise, index) => (
                            <PromiseItem key={index}>
                                <PromiseIcon>
                                    <ArrowForwardIcon />
                                </PromiseIcon>
                                <PromiseText>{promise.text}</PromiseText>
                            </PromiseItem>

                        ))}
                    </PromiseList>
                    <Box sx={{
                        textAlign: 'center',
                        borderTop: `1px solid ${designTokens.colors.border.medium}`,
                        paddingTop: '12px',
                        marginTop: '12px',
                    }}>
                        <Typography sx={{
                            fontFamily: "'Onest', sans-serif",
                            fontSize: '18px',
                            fontWeight: 400,
                            lineHeight: 1,
                            color: designTokens.colors.text.tertiary,
                            '@media (max-width: 600px)': {
                                fontSize: '16px',
                            },
                        }}>We build systems you can trust — and relationships you can rely on.</Typography>
                    </Box>
                </PromiseBox>
            </Container>
        </SectionWrapper>
    );
};

export default OurPromise;
