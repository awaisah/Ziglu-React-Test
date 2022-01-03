import React, { useState, Fragment } from 'react';
// import './App.css';
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
      <div className="min-h-full">
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-bold leading-tight text-gray-900">Ziglu React Test</h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">
                <PricesSection />
                <hr className="mt-5 mb-5" />
                <AccountSection />
                <hr className="mt-5 mb-5" />
                <ExchangeSection />
                <hr className="mt-5 mb-5" />
                <PreviousTrades />
              </div>
            </div>
          </main>
        </div>
      </div>
    </Context.Provider >

  )
}

export default App;
