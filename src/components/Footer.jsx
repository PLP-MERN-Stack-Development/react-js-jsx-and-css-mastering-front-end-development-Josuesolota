import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Componente de Rodapé da Aplicação
 */
const Footer = () => {
  // Nota: O useTheme foi mantido, mas não está sendo usado diretamente no JSX
  // para mudar estilos, apenas para a importação. Você pode removê-lo se não for usar.
  // const { isDarkMode } = useTheme(); 

  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;