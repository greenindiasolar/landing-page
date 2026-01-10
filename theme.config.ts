/**
 * Green India Solar Energy - Design System
 * Production-ready theme configuration
 * 
 * This theme is specifically tailored for the Green India Solar Energy website.
 * All values are extracted directly from the Figma design.
 */

export const theme = {
  /**
   * ============================================================================
   * TYPOGRAPHY HIERARCHY
   * ============================================================================
   */
  typography: {
    // Font families
    fonts: {
      primary: "'Onest', sans-serif",
      secondary: "'Inter', sans-serif", 
      currency: "'Noto Sans', sans-serif",
    },

    // Heading styles (H1 - H6)
    headings: {
      h1: {
        // Hero main heading: "Your Electricity Bill Should Not Control Your Life"
        fontSize: "56px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 600, // semibold
        lineHeight: "56px",
        letterSpacing: "-1.12px",
        color: "#f9fafb", // white/near-white on dark backgrounds
      },

      h2: {
        // Section headings: "India's Fastest-Growing Solar Energy Network"
        fontSize: "48px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 600, // semibold
        lineHeight: "56px",
        letterSpacing: "-0.96px",
        color: "#111827", // dark on light backgrounds
      },

      h3: {
        // Subsection headings: "Your Investment", "Start with a Simple Enquiry"
        fontSize: "32px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 600, // semibold
        lineHeight: "1.3",
        letterSpacing: "-0.64px",
        color: "#1f2937",
      },

      h4: {
        // Card/Form headings: "Just one last step to see your results"
        fontSize: "24px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600, // semibold
        lineHeight: "1.2",
        letterSpacing: "-0.48px",
        color: "#1e1e1e",
      },

      h5: {
        // Component headings, stat labels: "warranty provided", "Net Cost"
        fontSize: "20px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 500, // medium
        lineHeight: "1.3",
        letterSpacing: "-0.4px",
        color: "#111827",
      },

      h6: {
        // Small headings, labels: "Full Name", "Phone Number"
        fontSize: "16px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 500, // medium
        lineHeight: "1.4",
        letterSpacing: "-0.32px",
        color: "#374151",
      },
    },

    // Body text styles (Paragraph 1 - 4)
    paragraphs: {
      p1: {
        // Large body text: About section main content, process descriptions
        fontSize: "20px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 400, // regular
        lineHeight: "1.5",
        letterSpacing: "-0.4px",
        color: "#6b7280",
      },

      p2: {
        // Standard body text: Most content, descriptions, form labels
        fontSize: "16px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 400, // regular
        lineHeight: "1.5",
        letterSpacing: "-0.32px",
        color: "#374151",
      },

      p3: {
        // Small text: Helper text, labels like "total savings", "years payback"
        fontSize: "14px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 400, // regular
        lineHeight: "1.4",
        letterSpacing: "0",
        color: "#9ca3af",
      },

      p4: {
        // Caption/Micro text: Tooltips, tiny labels
        fontSize: "12px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600, // semibold
        lineHeight: "28px",
        letterSpacing: "0",
        color: "#ffffff",
      },
    },

    // Special text styles
    special: {
      // Large statistics: "25yrs", "100+", "90%"
      displayLarge: {
        fontSize: "64px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 600, // semibold
        lineHeight: "1.3",
        letterSpacing: "-1.28px",
        color: "#1f2937",
      },

      // Medium display: Savings amounts "₹4.3 Lakh", "42.6"
      displayMedium: {
        fontSize: "32px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 600, // semibold
        lineHeight: "1.3",
        letterSpacing: "-0.64px",
        color: "#ffa640",
      },

      // Section tags: "About Us", "Our Process"
      sectionTag: {
        fontSize: "24px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400, // regular
        lineHeight: "normal",
        letterSpacing: "-0.48px",
        color: "#ff9010",
      },

      // Hero subheading: "Predictable savings. Reliable power. Peace of mind."
      subheading: {
        fontSize: "16px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 400, // regular
        lineHeight: "normal",
        letterSpacing: "-0.32px",
        color: "#e5e7eb",
      },

      // Accent text in highlights: "No call centers. No confusion."
      highlight: {
        fontSize: "16px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 400, // regular
        lineHeight: "1.5",
        letterSpacing: "-0.32px",
        color: "#e8830f",
      },

      // Navigation links
      navLink: {
        fontSize: "16px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 400, // regular
        lineHeight: "normal",
        letterSpacing: "-0.32px",
        color: "#374151",
      },

      // Button text
      buttonText: {
        fontSize: "16px",
        fontFamily: "'Onest', sans-serif",
        fontWeight: 500, // medium
        lineHeight: "normal",
        letterSpacing: "-0.32px",
        color: "#f9fafb",
      },

      // Tab text active
      tabActive: {
        fontSize: "20px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500, // medium
        lineHeight: "1.3",
        letterSpacing: "0",
        color: "#f9fafb",
      },

      // Tab text inactive
      tabInactive: {
        fontSize: "20px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500, // medium
        lineHeight: "1.3",
        letterSpacing: "0",
        color: "#6b7280",
      },
    },
  },

  /**
   * ============================================================================
   * COLOR PALETTE
   * ============================================================================
   */
  colors: {
    // Brand primary (Orange)
    brand: {
      primary: "#ff9010",
      primaryDark: "#e8830f",
      primaryLight: "#ffa640",
      primaryLighter: "#ffb55f",
      primaryPale: "#fff4e7",
      primaryBorder: "#ffddb5",
    },

    // Brand secondary (Green)
    accent: {
      green: "#64d240",
      greenMedium: "#447e31",
      greenDark: "rgba(37, 69, 27, 0.3)",
    },

    // Text colors
    text: {
      primary: "#111827",
      secondary: "#1f2937", 
      tertiary: "#374151",
      body: "#6b7280",
      muted: "#9ca3af",
      placeholder: "#b3b3b3",
      light: "#757575",
      white: "#f9fafb",
    },

    // Background colors
    bg: {
      white: "#ffffff",
      lightest: "#f9fafb",
      light: "#f3f4f6",
      medium: "#e5e7eb",
      neutral: "#e9e9e9",
    },

    // Border colors
    border: {
      light: "#f9fafb",
      medium: "#e5e7eb",
      DEFAULT: "#d9d9d9",
      dark: "#d1d5db",
      darker: "#4b5563",
    },

    // Utility colors
    overlay: {
      heroGradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 61.784%, #000000 100%)",
      orangeTint: "rgba(251, 174, 86, 0.8)",
      highlightGradient: "linear-gradient(to right, rgba(255, 144, 16, 0.3) 0.693%, rgba(255, 144, 16, 0) 3.635%)",
    },

    // Special use
    special: {
      black: "#000000",
      white: "#ffffff",
      info: "#eaefff",
    },
  },

  /**
   * ============================================================================
   * SPACING SCALE
   * ============================================================================
   */
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "40px",
    "4xl": "48px",
    "5xl": "64px",
  },

  /**
   * ============================================================================
   * LAYOUT
   * ============================================================================
   */
  layout: {
    container: "1280px", // Main content width
    contentMax: "700px", // Paragraph max width
    formWidth: "572px",
    cardWidth: "510px",
    heroHeight: "698px",
  },

  /**
   * ============================================================================
   * BORDER RADIUS
   * ============================================================================
   */
  radius: {
    sm: "4px", // Buttons, small elements
    md: "8px", // Inputs, navigation
    lg: "12px", // Forms, modals
    xl: "16px", // Cards
    pill: "99px", // Number badges
    full: "999px", // Fully rounded (tabs)
  },

  /**
   * ============================================================================
   * SHADOWS
   * ============================================================================
   */
  shadows: {
    card: "0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)",
    tooltip: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
    sliderKnob: "0px 4px 8px 0px #bcccb7",
    tabInset: "inset 0px 0px 12px 0px rgba(0, 0, 0, 0.04)",
  },

  /**
   * ============================================================================
   * COMPONENTS
   * ============================================================================
   */
  components: {
    // Primary CTA button
    buttonPrimary: {
      bg: "#ff9010",
      text: "#f9fafb",
      borderRadius: "4px",
      padding: "12px 16px",
      fontSize: "16px",
      fontWeight: 500,
    },

    // Secondary button
    buttonSecondary: {
      bg: "#f9fafb",
      text: "#447e31",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      borderRadius: "4px",
      padding: "12px 16px",
    },

    // Input fields
    input: {
      bg: "#ffffff",
      border: "#d9d9d9",
      borderFocus: "#4b5563",
      borderRadius: "8px",
      padding: "12px 16px",
      text: "#111827",
      placeholder: "#b3b3b3",
    },

    // Cards
    card: {
      bg: "#ffffff",
      border: "#f9fafb",
      borderRadius: "16px",
      shadow: "0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)",
      padding: "16px",
      minWidth: "300px",
      minHeight: "230px",
    },

    // Navigation
    nav: {
      bg: "#ffffff",
      borderRadius: "8px",
      padding: "8px",
      linkColor: "#374151",
      linkPadding: "8px 0",
    },

    // Tabs (Home/Commercial style)
    tabs: {
      containerBg: "#f3f4f6",
      containerBorder: "#d1d5db",
      borderRadius: "999px",
      padding: "6px",
      gap: "16px",
      activeBg: "#e8830f",
      activeText: "#f9fafb",
      inactiveText: "#6b7280",
    },

    // Slider
    slider: {
      trackBg: "#e6e6e6",
      trackHeight: "12px",
      fillBg: "#ffb55f",
      knobBg: "#fff4e7",
      knobBorder: "#ff9010",
      knobSize: "24px",
    },

    // Number badges (process steps)
    numberBadge: {
      bg: "#ff9010",
      text: "#f9fafb",
      border: "4px solid rgba(249, 250, 251, 0.3)",
      size: "68px",
      borderRadius: "99px",
      fontSize: "32px",
      fontWeight: 700,
    },

    // Highlight boxes with left border
    highlight: {
      bg: "linear-gradient(to right, rgba(255, 144, 16, 0.3) 0.693%, rgba(255, 144, 16, 0) 3.635%)",
      borderLeft: "4px solid #ff9010",
      textColor: "#e8830f",
      padding: "4px 16px",
    },

    // Stats display
    stat: {
      numberSize: "64px",
      numberColor: "#1f2937",
      labelSize: "20px",
      labelColor: "#6b7280",
      descriptionSize: "16px",
      descriptionColor: "#6b7280",
    },
  },
} as const;

export type Theme = typeof theme;

// Helper function to get typography style
export const getTypographyStyle = (variant: keyof typeof theme.typography.headings | keyof typeof theme.typography.paragraphs | keyof typeof theme.typography.special) => {
  if (variant in theme.typography.headings) {
    return theme.typography.headings[variant as keyof typeof theme.typography.headings];
  }
  if (variant in theme.typography.paragraphs) {
    return theme.typography.paragraphs[variant as keyof typeof theme.typography.paragraphs];
  }
  if (variant in theme.typography.special) {
    return theme.typography.special[variant as keyof typeof theme.typography.special];
  }
  return theme.typography.paragraphs.p2; // default
};
