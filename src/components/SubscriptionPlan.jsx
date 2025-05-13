import React, { useState } from "react";

const SubscriptionPlan = () => {
  const [studyLength, setStudyLength] = useState("");
  const [adventure, setAdventure] = useState("");
  const [reviewers, setReviewers] = useState(9);

  const chooseStudyLength = (choice) => {
    setStudyLength(choice);
  };

  const chooseAdventure = (choice) => {
    setAdventure(choice);
  };

  const handleSliderChange = (e) => {
    setReviewers(parseInt(e.target.value));
  };

  // Calculate price
  let price = 0;
  if (studyLength === "short") {
    price += reviewers * 40;
  } else if (studyLength === "long") {
    price += reviewers * 70;
  }
  if (adventure === "self") {
    price += 200;
  } else if (adventure === "expert") {
    price += 500;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-sm uppercase text-gray-400">
          Pay only for what you use
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Options */}
        <div className="space-y-6">
          {/* Study Length */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Study Length</h3>
            <div className="flex space-x-4">
              <div
                className={`p-2 rounded-lg cursor-pointer border-2 ${
                  studyLength === "short"
                    ? "border-blue-500"
                    : "border-transparent hover:border-gray-500"
                }`}
                onClick={() => chooseStudyLength("short")}
              >
                Short
              </div>
              <div
                className={`p-2 rounded-lg cursor-pointer border-2 ${
                  studyLength === "long"
                    ? "border-blue-500"
                    : "border-transparent hover:border-gray-500"
                }`}
                onClick={() => chooseStudyLength("long")}
              >
                Long
              </div>
            </div>
          </div>

          {/* Number of Reviewers */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Number of Reviewers</h3>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="1"
                max="20"
                value={reviewers}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-600 rounded-lg"
              />
              <span className="text-blue-500 font-semibold">
                {reviewers} Reviewers
              </span>
            </div>
          </div>

          {/* Choose Your Adventure */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Choose Your Adventure
            </h3>
            <div className="flex space-x-4">
              <div
                className={`p-2 rounded-lg cursor-pointer border-2 ${
                  adventure === "self"
                    ? "border-blue-500"
                    : "border-transparent hover:border-gray-500"
                }`}
                onClick={() => chooseAdventure("self")}
              >
                Run Yourself
              </div>
              <div
                className={`p-2 rounded-lg cursor-pointer border-2 ${
                  adventure === "expert"
                    ? "border-blue-500"
                    : "border-transparent hover:border-gray-500"
                }`}
                onClick={() => chooseAdventure("expert")}
              >
                Expert Help
              </div>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg">
          <p className="text-gray-400 text-sm mb-2">Price of Study is</p>
          <h1 className="text-5xl font-bold">${price}</h1>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
          Reset
        </button>
        <button className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600">
          Sign up & launch
        </button>
      </div>
      <p className="text-gray-400 text-sm mt-2 text-center">
        No credit card until you launch
      </p>
    </div>
  );
};

export default SubscriptionPlan;
