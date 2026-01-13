import { useState, useEffect, useRef, useCallback } from 'react';
import { Star } from 'lucide-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';
import test1 from '../../../assets/Images/Testimonial/1.jpeg';
import test2 from '../../../assets/Images/Testimonial/2.jpeg';
import test3 from '../../../assets/Images/Testimonial/3.jpeg';
import test4 from '../../../assets/Images/Testimonial/4.jpeg';
import test5 from '../../../assets/Images/Testimonial/5.jpeg';
import test6 from '../../../assets/Images/Testimonial/6.jpeg';
import test7 from '../../../assets/Images/Testimonial/7.jpeg';
import test8 from '../../../assets/Images/Testimonial/8.jpeg';
import test9 from '../../../assets/Images/Testimonial/9.jpeg';
import test10 from '../../../assets/Images/Testimonial/10.jpeg';
import test11 from '../../../assets/Images/Testimonial/11.jpeg';
import test12 from '../../../assets/Images/Testimonial/12.jpeg';
import test13 from '../../../assets/Images/Testimonial/13.jpeg';
import test14 from '../../../assets/Images/Testimonial/14.jpeg';
import test15 from '../../../assets/Images/Testimonial/15.jpeg';

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
  image: string;
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
    image: test1,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    location: 'Hyderabad',
    rating: 5,
    review: 'Switching to solar was the best decision for our home. Green India Solar handled everything from design to installation perfectly. Our electricity bills have dropped by 80%.',
    address: 'Banjara Hills, Hyderabad, Telangana 500034, India',
    image: test2,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Business Owner',
    location: 'Bangalore',
    rating: 5,
    review: 'Professional service from start to finish. The team was knowledgeable, transparent about costs, and completed the installation in just 3 days. Amazing savings!',
    address: 'Whitefield, Bangalore, Karnataka 560066, India',
    image: test3,
  },
  {
    id: 4,
    name: 'Venkat Reddy',
    role: 'Factory Owner',
    location: 'Guntur',
    rating: 5,
    review: 'Our manufacturing unit now runs 70% on solar power. The ROI was much faster than expected. Excellent installation team!',
    address: 'Industrial Area, Guntur, Andhra Pradesh 522001, India',
    image: test4,
  },
  {
    id: 5,
    name: 'Lakshmi Devi',
    role: 'Homeowner',
    location: 'Vizag',
    rating: 5,
    review: 'From consultation to installation, everything was seamless. My monthly bill went from ₹8,000 to just ₹800!',
    address: 'MVP Colony, Visakhapatnam, Andhra Pradesh 530017, India',
    image: test5,
  },
  {
    id: 6,
    name: 'Suresh Babu',
    role: 'Apartment Owner',
    location: 'Chennai',
    rating: 5,
    review: 'Installed solar for our entire apartment complex. The subsidy assistance saved us lakhs. Highly recommended!',
    address: 'Anna Nagar, Chennai, Tamil Nadu 600040, India',
    image: test6,
  },
  {
    id: 7,
    name: 'Anitha Rao',
    role: 'School Principal',
    location: 'Tirupati',
    rating: 5,
    review: 'Our school campus is now powered by clean energy. The students learn about sustainability every day. Thank you Green India Solar!',
    address: 'Renigunta Road, Tirupati, Andhra Pradesh 517501, India',
    image: test7,
  },
  {
    id: 8,
    name: 'Mohammed Irfan',
    role: 'Hotel Owner',
    location: 'Nellore',
    rating: 5,
    review: 'Running a hotel requires a lot of power. Solar has cut our operational costs by 60%. Best investment we made!',
    address: 'Grand Trunk Road, Nellore, Andhra Pradesh 524001, India',
    image: test8,
  },
  {
    id: 9,
    name: 'Padma Kumari',
    role: 'Homeowner',
    location: 'Rajahmundry',
    rating: 5,
    review: 'The team was very professional and completed the installation in just 2 days. Now we enjoy free electricity!',
    address: 'Danavaipeta, Rajahmundry, Andhra Pradesh 533103, India',
    image: test9,
  },
  {
    id: 10,
    name: 'Ravi Teja',
    role: 'IT Professional',
    location: 'Hyderabad',
    rating: 5,
    review: 'Work from home became much cheaper after going solar. The mobile app monitoring is a great touch!',
    address: 'Gachibowli, Hyderabad, Telangana 500032, India',
    image: test10,
  },
  {
    id: 11,
    name: 'Srinivas Murthy',
    role: 'Farmer',
    location: 'Kurnool',
    rating: 5,
    review: 'Solar powered irrigation has transformed my farm. No more dependency on erratic power supply!',
    address: 'Nandyal Road, Kurnool, Andhra Pradesh 518002, India',
    image: test11,
  },
  {
    id: 12,
    name: 'Kavitha Reddy',
    role: 'Doctor',
    location: 'Warangal',
    rating: 5,
    review: 'Our clinic runs on 100% solar power. Patients appreciate our commitment to green energy. Great service!',
    address: 'Hanamkonda, Warangal, Telangana 506001, India',
    image: test12,
  },
  {
    id: 13,
    name: 'Narasimha Rao',
    role: 'Retired Engineer',
    location: 'Vijayawada',
    rating: 5,
    review: 'As an engineer, I was impressed by the quality of installation and components. Exceeded my expectations!',
    address: 'Governorpet, Vijayawada, Andhra Pradesh 520002, India',
    image: test13,
  },
  {
    id: 14,
    name: 'Bhavani Shankar',
    role: 'Restaurant Owner',
    location: 'Secunderabad',
    rating: 5,
    review: 'Our restaurant kitchen runs on solar. The monthly savings are incredible. Thank you for the excellent support!',
    address: 'Paradise Circle, Secunderabad, Telangana 500003, India',
    image: test14,
  },
  {
    id: 15,
    name: 'Swathi Lakshmi',
    role: 'Homeowner',
    location: 'Bangalore',
    rating: 5,
    review: 'Zero electricity bill for 8 months straight! The installation quality is top-notch. Highly satisfied customer here!',
    address: 'Electronic City, Bangalore, Karnataka 560100, India',
    image: test15,
  },
];

