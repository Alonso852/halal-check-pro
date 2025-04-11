
import React from "react";
import { CheckCircle, XCircle, Loader, AlertCircle } from "lucide-react";

interface ResultDisplayProps {
  result: "halal" | "non halal" | null;
  ingredients: string;
  isLoading: boolean;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  result,
  ingredients,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="halal-card bg-blue-50 animate-pulse flex flex-col items-center p-8">
        <Loader className="h-12 w-12 text-halal-blue mb-4 animate-spin" />
        <h3 className="text-xl font-bold text-halal-blue mb-2">
          Analyse en cours...
        </h3>
        <p className="text-gray-600 text-center">
          Notre système analyse les ingrédients du produit. Merci de patienter.
        </p>
      </div>
    );
  }

  if (result === "halal") {
    return (
      <div className="halal-card bg-green-50 animate-bounce-in">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="h-8 w-8 text-halal-success" />
          <h3 className="text-xl font-bold text-halal-blue">
            Ce produit est HALAL
          </h3>
        </div>
        <p className="text-gray-600 mb-4">
          Selon notre analyse, les ingrédients que vous avez fournis sont conformes aux normes halal.
        </p>
        <div className="bg-white p-4 rounded-lg border border-green-200 mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Ingrédients analysés :</h4>
          <p className="text-gray-600">{ingredients}</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => window.location.href = "#check-form"}
            className="halal-btn-secondary"
          >
            Nouvelle analyse
          </button>
        </div>
      </div>
    );
  }

  if (result === "non halal") {
    return (
      <div className="halal-card bg-red-50 animate-bounce-in">
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="h-8 w-8 text-halal-error" />
          <h3 className="text-xl font-bold text-halal-blue">
            Ce produit n'est PAS halal
          </h3>
        </div>
        <p className="text-gray-600 mb-4">
          Selon notre analyse, les ingrédients que vous avez fournis ne sont pas conformes aux normes halal.
        </p>
        <div className="bg-white p-4 rounded-lg border border-red-200 mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Ingrédients analysés :</h4>
          <p className="text-gray-600">{ingredients}</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => window.location.href = "#check-form"}
            className="halal-btn-secondary"
          >
            Nouvelle analyse
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="halal-card bg-orange-50 animate-bounce-in">
      <div className="flex items-center gap-3 mb-4">
        <AlertCircle className="h-8 w-8 text-halal-orange" />
        <h3 className="text-xl font-bold text-halal-blue">
          Une erreur est survenue
        </h3>
      </div>
      <p className="text-gray-600">
        Nous n'avons pas pu déterminer si ce produit est halal. Veuillez vérifier la liste des ingrédients et réessayer.
      </p>
    </div>
  );
};

export default ResultDisplay;
