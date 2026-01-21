import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { designTokens } from '../../../theme';
import PromiseBG from "../../../assets/Images/Promise/PromiseBG.webp";
import { Headset, SolarPanel, ShieldCheck } from "lucide-react";

const SectionWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  minHeight: "480px",
  padding: "120px 0",
  backgroundImage: `url(${PromiseBG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 900px)": {
    padding: "80px 0",
    minHeight: "500px",
  },
  "@media (max-width: 600px)": {
    padding: "60px 0",
    minHeight: "auto",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
});

const Headline = styled(Typography)({
  fontFamily: "'Onest', sans-serif",
  fontSize: "48px",
  fontWeight: 600,
  lineHeight: "56px",
  letterSpacing: "-0.96px",
  color: "#EAEFFF",
  textAlign: "center",
  marginBottom: "16px",
  "@media (max-width: 900px)": {
    fontSize: "36px",
    lineHeight: "44px",
  },
  "@media (max-width: 600px)": {
    fontSize: "28px",
    lineHeight: "36px",
    marginBottom: "12px",
  },
});

const Subtitle = styled(Typography)({
  fontFamily: "'Onest', sans-serif",
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#E5E7EB",
  textAlign: "center",
  maxWidth: "600px",
  margin: "0 auto 48px",
  "@media (max-width: 600px)": {
    fontSize: "14px",
    marginBottom: "32px",
  },
});

const PromiseCard = styled(Box)({
  backgroundColor: "transparent",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "16px",
  "@media (max-width: 600px)": {
    padding: "16px",
    gap: "12px",
  },
});

const IconWrapper = styled(Box)({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    width: "48px",
    height: "48px",
    color: "#FFF",
  },
  "@media (max-width: 600px)": {
    width: "56px",
    height: "56px",
    "& svg": {
      width: "32px",
      height: "32px",
    },
  },
});

const PromiseText = styled(Typography)({
  fontFamily: "'Onest', sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: 1.4,
  color: "#F9FAFB",
  "@media (max-width: 600px)": {
    fontSize: "16px",
  },
});

interface PromiseItemType {
  icon: React.ReactNode;
  text: string;
}

const promises: PromiseItemType[] = [
  {
    icon: <SolarPanel style={{ color: "#FFF" }} />,
    text: `Quality Components ➔ Reliable Daily Generation.`,
  },
  {
    icon: <ShieldCheck style={{ color: "#FFF" }} />,
    text: `Honest Workmanship ➔ Long-Lasting Performance.`,
  },
  {
    icon: <Headset style={{ color: "#FFF" }} />,
    text: `End-to-End Support ➔ Hassle-Free Experience.`,
  },
];

const OurPromise: React.FC = () => {
  return (
    <SectionWrapper id="our-promise" data-scroll-section>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          "@media (max-width: 600px)": { px: "16px" },
        }}
      >
        <Headline variant="h2">Our Promise</Headline>
        <Subtitle>
          We build systems you can trust — and relationships you can rely on.
        </Subtitle>

        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
          {promises.map((promise, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={index}>
              <PromiseCard>
                <IconWrapper>{promise.icon}</IconWrapper>
                <PromiseText>{promise.text}</PromiseText>
              </PromiseCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default OurPromise;
