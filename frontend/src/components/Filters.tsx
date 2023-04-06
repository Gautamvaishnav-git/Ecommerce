import { useState } from "react";

const Filters = ({ isVisible }: { isVisible: boolean }) => {
  const [maxValue, setMaxValue] = useState("0");
  const [minValue, setMinValue] = useState("0");
  return (
    <>
      {isVisible && (
        <div className="bg-gray-200 dark:bg-gray-800 p-3 my-4 rounded-md">
          <div className="flex justify-between">
            <div className="w-1/2 flex flex-col gap-2">
              <label htmlFor="minRange">
                Minium Price
                <span className="pl-2 text-green-500 dark:text-green-400">
                  ${minValue}
                </span>
              </label>
              <input
                type="range"
                className=" h-1 w-1/2 cursor-pointer appearance-none rounded-lg border-transparent bg-indigo-500"
                id="minRange"
                max={500}
                min={0}
                step={10}
                value={minValue}
                onChange={(e) => setMinValue(e.target.value)}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <label htmlFor="maxRange">
                Maximum Price{" "}
                <span className="pl-2 text-green-500">${maxValue}</span>
              </label>
              <input
                type="range"
                className=" h-1 w-1/2 cursor-pointer appearance-none rounded-lg border-transparent bg-indigo-500"
                id="maxRange"
                max={500}
                min={0}
                step={10}
                value={maxValue}
                onChange={(e) => setMaxValue(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white font-sans dark:bg-indigo-600 py-1 px-4 rounded hover:bg-indigo-700"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Filters;
