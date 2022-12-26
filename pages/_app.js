import '@styles/globals.css';
import LanguageProvider from 'context/LanguageContext';

function Application({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default Application;
