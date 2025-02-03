import React from "react";

const RecipeDetails = ({ recipeData }) => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-amber-500 font-sans min-h-screen p-8">
      {/* Recipe Container */}
      {recipeData.map((recipe, index) => (
        <div key={index} className="max-w-4xl mx-auto bg-white/95 shadow-2xl rounded-3xl mb-8 transform hover:scale-[1.01] transition duration-300 border-4 border-orange-400">
          {/* Recipe Name */}
          <h1 className="text-5xl font-black text-orange-900 p-8 border-b-4 border-orange-400 bg-orange-50">
            {recipe.name || "Untitled Recipe"}
          </h1>

          {/* Steps Section */}
          <div className="p-8 space-y-8">
            {recipe.steps.map((step, stepIndex) => (
              <div key={stepIndex} className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 transition duration-300">
                {/* Step Number */}
                <h2 className="text-3xl font-bold text-orange-700 mb-4">
                  Step {step.number}
                </h2>

                {/* Step Description */}
                <p className="text-gray-900 leading-relaxed text-xl">{step.step}</p>

                {/* Ingredients */}
                {step.ingredients.length > 0 && (
                  <div className="mt-6 bg-orange-50 p-6 rounded-xl border-2 border-orange-300 hover:bg-orange-100 transition duration-300">
                    <h3 className="font-bold text-2xl text-orange-700">Ingredients:</h3>
                    <ul className="list-disc list-inside text-gray-800 mt-3 text-lg">
                      {step.ingredients.map((ingredient, ingIndex) => (
                        <li key={ingIndex} className="hover:text-orange-600 transition duration-200">
                          {ingredient.localizedName || ingredient.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Equipment */}
                {step.equipment.length > 0 && (
                  <div className="mt-6 bg-amber-50 p-6 rounded-xl border-2 border-amber-300 hover:bg-amber-100 transition duration-300">
                    <h3 className="font-bold text-2xl text-orange-700">Equipment:</h3>
                    <ul className="list-disc list-inside text-gray-800 mt-3 text-lg">
                      {step.equipment.map((equipment, equipIndex) => (
                        <li key={equipIndex} className="hover:text-orange-600 transition duration-200">
                          {equipment.localizedName || equipment.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Timing */}
                {step.length && (
                  <div className="mt-6 text-orange-700 font-bold text-xl">
                    ⏱ Duration: {step.length.number} {step.length.unit}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeDetails;
