// src/components/patient/PatientCard.jsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Badge from '../common/Badge';
import { getMedicalIssueColor } from '../../utils/helpers';

const PatientCard = ({ patient }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col">
      <div className="flex items-center space-x-3 mb-4">
        <img className="h-12 w-12 rounded-full" src={patient.image} alt={patient.name} />
        <div>
          <h3 className="text-lg font-medium text-gray-900">{patient.name}</h3>
          <p className="text-sm text-gray-500">ID-{String(patient.id).padStart(4, '0')}</p>
        </div>
        <Badge className="bg-blue-100 text-blue-800 ml-auto">Age {patient.age}</Badge>
      </div>

      <div className="mb-4">
        <Badge className={getMedicalIssueColor(patient.medical_issue)}>{patient.medical_issue}</Badge>
      </div>

      <div className="space-y-2 text-sm text-gray-600 mt-auto">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span>{patient.address}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 flex-shrink-0" />
          <span>{patient.phone_number}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4 flex-shrink-0" />
          <span>{patient.email}</span>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;