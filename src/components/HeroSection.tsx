
import React from "react";
import { CheckCircle, ShoppingBag, Utensils } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-halal-blue mb-4">
              Vérifiez si vos produits sont <span className="text-halal-orange">Halal</span>
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Entrez la liste des ingrédients de votre produit et découvrez instantanément 
              s'il est conforme aux normes halal grâce à notre intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#check-form" className="halal-btn-primary">
                Vérifier maintenant
              </a>
              <a href="#about" className="halal-btn-secondary">
                En savoir plus
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 bg-halal-orange rounded-full p-4 shadow-lg">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-halal-blue rounded-full p-4 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center bg-blue-50 rounded-xl p-4">
                    <ShoppingBag className="h-10 w-10 text-halal-blue mb-2" />
                    <span className="text-center font-medium">Scannez vos produits</span>
                  </div>
                  <div className="flex flex-col items-center bg-orange-50 rounded-xl p-4">
                    <CheckCircle className="h-10 w-10 text-halal-orange mb-2" />
                    <span className="text-center font-medium">Vérification rapide</span>
                  </div>
                  <div className="flex flex-col items-center bg-green-50 rounded-xl p-4">
                    <CheckCircle className="h-10 w-10 text-halal-success mb-2" />
                    <span className="text-center font-medium">Résultats fiables</span>
                  </div>
                  <div className="flex flex-col items-center bg-blue-50 rounded-xl p-4">
                    <ShoppingBag className="h-10 w-10 text-halal-blue mb-2" />
                    <span className="text-center font-medium">Base de données complète</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
