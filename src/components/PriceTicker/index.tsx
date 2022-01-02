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

  useEffect(() => {
    const pricer: MyPricer = new MyPricer()

    pricer.getCoinPrice(source, destination)
      .then((val) => {
        setPrice(val.Price)
      })
      .catch((error) => {
        console.error(error)
      })
  })
  return (
    <div className="container-price-ticker" style={{margin: 10}}>
      <h2>{coinName}</h2>
      <h3 className="price-title">{price}</h3>
    </div>
  );
}

export default PriceTicker;
