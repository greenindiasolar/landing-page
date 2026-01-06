import { Box } from '@mui/material';
import { Navbar, Footer } from './components/layout';
import { Hero, AboutUs, WhyChooseUs, Calculator, OurPromise, OurProcess, Testimonials, FAQ, GetInTouch } from './components/sections';

function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Promise Section */}
      <OurPromise />

      {/* Calculator Section */}
      <Calculator />

      {/* Our Process Section */}
      <OurProcess />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Get In Touch Section */}
      <GetInTouch />

      {/* Footer */}
      <Footer />

    </Box>
  );
}


export default App;