// Auto-scroll interval in milliseconds
const AUTO_SCROLL_INTERVAL = 4000;

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    resetAutoScroll();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
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
    ...testimonials.map(t => t.image),
    ...testimonials.map(t => t.image),
    ...testimonials.map(t => t.image),
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
    <div id='testimonials' data-scroll-section style={{
      backgroundColor: '#fff',
      padding: isSmallMobile ? '40px 0 40px' : isMobile ? '40px 0 60px' : isTablet ? '60px 0 80px' : '0',
      fontFamily: "'Onest', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: isSmallMobile ? '0 16px' : isMobile ? '0 20px' : isTablet ? '0 32px' : '0 40px'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isSmallMobile ? '32px' : isMobile ? '40px' : '64px', marginLeft:isSmallMobile?'20px':0 , marginRight:isSmallMobile?'20px':0}}>
          <h2 style={{
            fontSize: isSmallMobile ? '24px' : isMobile ? '32px' : isTablet ? '40px' : '48px',
            fontWeight: 700,
            lineHeight: '1.2',
            color: designTokens.colors.text.primary,
            marginBottom: isSmallMobile ? '10px' : isMobile ? '12px' : '16px',
            letterSpacing: isSmallMobile ? '-0.48px' : '-0.96px',
          }}>
            Real Homes. Real Savings. Real Trust.
          </h2>
          <p style={{
            fontSize: isSmallMobile ? '14px' : isMobile ? '16px' : '20px',
            color: designTokens.colors.text.body,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: isMobile ? '0 30px' : '0',
          }}>
            We don't rely on claims. We rely on customer experiences.
          </p>
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile || isTablet ? '1fr' : '440px 1fr',
          gap: '0',
          alignItems: 'center',
          marginBottom: isSmallMobile ? '24px' : isMobile ? '32px' : isTablet ? '40px' : '48px',
          backgroundColor: designTokens.colors.bg.lightest,
          borderRadius: isSmallMobile ? '12px' : '16px',
          overflow: 'hidden',
        }}>
          {/* Left Side - Testimonial Card */}
          <div style={{
            padding: isSmallMobile ? '20px' : isMobile ? '28px' : isTablet ? '32px' : '40px',
            height: 'fit-content',
          }}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: isSmallMobile ? '3px' : '4px', marginBottom: isSmallMobile ? '16px' : isMobile ? '20px' : '24px' }}>
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
            <p style={{
              fontSize: isSmallMobile ? '14px' : isMobile ? '16px' : '18px',
              lineHeight: isSmallMobile ? '1.6' : '1.7',
              color: designTokens.colors.text.tertiary,
              marginBottom: isSmallMobile ? '20px' : isMobile ? '24px' : '32px',
              fontWeight: 400,
            }}>
              {currentTestimonial.review}
            </p>

            {/* Customer Info */}
            <div style={{ marginBottom: isSmallMobile ? '20px' : isMobile ? '24px' : '32px' }}>
              <h3 style={{
                fontSize: isSmallMobile ? '16px' : isMobile ? '18px' : '20px',
                fontWeight: 700,
                color: designTokens.colors.text.primary,
                marginBottom: '4px',
              }}>
                {currentTestimonial.name}
              </h3>
              <p style={{
                fontSize: isSmallMobile ? '12px' : isMobile ? '13px' : '14px',
                color: designTokens.colors.text.body,
                fontWeight: 400,
              }}>
                {currentTestimonial.role}, {currentTestimonial.location}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div style={{ display: 'flex', gap: isSmallMobile ? '10px' : '12px' }}>
              <button
                onClick={handlePrevious}
                style={{
                  width: isSmallMobile ? '40px' : isMobile ? '44px' : '56px',
                  height: isSmallMobile ? '40px' : isMobile ? '44px' : '56px',
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
                <ArrowBackwardIcon sx={{ color: designTokens.colors.brand.primary, fontSize: isSmallMobile ? '18px' : isMobile ? '20px' : '24px' }} />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: isSmallMobile ? '40px' : isMobile ? '44px' : '56px',
                  height: isSmallMobile ? '40px' : isMobile ? '44px' : '56px',
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
                <ArrowForwardIcon sx={{ color: designTokens.colors.brand.primary, fontSize: isSmallMobile ? '18px' : isMobile ? '20px' : '24px' }} />
              </button>
            </div>
          </div>

          {/* Right Side - Image flush to right edge */}
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              style={{
                display: 'block',
                width: '100%',
                maxHeight: isSmallMobile ? '300px' : isMobile ? '400px' : isTablet ? '450px' : '500px',
                objectFit: 'contain',
                objectPosition: 'right center',
                transition: 'opacity 0.3s ease',
              }}
            />
          </div>
        </div>

        {/* Image Gallery Carousel with Centered Selection and Fade Edges */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Left Fade Gradient */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: isSmallMobile ? '60px' : isMobile ? '80px' : '150px',
            background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />

          {/* Right Fade Gradient */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: isSmallMobile ? '60px' : isMobile ? '80px' : '150px',
            background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }} />

          {/* Carousel Container */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
            <div style={{
              display: 'flex',
              paddingTop: '20px',
              paddingBottom: '20px',
              gap: `${imageGap}px`,
              transform: `translateX(calc(50% - ${imageWidth / 2}px + ${getTranslateX()}px))`,
              transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}>
              {carouselImages.map((img: string, idx: number) => {
                const actualIndex = idx % totalItems;
                const isActive = actualIndex === currentIndex;

                return (
                  <div
                    key={idx}
                    style={{
                      flex: '0 0 auto',
                      width: `${imageWidth}px`,
                      height: isSmallMobile ? '60px' : isMobile ? '80px' : isTablet ? '110px' : '140px',
                      borderRadius: isSmallMobile ? '8px' : isMobile ? '10px' : '14px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: isActive
                        ? `${isSmallMobile ? '2px' : isMobile ? '3px' : '4px'} solid ${designTokens.colors.brand.primary}`
                        : '3px solid transparent',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                      transform: isActive ? 'scale(1.15)' : 'scale(1)',
                      opacity: isActive ? 1 : 0.5,
                      // boxShadow: isActive
                      //   ? '0 8px 24px rgba(255, 144, 16, 0.4)'
                      //   : '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={() => handleThumbnailClick(idx)}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.opacity = '0.8';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.opacity = '0.5';
                        e.currentTarget.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    <img
                      src={img}
                      alt={`${testimonials[actualIndex].name}'s installation`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isSmallMobile ? '4px' : '6px',
            marginTop: isSmallMobile ? '16px' : isMobile ? '20px' : '28px',
          }}>
            {testimonials.map((_, idx: number) => (
              <button
                key={idx}
                onClick={() => handleThumbnailClick(idx)}
                style={{
                  width: idx === currentIndex ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: idx === currentIndex
                    ? designTokens.colors.brand.primary
                    : designTokens.colors.border.default,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;