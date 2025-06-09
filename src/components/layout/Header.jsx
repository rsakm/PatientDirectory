// src/components/layout/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h2 className="text-xl font-bold text-gray-900">Healthcare Portal</h2>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;