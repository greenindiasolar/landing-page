import { useState, useEffect, useRef, useCallback } from "react";
import { Star } from "lucide-react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackwardIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import test1_bill_before from "../../../assets/Images/Testimonial/Testimonial-Bills/image1-before-bill.jpg";
import test1_bill_after from "../../../assets/Images/Testimonial/Testimonial-Bills/image1-after-bill.jpg";
import test2_bill_before from "../../../assets/Images/Testimonial/Testimonial-Bills/image2-before-bill.jpg";
import test2_bill_after from "../../../assets/Images/Testimonial/Testimonial-Bills/image2-after-bill.jpg";
import test3_bill_before from "../../../assets/Images/Testimonial/Testimonial-Bills/image3-before-bill.jpg";
import test3_bill_after from "../../../assets/Images/Testimonial/Testimonial-Bills/image3-after-bill.jpg";
import test4_bill_before from "../../../assets/Images/Testimonial/Testimonial-Bills/image4-before-bill.jpg";
import test4_bill_after from "../../../assets/Images/Testimonial/Testimonial-Bills/image4-after-bill.jpg";
import test5_bill_before from "../../../assets/Images/Testimonial/Testimonial-Bills/image5-before-bill.jpg";
import test5_bill_after from "../../../assets/Images/Testimonial/Testimonial-Bills/image5-after-bill.jpg";
import test1 from "../../../assets/Images/Testimonial/Testimonial-Images/image1.jpeg";
import test2 from "../../../assets/Images/Testimonial/Testimonial-Images/image2.jpeg";
import test3 from "../../../assets/Images/Testimonial/Testimonial-Images/image3.jpeg";
import test4 from "../../../assets/Images/Testimonial/Testimonial-Images/image4.jpeg";
import test5 from "../../../assets/Images/Testimonial/Testimonial-Images/image5.jpeg";

const designTokens = {
  colors: {
    brand: {
      primary: "#ff9010",
      primaryDark: "#e8830f",
      primaryPale: "#fff4e7",
    },
    accent: {
      green: "#64d240",
    },
    text: {
      primary: "#111827",
      secondary: "#1f2937",
      tertiary: "#374151",
      body: "#6b7280",
      muted: "#9ca3af",
      white: "#f9fafb",
    },
    bg: {
      white: "#ffffff",
      lightest: "#f9fafb",
      light: "#f3f4f6",
    },
    border: {
      light: "#f9fafb",
      default: "#d9d9d9",
    },
  },
  radius: {
    lg: "12px",
    xl: "16px",
    pill: "99px",
  },
};

// Bill Modal Component
interface BillModalProps {
  isOpen: boolean;
  onClose: () => void;
  billBefore: string;
  billAfter: string;
  customerName: string;
}

