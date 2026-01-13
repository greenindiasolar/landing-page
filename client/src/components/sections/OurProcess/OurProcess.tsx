import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image1 from "../../../assets/Images/OurProcess/1.webp";
import Image2 from "../../../assets/Images/OurProcess/2.webp";
import Image3 from "../../../assets/Images/OurProcess/3.webp";
import Image4 from "../../../assets/Images/OurProcess/4.webp";
import Image5 from "../../../assets/Images/OurProcess/5.webp";
import Image6 from "../../../assets/Images/OurProcess/6.webp";

// Design tokens
const designTokens = {
    colors: {
        bg: {
            white: "#FFFFFF",
            light: "#F9FAFB",
            medium: "#E5E7EB",
        },
        border: {
            light: "#f9fafb",
            medium: "#e5e7eb",
            default: "#d9d9d9",
            dark: "#d1d5db",
            darker: "#4b5563",
        },
        brand: {
            primary: "#FF9010",
            primaryDark: "#E67E00",
        },
        text: {
            primary: "#111827",
            body: "#6B7280",
            white: "#FFFFFF",
        },
        overlay: {
            highlightGradient:
                "linear-gradient(to right, rgba(255, 144, 16, 0.3) 0.693%, rgba(255, 144, 16, 0) 3.635%)",
        },
    },
    radius: {
        sm: "8px",
        xl: "24px",
    },
    shadows: {
        card: "0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)",
        stackCard: "0px 10px 40px -10px rgba(0, 0, 0, 0.2)",
    },
};

// Stacking card offset for peeking effect (in pixels)
const CARD_STACK_OFFSET = 20;
// Height of the sticky header
const STICKY_HEADER_HEIGHT = 180;

const SectionWrapper = styled(Box)({
    backgroundColor: designTokens.colors.bg.white,
    padding: "30px 0 30px 0",

    overflow: "visible",
    "@media (max-width: 900px)": {
        padding: "20px 0 0 0 ",
        borderBottom: "1px solid #E5E7EB",
    },
});

// Sticky Header Container
const StickyHeader = styled(Box)({
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: designTokens.colors.bg.white,
    paddingTop: "40px",
    paddingBottom: "40px",
    textAlign: "center",
    "@media (max-width: 900px)": {
        position: "relative",
        paddingTop: "20px",
        paddingBottom: "20px",
    },
});

const SectionTag = styled(Typography)({
    fontFamily: "'Inter', sans-serif",
    fontSize: "24px",
    fontWeight: 400,
    letterSpacing: "-0.48px",
    color: designTokens.colors.brand.primary,
    marginBottom: "16px",
    "@media (max-width: 600px)": {
        fontSize: "18px",
        letterSpacing: "-0.36px",
        marginBottom: "12px",
    },
});

const Headline = styled(Typography)({
    fontFamily: "'Inter', sans-serif",
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "56px",
    letterSpacing: "-0.96px",
    color: designTokens.colors.text.primary,
    marginBottom: "16px",
    textAlign: "center",
    "@media (max-width: 900px)": {
        fontSize: "36px",
        lineHeight: "44px",
    },
    "@media (max-width: 600px)": {
        fontSize: "28px",
        lineHeight: "36px",
    },
});

const Description = styled(Typography)({
    fontFamily: "'Inter', sans-serif",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "-2%",
    color: designTokens.colors.text.body,
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
    "@media (max-width: 600px)": {
        fontSize: "14px",
        lineHeight: "140%",
        padding: "0 8px",
    },
});

const ColoredText = styled("span")({
    color: designTokens.colors.brand.primary,
    fontWeight: 600,
});

const StepTitle = styled(Typography)({
    fontFamily: "'Inter', sans-serif",
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.64px",
    color: designTokens.colors.text.primary,
    marginBottom: "16px",
    "@media (max-width: 900px)": {
        fontSize: "24px",
    },
    "@media (max-width: 600px)": {
        fontSize: "20px",
        marginBottom: "12px",
    },
});

const StepSubtitle = styled(Typography)({
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    fontWeight: 500,
    color: designTokens.colors.brand.primary,
    marginBottom: "16px",
    "@media (max-width: 600px)": {
        fontSize: "14px",
        marginBottom: "12px",
    },
});

const StepDescription = styled(Typography)({
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.32px",
    color: designTokens.colors.text.body,
    marginBottom: "24px",
    "@media (max-width: 600px)": {
        fontSize: "14px",
        lineHeight: 1.4,
        marginBottom: "16px",
    },
});

// const HighlightText = styled(Typography)({
//   display: "inline-block",
//   background: designTokens.colors.overlay.highlightGradient,
//   borderLeft: `4px solid ${designTokens.colors.brand.primary}`,
//   padding: "4px 16px",
//   color: designTokens.colors.brand.primaryDark,
//   fontWeight: 400,
// });

