// src/utils/helpers.js

export const getMedicalIssueColor = (issue) => {
    const colors = {
      'Fever': 'bg-red-100 text-red-800',
      'Headache': 'bg-orange-100 text-orange-800',
      'Sore throat': 'bg-yellow-100 text-yellow-800',
      'Sprained ankle': 'bg-green-100 text-green-800',
      'Rash': 'bg-pink-100 text-pink-800',
      'Ear infection': 'bg-blue-100 text-blue-800',
      'Sinusitis': 'bg-gray-100 text-gray-800'
    };
    return colors[issue] || 'bg-gray-100 text-gray-800';
};