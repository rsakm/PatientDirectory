// src/components/common/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default Loader;