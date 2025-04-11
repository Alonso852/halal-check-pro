
import React from "react";
import { Check, ExternalLink } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-halal-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Check className="h-6 w-6 text-halal-orange" />
              <h2 className="text-xl font-bold">HalalCheck</h2>
            </div>
            <p className="text-blue-100 mb-4">
              Vérifiez instantanément si vos produits alimentaires sont conformes aux normes halal grâce à notre technologie d'intelligence artificielle.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-blue-100 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> Accueil
                </a>
              </li>
              <li>
                <a href="#check-form" className="text-blue-100 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> Vérifier un produit
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> À propos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos de HalalCheck</h3>
            <p className="text-blue-100 mb-4">
              HalalCheck utilise des technologies avancées pour déterminer si un produit est halal en analysant sa composition et ses ingrédients.
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} HalalCheck. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
