import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <p className="text-gray-500 animate-pulse">Loading...</p>
    </div>
  );
};

export default Loading;
