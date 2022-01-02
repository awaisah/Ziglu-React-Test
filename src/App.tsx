import React, {useEffect} from 'react';
import './App.css';
import { Asset } from './util/Assets';
import { MyPricer } from './util/Pricer';

const App = () => {
  useEffect(() => {
    const pricer: MyPricer = new MyPricer()

    pricer.getCoinPrice(Asset.USD, Asset.BTC)
    .then((val) => {
      console.log(val)
    })
    
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
