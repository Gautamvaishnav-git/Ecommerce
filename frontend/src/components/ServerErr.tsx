import React from "react";

const ServerErr = () => {
  return (
    <div className="container mx-auto pt-4 flex flex-col gap-6">
      <p className="text-white text-3xl font-bold text-center">
        Fetch Error occur :(
      </p>
      <button
        className="bg-indigo-500 rounded py-2 px-3 text-white mx-auto border border-transparent hover:border-indigo-500 hover:bg-transparent duration-200"
        onClick={() => location.reload()}
      >
        Refresh
      </button>
    </div>
  );
};

export default ServerErr;
