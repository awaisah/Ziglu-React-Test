import React, { useState } from 'react';
import './App.css';
import PricesSection from './components/PricesSection'
import AccountSection from './components/AccountSection'
import ExchangeSection from './components/ExchnageSection';
import Context from './context/Context'

import { Bank } from './util/bank'
import { MyPricer } from './util/Pricer'
import { AssetExchange } from './util/Exchange'
import PreviousTrades from './components/PreviousTrades';

const bank = new Bank();
const pricer = new MyPricer()
const exchange = new AssetExchange(pricer, bank)

const App = () => {

  const [val, setVal] = useState(1)

  return (
    <Context.Provider value={{ bank, pricer, exchange, val, setVal }}>
      <div className="App">
        <PricesSection />
        <AccountSection />
        <ExchangeSection />
        <PreviousTrades />
      </div>
  </Context.Provider>
  );
}

export default App;
