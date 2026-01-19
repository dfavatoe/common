import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import StorySection from "@/components/landing/StorySection";
import DayNightSection from "@/components/landing/DayNightSection";
import MenuSection from "@/components/landing/MenuSection";
import GuestChefSection from "@/components/landing/GuestChefSection";
import GallerySection from "@/components/landing/GallerySection";
import InfoSection from "@/components/landing/InfoSection";
import FooterSection from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <DayNightSection />
      <MenuSection />
      <GuestChefSection />
      <GallerySection />
      <InfoSection />
      <FooterSection />
    </main>
  );
}
