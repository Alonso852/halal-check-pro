
/**
 * API utility to predict if a product is halal based on ingredients
 * In a real implementation, this would call the Flask API at http://127.0.0.1:5000/predict
 */

// This is a mock function for the frontend only.
// In a real application, this would make an actual API call.
export const predictHalal = async (ingredients: string): Promise<"halal" | "non halal"> => {
  console.log("Predicting for ingredients:", ingredients);
  
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // For demo purposes only: randomly return halal or non-halal
  // In a real application, we would make a fetch call to the API
  // and return the actual result
  /*
  const response = await fetch('http://127.0.0.1:5000/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description: ingredients }),
  });
  
  const data = await response.json();
  return data.result;
  */
  
  // Demo logic: if ingredients contain certain keywords, return non-halal
  const nonHalalKeywords = ['alcool', 'porc', 'gélatine', 'vin', 'bière', 'whisky', 'rhum'];
  
  const lowerCaseIngredients = ingredients.toLowerCase();
  
  for (const keyword of nonHalalKeywords) {
    if (lowerCaseIngredients.includes(keyword)) {
      return "non halal";
    }
  }
  
  return Math.random() > 0.3 ? "halal" : "non halal";
};
