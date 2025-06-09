// src/components/patient/ViewToggle.jsx
import React from 'react';

const ViewToggle = ({ view, setView }) => {
  const baseClasses = 'px-4 py-2 rounded-md text-sm font-medium transition-colors';
  const activeClasses = 'bg-white text-gray-900 shadow-sm';
  const inactiveClasses = 'text-gray-600 hover:text-gray-900';

  return (
    <div className="flex bg-gray-100 rounded-lg p-1 mb-6 w-fit">
      <button
        onClick={() => setView('table')}
        className={`${baseClasses} ${view === 'table' ? activeClasses : inactiveClasses}`}
      >
        Table View
      </button>
      <button
        onClick={() => setView('card')}
        className={`${baseClasses} ${view === 'card' ? activeClasses : inactiveClasses}`}
      >
        Card View
      </button>
    </div>
  );
};

export default ViewToggle;