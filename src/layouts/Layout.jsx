import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();
  
  // A classe 'dark' é gerenciada no <html> pelo ThemeProvider, mas as cores de fundo
  // precisam ser definidas na aplicação para garantir a transição.
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;