import { FC, useState } from 'react';
import './style.css';
import { Asset } from '../../util/Assets';
import PriceTicker from '../PriceTicker';

interface IPricesBoxProps {

}

const PricesBox: FC<IPricesBoxProps> = ({ }) => {

  const [fromUSD, setFromUSD] = useState(true)
  return (
    <div className="container-prices-box">
      {fromUSD ?
        <>
          <PriceTicker source={Asset.USD} destination={Asset.BTC} coinName="USD/BTC" />
          <PriceTicker source={Asset.USD} destination={Asset.ETH} coinName="USD/ETH" />
          <PriceTicker source={Asset.USD} destination={Asset.ADA} coinName="USD/ADA" />
        </> :
        <>
          <PriceTicker source={Asset.BTC} destination={Asset.USD} coinName="BTC/USD" />
          <PriceTicker source={Asset.ETH} destination={Asset.USD} coinName="ETH/USD" />
          <PriceTicker source={Asset.ADA} destination={Asset.USD} coinName="ADA/USD" />
        </>}
    </div>
  );
}

export default PricesBox;
