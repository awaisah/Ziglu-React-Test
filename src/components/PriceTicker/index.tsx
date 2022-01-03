import { FC, useEffect, useState } from 'react';
import './style.css';
import { Asset } from '../../util/Assets';
import { MyPricer } from '../../util/Pricer';

interface IPriceTickerProps {
  source: Asset
  destination: Asset, 
  coinName: String
}

const PriceTicker: FC<IPriceTickerProps> = ({source, destination, coinName}) => {
  const [price, setPrice] = useState(0.0)
  const [showUpdated, setShowUpdated] = useState(false)

  // This useEffect is run whenever the source or destination changes.
  // Change the showUpdated state so the colour changes for 500ms
  useEffect(() => {
    setShowUpdated(true)
    setTimeout(() => {
      setShowUpdated(false)
    }, 500)
  }, [price])

  useEffect(() => {
    setPrice(0.0)
    const updatePrice = () => {
      const pricer: MyPricer = new MyPricer()
    
      pricer.getCoinPrice(source, destination)
        .then((val) => {
          setPrice(val.Price)
        })
        .catch((error) => {
          console.error(error)
        })
    }
    // Create a timeout which refreshes the price every 5 seconds
    updatePrice() 
    const interval = setInterval(updatePrice, 5000);

    return () => {
      clearInterval(interval)
    }
  }, [source, destination])

  return (
    <div className="container-price-ticker" style={{margin: 10}}>
      <h2>{coinName}</h2>
      <h3 className={"price-title" + (showUpdated ? " title-green" : "")}>{price}</h3>
    </div>
  );
}

export default PriceTicker;
