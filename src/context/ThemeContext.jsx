import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Cria o Contexto
const ThemeContext = createContext();

// 2. Custom Hook para usar o Contexto
export const useTheme = () => useContext(ThemeContext);

// 3. Provedor do Contexto
export const ThemeProvider = ({ children }) => {
  // Inicializa o tema com base na preferência do sistema ou 'light'
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark;
  });

  // Efeito para aplicar a classe 'dark' ao <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};