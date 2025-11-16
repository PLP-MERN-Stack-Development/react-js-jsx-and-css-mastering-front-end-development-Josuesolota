import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Assumindo que você usa heroicons

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              PLP Manager
            </span>
          </div>
          <div className="flex items-center">
            {/* Theme Switcher Button */}
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;