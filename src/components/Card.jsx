import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-xl p-6 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;