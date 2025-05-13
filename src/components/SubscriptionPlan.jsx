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

  // Reset form to initial state
  const resetForm = () => {
    setStudyLength("");
    setAdventure("");
    setReviewers(0);
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
    <div className="max-w-6xl mx-auto mt-[1rem]">
      {/* Header label */}
      <div className="text-center mb-2">
        <div className="inline-block bg-gray-800 text-white rounded-b-lg px-8 py-1">
          <p className="uppercase text-xs">PAY ONLY FOR WHAT YOU USE</p>
        </div>
      </div>

      <div className="bg-gray-900 text-white rounded-lg shadow-lg relative overflow-hidden">
        <div className="p-8 pt-12 grid grid-cols-3 gap-6">
          {/* Left side options */}
          <div className="col-span-2 space-y-10">
            {/* Study Length */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Study Length</h3>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <div
                    className={`relative p-4 rounded-lg border cursor-pointer ${
                      studyLength === "short"
                        ? "border-blue-500"
                        : "border-gray-700"
                    }`}
                    onClick={() => chooseStudyLength("short")}
                  >
                    {studyLength === "short" && (
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 rounded-full bg-blue-500 ring-2 ring-white"></div>
                      </div>
                    )}
                    <h4 className="font-medium">Short & Focused</h4>
                    <p className="text-sm text-gray-400 mt-2">Up to 10 mins</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Up to 5 questions or tasks
                    </p>
                  </div>
                </div>
                <div className="w-1/2">
                  <div
                    className={`relative p-4 rounded-lg border cursor-pointer ${
                      studyLength === "long"
                        ? "border-blue-500"
                        : "border-gray-700"
                    }`}
                    onClick={() => chooseStudyLength("long")}
                  >
                    {studyLength === "long" && (
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 rounded-full bg-blue-500 ring-2 ring-white"></div>
                      </div>
                    )}
                    <h4 className="font-medium">Long & Detailed</h4>
                    <p className="text-sm text-gray-400 mt-2">Up to 20 mins</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Up to 12 questions or tasks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Number of Reviewers */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Number of reviewers
              </h3>
              <div className="relative">
                <div className="h-1 bg-gray-700 rounded-full w-full">
                  <div
                    className="h-1 bg-blue-500 rounded-full absolute left-0"
                    style={{ width: `${(reviewers / 20) * 100}%` }}
                  ></div>
                </div>
                <div
                  className="absolute -top-1"
                  style={{ left: `${(reviewers / 20) * 100}%` }}
                >
                  <div className="w-3 h-3 bg-white rounded-full border-2 border-blue-500 transform -translate-x-1/2"></div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={reviewers}
                  onChange={handleSliderChange}
                  className="absolute top-0 w-full h-1 opacity-0 cursor-pointer"
                />
                <div className="mt-4 text-gray-400">{reviewers} Reviewers</div>
              </div>
            </div>

            {/* Choose Your Adventure */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Choose your adventure
              </h3>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <div
                    className={`relative p-4 rounded-lg border cursor-pointer ${
                      adventure === "self"
                        ? "border-blue-500"
                        : "border-gray-700"
                    }`}
                    onClick={() => chooseAdventure("self")}
                  >
                    {adventure === "self" && (
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 rounded-full bg-blue-500 ring-2 ring-white"></div>
                      </div>
                    )}
                    <h4 className="font-medium">Run the study myself</h4>
                    <p className="text-sm text-gray-400 mt-2">
                      Do It Yourself -
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Watch feedback, create your own insights and solutions.
                    </p>
                  </div>
                </div>
                <div className="w-1/2">
                  <div
                    className={`relative p-4 rounded-lg border cursor-pointer ${
                      adventure === "expert"
                        ? "border-blue-500"
                        : "border-gray-700"
                    }`}
                    onClick={() => chooseAdventure("expert")}
                  >
                    {adventure === "expert" && (
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 rounded-full bg-blue-500 ring-2 ring-white"></div>
                      </div>
                    )}
                    <h4 className="font-medium">Have an expert do it</h4>
                    <p className="text-sm text-gray-400 mt-2">Done For You -</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Experts analyze feedback for insights and advise
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price panel */}
          <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg">
            <p className="text-blue-400 uppercase text-sm mb-2">
              PRICE OF STUDY IS
            </p>
            <h1 className="text-6xl font-bold text-white">${price}</h1>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pb-4">
          <button
            className="flex items-center justify-center px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            onClick={resetForm}
          >
            <span className="mr-2">⟳</span> Reset
          </button>
          <button className="px-2 py-1 bg-yellow-500 text-black rounded-sm hover:bg-yellow-400 font-medium">
            Sign up and launch in minutes
          </button>
        </div>
        <div className="text-center pb-4 text-gray-400 text-sm">
          No credit card required until you're ready to launch your study.
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
