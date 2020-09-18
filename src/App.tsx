import React from 'react';

// import from locals
import AppRoutes from './pages/AppRoutes';
import AppHeader from 'aliasComps/AppHeader';

const App: React.FC = () => {

  return (
    <div>
      <AppHeader />
      <AppRoutes />
    </div>
  )
}

export default App;