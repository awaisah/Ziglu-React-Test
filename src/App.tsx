import React, { } from 'react';
import './App.css';
import PricesSection from './components/PricesSection'
import AccountSection from './components/AccountSection'

const App = () => {
  return (
      <div className="App">
        <PricesSection />
        <AccountSection />
      </div>
  );
}

export default App;
