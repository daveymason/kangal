import React, { createContext, useState } from 'react';

// Create the Language context
export const LanguageContext = createContext();

// Language provider component
function LanguageProvider({ children }) {
  // State to hold the current language
  const [language, setLanguage] = useState('english');

  // Provider value object
  const value = {
    language,
    setLanguage
  };

  // Render the provider with the value object
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
