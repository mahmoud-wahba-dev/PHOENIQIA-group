import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './i18n';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { i18n } = useTranslation();
  const [langLoaded, setLangLoaded] = useState(false);

  useEffect(() => {
    // On mount, check for saved language in localStorage
    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang).then(() => setLangLoaded(true));
    } else {
      setLangLoaded(true);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!langLoaded) return;
    // Set direction and language attributes
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    // Save language to localStorage
    localStorage.setItem('lang', i18n.language);
  }, [i18n.language, langLoaded]);

  if (!langLoaded) return null; // Prevent render until language is set

  return (
    <Router>
      <div className="App">
          <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Replace any usage of 'text-blue-100' with 'text-secondary-soft' in your JSX components
// Example:
// <div className="text-blue-100"> becomes <div className="text-secondary-soft">