const ImagePlaceholder = styled(Box)({
    width: "100%",
    height: "auto",
    borderRadius: designTokens.radius.xl,
    background: `linear-gradient(135deg, ${designTokens.colors.bg.light} 0%, ${designTokens.colors.bg.medium} 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "80px",
    boxShadow: designTokens.shadows.card,
    overflow: "hidden",
    maxHeight: "274px",
    "@media (max-width: 600px)": {
        maxHeight: "200px",
        borderRadius: "16px",
    },
});

const StackingContainer = styled(Box)({
    position: "relative",
    paddingTop: "60px",
    paddingBottom: "20px",
    "@media (max-width: 900px)": {
        paddingTop: "40px",
        paddingBottom: "0",
    },
    "@media (max-width: 600px)": {
        paddingTop: "24px",
    },
});

const TimelineNumber = styled(Box)<{ isVisible: boolean }>(({ isVisible }) => ({
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: designTokens.colors.brand.primaryDark,
    border: `3px solid ${designTokens.colors.brand.primary}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: 700,
    color: designTokens.colors.text.white,
    boxShadow: "0px 4px 16px rgba(255, 144, 16, 0.4)",
    zIndex: 10, // Highest - above timeline and content
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.5,
    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
    "@media (max-width: 900px)": {
        position: "static",
        transform: "none",
        marginBottom: "16px",
        width: "40px",
        height: "40px",
        fontSize: "18px",
    },
    "@media (max-width: 600px)": {
        width: "36px",
        height: "36px",
        fontSize: "16px",
        marginBottom: "12px",
    },
}));

// Sticky card wrapper for stacking effect - now accounts for sticky header
const StickyCard = styled(Box)<{ stackIndex: number; isLast?: boolean }>(
    ({ stackIndex, isLast }) => ({
        position: "sticky",
        top: `calc(${STICKY_HEADER_HEIGHT}px + ${stackIndex * CARD_STACK_OFFSET
            }px)`,
        zIndex: stackIndex + 1,
        // Last card: reduced padding, Others: full padding for scroll space
        paddingBottom: isLast ? "80px" : "50vh",
        transition: "transform 0.3s ease-out",
        "@media (max-width: 900px)": {
            position: "relative",
            top: "auto",
            marginBottom: "60px",
            paddingBottom: 0,
        },
        "@media (max-width: 600px)": {
            marginBottom: "20px",
            paddingBottom: 0,
        },
        "&::before": {
            content: '""',
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "3px",
            background: `linear-gradient(to bottom, ${designTokens.colors.brand.primary}, ${designTokens.colors.brand.primaryDark})`,
            transform: "translateX(-50%)",
            zIndex: 5, // Middle layer - above content (z:1), below number (z:10)
            pointerEvents: "none",
            "@media (max-width: 900px)": {
                display: "none",
            },
        },
    })
);

const CardContent = styled(Box)({
    position: "relative",
    background: designTokens.colors.bg.white,
    borderRadius: "24px",
    padding: "24px",
    // boxShadow: designTokens.shadows.stackCard,
    // Timeline line inside each card - appears above content, below number
    "&::before": {
        content: '""',
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: "3px",
        background: `linear-gradient(to bottom, ${designTokens.colors.brand.primary}, ${designTokens.colors.brand.primaryDark})`,
        transform: "translateX(-50%)",
        zIndex: 5, // Middle layer - above content (z:1), below number (z:10)
        pointerEvents: "none",
        "@media (max-width: 900px)": {
            display: "none",
        },
    },
    "@media (max-width: 600px)": {
        padding: "16px",
        borderRadius: "16px",
    },
});

interface ProcessStep {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    highlight: string;
    image: string;
}

