import { useState, useEffect } from 'react';
import { Star, FileText } from 'lucide-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';
const designTokens = {
  colors: {
    brand: {
      primary: '#ff9010',
      primaryDark: '#e8830f',
      primaryPale: '#fff4e7',
    },
    accent: {
      green: '#64d240',
    },
    text: {
      primary: '#111827',
      secondary: '#1f2937',
      tertiary: '#374151',
      body: '#6b7280',
      muted: '#9ca3af',
      white: '#f9fafb',
    },
    bg: {
      white: '#ffffff',
      lightest: '#f9fafb',
      light: '#f3f4f6',
    },
    border: {
      light: '#f9fafb',
      default: '#d9d9d9',
    },
  },
  radius: {
    lg: '12px',
    xl: '16px',
    pill: '99px',
  },
};

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  review: string;
  images: string[];
  address: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Praveen Kumar',
    role: 'Property Investor',
    location: 'Vijayawada',
    rating: 5,
    review: 'I was skeptical about solar, but Green India Solar\'s transparent pricing and subsidy assistance made it achievable. My rooftop now generates income, not just power.',
    address: '13-2-329, 13th Ward, Kcp Colony, Macherla, Andhra Pradesh 522426, India',
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    ],
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    location: 'Hyderabad',
    rating: 5,
    review: 'Switching to solar was the best decision for our home. Green India Solar handled everything from design to installation perfectly. Our electricity bills have dropped by 80%.',
    address: 'Banjara Hills, Hyderabad, Telangana 500034, India',
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    ],
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Business Owner',
    location: 'Bangalore',
    rating: 5,
    review: 'Professional service from start to finish. The team was knowledgeable, transparent about costs, and completed the installation in just 3 days. Amazing savings!',
    address: 'Whitefield, Bangalore, Karnataka 560066, India',
    images: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    ],
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setImageIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setImageIndex(0);
  };

  const getVisibleImages = () => {
    const images = currentTestimonial.images;
    const visibleCount = isMobile ? 3 : 5;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(images[i % images.length]);
    }
    return visible;
  };

  const getImageWidth = () => {
    if (isMobile) return 'calc(33.333% - 10.67px)';
    return 'calc(20% - 12.8px)';
  };

  return (
    <div id='testimonials' data-scroll-section style={{
      backgroundColor: '#fff',
      padding: isMobile ? '40px 0 60px' : isTablet ? '60px 0 80px' : '0',
      fontFamily: "'Onest', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 40px'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '64px' }}>
          <h2 style={{
            fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
            fontWeight: 700,
            lineHeight: '1.2',
            color: designTokens.colors.text.primary,
            marginBottom: isMobile ? '12px' : '16px',
            letterSpacing: '-0.96px',
          }}>
            Real Homes. Real Savings. Real Trust.
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : '20px',
            color: designTokens.colors.text.body,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: isMobile ? '0 10px' : '0',
          }}>
            We don't rely on claims. We rely on customer experiences.
          </p>
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile || isTablet ? '1fr' : '440px 1fr',
          gap: isMobile ? '32px' : isTablet ? '40px' : '48px',
          alignItems: 'start',
          marginBottom: isMobile ? '32px' : isTablet ? '40px' : '48px',
          backgroundColor: designTokens.colors.bg.lightest,
          borderRadius: "16px",
        }}>
          {/* Left Side - Testimonial Card */}
          <div style={{
            // backgroundColor: designTokens.colors.bg.lightest,
            borderRadius: isMobile ? '20px' : '24px',
            padding: isMobile ? '28px' : isTablet ? '32px' : '40px',
            height: 'fit-content',
          }}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: isMobile ? '20px' : '24px' }}>
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={isMobile ? 18 : 20}
                  fill="#FFA500"
                  color="#FFA500"
                />
              ))}
            </div>

            {/* Review Text */}
            <p style={{
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: '1.7',
              color: designTokens.colors.text.tertiary,
              marginBottom: isMobile ? '24px' : '32px',
              fontWeight: 400,
            }}>
              {currentTestimonial.review}
            </p>

            {/* Customer Info */}
            <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
              <h3 style={{
                fontSize: isMobile ? '18px' : '20px',
                fontWeight: 700,
                color: designTokens.colors.text.primary,
                marginBottom: '4px',
              }}>
                {currentTestimonial.name}
              </h3>
              <p style={{
                fontSize: isMobile ? '13px' : '14px',
                color: designTokens.colors.text.body,
                fontWeight: 400,
              }}>
                {currentTestimonial.role}, {currentTestimonial.location}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handlePrevious}
                style={{
                  width: isMobile ? '44px' : '56px',
                  height: isMobile ? '44px' : '56px',
                  borderRadius: '50%',
                  border: `1px solid #FFF4E7`,
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = designTokens.colors.brand.primary;
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.setAttribute('stroke', 'white');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.setAttribute('stroke', designTokens.colors.brand.primary);
                }}
              >
                <ArrowBackwardIcon sx={{ color: designTokens.colors.brand.primary, fontSize: isMobile ? '20px' : '24px' }} />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: isMobile ? '44px' : '56px',
                  height: isMobile ? '44px' : '56px',
                  borderRadius: '50%',
                  border: `1px solid #FFF4E7`,
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = designTokens.colors.brand.primary;
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.setAttribute('stroke', 'white');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.setAttribute('stroke', designTokens.colors.brand.primary);
                }}
              >
                <ArrowForwardIcon sx={{ color: designTokens.colors.brand.primary, fontSize: isMobile ? '20px' : '24px' }} />
              </button>
            </div>
          </div>

          {/* Right Side - Image with Location */}
          <div style={{
            position: 'relative',
            borderRadius: isMobile ? '20px' : '24px',
            overflow: 'hidden',
            height: isMobile ? '400px' : isTablet ? '400px' : '470px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}>
            <img
              src={currentTestimonial.images[imageIndex]}
              alt={currentTestimonial.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Location Overlay */}
            <div style={{
              position: 'absolute',
              bottom: isMobile ? '16px' : '24px',
              left: isMobile ? '16px' : '24px',
              right: isMobile ? '16px' : '24px',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
              borderRadius: isMobile ? '12px' : '16px',
              padding: isMobile ? '16px' : '20px 24px',
              color: 'white',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                justifyContent: 'space-between',
                gap: isMobile ? '12px' : '16px',
              }}>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 600,
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    Macherla, Andhra Pradesh, India 🇮🇳
                  </p>
                  <p style={{
                    fontSize: isMobile ? '11px' : '12px',
                    color: '#CCCCCC',
                    lineHeight: '1.4',
                  }}>
                    {currentTestimonial.address}
                  </p>
                </div>
                <button style={{
                  backgroundColor: 'white',
                  color: designTokens.colors.text.primary,
                  border: 'none',
                  borderRadius: '8px',
                  padding: isMobile ? '8px 16px' : '10px 20px',
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  width: isMobile ? '100%' : 'auto',
                  justifyContent: 'center',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = designTokens.colors.bg.light;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                >
                  <FileText size={isMobile ? 14 : 16} />
                  View Electricity Bill
                </button>
              </div>
            </div>

            {/* Google Maps Badge */}
            <div style={{
              position: 'absolute',
              top: isMobile ? '12px' : '16px',
              right: isMobile ? '12px' : '16px',
              backgroundColor: 'white',
              borderRadius: isMobile ? '6px' : '8px',
              padding: isMobile ? '4px 10px' : '6px 12px',
              fontSize: isMobile ? '10px' : '12px',
              fontWeight: 600,
              color: designTokens.colors.text.primary,
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '4px' : '6px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }}>
              <span style={{ fontSize: isMobile ? '14px' : '16px' }}>🗺️</span>
              GPS Map Camera
            </div>
          </div>
        </div>

        {/* Image Gallery Carousel */}
        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'flex',
            gap: isMobile ? '12px' : '16px',
            overflow: 'hidden',
          }}>
            {getVisibleImages().map((img, idx) => (
              <div
                key={idx}
                style={{
                  flex: `0 0 ${getImageWidth()}`,
                  height: isMobile ? '120px' : isTablet ? '150px' : '180px',
                  borderRadius: isMobile ? '12px' : '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: idx === imageIndex ? `${isMobile ? '2px' : '3px'} solid ${designTokens.colors.brand.primary}` : 'none',
                  transition: 'all 0.3s ease',
                  transform: idx === imageIndex ? 'scale(1.02)' : 'scale(1)',
                  opacity: idx === imageIndex ? 1 : 0.7,
                }}
                onClick={() => setImageIndex(idx)}
                onMouseEnter={(e) => {
                  if (idx !== imageIndex) e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  if (idx !== imageIndex) e.currentTarget.style.opacity = '0.7';
                }}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;