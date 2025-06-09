// src/components/common/Badge.jsx
import React from 'react';

const Badge = ({ children, className }) => {
  return (
    <span className={`px-2 py-1 rounded text-sm font-medium ${className}`}>
      {children}
    </span>
  );
};

export default Badge;