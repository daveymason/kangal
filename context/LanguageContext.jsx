import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('english');
    const value = {
      language,
      setLanguage
    };
    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    );
  }

export default LanguageProvider;
