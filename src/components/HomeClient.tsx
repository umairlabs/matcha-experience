"use client";

import Navbar from "@/components/Navbar";
import MatchaWrapper from "@/components/MatchaWrapper";
import DetailsSection from "@/components/DetailsSection";
import ProductShowcase from "@/components/ProductShowcase";
import SourcingSection from "@/components/SourcingSection";
import RitualSection from "@/components/RitualSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function HomeClient() {
  return (
    <main className="relative min-h-screen bg-[#050505] font-sans antialiased selection:bg-[#A4C639] selection:text-[#050505]">
      <Navbar />
      <MatchaWrapper />
      <DetailsSection />
      <ProductShowcase />
      <SourcingSection />
      <RitualSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
