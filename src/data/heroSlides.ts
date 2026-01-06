import HeroImage1 from '../assets/Images/Hero/Hero-1.webp';
import HeroImage2 from '../assets/Images/Hero/Hero-2.webp';
import HeroImage3 from '../assets/Images/Hero/Hero-3.webp';
import HeroImage4 from '../assets/Images/Hero/hero-4.webp';

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
        headline: 'Your Electricity Bill Should Not Control Your Life ',
        subheadline: 'Break free from rising power costs. Generate your own electricity with smart solar solutions from Green India Solar Energy.',
        primaryButton: {
            text: 'Book a FREE Consultation',
            link: '#quote',
        },
        secondaryButton: {
            text: 'Services',
            link: '#explore',
        },
        backgroundImage: HeroImage1,
        bottomText: 'Trusted by Homes & Businesses Across Andhra Pradesh ',
    },
    {
        id: 2,
        tag: 'Built with engineering precision. Delivered with accountability.',
        headline: 'India’s Fastest-Growing Solar Installation Network',
        subheadline: 'Government-approved installers. Industry-grade equipment. Professional execution.',
        primaryButton: {
            text: 'Book a FREE Consultation',
            link: '#calculator',
        },
        secondaryButton: {
            text: 'Services',
            link: '#learn',
        },
        backgroundImage: HeroImage2,
        bulletPoints: [
            { icon: 'check-circle', text: 'Govt Approved' },
            { icon: 'shield-check', text: 'Warranty Assured' },
            { icon: 'thumbs-up', text: 'Safe Installation' },
            { icon: 'badge-check', text: 'Quality Checked' },
        ],
    },
    {
        id: 3,
        tag: 'Built with engineering precision. Delivered with accountability.',
        headline: 'Solar Is More Affordable Than You Think ',
        subheadline: 'Start with transparent pricing and government subsidy support — no surprises, no hidden  costs. ',
        primaryButton: {
            text: 'Book a FREE Consultation',
            link: '#products',
        },
        secondaryButton: {
            text: 'Services',
            link: '#guarantee',
        },
        backgroundImage: HeroImage3,
        bulletPoints: [
            { icon: 'clock', text: 'PM Scheme' },
            { icon: 'credit-card', text: 'EMI Options Available' },
            { icon: 'headset', text: 'Assistance Included' },
        ],
    },
    {
        id: 4,
        tag: 'Lower bills today. Independence tomorrow. ',
        headline: 'Install Once. Save for 25+ Years. ',
        subheadline: 'A rooftop solar system isn’t a purchase — it’s a long-term financial upgrade',
        primaryButton: {
            text: 'Book a FREE Consultation',
            link: '#consultation',
        },
        secondaryButton: {
            text: 'Services',
            link: '#contact',
        },
        backgroundImage: HeroImage4,
        bottomText: 'Turn your rooftop into an income-saving asset. ',
    },
];

export default heroSlides;
