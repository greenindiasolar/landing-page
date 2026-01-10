import HeroImage1 from '../assets/Images/Hero/Hero-1.webp';
import HeroImage2 from '../assets/Images/Hero/Hero-2.webp';
import HeroImage3 from '../assets/Images/Hero/Hero-3.webp';
// import HeroImage4 from '../assets/Images/Hero/hero-4.webp';

export interface HeroSlide {
    id: number;
    tag: string;
    headline: string;
    subheadline: string;
    bottomText?: string;
    bulletPoints?: Array<{
        icon: string;
        text: string;
    }>;
    primaryButton: {
        text: string;
        link: string;
    };
    secondaryButton: {
        text: string;
        link: string;
    };
    backgroundImage: string;
}

export const heroSlides: HeroSlide[] = [
    {
        id: 1,
        tag: 'Predictable savings. Reliable power. Peace of mind.',
        headline: 'Install Solar at Just ₹1,429/Month',
        subheadline: 'Get a personalized solar system with 100% financing Flexible tenures available from 6 to 120 months',
        primaryButton: {
            text: 'Schedule a FREE Visit',
            link: '#quote',
        },
        secondaryButton: {
            text: 'Services',
            link: '#explore',
        },
        backgroundImage: HeroImage3,
        bottomText: 'Trusted by Homes & Businesses Across Andhra Pradesh ',
    },
    {
        id: 2,
        tag: 'Built with engineering precision. Delivered with accountability.',
        headline: 'India’s Fastest-Growing Solar Installation Network',
        subheadline: 'Government-approved installers. Industry-grade equipment. Professional execution.',
        primaryButton: {
            text: 'Schedule a FREE Visit',
            link: '#calculator',
        },
        secondaryButton: {
            text: 'Services',
            link: '#learn',
        },
        backgroundImage: HeroImage1,
        bulletPoints: [
            { icon: 'home', text: 'Residential Rooftops' },
            { icon: 'factory', text: 'Industrial Rooftops' },
            { icon: 'building-2', text: 'Commercial Rooftops' },
            { icon: 'zap', text: 'Ground Mounted Solar' },
        ],
    },
    // {
    //     id: 3,
    //     tag: 'Built with engineering precision. Delivered with accountability.',
    //     headline: 'Solar Is More Affordable Than You Think ',
    //     subheadline: 'Start with transparent pricing and government subsidy support — no surprises, no hidden  costs. ',
    //     primaryButton: {
    //         text: 'Schedule a FREE Visit',
    //         link: '#products',
    //     },
    //     secondaryButton: {
    //         text: 'Services',
    //         link: '#guarantee',
    //     },
    //     backgroundImage: HeroImage3,
    //     bulletPoints: [
    //         { icon: 'clock', text: 'PM Scheme' },
    //         { icon: 'credit-card', text: 'EMI Options Available' },
    //         { icon: 'headset', text: 'Assistance Included' },
    //     ],
    // },
    {
        id: 4,
        tag: 'Lower bills today. Independence tomorrow. ',
        headline: 'Save ₹1 Lakh on rooftop solar with the right solar partner. ',
        subheadline: 'A rooftop solar system isn’t a purchase — it’s a long-term financial upgrade',
        primaryButton: {
            text: 'Schedule a FREE Visit',
            link: '#consultation',
        },
        secondaryButton: {
            text: 'Services',
            link: '#contact',
        },
        backgroundImage: HeroImage2,
        bulletPoints: [
            { icon: 'badge-indian-rupee', text: '₹22k green india solar discount ' },
            { icon: 'banknote', text: '₹78k government subsidy' },
        ],
    },
];

export default heroSlides;
