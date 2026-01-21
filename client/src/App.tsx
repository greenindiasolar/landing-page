import { Box } from "@mui/material";
import { Navbar, Footer } from "./components/layout";
import {
  Hero,
  AboutUs,
  WhyChooseUs,
  Calculator,
  OurPromise,
  OurProcess,
  Testimonials,
  Gallery,
  FAQ,
  GetInTouch,
} from "./components/sections";
import {
  ContactFormProvider,
  ContactFormModal,
  FloatingContactWidget,
} from "./components/common";

function App() {
  return (
    <ContactFormProvider>
      <Box sx={{ minHeight: "100vh" }}>
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

        {/* Gallery Section */}
        <Gallery />

        {/* FAQ Section */}
        <FAQ />

        {/* Get In Touch Section */}
        <GetInTouch />

        {/* Footer */}
        <Footer />
      </Box>

      {/* Contact Form Modal */}
      <ContactFormModal />

      {/* Floating Contact Widget */}
      <FloatingContactWidget />
    </ContactFormProvider>
  );
}

export default App;
