
import React from "react";
import { CheckCircle, ShieldCheck, Award, Clock } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-halal-blue mb-4">
            À propos de HalalCheck
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            HalalCheck est un service innovant qui utilise l'intelligence artificielle pour 
            vous aider à déterminer si un produit est conforme aux normes halal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="halal-card flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-halal-blue" />
            </div>
            <h3 className="text-xl font-bold text-halal-blue mb-2">Simple</h3>
            <p className="text-gray-600">
              Entrez simplement la liste des ingrédients d'un produit et recevez instantanément une analyse.
            </p>
          </div>

          <div className="halal-card flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <Clock className="h-8 w-8 text-halal-orange" />
            </div>
            <h3 className="text-xl font-bold text-halal-blue mb-2">Rapide</h3>
            <p className="text-gray-600">
              Obtenez des résultats en quelques secondes grâce à notre système d'analyse optimisé.
            </p>
          </div>

          <div className="halal-card flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <ShieldCheck className="h-8 w-8 text-halal-success" />
            </div>
            <h3 className="text-xl font-bold text-halal-blue mb-2">Fiable</h3>
            <p className="text-gray-600">
              Notre algorithme est constamment mis à jour avec les dernières normes halal.
            </p>
          </div>

          <div className="halal-card flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-halal-blue" />
            </div>
            <h3 className="text-xl font-bold text-halal-blue mb-2">Précis</h3>
            <p className="text-gray-600">
              Une analyse détaillée qui identifie les ingrédients problématiques dans les produits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