const BillModal = ({
  isOpen,
  onClose,
  billBefore,
  billAfter,
  customerName,
}: BillModalProps) => {
  const [isMobileModal, setIsMobileModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileModal(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: isMobileModal ? "16px" : "40px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: designTokens.colors.bg.white,
          borderRadius: isMobileModal ? "12px" : "16px",
          padding: isMobileModal ? "20px" : "32px",
          maxWidth: "900px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          position: "relative",
          boxShadow: "0px 24px 48px -12px rgba(16, 24, 40, 0.25)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: isMobileModal ? "12px" : "16px",
            right: isMobileModal ? "12px" : "16px",
            width: isMobileModal ? "36px" : "44px",
            height: isMobileModal ? "36px" : "44px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: designTokens.colors.bg.light,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              designTokens.colors.brand.primary;
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              designTokens.colors.bg.light;
            const icon = e.currentTarget.querySelector("svg");
            if (icon) icon.style.color = designTokens.colors.text.tertiary;
          }}
        >
          <CloseIcon
            sx={{
              fontSize: isMobileModal ? "20px" : "24px",
              color: designTokens.colors.text.tertiary,
            }}
          />
        </button>

        {/* Modal Header */}
        <div
          style={{
            marginBottom: isMobileModal ? "20px" : "28px",
            paddingRight: "48px",
          }}
        >
          <h3
            style={{
              fontSize: isMobileModal ? "20px" : "28px",
              fontWeight: 600,
              color: designTokens.colors.text.primary,
              marginBottom: "8px",
              fontFamily: "'Onest', sans-serif",
              letterSpacing: "-0.56px",
            }}
          >
            Bill Comparison
          </h3>
          <p
            style={{
              fontSize: isMobileModal ? "14px" : "16px",
              color: designTokens.colors.text.body,
              fontFamily: "'Onest', sans-serif",
            }}
          >
            See how {customerName}'s electricity bill changed after solar
            installation
          </p>
        </div>

        {/* Bills Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobileModal ? "1fr" : "1fr 1fr",
            gap: isMobileModal ? "20px" : "24px",
          }}
        >
          {/* Before Bill */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: `1px solid ${designTokens.colors.border.default}`,
            }}
          >
            <div
              style={{
                backgroundColor: "#FEE2E2",
                padding: isMobileModal ? "12px 16px" : "14px 20px",
                borderBottom: `1px solid ${designTokens.colors.border.default}`,
              }}
            >
              <span
                style={{
                  fontSize: isMobileModal ? "14px" : "16px",
                  fontWeight: 600,
                  color: "#991B1B",
                  fontFamily: "'Onest', sans-serif",
                }}
              >
                Before Solar
              </span>
            </div>
            <img
              src={billBefore}
              alt="Electricity bill before solar installation"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          {/* After Bill */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: `1px solid ${designTokens.colors.border.default}`,
            }}
          >
            <div
              style={{
                backgroundColor: "#D1FAE5",
                padding: isMobileModal ? "12px 16px" : "14px 20px",
                borderBottom: `1px solid ${designTokens.colors.border.default}`,
              }}
            >
              <span
                style={{
                  fontSize: isMobileModal ? "14px" : "16px",
                  fontWeight: 600,
                  color: "#065F46",
                  fontFamily: "'Onest', sans-serif",
                }}
              >
                After Solar
              </span>
            </div>
            <img
              src={billAfter}
              alt="Electricity bill after solar installation"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  review: string;
  image: string;
  bill_before: string;
  bill_after: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Koti Reddy",
    rating: 5,
    review: `Green India Solar Energy provided clear pricing with no hidden charges. They explained the cost,
expected savings, and returns in a straightforward way. That clarity helped us take a confident
decision`,
    image: test1,
    bill_after: test1_bill_after,
    bill_before: test1_bill_before,
  },
  {
    id: 2,
    name: "Adi Narayana",
    rating: 5,
    review: `The installation was completed on schedule, and the team worked in a disciplined and safe manner.
They maintained cleanliness at the site and handled the work professionally throughout.`,
    image: test2,
    bill_after: test2_bill_after,
    bill_before: test2_bill_before,
  },
  {
    id: 3,
    name: "Rama krishna",
    rating: 5,
    review: `Even after installation, the team responds promptly whenever we have questions. Their continued
support gives us confidence and makes the overall experience dependable.`,
    image: test3,
    bill_after: test3_bill_after,
    bill_before: test3_bill_before,
  },
  {
    id: 4,
    name: "Vardhanamma",
    rating: 5,
    review: `From the initial discussion to installation, the entire process was handled properly. They guided us
clearly on documentation and subsidy-related steps, making the experience smooth and stress-free.`,
    image: test4,
    bill_after: test4_bill_after,
    bill_before: test4_bill_before,
  },
  {
    id: 5,
    name: "Rajeswari",
    rating: 5,
    review: `After installing solar with Green India Solar Energy, our electricity bill has reduced noticeably. They
suggested a system suitable for our usage and explained everything clearly before installation.`,
    image: test5,
    bill_after: test5_bill_after,
    bill_before: test5_bill_before,
  },
];

