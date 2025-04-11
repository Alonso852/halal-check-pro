
import React, { useState } from "react";
import { Search, Loader } from "lucide-react";
import ResultDisplay from "./ResultDisplay";
import { predictHalal } from "../utils/predictApi";

const IngredientForm: React.FC = () => {
  const [ingredients, setIngredients] = useState("");
  const [result, setResult] = useState<"halal" | "non halal" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredients.trim()) return;

    setIsLoading(true);
    setHasSubmitted(true);
    
    try {
      // In a real app, this would call the actual API
      const prediction = await predictHalal(ingredients);
      setResult(prediction);
    } catch (error) {
      console.error("Error predicting:", error);
      // Set a default for demo purposes
      setResult("non halal");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="check-form" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-halal-blue mb-4">
            Vérifier un produit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entrez la liste complète des ingrédients de votre produit pour savoir s'il est halal.
            Plus votre description est détaillée, plus notre analyse sera précise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="halal-card mb-8">
            <div className="mb-6">
              <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">
                Ingrédients ou description du produit
              </label>
              <textarea
                id="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="halal-input min-h-[150px]"
                placeholder="Ex: Farine de blé, eau, levure, sel, huile de palme, E471, arôme naturel..."
                required
              />
            </div>
            <button 
              type="submit" 
              className="halal-btn-primary w-full flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  Vérification en cours...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  Vérifier
                </>
              )}
            </button>
          </form>

          {hasSubmitted && (
            <ResultDisplay 
              result={result} 
              ingredients={ingredients} 
              isLoading={isLoading} 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default IngredientForm;
