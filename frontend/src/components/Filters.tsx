import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Filters = ({ isVisible }: { isVisible: boolean }) => {
  const [maxValue, setMaxValue] = useState("0");
  const [minValue, setMinValue] = useState("0");
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const filterByPriceRange = () => {
    setQuery(`/filter/gte=${minValue}&lte=${maxValue}&&price`);
    navigate(query);
  };

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10}}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn" }}
          className="bg-gray-200 dark:bg-gray-800 p-3 my-4 rounded-md"
        >
          <div className="flex justify-between sm:flex-row flex-col">
            <div className="sm:w-1/2  flex flex-col gap-2 sm:pb-0 pb-4">
              <label htmlFor="minRange">
                Minium Price
                <span className="pl-2 text-green-500 dark:text-green-400">
                  ${minValue}
                </span>
              </label>
              <input
                type="range"
                className=" h-1 sm:w-1/2 cursor-pointer appearance-none rounded-lg border-transparent bg-indigo-500"
                id="minRange"
                max={500}
                min={0}
                step={10}
                value={minValue}
                onChange={(e) => setMinValue(e.target.value)}
              />
            </div>
            <div className="sm:w-1/2 flex flex-col gap-2 sm:pb-0 pb-4">
              <label htmlFor="maxRange">
                Maximum Price
                <span className="pl-2 text-green-500 dark:text-green-400">
                  ${maxValue}
                </span>
              </label>
              <input
                type="range"
                className=" h-1 sm:w-1/2 cursor-pointer appearance-none rounded-lg border-transparent bg-indigo-500"
                id="maxRange"
                max={500}
                min={0}
                step={10}
                value={maxValue}
                onChange={(e) => setMaxValue(e.target.value)}
              />
            </div>
            <button
              className="bg-indigo-500 text-white font-sans dark:bg-indigo-600 py-1 px-4 rounded hover:bg-indigo-700 disabled:bg-red-500"
              onClick={filterByPriceRange}
            >
              Search
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Filters;