// Auto-scroll interval in milliseconds
const AUTO_SCROLL_INTERVAL = 4000;

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isBillModalOpen, setIsBillModalOpen] = useState(false);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentTestimonial = testimonials[currentIndex];
  const totalTestimonials = testimonials.length;

  // Auto-scroll to next testimonial
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  }, [totalTestimonials]);

  // Reset and start auto-scroll timer
  const resetAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(goToNext, AUTO_SCROLL_INTERVAL);
  }, [goToNext]);

  // Initialize auto-scroll
  useEffect(() => {
    resetAutoScroll();
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [resetAutoScroll]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallMobile(window.innerWidth < 600);
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
    resetAutoScroll();
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
    resetAutoScroll();
  };

  const handleThumbnailClick = (idx: number) => {
    // Map the clicked index back to the original testimonial index
    const actualIndex = idx % testimonials.length;
    setCurrentIndex(actualIndex);
    resetAutoScroll();
  };

  // Create infinite carousel by tripling images
  const carouselImages = [
    ...testimonials.map((t) => t.image),
    ...testimonials.map((t) => t.image),
    ...testimonials.map((t) => t.image),
  ];

  const imageWidth = isSmallMobile ? 60 : isMobile ? 80 : isTablet ? 120 : 160;
  const imageGap = isSmallMobile ? 6 : isMobile ? 8 : 12;
  const totalItems = testimonials.length;

  // Calculate translation to center the selected image
  // We show the middle set of images (offset by totalItems)
  const getTranslateX = () => {
    const totalWidth = imageWidth + imageGap;
    // Center the current image from the middle set
    const middleSetOffset = totalItems * totalWidth;
    const currentOffset = currentIndex * totalWidth;
    return -(middleSetOffset + currentOffset);
  };

  return (
    <div
      id="testimonials"
      data-scroll-section
      style={{
        backgroundColor: "#fff",
        padding: isSmallMobile
          ? "40px 0 40px"
          : isMobile
            ? "40px 0 60px"
            : isTablet
              ? "60px 0 80px"
              : "0",
        fontFamily: "'Onest', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isSmallMobile
            ? "0 16px"
            : isMobile
              ? "0 20px"
              : isTablet
                ? "0 32px"
                : "0 40px",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isSmallMobile ? "32px" : isMobile ? "40px" : "64px",
            marginLeft: isSmallMobile ? "20px" : 0,
            marginRight: isSmallMobile ? "20px" : 0,
          }}
        >
          <h2
            style={{
              fontSize: isSmallMobile
                ? "24px"
                : isMobile
                  ? "32px"
                  : isTablet
                    ? "40px"
                    : "48px",
              fontWeight: 700,
              lineHeight: "1.2",
              color: designTokens.colors.text.primary,
              marginBottom: isSmallMobile ? "10px" : isMobile ? "12px" : "16px",
              letterSpacing: isSmallMobile ? "-0.48px" : "-0.96px",
            }}
          >
            Real Homes. Real Savings. Real Trust.
          </h2>
          <p
            style={{
              fontSize: isSmallMobile ? "14px" : isMobile ? "16px" : "20px",
              color: designTokens.colors.text.body,
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
              padding: isMobile ? "0 30px" : "0",
            }}
          >
            We don't rely on claims. We rely on customer experiences.
          </p>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile || isTablet ? "1fr" : "440px 1fr",
            gap: "0",
            alignItems: "center",
            marginBottom: isSmallMobile
              ? "24px"
              : isMobile
                ? "32px"
                : isTablet
                  ? "40px"
                  : "48px",
            backgroundColor: designTokens.colors.bg.lightest,
            borderRadius: isSmallMobile ? "12px" : "16px",
            overflow: "hidden",
          }}
        >
          {/* Left Side - Testimonial Card */}
          <div
            style={{
              padding: isSmallMobile
                ? "20px"
                : isMobile
                  ? "28px"
                  : isTablet
                    ? "32px"
                    : "40px",
              height: "fit-content",
            }}
          >
            {/* Stars */}
            <div
              style={{
                display: "flex",
                gap: isSmallMobile ? "3px" : "4px",
                marginBottom: isSmallMobile
                  ? "16px"
                  : isMobile
                    ? "20px"
                    : "24px",
              }}
            >
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={isSmallMobile ? 16 : isMobile ? 18 : 20}
                  fill="#FFA500"
                  color="#FFA500"
                />
              ))}
            </div>

            {/* Review Text */}
            <p
              style={{
                fontSize: isSmallMobile ? "14px" : isMobile ? "16px" : "18px",
                lineHeight: isSmallMobile ? "1.6" : "1.7",
                color: designTokens.colors.text.tertiary,
                marginBottom: isSmallMobile
                  ? "20px"
                  : isMobile
                    ? "24px"
                    : "32px",
                fontWeight: 400,
              }}
            >
              {currentTestimonial.review}
            </p>

            {/* Customer Info */}
            <div
              style={{
                marginBottom: isSmallMobile
                  ? "20px"
                  : isMobile
                    ? "24px"
                    : "32px",
              }}
            >
              <h3
                style={{
                  fontSize: isSmallMobile ? "16px" : isMobile ? "18px" : "20px",
                  fontWeight: 700,
                  color: designTokens.colors.text.primary,
                  marginBottom: "4px",
                }}
              >
                {currentTestimonial.name}
              </h3>
              <p
                style={{
                  fontSize: isSmallMobile ? "12px" : isMobile ? "13px" : "14px",
                  color: designTokens.colors.brand.primary,
                  fontWeight: 500,
                }}
              >
                Verified Customer
              </p>
            </div>

            {/* Navigation Arrows */}
            <div
              style={{ display: "flex", gap: isSmallMobile ? "10px" : "12px" }}
            >
              <button
                onClick={handlePrevious}
                style={{
                  width: isSmallMobile ? "40px" : isMobile ? "44px" : "56px",
                  height: isSmallMobile ? "40px" : isMobile ? "44px" : "56px",
                  borderRadius: "50%",
                  border: `1px solid #FFF4E7`,
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    designTokens.colors.brand.primary;
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.setAttribute("stroke", "white");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg)
                    svg.setAttribute(
                      "stroke",
                      designTokens.colors.brand.primary,
                    );
                }}
              >
                <ArrowBackwardIcon
                  sx={{
                    color: designTokens.colors.brand.primary,
                    fontSize: isSmallMobile
                      ? "18px"
                      : isMobile
                        ? "20px"
                        : "24px",
                  }}
                />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: isSmallMobile ? "40px" : isMobile ? "44px" : "56px",
                  height: isSmallMobile ? "40px" : isMobile ? "44px" : "56px",
                  borderRadius: "50%",
                  border: `1px solid #FFF4E7`,
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    designTokens.colors.brand.primary;
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.setAttribute("stroke", "white");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg)
                    svg.setAttribute(
                      "stroke",
                      designTokens.colors.brand.primary,
                    );
                }}
              >
                <ArrowForwardIcon
                  sx={{
                    color: designTokens.colors.brand.primary,
                    fontSize: isSmallMobile
                      ? "18px"
                      : isMobile
                        ? "20px"
                        : "24px",
                  }}
                />
              </button>
            </div>
          </div>

          {/* Right Side - Image flush to right edge */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              style={{
                display: "block",
                width: "100%",
                maxHeight: isSmallMobile
                  ? "300px"
                  : isMobile
                    ? "400px"
                    : isTablet
                      ? "450px"
                      : "500px",
                objectFit: "contain",
                objectPosition: "right center",
                transition: "opacity 0.3s ease",
              }}
            />
            
            {/* View Bill Button */}
            <button
              onClick={() => setIsBillModalOpen(true)}
              style={{
                position: "absolute",
                top: isSmallMobile ? "12px" : "20px",
                right: isSmallMobile ? "12px" : "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: isSmallMobile ? "8px 12px" : "10px 16px",
                backgroundColor: designTokens.colors.brand.primary,
                color: "#fff",
                border: "none",
                borderRadius: designTokens.radius.lg,
                fontSize: isSmallMobile ? "12px" : "14px",
                fontWeight: 500,
                fontFamily: "'Onest', sans-serif",
                cursor: "pointer",
                boxShadow: "0px 4px 12px rgba(255, 144, 16, 0.4)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = designTokens.colors.brand.primaryDark;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = designTokens.colors.brand.primary;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              View Bill
            </button>
          </div>
        </div>

        {/* Image Gallery Carousel with Centered Selection and Fade Edges */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Left Fade Gradient */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: isSmallMobile ? "60px" : isMobile ? "80px" : "150px",
              background:
                "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Right Fade Gradient */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: isSmallMobile ? "60px" : isMobile ? "80px" : "150px",
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Carousel Container */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                paddingTop: "20px",
                paddingBottom: "20px",
                gap: `${imageGap}px`,
                transform: `translateX(calc(50% - ${imageWidth / 2}px + ${getTranslateX()}px))`,
                transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
            >
              {carouselImages.map((img: string, idx: number) => {
                const actualIndex = idx % totalItems;
                const isActive = actualIndex === currentIndex;

                return (
                  <div
                    key={idx}
                    style={{
                      flex: "0 0 auto",
                      width: `${imageWidth}px`,
                      height: isSmallMobile
                        ? "60px"
                        : isMobile
                          ? "80px"
                          : isTablet
                            ? "110px"
                            : "140px",
                      borderRadius: isSmallMobile
                        ? "8px"
                        : isMobile
                          ? "10px"
                          : "14px",
                      overflow: "hidden",
                      cursor: "pointer",
                      border: isActive
                        ? `${isSmallMobile ? "2px" : isMobile ? "3px" : "4px"} solid ${designTokens.colors.brand.primary}`
                        : "3px solid transparent",
                      transition: "all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
                      transform: isActive ? "scale(1.15)" : "scale(1)",
                      opacity: isActive ? 1 : 0.5,
                      // boxShadow: isActive
                      //   ? '0 8px 24px rgba(255, 144, 16, 0.4)'
                      //   : '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={() => handleThumbnailClick(idx)}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.opacity = "0.8";
                        e.currentTarget.style.transform = "scale(1.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.opacity = "0.5";
                        e.currentTarget.style.transform = "scale(1)";
                      }
                    }}
                  >
                    <img
                      src={img}
                      alt={`${testimonials[actualIndex].name}'s installation`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: isSmallMobile ? "4px" : "6px",
              marginTop: isSmallMobile ? "16px" : isMobile ? "20px" : "28px",
            }}
          >
            {testimonials.map((_, idx: number) => (
              <button
                key={idx}
                onClick={() => handleThumbnailClick(idx)}
                style={{
                  width: idx === currentIndex ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor:
                    idx === currentIndex
                      ? designTokens.colors.brand.primary
                      : designTokens.colors.border.default,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bill Comparison Modal */}
      <BillModal
        isOpen={isBillModalOpen}
        onClose={() => setIsBillModalOpen(false)}
        billBefore={currentTestimonial.bill_before}
        billAfter={currentTestimonial.bill_after}
        customerName={currentTestimonial.name}
      />
    </div>
  );
};

export default TestimonialCarousel;
