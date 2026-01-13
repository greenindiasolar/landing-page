import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const designTokens = {
    colors: {
        brand: {
            primary: '#FF9010',
        },
        text: {
            primary: '#1A1A1A',
            body: '#666666',
        },
        bg: {
            white: '#F9F9F9',
            lightest: '#F9F9F9',
        },
        border: {
            light: '#E5E5E5',
        },
    },
    radius: {
        lg: '12px',
    },
};

const SectionWrapper = styled(Box)({
    backgroundColor: designTokens.colors.bg.lightest,
    padding: '120px 0',
    '@media (max-width: 900px)': {
        padding: '60px 0',
    },
    '@media (max-width: 600px)': {
        padding: '40px 0',
    },
});

const Headline = styled(Typography)({
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '1.2',
    color: designTokens.colors.text.primary,
    marginBottom: '16px',
    textAlign: 'center',
    '@media (max-width: 900px)': {
        fontSize: '36px',
    },
    '@media (max-width: 600px)': {
        fontSize: '28px',
    },
});

const Description = styled(Typography)({
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: designTokens.colors.text.body,
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 80px',
    '@media (max-width: 600px)': {
        fontSize: '16px',
        marginBottom: '48px',
    },
});

const StyledAccordion = styled(Accordion)({
    backgroundColor: '#FFF',
    border: 'none',
    borderBottom: `1px solid ${designTokens.colors.border.light}`,
    borderRadius: '0 !important',
    marginBottom: '0',
    boxShadow: 'none',
    '&:before': {
        display: 'none',
    },
    '&:first-of-type': {
        borderTop: `1px solid ${designTokens.colors.border.light}`,
    },
    '&.Mui-expanded': {
        margin: '0',
    },
});

const StyledAccordionSummary = styled(AccordionSummary)({
    padding: '32px 0',
    minHeight: 'auto !important',
    '&.Mui-expanded': {
        minHeight: 'auto !important',
    },
    '& .MuiAccordionSummary-content': {
        margin: '0 !important',
        '&.Mui-expanded': {
            margin: '0 !important',
        },
    },
    '@media (max-width: 600px)': {
        padding: '20px 0',
    },
});

const QuestionText = styled(Typography)({
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: 1.5,
    color: designTokens.colors.text.primary,
    '@media (max-width: 600px)': {
        fontSize: '18px',
    },
});

const StyledAccordionDetails = styled(AccordionDetails)({
    padding: '0 0 32px 0',
    '@media (max-width: 600px)': {
        padding: '0 0 20px 0',
    },
});

const AnswerText = styled(Typography)({
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.7,
    color: designTokens.colors.text.body,
    '@media (max-width: 600px)': {
        fontSize: '14px',
        lineHeight: 1.6,
    },
});

const IconWrapper = styled(Box)({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: `2px solid ${designTokens.colors.border.light}`,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    flexShrink: 0,
    '& svg': {
        color: designTokens.colors.text.body,
        fontSize: '20px',
    },
    '@media (max-width: 600px)': {
        width: '32px',
        height: '32px',
        '& svg': {
            fontSize: '16px',
        },
    },
});

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: 'What happens if my solar panels generate more electricity than I use?',
        answer: 'Any extra electricity is sent to the power grid through net metering. You receive credits for this power, which are adjusted in your future electricity bills, helping you save even more over time.',
    },
    {
        id: 2,
        question: 'How often do solar panels need cleaning?',
        answer: 'Solar panels require minimal maintenance. We recommend cleaning panels 2-4 times per year (more frequently in dusty areas) to maintain optimal efficiency. Rain naturally cleans panels in most cases.',
    },
    {
        id: 3,
        question: 'How much time it takes for the process?',
        answer: 'Typically, the physical installation takes 2-3 days for residential systems. However, the complete process from consultation to grid connection can take 2-4 weeks, including design approval, subsidy documentation, and electrical inspections.',
    },
    {
        id: 4,
        question: 'Do solar panels work during cloudy days or power cuts?',
        answer: 'Yes, solar panels work even on cloudy days, though at reduced efficiency (typically 10-25% of peak output). Grid-connected systems ensure uninterrupted power supply as you draw from the grid when solar production is low.',
    },
    {
        id: 5,
        question: 'Can I run AC, fridge, and washing machine on solar?',
        answer: 'Yes, you can run all major appliances on solar power. The system size needs to be designed based on your load requirements. A typical 3-5 kW system can comfortably power AC, refrigerator, washing machine, and other household appliances.',
    },
    {
        id: 6,
        question: 'Does my electricity become "0" if i install solar panels?',
        answer: 'While your electricity bill can be reduced by 70-90%, it typically doesn\'t become zero. You\'ll still have minimal grid charges, meter rent, and fixed charges. However, your energy consumption charges will be drastically reduced or eliminated.',
    },
];

const FAQ: React.FC = () => {
    const [expanded, setExpanded] = useState<number | false>(1);

    const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <SectionWrapper style={{ backgroundColor: '#FFF' }} id="faq" data-scroll-section>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ marginBottom: { xs: '32px', sm: '48px', md: '64px' } }}>
                    <Headline>
                        Frequently asked questions
                    </Headline>
                    <Description>
                        Everything you need to know about green India
                    </Description>
                </Box>

                {/* FAQ Accordion List */}
                <Box sx={{ maxWidth: '900px', margin: '0 auto' }}>
                    {faqData.map((faq) => (
                        <StyledAccordion
                            key={faq.id}
                            expanded={expanded === faq.id}
                            onChange={handleChange(faq.id)}
                        >
                            <StyledAccordionSummary
                                expandIcon={
                                    <IconWrapper>
                                        {expanded === faq.id ? <RemoveIcon /> : <AddIcon />}
                                    </IconWrapper>
                                }
                            >
                                <QuestionText>{faq.question}</QuestionText>
                            </StyledAccordionSummary>
                            <StyledAccordionDetails>
                                <AnswerText>{faq.answer}</AnswerText>
                            </StyledAccordionDetails>
                        </StyledAccordion>
                    ))}
                </Box>
            </Container>
        </SectionWrapper>
    );
};

export default FAQ;