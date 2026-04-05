"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { CheckCircle, Shield, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="solid"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Services",          id: "services"},
        {
          name: "Process",          id: "process"},
        {
          name: "Gallery",          id: "gallery"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="ClearDetail Windows"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars"}}
      title="Professional Exterior Window Cleaning for Homes"
      description="We clean and detail every exterior window, frame, and sill so your home looks brighter, cleaner, and better maintained."
      buttons={[
        {
          text: "Get Free Quote",          href: "#contact"},
        {
          text: "Call Now",          href: "tel:5550123456"},
        {
          text: "Text Us",          href: "sms:5550123456"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-decorating-front-door-outside_23-2150562139.jpg",          imageAlt: "Clean sparkling residential windows"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150358973.jpg?_wi=1",          imageAlt: "Window glass cleaning"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-green-grass-covered-wet-spider-web_181624-13042.jpg?_wi=1",          imageAlt: "Window frame detailing"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150359027.jpg?_wi=1",          imageAlt: "Window sill cleaning"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150358977.jpg?_wi=1",          imageAlt: "Second story window cleaning"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/house-backyard-street-color-back_1203-4994.jpg",          imageAlt: "Full exterior window detail"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Exterior Window Glass Cleaning",          description: "Hand-cleaned for a streak-free, crystal-clear finish removing all grime.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150358973.jpg?_wi=2",            imageAlt: "Glass cleaning"},
          items: [
            {
              text: "Streak-free finish",              icon: Sparkles,
            },
            {
              text: "Edge detailing",              icon: CheckCircle,
            },
            {
              text: "Spot attention",              icon: CheckCircle,
            },
          ],
          reverse: false,
        },
        {
          title: "Window Frame Detailing",          description: "Detailed frame wipe-down to remove cobwebs and environmental buildup.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-green-grass-covered-wet-spider-web_181624-13042.jpg?_wi=2",            imageAlt: "Frame cleaning"},
          items: [
            {
              text: "Frame wipe-down",              icon: CheckCircle,
            },
            {
              text: "Corner detail attention",              icon: CheckCircle,
            },
            {
              text: "Surface brightening",              icon: CheckCircle,
            },
          ],
          reverse: true,
        },
        {
          title: "Sill / Ledge Cleaning",          description: "Cleaning outer ledges where dirt, pollen, and debris collect over time.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150359027.jpg?_wi=2",            imageAlt: "Sill cleaning"},
          items: [
            {
              text: "Debris removal",              icon: CheckCircle,
            },
            {
              text: "Residue wipe-down",              icon: CheckCircle,
            },
            {
              text: "Cobweb removal",              icon: CheckCircle,
            },
          ],
          reverse: false,
        },
        {
          title: "Second-Story Exterior Windows",          description: "Safe, professional cleaning for those hard-to-reach high windows.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150358977.jpg?_wi=2",            imageAlt: "Second story reach"},
          items: [
            {
              text: "High window expertise",              icon: CheckCircle,
            },
            {
              text: "Safety-focused",              icon: Shield,
            },
            {
              text: "Detailed finish",              icon: CheckCircle,
            },
          ],
          reverse: true,
        },
      ]}
      title="Comprehensive Exterior Detailing"
      description="We specialize in more than just the glass—we ensure your entire exterior window area is pristine."
    />
  </div>

  <div id="process" data-section="process">
      <TextAbout
      useInvertedBackground={false}
      title="Our Simple 3-Step Process"
      buttons={[
        {
          text: "Request a Quote",          href: "#contact"},
      ]}
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="full-width-top-items-bottom-row"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          name: "Front Window Detail",          price: "Before & After",          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-carpenter-working-with-experienced-man_329181-15697.jpg"},
        {
          id: "2",          name: "Second-Story Windows",          price: "Before & After",          imageSrc: "http://img.b2bpic.net/free-photo/people-installing-window-curtain_53876-30624.jpg"},
        {
          id: "3",          name: "Frame Detail Focus",          price: "Before & After",          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150359028.jpg"},
        {
          id: "4",          name: "Streak-Free Finish",          price: "Before & After",          imageSrc: "http://img.b2bpic.net/free-photo/photo-wall-texture-pattern_58702-12601.jpg"},
        {
          id: "5",          name: "Sill & Ledge Refresh",          price: "Before & After",          imageSrc: "http://img.b2bpic.net/free-photo/focused-woman-using-gadget-opening-shades_259150-57137.jpg"},
        {
          id: "6",          name: "Overall Curb Appeal",          price: "Before & After",          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150359026.jpg"},
      ]}
      title="See the Difference"
      description="Evidence of our meticulous detailing process."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah Miller",          role: "Homeowner",          company: "Oak Creek",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-making-ok-sign_1368-6336.jpg"},
        {
          id: "2",          name: "James Henderson",          role: "Homeowner",          company: "Riverwood",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150359032.jpg"},
        {
          id: "3",          name: "Linda Chen",          role: "Homeowner",          company: "Westside",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-talking-phone-home_23-2148990136.jpg"},
        {
          id: "4",          name: "Mark Stevens",          role: "Homeowner",          company: "Pine Ridge",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-model_158538-17986.jpg"},
        {
          id: "5",          name: "Elena Rodriguez",          role: "Homeowner",          company: "Northvale",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-servant-doing-chores-around-house_23-2149508116.jpg"},
      ]}
      kpiItems={[
        {
          value: "100+",          label: "Homes Polished"},
        {
          value: "5.0",          label: "Avg Rating"},
        {
          value: "24h",          label: "Fast Quote"},
      ]}
      title="What Homeowners Say"
      description="Our clients enjoy crystal-clear windows and polished home exteriors."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "What's included in your exterior window cleaning?",          content: "We clean the exterior glass plus the frames and sills/ledges for a complete, detailed finish."},
        {
          id: "2",          title: "Do you clean second-story windows?",          content: "Yes, we handle all hard-to-reach exterior windows using safe professional tools."},
        {
          id: "3",          title: "How often should windows be cleaned?",          content: "Most homes benefit from a professional detail every 3-6 months depending on environmental factors."},
        {
          id: "4",          title: "Do I need to be home?",          content: "No, as long as exterior access is available and we've confirmed the appointment."},
        {
          id: "5",          title: "Are estimates free?",          content: "Yes, we provide fast, no-obligation estimates via phone, text, or photo review."},
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Everything you need to know about our professional exterior cleaning services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      text="Ready to brighten your home? Request your free exterior window detailing quote today."
      buttons={[
        {
          text: "Request Free Quote",          href: "#form-anchor"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="ClearDetail Windows"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "Services",              href: "#services"},
            {
              label: "About",              href: "#about"},
            {
              label: "Gallery",              href: "#gallery"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2025 ClearDetail Windows. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
