import React from 'react';
import './App.css';

import { ShopProvider } from '@/context';

import MainPage from './screens/MainPage';

function App() {
  return (
    <ShopProvider>
      <div className="App">
        <MainPage />
      </div>
    </ShopProvider>
  );
}

export default App;
