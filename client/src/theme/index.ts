/**
 * Green India Solar Energy - MUI Theme
 * Based on theme.config.ts design system
 */

import { createTheme } from '@mui/material/styles';

// Create MUI theme based on the design system
const theme = createTheme({
    palette: {
        primary: {
            main: '#ff9010',
            dark: '#e8830f',
            light: '#ffa640',
            contrastText: '#f9fafb',
        },
        secondary: {
            main: '#64d240',
            dark: '#447e31',
            light: '#64d240',
            contrastText: '#ffffff',
        },
        text: {
            primary: '#111827',
            secondary: '#374151',
            disabled: '#9ca3af',
        },
        background: {
            default: '#ffffff',
            paper: '#f9fafb',
        },
        grey: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
        },
    },
    typography: {
        fontFamily: "'Onest', sans-serif",
        // H1 - Hero main heading
        h1: {
            fontSize: '56px',
            fontFamily: "'Onest', sans-serif",
            fontWeight: 600,
            lineHeight: '56px',
            letterSpacing: '-1.12px',
        },
        // H2 - Section headings
        h2: {
            fontSize: '48px',
            fontFamily: "'Onest', sans-serif",
            fontWeight: 600,
            lineHeight: '56px',
            letterSpacing: '-0.96px',
        },
        // H3 - Subsection headings
        h3: {
            fontSize: '32px',
            fontFamily: "'Onest', sans-serif",
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: '-0.64px',
        },
        // H4 - Card/Form headings
        h4: {
            fontSize: '24px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '-0.48px',
        },
        // H5 - Component headings
        h5: {
            fontSize: '20px',
            fontFamily: "'Onest', sans-serif",
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '-0.4px',
        },
        // H6 - Small headings, labels
        h6: {
            fontSize: '16px',
            fontFamily: "'Onest', sans-serif",
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: '-0.32px',
        },
        // Body1 - Standard body text (P2)
        body1: {
            fontSize: '16px',
            fontFamily: "'Onest', sans-serif",
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.32px',
        },
        // Body2 - Small text (P3)
        body2: {
            fontSize: '14px',
            fontFamily: "'Onest', sans-serif",
            fontWeight: 400,
            lineHeight: 1.4,
            letterSpacing: '0',
        },
        // Subtitle1 - Large body text (P1)
        subtitle1: {
            fontSize: '20px',
            fontFamily: "'Onest', sans-serif",
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.4px',
        },
        // Subtitle2 - Section tags
        subtitle2: {
            fontSize: '24px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-0.48px',
        },
        // Caption - Micro text (P4)
        caption: {
            fontSize: '12px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            lineHeight: '28px',
            letterSpacing: '0',
        },
        // Button text
        button: {
            fontSize: '16px',
            fontFamily: "'Onest', sans-serif",
            fontWeight: 500,
            lineHeight: 'normal',
            letterSpacing: '-0.32px',
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 8,
    },
    shadows: [
        'none',
        '0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)',
        '0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
    ],
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                    backgroundColor: '#ffffff',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    padding: '12px 16px',
                    textTransform: 'none',
                    fontWeight: 500,
                },
                containedPrimary: {
                    backgroundColor: '#ff9010',
                    color: '#f9fafb',
                    '&:hover': {
                        backgroundColor: '#e8830f',
                    },
                },
                containedSecondary: {
                    backgroundColor: '#f9fafb',
                    color: '#447e31',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                        backgroundColor: '#f3f4f6',
                    },
                },
                outlinedPrimary: {
                    borderColor: '#ff9010',
                    color: '#ff9010',
                    '&:hover': {
                        borderColor: '#e8830f',
                        backgroundColor: 'rgba(255, 144, 16, 0.04)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                            borderColor: '#d9d9d9',
                        },
                        '&:hover fieldset': {
                            borderColor: '#4b5563',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#4b5563',
                        },
                    },
                    '& .MuiInputBase-input': {
                        padding: '12px 16px',
                        color: '#111827',
                        '&::placeholder': {
                            color: '#b3b3b3',
                            opacity: 1,
                        },
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '16px',
                    border: '1px solid #f9fafb',
                    boxShadow: '0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)',
                    padding: '16px',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '1280px !important',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: '999px',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontSize: '20px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    color: '#6b7280',
                    '&.Mui-selected': {
                        backgroundColor: '#e8830f',
                        color: '#f9fafb',
                        borderRadius: '999px',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f3f4f6',
                    borderRadius: '999px',
                    padding: '6px',
                    border: '1px solid #d1d5db',
                },
                indicator: {
                    display: 'none',
                },
            },
        },
    },
});

// Custom design tokens from theme.config.ts for direct usage
export const designTokens = {
    colors: {
        brand: {
            primary: '#ff9010',
            primaryDark: '#e8830f',
            primaryLight: '#ffa640',
            primaryLighter: '#ffb55f',
            primaryPale: '#fff4e7',
            primaryBorder: '#ffddb5',
        },
        accent: {
            green: '#64d240',
            greenMedium: '#447e31',
            greenDark: 'rgba(37, 69, 27, 0.3)',
        },
        text: {
            primary: '#111827',
            secondary: '#1f2937',
            tertiary: '#374151',
            body: '#6b7280',
            muted: '#9ca3af',
            placeholder: '#b3b3b3',
            light: '#757575',
            white: '#f9fafb',
        },
        bg: {
            white: '#ffffff',
            lightest: '#f9fafb',
            light: '#f3f4f6',
            medium: '#D1D5DB',
            neutral: '#e9e9e9',
        },
        border: {
            light: '#f9fafb',
            medium: '#D1D5DB',
            default: '#d9d9d9',
            dark: '#d1d5db',
            darker: '#4b5563',
        },
        overlay: {
            heroGradient: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 61.784%, #000000 100%)',
            orangeTint: 'rgba(251, 174, 86, 0.8)',
            highlightGradient: 'linear-gradient(to right, rgba(255, 144, 16, 0.3) 0.693%, rgba(255, 144, 16, 0) 3.635%)',
        },
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '64px',
    },
    layout: {
        container: '1280px',
        contentMax: '700px',
        formWidth: '572px',
        cardWidth: '510px',
        heroHeight: '698px',
    },
    radius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        pill: '99px',
        full: '999px',
    },
    shadows: {
        card: '0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)',
        tooltip: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        sliderKnob: '0px 4px 8px 0px #bcccb7',
        tabInset: 'inset 0px 0px 12px 0px rgba(0, 0, 0, 0.04)',
    },
};

export default theme;
