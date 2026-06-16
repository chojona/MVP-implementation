import { useState } from "react";
import matchList from "../../data/sample_carpool_data";

export default function CarpoolMatch() {
  // Keeps track of which match is currently being shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gets the current match from the sample data
  const currentMatch = matchList[currentIndex];

  // Moves to the next carpool match
  function goToNextMatch() {
    setCurrentIndex(currentIndex + 1);
  }

  // Shows this message after all matches have been reviewed
  if (!currentMatch) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">No More Matches</h2>
          <p className="mt-2 text-gray-600">
            You have reviewed all available carpool matches.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Carpool Match</h1>
          <p className="text-sm text-gray-500">
            Review one recommendation at a time
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Profile {currentIndex + 1} of {matchList.length} 
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <h2 className="text-xl font-semibold">
            {currentMatch.firstName} {currentMatch.lastName}
          </h2>

          <p className="mt-1 text-gray-600">{currentMatch.employer}</p>

          <div className="mt-5 space-y-3 text-sm">
            <div>
              <p className="font-medium">Start Location</p>
              <p className="text-gray-600">{currentMatch.startLocation}</p>
            </div>

            <div>
              <p className="font-medium">End Location</p>
              <p className="text-gray-600">{currentMatch.endLocation}</p>
            </div>

            <div>
              <p className="font-medium">Distance From Your Start</p>
              <p className="text-gray-600">
                {currentMatch.startDistanceDelta} miles
              </p>
            </div>

            <div>
              <p className="font-medium">Distance From Your End</p>
              <p className="text-gray-600">
                {currentMatch.endDistanceDelta} miles
              </p>
            </div>
          </div>
        </div>

        {/* For this MVP, both buttons just move to the next match */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={goToNextMatch}
            className="rounded bg-red-500 px-4 py-2 text-white"
          >
            👎 Thumbs Down
          </button>

          <button
            onClick={goToNextMatch}
            className="rounded bg-green-500 px-4 py-2 text-white"
          >
            👍 Thumbs Up
          </button>
        </div>
      </div>
    </div>
  );
}