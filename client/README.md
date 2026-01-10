# Green India Solar Energy - Landing Page

A modern, responsive landing page for Green India Solar Energy - India's fastest-growing solar energy network. Built with React, TypeScript, and Material-UI to provide an exceptional user experience for potential solar customers.

![React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?logo=vite)
![Material-UI](https://img.shields.io/badge/MUI-7.3.6-007fff?logo=mui)

## 🌟 Features

- **Interactive Solar Calculator** - Real-time calculations for residential and commercial solar installations
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Auto-rotating Hero Carousel** - Engaging visual presentation with smooth transitions
- **Lead Capture System** - Session-based user information storage
- **Animated Statistics** - CountUp animations for key metrics
- **6-Step Process Timeline** - Visual journey from enquiry to installation
- **Customer Testimonials** - Interactive carousel with image galleries
- **FAQ Section** - Accordion-style answers to common questions
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🚀 Tech Stack

### Core
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool and dev server

### UI & Styling
- **Material-UI (MUI) 7.3.6** - Component library
- **Emotion** - CSS-in-JS styling
- **Styled Components 6.1.19** - Component styling

### Additional Libraries
- **React CountUp 6.5.3** - Animated statistics
- **Lucide React 0.562.0** - Icon library
- **MUI Icons Material 7.3.6** - Material Design icons

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd Green-solar-web

# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

The development server will start at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── common/              # Reusable components
│   │   └── Button/
│   ├── layout/              # Layout components
│   │   ├── Navbar/
│   │   └── Footer/
│   └── sections/            # Page sections
│       ├── Hero/
│       ├── AboutUs/
│       ├── WhyChooseUs/
│       ├── OurPromise/
│       ├── Calculator/      # Solar calculator
│       ├── OurProcess/
│       ├── Testimonials/
│       ├── FAQ/
│       └── GetInTouch/
├── assets/
│   └── Images/              # Image assets
├── data/
│   └── heroSlides.ts        # Hero carousel data
├── hooks/
│   └── useInterval.ts       # Custom hooks
├── utils/
│   └── calculatorUtils.ts   # Calculator logic
├── theme/
│   └── index.ts             # MUI theme & design tokens
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## 🧮 Solar Calculator

The calculator provides real-time estimates for solar installations:

### Features
- **Customer Type Toggle** - Residential vs Commercial
- **Pincode Input** - Localized data support
- **Bill Slider** - ₹300 to ₹10,000 range
- **Real-time Calculations**:
  - System size (kW)
  - Annual savings
  - System price
  - Government subsidies
  - Discounts
  - Net cost
  - 25-year savings projection
  - ROI timeline

### Calculation Constants
- Price per kW: ₹60,000
- Units per kW/year: 1,440
- Roof space per kW: 80 sq ft
- Flat discount: ₹22,000

### Subsidies (Residential)
- 1 kW: ₹30,000
- 2 kW: ₹60,000
- 3+ kW: ₹78,000

## 🎨 Design System

### Colors
- **Primary**: #ff9010 (Orange)
- **Secondary**: #64d240 (Green)
- **Text**: #111827 (Dark Gray)
- **Background**: #ffffff (White)

### Typography
- **Headings**: Onest
- **Body**: Onest
- **Special**: Inter

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📄 Page Sections

1. **Navbar** - Fixed navigation with CTA
2. **Hero** - Auto-rotating carousel (4 slides)
3. **About Us** - Company introduction
4. **Why Choose Us** - Animated statistics
5. **Our Promise** - Core commitments
6. **Calculator** - Interactive solar calculator
7. **Our Process** - 6-step timeline
8. **Testimonials** - Customer reviews
9. **FAQ** - Common questions
10. **Get In Touch** - Contact CTA
11. **Footer** - Links and newsletter

## 🔧 Configuration

### TypeScript
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific config
- `tsconfig.node.json` - Node-specific config

### Vite
Configuration in `vite.config.ts`

### ESLint
Configuration in `eslint.config.js`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

All rights reserved © 2025 Green India Solar Energy

## 👥 Contact

For inquiries about this project, please contact Green India Solar Energy.

---

**Built with ❤️ for a sustainable future**
