// src/App.jsx
import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Loader from './components/common/Loader';
import Button from './components/common/Button';
import ViewToggle from './components/patient/ViewToggle';
import SearchAndFilters from './components/patient/SearchAndFilters';
import PatientTable from './components/patient/PatientTable';
import PatientCard from './components/patient/PatientCard';
import Pagination from './components/pagination/Pagination';
import { usePatients } from './hooks/usePatients';
import { ITEMS_PER_PAGE } from './utils/constants';

const PatientDirectory = () => {
  const [view, setView] = useState('table');
  const {
    loading,
    currentPatients,
    searchTerm,
    setSearchTerm,
    selectedFilters,
    handleFilterToggle,
    removeFilter,
    clearAllFilters,
    sortBy,
    sortOrder,
    handleSort,
    setSortBy,
    setSortOrder,
    currentPage,
    setCurrentPage,
    totalPages,
    totalResults,
  } = usePatients();

  if (loading) {
    return <Loader />;
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  
  return (
    <Layout>
      {/* Directory Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Patient Directory</h1>
            <p className="text-blue-100 mt-1">
              {totalResults} Patient{totalResults !== 1 ? 's' : ''} Found
            </p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-white text-blue-600 hover:bg-gray-50">+ Add</Button>
            <Button className="bg-blue-700 text-white hover:bg-blue-800">📄 Download PDF Report</Button>
          </div>
        </div>
      </div>
      
      <ViewToggle view={view} setView={setView} />
      
      <SearchAndFilters {...{
          searchTerm, setSearchTerm, sortBy, sortOrder, setSortBy, setSortOrder,
          selectedFilters, handleFilterToggle, removeFilter, clearAllFilters
      }} />

      {currentPatients.length > 0 ? (
        <>
          {view === 'table' ? (
            <PatientTable patients={currentPatients} {...{handleSort, sortBy, sortOrder}} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
              {currentPatients.map(patient => <PatientCard key={patient.id} patient={patient} />)}
            </div>
          )}
          <Pagination {...{ currentPage, totalPages, setCurrentPage, totalResults, startIndex, endIndex: startIndex + ITEMS_PER_PAGE }} />
        </>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No patients found</h3>
          <p className="text-gray-600">Try adjusting your search or filters.</p>
        </div>
      )}
    </Layout>
  );
};

// Renaming the exported component to App for convention
const App = () => <PatientDirectory />;

export default App;