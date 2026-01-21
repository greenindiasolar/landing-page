import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import gallery images
import gallary1 from "../../../assets/Images/Gallary/gallary1.jpeg";
import gallary2 from "../../../assets/Images/Gallary/gallary2.jpeg";
import gallary3 from "../../../assets/Images/Gallary/gallary3.jpeg";
import gallary4 from "../../../assets/Images/Gallary/gallary4.jpeg";
import gallary5 from "../../../assets/Images/Gallary/gallary5.jpeg";
import gallary6 from "../../../assets/Images/Gallary/gallary6.jpeg";
import gallary7 from "../../../assets/Images/Gallary/gallary7.jpeg";
import gallary8 from "../../../assets/Images/Gallary/gallary8.jpeg";
import gallary9 from "../../../assets/Images/Gallary/gallary9.jpeg";

const designTokens = {
  colors: {
    brand: {
      primary: "#FF9010",
    },
    text: {
      primary: "#1A1A1A",
      body: "#666666",
    },
    bg: {
      white: "#FFFFFF",
    },
  },
  radius: {
    lg: "12px",
  },
};

const SectionWrapper = styled(Box)({
  backgroundColor: designTokens.colors.bg.white,
  paddingTop: "120px",
  paddingBottom: "0",
  "@media (max-width: 900px)": {
    paddingTop: "60px",
    paddingBottom: "0",
  },
  "@media (max-width: 600px)": {
    paddingTop: "40px",
    paddingBottom: "0",
  },
});

const Headline = styled(Typography)({
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  fontSize: "48px",
  fontWeight: 700,
  lineHeight: "1.2",
  color: designTokens.colors.text.primary,
  marginBottom: "16px",
  textAlign: "center",
  "@media (max-width: 900px)": {
    fontSize: "36px",
  },
  "@media (max-width: 600px)": {
    fontSize: "28px",
  },
});

const Description = styled(Typography)({
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: 1.6,
  color: designTokens.colors.text.body,
  textAlign: "center",
  maxWidth: "700px",
  margin: "0 auto 80px",
  "@media (max-width: 600px)": {
    fontSize: "16px",
    marginBottom: "48px",
  },
});

const GalleryGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  "@media (max-width: 900px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
  },
  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",
    gap: "16px",
  },
});

const GalleryItem = styled(Box)({
  position: "relative",
  borderRadius: designTokens.radius.lg,
  overflow: "hidden",
  aspectRatio: "4/3",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
  },
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
});

const galleryImages = [
  { id: 1, src: gallary1, alt: "Solar Installation 1" },
  { id: 2, src: gallary2, alt: "Solar Installation 2" },
  { id: 3, src: gallary3, alt: "Solar Installation 3" },
  { id: 4, src: gallary4, alt: "Solar Installation 4" },
  { id: 5, src: gallary5, alt: "Solar Installation 5" },
  { id: 6, src: gallary6, alt: "Solar Installation 6" },
  { id: 7, src: gallary7, alt: "Solar Installation 7" },
  { id: 8, src: gallary8, alt: "Solar Installation 8" },
  { id: 9, src: gallary9, alt: "Solar Installation 9" },
];

const Gallery: React.FC = () => {
  return (
    <SectionWrapper id="gallery" data-scroll-section>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ marginBottom: { xs: "0px", sm: "0px", md: "0px" } }}>
          <Headline>Gallery</Headline>
          <Description>
            Explore our successful solar installations across India
          </Description>
        </Box>

        {/* Gallery Grid */}
        <GalleryGrid>
          {galleryImages.map((image) => (
            <GalleryItem key={image.id}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>
    </SectionWrapper>
  );
};

export default Gallery;
