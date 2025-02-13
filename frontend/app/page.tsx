"use client";

import { useEffect, useState } from "react";
import { getSampleData } from "../services/api";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectInfo } from "@/components/project-info";
import { SearchSection } from "@/components/search-section";
import { DailyMeal } from "@/components/daily-meal";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getSampleData().then((data) => setMessage(data.message));
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProjectInfo />
      <SearchSection />
      <DailyMeal />
      <ContactSection />

      {/* Backend Data Display */}
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold">Next.js & Django Integration</h1>
        <p className="text-lg">Backend Response: {message}</p>
      </div>
    </main>
  );
}
