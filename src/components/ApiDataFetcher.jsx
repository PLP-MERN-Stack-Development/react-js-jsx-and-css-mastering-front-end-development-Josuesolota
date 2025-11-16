import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

// Hook personalizado para buscar dados de API
const useApiData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (isMounted) {
          setData(result.slice(0, 10)); // Limita a 10 itens para simplificar a exibição
        }
      } catch (e) {
        if (isMounted) {
          setError(e.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

const ApiDataFetcher = () => {
  const { data: posts, loading, error } = useApiData(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const [searchTerm, setSearchTerm] = useState('');

  // Implementa a funcionalidade de pesquisa/filtro
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <Card title="API Data (JSONPlaceholder)">
        <div className="flex items-center justify-center py-10">
          <svg className="animate-spin h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24">
            {/* Spinner SVG */}
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p>Loading posts...</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="API Data (JSONPlaceholder)">
        <p className="text-red-500">Error fetching data: {error}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Could not connect to JSONPlaceholder API.
        </p>
      </Card>
    );
  }

  return (
    <Card title="API Data (JSONPlaceholder)">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or body..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
      />

      {filteredPosts.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 text-center py-4">
          No posts found matching "{searchTerm}"
        </p>
      )}

      {/* List/Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg hover:shadow-md transition-shadow dark:border-gray-700"
          >
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {post.title}
            </h3>
            <p className="text-sm line-clamp-3">{post.body}</p>
            <span className="text-xs text-gray-400 block mt-2">Post ID: {post.id}</span>
          </div>
        ))}
      </div>
      {/* Pagination/Load More - Simplificado */}
      <div className="mt-4 text-center">
        <Button variant="secondary" disabled={true} size="sm">
          Load More (Feature Placeholder)
        </Button>
      </div>
    </Card>
  );
};

export default ApiDataFetcher;