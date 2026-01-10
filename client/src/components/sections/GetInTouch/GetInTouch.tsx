import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { designTokens } from '../../../theme';
import { Button, useContactForm } from '../../common';
import promiseBgImage from '../../../assets/Images/Promise/PromiseBG.webp';

const SectionWrapper = styled(Box)({
    position: 'relative',
    backgroundImage: `url(${promiseBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '40px 0',
    overflow: 'hidden',
    '@media (max-width: 900px)': {
        padding: '80px 0',
    },
    '@media (max-width: 600px)': {
        padding: '60px 0',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
});

const ContentWrapper = styled(Container)({
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
});

const Headline = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '48px',
    fontWeight: 600,
    lineHeight: '56px',
    letterSpacing: '-0.96px',
    color: designTokens.colors.text.white,
    marginBottom: '24px',
    '@media (max-width: 900px)': {
        fontSize: '36px',
        lineHeight: '44px',
    },
    '@media (max-width: 600px)': {
        fontSize: '28px',
        lineHeight: '36px',
        marginBottom: '16px',
    },
});

const Description = styled(Typography)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: designTokens.colors.text.white,
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px',
    '@media (max-width: 600px)': {
        fontSize: '16px',
        marginBottom: '32px',
    },
});

const GetInTouch: React.FC = () => {
    const { openModal } = useContactForm();

    return (
        <SectionWrapper id="get-in-touch" data-scroll-section>
            <ContentWrapper maxWidth="lg">
                <Headline>Still Have a Question?</Headline>
                <Description>
                    Our solar experts are here to help you every step of the way. Get in touch with us today for personalized guidance.
                </Description>
                <Button
                    variant="primary"
                    onClick={openModal}
                    sx={{
                        padding: '16px 48px',
                        fontSize: '18px',
                        '@media (max-width: 600px)': {
                            padding: '14px 32px',
                            fontSize: '16px',
                        },
                    }}
                >
                    Get in Touch
                </Button>
            </ContentWrapper>
        </SectionWrapper>
    );
};

export default GetInTouch;
