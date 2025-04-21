import React, { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    document.title = "Direito de Resistência Constitucional";
  }, []);

  return <Home />;
}

export default App;