const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "Connect With Us",
        subtitle: "Your Solar Journey Begins",
        description:
            "Start with a simple enquiry through our website or direct contact. A dedicated solar expert is assigned to guide you personally — ensuring clarity, trust, and smooth communication from day one.",
        highlight: "No call centers. No confusion. Only clear communication.",
        image: Image1,
    },
    {
        id: 2,
        title: " Personalized Consultation",
        subtitle: "Designed Around Your Needs",
        description:
            "We study your power usage, roof structure, and future goals. Our engineers then design a custom solar system tailored specifically for you — optimized for performance, savings, and long-term reliability.",
        highlight:
            "Every system is custom-built for performance, savings, and durability.",
        image: Image2,
    },
    {
        id: 3,
        title: "Financing Made Simple",
        subtitle: "Stress-Free Cost Planning",
        description:
            "We assist with loans, EMI options, and government subsidy documentation. From approvals to disbursement, we handle the paperwork so your transition to solar remains simple and transparent.",
        highlight:
            "From paperwork to disbursement, we make financing simple, fast, and transparent.",
        image: Image3,
    },
    {
        id: 4,
        title: "Professional Installation",
        subtitle: "Engineered for Safety & Quality",
        description:
            "Our certified technicians install your system using premium materials and proven methods. From secure mounting to clean wiring and testing, every detail is handled with precision and care.",
        highlight:
            'We don\'t "install panels." We deliver engineered power systems.',
        image: Image4,
    },
    {
        id: 5,
        title: "System Activation",
        subtitle: "Start Generating Your Power",
        description:
            "Once activated, your system begins producing electricity instantly. Watch your meter slow down, your bills reduce, and experience the satisfaction of generating clean energy at your own home.",
        highlight: "From this moment on, your home becomes an energy asset.",
        image: Image5,
    },
    {
        id: 6,
        title: "Lifetime Support",
        subtitle: "A Partner for Decades",
        description:
            "With up to 30 years panel warranty, ongoing support, and maintenance guidance, we stay connected long after installation — ensuring your system performs reliably year after year.",
        highlight:
            "You don't just get solar panels. You get a partner for decades.",
        image: Image6,
    },
];

const OurProcess: React.FC = () => {
    const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        stepRefs.current.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setVisibleSteps((prev) => new Set(prev).add(index));
                            }
                        });
                    },
                    {
                        threshold: 0.2,
                        rootMargin: "-10% 0px -10% 0px",
                    }
                );

                observer.observe(ref);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <SectionWrapper id="our-process" data-scroll-section>
            <Container maxWidth="lg">
                {/* Sticky Header */}
                <StickyHeader>
                    <SectionTag>Our Process</SectionTag>
                    <Headline>
                        A Seamless Journey to <ColoredText>Smart Solar Living</ColoredText>
                    </Headline>
                    <Description>
                        Switching to solar shouldn't feel complicated. We've engineered a
                        simple, transparent process.
                    </Description>
                </StickyHeader>

                {/* Stacking Cards - Timeline line is now in ::before pseudo-element */}
                <StackingContainer>
                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        const isVisible = visibleSteps.has(index);
                        const isLast = index === processSteps.length - 1;

                        return (
                            <StickyCard
                                key={step.id}
                                stackIndex={index}
                                isLast={isLast}
                                ref={(el: HTMLDivElement | null) => {
                                    stepRefs.current[index] = el;
                                }}
                            >
                                <CardContent>
                                    {/* Timeline Number */}
                                    <TimelineNumber
                                        isVisible={isVisible}
                                        sx={{
                                            top: "50%",
                                            transform: "translate(-50%, -50%)",
                                            "@media (max-width: 900px)": {
                                                position: "static",
                                                transform: "none",
                                                margin: "0 auto 20px",
                                            },
                                        }}
                                    >
                                        {step.id}
                                    </TimelineNumber>

                                    {/* Content and Image Container */}
                                    <Box
                                        sx={{
                                            position: "relative",
                                            zIndex: 1,
                                            display: "grid",
                                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                                            gap: { xs: 3, md: 6 },
                                            alignItems: "center",
                                        }}
                                    >
                                        {/* Content Side */}
                                        <Box
                                            sx={{
                                                gridColumn: { xs: "1", md: isEven ? "1" : "2" },
                                                gridRow: { xs: "auto", md: 1 },
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible
                                                    ? "translateY(0)"
                                                    : "translateY(30px)",
                                                transition:
                                                    "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                                transitionDelay: "0.1s",
                                                textAlign: { xs: "center", md: "left" },
                                                padding: { xs: "16px", md: "24px" },
                                                backgroundColor: designTokens.colors.bg.white,
                                                border: `1px solid ${designTokens.colors.border.light}`,
                                                borderRadius: "24px",
                                            }}
                                        >
                                            <StepTitle>{step.title}</StepTitle>
                                            <StepSubtitle>{step.subtitle}</StepSubtitle>
                                            <StepDescription>{step.description}</StepDescription>
                                            {/* <Box>
                        <HighlightText>{step.highlight}</HighlightText>
                      </Box> */}
                                        </Box>

                                        {/* Image Side */}
                                        <Box
                                            sx={{
                                                gridColumn: { xs: "1", md: isEven ? "2" : "1" },
                                                gridRow: { xs: "auto", md: 1 },
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? "scale(1)" : "scale(0.95)",
                                                transition:
                                                    "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                                transitionDelay: "0.2s",
                                            }}
                                        >
                                            <ImagePlaceholder>
                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                        borderRadius: designTokens.radius.xl,
                                                    }}
                                                />
                                            </ImagePlaceholder>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </StickyCard>
                        );
                    })}
                </StackingContainer>
            </Container>
        </SectionWrapper>
    );
};

export default OurProcess;
