
import React from "react";
import { Check, AlertCircle } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-halal-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Check className="h-6 w-6 text-halal-orange" />
          <h1 className="text-2xl font-bold">HalalCheck</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-halal-orange transition-colors">
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-halal-orange transition-colors">
                À propos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
