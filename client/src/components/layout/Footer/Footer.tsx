import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import Logo from "../../../assets/Images/Logo/Green-solar-logo.png";

// Color palette from theme
const colors = {
  brand: {
    primary: "#ff9010",
    primaryDark: "#e8830f",
  },
  text: {
    primary: "#111827",
    secondary: "#374151",
    muted: "#9ca3af",
    light: "#757575",
  },
  bg: {
    lightest: "#f9fafb",
    light: "#f3f4f6",
  },
};

const FooterWrapper = styled(Box)({
  backgroundColor: colors.bg.lightest,
  padding: "80px 0 0 0",
  "@media (max-width: 900px)": {
    padding: "60px 0 0 0",
  },
});

const FooterTop = styled(Box)({
  paddingBottom: "48px",
});

const FooterBottom = styled(Box)({
  padding: "32px 0",
  borderTop: `1px solid #e5e7eb`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    gap: "24px",
    textAlign: "center",
  },
});

const SectionTitle = styled(Typography)({
  fontFamily: "'Onest', sans-serif",
  fontSize: "16px",
  fontWeight: 600,
  color: colors.text.primary,
  marginBottom: "20px",
  letterSpacing: "-0.32px",
  "@media (max-width: 600px)": {
    fontSize: "14px",
    marginBottom: "16px",
  },
});

const FooterLink = styled(Link)({
  fontFamily: "'Onest', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  color: colors.text.secondary,
  textDecoration: "none",
  display: "block",
  marginBottom: "12px",
  transition: "color 0.3s ease",
  cursor: "pointer",
  letterSpacing: "-0.32px",
  "&:hover": {
    color: colors.brand.primary,
  },
  "@media (max-width: 600px)": {
    fontSize: "14px",
    marginBottom: "10px",
  },
});

const ContactItem = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "16px",
  "& .MuiTypography-root": {
    fontFamily: "'Onest', sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: colors.text.secondary,
    lineHeight: 1.5,
    letterSpacing: "-0.32px",
    wordBreak: "break-word",
  },
  "& svg": {
    fontSize: "20px",
    marginTop: "2px",
    color: colors.brand.primary,
    flexShrink: 0,
  },
  "@media (max-width: 600px)": {
    gap: "8px",
    marginBottom: "12px",
    "& .MuiTypography-root": {
      fontSize: "13px",
    },
    "& svg": {
      fontSize: "18px",
    },
  },
});

const LogoSection = styled(Box)({
  marginBottom: "24px",
});

const CompanyDescription = styled(Typography)({
  fontFamily: "'Onest', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.5,
  color: colors.text.secondary,
  maxWidth: "400px",
  marginBottom: "24px",
  letterSpacing: "-0.32px",
  "@media (max-width: 600px)": {
    fontSize: "14px",
    marginBottom: "16px",
  },
});

const NewsletterSection = styled(Box)({
  marginTop: "32px",
  "@media (max-width: 600px)": {
    marginTop: "20px",
  },
});

const EmailInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    fontFamily: "'Onest', sans-serif",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    fontSize: "16px",
    "& fieldset": {
      borderColor: "#d9d9d9",
    },
    "&:hover fieldset": {
      borderColor: "#4b5563",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4b5563",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "12px 16px",
    fontFamily: "'Onest', sans-serif",
    "&::placeholder": {
      color: "#b3b3b3",
      opacity: 1,
    },
  },
});

const SubscribeButton = styled(Button)({
  backgroundColor: colors.brand.primary,
  color: "#f9fafb",
  fontFamily: "'Onest', sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  padding: "12px 32px",
  borderRadius: "8px",
  textTransform: "none",
  letterSpacing: "-0.32px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: colors.brand.primaryDark,
    boxShadow: "none",
  },
  "@media (max-width: 600px)": {
    fontSize: "14px",
    padding: "10px 24px",
    width: "100%",
  },
});

const SocialLinks = styled(Box)({
  display: "flex",
  gap: "16px",
  alignItems: "center",
});

const SocialIcon = styled(Box)({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: colors.bg.light,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "& svg": {
    fontSize: "20px",
    color: colors.text.light,
  },
  "&:hover": {
    backgroundColor: colors.brand.primary,
    "& svg": {
      color: "#ffffff",
    },
  },
  "@media (max-width: 600px)": {
    width: "36px",
    height: "36px",
    "& svg": {
      fontSize: "18px",
    },
  },
});

const CopyrightText = styled(Typography)({
  fontFamily: "'Onest', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  color: colors.text.muted,
  letterSpacing: "-0.32px",
  "@media (max-width: 600px)": {
    fontSize: "13px",
    textAlign: "center",
  },
});

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribe:", email);
    // Add subscription logic here
  };

  return (
    <FooterWrapper style={{ backgroundColor: "#FFF" }} data-scroll-section>
      <Container maxWidth="lg">
        <FooterTop>
          <Grid container spacing={6}>
            {/* Quick Links */}
            <Grid size={{ xs: 6, sm: 6, md: 2 }}>
              <SectionTitle>Quick Links</SectionTitle>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#calculator">Solar Calculator</FooterLink>
              <FooterLink href="#process">Our Process</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 6, sm: 6, md: 5 }}>
              <SectionTitle>Contact Us</SectionTitle>
              <ContactItem>
                <EmailIcon />
                <Link
                  href="mailto:teamgreenindiasolar@gmail.com"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: colors.brand.primary },
                  }}
                >
                  <Typography>teamgreenindiasolar@gmail.com</Typography>
                </Link>
              </ContactItem>
              <ContactItem>
                <PhoneIcon />
                <Link
                  href="tel:+919052166626"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: colors.brand.primary },
                  }}
                >
                  <Typography>+91 90521 66626</Typography>
                </Link>
              </ContactItem>
              <ContactItem>
                <LocationOnIcon />
                <Typography>Andhra Pradesh, India</Typography>
              </ContactItem>
            </Grid>

            {/* Company Info with Newsletter */}
            <Grid size={{ xs: 12, md: 5 }}>
              <LogoSection>
                <img
                  style={{ height: "48px", marginBottom: "16px" }}
                  src={Logo}
                  alt=""
                />
              </LogoSection>
              <CompanyDescription>
                Built on reliability, transparency, and long-term customer
                relationships — not just installations.
              </CompanyDescription>
              <NewsletterSection>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <EmailInput
                    fullWidth
                    placeholder="Email address"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <SubscribeButton
                    variant="contained"
                    onClick={handleSubscribe}
                    sx={{ minWidth: "140px" }}
                  >
                    Subscribe
                  </SubscribeButton>
                </Box>
              </NewsletterSection>
            </Grid>
          </Grid>
        </FooterTop>

        {/* Copyright & Social */}
        <FooterBottom>
          <SocialLinks>
            <Link
              href="https://www.facebook.com/people/Green-India-Solar-Energy/61584117335121/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon>
                <FacebookIcon />
              </SocialIcon>
            </Link>
            <Link
              href="https://www.instagram.com/greenindiasolarenergy?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon>
                <InstagramIcon />
              </SocialIcon>
            </Link>
            <Link
              href="https://share.google/lb4zuPXnWmrrWxjEK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon>
                <GoogleIcon />
              </SocialIcon>
            </Link>
          </SocialLinks>
          <CopyrightText>
            © 2025 Green India solar energy. All rights reserved.
          </CopyrightText>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
