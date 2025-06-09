// src/components/patient/SearchAndFilters.jsx
import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import Input from '../common/Input';
import { MEDICAL_ISSUES } from '../../utils/constants';

const SearchAndFilters = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  sortOrder,
  setSortBy,
  setSortOrder,
  selectedFilters,
  handleFilterToggle,
  removeFilter,
  clearAllFilters,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, email, or phone..."
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </button>
        <select
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [field, order] = e.target.value.split('-');
            setSortBy(field);
            setSortOrder(order);
          }}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="age-asc">Age Low-High</option>
          <option value="age-desc">Age High-Low</option>
          <option value="medical_issue-asc">Medical Issue A-Z</option>
          <option value="medical_issue-desc">Medical Issue Z-A</option>
        </select>
      </div>
      {showFilters && (
        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by Medical Issue:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {MEDICAL_ISSUES.map(issue => (
              <label key={issue} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(issue)}
                  onChange={() => handleFilterToggle(issue)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{issue}</span>
              </label>
            ))}
          </div>
        </div>
      )}
      {selectedFilters.length > 0 && (
        <div className="border-t pt-4 mt-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-600">Active Filters:</span>
            {selectedFilters.map(filter => (
              <span key={filter} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                {filter}
                <button onClick={() => removeFilter(filter)} className="hover:bg-blue-200 rounded p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            <button onClick={clearAllFilters} className="text-sm text-gray-500 hover:text-gray-700">Clear all</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilters;