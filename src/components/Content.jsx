import React from "react";
import { useParams } from "react-router-dom";

function Content() {
  const { topic } = useParams();
  const decodedTopic = decodeURIComponent(topic || "Unknown Topic");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{decodedTopic}</h1>
      <p className="text-lg text-gray-500 animate-pulse">Coming Soon...</p>
    </div>
  );
}

export default Content;
