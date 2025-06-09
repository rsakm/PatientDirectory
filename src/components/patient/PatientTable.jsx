// src/components/patient/PatientTable.jsx
import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Badge from '../common/Badge';
import { getMedicalIssueColor } from '../../utils/helpers';

const SortIcon = ({ field, sortBy, sortOrder }) => {
  if (sortBy !== field) return null;
  return sortOrder === 'asc' ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />;
};

const TableHeader = ({ children, field, handleSort, sortBy, sortOrder }) => (
  <th
    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
    onClick={() => handleSort(field)}
  >
    <div className="flex items-center">
      {children}
      <SortIcon field={field} sortBy={sortBy} sortOrder={sortOrder} />
    </div>
  </th>
);

const PatientTable = ({ patients, handleSort, sortBy, sortOrder }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <TableHeader field="name" {...{ handleSort, sortBy, sortOrder }}>Name</TableHeader>
              <TableHeader field="age" {...{ handleSort, sortBy, sortOrder }}>Age</TableHeader>
              <TableHeader field="medical_issue" {...{ handleSort, sortBy, sortOrder }}>Medical Issue</TableHeader>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ID-{String(patient.id).padStart(4, '0')}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src={patient.image} alt={patient.name} />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                      <div className="text-sm text-gray-500">{patient.address}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className="bg-blue-100 text-blue-800">Age {patient.age}</Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className={getMedicalIssueColor(patient.medical_issue)}>{patient.medical_issue}</Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <div>{patient.phone_number}</div>
                  <div>{patient.email}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientTable;