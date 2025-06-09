// src/hooks/usePatients.js
import { useState, useEffect } from 'react';
import { fetchPatients } from '../services/api';
import { useDebounce } from './useDebounce';
import { ITEMS_PER_PAGE } from '../utils/constants';

export const usePatients = () => {
    const [patients, setPatients] = useState([]);
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // State for filtering, sorting, and pagination
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    // Effect for fetching initial data
    useEffect(() => {
        setLoading(true);
        fetchPatients().then(data => {
            setPatients(data);
            setLoading(false);
        });
    }, []);

    // Effect for filtering and sorting whenever dependencies change
    useEffect(() => {
        let processedPatients = [...patients];

        // Apply search filter
        if (debouncedSearchTerm) {
            processedPatients = processedPatients.filter(patient =>
                patient.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                patient.email.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                patient.phone_number.includes(debouncedSearchTerm)
            );
        }

        // Apply medical issue filters
        if (selectedFilters.length > 0) {
            processedPatients = processedPatients.filter(patient =>
                selectedFilters.includes(patient.medical_issue)
            );
        }

        // Apply sorting
        processedPatients.sort((a, b) => {
            const aValue = typeof a[sortBy] === 'string' ? a[sortBy].toLowerCase() : a[sortBy];
            const bValue = typeof b[sortBy] === 'string' ? b[sortBy].toLowerCase() : b[sortBy];

            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredPatients(processedPatients);
        setCurrentPage(1); // Reset to first page on new filter/sort
    }, [patients, debouncedSearchTerm, selectedFilters, sortBy, sortOrder]);
    
    // Handlers
    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
    };
    
    const handleFilterToggle = (filter) => {
        setSelectedFilters(prev => 
          prev.includes(filter) 
            ? prev.filter(f => f !== filter)
            : [...prev, filter]
        );
    };

    const removeFilter = (filter) => {
        setSelectedFilters(prev => prev.filter(f => f !== filter));
    };

    const clearAllFilters = () => {
        setSelectedFilters([]);
    };

    // Pagination Logic
    const totalPages = Math.ceil(filteredPatients.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPatients = filteredPatients.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return {
        loading,
        filteredPatients,
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
        totalResults: filteredPatients.length
    };
};