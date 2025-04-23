
import React from 'react';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  return (
    <div className="flex items-center">
      <Globe className="w-4 h-4 mr-2" />
      <span className="text-sm text-gray-600">English</span>
    </div>
  );
};

export default LanguageSelector;
