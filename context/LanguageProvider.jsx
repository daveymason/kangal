import React, { useState } from 'react';
import { LanguageContext } from 'context/LanguageContext';

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('english');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
