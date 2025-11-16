import React, { useState } from 'react';
import './App.css';

// 1. Importar o Provedor de Contexto do Tema
import { ThemeProvider } from './context/ThemeContext';

// 2. Importar o Componente de Layout
// Assume que você criou 'src/layouts/Layout.jsx'
import Layout from './layouts/Layout'; 

// 3. Importar os Componentes Principais
// Assume que você tem 'src/components/TaskManager.jsx'
import TaskManager from './components/TaskManager'; 
// Assume que você criou 'src/components/ApiDataFetcher.jsx'
import ApiDataFetcher from './components/ApiDataFetcher'; 
// Assume que você criou 'src/components/Card.jsx' (Opcional, mas útil)
import Card from './components/Card'; 

// Componente de Conteúdo Principal
function AppContent() {
  // O estado 'count' do starter file é removido da UI principal para focar nas Tasks
  const [count, setCount] = useState(0); 

  return (
    // O <div> principal de fundo/tema agora está no componente <Layout>
    <Layout>
      
      {/* Container principal usando grid para responsividade (Task 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Task Manager (Task 3) */}
        <TaskManager />
        
        {/* API Integration (Task 4) */}
        <ApiDataFetcher />
      </div>
      
      {/* O conteúdo original do App.jsx (contador e cabeçalho fixo) 
        foi removido ou simplificado, mas você pode usar o Card para 
        demonstrar reusabilidade de componentes. 
      */}
      <div className="mt-8">
        <Card title="Extra Component Test: Counter">
           <p className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
              Demonstração de um estado simples (useState).
            </p>
            <div className="flex items-center justify-center gap-4">
              {/* Note: Usei botões simples aqui, mas você pode usar o componente <Button> */}
              <button
                onClick={() => setCount((c) => c - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount((c) => c + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>
        </Card>
      </div>
      
    </Layout>
  );
}

// Envolve a aplicação principal com o ThemeProvider (Task 3: useContext, Task 5: Dark Mode)
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;