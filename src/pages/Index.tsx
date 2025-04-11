
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import IngredientForm from "../components/IngredientForm";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <IngredientForm />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
